import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Zap,
  FlaskConical,
  Handshake,
  Battery,
  Cpu,
  MapPin,
  Wrench,
  Network,
  Users,
  CircleDollarSign,
} from 'lucide-react';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

import core5Logo from '@/assets/logos/core5-logo.png.asset.json';
import ovinBadge from '@/assets/ovin-partner-badge.png.asset.json';
import core5Map from '@/assets/core5-map.png';
import norcatLogo from '@/assets/logos/norcat.png';
import cambrianRdLogo from '@/assets/logos/cambrian-rd.png';
import iionLogo from '@/assets/logos/iion.png';
import icampLogo from '@/assets/logos/icamp.png';
import tedcLogo from '@/assets/logos/tedc.png';

// ── Brand tokens (mirrors Home2 / About / Rogers Cybersecure) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
    style={{ fontFamily: FONT, color: TEAL }}
  >
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
  >
    {children}
  </As>
);

const stages = [
  {
    icon: Wrench,
    title: 'BUILD',
    description:
      'Strengthen your business. Access mentorship, market intelligence, funding guidance and commercialization support to help turn an innovative idea into a scalable business.',
  },
  {
    icon: FlaskConical,
    title: 'TEST',
    description:
      'Put your technology to work. Access specialized R&D and testing infrastructure across the CORE5 network, including the NORCAT Underground Centre.',
  },
  {
    icon: Zap,
    title: 'VALIDATE',
    description:
      'Prove it in real-world conditions. Test, refine and demonstrate your solution in environments designed to help reduce technical and commercial risk.',
  },
  {
    icon: Handshake,
    title: 'CONNECT',
    description:
      'Get closer to market. Build relationships with industry, research organizations, technology adopters and other partners that can support pilots, commercialization and growth.',
  },
];

const networkAccess = [
  {
    icon: Users,
    title: 'BUSINESS SUPPORT',
    description: 'Advisors, mentorship, market intelligence and commercialization guidance.',
  },
  {
    icon: Cpu,
    title: 'R&D EXPERTISE',
    description: 'Researchers, technical specialists, applied research and product development capabilities.',
  },
  {
    icon: FlaskConical,
    title: 'TESTING & VALIDATION',
    description: 'Labs, prototyping facilities and real-world technology demonstration environments.',
  },
  {
    icon: Network,
    title: 'INDUSTRY CONNECTIONS',
    description: 'Relationships that can open doors to collaboration, pilots, customers and commercialization opportunities.',
  },
  {
    icon: CircleDollarSign,
    title: 'FUNDING NAVIGATION',
    description: 'Support identifying programs and opportunities that can help advance your technology.',
  },
];

const partners = [
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'Cambrian R&D', logo: cambrianRdLogo },
  { name: 'IION', logo: iionLogo },
  { name: 'ICAMP', logo: icampLogo },
  { name: 'TEDC', logo: tedcLogo },
];

const Core5 = () => {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}
          />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
            }}
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-4xl">
              <Display as="h1" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                CORE5
              </Display>

              <p
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                A pan-Northern Ontario initiative supporting Ontario SMEs in developing EV technologies across the
                value chain, from critical minerals extraction to EV technology manufacturing.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Get Support <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://core5.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Explore Core5
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                <span>EV TECHNOLOGY</span>
                <span style={{ color: TEAL }}>•</span>
                <span>MINING ELECTRIFICATION</span>
                <span style={{ color: TEAL }}>•</span>
                <span>CRITICAL MINERALS</span>
                <span style={{ color: TEAL }}>•</span>
                <span>SMART MOBILITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───── START WITH NORCAT (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <Eyebrow>NORCAT Innovation</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  START WITH NORCAT.<br />
                  <span style={{ color: TEAL }}>CONNECT ACROSS THE NORTH.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>
                    You don’t have to navigate the innovation ecosystem on your own. NORCAT Innovation works with
                    startups and SMEs to understand what you’re building, where you are in your journey and what you need
                    to move forward.
                  </p>
                  <p>
                    Through CORE5, we can connect you with a broader network of innovation organizations, research
                    institutions, specialized facilities and industry partners across Northern Ontario.
                  </p>
                  <p>
                    Whether you need business guidance, technical expertise, a place to test your technology or
                    connections to industry, we’ll help you find the right next step.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Connect with NORCAT Innovation <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className="flex items-center justify-center rounded-2xl p-8"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img src={core5Map} alt="Core5 Northern Ontario network map" className="w-full max-w-md object-contain" />
                </div>
                <div
                  className="flex items-center justify-center rounded-2xl p-8"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img src={core5Logo.url} alt="Core5" className="h-14 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SUPPORT AT EVERY STAGE (dark) ───── */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${BLUE} 0%, ${NAVY} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 10% 90%, rgba(47,111,214,0.15), transparent 45%)`,
            }}
          />
          <img
            src={norcatHalfLogo.url}
            alt=""
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-[420px] opacity-[0.05] pointer-events-none select-none"
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow className="!text-white">How We Help</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                SUPPORT AT<br />
                <span style={{ color: TEAL }}>EVERY STAGE.</span>
              </Display>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {stages.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-7 h-full"
                  style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="font-black uppercase text-lg mb-2 text-white"
                    style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>
                    {s.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── NORCAT UNDERGROUND CENTRE (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>Real-World Innovation Starts Here</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  THE NORCAT<br />
                  <span style={{ color: TEAL }}>UNDERGROUND CENTRE.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>
                    For technology companies working in mining, electrification and related industries, validation
                    often requires more than a traditional lab.
                  </p>
                  <p>
                    The NORCAT Underground Centre is an operating mine and active innovation environment where startups
                    and SMEs can develop, test and demonstrate emerging technologies under real-world conditions.
                  </p>
                  <p>
                    It also creates opportunities to connect technology developers with the mining companies and industry
                    leaders looking for new solutions.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/mining/underground-centre"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Explore the Underground Centre <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[300px]"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}
              >
                <Display className="text-2xl sm:text-3xl md:text-4xl mb-6">
                  DEVELOP.<br />
                  TEST.<br />
                  DEMONSTRATE.
                </Display>
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <Zap className="w-5 h-5" style={{ color: TEAL }} />
                  Active mine environment
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── CORE5 ADVANTAGE (dark) ───── */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${BLUE} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
            }}
          />
          <img
            src={norcatHalfLogo.url}
            alt=""
            aria-hidden="true"
            className="absolute -left-20 -bottom-20 w-[420px] opacity-[0.05] pointer-events-none select-none"
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow className="!text-white">The Core5 Advantage</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                ONE CONNECTION.<br />
                <span style={{ color: TEAL }}>A NETWORK ACROSS THE NORTH.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                NORCAT is one part of a much larger support system. CORE5 brings together 20+ partners across Northern
                Ontario, including innovation centres, post-secondary institutions, R&D and testing facilities, economic
                development organizations and industry partners.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                That means the support you receive isn’t limited by one organization, one facility or one city. Through
                CORE5, companies can tap into specialized expertise and infrastructure across communities including
                Greater Sudbury, North Bay, Sault Ste. Marie, Timmins, Temiskaming Shores and Thunder Bay.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
              {networkAccess.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-7"
                  style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="font-black uppercase text-lg mb-2 text-white"
                    style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/ecosystem"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
              >
                Explore the Core5 Ecosystem <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───── REGIONAL PARTNERS (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow>Regional Partners</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                NORTHERN EXPERTISE.<br />
                <span style={{ color: TEAL }}>WORKING TOGETHER.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                CORE5 connects capabilities across Northern Ontario so companies can access the support best suited to
                their technology and stage of development.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl p-6 flex items-center justify-center h-28"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain" />
                </div>
              ))}
            </div>

            <div
              className="mt-8 rounded-2xl p-8 flex items-center justify-center"
              style={{ background: 'white', border: '1px solid #d9dde5' }}
            >
              <p className="text-sm font-bold text-center" style={{ color: NAVY }}>
                + additional research, innovation and industry partners across Northern Ontario
              </p>
            </div>
          </div>
        </section>

        {/* ───── PART OF SOMETHING BIGGER (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>Part of Something Even Bigger</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  NORTHERN ONTARIO, CONNECTED TO ONTARIO’S MOBILITY INNOVATION NETWORK.
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>
                    CORE5 is Northern Ontario’s Regional Technology Development Site within the Ontario Vehicle
                    Innovation Network (OVIN).
                  </p>
                  <p>
                    OVIN’s network of nine Regional Technology Development Sites connects regional strengths,
                    infrastructure and expertise across Ontario to help companies develop, test, prototype and
                    commercialize automotive and mobility technologies.
                  </p>
                  <p>
                    For Northern Ontario companies, CORE5 provides a gateway into that larger provincial ecosystem —
                    while bringing the North’s unique strengths in mining, critical minerals, electrification and
                    real-world technology validation to the rest of Ontario.
                  </p>
                </div>

                <div
                  className="mt-8 inline-flex items-center gap-4 px-6 py-4 rounded-xl"
                  style={{ background: PAPER, border: '1px solid #d9dde5' }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>NORCAT INNOVATION</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: TEAL }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BLUE }}>CORE5</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: TEAL }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>OVIN</span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.ontario.ca/page/ontario-vehicle-innovation-network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Learn More About OVIN <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className="rounded-3xl p-10 text-center"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}
                >
                  <Display className="text-2xl sm:text-3xl md:text-4xl mb-6">
                    Local support.<br />
                    Northern expertise.<br />
                    Provincial reach.
                  </Display>
                </div>
                <div
                  className="flex items-center justify-center rounded-2xl p-8"
                  style={{ background: PAPER, border: '1px solid #d9dde5' }}
                >
                  <img
                    src={ovinBadge.url}
                    alt="Part of the Ontario Vehicle Innovation Network (OVIN)"
                    className="max-w-full max-h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA (light) ───── */}
        <section className="pb-16 md:pb-24" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div
              className="rounded-3xl p-9 md:p-14 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 40%), radial-gradient(circle at 85% 80%, rgba(47,111,214,0.18), transparent 45%)`,
                }}
              />
              <div className="relative max-w-3xl">
                <Eyebrow className="!text-white">Start the Conversation</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl">
                  YOU HAVE THE TECHNOLOGY.<br />
                  <span style={{ color: TEAL }}>LET’S FIND THE RIGHT PATH FORWARD.</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Whether you’re developing an early concept, building a prototype, looking for specialized expertise,
                  preparing for real-world testing or trying to reach your next customer, you don’t need to know which
                  program, facility or partner to contact first.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Start with NORCAT Innovation. We’ll help connect you with the people, programs and places that can
                  move your technology forward — through NORCAT, CORE5 and the broader OVIN ecosystem.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Connect with NORCAT Innovation <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
                  <a
                    href="https://core5.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Explore Core5.tech <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Core5;
