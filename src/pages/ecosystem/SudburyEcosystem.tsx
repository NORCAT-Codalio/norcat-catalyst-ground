import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import {
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
  SlidersHorizontal,
  ChevronDown,
  X,
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
import FinalCTA from "@/components/FinalCTA";

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

// ── Category colour system ──
const CATEGORY_COLORS: Record<Exclude<CategoryType, 'all'>, { color: string; soft: string; deep: string; label: string }> = {
  support: { color: '#2F6FD6', soft: 'rgba(47,111,214,0.10)', deep: '#12408F', label: 'Support' },
  funding: { color: '#00B398', soft: 'rgba(0,179,152,0.12)', deep: '#006A5B', label: 'Funding' },
  education: { color: '#5B9BD5', soft: 'rgba(91,155,213,0.14)', deep: '#2C6399', label: 'Education' },
  research: { color: '#001A4D', soft: 'rgba(0,26,77,0.08)', deep: '#001A4D', label: 'Research' },
};

const categories: { id: CategoryType; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All Resources', icon: Globe },
  { id: 'support', label: 'Support Orgs', icon: Users },
  { id: 'funding', label: 'Funding', icon: DollarSign },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'research', label: 'Research', icon: FlaskConical },
];

const ecosystemOrgs: EcosystemOrg[] = [
  { name: 'NORCAT Innovation', category: 'support', description: "Sudbury's Regional Innovation Centre, guiding founders from first idea to first customers and beyond.", longDescription: "Part of Ontario's 17-centre Regional Innovation Centre Network. NORCAT gives entrepreneurs hands-on advisory support, structured programming, mentor matching, and pathways to non-dilutive funding and capital — all under one roof in Greater Sudbury.", internalLink: '/about', icon: Rocket, highlight: 'Regional Innovation Centre', tags: ['Mentorship', 'Advisory', 'Regional'] },

  { name: 'MICA', category: 'support', description: 'National accelerator helping mining and clean tech innovators commercialize and reach industry buyers.', longDescription: 'The Mining Innovation Commercialization Accelerator is a pan-Canadian network that funds and de-risks mining innovation projects, connects technology developers with mine-site validation partners, and moves clean technology from prototype to procurement.', link: 'https://mininginnovation.ca', icon: Pickaxe, highlight: 'Mining Accelerator', tags: ['Mining', 'Clean Tech', 'Commercialization'] },
  { name: 'Regional Business Centre', category: 'support', description: 'Free business counselling, workshops, and startup guidance for Greater Sudbury entrepreneurs.', longDescription: 'The Regional Business Centre is the first stop for small business owners and new entrepreneurs — offering one-on-one business counselling, business plan reviews, licensing guidance, workshops, and youth entrepreneurship programming across Greater Sudbury.', link: 'https://regionalbusinesscentre.ca', icon: Building2, highlight: 'Small Business Support', tags: ['Advisory', 'Training', 'Regional'] },
  { name: 'Greater Sudbury Chamber of Commerce', category: 'support', description: 'The voice of Sudbury business — advocacy, connections, and member programming.', longDescription: 'The Chamber represents the interests of hundreds of local employers, advocating at every level of government while running networking events, member benefit programs, and forums that connect founders with established Sudbury businesses.', link: 'https://sudburychamber.ca', icon: Users, highlight: 'Business Advocacy', tags: ['Networking', 'Advisory', 'Regional'] },
  { name: 'MineConnect', category: 'support', description: 'Supply chain network linking mining suppliers, operators, and technology innovators.', longDescription: 'MineConnect represents Northern Ontario mining supply and services companies, opening doors to procurement opportunities, trade missions, and buyer introductions so new technology reaches operating mines faster.', link: 'https://mineconnect.ca', icon: Zap, highlight: 'Mining Network', tags: ['Mining', 'Networking', 'Commercialization'] },
  { name: 'Gowling WLG', category: 'support', description: 'Commercial law and IP counsel for founders structuring deals and protecting inventions.', longDescription: 'A full-service international law firm with deep mining and technology practices. Gowling WLG helps founders file and defend patents, structure financings and shareholder agreements, and navigate commercial contracts as they scale.', link: 'https://gowlingwlg.com', icon: Shield, highlight: 'IP & Legal', tags: ['IP & Legal', 'Advisory', 'National'] },
  { name: 'IPON', category: 'support', description: 'Intellectual Property Ontario — IP strategy and services for Ontario innovators.', longDescription: 'IPON is a provincial agency that helps Ontario companies and researchers build IP strategies, access subsidized legal services, and make confident decisions about patents, trademarks, and trade secrets before they go to market.', link: 'https://ip-ontario.ca', icon: Shield, highlight: 'IP Strategy', tags: ['IP & Legal', 'Advisory', 'Provincial'] },
  { name: 'The Foundry', category: 'support', description: 'Downtown coworking and community innovation space for early-stage ventures.', longDescription: 'The Jim Fielding Innovation Space is a downtown Sudbury hub offering desks, meeting rooms, and event space, plus a steady calendar of meetups, demo nights, and programming that keeps the local founder community connected.', link: 'https://thefoundrysudbury.ca', icon: Landmark, highlight: 'Innovation Hub', tags: ['Coworking', 'Networking', 'Regional'] },
  { name: 'Greater Sudbury Development Corporation', category: 'support', description: 'The city\u2019s economic development agency — investment attraction and business support.', longDescription: 'Operating as Invest Sudbury, the GSDC supports business expansion and relocation with site selection, labour market data, incentive navigation, and introductions to local supply chains and municipal decision makers.', link: 'https://investsudbury.ca', icon: Building2, highlight: 'Economic Development', tags: ['Advisory', 'Regional', 'Networking'] },
  { name: 'FedNor', category: 'support', description: 'Federal economic development agency funding growth projects across Northern Ontario.', longDescription: 'FedNor delivers federal contribution funding for business expansion, productivity improvements, innovation projects, and community economic development throughout Northern Ontario, often alongside provincial and regional partners.', link: 'https://fednor.canada.ca', icon: Landmark, highlight: 'Federal Agency', tags: ['Grants', 'Federal', 'Advisory'] },
  { name: 'Core5', category: 'support', description: 'OVIN Regional Technology Development Site for electric and battery vehicle innovation.', longDescription: 'Core5 is a pan-Northern Ontario initiative helping small and medium enterprises develop, test, and commercialize battery-electric and connected vehicle technology, with access to technical expertise, demonstration sites, and 22 partner organizations.', internalLink: '/mining/core5', icon: Zap, highlight: 'EV Innovation', tags: ['EV', 'Clean Tech', 'Provincial'] },
  { name: 'Rogers Cybersecure Catalyst', category: 'support', description: 'Cybersecurity training, accelerator programming, and commercialization support.', longDescription: 'A national centre for cybersecurity delivered in partnership with NORCAT, providing professional training and certification, an accelerator for security startups, and applied support for organizations hardening their operations.', internalLink: '/partners/rogers-cybersecure', icon: Shield, highlight: 'Cyber Accelerator', tags: ['Cybersecurity', 'Training', 'National'] },

  { name: 'Ontario Centre of Innovation', category: 'funding', description: 'Provincial innovation engine funding commercialization, R&D partnerships, and market access.', longDescription: 'OCI co-invests in Ontario companies through programs spanning early-stage voucher funding, industry-academic R&D collaborations, and scale-up support, helping technology move out of the lab and into paying markets.', link: 'https://www.oc-innovation.ca', icon: DollarSign, highlight: 'Provincial Funder', tags: ['Grants', 'Commercialization', 'Provincial'] },
  { name: 'Futurepreneur', category: 'funding', description: 'Startup loans and two years of mentorship for entrepreneurs aged 18 to 39.', longDescription: 'Futurepreneur Canada combines collateral-free startup financing with a matched mentor for up to two years, plus business plan tools and resources designed specifically for young and newcomer founders.', link: 'https://futurepreneur.ca', icon: DollarSign, highlight: 'Youth Financing', tags: ['Loans', 'Mentorship', 'National'] },
  { name: 'NOHFC', category: 'funding', description: 'Provincial agency investing in Northern Ontario projects that create jobs.', longDescription: 'The Northern Ontario Heritage Fund Corporation funds business expansion, capital equipment, film and television, and workforce development projects, and is one of the most significant sources of non-dilutive capital in the region.', link: 'https://nohfc.ca', icon: Target, highlight: 'Provincial Funding', tags: ['Grants', 'Provincial', 'Regional'] },
  { name: 'NOBEEP', category: 'funding', description: 'Partnership program backing entrepreneurship and business development across the North.', longDescription: 'The Northern Ontario Business and Entrepreneurship Partnership coordinates regional partners to deliver entrepreneurship programming, training, and seed support to communities across Northern Ontario.', link: 'https://nobeep.ca', icon: DollarSign, highlight: 'Regional Partnership', tags: ['Grants', 'Training', 'Regional'] },
  { name: 'Sudbury Catalyst Fund', category: 'funding', description: '$5M venture capital fund investing directly in Sudbury-connected startups.', longDescription: 'Administered by the Nickel Basin Federal Development Corporation in collaboration with the City of Greater Sudbury, FedNor, and NORCAT, the fund makes direct equity investments in high-growth ventures building in or from Sudbury.', internalLink: '/funding/sudbury-catalyst-fund', icon: Zap, highlight: '$5M Fund', tags: ['Venture Capital', 'Regional', 'Commercialization'] },
  { name: 'Northern Ontario Angels', category: 'funding', description: 'Angel network connecting investment-ready founders with 50+ active private investors.', longDescription: 'Northern Ontario Angels screens and prepares founders for private investment, then introduces them to a network of active angels who have deployed hundreds of millions into Northern Ontario companies.', internalLink: '/funding/investor-hub', icon: Award, highlight: '50+ Angels', tags: ['Angel Investment', 'Networking', 'Regional'] },

  { name: 'Cambrian College Hanson Venture Lab', category: 'education', description: 'Campus venture lab coaching student and community entrepreneurs through launch.', longDescription: 'The Hanson Venture Lab supports student, alumni, and community founders with coaching, pitch programming, prototyping help, and connections to Cambrian faculty and applied research capacity.', link: 'https://cambriancollege.ca', icon: GraduationCap, highlight: 'Venture Lab', tags: ['Mentorship', 'Training', 'Regional'] },
  { name: 'Laurentian University', category: 'education', description: "Northern Ontario's bilingual research university and talent pipeline.", longDescription: 'Laurentian delivers undergraduate and graduate programs with particular strength in mining, geology, environmental science, and health, and is a key source of research collaborators, co-op students, and technical talent.', link: 'https://laurentian.ca', icon: GraduationCap, highlight: 'Research University', tags: ['R&D', 'Training', 'Regional'] },
  { name: 'Collège Boréal', category: 'education', description: 'Francophone college delivering trades, health, and business training.', longDescription: "Collège Boréal offers French-language post-secondary education and employment services across Ontario, supplying skilled trades, health science, and business graduates to employers throughout the North.", link: 'https://collegeboreal.ca', icon: GraduationCap, highlight: 'Francophone College', tags: ['Training', 'Regional', 'Advisory'] },
  { name: 'Cambrian R&D', category: 'education', description: 'Applied research centre partnering with industry on real product problems.', longDescription: 'Cambrian R&D pairs companies with faculty researchers and student teams to solve applied engineering, automation, and product development challenges, often supported by federal applied research grants.', link: 'https://cambrianrd.ca', icon: FlaskConical, highlight: 'Applied Research', tags: ['R&D', 'Commercialization', 'Regional'] },

  { name: 'Ontario Vehicle Innovation Network', category: 'research', description: 'Provincial network advancing electric, connected, and autonomous vehicle technology.', longDescription: 'OVIN funds and coordinates demonstration projects, talent development, and regional technology development sites — including Core5 in Northern Ontario — to keep Ontario competitive in next-generation mobility.', link: 'https://www.ovinhub.ca', icon: FlaskConical, highlight: 'EV & AV Research', tags: ['EV', 'Clean Tech', 'Provincial'] },
  { name: 'MaRS Discovery District', category: 'research', description: "One of North America's largest urban innovation hubs, focused on scale-up.", longDescription: 'MaRS supports high-growth Canadian companies in health, cleantech, fintech, and enterprise software with capital introductions, market access programs, and advisory from sector-specialist teams in Toronto.', link: 'https://marsdd.com', icon: Building2, highlight: 'Scale-Up Hub', tags: ['Commercialization', 'Networking', 'National'] },
  { name: 'AI Collective', category: 'research', description: 'Applied AI research, talent development, and industry adoption support.', longDescription: 'The AI Collective helps Northern Ontario organizations adopt machine learning and artificial intelligence in practical ways — from data readiness assessments through pilot projects and workforce upskilling.', link: 'https://norcat.org', icon: Sparkles, highlight: 'Applied AI', tags: ['AI', 'R&D', 'Regional'] },
  { name: 'NOSM University', category: 'research', description: 'Medical university advancing health research and care for Northern communities.', longDescription: 'The Northern Ontario School of Medicine operates with a social accountability mandate, training physicians for rural and remote practice while conducting clinical and community health research across the region.', link: 'https://nosm.ca', icon: FlaskConical, highlight: 'Medical Research', tags: ['Health', 'R&D', 'Regional'] },
  { name: 'HSNRI', category: 'research', description: 'Health Sciences North Research Institute — patient-centred health innovation.', longDescription: 'HSNRI runs clinical trials and translational research alongside Health Sciences North, and partners with companies developing medical devices, diagnostics, and digital health tools that need clinical validation.', link: 'https://hsnri.ca', icon: FlaskConical, highlight: 'Health Research', tags: ['Health', 'R&D', 'Commercialization'] },
  { name: 'NRC IRAP', category: 'research', description: 'Federal R&D funding plus hands-on advisory from industrial technology advisors.', longDescription: 'The Industrial Research Assistance Program pairs Canadian SMEs with an Industrial Technology Advisor and provides cost-shared funding for technical development, making it one of the most used R&D programs in the country.', link: 'https://nrc.canada.ca/en/support-technology-innovation', icon: FlaskConical, highlight: 'R&D Funding', tags: ['Grants', 'R&D', 'Federal'] },
  { name: 'MIRARCO', category: 'research', description: 'Mining research consortium focused on safety, automation, and sustainability.', longDescription: 'MIRARCO conducts applied mining research out of Laurentian University, covering rock mechanics, ventilation, geospatial modelling, and environmental rehabilitation in partnership with operators and technology firms.', link: 'https://mirarco.org', icon: FlaskConical, highlight: 'Mining Research', tags: ['Mining', 'R&D', 'Regional'] },
  { name: 'CEMI', category: 'research', description: 'Industry-led organization accelerating adoption of mining innovation.', longDescription: 'The Centre for Excellence in Mining Innovation identifies operator challenges, funds and manages innovation projects against them, and shepherds proven technologies into widespread industry use.', link: 'https://cemi.ca', icon: Landmark, highlight: 'Mining Innovation', tags: ['Mining', 'Commercialization', 'National'] },
];

// ── Controlled tag vocabulary, grouped for the tag filter row ──
const TAG_GROUPS: { label: string; tags: string[] }[] = [
  { label: 'Sector', tags: ['Mining', 'Clean Tech', 'EV', 'AI', 'Cybersecurity', 'Health'] },
  { label: 'Capital', tags: ['Grants', 'Venture Capital', 'Angel Investment', 'Loans'] },
  { label: 'Services', tags: ['Mentorship', 'Advisory', 'Training', 'IP & Legal', 'R&D', 'Commercialization', 'Networking', 'Coworking'] },
  { label: 'Scope', tags: ['Regional', 'Provincial', 'Federal', 'National'] },
];


const Eyebrow = ({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <p className={`inline-flex items-center text-sm font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL, ...style }}>
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
  { number: '12', label: 'Support Organizations', icon: Users, key: 'support' as const },
  { number: '6', label: 'Funding Programs', icon: DollarSign, key: 'funding' as const },
  { number: '4', label: 'Post-Secondary Institutions', icon: GraduationCap, key: 'education' as const },
  { number: '8', label: 'Research Centres', icon: FlaskConical, key: 'research' as const },
];

const SudburyEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedOrg, setSelectedOrg] = useState<EcosystemOrg | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [tagMenuOpen, setTagMenuOpen] = useState(false);

  // Tags available within the current category, keeping the vocabulary controlled
  const availableTags = TAG_GROUPS.map((group) => ({
    label: group.label,
    tags: group.tags.filter((tag) =>
      ecosystemOrgs.some(
        (o) => (activeCategory === 'all' || o.category === activeCategory) && o.tags?.includes(tag),
      ),
    ),
  })).filter((g) => g.tags.length > 0);

  const filteredOrgs = ecosystemOrgs.filter((o) => {
    const matchesCategory = activeCategory === 'all' || o.category === activeCategory;
    const matchesTag = !activeTag || !!o.tags?.includes(activeTag);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      o.name.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      (o.longDescription && o.longDescription.toLowerCase().includes(q)) ||
      (o.highlight && o.highlight.toLowerCase().includes(q)) ||
      (o.tags && o.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCategory && matchesTag && matchesSearch;
  });

  const clearAll = () => { setActiveCategory('all'); setSearchQuery(''); setActiveTag(null); };


  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden py-16 md:py-24">
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
                <Eyebrow style={{ color: 'white' }}>BUILT FOR FOUNDERS</Eyebrow>
                <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                  SUPPORT AT <span style={{ color: TEAL }}>EVERY STAGE.</span>
                </Display>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed lg:pt-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Greater Sudbury punches well above its weight, bringing together funding, research, industry expertise, and startup support in one connected ecosystem.
              </p>
            </div>

            {/* Stats bar */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 rounded-2xl p-5 md:p-8" style={{ background: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
              {stats.map((s) => {
                const c = CATEGORY_COLORS[s.key];
                return (
                  <div key={s.label} className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.soft }}>
                      <s.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: c.color }} />
                    </div>
                    <div>
                      <p className="text-lg md:text-2xl font-black" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>{s.number}</p>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ───── DIRECTORY ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
              <div>
                <Eyebrow className="mb-2" style={{ color: '#6b7387' }}>Ecosystem Directory</Eyebrow>
                <h2 className="font-black leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: '#003DA6' }}>
                  Connect with <span style={{ color: TEAL }}>local</span> <span style={{ color: '#003DA6' }}>organizations</span>
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

            {/* Category filter pills — colour coded */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                const c = cat.id === 'all' ? { color: NAVY, soft: 'rgba(0,26,77,0.06)', deep: NAVY } : CATEGORY_COLORS[cat.id];
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setActiveTag(null); }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] transition-all"
                    style={active ? {
                      background: c.color, color: 'white', border: `1px solid ${c.color}`, fontFamily: FONT,
                    } : {
                      background: c.soft, color: c.deep, border: `1px solid ${c.soft}`, fontFamily: FONT,
                    }}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Tag filter — controlled vocabulary, grouped */}
            <div className="rounded-xl border p-3 md:p-4 mb-6 md:mb-8" style={{ borderColor: '#e6e9f0', background: '#FAFBFC' }}>
              <div className="flex flex-col gap-2.5">
                {availableTags.map((group) => (
                  <div key={group.label} className="flex flex-wrap items-center gap-1.5">
                    <span className="w-16 shrink-0 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#9aa1b1' }}>
                      {group.label}
                    </span>
                    {group.tags.map((tag) => {
                      const active = activeTag === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => setActiveTag(active ? null : tag)}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all"
                          style={active
                            ? { background: NAVY, color: 'white', border: `1px solid ${NAVY}`, fontFamily: FONT }
                            : { background: 'white', color: '#4b5468', border: '1px solid #dfe3ec', fontFamily: FONT }}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Card grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery + (activeTag ?? '')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {filteredOrgs.map((org) => {
                  const c = CATEGORY_COLORS[org.category];
                  return (
                    <motion.button
                      key={org.name}
                      layout
                      onClick={() => setSelectedOrg(org)}
                      whileHover={{ y: -3 }}
                      className="relative text-left bg-white border rounded-xl p-5 pl-6 overflow-hidden transition-all hover:shadow-lg flex flex-col"
                      style={{ borderColor: '#e6e9f0', color: NAVY }}
                    >
                      <span className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: c.color }} />

                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                             style={{ background: c.soft, color: c.color }}>
                          <org.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: c.color }}>
                            {c.label}
                          </p>
                          <h4 className="font-bold text-[15px] leading-snug" style={{ fontFamily: FONT, color: NAVY }}>
                            {org.name}
                          </h4>
                        </div>
                      </div>

                      <p className="mt-3 text-[13px] leading-relaxed" style={{ color: '#535c70' }}>
                        {org.description}
                      </p>

                      {org.tags && (
                        <div className="mt-4 pt-3 border-t flex flex-wrap gap-1.5" style={{ borderColor: '#eef0f5' }}>
                          {org.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-[0.08em]"
                                  style={{ background: c.soft, color: c.deep }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filteredOrgs.length === 0 && (
              <div className="text-center py-12" style={{ color: '#6b7280' }}>
                <p className="text-sm">No organizations match your filters.</p>
                <button
                  onClick={clearAll}
                  className="mt-2 text-xs font-bold underline"
                  style={{ color: TEAL }}
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Result count */}
            <div className="mt-8 pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: '#e2e8f0' }}>
              <p className="text-xs" style={{ color: '#6b7280' }}>
                Showing {filteredOrgs.length} of {ecosystemOrgs.length} organizations
                {activeTag && <> tagged <strong style={{ color: NAVY }}>{activeTag}</strong></>}
              </p>
              {(activeTag || activeCategory !== 'all' || searchQuery) && (
                <button onClick={clearAll} className="text-xs font-bold underline shrink-0" style={{ color: TEAL }}>
                  Clear filters
                </button>
              )}
            </div>

          </div>
        </section>

        {/* ───── BECOME A PARTNER CTA ───── */}
        <FinalCTA
          eyebrow="Join the Ecosystem"
          title="Become a"
          titleAccent="Partner."
          body="Want to add your organization to the directory or explore collaboration opportunities? Reach out and let's build something together."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />

        {/* ───── DETAIL MODAL ───── */}
        <Dialog open={!!selectedOrg} onOpenChange={(open) => !open && setSelectedOrg(null)}>
          <DialogContent className="max-w-lg p-0 overflow-hidden border-0" style={{ background: PAPER, color: NAVY }}>
            <div className="p-6 md:p-8 relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: selectedOrg ? CATEGORY_COLORS[selectedOrg.category].soft : 'rgba(0,179,152,0.12)' }} />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,61,165,0.10)' }} />

              <DialogHeader className="relative z-10 text-left space-y-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: selectedOrg ? CATEGORY_COLORS[selectedOrg.category].color : TEAL }}>
                  {selectedOrg && <selectedOrg.icon className="w-7 h-7" style={{ color: 'white' }} />}
                </div>
                <DialogTitle className="text-xl font-black uppercase leading-tight"
                              style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                  {selectedOrg?.name}
                </DialogTitle>
                {selectedOrg?.highlight && (
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.14em]"
                        style={{ background: CATEGORY_COLORS[selectedOrg.category].soft, color: CATEGORY_COLORS[selectedOrg.category].deep }}>
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
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'rgba(0, 179, 152, 0.8)', color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                ) : selectedOrg?.link ? (
                  <a href={selectedOrg.link} target="_blank" rel="noopener noreferrer"
                     className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02]"
                     style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
                    Visit Website
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'rgba(0, 179, 152, 0.8)', color: 'white' }}>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </DialogContent>
        </Dialog>


      </div>
    </Layout>
  );
};

export default SudburyEcosystem;
