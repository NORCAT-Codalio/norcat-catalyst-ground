import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    company: 'TechVenture Co.',
    title: 'From Idea to $10M Exit',
    excerpt: 'How a NORCAT startup went from concept to acquisition in just 3 years.',
    metric: '$10M Exit',
  },
  {
    company: 'MiningTech Solutions',
    title: 'Revolutionizing Underground Safety',
    excerpt: 'Developing AI-powered safety systems now deployed in mines worldwide.',
    metric: '50+ Mines',
  },
  {
    company: 'GreenMine Inc.',
    title: 'Sustainable Mining Innovation',
    excerpt: 'Creating circular economy solutions for mine waste management.',
    metric: '100K+ Tons',
  },
  {
    company: 'DataDrill Analytics',
    title: 'AI for Exploration',
    excerpt: 'Machine learning platform reducing exploration costs by 60%.',
    metric: '60% Cost Reduction',
  },
];

const SuccessStories = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Trophy className="w-4 h-4" />
              Insights
            </div>
            <h1 className="headline-hero text-white mb-6">
              Success<br />
              <span className="text-gradient">Stories</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl">
              Inspiring journeys from founders in our ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="card-modern p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">{story.company}</span>
                    <span className="badge text-xs">{story.metric}</span>
                  </div>
                  <h2 className="headline-sm mb-3">{story.title}</h2>
                  <p className="body-md flex-grow">{story.excerpt}</p>
                  <Button variant="ghost" className="mt-4 self-start p-0 h-auto text-primary hover:text-primary/80">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
