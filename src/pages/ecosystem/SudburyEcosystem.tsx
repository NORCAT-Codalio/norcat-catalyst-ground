import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Users,
  Building2,
  GraduationCap,
  Landmark,
  DollarSign,
  Pickaxe,
  ExternalLink,
  Zap,
  Target,
  Rocket,
  Award,
  FlaskConical,
  Shield,
  Sparkles,
  X,
  Search,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

type CategoryType = 'all' | 'support' | 'funding' | 'education' | 'research' | 'industry' | 'partners';

interface EcosystemOrg {
  name: string;
  category: Exclude<CategoryType, 'all'>;
  description: string;
  longDescription?: string;
  link?: string;
  internalLink?: string;
  icon: React.ElementType;
  highlight?: string;
  tags?: string[];
}

const categories: { id: CategoryType; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All Resources', icon: Globe },
  { id: 'support', label: 'Support Orgs', icon: Users },
  { id: 'funding', label: 'Funding', icon: DollarSign },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'industry', label: 'Industry', icon: Pickaxe },
  { id: 'partners', label: 'Partner Programs', icon: Landmark },
];

const ecosystemOrgs: EcosystemOrg[] = [
  { name: 'NORCAT Innovation', category: 'support', description: "Sudbury's Regional Innovation Centre", longDescription: "Part of Ontario's 17-centre RIC Network, providing entrepreneurs with resources, mentorship, and funding to start and scale businesses.", internalLink: '/about', icon: Rocket, highlight: 'Regional Innovation Centre', tags: ['Mentorship', 'Programs', 'Funding'] },
  { name: 'Greater Sudbury Development Corporation', category: 'support', description: 'Economic development agency for the city', longDescription: 'Provides business support services, investment attraction, and economic development initiatives for Greater Sudbury.', link: 'https://investsudbury.ca', icon: Building2, tags: ['Economic Development', 'Investment'] },
  { name: 'Sudbury Chamber of Commerce', category: 'support', description: 'Business advocacy & networking', longDescription: 'Represents the interests of businesses in Greater Sudbury, providing networking opportunities and advocacy.', link: 'https://sudburychamber.ca', icon: Users, tags: ['Networking', 'Advocacy'] },
  { name: 'FedNor', category: 'support', description: 'Federal economic development agency', longDescription: 'Federal Economic Development Agency for Northern Ontario, providing funding and support for businesses and communities.', link: 'https://fednor.gc.ca', icon: Landmark, highlight: 'Federal Agency', tags: ['Federal Funding', 'Economic Development'] },
  { name: 'NOHFC', category: 'support', description: 'Northern Ontario Heritage Fund Corporation', longDescription: 'Provincial agency investing in projects that create jobs and strengthen Northern Ontario communities.', link: 'https://nohfc.ca', icon: Target, tags: ['Provincial Funding', 'Job Creation'] },

  { name: 'Sudbury Catalyst Fund', category: 'funding', description: '$5M venture capital fund for startups', longDescription: 'A unique venture capital fund administered by the Nickel Basin Federal Development Corporation in collaboration with the City, FedNor, and NORCAT.', internalLink: '/funding/sudbury-catalyst-fund', icon: Zap, highlight: '$5M Fund', tags: ['Venture Capital', 'Investment'] },
  { name: 'Northern Ontario Angels', category: 'funding', description: 'Angel investor network', longDescription: 'Connects investment-ready founders with a network of 50+ active angel investors across Northern Ontario.', internalLink: '/funding/investor-hub', icon: Award, highlight: '50+ Angels', tags: ['Angel Investment', 'Network'] },

  { name: 'Laurentian University', category: 'education', description: 'Research-intensive university', longDescription: "Northern Ontario's bilingual university offering programs in mining, environmental studies, and more.", link: 'https://laurentian.ca', icon: GraduationCap, tags: ['Research', 'Graduate Programs'] },
  { name: 'Cambrian College', category: 'education', description: 'Applied learning & technical training', longDescription: 'Offers diploma programs in mining, trades, technology, and applied research through Cambrian R&D.', link: 'https://cambriancollege.ca', icon: GraduationCap, tags: ['Technical Training', 'Applied Research'] },
  { name: 'College Boréal', category: 'education', description: 'Francophone post-secondary institution', longDescription: 'French-language college offering programs in trades, health sciences, and business.', link: 'https://collegeboreal.ca', icon: GraduationCap, tags: ['Francophone', 'Technical Training'] },
  { name: 'Cambrian R&D', category: 'education', description: 'Applied research centre', longDescription: 'Applied research arm of Cambrian College, supporting industry partnerships and innovation projects.', link: 'https://cambrianresearch.ca', icon: FlaskConical, tags: ['Applied Research', 'Industry Partnerships'] },

  { name: 'MIRARCO', category: 'research', description: 'Mining innovation research consortium', longDescription: 'Research consortium focused on mining innovation, safety, and environmental sustainability.', link: 'https://mirarco.org', icon: FlaskConical, highlight: 'Mining Research', tags: ['Mining', 'Innovation', 'Safety'] },
  { name: 'CEMI', category: 'research', description: 'Centre for Excellence in Mining Innovation', longDescription: 'Industry-led research organization accelerating the development and adoption of mining innovation.', link: 'https://cemi.ca', icon: Landmark, tags: ['Mining Excellence', 'R&D'] },
  { name: 'SNOLAB', category: 'research', description: 'World-class underground physics lab', longDescription: 'Deep underground research facility 2km below surface, conducting cutting-edge physics research.', link: 'https://snolab.ca', icon: Sparkles, highlight: '2km Underground', tags: ['Physics', 'World-Class Facility'] },

  { name: 'Vale', category: 'industry', description: 'Global mining company', longDescription: "One of the world's largest producers of nickel and a major employer in Greater Sudbury.", link: 'https://vale.com', icon: Pickaxe, highlight: 'Major Employer', tags: ['Nickel', 'Global'] },
  { name: 'Glencore', category: 'industry', description: 'Diversified mining company', longDescription: 'Major commodity company with significant mining operations in the Sudbury basin.', link: 'https://glencore.com', icon: Pickaxe, tags: ['Copper', 'Nickel', 'Zinc'] },
  { name: 'Epiroc', category: 'industry', description: 'Mining equipment OEM', longDescription: 'Leading manufacturer of mining and construction equipment, with R&D presence in Sudbury.', link: 'https://epiroc.com', icon: Zap, tags: ['Equipment', 'Automation'] },
  { name: 'Sandvik', category: 'industry', description: 'Mining technology solutions', longDescription: 'Global engineering company providing mining and rock technology solutions.', link: 'https://sandvik.com', icon: Target, tags: ['Technology', 'Engineering'] },

  { name: 'Core5', category: 'partners', description: 'OVIN Regional Technology Site', longDescription: 'Pan-Northern Ontario initiative supporting SMEs in BEV and EV technology development.', internalLink: '/mining/core5', icon: Zap, highlight: 'EV Innovation', tags: ['EV', 'Battery Tech', 'Clean Tech'] },
  { name: 'Rogers Cybersecure Catalyst', category: 'partners', description: 'Cybersecurity accelerator', longDescription: 'Partnership providing cybersecurity training and commercialization support.', internalLink: '/partners/rogers-cybersecure', icon: Shield, tags: ['Cybersecurity', 'Training'] },
];

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL }}>
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

const stats = [
  { number: '30+', label: 'Support Organizations', icon: Users },
  { number: '$25M+', label: 'Available Funding', icon: DollarSign },
  { number: '5', label: 'Post-Secondary Institutions', icon: GraduationCap },
  { number: '8+', label: 'Research Centres', icon: FlaskConical },
];

const SudburyEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedOrg, setSelectedOrg] = useState<EcosystemOrg | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrgs = ecosystemOrgs.filter((o) => {
    const matchesCategory = activeCategory === 'all' || o.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      o.name.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      (o.highlight && o.highlight.toLowerCase().includes(q)) ||
      (o.tags && o.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow className="text-lg">Greater Sudbury Innovation Ecosystem</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Everything You Need to <span className="whitespace-nowrap" style={{ color: TEAL }}>Build and Scale.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Explore the complete network of support organizations, funding programs, research institutions, and industry partners that make Greater Sudbury one of Canada's most connected innovation ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* ───── WHAT IS THE ECOSYSTEM (light, Home2 pattern) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  The Greater Sudbury Ecosystem
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  One region.{' '}
                  <span style={{ color: TEAL }}>A full stack of support.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-4">
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Greater Sudbury punches well above its weight. Support organizations, dedicated funding programs, world-class research institutions, and a deep bench of industry partners all converge to give founders something rare - an ecosystem where every layer of the journey, from idea to scale, is locally accessible.
                </p>
                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  NORCAT Innovation sits at the centre of this network, connecting founders to the right people, programs, and capital - without the noise.
                </p>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 py-7" style={{ borderTop: '1px solid #d9dde5', borderBottom: '1px solid #d9dde5' }}>
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-4">
                      <s.icon className="w-7 h-7 shrink-0" style={{ color: TEAL }} />
                      <div>
                        <p className="text-lg md:text-xl font-black" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>{s.number}</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── DIRECTORY ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.10), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.10), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow className="justify-center mb-5">Greater Sudbury Innovation Ecosystem</Eyebrow>
              <h2 className="font-black leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                Ecosystem <span style={{ color: TEAL }}>Directory</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#5b6478' }}>
                Select a category to filter, then click any organization to learn more about their services and contact details.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-[0.12em] transition-all"
                    style={active ? {
                      background: TEAL, color: 'white', border: `1px solid ${TEAL}`, fontFamily: FONT, boxShadow: '0 10px 15px -3px rgba(0,179,152,0.25)',
                    } : {
                      background: 'white', color: NAVY, border: '1px solid #d9dde5', fontFamily: FONT,
                    }}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cards */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {filteredOrgs.map((org) => {
                      const isSelected = selectedOrg?.name === org.name;
                      const categoryLabel = categories.find(c => c.id === org.category)?.label;
                      return (
                        <motion.button
                          key={org.name}
                          layout
                          onClick={() => setSelectedOrg(org)}
                          whileHover={{ y: -2 }}
                          className={`text-left rounded-2xl p-5 transition-all flex items-start gap-4 bg-white border shadow-sm group ${
                            isSelected ? 'ring-2 ring-offset-2 ring-offset-white ring-[#00B398]' : 'hover:shadow-xl hover:border-[#00B398]'
                          }`}
                          style={{ borderColor: isSelected ? TEAL : '#e2e8f0', color: NAVY }}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? 'bg-[#00B398] text-white' : 'bg-teal-50 text-[#00B398] group-hover:bg-[#00B398] group-hover:text-white'
                          }`}>
                            <org.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black uppercase text-sm md:text-base mb-1"
                                style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                              {org.name}
                            </h4>
                            <p className="text-xs font-semibold" style={{ color: '#6b7280' }}>
                              {org.highlight || categoryLabel}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Detail panel */}
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <AnimatePresence mode="wait">
                    {selectedOrg ? (
                      <motion.div
                        key={selectedOrg.name}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="rounded-3xl p-8 relative overflow-hidden"
                        style={{ background: PAPER, border: '1px solid #d9dde5', color: NAVY }}
                      >
                        {/* Decorative blurs */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,179,152,0.12)' }} />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,61,165,0.10)' }} />

                        <button onClick={() => setSelectedOrg(null)}
                                aria-label="Close detail panel"
                                className="absolute top-5 right-5 size-8 rounded-full flex items-center justify-center z-10"
                                style={{ background: 'rgba(0,26,77,0.08)', color: NAVY }}>
                          <X className="w-4 h-4" />
                        </button>

                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                               style={{ background: TEAL }}>
                            <selectedOrg.icon className="w-8 h-8" style={{ color: 'white' }} />
                          </div>

                          <h3 className="font-black uppercase text-2xl mb-2"
                              style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                            {selectedOrg.name}
                          </h3>

                          {selectedOrg.highlight && (
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] mb-4"
                                  style={{ background: 'rgba(0,179,152,0.12)', color: '#006A5B' }}>
                              {selectedOrg.highlight}
                            </span>
                          )}

                          <p className="mb-6 leading-relaxed text-sm md:text-base" style={{ color: '#475068' }}>
                            {selectedOrg.longDescription || selectedOrg.description}
                          </p>

                          {selectedOrg.tags && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {selectedOrg.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs"
                                      style={{ background: 'white', color: '#5b6478', border: '1px solid #d9dde5' }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {selectedOrg.internalLink ? (
                            <Link to={selectedOrg.internalLink}
                                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02]"
                                  style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
                              Learn More
                              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: TEAL, color: NAVY }}>
                                <ArrowUpRight className="w-4 h-4" />
                              </span>
                            </Link>
                          ) : selectedOrg.link ? (
                            <a href={selectedOrg.link} target="_blank" rel="noopener noreferrer"
                               className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02]"
                               style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
                              Visit Website
                              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: TEAL, color: NAVY }}>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </a>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-3xl p-8 text-center relative overflow-hidden min-h-[320px] flex flex-col items-center justify-center"
                        style={{ background: PAPER, border: '1px dashed #d9dde5', color: NAVY }}
                      >
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,179,152,0.10)' }} />
                        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,61,165,0.08)' }} />

                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                               style={{ background: 'white', border: '1px solid #d9dde5' }}>
                            <Globe className="w-8 h-8" style={{ color: TEAL }} />
                          </div>
                          <h3 className="font-black uppercase text-base mb-2" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                            Select an Organization
                          </h3>
                          <p className="text-sm max-w-xs mx-auto" style={{ color: '#6b7280' }}>
                            Click any card to view details and connect.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── CTA (dark) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/2 object-contain object-right-top opacity-50 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow className="justify-center">Get Connected</Eyebrow>
            <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Join the<br /><span style={{ color: TEAL }}>Ecosystem?</span>
            </Display>
            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: FG_MUTED }}>
              Connect with NORCAT Innovation to access the full network of resources, mentors, and funding opportunities available to founders in Greater Sudbury.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply"
                    className="group inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ background: TEAL, color: NAVY, fontFamily: FONT }}>
                Apply to NORCAT Innovation
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link to="/about"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontFamily: FONT }}>
                Learn About NORCAT
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default SudburyEcosystem;
