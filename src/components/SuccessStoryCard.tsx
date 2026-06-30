import { DollarSign, Users, Globe, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SuccessStory {
  id: string;
  company: string;
  logo?: string;
  tagline: string;
  sector: string;
  stage: string;
  status: 'piloting' | 'scaling' | 'commercial' | 'acquired';
  metrics: {
    capitalRaised?: string;
    publicValuation?: string;
    jobsCreated?: number;
    marketsReached?: number;
  };
  programs: string[];
  image: string;
  founded: string;
  hasVideo?: boolean;
}

interface SuccessStoryCardProps {
  story: SuccessStory;
  onClick: () => void;
}

const statusColors = {
  piloting: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
  scaling: 'bg-amber-500/20 text-amber-600 border-amber-500/30',
  commercial: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30',
  acquired: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
};

const statusLabels = {
  piloting: 'Piloting',
  scaling: 'Scaling',
  commercial: 'Commercial',
  acquired: 'Acquired',
};

const programIcons: Record<string, string> = {
  'UG Centre': '⛏️',
  'SCF': '💰',
  'Mentorship': '🎯',
  'Core5': '⚡',
  'VGS': '🚀',
  'RAI': '🤖',
  'IAP': '🔬',
};

export function SuccessStoryCard({ story, onClick }: SuccessStoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left card-modern overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={story.image} 
          alt={story.company}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Status Badge */}
        <div className={cn(
          "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border",
          statusColors[story.status]
        )}>
          {statusLabels[story.status]}
        </div>

        {/* Video indicator */}
        {story.hasVideo && (
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Sector tag */}
        <span className="text-primary text-xs font-semibold tracking-wider uppercase">
          {story.sector}
        </span>

        {/* Company name */}
        <h3 className="headline-sm mt-2 mb-2 group-hover:text-primary transition-colors">
          {story.company}
        </h3>

        {/* Tagline */}
        <p className="body-md line-clamp-2 mb-4">
          {story.tagline}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-4 text-sm">
          {story.metrics.capitalRaised && (
            <div className="flex items-center gap-1.5 text-foreground">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              <span className="font-medium">{story.metrics.capitalRaised}</span>
            </div>
          )}
          {story.metrics.jobsCreated && (
            <div className="flex items-center gap-1.5 text-foreground">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{story.metrics.jobsCreated}</span>
            </div>
          )}
          {story.metrics.marketsReached && (
            <div className="flex items-center gap-1.5 text-foreground">
              <Globe className="w-4 h-4 text-purple-500" />
              <span className="font-medium">{story.metrics.marketsReached}</span>
            </div>
          )}
        </div>

        {/* Hover reveal: Programs */}
        <div className="mt-4 pt-4 border-t border-border opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
          <p className="text-xs text-muted-foreground mb-2">Supported by NORCAT Innovation</p>
          <div className="flex flex-wrap gap-2">
            {story.programs.map((program) => (
              <span 
                key={program}
                className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs text-secondary-foreground"
              >
                <span>{programIcons[program] || '📋'}</span>
                {program}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
