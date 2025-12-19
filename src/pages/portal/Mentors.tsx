import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Linkedin, 
  Calendar,
  MessageSquare,
  Star,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Mentor {
  id: string;
  full_name: string;
  bio: string | null;
  photo_url: string | null;
  expertise_areas: string[];
  industry_experience: string[];
  linkedin_url: string | null;
  is_available: boolean;
}

interface MeetingRequest {
  mentor_id: string;
  mentor_name: string;
}

export default function Mentors() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);
  const [meetingRequest, setMeetingRequest] = useState<MeetingRequest | null>(null);
  const [meetingMessage, setMeetingMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, profile } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const { data, error } = await supabase
        .from('mentors')
        .select('*')
        .eq('is_available', true)
        .order('full_name');

      if (error) throw error;
      setMentors(data || []);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get unique expertise areas from all mentors
  const allExpertise = [...new Set(mentors.flatMap(m => m.expertise_areas))].sort();

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = 
      mentor.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise_areas.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = !selectedExpertise || mentor.expertise_areas.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  const handleRequestMeeting = async () => {
    if (!meetingRequest || !user) return;
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('mentor_meetings').insert({
        mentor_id: meetingRequest.mentor_id,
        client_id: user.id,
        company_id: profile?.company_id,
        meeting_notes: meetingMessage,
        status: 'pending',
      });

      if (error) throw error;

      toast({
        title: 'Meeting requested!',
        description: `Your request to meet with ${meetingRequest.mentor_name} has been sent.`,
      });

      setMeetingRequest(null);
      setMeetingMessage('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send meeting request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PortalLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Mentor & Advisor Network</h1>
          <p className="text-muted-foreground">
            Connect with experienced mentors to guide your startup journey.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, expertise, or industry..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Expertise Pills */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedExpertise === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedExpertise(null)}
              className="rounded-full"
            >
              All Expertise
            </Button>
            {allExpertise.slice(0, 10).map(expertise => (
              <Button
                key={expertise}
                variant={selectedExpertise === expertise ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedExpertise(expertise === selectedExpertise ? null : expertise)}
                className="rounded-full"
              >
                {expertise}
              </Button>
            ))}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : filteredMentors.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">No mentors found</h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, i) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 rounded-xl">
                      <AvatarImage src={mentor.photo_url || ''} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg rounded-xl">
                        {mentor.full_name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {mentor.full_name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                          <CheckCircle size={10} className="mr-1" />
                          Available
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {mentor.bio && (
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {mentor.bio}
                    </p>
                  )}

                  {/* Expertise */}
                  {mentor.expertise_areas.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise_areas.slice(0, 4).map(area => (
                          <Badge key={area} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {mentor.expertise_areas.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{mentor.expertise_areas.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Industry */}
                  {mentor.industry_experience.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Industry Experience</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.industry_experience.slice(0, 3).map(industry => (
                          <Badge key={industry} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 bg-secondary/30 border-t border-border flex items-center justify-between">
                  {mentor.linkedin_url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-muted-foreground hover:text-[#0077b5]"
                    >
                      <a href={mentor.linkedin_url} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={16} className="mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    onClick={() =>
                      setMeetingRequest({ mentor_id: mentor.id, mentor_name: mentor.full_name })
                    }
                    className="ml-auto"
                  >
                    <Calendar size={14} className="mr-2" />
                    Request Meeting
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Meeting Request Dialog */}
        <Dialog open={!!meetingRequest} onOpenChange={() => setMeetingRequest(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request Meeting with {meetingRequest?.mentor_name}</DialogTitle>
              <DialogDescription>
                Send a meeting request to connect with this mentor. Include context about what you'd like to discuss.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="message">What would you like to discuss?</Label>
                <Textarea
                  id="message"
                  placeholder="I'm looking for guidance on fundraising strategy, specifically around..."
                  value={meetingMessage}
                  onChange={e => setMeetingMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setMeetingRequest(null)}>
                  Cancel
                </Button>
                <Button onClick={handleRequestMeeting} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageSquare size={16} className="mr-2" />
                      Send Request
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
}
