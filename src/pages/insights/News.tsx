import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Newspaper, Calendar, ArrowRight, TrendingUp, Rocket, 
  Building2, Users, DollarSign, Award, Zap, Globe, 
  ExternalLink, Clock, Sparkles, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import autonomousMiningVehicle from '@/assets/autonomous-mining-vehicle.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import signatureLines from '@/assets/signature-lines.png';
import newsHeroBg from '@/assets/news-hero-bg.png';

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
    id: 'norcat-accelerator',
    title: 'NORCAT Launches New Mining Technology Accelerator Program',
    date: 'January 3, 2026',
    excerpt: 'A new 16-week program supporting startups developing innovative solutions for underground operations, with $100K in non-dilutive funding.',
    category: 'Program Launch',
    icon: Rocket,
    fullContent: `NORCAT Innovation has officially launched its newest accelerator program, specifically designed to support startups developing cutting-edge solutions for underground mining operations.\n\nThe 16-week program offers up to $100K in non-dilutive funding, access to NORCAT's Underground Centre for live testing, and dedicated mentorship from industry veterans. Applications are now open for the Spring 2026 cohort.\n\n"We've seen firsthand how access to real mining environments accelerates product development," said a NORCAT spokesperson. "This program bridges the gap between prototype and pilot-ready technology."\n\nThe accelerator will focus on four key areas: autonomous systems, environmental monitoring, worker safety, and data analytics. Selected startups will also gain introductions to major mining operators for potential pilot partnerships.`,
  },
  {
    id: 'subsurface-acquisition',
    title: 'SubSurface AI Acquired by Dassault Systèmes for $45M',
    date: 'December 28, 2025',
    excerpt: 'Sudbury-born AI company\'s geological analysis platform now part of global mining software giant.',
    category: 'Acquisition',
    icon: DollarSign,
    fullContent: `In one of the largest exits in Northern Ontario's tech history, Sudbury-based SubSurface AI has been acquired by French software giant Dassault Systèmes for $45 million.\n\nSubSurface AI's proprietary geological analysis platform uses machine learning to interpret drill core data and predict mineral deposits with unprecedented accuracy. The technology will be integrated into Dassault's 3DEXPERIENCE platform for mining.\n\nFounded in 2020, SubSurface AI grew from a two-person startup at NORCAT to a 35-person company serving mining operations across three continents. The acquisition validates Northern Ontario as a serious hub for mining technology innovation.\n\n"This is proof that you don't need to be in Silicon Valley to build world-class AI," said the company's co-founder. "Sudbury gave us everything we needed—domain expertise, testing infrastructure, and a supportive ecosystem."`,
  },
  {
    id: 'venture-north-pitch',
    title: 'Venture North Pitch 2025 Winners Announced',
    date: 'December 20, 2025',
    excerpt: 'Three startups share $150K in prizes at Northern Ontario\'s largest pitch competition.',
    category: 'Event',
    icon: Award,
    fullContent: `The 2025 Venture North Pitch competition concluded with three exceptional startups taking home a combined $150K in prizes at the Sudbury Theatre Centre.\n\nFirst place ($75K) went to MineralSense, developing AI-powered ore grade analysis. Second place ($50K) was awarded to GreenDrill Solutions for their electric drilling systems. Third place ($25K) went to SafeRock Analytics for predictive ground stability monitoring.\n\nOver 120 applications were received from across Northern Ontario, with 12 finalists presenting to a panel of investors and industry leaders. The event drew over 400 attendees and featured keynote addresses from successful NORCAT alumni.\n\n"The caliber of startups we're seeing in Northern Ontario continues to rise year over year," noted one of the judges. "These companies aren't just locally competitive—they're globally relevant."`,
  },
  {
    id: 'vale-partnership',
    title: 'Vale Partners with 5 NORCAT Portfolio Companies',
    date: 'December 15, 2025',
    excerpt: 'Strategic pilots launching at Sudbury operations to test next-gen safety and automation tech.',
    category: 'Partnership',
    icon: Building2,
    fullContent: `Vale Base Metals has announced strategic pilot partnerships with five NORCAT portfolio companies, marking a significant milestone for the Sudbury innovation ecosystem.\n\nThe pilots will take place at Vale's Sudbury operations over the next 12 months, covering technologies ranging from autonomous vehicle navigation to real-time air quality monitoring. Each startup will receive dedicated access to operational mine sites and engineering support from Vale's technical team.\n\n"Innovation doesn't happen in isolation," said Vale's VP of Technology. "These partnerships allow us to test promising technologies in real-world conditions while giving startups the validation they need to scale."\n\nThe selected companies were chosen from a pool of over 20 applicants through a rigorous evaluation process that included technical feasibility assessments and alignment with Vale's operational priorities.`,
  },
  {
    id: 'noa-fund',
    title: 'Northern Ontario Angels Closes $8M Fund II',
    date: 'December 10, 2025',
    excerpt: 'Investor network ready to deploy capital into early-stage Northern Ontario startups.',
    category: 'Funding',
    icon: TrendingUp,
    fullContent: `Northern Ontario Angels (NOA) has successfully closed its second fund at $8 million, surpassing its initial target of $6 million due to strong investor demand.\n\nThe fund will focus on early-stage investments in mining technology, cleantech, and health innovation startups based in Northern Ontario. NOA plans to make 15-20 investments over the next three years, with initial cheques ranging from $100K to $500K.\n\nFund I, which launched in 2022, has already generated significant returns with two exits and several companies raising follow-on rounds from institutional investors. The success has attracted new angel investors from across Ontario and beyond.\n\n"Northern Ontario's startup ecosystem has matured to the point where there's real deal flow worth investing in," said NOA's managing director. "We're seeing founders with deep domain expertise building companies that solve real problems for massive global industries."`,
  },
  {
    id: 'core5-ev-facility',
    title: 'Core5 Opens New EV Testing Facility in Sudbury',
    date: 'December 5, 2025',
    excerpt: 'State-of-the-art facility for battery electric vehicle testing and certification.',
    category: 'Infrastructure',
    icon: Zap,
    fullContent: `NORCAT's Core5 division has officially opened a state-of-the-art battery electric vehicle (BEV) testing and certification facility in Sudbury, positioning Northern Ontario as a leader in mining electrification.\n\nThe 15,000-square-foot facility features advanced dynamometer systems, battery thermal management testing capabilities, and a controlled environment chamber that can simulate underground mining conditions. It is the only facility of its kind in Canada specifically designed for mining BEVs.\n\n"The transition to electric vehicles underground is one of the biggest shifts in mining history," said Core5's director. "This facility ensures that equipment is safe, reliable, and optimized before it enters an active mine."\n\nSeveral major mining equipment manufacturers have already booked testing time at the facility, and Core5 expects to certify over 20 vehicle models in its first year of operation.`,
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
  const [selectedNews, setSelectedNews] = useState<string | null>(null);
  return (
    <Layout>
      {/* ── Hero (matches About page) ── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 30% 7%) 0%, hsl(215 28% 10%) 60%, hsl(220 25% 12%) 100%)' }}>
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-end">
          <img src={newsHeroBg} alt="" className="h-full max-w-none object-contain object-right" />
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
                News & Updates
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-white mb-8" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                Ecosystem{' '}
                <span style={{ color: 'hsl(0, 0%, 100%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Newsroom</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl leading-relaxed text-white max-w-2xl font-light">
                The latest from NORCAT Innovation and our portfolio companies—funding rounds, 
                partnerships, program launches, and ecosystem milestones.
              </p>
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
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168 100% 35%)' }}>Updates</span>
              </h2>
              <p className="body-md mt-2">{newsItems.length} stories</p>
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = selectedNews === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                  className={`cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                  style={{ zIndex: isExpanded ? 10 : 1 }}
                  onClick={() => !isExpanded && setSelectedNews(item.id)}
                >
                  <motion.div
                    layout
                    className="rounded-[20px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                      borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                      borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                      borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}
                    animate={{
                      scale: selectedNews && !isExpanded ? 0.95 : 1,
                      opacity: selectedNews && !isExpanded ? 0.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    {/* ── Collapsed Card ── */}
                    {!isExpanded && (
                      <motion.div layout="position" className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                            <Icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'hsl(168, 100%, 28%)' }}>{item.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'hsl(220, 15%, 50%)' }}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                        <h3 className="text-lg font-bold mb-3 leading-snug line-clamp-2" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm font-light line-clamp-3 mb-4" style={{ color: 'hsl(220, 15%, 40%)' }}>
                          {item.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'hsl(168, 100%, 28%)' }}>
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </motion.div>
                    )}

                    {/* ── Expanded Card ── */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                      >
                        {/* Header bar */}
                        <div className="relative p-8 md:p-12 pb-0">
                          {/* Close button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedNews(null); }}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110"
                            style={{
                              background: 'hsla(220, 15%, 85%, 0.5)',
                              border: '1px solid hsla(220, 15%, 80%, 0.4)',
                            }}
                          >
                            <X className="w-5 h-5" style={{ color: 'hsl(220, 15%, 30%)' }} />
                          </button>

                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                              <Icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{
                              background: 'hsl(168 100% 35% / 0.1)',
                              color: 'hsl(168, 100%, 28%)',
                              border: '0.5px solid hsl(168 100% 35% / 0.2)',
                            }}>
                              {item.category}
                            </span>
                            <span className="text-xs" style={{ color: 'hsl(220, 15%, 50%)' }}>{item.date}</span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl" style={{ color: 'hsl(220, 15%, 15%)', fontFamily: "'Open Sans', sans-serif" }}>
                            {item.title}
                          </h2>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 pt-4">
                          <div className="max-w-3xl">
                            {item.fullContent.split('\n\n').map((paragraph, idx) => (
                              <p key={idx} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: 'hsl(220, 15%, 25%)', fontFamily: "'Open Sans', sans-serif" }}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>
              Never Miss an{' '}
              <span style={{ color: 'hsl(168, 100%, 28%)' }}>Update</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
              Get weekly insights on Sudbury's innovation ecosystem delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                style={{
                  background: 'hsla(220, 15%, 100%, 0.7)',
                  border: '1.5px solid hsla(220, 15%, 80%, 0.5)',
                  color: 'hsl(220, 15%, 20%)',
                  boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 50%, 0.1)',
                }}
              />
              <button 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
                style={{
                  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  color: 'hsl(168, 40%, 25%)',
                  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                }}
              >
                Subscribe
              </button>
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
