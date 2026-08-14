import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Image as ImageIcon,
  Zap,
  FlaskConical,
  Handshake,
  Cpu,
  Wrench,
  Network,
  Users,
  CircleDollarSign,
} from 'lucide-react';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import core5Logo from '@/assets/logos/core5-logo.png.asset.json';
import ovinBadge from '@/assets/ovin-partner-badge.png.asset.json';
import core5Map from '@/assets/core5-map.png';
import core5EvCharging from '@/assets/core5-ev-charging.png.asset.json';
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
const BODY = '#475068';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4 ${className}`}
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

const SectionTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2
    className={`font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5 ${className}`}
    style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
  >
    {children}
  </h2>
);

/** Placeholder block for imagery to be supplied later. */
const ImageSlot = ({
  label,
  ratio = 'aspect-[4/3]',
  tone = 'light',
  className = '',
}: {
  label: string;
  ratio?: string;
  tone?: 'light' | 'dark';
  className?: string;
}) => (
  <div
    className={`${ratio} ${className} w-full rounded-3xl flex flex-col items-center justify-center text-center gap-3 px-6`}
    style={
      tone === 'light'
        ? { background: 'white', border: '1px dashed #c3cad8' }
        : { background: 'rgba(255,255,255,0.06)', border: `1px dashed rgba(255,255,255,0.28)` }
    }
  >
    <ImageIcon className="w-7 h-7" style={{ color: tone === 'light' ? '#9aa4b8' : 'rgba(255,255,255,0.6)' }} />
    <p
      className="text-[11px] font-bold uppercase tracking-[0.16em]"
      style={{ color: tone === 'light' ? '#9aa4b8' : 'rgba(255,255,255,0.6)' }}
    >
      {label}
    </p>
  </div>
);

const stages = [
  {
    icon: Wrench,
    title: 'BUILD',
    description: 'Mentorship, market intelligence, funding guidance and commercialization support.',
  },
  {
    icon: FlaskConical,
    title: 'TEST',
    description: 'Specialized R&D and testing infrastructure across the CORE5 network.',
  },
  {
    icon: Zap,
    title: 'VALIDATE',
    description: 'Prove your solution in real-world conditions and reduce technical risk.',
  },
  {
    icon: Handshake,
    title: 'CONNECT',
    description: 'Industry relationships that lead to pilots, customers and growth.',
  },
];

const networkAccess = [
  { icon: Users, title: 'BUSINESS SUPPORT', description: 'Advisors, mentorship and commercialization guidance.' },
  { icon: Cpu, title: 'R&D EXPERTISE', description: 'Researchers, applied research and product development.' },
  { icon: FlaskConical, title: 'TESTING', description: 'Labs, prototyping and real-world demonstration sites.' },
  { icon: Network, title: 'INDUSTRY ACCESS', description: 'Doors to collaboration, pilots and customers.' },
  { icon: CircleDollarSign, title: 'FUNDING', description: 'Help finding the programs that fit your technology.' },
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
        {/* ───── HERO (unchanged) ───── */}
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

        {/* ───── 1. INTRO — START HERE (light, image left) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[28px] hidden lg:block"
                  style={{ background: 'linear-gradient(140deg, rgba(0,179,152,0.14), rgba(0,61,166,0.10))' }}
                />
                <img
                  src={core5EvCharging.url}
                  alt="EV technology development in Northern Ontario"
                  className="relative w-full aspect-[4/3] object-cover rounded-2xl"
                  style={{ boxShadow: '0 30px 70px -30px rgba(0,26,77,0.45)' }}
                />
              </div>

              <div className="max-w-xl">
                <Eyebrow>NORCAT Innovation + CORE5</Eyebrow>
                <SectionTitle>
                  START HERE.<br />
                  <span style={{ color: TEAL }}>WE CONNECT THE REST.</span>
                </SectionTitle>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                  <p>
                    NORCAT Innovation leads CORE5, Northern Ontario's Regional Technology Development Site within the
                    Ontario Vehicle Innovation Network (OVIN).
                  </p>
                  <p>
                    One conversation opens access to expertise, facilities, testing environments and industry
                    connections across the North — no need to know who to call first.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Talk to Us <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
                <div
                  className="mt-10 pt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
                  style={{ borderTop: '1px solid rgba(0,26,77,0.10)' }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ fontFamily: FONT, color: 'rgba(0,26,77,0.45)' }}>
                    Part of
                  </span>
                  <img src={core5Logo.url} alt="CORE5" className="h-8 object-contain" />
                  <img src={ovinBadge.url} alt="OVIN partner" className="h-9 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── 2. HOW WE HELP (dark, continuous band) ───── */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${BLUE} 0%, ${NAVY} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.14), transparent 40%), radial-gradient(circle at 10% 90%, rgba(47,111,214,0.12), transparent 45%)`,
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-14">
              <Eyebrow className="!text-white">How We Help</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl">
                SUPPORT AT <span style={{ color: TEAL }}>EVERY STAGE.</span>
              </Display>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-7 h-full"
                  style={{ background: 'white', boxShadow: '0 18px 40px -18px rgba(0,0,0,0.35)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(0,179,152,0.12)' }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-lg mb-2" style={{ fontFamily: FONT, color: NAVY }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                    {s.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── 3. UNDERGROUND CENTRE (light, image right) ───── */}
        <section className="py-16 md:py-24" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>Real-World Validation</Eyebrow>
                <SectionTitle>
                  TEST IT<br />
                  <span style={{ color: TEAL }}>UNDERGROUND.</span>
                </SectionTitle>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                  <p>
                    The NORCAT Underground Centre is an operating mine and active innovation environment where startups
                    and SMEs develop, test and demonstrate technology in real conditions.
                  </p>
                  <p>It's also where technology developers meet the mining companies looking for new solutions.</p>
                </div>
                <Link
                  to="/mining/underground-centre"
                  className="group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Visit the Underground Centre <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>

              <ImageSlot label="Image placeholder — Underground Centre equipment testing" ratio="aspect-[4/3]" />
            </div>
          </div>
        </section>

        {/* ───── 4. THE NETWORK (light, cards + map) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 md:mb-14">
              <div>
                <Eyebrow>The Core5 Advantage</Eyebrow>
                <SectionTitle>
                  ONE CONNECTION.<br />
                  <span style={{ color: TEAL }}>THE WHOLE NORTH.</span>
                </SectionTitle>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: BODY }}>
                  CORE5 brings together 20+ partners — innovation centres, universities and colleges, R&D and testing
                  facilities, economic development organizations and industry — across Greater Sudbury, North Bay,
                  Sault Ste. Marie, Timmins, Temiskaming Shores and Thunder Bay.
                </p>
              </div>
              <div
                className="rounded-3xl p-8 flex items-center justify-center bg-white"
                style={{ boxShadow: '0 18px 40px -18px rgba(0,26,77,0.12)' }}
              >
                <img src={core5Map} alt="CORE5 Northern Ontario network map" className="w-full max-w-md object-contain" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-10">
              {networkAccess.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-6 h-full bg-white"
                  style={{ boxShadow: '0 14px 34px -16px rgba(0,26,77,0.10)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(0,179,152,0.10)' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-base mb-2" style={{ fontFamily: FONT, color: NAVY }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/ecosystem"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
            >
              Explore the Ecosystem <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
            </Link>
          </div>
        </section>

        {/* ───── 5. PARTNERS (light, original logo grid) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow>Regional Partners</Eyebrow>
              <SectionTitle>
                NORTHERN EXPERTISE.<br />
                <span style={{ color: TEAL }}>WORKING TOGETHER.</span>
              </SectionTitle>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                CORE5 connects capabilities across Northern Ontario so companies can access the support best suited to
                their technology and stage of development.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-8 md:gap-x-14">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>

            <p className="mt-10 text-sm font-bold" style={{ color: BODY }}>
              + additional research, innovation and industry partners across Northern Ontario
            </p>
          </div>
        </section>

        {/* ───── 6. OVIN (light, image left) ───── */}
        <section className="py-16 md:py-24" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ImageSlot label="Image placeholder — EV / mobility technology in the field" ratio="aspect-[4/3]" />

              <div>
                <Eyebrow>Part of Something Bigger</Eyebrow>
                <SectionTitle>
                  CONNECTED TO<br />
                  <span style={{ color: TEAL }}>ALL OF ONTARIO.</span>
                </SectionTitle>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                  <p>
                    OVIN's nine Regional Technology Development Sites link expertise and infrastructure across the
                    province to help companies develop, prototype and commercialize mobility technologies.
                  </p>
                  <p>
                    CORE5 is the North's gateway into that network — and the North's strengths in mining, critical
                    minerals and electrification flowing back out to Ontario.
                  </p>
                </div>

                <div
                  className="mt-8 inline-flex flex-wrap items-center gap-3 px-6 py-4 rounded-xl"
                  style={{ background: PAPER, border: '1px solid #d9dde5' }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>NORCAT INNOVATION</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: TEAL }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BLUE }}>CORE5</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: TEAL }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>OVIN</span>
                </div>

                <div className="mt-6">
                  <a
                    href="https://www.ontario.ca/page/ontario-vehicle-innovation-network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    About OVIN <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── 7. FINAL CTA ───── */}
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
                  YOU BUILD IT.<br />
                  <span style={{ color: TEAL }}>WE'LL OPEN THE DOORS.</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Early concept, prototype or first customer — start with NORCAT Innovation and we'll connect you with
                  the people, programs and places that move your technology forward.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Get in Touch <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
                  <a
                    href="https://core5.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Core5.tech <ExternalLink className="w-4 h-4" />
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
