import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Users, Rocket, Building2, Handshake, Sparkles, Star, TrendingUp, Activity, Cpu, Leaf, Brain, Stethoscope, Cog, ChevronRight, CheckCircle2, Layers, Banknote, DollarSign } from 'lucide-react';
import { Layout } from '@/components/Layout';
import signatureLines from '@/assets/signature-lines.png';
import miningUndergroundHero from '@/assets/mining-underground-hero.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import loopxTeam from '@/assets/loopx-team.jpg';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import successStoriesCardImg from '@/assets/Untitled_design_85.png.asset.json';
import norcatHalfLogoSquare from '@/assets/norcat-half-logo-square-v2.png.asset.json';

import founderSpotlight from '@/assets/underground-centre-v3.png.asset.json';
import heroHeaderDesktopAsset from '@/assets/hero-website-header-desktop-v2.png.asset.json';
import heroHeaderNoPersonAsset from '@/assets/hero-website-header-noperson.png.asset.json';
import whatwedoRobotImg from '@/assets/whatwedo-robot.jpg';
import whatwedoPodiumImg from '@/assets/whatwedo-podium.png';
import ventureNorthPitchAsset from '@/assets/venture-north-pitch-returning.png.asset.json';
import stateOfSudburyImpactAsset from '@/assets/state-of-sudbury-impact-card.png.asset.json';
import ovinMiningInnovationAsset from '@/assets/ovin-mining-innovation.png.asset.json';
import featuredCitPhoto from '@/assets/featured-cit-photo.png';
import featuredCore5Photo from '@/assets/featured-core5-photo.png';
import featuredIapPhoto from '@/assets/featured-iap-photo.png';
import featuredRaiiPhoto from '@/assets/featured-raii-photo.png';
import featuredScfPhoto from '@/assets/featured-scf-photo.png';
import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogoInlineAsset from '@/assets/logos/ontario-logo-wordmark.png.asset.json';
import ovinLogo from '@/assets/logos/ovin-logo.png';
import fednorFullLogo from '@/assets/logos/fednor-full.png';
import canadaLogo from '@/assets/logos/government-of-canada.png';
const featuredCitImg = featuredCitPhoto;
const featuredIapImg = featuredIapPhoto;
const featuredRaiiImg = featuredRaiiPhoto;
const featuredScfImg = featuredScfPhoto;
const featuredCore5Img = featuredCore5Photo;



const norcatBuilding = successStoriesCardImg.url;
const norcatHalfLogo = norcatHalfLogoSquare.url;

const founderSpotlightImg = founderSpotlight.url;
const heroHeaderDesktopImg = heroHeaderDesktopAsset.url;
const heroHeaderNoPersonImg = heroHeaderNoPersonAsset.url;
const ventureNorthPitchImg = ventureNorthPitchAsset.url;
const stateOfSudburyImpactImg = stateOfSudburyImpactAsset.url;
const ovinMiningInnovationImg = ovinMiningInnovationAsset.url;
import norcatWhiteLogo from '@/assets/logos/norcat-white.png';


// Portfolio logos
import turnkeyLogo from '@/assets/logos/turnkey.png';
import rogersLogo from '@/assets/logos/rogers.png';
import hardlineLogo from '@/assets/logos/hardline.png';
import waiveLogo from '@/assets/logos/waive.png.asset.json';
import symxLogo from '@/assets/logos/symx.png';
import codalioLogo from '@/assets/logos/codalio.png';
import flosonicsLogo from '@/assets/logos/flosonics.png';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import loopxLogo from '@/assets/logos/loopx.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';
import rnaLogo from '@/assets/logos/rna-diagnostics.png';
import myomarLogo from '@/assets/logos/myomar.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import nickelBasinLogo from '@/assets/logos/nickel-basin.png';
import sudburyLogo from '@/assets/logos/sudbury-logo.png';
import noaLogoAsset from '@/assets/logos/noa.png.asset.json';

const noaLogo = noaLogoAsset.url;

const FONT = "'Open Sans', system-ui, sans-serif";

const audiences = [
  { icon: Rocket, title: 'For Founders', body: 'Get the advisory support, funding guidance, market validation, and connections you need to build and grow a successful venture.', href: '/programs', linkLabel: 'Explore support' },
  { icon: Building2, title: 'For SMEs', body: 'Access programs, funding pathways, and technology development sites to test, validate, and advance new solutions for real industry needs.', href: '/programs', linkLabel: 'Explore opportunities' },
  { icon: Handshake, title: 'For Industry Partners', body: 'Connect with emerging technologies and startup solutions built to solve real operational challenges across mining, industrial, and advanced technology sectors.', href: '/ecosystem', linkLabel: 'Connect with innovators' },
];


const highlights = [
  { icon: Sparkles, label: 'Venture Growth', desc: 'Take advantage of 1-on-1 mentorship, strategic programs, and a robust network designed to turn you into a market leader.', img: circuitiqTeam },
  { icon: Cpu, label: 'Testing & Validation', desc: 'Accelerate your development with our world-exclusive underground testing centre and advanced prototyping space to design, build, and validate global solutions.', img: ctaPhoto2 },
  { icon: TrendingUp, label: 'Accessing Capital', desc: 'We simplify the journey to funding, connecting you with government funding, venture capital, and a network of angel investors to fuel your innovation.', img: loopxTeam },
];

const sectors = [
  { icon: Cpu, label: 'Mining Tech' },
  { icon: Leaf, label: 'Clean Tech' },
  { icon: Brain, label: 'AI / ML' },
  { icon: Stethoscope, label: 'Med Tech' },
  { icon: Cog, label: 'Robotics' },
  { icon: Rocket, label: 'and more' },
];


const portfolio = [
  { name: 'Turnkey', logo: turnkeyLogo }, { name: 'Rogers', logo: rogersLogo },
  { name: 'Hard-Line', logo: hardlineLogo }, { name: 'Waive', logo: waiveLogo.url },
  { name: 'Symx AI', logo: symxLogo }, { name: 'Codalio', logo: codalioLogo },
  { name: 'Flosonics', logo: flosonicsLogo }, { name: 'Kinmetrix', logo: kinmetrixLogo },
  { name: 'LoopX', logo: loopxLogo }, { name: 'CircuitIQ', logo: circuitiqLogo },
  { name: 'RNA Diagnostics', logo: rnaLogo },
];


// Style tokens - NORCAT Innovation Brand V1.0 (2026)
const NAVY = '#001A4D';          // Deep Navy
const NAVY_SURFACE = '#001233';  // deeper navy surface
const NAVY_ELEV = '#002766';     // elevated navy card
const BLUE = '#003DA5';          // Innovation Blue
const SKY = '#2F6FD6';           // Sky
const TEAL = '#00B398';          // Momentum Teal (accent)
const MINT = '#7FE3D3';          // Mint
const PAPER = '#F2F3F6';         // Paper (surface)
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const SIGNATURE_GRADIENT = `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 55%, ${NAVY} 100%)`;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
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

export default function Home2() {
  const storiesScrollRef = useRef<HTMLDivElement>(null);
  const [featuredProgramIndex, setFeaturedProgramIndex] = useState(0);

  const featuredPrograms = [
    {
      name: 'Critical Industrial Technologies (CIT)',
      short: 'CIT',
      icon: Cpu,
      image: featuredCitImg,
      description: "Supporting SMEs in developing and adopting advanced mining and industrial technologies through access to the NORCAT Underground Centre.",
      bullets: [
        'Non-dilutive project funding',
        'Access to world-class testing and validation facilities',
        'Connections to industry and innovation partners',
      ],
      href: '/mining/critical-industrial-tech',
      partners: [
        { logo: ociLogo, name: 'Ontario Centre of Innovation' },
        { logo: ontarioLogoInlineAsset.url, name: 'Government of Ontario' },
      ],
    },
    {
      name: 'Innovation Acceleration\nProgram (IAP)',
      short: 'IAP',
      icon: Sparkles,
      image: featuredIapImg,
      description: 'Accelerate market entry for high-growth ventures across Northern Ontario with tailored, non-dilutive support.',
      bullets: [
        'Milestone-based non-dilutive funding',
        'Hands-on advisory from industry experts',
        'Pathways to strategic partners and customers',
      ],
      href: '/funding/innovation-acceleration-program',
      partners: [
        { logo: canadaLogo, name: 'Government of Canada' },
        { logo: fednorFullLogo, name: 'Federal Economic Development Agency for Northern Ontario' },
      ],
    },
    {
      name: 'Regional Artificial Intelligence Initiative',
      short: 'RAII',
      icon: Brain,
      image: featuredRaiiImg,
      description: 'Capital, compute, and specialized support for AI-driven ventures scaling out of Northern Ontario.',
      bullets: [
        'Dedicated funding for AI ventures',
        'Access to compute credits and technical mentors',
        'Industry pilot opportunities across sectors',
      ],
      href: '/funding/regional-ai-program',
      partners: [
        { logo: canadaLogo, name: 'Government of Canada' },
        { logo: fednorFullLogo, name: 'Federal Economic Development Agency for Northern Ontario' },
      ],
    },
    {
      name: 'Sudbury Catalyst Fund',
      short: 'SCF',
      icon: Banknote,
      image: featuredScfImg,
      description: '$3M early-stage fund co-investing up to $250K alongside qualified angel investors in Northern Ontario ventures.',
      bullets: [
        'Up to $250K in seed equity co-investment',
        'Angel investor network alignment',
        'Post-investment portfolio support',
      ],
      href: '/funding/sudbury-catalyst-fund',
      partners: [
        { logo: fednorLogo, name: 'Federal Economic Development Agency for Northern Ontario' },
        { logo: nickelBasinLogo, name: 'Nickel Basin Federal Development Corporation' },
        { logo: sudburyLogo, name: 'City of Greater Sudbury' },
      ],
    },
    {
      name: 'Core5',
      short: 'Core5',
      icon: Layers,
      image: featuredCore5Img,
      description: 'The OVIN Northern Regional Technology Development Site supporting startups and SMEs across the full battery and electric vehicle value chain.',
      bullets: [
        'BEV / EV sector project funding',
        'Real-world underground and industrial testing',
        'Access to OEMs and industry partners',
      ],
      href: '/mining/core5',
      partners: [
        { logo: ovinLogo, name: 'Ontario Vehicle Innovation Network' },
        { logo: ontarioLogoInlineAsset.url, name: 'Government of Ontario' },
      ],
    },
  ];
  const activeProgram = featuredPrograms[featuredProgramIndex];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: "'Open Sans', sans-serif" }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex flex-col"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          {/* Background image - no-person version on mobile/tablet, new people-right banner on desktop */}
          <div className="absolute inset-0 bg-no-repeat lg:hidden"
               style={{ backgroundImage: `url(${heroHeaderNoPersonImg})`, backgroundSize: 'cover', backgroundPosition: 'left center' }} />
          <div className="absolute inset-0 bg-no-repeat hidden lg:block"
               style={{ backgroundImage: `url(${heroHeaderDesktopImg})`, backgroundSize: 'cover', backgroundPosition: 'right bottom' }} />

          {/* Readability gradient - lighter on desktop because the new banner already has a clean left side */}
          <div className="absolute inset-0 pointer-events-none lg:hidden" style={{
            background: 'linear-gradient(180deg, rgba(0,26,77,0.92) 0%, rgba(0,61,120,0.78) 35%, rgba(0,179,152,0.55) 70%, rgba(0,179,152,0.35) 100%)',
          }} />
          <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{
            background: 'linear-gradient(90deg, rgba(0,26,77,0.78) 0%, rgba(0,26,77,0.60) 30%, rgba(0,61,120,0.35) 55%, rgba(0,179,152,0.15) 75%, transparent 85%)',
          }} />

          {/* Top-left teal glow + bottom-right blue glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.32), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          <div className="relative w-full flex-1 flex flex-col items-stretch">
            <div className="flex flex-col justify-center px-5 sm:px-6 md:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] pt-8 pb-8 md:pt-12 md:pb-12">
                <Eyebrow>Sudbury's Regional Innovation Centre</Eyebrow>

                <div className="font-black uppercase leading-[0.9] tracking-tight text-white max-w-5xl"
                     style={{ fontFamily: FONT, letterSpacing: '-0.03em' }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">BUILD, TEST</div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    <span className="text-white">& </span>
                    <span className="text-white">SCALE</span>
                    <span className="text-white"> YOUR</span>
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
                    TECH VENTURE.
                  </div>
                </div>

                <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  We help Northern Ontario startups move from idea to market by connecting them to the mentorship, capital, industry relationships, and real-world validation they need to grow here and compete anywhere.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {sectors.map((s) => (
                    <span key={s.label}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                          style={{ fontFamily: FONT, color: 'rgba(255,255,255,0.85)', border: `1px solid ${TEAL}66`, background: 'rgba(0,179,152,0.10)' }}>
                      <s.icon className="w-3.5 h-3.5" />
                      {s.label}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link to="/apply"
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ fontFamily: FONT, background: TEAL, color: NAVY }}>
                    Apply to NORCAT Innovation
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </Link>
                  <Link to="/about"
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ fontFamily: FONT, background: 'rgba(255,255,255,0.5)', color: NAVY, border: '1px solid #001A4D' }}>
                    Learn More
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        {/* ───── IMPACT STATS ───── */}
        <section className="py-6 md:py-8" style={{ background: PAPER, color: NAVY }}>
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

        {/* ───── FEATURED PROGRAMS (tabbed) ───── */}
        <section className="py-10 md:py-14 relative overflow-hidden" style={{ background: '#F2F3F6', color: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at top right, rgba(0,179,152,0.14), transparent 50%), radial-gradient(ellipse at top left, rgba(0,179,152,0.09), transparent 45%), radial-gradient(ellipse at bottom left, rgba(47,111,214,0.08), transparent 55%)`,
          }} />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL, fontFamily: FONT }}>
              Featured Programs
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-4"
                style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
              Featured Programs
            </h2>
            <div className="h-1.5 w-16 mb-8" style={{ background: TEAL }} />

            {/* Tabs */}
            <div className="flex flex-nowrap gap-1.5 sm:gap-3 mb-6">
              {featuredPrograms.map((p, i) => {
                const active = i === featuredProgramIndex;
                return (
                  <button
                    key={p.name}
                    onClick={() => setFeaturedProgramIndex(i)}
                    className="flex-1 sm:flex-initial px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
                    style={{
                      fontFamily: FONT,
                      background: active ? TEAL : 'white',
                      color: active ? 'white' : NAVY,
                      border: `1px solid ${active ? TEAL : 'rgba(0,26,77,0.15)'}`,
                      boxShadow: active ? '0 6px 20px -8px rgba(0,179,152,0.6)' : 'none',
                    }}
                    aria-pressed={active}
                  >
                    {p.short}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,26,77,0.35)] bg-white lg:h-[560px]">
              {/* Left visual */}
              <div className="relative min-h-[180px] sm:min-h-[240px] md:min-h-[360px] overflow-hidden bg-white">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Right content */}
              <div className="p-6 sm:p-8 md:p-8 lg:p-8 flex flex-col h-full min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: TEAL, fontFamily: FONT }}>
                    Featured Program
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}>
                    {activeProgram.name}
                  </h3>
                  <div className="h-1.5 w-10 mb-4" style={{ background: TEAL }} />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(0,26,77,0.75)' }}>
                    {activeProgram.description}
                  </p>
                  <ul className="hidden sm:block space-y-2 mb-4">
                    {activeProgram.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true" />
                        <span className="text-sm md:text-base" style={{ color: NAVY }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <Link
                    to={activeProgram.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base w-full sm:w-auto transition-transform hover:translate-x-0.5"
                    style={{ background: TEAL, color: 'white', fontFamily: FONT }}
                  >
                    View This Program <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  {/* Delivered in partnership with */}
                  <div className="mt-5 pt-5 border-t hidden md:block" style={{ borderColor: 'rgba(0,26,77,0.12)' }}>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(0,26,77,0.55)', fontFamily: FONT }}>
                      Delivered in partnership with
                    </p>
                    <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-5 md:gap-5">
                      {activeProgram.partners.map((partner) => {
                        const isCanada = partner.name === 'Government of Canada';
                        const isFednor = partner.name === 'Federal Economic Development Agency for Northern Ontario';
                        const isOntario = partner.name === 'Government of Ontario';
                        return (
                          <div
                            key={partner.name}
                            className="flex items-center justify-start rounded-lg py-1"
                          >
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              loading="lazy"
                              width={160}
                              height={48}
                              className={`w-auto object-contain ${
                                isCanada
                                  ? 'h-9 sm:h-10 md:h-11 max-w-[180px] sm:max-w-[200px]'
                                  : isFednor
                                  ? 'h-8 sm:h-9 md:h-10 max-w-[160px] sm:max-w-[180px]'
                                  : isOntario
                                  ? 'h-7 sm:h-8 md:h-9 max-w-[140px] sm:max-w-[160px]'
                                  : 'h-7 sm:h-8 md:h-9 max-w-[130px] sm:max-w-[150px]'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ───── PROGRAM HIGHLIGHTS ───── */}
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ background: '#F2F3F6' }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {highlights.map((h, i) => {
                const bg = ['#001A4D', '#003DA5', TEAL][i];
                const image = [circuitiqTeam, whatwedoRobotImg, whatwedoPodiumImg][i];
                const link = ['/programs', '/mining/norcat-underground', '/funding'][i];
                const linkText = ['Explore Services', 'Explore Our Facilities', 'Explore Funding Pathways'][i];

                return (
                  <article key={h.label}
                           className="relative overflow-hidden rounded-2xl flex flex-col w-full h-full"
                           style={{ background: bg, border: `1px solid ${i === 2 ? '#00a38a' : '#2a5bb5'}` }}>
                    {/* Top image */}
                    <div className="relative w-full overflow-hidden h-48 sm:h-[260px] md:h-[300px] min-[1200px]:h-52 shrink-0">
                      <img src={image} alt="" aria-hidden="true"
                           className="w-full h-full object-cover" />
                    </div>
                    {/* Content */}
                    <div className="relative flex-1 flex flex-col p-5 sm:p-6 lg:p-7 overflow-hidden">
                      <img src={norcatHalfLogo} alt="" aria-hidden="true"
                           className="absolute right-0 top-1/2 -translate-y-1/2 h-[140%] w-auto object-contain opacity-10 pointer-events-none" />
                      <h3 className="font-black leading-tight text-white mb-3 sm:mb-4 break-words"
                          style={{ fontFamily: FONT, letterSpacing: '-0.02em', fontSize: 'clamp(1.25rem, 1.2vw + 0.7rem, 1.75rem)' }}>
                        {h.label}.
                      </h3>
                      <p className="leading-relaxed text-white/90 mb-6" style={{ fontSize: 'clamp(0.85rem, 0.25vw + 0.78rem, 0.95rem)' }}>{h.desc}</p>
                      <Link to={link}
                            className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-transform hover:translate-x-1 mt-auto"
                            style={{ fontFamily: FONT }}>
                        {linkText}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── REAL STORIES. UNIQUE INSIGHTS. ───── */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src={signatureLines} alt="" aria-hidden="true" className="absolute top-0 right-0 w-[600px] opacity-100" />
          </div>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <Eyebrow>Latest Updates</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Real Stories.<br />Unique Insights.
                </Display>
                <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: FG_MUTED }}>
                  Stories, insights, and reports from the founders, partners, and programs powering Northern Ontario's innovation ecosystem.
                </p>
              </div>
            </div>

            {/* Carousel - 4 cards visible, equal sizing */}
            <div className="relative">
              <div ref={storiesScrollRef} className="flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory pb-2">
                {[
                  { category: 'Events', title: 'Venture North PITCH Returns this October', image: ventureNorthPitchImg, link: '/events' },
                  { category: 'Success Stories', title: 'How NORCAT Innovation Helped 150+ Startups', image: norcatBuilding, link: '/insights/success-stories' },
                  { category: 'News', title: 'OVIN RTDS Renewed for Northern Ontario', image: ovinMiningInnovationImg, link: '/insights/news?article=ovin-core5-renewed-2026' },
                  { category: 'Impact', title: 'Innovation Ecosystem Snapshot', image: stateOfSudburyImpactImg, link: '/impact' },
                  
                  { category: 'Success Stories', title: 'CircuitIQ: From Sudbury Startup to Industry Leader', image: circuitiqTeam, link: '/insights/success-stories' },
                  { category: 'Impact', title: 'Annual Impact Report: Jobs, Capital & Growth Metrics', image: loopxTeam, link: '/impact' },
                ].map((post) => (
                  <Link key={post.title} to={post.link} className="group flex-shrink-0 snap-start w-[80%] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] hover:scale-[1.02] transition-transform duration-300">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(0 0% 0% / 0.72) 0%, hsl(0 0% 0% / 0.40) 35%, transparent 60%)' }} />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(0 0% 0%) 0%, hsl(0 0% 0% / 0.75) 30%, hsl(0 0% 0% / 0.35) 60%, hsl(0 0% 0% / 0.15) 100%)' }} />
                      <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider" style={{
                        background: 'hsla(168, 100%, 35%, 0.25)',
                        color: 'hsl(168, 100%, 65%)',
                        border: '1px solid hsla(168, 100%, 50%, 0.35)',
                        backdropFilter: 'blur(8px)',
                      }}>{post.category}</span>
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-2 break-words" style={{ fontFamily: FONT }}>{post.title}</h3>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                          Read More <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>


            {/* Navigation arrows */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => {
                  const el = storiesScrollRef.current;
                  if (!el) return;
                  const step = el.clientWidth / 4;
                  const maxScroll = el.scrollWidth - el.clientWidth;
                  if (el.scrollLeft <= 10) {
                    el.scrollTo({ left: maxScroll, behavior: 'smooth' });
                  } else {
                    el.scrollBy({ left: -step, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: 'hsla(0, 0%, 100%, 0.15)', border: '1px solid hsla(0, 0%, 100%, 0.25)', backdropFilter: 'blur(10px)' }}
                aria-label="Scroll left"
              >
                <ChevronRight className="w-5 h-5 text-white/80 rotate-180" />
              </button>
              <button
                onClick={() => {
                  const el = storiesScrollRef.current;
                  if (!el) return;
                  const step = el.clientWidth / 4;
                  const maxScroll = el.scrollWidth - el.clientWidth;
                  if (el.scrollLeft + step >= maxScroll - 10) {
                    el.scrollTo({ left: 0, behavior: 'smooth' });
                  } else {
                    el.scrollBy({ left: step, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: 'hsla(0, 0%, 100%, 0.15)', border: '1px solid hsla(0, 0%, 100%, 0.25)', backdropFilter: 'blur(10px)' }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-white/80" />
              </button>
            </div>
          </div>
        </section>


        {/* ───── WHO IT'S FOR (Built for) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: '#F2F3F6', color: '#001A4D' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at top right, rgba(0,179,152,0.12), transparent 55%), radial-gradient(ellipse at bottom left, rgba(47,111,214,0.12), transparent 55%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">

            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Here to Support
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  <span className="block" style={{ color: NAVY }}>
                    Northern Ontario
                  </span>
                  <span className="block" style={{ color: TEAL }}>
                    Innovation.
                  </span>
                </h2>
              </div>
            </div>


            {/* Three audience cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 md:mb-14">
              {audiences.map((a) => (
                <div key={a.title} className="relative p-7 md:p-9 rounded-2xl bg-white flex flex-col h-full"
                     style={{ border: '1px solid #d9dde5' }}>
                  <div className="flex items-center justify-center size-14 rounded-full mb-6"
                       style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}30` }}>
                    <a.icon className="size-6" strokeWidth={2} style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl md:text-2xl mb-3" style={{ fontFamily: FONT, color: NAVY }}>{a.title}</h3>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#475068' }}>{a.body}</p>
                </div>
              ))}
            </div>


            {/* Bottom CTA banner */}
            <div className="relative rounded-2xl overflow-hidden p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-8"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-3xl lg:text-nowrap mb-3" style={{ fontFamily: FONT, color: 'white' }}>
                  Ready to build, test, or scale?
                </h3>
                <p className="text-base sm:text-lg leading-relaxed lg:max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Whether you're launching a startup, validating new technology, or looking for the right funding pathway, we're here to help you take the next step.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-shrink-0">
                <Link to="/programs"
                      className="group inline-flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                      style={{ background: 'white', color: NAVY, border: '1px solid #001A4D' }}>
                  Contact us
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
              </div>
            </div>


          </div>
        </section>



        {/* ───── PORTFOLIO COMPANIES - Logo Carousel ───── */}
        <section className="relative py-10 overflow-hidden" style={{ background: 'white' }}>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...portfolio, ...portfolio].map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-36 h-16 px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-32 relative overflow-hidden" style={{ background: '#F2F3F6' }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow>Your move</Eyebrow>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Ready to build<br /><span style={{ color: TEAL }}>something real?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Whether you're validating an idea or scaling a series-A company, NORCAT Innovation has a seat at the table for you.
            </p>
            <Link to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: 'white' }}>
              Apply to NORCAT Innovation
              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </span>
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
