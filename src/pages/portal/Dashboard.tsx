import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Pin, 
  Send,
  TrendingUp,
  Calendar,
  Users,
  BookOpen,
  Plus,
  MoreHorizontal
} from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

interface Post {
  id: string;
  title: string | null;
  content: string;
  post_type: string;
  image_url: string | null;
  tags: string[];
  is_pinned: boolean;
  is_admin_post: boolean;
  likes_count: number;
  comments_count: number;
  created_at: string;
  author: {
    full_name: string;
    avatar_url: string | null;
  } | null;
  company: {
    name: string;
    logo_url: string | null;
  } | null;
  user_liked: boolean;
}

const postTypeColors: Record<string, string> = {
  announcement: 'bg-blue-100 text-blue-700 border-blue-200',
  startup_win: 'bg-green-100 text-green-700 border-green-200',
  program_update: 'bg-purple-100 text-purple-700 border-purple-200',
  event_highlight: 'bg-amber-100 text-amber-700 border-amber-200',
  ecosystem_news: 'bg-teal-100 text-teal-700 border-teal-200',
};

const postTypeLabels: Record<string, string> = {
  announcement: 'Announcement',
  startup_win: 'Startup Win',
  program_update: 'Program Update',
  event_highlight: 'Event',
  ecosystem_news: 'News',
};

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState('');
  const { user, profile } = useAuth();
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
      const { data: postsData, error } = await supabase
        .from('posts')
        .select(`
          *,
          company:companies(name, logo_url)
        `)
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;

      // Fetch author profiles separately
      const authorIds = [...new Set((postsData || []).map(p => p.author_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, full_name, avatar_url')
        .in('user_id', authorIds);

      const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);

      // Check if user liked each post
      let likedPostIds = new Set<string>();
      if (user) {
        const { data: likes } = await supabase
          .from('post_likes')
          .select('post_id')
          .eq('user_id', user.id);
        likedPostIds = new Set(likes?.map(l => l.post_id) || []);
      }

      const postsWithData = (postsData || []).map(post => ({
        ...post,
        author: profileMap.get(post.author_id) || null,
        user_liked: likedPostIds.has(post.id),
      }));

      setPosts(postsWithData as Post[]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('posts-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'posts' },
        () => {
          fetchPosts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const handleLike = async (postId: string, isLiked: boolean) => {
    if (!user) return;

    try {
      if (isLiked) {
        await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('post_likes')
          .insert({ post_id: postId, user_id: user.id });
      }

      setPosts(prev =>
        prev.map(p =>
          p.id === postId
            ? {
                ...p,
                likes_count: isLiked ? p.likes_count - 1 : p.likes_count + 1,
                user_liked: !isLiked,
              }
            : p
        )
      );
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleCreatePost = async () => {
    if (!newPost.trim() || !user) return;

    try {
      const { error } = await supabase.from('posts').insert({
        author_id: user.id,
        content: newPost,
        post_type: 'ecosystem_news',
        company_id: profile?.company_id,
      });

      if (error) throw error;

      setNewPost('');
      toast({
        title: 'Post created!',
        description: 'Your post has been shared with the ecosystem.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create post. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const quickStats = [
    { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'text-blue-500' },
    { label: 'Mentor Sessions', value: '2', icon: Users, color: 'text-purple-500' },
    { label: 'Resources', value: '45+', icon: BookOpen, color: 'text-green-500' },
    { label: 'Ecosystem Growth', value: '+12%', icon: TrendingUp, color: 'text-teal-500' },
  ];

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {profile?.full_name?.split(' ')[0] || 'Founder'}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your ecosystem today.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {quickStats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl border border-border p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-secondary ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Create Post */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border border-border p-4 mb-6"
        >
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profile?.avatar_url || ''} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {profile?.full_name?.[0] || 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Share an update with the ecosystem..."
                value={newPost}
                onChange={e => setNewPost(e.target.value)}
                className="flex-1 border-0 bg-secondary/50 focus-visible:ring-1"
              />
              <Button
                onClick={handleCreatePost}
                disabled={!newPost.trim()}
                size="icon"
                aria-label="Post update"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Feed */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">No posts yet</h3>
              <p className="text-muted-foreground text-sm">
                Be the first to share something with the ecosystem!
              </p>
            </div>
          ) : (
            posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`bg-card rounded-2xl border ${
                  post.is_pinned ? 'border-primary/30 ring-1 ring-primary/20' : 'border-border'
                } overflow-hidden hover:shadow-md transition-shadow`}
              >
                {post.is_pinned && (
                  <div className="bg-primary/5 px-4 py-2 border-b border-primary/20 flex items-center gap-2 text-sm text-primary">
                    <Pin size={14} />
                    <span className="font-medium">Pinned</span>
                  </div>
                )}

                <div className="p-4">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={post.company?.logo_url || post.author?.avatar_url || ''}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {post.company?.name?.[0] || post.author?.full_name?.[0] || 'N'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">
                            {post.company?.name || post.author?.full_name || 'NORCAT Innovation'}
                          </span>
                          {post.is_admin_post && (
                            <Badge variant="secondary" className="text-xs">
                              Official
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${postTypeColors[post.post_type] || ''}`}
                      >
                        {postTypeLabels[post.post_type] || post.post_type}
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
                      </Button>
                    </div>
                  </div>

                  {/* Post Content */}
                  {post.title && (
                    <h3 className="font-semibold text-lg text-foreground mb-2">{post.title}</h3>
                  )}
                  <p className="text-foreground/90 whitespace-pre-wrap mb-3">{post.content}</p>

                  {/* Post Image */}
                  {post.image_url && (
                    <img
                      src={post.image_url}
                      alt="" aria-hidden="true"
                      className="rounded-xl w-full max-h-96 object-cover mb-3"
                    />
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs text-primary hover:text-primary/80 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center gap-1 pt-3 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id, post.user_liked)}
                      className={`gap-2 ${post.user_liked ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart size={18} fill={post.user_liked ? 'currentColor' : 'none'} />
                      {post.likes_count > 0 && <span>{post.likes_count}</span>}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                      <MessageCircle size={18} />
                      {post.comments_count > 0 && <span>{post.comments_count}</span>}
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </PortalLayout>
  );
}
