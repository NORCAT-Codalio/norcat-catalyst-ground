import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, MapPin, Users, DollarSign, Building2, Globe, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SuccessStory } from './SuccessStoryCard';
import circuitiqTeam from '@/assets/circuitiq-team.png';

interface StoryDetails extends SuccessStory {
  problem: string;
  breakthrough: {
    text: string;
    image?: string;
  };
  timeline: {
    year: string;
    event: string;
  }[];
  impactMetrics: {
    jobs: number;
    revenue?: string;
    capital: string;
    pilots: number;
    markets: number;
  };
  founderQuote: {
    text: string;
    author: string;
    role: string;
  };
  currentStage: string;
  whatsNext: string;
  globalPresence?: string[];
}

interface SuccessStoryModalProps {
  story: StoryDetails | null;
  open: boolean;
  onClose: () => void;
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * value));
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function SuccessStoryModal({ story, open, onClose }: SuccessStoryModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!open) setScrollProgress(0);
  }, [open]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setScrollProgress(scrollTop / (scrollHeight - clientHeight));
  };

  if (!story) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-5xl h-[95vh] p-0 border-0 overflow-hidden [&>button]:hidden rounded-3xl shadow-2xl"
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-secondary z-50">
          <div 
            className="h-full bg-primary transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background flex items-center justify-center transition-all hover:scale-105 border border-border"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Scrollable content */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto scroll-smooth"
        >
          {/* Hero Section */}
          <div className="relative h-[60vh] overflow-hidden">
            <img 
              src={story.image}
              alt={story.company}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                {story.sector}
              </span>
              <h1 className="headline-hero text-white mb-4">
                {story.company}
              </h1>
              <p className="body-xl text-white/80 max-w-2xl">
                {story.tagline}
              </p>
            </div>
          </div>

          {/* Section 1: The Problem */}
          <section className="py-24 px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The Problem
              </span>
              <p className="headline-lg text-white leading-tight">
                {story.problem}
              </p>
            </div>
          </section>

          {/* Section 2: The Breakthrough */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The Breakthrough
              </span>
              <p className="body-xl text-foreground mb-12">
                {story.breakthrough.text}
              </p>
              {story.breakthrough.image && (
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={story.breakthrough.image} 
                    alt="Product" 
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Section 3: The NORCAT Advantage - Timeline */}
          <section className="section-padding bg-secondary/30">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block">
                The NORCAT Advantage
              </span>
              <h2 className="headline-lg mb-16">
                Their Journey With Us
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />

                {story.timeline.map((item, index) => (
                  <div 
                    key={index}
                    className="relative flex items-start gap-8 mb-12 last:mb-0"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="pt-2">
                      <span className="text-primary text-sm font-bold">{item.year}</span>
                      <p className="headline-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Impact Metrics */}
          <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-5xl mx-auto">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-6 block text-center">
                Impact
              </span>
              <h2 className="headline-lg text-white mb-16 text-center">
                By The Numbers
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.jobs} />
                  </div>
                  <p className="text-white/60 text-sm">Jobs Created</p>
                </div>

                {story.impactMetrics.revenue && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="stat-number text-4xl mb-2">
                      {story.impactMetrics.revenue}
                    </div>
                    <p className="text-white/60 text-sm">Revenue</p>
                  </div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    {story.impactMetrics.capital}
                  </div>
                  <p className="text-white/60 text-sm">Capital Raised</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.pilots} />
                  </div>
                  <p className="text-white/60 text-sm">Pilots Completed</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-teal-400" />
                  </div>
                  <div className="stat-number text-4xl mb-2">
                    <AnimatedCounter value={story.impactMetrics.markets} />
                  </div>
                  <p className="text-white/60 text-sm">Markets Entered</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Founder Quote */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-8xl text-primary font-serif leading-none mb-8">"</div>
              <blockquote className="headline-md italic text-foreground leading-relaxed mb-8">
                {story.founderQuote.text}
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{story.founderQuote.author}</p>
                <p className="text-muted-foreground">{story.founderQuote.role}</p>
              </div>
            </div>
          </section>

          {/* Section 6: Where They Are Now */}
          <section className="section-padding-sm bg-primary">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary-foreground/70 text-sm font-bold tracking-widest uppercase mb-6 block">
                Where They Are Now
              </span>
              <h2 className="headline-lg text-primary-foreground mb-6">
                {story.currentStage}
              </h2>
              <p className="body-lg text-primary-foreground/80 mb-12">
                {story.whatsNext}
              </p>

              {story.globalPresence && story.globalPresence.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3">
                  {story.globalPresence.map((location) => (
                    <span 
                      key={location}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      {location}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="headline-lg text-white mb-6">
                Your Company Could Be Next
              </h2>
              <p className="body-lg text-white/70 mb-10">
                These aren't outliers. This is what happens when the right founders meet the right ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="btn-primary-lg">
                  Apply to NORCAT Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/programs/venture-growth-services" className="btn-outline-dark">
                  Explore Programs
                </Link>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Sample detailed stories data
export const detailedStories: Record<string, StoryDetails> = {
  'circuitiq': {
    id: 'circuitiq',
    company: 'CircuitIQ',
    tagline: 'Professional electrical circuit mapping system with 100% accuracy.',
    sector: 'Cleantech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$4M', jobsCreated: 43, marketsReached: 2 },
    programs: ['SCF', 'Mentorship', 'VGS'],
    image: circuitiqTeam,
    founded: '2022',
    problem: 'Electricians and property managers had no reliable way to locate and map electrical circuits—leading to wasted time, safety hazards, and costly guesswork.',
    breakthrough: {
      text: 'CircuitIQ built the fastest, most accurate circuit mapping kit on the market, capable of locating circuits at any distance with 100% accuracy. The system digitally collects as-built property data, opening new possibilities in power management across all property types.',
    },
    timeline: [
      { year: '2022', event: 'Luke Begley introduced CircuitIQ at PITCH 2022, winning both Judge\'s Choice and People\'s Choice Awards' },
      { year: '2023', event: 'Relocated to Greater Sudbury and secured $2M in seed funding from local investors' },
      { year: '2024', event: 'Grew team from 7 to 26 employees, expanded product line' },
      { year: '2025', event: 'Secured funding from Sudbury Catalyst Fund, FedNor, NOHFC, and angel investors' },
      { year: '2026', event: 'Team of 43 staff, expanded HQ to Downtown Sudbury, mapped 400+ buildings across Canada and the USA' },
    ],
    impactMetrics: { jobs: 43, capital: '$4M', pilots: 3, markets: 2 },
    founderQuote: {
      text: "My first pitch with NORCAT Innovation was a night I'll never forget. Not only did I conquer my stage fright, but I also won! This unexpected victory caught the eye of a major investor—one who had never invested in a startup before. His investment of over $1 million, my largest yet, changed everything. Since that night in Sudbury, our company has taken off.",
      author: 'Luke Begley',
      role: 'Founder & CEO, CircuitIQ',
    },
    currentStage: 'Scaling Across North America',
    whatsNext: 'Planning expansion into underground and deep-tech space, championing optimization, innovation, and safety with smarter spaces.',
    globalPresence: ['Greater Sudbury', 'Canada', 'USA'],
  },
  'subsurface-ai': {
    id: 'subsurface-ai',
    company: 'SubSurface AI',
    tagline: 'AI-powered geological analysis reducing exploration costs by 60%.',
    sector: 'AI / Mining Tech',
    stage: 'exit',
    status: 'acquired',
    metrics: { capitalRaised: '$45M', jobsCreated: 28, marketsReached: 12 },
    programs: ['Mentorship', 'VGS', 'RAI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    founded: '2018',
    problem: 'Mineral exploration was expensive, slow, and relied too heavily on human interpretation of geological data.',
    breakthrough: {
      text: 'SubSurface AI built a machine learning platform that analyzes core samples, geophysical surveys, and historical drilling data to predict mineral deposits with 85% accuracy. Their technology reduced the average exploration program cost by 60% and timeline by 40%.',
    },
    timeline: [
      { year: '2018', event: 'Founded by Dr. Michael Torres' },
      { year: '2019', event: 'Joined NORCAT Mentorship Program' },
      { year: '2020', event: 'Seed round: $2.5M' },
      { year: '2021', event: 'Partnership with major mining companies' },
      { year: '2022', event: 'Series A: $15M' },
      { year: '2023', event: 'Acquired by Dassault Systèmes for $45M' },
    ],
    impactMetrics: { jobs: 28, revenue: '$8M', capital: '$45M', pilots: 22, markets: 12 },
    founderQuote: {
      text: 'The mentorship we received connected us with industry veterans who understood both the technical and business challenges. That network was invaluable when we started conversations with Dassault.',
      author: 'Dr. Michael Torres',
      role: 'Founder, SubSurface AI',
    },
    currentStage: 'Acquired',
    whatsNext: 'Now part of Dassault Systèmes GEOVIA division, with technology being integrated into industry-standard mining software.',
    globalPresence: ['Global'],
  },
  'ventflow-systems': {
    id: 'ventflow-systems',
    company: 'VentFlow Systems',
    tagline: 'Smart ventilation technology for safer, more sustainable mining.',
    sector: 'Cleantech / Mining',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '$6.5M', jobsCreated: 35, marketsReached: 3 },
    programs: ['UG Centre', 'Core5', 'Mentorship'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop&q=80',
    founded: '2020',
    problem: "Underground ventilation wastes 40% of a mine's energy while often failing to protect workers from hazardous air quality.",
    breakthrough: {
      text: "VentFlow's smart ventilation system uses IoT sensors, AI prediction, and automated fan controls to deliver air exactly where it's needed, when it's needed. The system reduces energy consumption by 38% while improving worker safety through real-time air quality monitoring.",
    },
    timeline: [
      { year: '2020', event: 'Joined NORCAT Innovation' },
      { year: '2021', event: 'Prototype tested at Underground Centre' },
      { year: '2022', event: 'Pilot with Vale Sudbury operations' },
      { year: '2023', event: 'Seed round: $3M' },
      { year: '2024', event: 'Epiroc OEM partnership announced' },
    ],
    impactMetrics: { jobs: 35, revenue: '$2.8M', capital: '$6.5M', pilots: 6, markets: 3 },
    founderQuote: {
      text: "Fresh air underground shouldn't be a luxury. NORCAT helped us prove that sustainability and worker safety aren't competing priorities—they're the same thing.",
      author: 'James Whitehorse',
      role: 'CEO, VentFlow Systems',
    },
    currentStage: 'Commercial Scale',
    whatsNext: 'Expanding to South America with Epiroc. Targeting 50 mine deployments by 2026.',
    globalPresence: ['Canada', 'South Africa', 'Chile'],
  },
  'rocksense-analytics': {
    id: 'rocksense-analytics',
    company: 'RockSense Analytics',
    tagline: 'Real-time rock mechanics monitoring for safer underground operations.',
    sector: 'Mining Tech',
    stage: 'early',
    status: 'piloting',
    metrics: { capitalRaised: '$1.2M', jobsCreated: 8, marketsReached: 1 },
    programs: ['UG Centre', 'SCF'],
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=1200&auto=format&fit=crop&q=80',
    founded: '2023',
    problem: 'Ground falls remain the leading cause of fatalities in underground mining, yet monitoring systems are reactive, not predictive.',
    breakthrough: {
      text: 'RockSense developed a network of micro-seismic sensors combined with machine learning to predict ground stability issues hours or days before they become dangerous, giving operators time to evacuate or reinforce.',
    },
    timeline: [
      { year: '2023', event: 'Joined NORCAT Innovation' },
      { year: '2023', event: 'Received Sudbury Catalyst Fund investment' },
      { year: '2024', event: 'First pilot at Creighton Mine' },
    ],
    impactMetrics: { jobs: 8, capital: '$1.2M', pilots: 2, markets: 1 },
    founderQuote: {
      text: "The Underground Centre isn't just a testing facility—it's where we learned what miners actually need, not what we thought they needed.",
      author: 'Elena Kowalski',
      role: 'Co-founder, RockSense Analytics',
    },
    currentStage: 'Piloting',
    whatsNext: 'Completing pilot program with results expected Q2 2025. Seed round planned for late 2025.',
    globalPresence: ['Canada'],
  },
};
