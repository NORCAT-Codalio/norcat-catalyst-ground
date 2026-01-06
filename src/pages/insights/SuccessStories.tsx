import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Trophy, Filter, ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { SuccessStoryCard, type SuccessStory } from '@/components/SuccessStoryCard';
import { SuccessStoryModal, detailedStories } from '@/components/SuccessStoryModal';

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
const markets = ['All', 'Local', 'National', 'Global'];

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
  const [selectedMarket, setSelectedMarket] = useState('All');
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const filteredStories = allStories.filter((story) => {
    if (selectedSector !== 'All' && story.sector !== selectedSector) return false;
    if (selectedStage !== 'All' && story.stage !== selectedStage.toLowerCase()) return false;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-400 text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4" />
                Portfolio Companies
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.95] mb-8">
                Built in<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                  Sudbury.
                </span><br />
                Scaling<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                  Globally.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-400 max-w-2xl mb-12">
                These are the founders proving that world-changing mining and industrial technology 
                can come from Northern Ontario. Real companies. Real impact. Real stories.
              </p>
            </ScrollReveal>

            {/* Quick stats */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ecosystemStats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-display font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-4 flex flex-wrap items-center gap-6">
            {/* Sector filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm font-medium">Sector:</span>
              <div className="flex gap-1">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedSector === sector
                        ? "bg-teal-500 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm font-medium">Stage:</span>
              <div className="flex gap-1">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedStage === stage
                        ? "bg-teal-500 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-slate-500">
              {filteredStories.length} {filteredStories.length === 1 ? 'company' : 'companies'}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-slate-500 text-lg">No companies match your filters.</p>
              <Button 
                variant="ghost" 
                className="mt-4 text-teal-400"
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
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_60%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-tight">
                Your Company<br />Could Be Next
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
                These aren't outliers. This is what happens when the right founders 
                meet the right ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-10 py-6 text-lg">
                  <Link to="/apply">
                    Apply to NORCAT Innovation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-full px-10 py-6 text-lg">
                  <Link to="/programs/venture-growth-services">
                    Explore Programs
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
