import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Sparkles, X, DollarSign, Users, Globe, TrendingUp, Building2, CheckCircle, MapPin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import type { SuccessStory } from '@/components/SuccessStoryCard';
import { detailedStories } from '@/components/SuccessStoryModal';
import signatureLines from '@/assets/signature-lines.png';
import successStoriesHeroBg from '@/assets/success-stories-hero-bg.png';


// All stories data
const allStories: SuccessStory[] = [
  {
    id: 'minetech-robotics',
    company: 'MineTech Robotics',
    tagline: 'Autonomous underground vehicles making mining safer and more efficient.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'scaling',
    metrics: { capitalRaised: '$12M', jobsCreated: 47, marketsReached: 5 },
    programs: ['UG Centre', 'SCF', 'Mentorship', 'VGS'],
    image: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?w=800&auto=format&fit=crop&q=80',
    founded: '2019',
    hasVideo: true,
  },
  {
    id: 'subsurface-ai',
    company: 'SubSurface AI',
    tagline: 'AI-powered geological analysis reducing exploration costs by 60%.',
    sector: 'AI',
    stage: 'exit',
    status: 'acquired',
    metrics: { capitalRaised: '$45M', jobsCreated: 28, marketsReached: 12 },
    programs: ['Mentorship', 'VGS', 'RAI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    founded: '2018',
  },
  {
    id: 'ventflow-systems',
    company: 'VentFlow Systems',
    tagline: 'Smart ventilation technology for safer, more sustainable mining.',
    sector: 'Cleantech',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '$6.5M', jobsCreated: 35, marketsReached: 3 },
    programs: ['UG Centre', 'Core5', 'Mentorship'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
    founded: '2020',
    hasVideo: true,
  },
  {
    id: 'rocksense-analytics',
    company: 'RockSense Analytics',
    tagline: 'Real-time rock mechanics monitoring for safer underground operations.',
    sector: 'Mining Tech',
    stage: 'early',
    status: 'piloting',
    metrics: { capitalRaised: '$1.2M', jobsCreated: 8, marketsReached: 1 },
    programs: ['UG Centre', 'SCF'],
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&auto=format&fit=crop&q=80',
    founded: '2023',
  },
  {
    id: 'drilltech-solutions',
    company: 'DrillTech Solutions',
    tagline: 'Precision drilling guidance systems for optimized ore extraction.',
    sector: 'Mining Tech',
    stage: 'growth',
    status: 'commercial',
    metrics: { capitalRaised: '$8M', jobsCreated: 32, marketsReached: 4 },
    programs: ['UG Centre', 'Mentorship', 'VGS'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80',
    founded: '2017',
  },
  {
    id: 'safemine-ai',
    company: 'SafeMine AI',
    tagline: 'Computer vision for real-time safety hazard detection.',
    sector: 'AI',
    stage: 'early',
    status: 'piloting',
    metrics: { capitalRaised: '$1.8M', jobsCreated: 12, marketsReached: 1 },
    programs: ['RAI', 'SCF', 'Mentorship'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    founded: '2022',
  },
];

// Filter options
const sectors = ['All', 'Mining Tech', 'AI', 'Cleantech', 'Medtech'];
const stages = ['All', 'Early', 'Growth', 'Scale', 'Exit'];

// Ecosystem stats
const ecosystemStats = [
  { value: '$180M+', label: 'Capital Raised' },
  { value: '450+', label: 'Jobs Created' },
  { value: '23', label: 'Countries Reached' },
  { value: '89%', label: 'Survival Rate' },
];

const SuccessStories = () => {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const filteredStories = allStories.filter((story) => {
    if (selectedSector !== 'All' && story.sector !== selectedSector) return false;
    if (selectedStage !== 'All' && story.stage !== selectedStage.toLowerCase()) return false;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 30% 7%) 0%, hsl(215 28% 10%) 60%, hsl(220 25% 12%) 100%)' }}>
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-end">
          <img src={successStoriesHeroBg} alt="" className="h-full max-w-none object-contain object-right" />
        </div>

        {/* Signature lines */}
        <img
          src={signatureLines}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-80 pointer-events-none select-none mix-blend-overlay"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-semibold tracking-[0.15em] uppercase text-white mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio Companies
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-white mb-8" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                Built in Sudbury.{' '}
                <span style={{ color: 'hsl(0, 0%, 100%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Scaling Globally.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl leading-relaxed text-white max-w-2xl font-light">
                These are the founders proving that world-changing mining and industrial technology 
                can come from Northern Ontario. Real companies. Real impact. Real stories.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-4 flex flex-wrap items-center gap-6">
            {/* Sector filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">Sector:</span>
              <div className="flex gap-1">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedSector === sector
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">Stage:</span>
              <div className="flex gap-1">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedStage === stage
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredStories.length} {filteredStories.length === 1 ? 'company' : 'companies'}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, i) => (
              <ScrollReveal key={story.id} delay={i * 50}>
                <SuccessStoryCard 
                  story={story} 
                  onClick={() => setSelectedStory(story.id)}
                />
              </ScrollReveal>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <p className="body-lg">No companies match your filters.</p>
              <Button 
                variant="ghost" 
                className="mt-4 text-primary"
                onClick={() => {
                  setSelectedSector('All');
                  setSelectedStage('All');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Story Modal */}
      <SuccessStoryModal 
        story={selectedStory ? detailedStories[selectedStory] || null : null}
        open={!!selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                Your Company Could Be{' '}
                <span style={{ color: 'hsl(168, 100%, 28%)', fontWeight: 700 }}>Next</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
                These aren't outliers. This is what happens when the right founders 
                meet the right ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/apply" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(168, 30%, 85%, 0.5) 0%, hsla(168, 25%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 75%, 0.4)',
                    color: 'hsl(168, 50%, 22%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}
                >
                  Apply to NORCAT Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/programs/venture-growth-services" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 90%, 0.5) 0%, hsla(220, 15%, 85%, 0.25) 100%)',
                    border: '1.5px solid hsla(220, 15%, 80%, 0.4)',
                    color: 'hsl(220, 15%, 30%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 95%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.08)',
                  }}
                >
                  Explore Programs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
