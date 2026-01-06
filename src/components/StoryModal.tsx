import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, MapPin, Users, DollarSign, Building2, Rocket, Globe, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StoryScene {
  type: 'text' | 'counter' | 'map' | 'milestone';
  title?: string;
  content?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  icon?: 'users' | 'dollar' | 'building' | 'rocket' | 'globe' | 'award' | 'map';
  location?: string;
}

interface StoryData {
  company: string;
  tagline: string;
  color: string;
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
    const duration = 2000;
    
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
    <span className="font-display font-bold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function StoryScene({ 
  scene, 
  isVisible, 
  progress 
}: { 
  scene: StoryScene; 
  isVisible: boolean; 
  progress: number;
}) {
  const Icon = scene.icon ? iconMap[scene.icon] : null;
  
  return (
    <div 
      className={cn(
        "min-h-[60vh] flex flex-col items-center justify-center text-center px-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {Icon && (
        <div 
          className={cn(
            "w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-6 transition-all duration-500",
            isVisible ? "scale-100" : "scale-50"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <Icon className="w-8 h-8 text-teal-400" />
        </div>
      )}
      
      {scene.type === 'text' && (
        <>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-50 mb-4 leading-tight">
            {scene.title}
          </h3>
          {scene.content && (
            <p className="text-xl text-slate-400 max-w-lg">{scene.content}</p>
          )}
        </>
      )}
      
      {scene.type === 'counter' && (
        <>
          <AnimatedCounter 
            value={scene.value || 0} 
            prefix={scene.prefix} 
            suffix={scene.suffix}
            isVisible={isVisible}
          />
          <p className="text-2xl text-slate-300 mt-4 font-medium">{scene.title}</p>
          {scene.content && (
            <p className="text-lg text-slate-500 mt-2">{scene.content}</p>
          )}
        </>
      )}
      
      {scene.type === 'map' && (
        <>
          <div className="relative mb-8">
            <div 
              className={cn(
                "w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/30 to-teal-600/10 flex items-center justify-center transition-all duration-1000",
                isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              )}
            >
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-teal-500/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-teal-500/20" />
              <MapPin className="w-12 h-12 text-teal-400 animate-bounce" />
            </div>
            {/* Ping indicators */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-teal-400 rounded-full animate-ping" />
            <div className="absolute bottom-12 left-4 w-2 h-2 bg-teal-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-teal-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-50 mb-2">{scene.location}</h3>
          <p className="text-lg text-slate-400">{scene.title}</p>
        </>
      )}
      
      {scene.type === 'milestone' && (
        <div className="relative">
          <div 
            className={cn(
              "w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 transition-all duration-700",
              isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
            )}
          >
            <Award className="w-16 h-16 text-slate-900" />
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-amber-400 mb-4">
            {scene.title}
          </h3>
          <p className="text-xl text-slate-300">{scene.content}</p>
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
    const progress = scrollTop / scrollHeight;
    
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
      <DialogContent className="max-w-4xl h-[90vh] p-0 border-slate-800 overflow-hidden [&>button]:hidden" style={{ backgroundColor: '#020617' }}>
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-slate-950 via-slate-950/90 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-400 text-sm font-medium tracking-wider uppercase">
                {story.tagline}
              </p>
              <h2 className="text-2xl font-display font-bold text-slate-50">
                {story.company}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-slate-300" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          
          {/* Scene indicators */}
          <div className="flex gap-2 mt-3">
            {story.scenes.map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all duration-300",
                  index <= activeScene ? "bg-teal-400" : "bg-slate-700"
                )}
              />
            ))}
          </div>
        </div>
        
        {/* Scrollable content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto scroll-smooth pt-32 pb-20"
        >
          {story.scenes.map((scene, index) => (
            <StoryScene 
              key={index}
              scene={scene}
              isVisible={index === activeScene}
              progress={scrollProgress}
            />
          ))}
          
          {/* End indicator */}
          <div className="min-h-[30vh] flex flex-col items-center justify-center text-center px-6">
            <p className="text-slate-500 text-lg">Scroll to explore the full story</p>
            <div className="mt-4 flex gap-1">
              <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Story data for each company
export const storyData: Record<string, StoryData> = {
  'MineTech Robotics': {
    company: 'MineTech Robotics',
    tagline: 'Series A Success Story',
    color: 'teal',
    scenes: [
      {
        type: 'text',
        title: 'It started with 2 founders and a bold vision',
        content: 'Autonomous vehicles that could navigate the deepest mines.',
        icon: 'rocket',
      },
      {
        type: 'counter',
        value: 42,
        suffix: '',
        title: 'Employees Today',
        content: 'Growing from a garage startup to a full engineering team',
        icon: 'users',
      },
      {
        type: 'map',
        title: 'First deployment at Creighton Mine',
        location: 'Sudbury, Ontario',
        icon: 'map',
      },
      {
        type: 'counter',
        value: 5,
        title: 'Global Mine Sites',
        content: 'Now operating across 3 continents',
        icon: 'globe',
      },
      {
        type: 'counter',
        prefix: '$',
        value: 12,
        suffix: 'M',
        title: 'Series A Raised',
        content: 'Led by top mining-focused VC firms',
        icon: 'dollar',
      },
      {
        type: 'milestone',
        title: 'The Future is Autonomous',
        content: 'Proving that Sudbury-born innovation can change mining worldwide.',
      },
    ],
  },
  'SubSurface AI': {
    company: 'SubSurface AI',
    tagline: 'Acquisition Success',
    color: 'amber',
    scenes: [
      {
        type: 'text',
        title: 'A geologist with a machine learning dream',
        content: 'What if AI could see what humans couldn\'t underground?',
        icon: 'rocket',
      },
      {
        type: 'counter',
        value: 10000,
        suffix: '+',
        title: 'Core Samples Analyzed',
        content: 'Training the most comprehensive geological AI model',
        icon: 'building',
      },
      {
        type: 'counter',
        value: 60,
        suffix: '%',
        title: 'Cost Reduction',
        content: 'Exploration costs slashed for mining companies',
        icon: 'dollar',
      },
      {
        type: 'counter',
        value: 8,
        title: 'Patents Filed',
        content: 'Protecting breakthrough AI algorithms',
        icon: 'award',
      },
      {
        type: 'counter',
        prefix: '$',
        value: 45,
        suffix: 'M',
        title: 'Acquisition Value',
        content: 'Acquired by leading mining software company',
        icon: 'dollar',
      },
      {
        type: 'milestone',
        title: 'Northern Innovation, Global Impact',
        content: 'From NORCAT to worldwide deployment.',
      },
    ],
  },
  'VentFlow Systems': {
    company: 'VentFlow Systems',
    tagline: 'Global Partnership',
    color: 'emerald',
    scenes: [
      {
        type: 'text',
        title: 'Mining ventilation was broken',
        content: 'Wasting energy while failing to protect workers.',
        icon: 'rocket',
      },
      {
        type: 'counter',
        value: 35,
        suffix: '%',
        title: 'Energy Savings',
        content: 'Smart ventilation that adapts in real-time',
        icon: 'building',
      },
      {
        type: 'map',
        title: 'Piloted at Vale\'s Sudbury Operations',
        location: 'Copper Cliff, Ontario',
        icon: 'map',
      },
      {
        type: 'counter',
        value: 500,
        suffix: '+',
        title: 'Workers Protected Daily',
        content: 'Improved air quality monitoring underground',
        icon: 'users',
      },
      {
        type: 'text',
        title: 'Global OEM Partnership Secured',
        content: 'Licensed by the world\'s largest mining equipment manufacturer.',
        icon: 'globe',
      },
      {
        type: 'milestone',
        title: 'Safety Meets Sustainability',
        content: 'Proving clean tech and worker safety go hand in hand.',
      },
    ],
  },
};
