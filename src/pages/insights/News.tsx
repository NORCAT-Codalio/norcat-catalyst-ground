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
    id: 'mining-transformed-2026-sponsors',
    title: 'Becker Mining Systems Canada and Turnkey Communications Named Title Sponsors of Mining Transformed 2026',
    date: 'March 28, 2026',
    excerpt: 'The two industry leaders join forces to co-sponsor the world\'s only mining technology exhibition hosted within an operating underground mine, taking place May 25–27 at the NORCAT Underground Centre.',
    category: 'Event',
    icon: Award,
    fullContent: `Greater Sudbury, ON – Becker Mining Systems Canada and Turnkey Communications have joined forces as Title Sponsors of Mining Transformed 2026, taking place May 25–27, 2026, at the NORCAT Underground Centre in Sudbury, Ontario.\n\nNow in its third iteration, Mining Transformed remains the world's only mining technology exhibition hosted within an operating underground mine. The event will bring together more than 50 technology companies and 250 global mining leaders to demonstrate, evaluate, and accelerate the adoption of next-generation mining innovation.\n\nBy combining Becker's global leadership in underground energy, automation, and infrastructure systems with Turnkey's expertise in advanced connectivity and private LTE/5G integration, the partnership reinforces the critical role of infrastructure and communications as the backbone of modern digital mining operations.\n\nMining Transformed provides a secure, real-world environment for mining operators to de-risk procurement decisions, evaluate technologies under authentic underground conditions, and collaborate directly with technology builders.\n\nAs Title Sponsors, Becker and Turnkey will co-host "Doors Open NORCAT" on Monday, May 25 for an exclusive evening experience at NORCAT's headquarters. The event will feature guided tours of the innovation and training centre, curated technology activations, early attendee registration, and premium networking with leaders from across the mining ecosystem.\n\n"Reliable connectivity and resilient infrastructure are foundational to the future of mining," said Terry Joseph CEO, Turnkey Communications. "As operations advance toward full electrification and automation, the integration of communications, energy, and operational systems becomes mission-critical. Mining Transformed creates a platform where those systems can be validated in real-world environments."\n\n"The mining sector is undergoing one of the most significant transitions in its history," said Albert Becker CEO, Becker Mining Systems Canada. "Electrification, automation, and digital integration demand robust underground infrastructure. Mining Transformed allows the industry to see innovation operating where it matters most — underground."\n\n"Mining Transformed is built on collaboration," said Greg Major, NORCAT Underground Centre Director. "Through NORCAT's innovation ecosystem, we bring together operators, technology leaders, and global partners to accelerate meaningful progress. The leadership of Becker Mining Systems Canada and Turnkey Communications reflects the commitment required to advance the future of mining."\n\nIndustry leaders interested in participating in Mining Transformed 2026 are encouraged to register at miningtransformed.norcat.org`,
    aboutSections: [
      { title: 'About Becker Mining Systems Canada', text: 'Becker Mining Systems is the only worldwide supplier offering complete energy distribution, automation, communication, transportation, and infrastructure solutions for the mining industry. Founded in 1964, the company is recognized globally for engineering solutions designed to perform in demanding and explosive underground environments.' },
      { title: 'About Turnkey Communications', text: 'Turnkey Communications delivers end-to-end telecommunications and infrastructure solutions for industrial and mission-critical environments. From private LTE/5G networks and advanced connectivity platforms to fiber optic deployment and large-scale infrastructure integration, Turnkey enables secure, resilient communications that power digital transformation.' },
      { title: 'About NORCAT', text: 'NORCAT is a global leader in skilled labour training and mining technology development. It operates the world\'s only underground mine dedicated to enabling companies to develop, test, and showcase emerging technologies designed to transform mining operations.' },
      { title: 'About the Canadian Institute of Mining, Metallurgy and Petroleum (CIM)', text: 'CIM is the trusted authority advancing knowledge and leading practices across Canada\'s minerals and metals industry through conferences, professional development, publications, and a national network of technical societies.' },
    ],
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

      {/* ── News Grid ── */}
      <section className="py-28 relative" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-6 relative z-10">
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

                            {/* About Sections */}
                            {item.aboutSections && item.aboutSections.length > 0 && (
                              <>
                                <div className="my-8" style={{ borderTop: '1px solid hsla(220, 15%, 75%, 0.4)' }} />
                                {item.aboutSections.map((about, idx) => (
                                  <div key={idx} className="mb-6 last:mb-0">
                                    <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 15%)', fontFamily: "'Open Sans', sans-serif" }}>
                                      {about.title}
                                    </h4>
                                    <p className="text-base leading-relaxed" style={{ color: 'hsl(220, 15%, 25%)', fontFamily: "'Open Sans', sans-serif" }}>
                                      {about.text}
                                    </p>
                                  </div>
                                ))}
                              </>
                            )}
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
