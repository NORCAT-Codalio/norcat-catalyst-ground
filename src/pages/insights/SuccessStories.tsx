import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="absolute inset-0 bg-mesh" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 badge-dark mb-8">
                <Sparkles className="w-4 h-4" />
                Portfolio Companies
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="headline-hero text-white mb-8">
                Built in<br />
                <span className="text-gradient">Sudbury.</span><br />
                Scaling<br />
                <span className="text-gradient">Globally.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="body-xl text-white/70 max-w-2xl mb-12">
                These are the founders proving that world-changing mining and industrial technology 
                can come from Northern Ontario. Real companies. Real impact. Real stories.
              </p>
            </ScrollReveal>

            {/* Quick stats */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {ecosystemStats.map((stat, i) => (
                  <div key={i}>
                    <div className="stat-number text-4xl md:text-5xl mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 glass-dark border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-4 flex flex-wrap items-center gap-6">
            {/* Sector filter */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm font-medium">Sector:</span>
              <div className="flex gap-1">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedSector === sector
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage filter */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm font-medium">Stage:</span>
              <div className="flex gap-1">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      selectedStage === stage
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="ml-auto text-sm text-muted-foreground">
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
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="headline-hero text-white mb-8">
                Your Company<br />Could Be Next
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="body-xl text-white/70 mb-12 max-w-2xl mx-auto">
                These aren't outliers. This is what happens when the right founders 
                meet the right ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply" className="btn-primary-lg">
                  Apply to NORCAT Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/programs/venture-growth-services" className="btn-outline-dark">
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
