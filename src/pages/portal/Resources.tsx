import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Download, 
  ExternalLink, 
  FileText, 
  Scale, 
  FolderOpen, 
  DollarSign,
  Users,
  Building,
  Gift,
  Wrench,
  Star,
  Filter
} from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

interface Resource {
  id: string;
  title: string;
  description: string | null;
  category: string;
  file_url: string | null;
  external_url: string | null;
  stage_tags: string[];
  is_featured: boolean;
  download_count: number;
}

const categoryIcons: Record<string, React.ElementType> = {
  pitch_deck: FileText,
  legal_templates: Scale,
  data_room: FolderOpen,
  fundraising: DollarSign,
  customer_discovery: Users,
  government_funding: Building,
  client_perks: Gift,
  tools: Wrench,
};

const categoryLabels: Record<string, string> = {
  pitch_deck: 'Pitch Deck Templates',
  legal_templates: 'Legal Templates',
  data_room: 'Data Room Templates',
  fundraising: 'Fundraising Guides',
  customer_discovery: 'Customer Discovery',
  government_funding: 'Government Funding',
  client_perks: 'Client Perks',
  tools: 'Recommended Tools',
};

const stageLabels: Record<string, string> = {
  idea: 'Idea Stage',
  pre_seed: 'Pre-Seed',
  seed: 'Seed',
  series_a: 'Series A',
  scale: 'Scale',
};

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    const matchesStage = !selectedStage || resource.stage_tags.includes(selectedStage);
    return matchesSearch && matchesCategory && matchesStage;
  });

  const featuredResources = filteredResources.filter(r => r.is_featured);
  const regularResources = filteredResources.filter(r => !r.is_featured);

  const categories = Object.keys(categoryLabels);
  const stages = Object.keys(stageLabels);

  const handleDownload = async (resource: Resource) => {
    // Increment download count
    await supabase
      .from('resources')
      .update({ download_count: resource.download_count + 1 })
      .eq('id', resource.id);

    // Open the resource
    const url = resource.file_url || resource.external_url;
    if (url) {
      window.open(url, '_blank');
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
          <h1 className="text-2xl font-bold text-foreground mb-2">Resource Library</h1>
          <p className="text-muted-foreground">
            Templates, guides, and tools to help you build and scale your startup.
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
                placeholder="Search resources..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter size={16} />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Categories
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className="rounded-full"
              >
                {categoryLabels[cat]}
              </Button>
            ))}
          </div>

          {/* Stage Pills */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground py-1">Stage:</span>
            {stages.map(stage => (
              <Button
                key={stage}
                variant={selectedStage === stage ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedStage(stage === selectedStage ? null : stage)}
                className="rounded-full text-xs"
              >
                {stageLabels[stage]}
              </Button>
            ))}
          </div>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : (
          <>
            {/* Featured Resources */}
            {featuredResources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Recommended for You
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredResources.map((resource, i) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      onDownload={handleDownload}
                      featured
                      delay={0.1 * i}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* All Resources by Category */}
            {!selectedCategory ? (
              categories.map(category => {
                const categoryResources = regularResources.filter(r => r.category === category);
                if (categoryResources.length === 0) return null;

                const Icon = categoryIcons[category] || FileText;

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {categoryLabels[category]}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryResources.map((resource, i) => (
                        <ResourceCard
                          key={resource.id}
                          resource={resource}
                          onDownload={handleDownload}
                          delay={0.05 * i}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regularResources.map((resource, i) => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    onDownload={handleDownload}
                    delay={0.05 * i}
                  />
                ))}
              </div>
            )}

            {filteredResources.length === 0 && (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">No resources found</h3>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </PortalLayout>
  );
}

function ResourceCard({
  resource,
  onDownload,
  featured = false,
  delay = 0,
}: {
  resource: Resource;
  onDownload: (resource: Resource) => void;
  featured?: boolean;
  delay?: number;
}) {
  const Icon = categoryIcons[resource.category] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-card rounded-2xl border ${
        featured ? 'border-amber-200 ring-1 ring-amber-100' : 'border-border'
      } p-5 hover:shadow-md transition-all group`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${featured ? 'bg-amber-100' : 'bg-secondary'}`}>
          <Icon className={`h-5 w-5 ${featured ? 'text-amber-600' : 'text-primary'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {resource.title}
          </h3>
          {resource.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {resource.description}
            </p>
          )}
          {resource.stage_tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {resource.stage_tags.map(stage => (
                <Badge key={stage} variant="secondary" className="text-xs">
                  {stageLabels[stage] || stage}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {resource.download_count > 0 && `${resource.download_count} downloads`}
        </span>
        <Button size="sm" variant="ghost" onClick={() => onDownload(resource)} className="gap-2">
          {resource.external_url ? (
            <>
              <ExternalLink size={14} />
              Open
            </>
          ) : (
            <>
              <Download size={14} />
              Download
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
