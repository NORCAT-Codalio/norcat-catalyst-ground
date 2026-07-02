import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Users, Rocket, Building2, Handshake, Sparkles, Quote, Star, TrendingUp, Activity, Cpu, Leaf, Brain, Stethoscope, Cog, ChevronRight, ChevronLeft, Image as ImageIcon, CheckCircle2, Layers, Banknote, DollarSign } from 'lucide-react';
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
import core5EvChargingAsset from '@/assets/core5-ev-charging.png.asset.json';
import featuredIapPhoto from '@/assets/featured-iap-photo.png';
import featuredRaiiPhoto from '@/assets/featured-raii-photo.png';
import featuredScfPhoto from '@/assets/featured-scf-photo.png';
import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogoInline from '@/assets/logos/ontario-logo.png';
import ovinLogo from '@/assets/logos/ovin-logo.png.asset.json';
import fednorFullLogo from '@/assets/logos/fednor-full.png';
import canadaLogo from '@/assets/logos/government-of-canada.png.asset.json';
const featuredCitImg = featuredCitPhoto;
const featuredIapImg = featuredIapPhoto;
const featuredRaiiImg = featuredRaiiPhoto;
const featuredScfImg = featuredScfPhoto;
const featuredCore5Img = core5EvChargingAsset.url;



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
import waiveLogo from '@/assets/logos/waive.png';
import symxLogo from '@/assets/logos/symx.png';
import codalioLogo from '@/assets/logos/codalio.png';
import flosonicsLogo from '@/assets/logos/flosonics.png';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import loopxLogo from '@/assets/logos/loopx.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';
import rnaLogo from '@/assets/logos/rna-diagnostics.png';
import myomarLogo from '@/assets/logos/myomar.png';
import waiveTestimonialLogo from '@/assets/logos/waive.png';
import planaLogo from '@/assets/logos/plana.png';
import chamberPerksAsset from '@/assets/chamber-perks-logo.png.asset.json';
import perspicAsset from '@/assets/logos/perspic-logo.png.asset.json';
import smartyprintsAsset from '@/assets/logos/smartyprints-logo.avif.asset.json';
import podcoAsset from '@/assets/logos/podco-logo.png.asset.json';
import scientAsset from '@/assets/logos/scient-logo.png.asset.json';
import tesmanAsset from '@/assets/logos/tesman-logo.png.asset.json';
const chamberPerksLogo = chamberPerksAsset.url;
const perspicLogo = perspicAsset.url;
const smartyprintsLogo = smartyprintsAsset.url;
const podcoLogo = podcoAsset.url;
const scientLogo = scientAsset.url;
const tesmanLogo = tesmanAsset.url;

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import nickelBasinLogo from '@/assets/logos/nickel-basin.png';
import ontarioLogo from '@/assets/logos/ontario.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import noaLogoAsset from '@/assets/logos/noa.png.asset.json';

const noaLogo = noaLogoAsset.url;

const FONT = "'Open Sans', system-ui, sans-serif";

const audiences = [
  { icon: Rocket, title: 'Are you a Founder?', body: 'We unlock the physical space, regional resources, elite talent, and direct funding to successfully\u00a0scale, develop, and commercialize your innovation globally.' },
  { icon: Building2, title: 'Are you an Industry Leader?', body: 'We connect you directly with our tech-builder clients to accelerate real-world development: test cutting-edge products live, and forge strategic business partnerships.' },
  { icon: Handshake, title: 'Are you an Investor?', body: 'If you are looking to back high-potential, high-grit companies rooted in the industrial market, we introduce you to startups that are already operationally tested.\u00a0' },
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

const testimonials = [
  {
    quote: "My first PITCH with NORCAT Innovation was a night I'll never forget. The investment that followed changed everything. Since then, our company has relocated to Sudbury, secured $2M in seed funding, and today our team has grown from 7 to 60 in just four years.",
    headline: 'Luke Begley',
    subline: 'Founder, CircuitIQ',
    tag: 'PITCH 2022',
    logo: circuitiqLogo,
  },
  {
    quote: "The venture capital and funding environment right now is quite challenging and has been for the last couple of years. As we raise our $3-million seed round to advance our at-home test and scale up our laboratory operations to handle 30,000 samples per year, the investment we secured through Greater Sudbury has been a massive win. In the funding world, many organizations wait for the first group to jump. Securing this level of trust and expertise from Northern Ontario through the Venture North PITCH ecosystem has acted as a true catalyst, opening quite a few doors for us to bring in additional capital.",
    headline: 'Myomar Molecular',
    subline: "Judges' Choice & Peter Dal Bianco Award",
    tag: 'PITCH 2025',
    logo: myomarLogo,
  },
  {
    quote: "Participating in the 2024 NORCAT Venture North PITCH competition was a transformative experience for the Chamber Perks App. The exceptional mentorship, guidance, and unwavering support from the NORCAT team were instrumental in refining our business strategy and enhancing our presentation skills. Since participating and winning the People's Choice Award, the Chamber Perks App has experienced significant growth, we have expanded our team, extended our reach across Canada, and developed a bilingual version of the app.",
    headline: 'Karen Hastie',
    subline: 'Founder/CEO, Chamber Perks App',
    tag: 'PITCH 2024',
    logo: chamberPerksLogo,
  },
  {
    quote: 'Working within the NORCAT ecosystem as a mentor, as a contributor, and as an investor, I realized that there is a hunger for growth and innovation and has a strong talent pool coming from Cambrian College, College Boreal, and Laurentian University.',
    headline: 'Ehsan Mirdamadi',
    subline: 'CEO/Founder, Codalio',
    tag: 'NORCAT Innovation Client',
    logo: codalioLogo,
  },
  {
    quote: "It surprised me how much high technology there actually is in Sudbury… it is possible to be successful in building a technology company in Northern Ontario, which I think a lot of people don't realize.",
    headline: 'Matthew Gougeon',
    subline: 'CEO and Founder, Perspic',
    tag: 'NORCAT Innovation Client',
    logo: perspicLogo,
  },
  {
    quote: "We had a lot of references for work through the Fortin Discovery Lab and NORCAT, and such strong support turned out to be invaluable, especially when first getting started! You need get involved with your local ecosystem.",
    headline: 'Stephen Podrucky',
    subline: 'CEO and Founder, Podco',
    tag: 'NORCAT Innovation Client',
    logo: podcoLogo,
  },
  {
    quote: "At some point I realised the need to shake hands of the people in the mining sector, and that's more than just a virtual conversation. NORCAT was the place that we find a very high density of end users, companies, and a network that has helped a lot to accelerate the process from having an idea to having a technology.",
    headline: 'Mashoud Aali',
    subline: 'Founder and CEO, Scient Analytic',
    tag: 'NORCAT Innovation Client',
    logo: scientLogo,
  },
  {
    quote: "As a nurse at Health Sciences North, I got to see firsthand what worked, what didn't, and where the gaps were, while support from NORCAT helped me navigate the startup landscape, opened doors and remained incredibly supportive.",
    headline: 'Avalon Lupini',
    subline: 'CEO and Founder, SmartyPrints',
    tag: 'NORCAT Innovation Client',
    logo: smartyprintsLogo,
  },
  {
    quote: "I got involved with NORCAT as a really passionate business owner, but I was running on a dream, a positive attitude, and a belief I was going to get this done. However, once I was paired with Mr. Peter Dal Bianco, things really changed for my company. I don't think I'd be where I am today without the mentorship of Peter.",
    headline: 'Sheri Tomchick',
    subline: 'CEO and Founder, PlanA & StaffStat',
    tag: 'NORCAT Innovation Client',
    logo: planaLogo,
  },
  {
    quote: "From a small business perspective, being part of a larger high-end innovation centre and team is invaluable to a start-up innovation firm. Working with NORCAT and its connections, has taught us about what we don't know, and we learned how to do what we don't know.",
    headline: 'Clara Steele',
    subline: 'Co-Founder, TesMan',
    tag: 'NORCAT Innovation Client',
    logo: tesmanLogo,
  },
  {
    quote: "Support from NORCAT was critical in our decision to relocate our company to Sudbury, and Venture North PITCH really launched us into the ecosystem that led us to our first angel investor.",
    headline: 'Tabassum Pasha',
    subline: 'Co-Founder, Waive',
    tag: 'PITCH 2023',
    logo: waiveTestimonialLogo,
  },
];

const portfolio = [
  { name: 'Turnkey', logo: turnkeyLogo }, { name: 'Rogers', logo: rogersLogo },
  { name: 'Hard-Line', logo: hardlineLogo }, { name: 'Waive', logo: waiveLogo },
  { name: 'Symx AI', logo: symxLogo }, { name: 'Codalio', logo: codalioLogo },
  { name: 'Flosonics', logo: flosonicsLogo }, { name: 'Kinmetrix', logo: kinmetrixLogo },
  { name: 'LoopX', logo: loopxLogo }, { name: 'CircuitIQ', logo: circuitiqLogo },
  { name: 'RNA Diagnostics', logo: rnaLogo },
];

const partners = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogo },
  { name: 'Northern Ontario Angels', logo: noaLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'Rogers', logo: rogersLogo },
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [featuredProgramIndex, setFeaturedProgramIndex] = useState(0);
  const visibleCount = 2;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const nextTestimonial = () => setTestimonialIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prevTestimonial = () => setTestimonialIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const featuredPrograms = [
    {
      name: 'Critical Industrial Technologies (CIT) Initiative',
      short: 'CIT',
      icon: Cpu,
      image: featuredCitImg,
      description: "Supporting the development and adoption of advanced technologies that strengthen Northern Ontario's mining and industrial sectors.",
      bullets: [
        'Non-dilutive project funding',
        'Access to world-class testing and validation facilities',
        'Connections to industry and innovation partners',
      ],
      href: '/mining/critical-industrial-tech',
      partners: [
        { logo: ociLogo, name: 'Ontario Centre of Innovation' },
        { logo: ontarioLogoInline, name: 'Government of Ontario' },
      ],
    },
    {
      name: 'Innovation\nAcceleration Program',
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
        { logo: ovinLogo.url, name: 'Ontario Vehicle Innovation Network' },
        { logo: ontarioLogoInline, name: 'Government of Ontario' },
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
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
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

        {/* ───── PROGRAM HIGHLIGHTS ───── */}
        <section className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden" style={{ background: '#F2F3F6' }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-5 min-[1200px]:gap-6 items-stretch">
              {highlights.map((h, i) => {
                const bg = ['#001A4D', '#003DA5', TEAL][i];
                const image = [circuitiqTeam, whatwedoRobotImg, whatwedoPodiumImg][i];
                const link = ['/programs', '/mining/norcat-underground', '/funding'][i];
                const linkText = ['Explore Services', 'Explore Our Facilities', 'Explore Funding Pathways'][i];

                return (
                  <article key={h.label}
                           className="relative overflow-hidden rounded-2xl flex flex-col w-full h-full sm:w-[92%] sm:max-w-[720px] min-[1200px]:w-full min-[1200px]:max-w-none"
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

        {/* ───── FEATURED PROGRAMS (tabbed) ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL, fontFamily: FONT }}>
              Featured Programs
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-4"
                style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
              Featured Programs
            </h2>
            <div className="h-1.5 w-16 mb-10" style={{ background: TEAL }} />

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {featuredPrograms.map((p, i) => {
                const active = i === featuredProgramIndex;
                return (
                  <button
                    key={p.name}
                    onClick={() => setFeaturedProgramIndex(i)}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,26,77,0.35)] bg-white">
              {/* Left visual */}
              <div className="relative min-h-[320px] md:min-h-[460px] overflow-hidden bg-white">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Right content */}
              <div className="p-8 md:p-12 flex flex-col">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL, fontFamily: FONT }}>
                  Featured Program
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}>
                  {activeProgram.name}
                </h3>
                <div className="h-1.5 w-10 mb-5" style={{ background: TEAL }} />
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(0,26,77,0.75)' }}>
                  {activeProgram.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {activeProgram.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden="true" />
                      <span className="text-sm md:text-base" style={{ color: NAVY }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={activeProgram.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm mt-auto self-start transition-transform hover:translate-x-0.5"
                  style={{ background: TEAL, color: 'white', fontFamily: FONT }}
                >
                  View This Program <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                {/* Delivered in partnership with */}
                <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(0,26,77,0.12)' }}>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: 'rgba(0,26,77,0.55)', fontFamily: FONT }}>
                    Delivered in partnership with
                  </p>
                  <div className="flex flex-nowrap items-center gap-4 sm:gap-5 md:gap-6">
                    {activeProgram.partners.map((partner) => {
                      const isCanada = partner.name === 'Government of Canada';
                      return (
                        <div
                          key={partner.name}
                          className="flex items-center justify-center rounded-lg px-2 py-1"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            loading="lazy"
                            width={240}
                            height={isCanada ? 60 : 40}
                            className={`w-auto object-contain ${
                              isCanada
                                ? 'h-10 sm:h-12 md:h-14 max-w-[220px] sm:max-w-[260px]'
                                : 'h-8 sm:h-9 md:h-10 max-w-[180px] sm:max-w-[200px]'
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


        {/* ───── WHO IT'S FOR (light) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: '#F2F3F6', color: '#001A4D' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at top right, rgba(0,179,152,0.12), transparent 55%), radial-gradient(ellipse at bottom left, rgba(47,111,214,0.12), transparent 55%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 md:mb-16">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Built for
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  <span className="block" style={{ color: NAVY }}>
                    Built for the builders of the
                  </span>
                  <span className="block"
                        style={{ WebkitTextStroke: `2px ${TEAL}`, color: 'transparent' }}>
                    North.
                  </span>
                </h2>
              </div>
              <div className="flex flex-col justify-end lg:pb-2">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: '#475068' }}>
                  Right here in Greater Sudbury, we shape the innovation ecosystem from both ends of the spectrum.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: '#475068' }}>
                  We have spent decades forging a reputation and a global network that allows us to bridge the gap between raw talent and commercial reality for founders, investors, and solution-seeking adopters.
                </p>
              </div>
            </div>

            {/* Bento grid: three audience cards on top, quote + CTA on bottom */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Three audience cards (top row) */}
              {audiences.map((a) => (
                  <div key={a.title} className="relative p-7 md:p-9 rounded-2xl bg-white"
                       style={{ border: '1px solid #d9dde5' }}>
                    <div className="flex items-start justify-end mb-3">
                      <a.icon className="size-5" strokeWidth={2} style={{ color: TEAL }} />
                    </div>
                    <h3 className="font-black uppercase text-xl md:text-2xl mb-3" style={{ fontFamily: FONT }}>{a.title}</h3>
                    <p className="leading-relaxed text-sm md:text-base" style={{ color: '#475068' }}>{a.body}</p>
                  </div>
                ))}

              {/* Bottom-left data card */}
              <div className="relative rounded-2xl overflow-hidden p-7 md:p-10 lg:col-span-2 min-h-[260px] lg:min-h-[320px] flex flex-col justify-end"
                   style={{
                     background: `linear-gradient(135deg, ${TEAL} 0%, #0b6fb8 45%, #0a3a8c 100%)`,
                   }}>
                <span className="absolute top-7 left-7 md:top-10 md:left-10 text-[10px] font-bold tracking-[0.18em] uppercase text-white/90"
                      style={{ fontFamily: FONT }}>
                  [ DATA · NACO 2025 ]
                </span>
                <Quote className="relative w-8 h-8 mb-4 text-white/90" />
                <p className="relative text-lg sm:text-xl md:text-2xl leading-snug font-semibold text-white">
                  Northern Ontario led Canada on a per-capita basis with 35.9 deals per million population, widening its lead over Southern Ontario from 50% in 2024 to 64% in 2025
                </p>
                <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  - National Angel Capital Organization
                </p>
              </div>

              {/* Bottom-right CTA box */}
              <div className="relative rounded-2xl p-7 md:p-9 flex flex-col justify-end overflow-hidden"
                   style={{ background: TEAL, border: '1px solid #00a38a' }}>
                <img src={norcatHalfLogo} alt="" aria-hidden="true" className="absolute top-0 right-0 h-full w-auto opacity-10 pointer-events-none" />
                <p className="relative text-xs font-bold uppercase tracking-[0.18em] mb-auto" style={{ color: NAVY, fontFamily: FONT }}>
                  Get involved
                </p>
                <div className="relative flex flex-wrap items-center gap-3 mt-6">
                  <Link to="/apply"
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ background: NAVY, color: 'white' }}>
                    Apply
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: NAVY }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </Link>
                  <Link to="/about"
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ background: 'white', color: NAVY, border: '1px solid #001A4D' }}>
                    Learn more
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── TESTIMONIALS (FROM FOUNDERS, FIRSTHAND) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                From Founders,<br />Firsthand
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full" style={{ background: TEAL }} />
              <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: '#475068' }}>
                Real reflections from founders who have worked with NORCAT Innovation to strengthen their strategy, expand their networks, and grow beyond the region.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden -mx-4 px-4 py-6">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(calc(5% - ${testimonialIndex} * (90% / ${visibleCount})))` }}
                >
                  {testimonials.map((t, idx) => {
                    const isVisible = idx >= testimonialIndex && idx < testimonialIndex + visibleCount;
                    return (
                      <div
                        key={t.headline}
                        className="w-[85%] sm:w-[55%] lg:w-[45%] flex-shrink-0 px-3 transition-all duration-500"
                        style={{ opacity: isVisible ? 1 : 0.4, transform: isVisible ? 'scale(1)' : 'scale(0.96)' }}
                      >
                        <figure
                          className="relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-xl"
                          style={{ background: 'white', border: '1px solid rgba(0,26,77,0.08)' }}>
                          {/* Header: logo placeholder + closing quote */}
                          <div className="flex items-start justify-between mb-5">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                 style={{ border: t.logo ? '1px solid rgba(0,26,77,0.10)' : `2px dashed ${TEAL}40`, background: t.logo ? 'white' : 'rgba(0,179,152,0.06)' }}>
                              {t.logo ? (
                                <img src={t.logo} alt={`${t.headline} logo`} className="max-w-[90%] max-h-[90%] object-contain" loading="lazy" />
                              ) : (
                                <ImageIcon className="w-8 h-8 md:w-10 md:h-10" style={{ color: `${TEAL}80` }} />
                              )}
                            </div>
                            <div className="text-5xl md:text-6xl font-serif leading-none" style={{ color: TEAL, opacity: 0.85 }}>&rdquo;</div>
                          </div>

                          <blockquote className="relative leading-relaxed flex-1 text-base sm:text-lg font-medium" style={{ color: NAVY }}>
                            {t.quote}
                          </blockquote>

                          <figcaption className="relative mt-8 pt-5" style={{ borderTop: '1px solid rgba(0,26,77,0.12)' }}>
                            <p className="font-black uppercase tracking-wider text-sm md:text-base" style={{ fontFamily: FONT, color: NAVY }}>
                              {t.headline}
                            </p>
                            <p className="text-xs md:text-sm mt-1 font-medium" style={{ color: '#475068' }}>
                              {t.subline}
                            </p>
                            {t.tag && (
                              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em]" style={{ color: TEAL }}>
                                {t.tag}
                              </p>
                            )}
                          </figcaption>
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 size-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                style={{ background: NAVY, color: 'white' }}>
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 size-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                style={{ background: NAVY, color: 'white' }}>
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Go to testimonial slide ${i + 1}`}
                  className="size-2.5 rounded-full transition-all"
                  style={{ background: i === testimonialIndex ? TEAL : 'rgba(0,26,77,0.25)', transform: i === testimonialIndex ? 'scale(1.25)' : 'scale(1)' }}
                />
              ))}
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

        {/* ───── PORTFOLIO / PARTNERS ───── */}
        <section className="pt-20 md:pt-24 pb-10 md:pb-12" style={{ background: '#F2F3F6' }}>

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center mb-10 md:mb-12">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Powered by partners
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Made possible by those who believe in the North.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-14">
              {partners.map((p) => (
                <div key={p.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center transition hover:-translate-y-0.5 p-5"
                     style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>

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
