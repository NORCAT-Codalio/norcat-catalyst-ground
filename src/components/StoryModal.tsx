import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, MapPin, Users, DollarSign, Building2, Rocket, Globe, Award, Zap, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StoryScene {
  type: 'text' | 'counter' | 'map' | 'milestone' | 'quote';
  title?: string;
  content?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  icon?: 'users' | 'dollar' | 'building' | 'rocket' | 'globe' | 'award' | 'map' | 'zap' | 'target';
  location?: string;
  quote?: string;
  author?: string;
}

interface StoryData {
  company: string;
  tagline: string;
  logo?: string;
  year: string;
  scenes: StoryScene[];
}

interface StoryModalProps {
  story: StoryData | null;
  open: boolean;
  onClose: () => void;
}

const iconMap = {
  users: Users,
  dollar: DollarSign,
  building: Building2,
  rocket: Rocket,
  globe: Globe,
  award: Award,
  map: MapPin,
  zap: Zap,
  target: Target,
};

function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  isVisible 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    
    let startTime: number;
    let animationFrame: number;
    const duration = 2500;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value]);
  
  return (
    <span className="font-display font-black text-7xl md:text-9xl text-slate-900 tracking-tight">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function StoryScene({ 
  scene, 
  isVisible, 
  sceneIndex
}: { 
  scene: StoryScene; 
  isVisible: boolean; 
  sceneIndex: number;
}) {
  const Icon = scene.icon ? iconMap[scene.icon] : null;
  
  return (
    <div 
      className={cn(
        "min-h-[70vh] flex flex-col items-center justify-center text-center px-8 md:px-16 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
    >
      {Icon && scene.type !== 'counter' && (
        <div 
          className={cn(
            "w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-8 transition-all duration-700",
            isVisible ? "scale-100 rotate-0" : "scale-50 rotate-12"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <Icon className="w-10 h-10 text-slate-700" />
        </div>
      )}
      
      {scene.type === 'text' && (
        <>
          <h3 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1] tracking-tight max-w-4xl transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {scene.title}
          </h3>
          {scene.content && (
            <p 
              className={cn(
                "text-xl md:text-2xl text-slate-500 max-w-2xl font-light transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '300ms' }}
            >
              {scene.content}
            </p>
          )}
        </>
      )}
      
      {scene.type === 'counter' && (
        <>
          <div className="relative">
            <AnimatedCounter 
              value={scene.value || 0} 
              prefix={scene.prefix} 
              suffix={scene.suffix}
              isVisible={isVisible}
            />
            {/* Decorative line */}
            <div 
              className={cn(
                "absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-teal-500 transition-all duration-1000",
                isVisible ? "w-24" : "w-0"
              )}
              style={{ transitionDelay: '800ms' }}
            />
          </div>
          <p 
            className={cn(
              "text-2xl md:text-3xl text-slate-700 mt-10 font-semibold transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            {scene.title}
          </p>
          {scene.content && (
            <p 
              className={cn(
                "text-lg text-slate-400 mt-3 transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: '800ms' }}
            >
              {scene.content}
            </p>
          )}
        </>
      )}
      
      {scene.type === 'map' && (
        <>
          <div className="relative mb-10">
            {/* Animated rings */}
            <div 
              className={cn(
                "w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all duration-1000",
                isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              )}
            >
              <div 
                className={cn(
                  "absolute inset-4 rounded-full border-2 border-dashed border-teal-300 transition-all duration-1000",
                  isVisible ? "animate-[spin_30s_linear_infinite]" : ""
                )}
              />
              <div className="absolute inset-10 rounded-full border border-slate-100" />
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            {/* Ping indicators */}
            {isVisible && (
              <>
                <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-ping" />
                <div className="absolute bottom-8 left-0 w-2 h-2 bg-slate-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-teal-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </>
            )}
          </div>
          <h3 
            className={cn(
              "text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3 transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: '400ms' }}
          >
            {scene.location}
          </h3>
          <p 
            className={cn(
              "text-xl text-slate-500 transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            {scene.title}
          </p>
        </>
      )}

      {scene.type === 'quote' && (
        <div className="max-w-3xl">
          <div 
            className={cn(
              "text-6xl text-teal-500 font-serif mb-4 transition-all duration-500",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            "
          </div>
          <blockquote 
            className={cn(
              "text-3xl md:text-4xl font-display font-medium text-slate-800 italic leading-relaxed transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {scene.quote}
          </blockquote>
          {scene.author && (
            <p 
              className={cn(
                "text-lg text-slate-500 mt-6 transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: '500ms' }}
            >
              — {scene.author}
            </p>
          )}
        </div>
      )}
      
      {scene.type === 'milestone' && (
        <div className="relative">
          <div 
            className={cn(
              "w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-8 shadow-2xl shadow-teal-500/40 transition-all duration-1000",
              isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
            )}
          >
            <Award className="w-14 h-14 md:w-18 md:h-18 text-white" />
          </div>
          <h3 
            className={cn(
              "text-4xl md:text-6xl font-display font-black text-slate-900 mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: '300ms' }}
          >
            {scene.title}
          </h3>
          <p 
            className={cn(
              "text-xl md:text-2xl text-slate-500 transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: '500ms' }}
          >
            {scene.content}
          </p>
        </div>
      )}
    </div>
  );
}

export function StoryModal({ story, open, onClose }: StoryModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    if (!open) {
      setActiveScene(0);
      setScrollProgress(0);
    }
  }, [open]);
  
  const handleScroll = () => {
    if (!containerRef.current || !story) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    
    setScrollProgress(progress);
    
    const sceneCount = story.scenes.length;
    const sceneIndex = Math.min(
      Math.floor(progress * sceneCount),
      sceneCount - 1
    );
    setActiveScene(sceneIndex);
  };
  
  if (!story) return null;
  
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-5xl h-[90vh] p-0 border-0 overflow-hidden [&>button]:hidden rounded-2xl shadow-2xl" 
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8 bg-gradient-to-b from-white via-white/95 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-600 text-xs font-semibold tracking-widest uppercase mb-1">
                {story.year} • {story.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">
                {story.company}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 h-0.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
        
        {/* Scrollable content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto scroll-smooth pt-36 pb-32"
          style={{ backgroundColor: '#ffffff' }}
        >
          {story.scenes.map((scene, index) => (
            <StoryScene 
              key={index}
              scene={scene}
              isVisible={index === activeScene}
              sceneIndex={index}
            />
          ))}
          
          {/* End spacer for last scene visibility */}
          <div className="min-h-[40vh]" />
        </div>

        {/* Scroll hint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none">
          <div className="flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-2">
              {activeScene < (story.scenes.length - 1) ? 'Scroll to continue' : 'End of story'}
            </p>
            {activeScene < (story.scenes.length - 1) && (
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Fake company stories for preview
export const storyData: Record<string, StoryData> = {
  'MineTech Robotics': {
    company: 'MineTech Robotics',
    tagline: 'Series A Success',
    year: '2024',
    scenes: [
      {
        type: 'text',
        title: 'Two engineers walked into a mine.',
        content: 'They walked out with a vision to make every underground operation autonomous.',
        icon: 'rocket',
      },
      {
        type: 'quote',
        quote: 'We knew the future of mining wasn\'t just safer—it was smarter.',
        author: 'Sarah Chen, Co-founder',
      },
      {
        type: 'counter',
        value: 2,
        title: 'Founders',
        content: 'Started in a Sudbury garage, 2019',
        icon: 'users',
      },
      {
        type: 'counter',
        value: 47,
        title: 'Team Members Today',
        content: 'Engineers, operators, and dreamers',
        icon: 'users',
      },
      {
        type: 'map',
        title: 'First autonomous deployment',
        location: 'Creighton Mine, Sudbury',
        icon: 'map',
      },
      {
        type: 'counter',
        value: 5,
        title: 'Global Mine Sites',
        content: 'Operating across Canada, Australia, and Chile',
        icon: 'globe',
      },
      {
        type: 'counter',
        prefix: '$',
        value: 12,
        suffix: 'M',
        title: 'Series A Raised',
        content: 'Led by Northvolt Ventures & Mining Capital Partners',
        icon: 'dollar',
      },
      {
        type: 'milestone',
        title: 'The Future is Underground',
        content: 'Proving that Northern Ontario can build world-class robotics.',
      },
    ],
  },
  'SubSurface AI': {
    company: 'SubSurface AI',
    tagline: '$45M Acquisition',
    year: '2023',
    scenes: [
      {
        type: 'text',
        title: 'What if AI could see through rock?',
        content: 'A geologist\'s question that became a $45M answer.',
        icon: 'target',
      },
      {
        type: 'quote',
        quote: 'Every core sample tells a story. We taught machines to read them.',
        author: 'Dr. Michael Torres, Founder',
      },
      {
        type: 'counter',
        value: 127000,
        suffix: '+',
        title: 'Core Samples Analyzed',
        content: 'The largest geological AI training dataset ever built',
        icon: 'building',
      },
      {
        type: 'counter',
        value: 62,
        suffix: '%',
        title: 'Cost Reduction',
        content: 'Average exploration savings for mining clients',
        icon: 'dollar',
      },
      {
        type: 'counter',
        value: 11,
        title: 'Patents Granted',
        content: 'Breakthrough algorithms for subsurface prediction',
        icon: 'award',
      },
      {
        type: 'map',
        title: 'Deployed at Ring of Fire exploration sites',
        location: 'Northern Ontario',
        icon: 'map',
      },
      {
        type: 'counter',
        prefix: '$',
        value: 45,
        suffix: 'M',
        title: 'Acquisition Value',
        content: 'Acquired by Dassault Systèmes GEOVIA',
        icon: 'dollar',
      },
      {
        type: 'milestone',
        title: 'From Startup to Global Standard',
        content: 'Northern ingenuity meets worldwide impact.',
      },
    ],
  },
  'VentFlow Systems': {
    company: 'VentFlow Systems',
    tagline: 'Global OEM Partnership',
    year: '2024',
    scenes: [
      {
        type: 'text',
        title: 'Mining ventilation was stuck in 1970.',
        content: 'Wasting energy. Missing threats. Ignoring data.',
        icon: 'zap',
      },
      {
        type: 'quote',
        quote: 'Fresh air underground shouldn\'t be a luxury—it should be intelligent.',
        author: 'James Whitehorse, CEO',
      },
      {
        type: 'counter',
        value: 38,
        suffix: '%',
        title: 'Energy Savings',
        content: 'Smart ventilation that adapts in real-time to conditions',
        icon: 'zap',
      },
      {
        type: 'map',
        title: 'Pilot program with Vale\'s Sudbury operations',
        location: 'Copper Cliff, Ontario',
        icon: 'map',
      },
      {
        type: 'counter',
        value: 2400,
        suffix: '+',
        title: 'Workers Protected Daily',
        content: 'Real-time air quality monitoring and alerts',
        icon: 'users',
      },
      {
        type: 'counter',
        value: 14,
        title: 'Mines Now Live',
        content: 'Across North America and South Africa',
        icon: 'globe',
      },
      {
        type: 'text',
        title: 'Epiroc Partnership Secured',
        content: 'Technology licensed by the world\'s largest underground mining OEM.',
        icon: 'award',
      },
      {
        type: 'milestone',
        title: 'Clean Air. Smart Mines.',
        content: 'Sustainability and safety, powered by Sudbury innovation.',
      },
    ],
  },
};
