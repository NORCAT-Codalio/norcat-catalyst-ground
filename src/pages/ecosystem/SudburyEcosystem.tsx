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
  { id: 'all' as const, label: 'All Resources', icon: Globe, color: 'from-primary to-primary/70' },
  { id: 'support' as const, label: 'Support Orgs', icon: Users, color: 'from-blue-500 to-blue-600' },
  { id: 'funding' as const, label: 'Funding', icon: DollarSign, color: 'from-emerald-500 to-emerald-600' },
  { id: 'education' as const, label: 'Education', icon: GraduationCap, color: 'from-amber-500 to-amber-600' },
  { id: 'research' as const, label: 'Research', icon: FlaskConical, color: 'from-violet-500 to-violet-600' },
  { id: 'industry' as const, label: 'Industry', icon: Pickaxe, color: 'from-orange-500 to-orange-600' },
  { id: 'partners' as const, label: 'Partner Programs', icon: Landmark, color: 'from-rose-500 to-rose-600' },
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

const categoryColors: Record<CategoryType, string> = {
  all: 'bg-primary',
  support: 'bg-blue-500',
  funding: 'bg-emerald-500',
  education: 'bg-amber-500',
  research: 'bg-violet-500',
  industry: 'bg-orange-500',
  partners: 'bg-rose-500',
};

const SudburyEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedOrg, setSelectedOrg] = useState<EcosystemOrg | null>(null);

  const filteredOrgs = activeCategory === 'all' 
    ? ecosystemOrgs 
    : ecosystemOrgs.filter(org => org.category === activeCategory);

  const stats = [
    { number: '30+', label: 'Support Organizations' },
    { number: '$25M+', label: 'Available Funding' },
    { number: '5', label: 'Post-Secondary Institutions' },
    { number: '8+', label: 'Research Centres' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gray-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating orbs */}
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-[120px]"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ top: '-20%', right: '-10%' }}
          />
          <motion.div 
            className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-violet-500/15 to-purple-500/15 blur-[100px]"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ bottom: '10%', left: '-5%' }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-8">
                <Globe className="w-4 h-4" />
                Greater Sudbury Innovation Ecosystem
              </span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 max-w-5xl leading-[1.1]">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Build & Scale
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
              Explore the complete network of support organizations, funding programs, 
              research institutions, and industry partners that make Greater Sudbury 
              one of Canada's most connected innovation ecosystems.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                )}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Directory */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
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
                      className={cn(
                        'group p-6 rounded-2xl border transition-all duration-300 cursor-pointer',
                        selectedOrg?.name === org.name
                          ? 'bg-primary/5 border-primary shadow-lg'
                          : 'bg-card border-border hover:border-primary/50 hover:shadow-md'
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                          categoryColors[org.category],
                          'text-white'
                        )}>
                          <org.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground truncate">{org.name}</h3>
                            {org.highlight && (
                              <span className="shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {org.highlight}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {org.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
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
                      className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 text-white"
                    >
                      <div className={cn(
                        'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                        categoryColors[selectedOrg.category]
                      )}>
                        <selectedOrg.icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-2">{selectedOrg.name}</h3>
                      
                      {selectedOrg.highlight && (
                        <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-4">
                          {selectedOrg.highlight}
                        </span>
                      )}

                      <p className="text-white/70 mb-6 leading-relaxed">
                        {selectedOrg.longDescription || selectedOrg.description}
                      </p>

                      {selectedOrg.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedOrg.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {selectedOrg.internalLink ? (
                        <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white border-0">
                          <Link to={selectedOrg.internalLink}>
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : selectedOrg.link ? (
                        <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                          <a href={selectedOrg.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      ) : null}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 rounded-3xl bg-secondary/50 border border-border text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Select an Organization</h3>
                      <p className="text-sm text-muted-foreground">
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.1),transparent_60%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Join the Ecosystem?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Connect with NORCAT Innovation to access the full network of resources, 
              mentors, and funding opportunities available to founders in Greater Sudbury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white border-0 px-8">
                <Link to="/apply">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/about">
                  Learn About NORCAT
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SudburyEcosystem;
