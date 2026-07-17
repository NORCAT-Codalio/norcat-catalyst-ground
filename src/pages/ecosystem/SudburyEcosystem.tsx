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
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="text-lg !text-white">Greater Sudbury Innovation Ecosystem</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                CONNECTED TO <span style={{ color: TEAL }}>WHAT'S NEXT.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Explore the organizations, funding programs, research institutions, and industry partners helping startups build, validate, and grow in Greater Sudbury.
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
                  Built for Founders
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  SUPPORT AT{' '}
                  <span style={{ color: TEAL }}>EVERY STAGE.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-4">
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Greater Sudbury punches well above its weight, bringing together funding, research, industry expertise, and startup support in one connected ecosystem.
                </p>
                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  NORCAT Innovation helps startups navigate the ecosystem and connect with the right people, programs, and opportunities when they need them.
                </p>
              </div>
            </div>

            {/* Stats row — full width, spread out beneath text */}
            <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8 md:py-10 px-4 md:px-8 rounded-2xl" style={{ background: 'white', border: '1px solid #d9dde5' }}>
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,179,152,0.10)' }}>
                    <s.icon className="w-6 h-6" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-black" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>{s.number}</p>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── DIRECTORY ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
              <div>
                <Eyebrow className="mb-2">Ecosystem Directory</Eyebrow>
                <h2 className="font-black leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                  Connect with <span style={{ color: TEAL }}>{ecosystemOrgs.length}</span> local organizations
                </h2>
              </div>

              <div className="relative w-full md:w-64 lg:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: '#9ca3af' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search directory..."
                  className="w-full pl-9 pr-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 transition-all"
                  style={{ borderColor: '#d9dde5', color: NAVY, fontFamily: FONT, background: 'white' }}
                />
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-all"
                    style={active ? {
                      background: NAVY, color: 'white', border: `1px solid ${NAVY}`, fontFamily: FONT,
                    } : {
                      background: 'white', color: NAVY, border: '1px solid #d9dde5', fontFamily: FONT,
                    }}
                  >
                    <cat.icon className="w-3 h-3" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Compact grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
              >
                {filteredOrgs.map((org) => {
                  const categoryLabel = categories.find((c) => c.id === org.category)?.label;
                  return (
                    <motion.button
                      key={org.name}
                      layout
                      onClick={() => setSelectedOrg(org)}
                      whileHover={{ y: -2 }}
                      className="text-left bg-white border rounded-lg p-3 transition-all group hover:shadow-md hover:border-[#00B398]"
                      style={{ borderColor: '#e2e8f0', color: NAVY }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-teal-50 text-[#00B398] group-hover:bg-[#00B398] group-hover:text-white">
                          <org.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm leading-tight mb-0.5 truncate"
                              style={{ fontFamily: FONT, color: NAVY }}>
                            {org.name}
                          </h4>
                          <p className="text-[11px] leading-snug line-clamp-1 mb-2" style={{ color: '#6b7280' }}>
                            {org.description}
                          </p>
                          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
                                style={{ background: 'rgba(0,179,152,0.10)', color: '#006A5B' }}>
                            {org.highlight || categoryLabel}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filteredOrgs.length === 0 && (
              <div className="text-center py-12" style={{ color: '#6b7280' }}>
                <p className="text-sm">No organizations match your search.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="mt-2 text-xs font-bold underline"
                  style={{ color: TEAL }}
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Result count */}
            <div className="mt-8 pt-5 border-t flex items-center justify-between" style={{ borderColor: '#e2e8f0' }}>
              <p className="text-xs" style={{ color: '#6b7280' }}>
                Showing {filteredOrgs.length} of {ecosystemOrgs.length} results
              </p>
            </div>
          </div>
        </section>

        {/* ───── DETAIL MODAL ───── */}
        <Dialog open={!!selectedOrg} onOpenChange={(open) => !open && setSelectedOrg(null)}>
          <DialogContent className="max-w-lg p-0 overflow-hidden border-0" style={{ background: PAPER, color: NAVY }}>
            <div className="p-6 md:p-8 relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,179,152,0.12)' }} />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,61,165,0.10)' }} />

              <DialogHeader className="relative z-10 text-left space-y-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: TEAL }}>
                  {selectedOrg && <selectedOrg.icon className="w-7 h-7" style={{ color: 'white' }} />}
                </div>
                <DialogTitle className="text-xl font-black uppercase leading-tight"
                              style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                  {selectedOrg?.name}
                </DialogTitle>
                {selectedOrg?.highlight && (
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em]"
                        style={{ background: 'rgba(0,179,152,0.12)', color: '#006A5B' }}>
                    {selectedOrg.highlight}
                  </span>
                )}
                <DialogDescription className="text-sm leading-relaxed" style={{ color: '#475068' }}>
                  {selectedOrg?.longDescription || selectedOrg?.description}
                </DialogDescription>
              </DialogHeader>

              {selectedOrg?.tags && (
                <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                  {selectedOrg.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                          style={{ background: 'white', color: '#5b6478', border: '1px solid #d9dde5' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 relative z-10">
                {selectedOrg?.internalLink ? (
                  <Link to={selectedOrg.internalLink}
                        onClick={() => setSelectedOrg(null)}
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
                    Learn More
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: TEAL, color: NAVY }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : selectedOrg?.link ? (
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
            </div>
          </DialogContent>
        </Dialog>

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
