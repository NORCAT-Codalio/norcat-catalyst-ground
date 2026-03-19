import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Newspaper, Calendar, ArrowRight, TrendingUp, Rocket, 
  Building2, Users, DollarSign, Award, Zap, Globe, 
  ExternalLink, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import autonomousMiningVehicle from '@/assets/autonomous-mining-vehicle.jpg';
import { motion, AnimatePresence } from 'framer-motion';

// ── Neumorphic icon container (matches homepage / VentureGrowth) ──
const iconContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow:
    'inset 0 2px 4px 0 hsla(0, 0%, 100%, 0.7), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.15), 0 4px 8px -2px hsla(220, 15%, 30%, 0.15), 0 2px 4px -2px hsla(220, 15%, 30%, 0.1)',
};

// Featured/Breaking news
const featuredNews = {
  title: 'Sudbury Startup Raises $12M to Scale Autonomous Mining Fleet',
  excerpt: 'MineTech Robotics closes Series A round led by Northvolt Ventures, plans to deploy autonomous vehicles at 10 additional mine sites by 2027.',
  date: 'January 6, 2026',
  category: 'Breaking',
  image: autonomousMiningVehicle,
  readTime: '4 min read',
};

// Main news items
const newsItems = [
  {
    title: 'NORCAT Launches New Mining Technology Accelerator Program',
    date: 'January 3, 2026',
    excerpt: 'A new 16-week program supporting startups developing innovative solutions for underground operations, with $100K in non-dilutive funding.',
    category: 'Program Launch',
    icon: Rocket,
  },
  {
    title: 'SubSurface AI Acquired by Dassault Systèmes for $45M',
    date: 'December 28, 2025',
    excerpt: 'Sudbury-born AI company\'s geological analysis platform now part of global mining software giant.',
    category: 'Acquisition',
    icon: DollarSign,
  },
  {
    title: 'Venture North Pitch 2025 Winners Announced',
    date: 'December 20, 2025',
    excerpt: 'Three startups share $150K in prizes at Northern Ontario\'s largest pitch competition.',
    category: 'Event',
    icon: Award,
  },
  {
    title: 'Vale Partners with 5 NORCAT Portfolio Companies',
    date: 'December 15, 2025',
    excerpt: 'Strategic pilots launching at Sudbury operations to test next-gen safety and automation tech.',
    category: 'Partnership',
    icon: Building2,
  },
  {
    title: 'Northern Ontario Angels Closes $8M Fund II',
    date: 'December 10, 2025',
    excerpt: 'Investor network ready to deploy capital into early-stage Northern Ontario startups.',
    category: 'Funding',
    icon: TrendingUp,
  },
  {
    title: 'Core5 Opens New EV Testing Facility in Sudbury',
    date: 'December 5, 2025',
    excerpt: 'State-of-the-art facility for battery electric vehicle testing and certification.',
    category: 'Infrastructure',
    icon: Zap,
  },
];

// Activity feed
const activityFeed = [
  { text: 'VentFlow Systems expanded to South Africa', time: '2 hours ago', type: 'expansion' },
  { text: 'New mentor joined: Sarah Chen, ex-Google', time: '5 hours ago', type: 'team' },
  { text: 'RockSense AI accepted into accelerator', time: '8 hours ago', type: 'program' },
  { text: 'GeoVision closed $2.5M seed round', time: '12 hours ago', type: 'funding' },
  { text: 'MineTech demo at CIM Conference', time: '1 day ago', type: 'event' },
  { text: 'Underground AI pilot at Garson Mine', time: '1 day ago', type: 'pilot' },
];

// Stats ticker
const ecosystemStats = [
  { label: 'Active Startups', value: '47' },
  { label: 'Capital Raised This Year', value: '$89M' },
  { label: 'Jobs Created', value: '340+' },
  { label: 'Pilot Programs', value: '23' },
];

// Categories
const categories = ['All', 'Funding', 'Partnerships', 'Events', 'Programs', 'Acquisitions'];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <Layout>
      {/* ── Hero with Featured Story ── */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(224 71% 4%) 0%, hsl(215 28% 17%) 50%, hsl(217 19% 27%) 100%)',
      }}>
        {/* Stats Ticker */}
        <div className="border-b border-white/5 overflow-hidden pt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center py-3 gap-8 animate-marquee">
              <span className="text-primary text-xs font-bold tracking-wider uppercase flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Live Ecosystem Stats
              </span>
              {[...ecosystemStats, ...ecosystemStats].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <span className="text-white font-bold">{stat.value}</span>
                  <span className="text-white/50 text-sm">{stat.label}</span>
                  <span className="text-white/10 mx-4">|</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15" style={{
            background: 'radial-gradient(circle, hsl(168 100% 35% / 0.4), transparent 70%)',
          }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, hsl(164 70% 55% / 0.4), transparent 70%)',
          }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Featured Article */}
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse" style={{
                    background: 'linear-gradient(135deg, hsl(0 84% 50%), hsl(0 84% 60%))',
                  }}>
                    BREAKING
                  </span>
                  <span className="text-white/40 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredNews.readTime}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                  <span className="text-white">Sudbury Startup Raises </span>
                  <span className="italic" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168 100% 35%)' }}>$12M</span>
                  <span className="text-white"> to Scale Autonomous Mining Fleet</span>
                </h1>
                
                <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-white/30 text-sm">{featuredNews.date}</span>
                </div>
                
                <a href="#" className="glass-frosted-btn-teal rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 no-underline" style={{ color: 'hsl(168, 100%, 25%)' }}>
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* Right: Featured Image */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden liquid-glass-strong">
                  <img 
                    src={autonomousMiningVehicle} 
                    alt="Autonomous mining vehicle in underground tunnel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 liquid-glass-strong rounded-2xl px-5 py-3 glass-shimmer">
                  <span className="text-sm font-bold text-white">$12M Raised</span>
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 rounded-2xl border border-primary/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="sticky top-16 z-30 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap relative",
                  activeCategory === cat
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="news-cat-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, hsl(172 100% 30%) 0%, hsl(168 100% 35%) 50%, hsl(164 70% 55%) 100%)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── News Grid + Activity Feed ── */}
      <section className="section-padding bg-background relative">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                <span className="text-foreground">Latest </span>
                <span className="italic" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168 100% 35%)' }}>Updates</span>
              </h2>
              <p className="body-md mt-2">{newsItems.length} stories</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Main News Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={i} delay={i * 60}>
                    <article className="group liquid-glass-light rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      {/* Icon + Category header */}
                      <div className="p-6 pb-0 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                          <Icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-5 flex-1">
                          {item.excerpt}
                        </p>
                        <button className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Activity Feed Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <div className="liquid-glass-light-strong rounded-3xl p-6">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Live Activity
                  </h3>
                  <div className="space-y-4">
                    {activityFeed.map((item, i) => (
                      <div key={i} className="flex gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors" />
                        <div>
                          <p className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">{item.text}</p>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <a href="#" className="glass-frosted-btn-teal rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 no-underline" style={{ color: 'hsl(168, 100%, 25%)' }}>
              Load More Stories
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(224 71% 4%) 0%, hsl(215 28% 17%) 50%, hsl(217 19% 27%) 100%)',
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(168 100% 35% / 0.1), transparent 70%)',
        }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="badge-dark mb-6">
                <Newspaper className="w-4 h-4" />
                Stay Connected
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                <span className="text-white">Never Miss an </span>
                <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: 'hsl(168 100% 35%)' }}>Update</span>
              </h2>
              <p className="text-white/40 text-lg mb-10">
                Get weekly insights on Sudbury's innovation ecosystem delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary liquid-glass"
                />
                <button className="glass-frosted-btn rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── External Links ── */}
      <section className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Also Featured In:</span>
            {['Northern Ontario Business', 'Mining.com', 'BetaKit', 'Sudbury Star', 'CBC North'].map((pub) => (
              <a 
                key={pub} 
                href="#" 
                className="link-fancy hover:text-primary transition-colors flex items-center gap-1"
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
