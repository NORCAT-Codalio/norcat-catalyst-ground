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
  accentColor: string;
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

// Floating background shapes
function BackgroundGraphics({ accentColor, scrollProgress }: { accentColor: string; scrollProgress: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          top: `${20 + scrollProgress * 30}%`,
          right: '-200px',
          transform: `translateY(${scrollProgress * -100}px) scale(${1 + scrollProgress * 0.3})`,
        }}
      />
      
      {/* Secondary orb */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-2xl transition-transform duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          bottom: `${10 + scrollProgress * 20}%`,
          left: '-150px',
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      />

      {/* Geometric shapes */}
      <div 
        className="absolute w-32 h-32 border border-slate-200/50 rounded-2xl transition-all duration-700"
        style={{ 
          top: '15%',
          left: '10%',
          transform: `rotate(${45 + scrollProgress * 90}deg) scale(${0.8 + scrollProgress * 0.4})`,
          opacity: 0.3,
        }}
      />
      <div 
        className="absolute w-20 h-20 border border-slate-200/30 rounded-full transition-all duration-700"
        style={{ 
          top: '60%',
          right: '15%',
          transform: `translateY(${scrollProgress * -80}px)`,
          opacity: 0.4,
        }}
      />
      <div 
        className="absolute w-16 h-16 rounded-lg transition-all duration-700"
        style={{ 
          background: `${accentColor}10`,
          bottom: '25%',
          left: '20%',
          transform: `rotate(${-15 + scrollProgress * 45}deg)`,
        }}
      />

      {/* Dotted pattern */}
      <div 
        className="absolute w-48 h-48 opacity-20 transition-all duration-500"
        style={{ 
          top: '40%',
          right: '5%',
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          transform: `translateX(${scrollProgress * 30}px)`,
        }}
      />

      {/* Accent line */}
      <div 
        className="absolute h-[300px] w-px transition-all duration-700"
        style={{ 
          background: `linear-gradient(to bottom, transparent, ${accentColor}40, transparent)`,
          left: '8%',
          top: '30%',
          transform: `scaleY(${0.5 + scrollProgress * 0.5})`,
        }}
      />
    </div>
  );
}

function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  isVisible,
  hasBeenVisible
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  isVisible: boolean;
  hasBeenVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    
    setHasAnimated(true);
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
  }, [isVisible, value, hasAnimated]);

  // If already animated, show final value
  useEffect(() => {
    if (hasBeenVisible && !isVisible) {
      setCount(value);
    }
  }, [hasBeenVisible, isVisible, value]);
  
  return (
    <span className="font-display font-black text-7xl md:text-9xl text-slate-900 tracking-tight">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function StoryScene({ 
  scene, 
  isVisible, 
  hasBeenVisible,
  accentColor
}: { 
  scene: StoryScene; 
  isVisible: boolean; 
  hasBeenVisible: boolean;
  accentColor: string;
}) {
  const Icon = scene.icon ? iconMap[scene.icon] : null;
  const show = isVisible || hasBeenVisible;
  
  return (
    <div 
      className={cn(
        "min-h-[80vh] flex flex-col items-center justify-center text-center px-8 md:px-16 transition-all duration-700 ease-out",
        show ? "opacity-100" : "opacity-0"
      )}
      style={{
        transform: show ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
      }}
    >
      {Icon && scene.type !== 'counter' && (
        <div 
          className={cn(
            "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-lg",
            show ? "scale-100 rotate-0" : "scale-50 rotate-12"
          )}
          style={{ 
            background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
            boxShadow: `0 10px 40px ${accentColor}20`,
          }}
        >
          <Icon className="w-10 h-10" style={{ color: accentColor }} />
        </div>
      )}
      
      {scene.type === 'text' && (
        <>
          <h3 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1] tracking-tight max-w-4xl transition-all duration-500",
            )}
          >
            {scene.title}
          </h3>
          {scene.content && (
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light">
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
              hasBeenVisible={hasBeenVisible}
            />
            {/* Decorative line */}
            <div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 rounded-full transition-all duration-700"
              style={{ 
                width: show ? '80px' : '0px',
                background: accentColor,
                boxShadow: `0 0 20px ${accentColor}60`,
              }}
            />
          </div>
          <p className="text-2xl md:text-3xl text-slate-700 mt-10 font-semibold">
            {scene.title}
          </p>
          {scene.content && (
            <p className="text-lg text-slate-400 mt-3 max-w-md">
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
                "w-48 h-48 md:w-64 md:h-64 rounded-full border-2 flex items-center justify-center transition-all duration-700",
              )}
              style={{ borderColor: `${accentColor}30` }}
            >
              <div 
                className={cn(
                  "absolute inset-4 rounded-full border-2 border-dashed transition-all duration-700",
                  show ? "animate-[spin_20s_linear_infinite]" : ""
                )}
                style={{ borderColor: `${accentColor}40` }}
              />
              <div 
                className="absolute inset-10 rounded-full"
                style={{ background: `${accentColor}08` }}
              />
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                style={{ 
                  background: accentColor,
                  boxShadow: `0 10px 40px ${accentColor}50`,
                }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            {/* Ping indicators */}
            {show && (
              <>
                <div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full animate-ping"
                  style={{ background: accentColor }}
                />
                <div 
                  className="absolute bottom-8 left-0 w-2 h-2 rounded-full animate-ping"
                  style={{ background: `${accentColor}80`, animationDelay: '0.5s' }}
                />
                <div 
                  className="absolute top-1/2 -right-4 w-2 h-2 rounded-full animate-ping"
                  style={{ background: accentColor, animationDelay: '1s' }}
                />
              </>
            )}
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
            {scene.location}
          </h3>
          <p className="text-xl text-slate-500">
            {scene.title}
          </p>
        </>
      )}

      {scene.type === 'quote' && (
        <div className="max-w-3xl relative">
          {/* Large quote mark background */}
          <div 
            className="absolute -top-16 -left-8 text-[200px] font-serif leading-none opacity-10 select-none"
            style={{ color: accentColor }}
          >
            "
          </div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-slate-800 italic leading-relaxed relative z-10">
            {scene.quote}
          </blockquote>
          {scene.author && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <div 
                className="w-12 h-0.5 rounded-full"
                style={{ background: accentColor }}
              />
              <p className="text-lg text-slate-500 font-medium">
                {scene.author}
              </p>
            </div>
          )}
        </div>
      )}
      
      {scene.type === 'milestone' && (
        <div className="relative">
          {/* Celebration particles */}
          {show && (
            <div className="absolute inset-0 -m-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-ping"
                  style={{
                    background: accentColor,
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s',
                  }}
                />
              ))}
            </div>
          )}
          <div 
            className={cn(
              "w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-all duration-700 relative",
              show ? "scale-100 rotate-0" : "scale-0 rotate-180"
            )}
            style={{ 
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
              boxShadow: `0 20px 60px ${accentColor}50`,
            }}
          >
            <Award className="w-14 h-14 md:w-18 md:h-18 text-white" />
          </div>
          <h3 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-4">
            {scene.title}
          </h3>
          <p className="text-xl md:text-2xl text-slate-500">
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
  const [visitedScenes, setVisitedScenes] = useState<Set<number>>(new Set([0]));
  
  useEffect(() => {
    if (!open) {
      setActiveScene(0);
      setScrollProgress(0);
      setVisitedScenes(new Set([0]));
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
    // Load content earlier - use 0.8 multiplier to trigger sooner
    const sceneIndex = Math.min(
      Math.floor(progress * sceneCount * 1.1),
      sceneCount - 1
    );
    setActiveScene(sceneIndex);
    
    // Track visited scenes
    setVisitedScenes(prev => new Set([...prev, sceneIndex]));
  };
  
  if (!story) return null;

  const accentColor = story.accentColor || '#14b8a6';
  
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-5xl h-[90vh] p-0 border-0 overflow-hidden [&>button]:hidden rounded-3xl shadow-2xl" 
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background graphics */}
        <BackgroundGraphics accentColor={accentColor} scrollProgress={scrollProgress} />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8 bg-gradient-to-b from-white via-white/98 to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p 
                className="text-xs font-bold tracking-widest uppercase mb-1"
                style={{ color: accentColor }}
              >
                {story.year} • {story.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight">
                {story.company}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all hover:scale-105"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${scrollProgress * 100}%`,
                background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)`,
                boxShadow: `0 0 10px ${accentColor}60`,
              }}
            />
          </div>

          {/* Scene dots */}
          <div className="flex justify-center gap-2 mt-4">
            {story.scenes.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: index <= activeScene ? accentColor : '#e2e8f0',
                  transform: index === activeScene ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Scrollable content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto scroll-smooth pt-40 pb-32"
          style={{ backgroundColor: 'transparent' }}
        >
          {story.scenes.map((scene, index) => (
            <StoryScene 
              key={index}
              scene={scene}
              isVisible={index === activeScene}
              hasBeenVisible={visitedScenes.has(index)}
              accentColor={accentColor}
            />
          ))}
          
          {/* End spacer */}
          <div className="min-h-[50vh]" />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
          <div className="flex flex-col items-center">
            {activeScene < (story.scenes.length - 1) ? (
              <>
                <p className="text-slate-400 text-sm mb-2 font-medium">Scroll to continue</p>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: accentColor }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: accentColor, animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: accentColor, animationDelay: '0.3s' }} />
                </div>
              </>
            ) : (
              <div 
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: accentColor }}
              >
                End of story
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
    accentColor: '#14b8a6', // teal
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
    accentColor: '#f59e0b', // amber
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
    accentColor: '#8b5cf6', // purple
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
