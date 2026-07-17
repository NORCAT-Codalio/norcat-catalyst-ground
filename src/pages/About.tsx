import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Target, Rocket, Atom, Share2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/Layout';
import foundersImage from '@/assets/founders-collab.jpg';
import norcatBuilding from '@/assets/norcat-building.jpg.asset.json';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
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


// Award badges
import awardBestPlace from '@/assets/award-best-place-to-work.png';
import awardInnovationEco from '@/assets/award-best-innovation-ecosystem.png';
import awardNasa from '@/assets/award-nasa-achievement.png';

// Logos
import ontarioLogoAsset from '@/assets/logos/ontario-logo-wordmark.png';
import innovateonLogo from '@/assets/logos/innovateon.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import ociLogo from '@/assets/logos/oci.png';
import nohfcLogo from '@/assets/logos/nohfc.png';

// ── Brand tokens (mirrors Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogoAsset },
  { name: 'Ontario Centres of Innovation', logo: ociLogo },
  { name: 'Northern Ontario Heritage Fund Corporation', logo: nohfcLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
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


export default function About() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleEvent = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background (matches Home2 hero) */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow (matches Home2 hero) */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          {/* signature lines */}
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="text-lg !text-white">ABOUT NORCAT INNOVATION</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                OUR <span style={{ color: TEAL }}>STORY.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Since 2014, we have been passionate about driving the growth of Northern Ontario's innovation ecosystem in Greater Sudbury and beyond.
              </p>
            </div>
          </div>
        </section>


        {/* ───── ROOTED IN NORTHERN ONTARIO ───── */}
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
                  <p>NORCAT Innovation was founded to ensure Northern Ontario's brightest ideas and talent have every reason to stay, grow, and succeed here, while attracting new founders and opportunities to the region.</p>
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




        {/* ───── STORY OF NORCAT (compact accordion timeline) ───── */}
        <section className="py-14 md:py-20 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
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
                  From Idea to <span style={{ color: TEAL }}>Impact.</span>
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
                          className="absolute left-0 top-[18px] inline-flex items-center justify-center rounded-full"
                          style={{
                            width: 22, height: 22,
                            background: 'white',
                            border: `2px solid ${TEAL}`,
                            boxShadow: isOpen ? `0 0 0 4px rgba(0,179,152,0.15)` : 'none',
                          }}
                        >
                          <span className="rounded-full" style={{ width: 8, height: 8, background: TEAL }} />
                        </span>

                        {/* Row */}
                        <button
                          type="button"
                          onClick={() => toggleEvent(idx)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 py-3 md:py-3.5 text-left transition-colors hover:opacity-90"
                        >
                          <div className="flex items-baseline gap-3 md:gap-5 min-w-0">
                            <span className="font-black tracking-[0.14em] text-sm md:text-base shrink-0" style={{ color: TEAL, fontFamily: FONT }}>
                              {event.year}
                            </span>
                            <h3 className="font-black uppercase text-sm md:text-base lg:text-[17px] leading-tight truncate" style={{ fontFamily: FONT, letterSpacing: '-0.01em', color: NAVY }}>
                              {event.title}
                            </h3>
                          </div>
                          <span
                            className="shrink-0 inline-flex items-center justify-center rounded-full transition-colors"
                            style={{
                              width: 28, height: 28,
                              background: isOpen ? TEAL : 'rgba(0,26,77,0.06)',
                              color: isOpen ? 'white' : NAVY,
                            }}
                          >
                            <ExpandIcon className="w-3.5 h-3.5" />
                          </span>
                        </button>

                        {/* Expanded card */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="card"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div
                                className="mb-3 mt-1 rounded-2xl overflow-hidden bg-white"
                                style={{
                                  border: '1px solid rgba(0,26,77,0.08)',
                                  boxShadow: '0 12px 32px -18px rgba(0,26,77,0.25)',
                                }}
                              >
                                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-0">
                                  <div className="aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                                  </div>
                                  <div className="p-4 md:p-5">
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
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Divider */}
                        {!isLast && (
                          <div className="ml-0" style={{ borderBottom: '1px solid rgba(0,26,77,0.08)' }} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>




        {/* ───── OUR VALUES (dark, 2x2 icon cards) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.06), transparent 45%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <Eyebrow>What Drives Innovation</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl">
                Our <span style={{ color: TEAL }}>Values.</span>
              </Display>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {[
                { icon: Target, title: 'Real-World Impact', desc: "We support founders building practical technologies that solve real industry challenges, create opportunity, and strengthen Northern Ontario's innovation economy." },
                { icon: Atom, title: 'Bold Experimentation', desc: 'Innovation takes curiosity, speed, and a willingness to challenge what exists. We create space for ambitious ideas to be built, tested, refined, and moved forward.' },
                { icon: Rocket, title: 'Idea to Market', desc: 'From early validation to growth, we connect entrepreneurs with mentorship, capital, industry relationships, and hands-on support to help ventures scale with purpose.' },
                { icon: Share2, title: 'Connected Ecosystem', desc: 'Great companies do not grow in isolation. We bring together founders, investors, industry, and partners to turn local innovation into lasting impact.' },
              ].map((v) => (
                <div key={v.title}
                     className="rounded-2xl p-7 md:p-10 flex items-center gap-6 md:gap-8 transition hover:-translate-y-1"
                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <div className="shrink-0 inline-flex items-center justify-center rounded-full size-20 md:size-24"
                       style={{ border: `1.5px solid ${TEAL}`, background: 'rgba(0,179,152,0.06)' }}>
                    <v.icon className="w-10 h-10 md:w-11 md:h-11" strokeWidth={1.4} style={{ color: TEAL }} />
                  </div>
                  <div className="flex-1 min-w-0 border-l border-white/15 pl-6 md:pl-8">
                    <h3 className="font-black uppercase text-lg md:text-xl lg:text-2xl mb-2 text-white"
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

            <div className="mt-12 md:mt-14 flex justify-center">
              <Link
                to="/insights/success-stories"
                className="group inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                style={{ background: 'white', color: NAVY, fontFamily: FONT }}
              >
                Success Stories
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: TEAL, color: 'white' }}>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>


        {/* ───── AWARDS BANNER (light) ───── */}
        <section className="py-20 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Recognition
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Awards & <span style={{ color: TEAL }}>Accolades.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Recognized nationally and globally for building a world-class innovation ecosystem in the North.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-end max-w-4xl mx-auto">
              {[
                { title: 'Best Place to Work', org: 'Bell Business Awards', img: awardBestPlace },
                { title: 'Best Innovation Ecosystem', org: 'Bell Business Awards', img: awardInnovationEco },
                { title: 'NASA Group Achievement Award', org: 'NASA', img: awardNasa },
              ].map((a) => (
                <div key={a.title} className="group flex flex-col items-center text-center transition hover:-translate-y-1">
                  <img
                    src={a.img}
                    alt={`${a.title} - ${a.org}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-auto max-w-[180px] drop-shadow-sm"
                  />
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: TEAL }}>
                    {a.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PARTNERS - Powered by ───── */}

        <section className="pt-20 md:pt-24 pb-10 md:pb-12" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center mb-10 md:mb-12">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Our Partners
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Friends who open doors.
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#5b6478' }}>
                The operators, builders, and organizations who show up, make intros, and help founders win.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {partnerLogos.map((p) => (
                <div key={p.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center transition hover:-translate-y-0.5 p-5"
                     style={{ background: 'white', border: '1px solid #e3e6ec' }}>
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── FINAL CTA (dark, Home2 pattern) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/2 object-contain object-right-top opacity-50 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow className="justify-center">Your move</Eyebrow>
            <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to join<br /><span style={{ color: TEAL }}>our community?</span>
            </Display>
            <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: FG_MUTED }}>
              Whether you're just starting out or ready to scale, we're here to help you build something extraordinary.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply"
                    className="group inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY }}>
                Apply to NORCAT Innovation
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
              <Link to="/ecosystem/sudbury"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontFamily: FONT }}>
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </section>

        {/* ───── RIC NETWORK (light) ───── */}
        <section className="pb-10 md:pb-16" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
              <div>
                <img src={innovateonLogo} alt="InnovateON - Regional Innovation Centre Network"
                     className="h-8 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs
                  with resources, mentorship, and funding to start and scale businesses.
                </p>
              </div>

              <div>
                <img src={ontarioLogoAsset} alt="Government of Ontario" className="h-16 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  Funded by the <strong style={{ color: NAVY }}>Ministry of Economic Development, Job Creation and Trade</strong>,
                  enabling free and subsidized services for Northern Ontario entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
