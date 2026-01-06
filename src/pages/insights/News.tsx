import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Newspaper, Calendar, ArrowRight, TrendingUp, Rocket, 
  Building2, Users, DollarSign, Award, Zap, Globe, 
  ExternalLink, ChevronRight, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Featured/Breaking news
const featuredNews = {
  title: 'Sudbury Startup Raises $12M to Scale Autonomous Mining Fleet',
  excerpt: 'MineTech Robotics closes Series A round led by Northvolt Ventures, plans to deploy autonomous vehicles at 10 additional mine sites by 2027.',
  date: 'January 6, 2026',
  category: 'Breaking',
  image: '/placeholder.svg',
  readTime: '4 min read',
};

// Main news items with more variety
const newsItems = [
  {
    title: 'NORCAT Launches New Mining Technology Accelerator Program',
    date: 'January 3, 2026',
    excerpt: 'A new 16-week program supporting startups developing innovative solutions for underground operations, with $100K in non-dilutive funding.',
    category: 'Program Launch',
    icon: Rocket,
    color: 'bg-teal-500',
  },
  {
    title: 'SubSurface AI Acquired by Dassault Systèmes for $45M',
    date: 'December 28, 2025',
    excerpt: 'Sudbury-born AI company\'s geological analysis platform now part of global mining software giant.',
    category: 'Acquisition',
    icon: DollarSign,
    color: 'bg-amber-500',
  },
  {
    title: 'Venture North Pitch 2025 Winners Announced',
    date: 'December 20, 2025',
    excerpt: 'Three startups share $150K in prizes at Northern Ontario\'s largest pitch competition.',
    category: 'Event',
    icon: Award,
    color: 'bg-purple-500',
  },
  {
    title: 'Vale Partners with 5 NORCAT Portfolio Companies',
    date: 'December 15, 2025',
    excerpt: 'Strategic pilots launching at Sudbury operations to test next-gen safety and automation tech.',
    category: 'Partnership',
    icon: Building2,
    color: 'bg-blue-500',
  },
  {
    title: 'Northern Ontario Angels Closes $8M Fund II',
    date: 'December 10, 2025',
    excerpt: 'Investor network ready to deploy capital into early-stage Northern Ontario startups.',
    category: 'Funding',
    icon: TrendingUp,
    color: 'bg-emerald-500',
  },
  {
    title: 'Core5 Opens New EV Testing Facility in Sudbury',
    date: 'December 5, 2025',
    excerpt: 'State-of-the-art facility for battery electric vehicle testing and certification.',
    category: 'Infrastructure',
    icon: Zap,
    color: 'bg-orange-500',
  },
];

// Quick updates / activity feed
const activityFeed = [
  { text: 'VentFlow Systems expanded to South Africa', time: '2 hours ago', type: 'expansion' },
  { text: 'New mentor joined: Sarah Chen, ex-Google', time: '5 hours ago', type: 'team' },
  { text: 'RockSense AI accepted into accelerator', time: '8 hours ago', type: 'program' },
  { text: 'GeoVision closed $2.5M seed round', time: '12 hours ago', type: 'funding' },
  { text: 'MineTech demo at CIM Conference', time: '1 day ago', type: 'event' },
  { text: 'Underground AI pilot at Garson Mine', time: '1 day ago', type: 'pilot' },
  { text: 'NORCAT hosted 45 investors for pitch day', time: '2 days ago', type: 'event' },
  { text: 'DrillTech signed OEM partnership', time: '2 days ago', type: 'partnership' },
  { text: 'New cohort: 8 startups onboarded', time: '3 days ago', type: 'program' },
  { text: 'SafeMine raised $1.8M pre-seed', time: '3 days ago', type: 'funding' },
];

// Stats ticker
const ecosystemStats = [
  { label: 'Active Startups', value: '47' },
  { label: 'Capital Raised This Year', value: '$89M' },
  { label: 'Jobs Created', value: '340+' },
  { label: 'Pilot Programs', value: '23' },
];

// Categories for filtering
const categories = ['All', 'Funding', 'Partnerships', 'Events', 'Programs', 'Acquisitions'];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <Layout>
      {/* Hero with Featured Story */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Live Stats Ticker - now inside hero */}
        <div className="bg-slate-950 border-b border-slate-800 overflow-hidden pt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center py-3 gap-8 animate-marquee">
              <span className="text-teal-400 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                Live Ecosystem Stats
              </span>
              {[...ecosystemStats, ...ecosystemStats].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <span className="text-slate-50 font-bold">{stat.value}</span>
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <span className="text-slate-700 mx-4">|</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Featured Article */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                    BREAKING
                  </span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredNews.readTime}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-50 leading-[1.1]">
                  {featuredNews.title}
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 text-sm">{featuredNews.date}</span>
                </div>
                
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Activity Feed */}
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                  <h3 className="font-semibold text-slate-200 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-teal-400" />
                    Live Activity
                  </h3>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="divide-y divide-slate-700/30 max-h-[400px] overflow-y-auto">
                  {activityFeed.map((item, i) => (
                    <div 
                      key={i} 
                      className="p-4 hover:bg-slate-700/30 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors">
                          {item.text}
                        </p>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors shrink-0" />
                      </div>
                      <span className="text-slate-500 text-xs mt-1 block">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-teal-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="headline-md">Latest Updates</h2>
            <span className="text-muted-foreground text-sm">{newsItems.length} stories</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 50}>
                  <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1">
                    {/* Category Header */}
                    <div className={cn("p-4 flex items-center gap-3", item.color)}>
                      <Icon className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-semibold">{item.category}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto text-teal-600 hover:text-teal-700 font-medium">
                        Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4" />
                Stay Connected
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-slate-50 mb-4">
                Never Miss an Update
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Get weekly insights on Sudbury's innovation ecosystem delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* External Links */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="font-medium">Also Featured In:</span>
            {['Northern Ontario Business', 'Mining.com', 'BetaKit', 'Sudbury Star', 'CBC North'].map((pub) => (
              <a 
                key={pub} 
                href="#" 
                className="hover:text-teal-600 transition-colors flex items-center gap-1"
              >
                {pub} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
