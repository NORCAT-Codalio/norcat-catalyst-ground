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

type CategoryType = 'all' | 'support' | 'funding' | 'education' | 'research';

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
];

const ecosystemOrgs: EcosystemOrg[] = [
  { name: 'NORCAT Innovation', category: 'support', description: "Sudbury's Regional Innovation Centre", longDescription: "Part of Ontario's 17-centre RIC Network, providing entrepreneurs with resources, mentorship, and funding to start and scale businesses.", internalLink: '/about', icon: Rocket, highlight: 'Regional Innovation Centre', tags: ['Mentorship', 'Programs', 'Funding'] },

  { name: 'MICA', category: 'support', description: 'Mining Innovation Commercialization Accelerator', longDescription: 'National accelerator supporting mining innovation, clean technology, and commercialization pathways for Northern Ontario ventures.', link: 'https://mininginnovation.ca', icon: Pickaxe, highlight: 'Mining Accelerator', tags: ['Mining', 'Clean Tech', 'Commercialization'] },
  { name: 'Regional Business Centre', category: 'support', description: 'Business advisory & startup support', longDescription: 'Provides business counselling, workshops, and resources for entrepreneurs and small businesses in Greater Sudbury.', link: 'https://regionalbusinesscentre.ca', icon: Building2, tags: ['Advisory', 'Workshops'] },
  { name: 'Greater Sudbury Chamber of Commerce', category: 'support', description: 'Business advocacy & networking', longDescription: 'Represents the interests of businesses in Greater Sudbury, providing networking opportunities and advocacy.', link: 'https://sudburychamber.ca', icon: Users, tags: ['Networking', 'Advocacy'] },
  { name: 'MineConnect AI', category: 'support', description: 'Mining supply chain network', longDescription: 'Connects mining suppliers, operators, and innovators to accelerate procurement and technology adoption in the mining sector.', link: 'https://mineconnect.ca', icon: Zap, highlight: 'Mining Network', tags: ['Supply Chain', 'Mining'] },
  { name: 'Gowling Law', category: 'support', description: 'IP protection & commercial law', longDescription: 'Full-service law firm helping founders protect intellectual property, structure deals, and navigate commercial growth.', link: 'https://gowlingwlg.com', icon: Shield, highlight: 'IP & Legal', tags: ['IP', 'Legal'] },
  { name: 'IPON', category: 'support', description: 'Intellectual Property Ontario', longDescription: 'Supports Ontario innovators with IP strategy, education, and services to maximize the value of their intellectual property.', link: 'https://ipon.ca', icon: Shield, highlight: 'IP Strategy', tags: ['IP', 'Strategy'] },
  { name: 'The Foundry', category: 'support', description: 'Jim Fielding Innovation Space', longDescription: 'Community innovation hub and coworking space in downtown Sudbury, hosting events, programs, and early-stage ventures.', link: 'https://thefoundrysudbury.ca', icon: Landmark, highlight: 'Innovation Hub', tags: ['Coworking', 'Events'] },
  { name: 'Greater Sudbury Development Corporation', category: 'support', description: 'Economic development agency for the city', longDescription: 'Provides business support services, investment attraction, and economic development initiatives for Greater Sudbury.', link: 'https://investsudbury.ca', icon: Building2, tags: ['Economic Development', 'Investment'] },
  { name: 'FedNor', category: 'support', description: 'Federal economic development agency', longDescription: 'Federal Economic Development Agency for Northern Ontario, providing funding and support for businesses and communities.', link: 'https://fednor.gc.ca', icon: Landmark, highlight: 'Federal Agency', tags: ['Federal Funding', 'Economic Development'] },
  { name: 'Core5', category: 'support', description: 'OVIN Regional Technology Site', longDescription: 'Pan-Northern Ontario initiative supporting SMEs in BEV and EV technology development.', internalLink: '/mining/core5', icon: Zap, highlight: 'EV Innovation', tags: ['EV', 'Battery Tech', 'Clean Tech'] },
  { name: 'Rogers Cybersecure Catalyst', category: 'support', description: 'Cybersecurity accelerator', longDescription: 'Partnership providing cybersecurity training and commercialization support for ventures and professionals.', internalLink: '/partners/rogers-cybersecure', icon: Shield, tags: ['Cybersecurity', 'Training'] },

  { name: 'Ontario Centre of Innovation', category: 'funding', description: 'OCI', longDescription: 'Provincial innovation engine providing funding, commercialization support, and market access programs for Ontario startups.', link: 'https://ontariocentreofinnovation.ca', icon: DollarSign, highlight: 'Provincial Funder', tags: ['Funding', 'Commercialization'] },
  { name: 'Futurepreneur', category: 'funding', description: 'Entrepreneur financing & mentorship', longDescription: 'Supports young and emerging entrepreneurs with startup financing, mentorship, and resources to launch and grow businesses.', link: 'https://futurepreneur.ca', icon: DollarSign, tags: ['Financing', 'Mentorship'] },
  { name: 'NOHFC', category: 'funding', description: 'Northern Ontario Heritage Fund Corporation', longDescription: 'Provincial agency investing in projects that create jobs and strengthen Northern Ontario communities.', link: 'https://nohfc.ca', icon: Target, highlight: 'Provincial Funding', tags: ['Provincial Funding', 'Job Creation'] },
  { name: 'NOBEEP', category: 'funding', description: 'Northern Ontario Business & Entrepreneurship Partnership', longDescription: 'Supports Northern Ontario entrepreneurship and business development through regional partnership programs.', link: 'https://nobeep.ca', icon: DollarSign, tags: ['Partnerships', 'Entrepreneurship'] },
  { name: 'Sudbury Catalyst Fund', category: 'funding', description: '$5M venture capital fund for startups', longDescription: 'A unique venture capital fund administered by the Nickel Basin Federal Development Corporation in collaboration with the City, FedNor, and NORCAT.', internalLink: '/funding/sudbury-catalyst-fund', icon: Zap, highlight: '$5M Fund', tags: ['Venture Capital', 'Investment'] },
  { name: 'Northern Ontario Angels', category: 'funding', description: 'Angel investor network', longDescription: 'Connects investment-ready founders with a network of 50+ active angel investors across Northern Ontario.', internalLink: '/funding/investor-hub', icon: Award, highlight: '50+ Angels', tags: ['Angel Investment', 'Network'] },

  { name: 'Cambrian College Hanson Venture Lab', category: 'education', description: 'Entrepreneurship & applied learning', longDescription: 'Cambrian College initiative supporting student and community entrepreneurs through coaching, programming, and venture development.', link: 'https://cambriancollege.ca', icon: GraduationCap, highlight: 'Venture Lab', tags: ['Entrepreneurship', 'Applied Learning'] },
  { name: 'Laurentian University', category: 'education', description: 'Research-intensive university', longDescription: "Northern Ontario's bilingual university offering programs in mining, environmental studies, and more.", link: 'https://laurentian.ca', icon: GraduationCap, tags: ['Research', 'Graduate Programs'] },
  { name: 'Collège Boréal', category: 'education', description: 'Francophone post-secondary institution', longDescription: 'French-language college offering programs in trades, health sciences, and business.', link: 'https://collegeboreal.ca', icon: GraduationCap, tags: ['Francophone', 'Technical Training'] },
  { name: 'Cambrian R&D', category: 'education', description: 'Applied research centre', longDescription: 'Applied research arm of Cambrian College, supporting industry partnerships and innovation projects.', link: 'https://cambrianresearch.ca', icon: FlaskConical, tags: ['Applied Research', 'Industry Partnerships'] },

  { name: 'Ontario Vehicle Innovation Network', category: 'research', description: 'OVIN', longDescription: 'Supports the development and demonstration of electric, connected, and autonomous vehicle technologies in Ontario.', link: 'https://ovin.ca', icon: FlaskConical, highlight: 'EV & AV Research', tags: ['EV', 'AV', 'Research'] },
  { name: 'MaRS', category: 'research', description: 'Discovery District innovation hub', longDescription: 'One of North America’s largest urban innovation hubs, supporting high-growth startups with capital, talent, and market access.', link: 'https://marsdd.com', icon: Building2, highlight: 'Innovation Hub', tags: ['Scale-Up', 'Market Access'] },
  { name: 'AI Collective', category: 'research', description: 'Artificial intelligence research & adoption', longDescription: 'Supports applied AI research, talent development, and industry adoption of machine learning and artificial intelligence solutions.', link: 'https://norcat.org', icon: Sparkles, highlight: 'Applied AI', tags: ['AI', 'Machine Learning'] },
  { name: 'NOSM', category: 'research', description: 'Northern Ontario School of Medicine', longDescription: 'Medical school with a social accountability mandate, advancing health research, education, and care for Northern Ontario communities.', link: 'https://nosm.ca', icon: FlaskConical, highlight: 'Medical Research', tags: ['Health', 'Education'] },
  { name: 'HSNRI', category: 'research', description: 'Health Sciences North Research Institute', longDescription: 'Academic research institute affiliated with Health Sciences North, advancing patient-centred research and health innovation.', link: 'https://hsnri.ca', icon: FlaskConical, highlight: 'Health Research', tags: ['Health', 'Research'] },
  { name: 'IRAP', category: 'research', description: 'Industrial Research Assistance Program', longDescription: 'NRC program providing technical and business advisory services, funding, and expertise to accelerate Canadian SME innovation.', link: 'https://nrc-cnrc.gc.ca/eng/irap', icon: FlaskConical, highlight: 'R&D Support', tags: ['R&D', 'Advisory'] },
  { name: 'MIRARCO', category: 'research', description: 'Mining innovation research consortium', longDescription: 'Research consortium focused on mining innovation, safety, and environmental sustainability.', link: 'https://mirarco.org', icon: FlaskConical, highlight: 'Mining Research', tags: ['Mining', 'Innovation', 'Safety'] },
  { name: 'CEMI', category: 'research', description: 'Centre for Excellence in Mining Innovation', longDescription: 'Industry-led research organization accelerating the development and adoption of mining innovation.', link: 'https://cemi.ca', icon: Landmark, tags: ['Mining Excellence', 'R&D'] },
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
  { number: '12', label: 'Support Organizations', icon: Users },
  { number: '6', label: 'Funding Programs', icon: DollarSign },
  { number: '4', label: 'Post-Secondary Institutions', icon: GraduationCap },
  { number: '8', label: 'Research Centres', icon: FlaskConical },
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
        <section className="relative overflow-hidden pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.12 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <Eyebrow>BUILT FOR FOUNDERS</Eyebrow>
                <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  SUPPORT AT <span style={{ color: TEAL }}>EVERY STAGE.</span>
                </Display>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed lg:pt-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Greater Sudbury punches well above its weight, bringing together funding, research, industry expertise, and startup support in one connected ecosystem.
              </p>
            </div>

            {/* Stats bar */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 rounded-2xl p-5 md:p-8" style={{ background: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,179,152,0.10)' }}>
                    <s.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p className="text-lg md:text-2xl font-black" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>{s.number}</p>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{s.label}</p>
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
                  Connect with <span style={{ color: TEAL }}>30</span> local organizations
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
