import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Play } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import EcosystemDashboard from '@/components/dashboard/EcosystemDashboard';
import { StoryModal, storyData } from '@/components/StoryModal';

const successStories = [
  {
    company: 'MineTech Robotics',
    outcome: 'Series A Closed',
    amount: '$12M',
    description: 'Autonomous underground vehicles now deployed at 5 mining sites globally.',
  },
  {
    company: 'SubSurface AI',
    outcome: 'Acquisition',
    amount: '$45M',
    description: 'AI geological analysis platform acquired by major mining software company.',
  },
  {
    company: 'VentFlow Systems',
    outcome: 'Partnership',
    amount: 'Global OEM',
    description: 'Smart ventilation technology licensed by leading mining equipment manufacturer.',
  },
];


export default function Impact() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Greater Sudbury Innovation Ecosystem
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Real-Time{' '}
                <span className="text-gradient-teal">Impact Dashboard</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl mx-auto">
                Explore the growth, innovation, and economic impact of Greater Sudbury's 
                thriving startup ecosystem through interactive data visualization.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <EcosystemDashboard />
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">
                Recent <span className="text-gradient-teal">Wins</span>
              </h2>
              <p className="body-lg">
                Celebrating the achievements of our portfolio companies. Click to explore each story.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <ScrollReveal key={story.company} delay={index * 100}>
                <button 
                  onClick={() => setSelectedStory(story.company)}
                  className="w-full p-6 bg-slate-900 rounded-2xl text-center h-full group cursor-pointer transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10 border border-transparent hover:border-teal-500/30"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-4">
                    <TrendingUp className="h-4 w-4" />
                    {story.outcome}
                  </div>
                  <div className="text-4xl font-display font-bold text-slate-50 mb-2">
                    {story.amount}
                  </div>
                  <div className="font-semibold text-slate-200 mb-2">{story.company}</div>
                  <p className="text-sm text-slate-400 mb-4">{story.description}</p>
                  
                  {/* Play indicator */}
                  <div className="flex items-center justify-center gap-2 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-sm font-medium">View Story</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <StoryModal 
        story={selectedStory ? storyData[selectedStory] : null}
        open={!!selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg mb-6">
              Be Part of Our Next Chapter
            </h2>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the founders who are building the future of mining and industrial 
              technology. Your success could be our next headline.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/apply">
                Apply for Venture Growth Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
