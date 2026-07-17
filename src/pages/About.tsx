import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Rocket, Plus, Minus, Users, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/Layout';
import foundersImage from '@/assets/founders-collab.jpg';
import norcatBuilding from '@/assets/norcat-building.jpg.asset.json';
import storyLake from '@/assets/story/story-lake.jpg.asset.json';
import storyMine from '@/assets/story/story-mine.jpg.asset.json';
import storyHorse from '@/assets/story/story-horse.jpg.asset.json';
import featuredIap from '@/assets/featured-iap.png.asset.json';
import featuredScf from '@/assets/featured-scf.png.asset.json';
import featuredRaii from '@/assets/featured-raii.png.asset.json';
import featuredCit from '@/assets/featured-cit.png.asset.json';
import featuredCore5 from '@/assets/featured-core5.png.asset.json';
import undergroundCentre from '@/assets/underground-centre-v3.png.asset.json';
import ventureNorthPitch from '@/assets/venture-north-pitch-returning.png.asset.json';
import stateOfSudbury from '@/assets/state-of-sudbury-impact-card.png.asset.json';
import { LocationsMap } from '@/components/LocationsMap';
import valueResults from '@/assets/values/real-world-results.jpg';
import valueValidation from '@/assets/values/validation-demo.jpg';
import valueEcosystem from '@/assets/values/collaborative-ecosystem.jpg';
import { team, type TeamMember } from '@/data/team';


// Logos
import innovateonLogo from '@/assets/logos/innovateon.png.asset.json';
import fednorLogo from '@/assets/logos/fednor.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import ociLogo from '@/assets/logos/oci.png';
import nohfcLogo from '@/assets/logos/nohfc.png';
import ontarioPartnerLogo from '@/assets/logos/ontario-logo-wordmark.png';

// ── Brand tokens (mirrors Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";


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

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioPartnerLogo },
  { name: 'Ontario Centres of Innovation', logo: ociLogo },
  { name: 'Northern Ontario Heritage Fund Corporation', logo: nohfcLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
];

function TeamModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              style={{ background: 'white', border: '1px solid #d9dde5' }}
              initial={{ scale: 0.92, y: 16, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, y: 16, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={onClose}
                      className="absolute top-4 right-4 z-10 size-10 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                      style={{ background: PAPER, color: NAVY }}
                      aria-label="Close">
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row md:min-h-[520px]">
                <div className="md:w-[45%] aspect-square md:aspect-auto md:h-auto">
                  <img src={member.image} alt={member.name}
                       className="w-full h-full object-cover object-top" />
                </div>
                <div className="md:w-[55%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-2" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ color: TEAL, fontFamily: FONT }}>
                    {member.role}
                  </p>
                  <p className="leading-relaxed mb-8 text-sm md:text-base" style={{ color: '#475068' }}>
                    {member.bio}
                  </p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                     className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_2px_10px_-2px_hsla(168,100%,35%,0.4)] hover:shadow-[0_4px_16px_-2px_hsla(168,100%,35%,0.55)] hover:scale-[1.02] self-start text-white"
                     style={{ background: 'linear-gradient(135deg, #00b398 0%, #003da5 100%)', fontFamily: FONT }}>
                    Connect on LinkedIn
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function About() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);

  const toggleEvent = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        <section className="pt-20 md:pt-28 pb-10 md:pb-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Rooted in Northern Ontario
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                    style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                  Where Bold Ideas <span style={{ color: TEAL }}>Grow.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>NORCAT Innovation was founded in 2014 to ensure Northern Ontario's brightest ideas and talent have every reason to stay, grow, and succeed here, while attracting new founders and opportunities to the region.</p>
                  <p>As a non-profit Regional Innovation Centre, we help entrepreneurs turn ideas into market-ready ventures through mentorship, capital connections, industry relationships, and access to the resources needed to build, test, and scale.</p>
                  <p>By bringing the right people, partners, and opportunities together, we help Northern Ontario innovators grow here and compete anywhere.</p>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <img src={norcatBuilding.url} alt="NORCAT Innovation" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ───── IMPACT STATS ───── */}
        <section className="pt-4 md:pt-6 pb-10 md:pb-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { number: '150+', label: 'Startups Supported' },
                { number: '500+', label: 'Ecosystem Members' },
                { number: '2,000+', label: 'Sector-Diverse Jobs Created' },
                { number: '$50M+', label: 'Capital Raised' },
              ].map((s) => (
                <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                  <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── RIC NETWORK ───── */}
        <section className="pb-10 md:pb-16" style={{ background: BLUE, color: 'white' }}>
          <div className="mx-auto w-full px-5 sm:px-6 md:px-10 lg:px-14">
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg mb-[-48px] md:mb-[-72px] relative z-10" style={{ background: 'white', border: '1px solid rgba(0,26,77,0.08)' }}>
              <div className="shrink-0 flex items-center justify-center md:justify-start">
                <img src={innovateonLogo.url} alt="InnovateON - Regional Innovation Centre Network"
                     className="h-8 md:h-10 w-auto object-contain" />
              </div>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                We're proudly part of Ontario's 17-centre RIC Network, connecting entrepreneurs
                with resources, mentorship, and funding to start and scale businesses.
              </p>
            </div>
          </div>
        </section>




        {/* ───── STORY OF NORCAT (compact accordion timeline) ───── */}
        <section className="pt-20 md:pt-32 pb-14 md:pb-20 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-start">

              {/* Left: intro */}
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Our Journey
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                  From Idea to <span style={{ color: TEAL }}>RESULT.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  NORCAT Innovation was created to give entrepreneurs in Northern Ontario the support, connections, and opportunities needed to turn strong ideas into growing businesses.
                </p>
                <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Over time, that support has expanded into a connected ecosystem of mentorship, capital, industry relationships, validation opportunities, and practical resources designed to help founders build, test, and scale.
                </p>
              </div>

              {/* Right: accordion timeline */}
              <div className="relative">
                {/* Vertical rail */}
                <div className="absolute top-3 bottom-3 left-[11px] w-px" style={{ background: 'rgba(0,179,152,0.35)' }} />

                <ul className="relative">
                  {[
                    { year: '2014', title: 'The Innovation Mill', desc: "NORCAT officially launches Sudbury's Regional Innovation Centre, laying the groundwork for tech startup mentorship and hosting the first PITCH competition.", image: storyLake.url },
                    { year: '2017', title: 'Underground Centre Expansion', desc: 'Joint public funding helps NORCAT overhaul the Underground Centre, creating live testing labs for international technology builders.', image: undergroundCentre.url },
                    { year: '2019', title: 'Launch of the Sudbury Catalyst Fund', desc: 'The ecosystem hits its stride, supporting 100+ tech jobs, $35M+ in equity capital, and the $5M Sudbury Catalyst Fund.', image: featuredScf.url, cta: { label: 'View the SCF Recipients!', href: '/funding/sudbury-catalyst-fund' } },
                    { year: '2022', title: 'Mining Transformed', desc: "NORCAT debuts the world's only technology exhibition held inside an active underground mine.", image: storyMine.url },
                    { year: '2024', title: 'Venture North PITCH', desc: 'NORCAT and the Northern Ontario Angels merge their flagship events, bringing top startup talent and Angel Investors together.', image: ventureNorthPitch.url },
                    { year: '2026', title: 'Digital & AI Expansion', desc: 'NORCAT expands Underground Centre demonstration spaces, rolls out AI workshops, and overhauls tech startup services.', image: featuredCit.url },
                    { year: 'TODAY', title: 'Global Innovation', desc: 'A premier hub of Northern innovation, turning rugged, regional ideas into globally scalable technologies.', image: stateOfSudbury.url },
                  ].map((event, idx, arr) => {
                    const isOpen = openIdx === idx;
                    const ExpandIcon = isOpen ? Minus : Plus;
                    const isLast = idx === arr.length - 1;
                    return (
                      <li key={event.year + idx} className="relative pl-10">
                        {/* Node dot */}
                        <span
                          className="absolute left-0 z-10 inline-flex items-center justify-center rounded-full"
                          style={{
                            top: isOpen ? 28 : 18,
                            width: 22, height: 22,
                            background: 'white',
                            border: `2px solid ${TEAL}`,
                            boxShadow: isOpen ? `0 0 0 4px rgba(0,179,152,0.18)` : 'none',
                            transition: 'top 0.25s ease',
                          }}
                        >
                          <span className="rounded-full" style={{ width: 8, height: 8, background: TEAL }} />
                        </span>

                        {isOpen ? (
                          // ── Expanded card ──
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="my-2"
                          >
                            <div
                              className="rounded-[28px] bg-white p-4 sm:p-5 md:p-6"
                              style={{
                                border: '1px solid rgba(0,26,77,0.06)',
                                boxShadow: '0 20px 40px -22px rgba(0,26,77,0.28)',
                              }}
                            >
                              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                {/* Circular image */}
                                <div
                                  className="shrink-0 rounded-full overflow-hidden"
                                  style={{
                                    width: 112, height: 112,
                                    border: '4px solid white',
                                    boxShadow: '0 6px 18px -10px rgba(0,26,77,0.35)',
                                  }}
                                >
                                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                  <p className="font-black tracking-[0.16em] text-sm md:text-base mb-1" style={{ color: TEAL, fontFamily: FONT }}>
                                    {event.year}
                                  </p>
                                  <h3 className="font-black uppercase text-base md:text-lg lg:text-xl leading-tight mb-2" style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                                    {event.title}
                                  </h3>
                                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: '#475068' }}>
                                    {event.desc}
                                  </p>
                                  {event.cta && (
                                    <div className="pt-4">
                                      <Link to={event.cta.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold" style={{ background: TEAL, color: NAVY, fontFamily: FONT }}>
                                        {event.cta.label}
                                        <span className="inline-flex items-center justify-center size-6 rounded-full" style={{ background: NAVY, color: 'white' }}>
                                          <ArrowUpRight className="w-3 h-3" />
                                        </span>
                                      </Link>
                                    </div>
                                  )}
                                </div>

                                {/* Collapse button */}
                                <button
                                  type="button"
                                  onClick={() => toggleEvent(idx)}
                                  aria-expanded={true}
                                  aria-label="Collapse milestone"
                                  className="shrink-0 inline-flex items-center justify-center rounded-full self-start"
                                  style={{ width: 28, height: 28, background: 'rgba(0,26,77,0.06)', color: NAVY }}
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          // ── Collapsed row ──
                          <>
                            <button
                              type="button"
                              onClick={() => toggleEvent(idx)}
                              aria-expanded={false}
                              className="w-full flex items-center justify-between gap-4 py-3.5 md:py-4 text-left group"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-5 min-w-0">
                                <span className="font-black tracking-[0.16em] text-sm md:text-base shrink-0" style={{ color: TEAL, fontFamily: FONT }}>
                                  {event.year}
                                </span>
                                <h3 className="font-black uppercase text-sm md:text-base lg:text-[17px] leading-tight" style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                                  {event.title}
                                </h3>
                              </div>
                              <span
                                className="shrink-0 inline-flex items-center justify-center rounded-full transition-colors"
                                style={{ width: 28, height: 28, background: 'rgba(0,26,77,0.06)', color: NAVY }}
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </span>
                            </button>
                            {!isLast && (
                              <div style={{ borderBottom: '1px solid rgba(0,26,77,0.08)' }} />
                            )}
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* ───── EXPERTISE TO HELP YOU MOVE FORWARD ───── */}
        <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)`, color: 'white' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: 'white' }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: 'white' }} />
                THE INNOVATION TEAM
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                EXPERTISE TO HELP<br />YOU <span style={{ color: TEAL }}>MOVE FORWARD</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Whether it's your first time jotting a business idea down on the back of a napkin or you're scaling and ready to demonstrate your technology to global operators, we are here to help.
              </p>
            </div>
          </div>
        </section>

        {/* ───── TEAM GRID ───── */}
        <section className="py-10 md:py-14" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="mb-6 md:mb-8">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                THE INNOVATION TEAM
              </p>
              <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                MEET THE TEAM.
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  onClick={() => setModalMember(member)}
                  className="group text-left rounded-2xl overflow-hidden cursor-pointer relative bg-white"
                  style={{ border: '1px solid #d9dde5' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalMember(member); }}
                  aria-label={`Open profile for ${member.name}`}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0"
                         style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,26,77,0.15) 100%)' }} />
                  </div>

                  <div className="p-5">
                    <h3 className="font-black uppercase text-base md:text-lg mb-1"
                        style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.18em]"
                       style={{ color: TEAL, fontFamily: FONT }}>
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── OUR VALUES (dark, 2x2 icon cards) ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.06), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-8 md:mb-10">
              <Eyebrow>WHAT DRIVES INNOVATION?</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl">
                INNOVATION{"\u00a0"}VALUES.
              </Display>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { image: valueResults, title: 'REAL-WORLD RESULTS', desc: "Founders are building practical technologies that solve real industry challenges, create job opportunity, and strengthen Northern Ontario's innovation economy locally with global impact." },
                { image: valueValidation, title: 'VALIDATION & DEMONSTRATION', desc: 'Much more than just creating a product, innovation takes curiosity, speed, and a willingness to challenge the standard; we foster the ecosystem for ambitious ideas like yours to come to life.' },
                { image: valueEcosystem, title: 'COLLABORATIVE ECOSYSTEM', desc: 'successful companies do not scale in isolation. We connect founders, investors, industry, and partners together to scaffold and support your innovation.' },
              ].map((v) => (
                <div key={v.title}
                     className="rounded-2xl overflow-hidden flex flex-col transition hover:-translate-y-1"
                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={v.image} alt={v.title} loading="lazy" width={1024} height={1024}
                         className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <h3 className="font-black uppercase text-lg md:text-xl lg:text-2xl mb-3 text-white"
                        style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                      {v.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: FG_MUTED }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ───── TESTIMONIAL BLURBS ───── */}
        <section className="py-14 md:py-20" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-8 md:mb-10">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                HEAR FOUNDER VOICES
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                BUILT IN THE NORTH.<br /><span style={{ color: TEAL }}>BACKED BY NORCAT.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "NORCAT gave us the credibility, connections, and capital introductions we needed to turn a prototype into a globally deployable mining technology.",
                  name: "PodCo Team",
                  company: "PodCo",
                },
                {
                  quote: "The mentorship was practical, not theoretical. They helped us navigate customer validation, pitch preparation, and our first institutional round.",
                  name: "MEDATech RaisePro",
                  company: "MEDATech RaisePro",
                },
                {
                  quote: "Being part of the NORCAT ecosystem opened doors to industry partners we could never have reached on our own. It changed our trajectory.",
                  name: "Kinmetrix",
                  company: "Kinmetrix",
                },
              ].map((t) => (
                <div
                  key={t.company}
                  className="rounded-2xl p-8 md:p-10 flex flex-col justify-between transition hover:-translate-y-1"
                  style={{ background: 'white', border: '1px solid rgba(0,26,77,0.08)' }}
                >
                  <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#475068' }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-[0.12em]" style={{ color: NAVY, fontFamily: FONT }}>
                      {t.name}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] mt-1" style={{ color: TEAL }}>
                      {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── OUR PARTNERS ───── */}
        <section className="py-10 md:py-14" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-left mb-6 md:mb-8">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                OUR PARTNERS
              </p>
              <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                SUPPORTING WHAT'S NEXT.
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-2xl" style={{ color: '#5b6478' }}>
                Our partner network gives startups greater access to expertise, capital, connections, and new opportunities.{" "}
                <Link
                  to="/ecosystem/sudbury-ecosystem"
                  className="inline-flex items-center gap-1 font-bold underline underline-offset-4 transition-colors hover:no-underline"
                  style={{ color: TEAL, fontFamily: FONT }}
                >
                  Explore the full ecosystem directory
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {partnerLogos.map((p) => (
                <div key={p.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center transition hover:-translate-y-0.5 p-5"
                     style={{ background: 'white', border: '1px solid #e3e6ec' }}>
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className={`max-w-full object-contain ${p.name === 'City of Greater Sudbury' ? 'max-h-[70%]' : 'max-h-full'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── AWARDS BANNER (colour) ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.06), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="mb-8 md:mb-10 text-left">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Recognition
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl text-white"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Awards & <span style={{ color: TEAL }}>Accolades.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                { year: '2011', title: 'NASA Group Achievement', org: 'NASA', Icon: Rocket, href: 'https://www.northernontariobusiness.com/around-the-north/norcat-recognized-for-work-with-nasa-367803' },
                { year: '2016', title: 'Entrepreneurial Community of the Year', org: 'Northern Ontario Business Awards', Icon: Users, href: 'https://www.northernontariobusiness.com/regional-news/sudbury/30th-annual-northern-ontario-business-award-winners-announced-432689' },
                { year: '2019', title: 'Best Place to Work', org: 'Northern Ontario Business Awards', Icon: Star, href: 'https://www.inc.com/kevin-daum/this-entrepreneurial-engineer-knows-business-success-requires-more-than-just-stem.html' },
              ].map((a) => (
                <a
                  key={a.title}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center text-center rounded-2xl bg-white px-6 pt-10 pb-8 transition-transform duration-300 hover:-translate-y-1"
                  style={{ boxShadow: '0 24px 50px -20px rgba(0,26,77,0.45)' }}
                >
                  {/* Badge + laurels */}
                  <div className="relative flex items-center justify-center mb-6" style={{ height: 88, width: 150 }}>
                    {/* Left laurel */}
                    <svg viewBox="0 0 60 90" className="absolute" style={{ right: 'calc(50% + 30px)', width: 46, height: 70, opacity: 0.45 }} aria-hidden="true">
                      <g fill="none" stroke="#7FA3C7" strokeWidth="2" strokeLinecap="round">
                        <path d="M50 85 Q 20 55, 20 8" />
                        {Array.from({ length: 7 }).map((_, i) => {
                          const t = 0.15 + i * 0.11;
                          const cx = 50 - (50 - 20) * t - 6;
                          const cy = 85 - (85 - 8) * t;
                          return <ellipse key={i} cx={cx} cy={cy} rx="8" ry="4" transform={`rotate(${-40 - i * 6} ${cx} ${cy})`} fill="#B9CFE3" stroke="none" />;
                        })}
                      </g>
                    </svg>
                    {/* Right laurel (mirrored) */}
                    <svg viewBox="0 0 60 90" className="absolute" style={{ left: 'calc(50% + 30px)', width: 46, height: 70, opacity: 0.45, transform: 'scaleX(-1)' }} aria-hidden="true">
                      <g fill="none" stroke="#7FA3C7" strokeWidth="2" strokeLinecap="round">
                        <path d="M50 85 Q 20 55, 20 8" />
                        {Array.from({ length: 7 }).map((_, i) => {
                          const t = 0.15 + i * 0.11;
                          const cx = 50 - (50 - 20) * t - 6;
                          const cy = 85 - (85 - 8) * t;
                          return <ellipse key={i} cx={cx} cy={cy} rx="8" ry="4" transform={`rotate(${-40 - i * 6} ${cx} ${cy})`} fill="#B9CFE3" stroke="none" />;
                        })}
                      </g>
                    </svg>
                    {/* Center medallion */}
                    <div className="relative inline-flex items-center justify-center rounded-full"
                         style={{ width: 64, height: 64, background: NAVY, boxShadow: '0 8px 18px -6px rgba(0,26,77,0.5)' }}>
                      <a.Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Year with side rules */}
                  <div className="flex items-center gap-3 mb-3 w-full justify-center">
                    <span className="h-px flex-1 max-w-[40px]" style={{ background: 'rgba(0,179,152,0.55)' }} />
                    <span className="text-lg font-black tracking-tight" style={{ fontFamily: FONT, color: TEAL }}>{a.year}</span>
                    <span className="h-px flex-1 max-w-[40px]" style={{ background: 'rgba(0,179,152,0.55)' }} />
                  </div>

                  {/* Title */}
                  <h3 className="w-full font-black uppercase leading-tight tracking-tight text-center text-lg md:text-xl mb-5"
                      style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    {a.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-full h-px mb-4" style={{ background: 'rgba(0,26,77,0.12)' }} />

                  {/* Org */}
                  <p className="text-xs md:text-[13px] font-bold uppercase tracking-[0.14em] leading-snug"
                     style={{ color: NAVY }}>
                    {a.org}
                  </p>
                </a>
              ))}
            </div>
          </div>

        </section>

        {/* ───── FINAL CTA (white) ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            {/* Eyebrow removed */}
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
              LET'S BUILD SOMETHING<br /><span style={{ color: TEAL }}>EXTRAORDINARY!</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#475068' }}>
              <br />
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply"
                    className="group inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY }}>
                Apply&nbsp;
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
              <Link to="/ecosystem/sudbury"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors"
                    style={{ background: 'rgba(0,26,77,0.06)', color: NAVY, border: '1px solid rgba(0,26,77,0.12)', fontFamily: FONT }}>
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </section>


      </div>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </Layout>
  );
}
