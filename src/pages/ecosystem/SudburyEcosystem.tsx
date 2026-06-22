import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  Building2, 
  GraduationCap, 
  Landmark, 
  DollarSign, 
  Pickaxe,
  ExternalLink,
  ChevronRight,
  Zap,
  Target,
  Rocket,
  Award,
  FlaskConical,
  Cpu,
  Shield,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';

type CategoryType = 'all' | 'support' | 'funding' | 'education' | 'research' | 'industry' | 'partners';

interface EcosystemOrg {
  name: string;
  category: CategoryType;
  description: string;
  longDescription?: string;
  link?: string;
  internalLink?: string;
  icon: React.ElementType;
  highlight?: string;
  tags?: string[];
}

const categories = [
  { id: 'all' as const, label: 'All Resources', icon: Globe },
  { id: 'support' as const, label: 'Support Orgs', icon: Users },
  { id: 'funding' as const, label: 'Funding', icon: DollarSign },
  { id: 'education' as const, label: 'Education', icon: GraduationCap },
  { id: 'research' as const, label: 'Research', icon: FlaskConical },
  { id: 'industry' as const, label: 'Industry', icon: Pickaxe },
  { id: 'partners' as const, label: 'Partner Programs', icon: Landmark },
];

const ecosystemOrgs: EcosystemOrg[] = [
  // Support Organizations
  {
    name: 'NORCAT Innovation',
    category: 'support',
    description: 'Sudbury\'s Regional Innovation Centre',
    longDescription: 'Part of Ontario\'s 17-centre RIC Network, providing entrepreneurs with resources, mentorship, and funding to start and scale businesses.',
    internalLink: '/about',
    icon: Rocket,
    highlight: 'Regional Innovation Centre',
    tags: ['Mentorship', 'Programs', 'Funding']
  },
  {
    name: 'Greater Sudbury Development Corporation',
    category: 'support',
    description: 'Economic development agency for the city',
    longDescription: 'Provides business support services, investment attraction, and economic development initiatives for Greater Sudbury.',
    link: 'https://investsudbury.ca',
    icon: Building2,
    tags: ['Economic Development', 'Investment']
  },
  {
    name: 'Sudbury Chamber of Commerce',
    category: 'support',
    description: 'Business advocacy & networking',
    longDescription: 'Represents the interests of businesses in Greater Sudbury, providing networking opportunities and advocacy.',
    link: 'https://sudburychamber.ca',
    icon: Users,
    tags: ['Networking', 'Advocacy']
  },
  {
    name: 'FedNor',
    category: 'support',
    description: 'Federal economic development agency',
    longDescription: 'Federal Economic Development Agency for Northern Ontario, providing funding and support for businesses and communities.',
    link: 'https://fednor.gc.ca',
    icon: Landmark,
    highlight: 'Federal Agency',
    tags: ['Federal Funding', 'Economic Development']
  },
  {
    name: 'NOHFC',
    category: 'support',
    description: 'Northern Ontario Heritage Fund Corporation',
    longDescription: 'Provincial agency investing in projects that create jobs and strengthen Northern Ontario communities.',
    link: 'https://nohfc.ca',
    icon: Target,
    tags: ['Provincial Funding', 'Job Creation']
  },

  // Funding
  {
    name: 'Sudbury Catalyst Fund',
    category: 'funding',
    description: '$5M venture capital fund for startups',
    longDescription: 'A unique venture capital fund administered by the Nickel Basin Federal Development Corporation in collaboration with the City, FedNor, and NORCAT.',
    internalLink: '/funding/sudbury-catalyst-fund',
    icon: Zap,
    highlight: '$5M Fund',
    tags: ['Venture Capital', 'Investment']
  },
  {
    name: 'Northern Ontario Angels',
    category: 'funding',
    description: 'Angel investor network',
    longDescription: 'Connects investment-ready founders with a network of 50+ active angel investors across Northern Ontario.',
    internalLink: '/funding/investor-hub',
    icon: Award,
    highlight: '50+ Angels',
    tags: ['Angel Investment', 'Network']
  },
  {
    name: 'Innovation Acceleration Program',
    category: 'funding',
    description: 'Matching grants up to $20,000',
    longDescription: 'NORCAT Innovation grant program for tech-enabled founders in Greater Sudbury to accelerate commercialization.',
    internalLink: '/funding/innovation-acceleration-program',
    icon: Rocket,
    highlight: 'Up to $20K',
    tags: ['Grants', 'Commercialization']
  },
  {
    name: 'Regional AI Initiative',
    category: 'funding',
    description: 'AI adoption grants up to $20,000',
    longDescription: 'Accelerates AI adoption among SMEs with matching grants for AI integration and commercialization projects.',
    internalLink: '/funding/regional-ai-program',
    icon: Cpu,
    highlight: 'AI Focus',
    tags: ['AI', 'Grants', 'Technology']
  },

  // Education
  {
    name: 'Laurentian University',
    category: 'education',
    description: 'Research-intensive university',
    longDescription: 'Northern Ontario\'s bilingual university offering programs in mining, environmental studies, and more.',
    link: 'https://laurentian.ca',
    icon: GraduationCap,
    tags: ['Research', 'Graduate Programs']
  },
  {
    name: 'Cambrian College',
    category: 'education',
    description: 'Applied learning & technical training',
    longDescription: 'Offers diploma programs in mining, trades, technology, and applied research through Cambrian R&D.',
    link: 'https://cambriancollege.ca',
    icon: GraduationCap,
    tags: ['Technical Training', 'Applied Research']
  },
  {
    name: 'College Boréal',
    category: 'education',
    description: 'Francophone post-secondary institution',
    longDescription: 'French-language college offering programs in trades, health sciences, and business.',
    link: 'https://collegeboreal.ca',
    icon: GraduationCap,
    tags: ['Francophone', 'Technical Training']
  },
  {
    name: 'Cambrian R&D',
    category: 'education',
    description: 'Applied research centre',
    longDescription: 'Applied research arm of Cambrian College, supporting industry partnerships and innovation projects.',
    link: 'https://cambrianresearch.ca',
    icon: FlaskConical,
    tags: ['Applied Research', 'Industry Partnerships']
  },

  // Research
  {
    name: 'MIRARCO',
    category: 'research',
    description: 'Mining innovation research consortium',
    longDescription: 'Research consortium focused on mining innovation, safety, and environmental sustainability.',
    link: 'https://mirarco.org',
    icon: FlaskConical,
    highlight: 'Mining Research',
    tags: ['Mining', 'Innovation', 'Safety']
  },
  {
    name: 'CEMI',
    category: 'research',
    description: 'Centre for Excellence in Mining Innovation',
    longDescription: 'Industry-led research organization accelerating the development and adoption of mining innovation.',
    link: 'https://cemi.ca',
    icon: Landmark,
    tags: ['Mining Excellence', 'R&D']
  },
  {
    name: 'SNOLAB',
    category: 'research',
    description: 'World-class underground physics lab',
    longDescription: 'Deep underground research facility 2km below surface, conducting cutting-edge physics research.',
    link: 'https://snolab.ca',
    icon: Sparkles,
    highlight: '2km Underground',
    tags: ['Physics', 'World-Class Facility']
  },
  {
    name: 'Metal Earth',
    category: 'research',
    description: 'Mineral exploration research',
    longDescription: 'Major research initiative investigating the evolution of Earth\'s crust to improve mineral exploration.',
    link: 'https://merc.laurentian.ca',
    icon: Globe,
    tags: ['Geoscience', 'Exploration']
  },

  // Industry
  {
    name: 'Vale',
    category: 'industry',
    description: 'Global mining company',
    longDescription: 'One of the world\'s largest producers of nickel and a major employer in Greater Sudbury.',
    link: 'https://vale.com',
    icon: Pickaxe,
    highlight: 'Major Employer',
    tags: ['Nickel', 'Global']
  },
  {
    name: 'Glencore',
    category: 'industry',
    description: 'Diversified mining company',
    longDescription: 'Major commodity company with significant mining operations in the Sudbury basin.',
    link: 'https://glencore.com',
    icon: Pickaxe,
    tags: ['Copper', 'Nickel', 'Zinc']
  },
  {
    name: 'Epiroc',
    category: 'industry',
    description: 'Mining equipment OEM',
    longDescription: 'Leading manufacturer of mining and construction equipment, with R&D presence in Sudbury.',
    link: 'https://epiroc.com',
    icon: Zap,
    tags: ['Equipment', 'Automation']
  },
  {
    name: 'Sandvik',
    category: 'industry',
    description: 'Mining technology solutions',
    longDescription: 'Global engineering company providing mining and rock technology solutions.',
    link: 'https://sandvik.com',
    icon: Target,
    tags: ['Technology', 'Engineering']
  },

  // Partner Programs
  {
    name: 'Core5',
    category: 'partners',
    description: 'OVIN Regional Technology Site',
    longDescription: 'Pan-Northern Ontario initiative supporting SMEs in BEV and EV technology development.',
    internalLink: '/mining/core5',
    icon: Zap,
    highlight: 'EV Innovation',
    tags: ['EV', 'Battery Tech', 'Clean Tech']
  },
  {
    name: 'Rogers Cybersecure Catalyst',
    category: 'partners',
    description: 'Cybersecurity accelerator',
    longDescription: 'Partnership providing cybersecurity training and commercialization support.',
    internalLink: '/partners/rogers-cybersecure',
    icon: Shield,
    tags: ['Cybersecurity', 'Training']
  },
];

// Shared styles
const glassCardStyle: React.CSSProperties = {
  background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 90%, 0.15) 50%, hsla(220, 20%, 95%, 0.2) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid hsla(168, 30%, 80%, 0.35)',
  boxShadow: '0 8px 32px hsla(168, 30%, 40%, 0.08), inset 0 1px 0 hsla(0, 0%, 100%, 0.4)',
};

const neumorphicIconStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsl(220, 15%, 96%), hsl(220, 15%, 88%))',
  boxShadow: '6px 6px 14px hsla(220, 15%, 70%, 0.4), -6px -6px 14px hsla(0, 0%, 100%, 0.9), inset 0 1px 0 hsla(0, 0%, 100%, 0.7)',
  border: '1px solid hsla(220, 15%, 85%, 0.5)',
};

const SudburyEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedOrg, setSelectedOrg] = useState<EcosystemOrg | null>(null);

  const filteredOrgs = activeCategory === 'all' 
    ? ecosystemOrgs 
    : ecosystemOrgs.filter(org => org.category === activeCategory);

  const stats = [
    { number: '30+', label: 'Support Organizations', icon: Users },
    { number: '$25M+', label: 'Available Funding', icon: DollarSign },
    { number: '5', label: 'Post-Secondary Institutions', icon: GraduationCap },
    { number: '8+', label: 'Research Centres', icon: FlaskConical },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden" style={{ background: 'hsl(220, 15%, 92%)' }}>
        {/* Signature lines - top right */}
        <img 
          src={signatureLines} 
          alt="" aria-hidden="true" 
          className="absolute -top-10 -right-10 w-[550px] opacity-[0.07] pointer-events-none" 
        />
        <img 
          src={linesTeal} 
          alt="" aria-hidden="true" 
          className="absolute -top-10 -right-10 w-[60%] pointer-events-none" 
          style={{ transform: 'scaleX(-1)', opacity: 0.35 }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <ScrollReveal>
                <span 
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-8"
                  style={{
                    ...glassCardStyle,
                    color: 'hsl(168, 100%, 28%)',
                  }}
                >
                  <Globe className="w-4 h-4" />
                  Greater Sudbury Innovation Ecosystem
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mb-6" style={{ lineHeight: 1.1 }}>
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'hsl(220, 20%, 18%)' }}>
                    Everything You Need to
                  </span>
                  <br />
                  <span style={{ 
                    fontFamily: "'Open Sans', sans-serif", 
                    fontWeight: 600, 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    background: 'linear-gradient(135deg, hsl(172, 100%, 30%) 0%, hsl(168, 100%, 35%) 50%, hsl(164, 70%, 55%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Build & Scale
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg max-w-xl" style={{ color: 'hsl(220, 15%, 40%)', lineHeight: 1.7 }}>
                  Explore the complete network of support organizations, funding programs, 
                  research institutions, and industry partners that make Greater Sudbury 
                  one of Canada's most connected innovation ecosystems.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column - 2x2 Stats Grid */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center p-6 rounded-2xl"
                    style={glassCardStyle}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={neumorphicIconStyle}
                    >
                      <stat.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                    </div>
                    <div className="text-3xl font-bold mb-1" style={{ 
                      fontFamily: "'Open Sans', sans-serif",
                      color: 'hsl(220, 20%, 18%)',
                    }}>
                      {stat.number}
                    </div>
                    <div className="text-sm" style={{ color: 'hsl(220, 15%, 45%)' }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 py-4 border-b" style={{ 
        background: 'hsla(220, 15%, 92%, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'hsla(220, 15%, 80%, 0.5)',
      }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={activeCategory === cat.id ? {
                  background: 'linear-gradient(135deg, hsl(172, 100%, 30%) 0%, hsl(168, 100%, 35%) 50%, hsl(164, 70%, 55%) 100%)',
                  color: 'white',
                  border: '0.5px solid hsla(168, 100%, 50%, 0.4)',
                  boxShadow: 'inset 0 1px 0 0 hsla(168, 100%, 60%, 0.3), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 15px hsla(168, 100%, 35%, 0.3)',
                } : {
                  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  color: 'hsl(220, 15%, 40%)',
                  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                }}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Directory */}
      <section className="py-28" style={{ background: 'hsl(220, 15%, 92%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4" style={{ lineHeight: 1.15 }}>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'hsl(220, 20%, 18%)' }}>
                  Ecosystem{' '}
                </span>
                <span style={{ 
                  fontFamily: "'Open Sans', sans-serif", 
                  fontWeight: 600, 
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  background: 'linear-gradient(135deg, hsl(172, 100%, 30%) 0%, hsl(168, 100%, 35%) 50%, hsl(164, 70%, 55%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Directory
                </span>
              </h2>
              <p style={{ color: 'hsl(220, 15%, 45%)', maxWidth: '600px', margin: '0 auto' }}>
                Select a category to filter, then click any organization to learn more.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cards Grid */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {filteredOrgs.map((org, index) => (
                    <motion.div
                      key={org.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedOrg(org)}
                      className="group p-6 rounded-2xl cursor-pointer transition-all duration-300"
                      style={{
                        ...glassCardStyle,
                        ...(selectedOrg?.name === org.name ? {
                          border: '1px solid hsla(168, 100%, 35%, 0.5)',
                          boxShadow: '0 8px 32px hsla(168, 30%, 40%, 0.15), inset 0 1px 0 hsla(0, 0%, 100%, 0.4)',
                        } : {}),
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                          style={neumorphicIconStyle}
                        >
                          <org.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold truncate" style={{ color: 'hsl(220, 20%, 18%)', fontFamily: "'Open Sans', sans-serif" }}>
                              {org.name}
                            </h3>
                          </div>
                          {org.highlight && (
                            <span 
                              className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-1.5"
                              style={{
                                background: 'hsla(168, 100%, 35%, 0.12)',
                                color: 'hsl(168, 100%, 28%)',
                              }}
                            >
                              {org.highlight}
                            </span>
                          )}
                          <p className="text-sm line-clamp-2" style={{ color: 'hsl(220, 15%, 45%)' }}>
                            {org.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 shrink-0 transition-colors" style={{ color: 'hsl(220, 15%, 65%)' }} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-36">
                <AnimatePresence mode="wait">
                  {selectedOrg ? (
                    <motion.div
                      key={selectedOrg.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-8 rounded-3xl"
                      style={{
                        background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.4) 0%, hsla(168, 20%, 90%, 0.2) 50%, hsla(220, 20%, 95%, 0.25) 100%)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid hsla(168, 30%, 80%, 0.4)',
                        boxShadow: '0 12px 40px hsla(168, 30%, 40%, 0.1), inset 0 1px 0 hsla(0, 0%, 100%, 0.5)',
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={neumorphicIconStyle}
                      >
                        <selectedOrg.icon className="w-7 h-7" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>

                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: 'hsl(220, 20%, 18%)' }}>
                        {selectedOrg.name}
                      </h3>
                      
                      {selectedOrg.highlight && (
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                          style={{
                            background: 'hsla(168, 100%, 35%, 0.12)',
                            color: 'hsl(168, 100%, 28%)',
                          }}
                        >
                          {selectedOrg.highlight}
                        </span>
                      )}

                      <p className="mb-6 leading-relaxed" style={{ color: 'hsl(220, 15%, 40%)' }}>
                        {selectedOrg.longDescription || selectedOrg.description}
                      </p>

                      {selectedOrg.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedOrg.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 rounded-full text-xs"
                              style={{
                                background: 'hsla(220, 15%, 85%, 0.5)',
                                color: 'hsl(220, 15%, 40%)',
                                border: '1px solid hsla(220, 15%, 80%, 0.4)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {selectedOrg.internalLink ? (
                        <Link 
                          to={selectedOrg.internalLink}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                          style={{
                            background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                            border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                            color: 'hsl(168, 40%, 25%)',
                            boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                          }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : selectedOrg.link ? (
                        <a 
                          href={selectedOrg.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                          style={{
                            background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                            border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                            color: 'hsl(168, 40%, 25%)',
                            boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                          }}
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 rounded-3xl text-center"
                      style={glassCardStyle}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={neumorphicIconStyle}
                      >
                        <Globe className="w-7 h-7" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: 'hsl(220, 20%, 18%)' }}>
                        Select an Organization
                      </h3>
                      <p className="text-sm" style={{ color: 'hsl(220, 15%, 45%)' }}>
                        Click on any organization to view more details and connect with them.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(168, 100%, 28%) 0%, hsl(168, 80%, 22%) 100%)',
      }}>
        <img 
          src={signatureLines} 
          alt="" aria-hidden="true" 
          className="absolute top-0 right-0 w-[500px] opacity-10 pointer-events-none" 
        />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="mb-6" style={{ lineHeight: 1.15 }}>
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>
                Ready to Join the{' '}
              </span>
              <span style={{ 
                fontFamily: "'Open Sans', sans-serif", 
                fontWeight: 600, 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'hsla(168, 60%, 85%, 1)',
              }}>
                Ecosystem?
              </span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'hsla(0, 0%, 100%, 0.7)' }}>
              Connect with NORCAT Innovation to access the full network of resources, 
              mentors, and funding opportunities available to founders in Greater Sudbury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(145deg, hsla(168, 100%, 35%, 0.3) 0%, hsla(168, 100%, 35%, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(168, 100%, 50%, 0.4)',
                  boxShadow: 'inset 0 1px 0 0 hsla(168, 100%, 60%, 0.3), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                  boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}
              >
                Learn About NORCAT
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SudburyEcosystem;
