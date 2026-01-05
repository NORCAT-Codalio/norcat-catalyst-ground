import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    title: 'NORCAT Launches New Mining Technology Accelerator',
    date: 'January 3, 2026',
    excerpt: 'A new program to support startups developing innovative solutions for the mining industry.',
    category: 'Announcement',
  },
  {
    title: 'Portfolio Company Raises $5M Series A',
    date: 'December 28, 2025',
    excerpt: 'One of our portfolio companies has secured significant funding to scale operations.',
    category: 'Funding',
  },
  {
    title: 'Annual Innovation Summit Recap',
    date: 'December 15, 2025',
    excerpt: 'Highlights from our largest gathering of entrepreneurs, investors, and industry leaders.',
    category: 'Events',
  },
  {
    title: 'New Partnership with Global Mining Company',
    date: 'December 10, 2025',
    excerpt: 'Strategic partnership to accelerate technology adoption in the mining sector.',
    category: 'Partnership',
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Newspaper className="w-4 h-4" />
              Insights
            </div>
            <h1 className="headline-hero text-white mb-6">
              <span className="text-gradient">News</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl">
              The latest updates from NORCAT Innovation and our portfolio companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="card-modern p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="badge text-xs">{item.category}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="headline-sm mb-3">{item.title}</h2>
                  <p className="body-md flex-grow">{item.excerpt}</p>
                  <Button variant="ghost" className="mt-4 self-start p-0 h-auto text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default News;
