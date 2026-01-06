import { DollarSign, Users, Globe, MapPin, Play } from 'lucide-react';
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
  piloting: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  scaling: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  commercial: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  acquired: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
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
};

export function SuccessStoryCard({ story, onClick }: SuccessStoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={story.image} 
          alt={story.company}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
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

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Sector tag */}
        <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">
          {story.sector}
        </span>

        {/* Company name */}
        <h3 className="text-xl font-display font-bold text-slate-50 mt-2 mb-2 group-hover:text-teal-300 transition-colors">
          {story.company}
        </h3>

        {/* Tagline */}
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
          {story.tagline}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-4 text-sm">
          {story.metrics.capitalRaised && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>{story.metrics.capitalRaised}</span>
            </div>
          )}
          {story.metrics.jobsCreated && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <Users className="w-4 h-4 text-blue-400" />
              <span>{story.metrics.jobsCreated}</span>
            </div>
          )}
          {story.metrics.marketsReached && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>{story.metrics.marketsReached}</span>
            </div>
          )}
        </div>

        {/* Hover reveal: Programs */}
        <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
          <p className="text-xs text-slate-500 mb-2">Supported by NORCAT Innovation</p>
          <div className="flex flex-wrap gap-2">
            {story.programs.map((program) => (
              <span 
                key={program}
                className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-300"
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
