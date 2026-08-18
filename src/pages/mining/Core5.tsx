import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Image as ImageIcon,
  FlaskConical,
  Handshake,
  Cpu,
  Network,
  Users,
  CircleDollarSign,
} from 'lucide-react';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import undergroundTesting from '@/assets/core5-underground-testing.png.asset.json';
import core5NetworkStats from '@/assets/core5-network-stats-v2.png';
import core5LogoWhite from '@/assets/core5-logo-white.png.asset.json';
import core5OntarioMap from '@/assets/core5-ontario-map.png.asset.json';
import norcatLogo from '@/assets/logos/norcat.png';
import cambrianRdLogo from '@/assets/logos/cambrian-rd.png';
import iionLogo from '@/assets/logos/iion.png';
import icampLogo from '@/assets/logos/icamp.png';
import tedcLogo from '@/assets/logos/tedc.png';
import ovinLogoAsset from '@/assets/logos/ovin-logo.png.asset.json';
import ontarioLogo from '@/assets/logos/ontario-logo-wordmark.png';

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

const networkAccess = [
  { icon: Users, title: 'BUSINESS SUPPORT', description: 'Advisors, mentorship and commercialization guidance.' },
  { icon: Cpu, title: 'R&D EXPERTISE', description: 'Researchers, applied research and product development.' },
  { icon: FlaskConical, title: 'TESTING', description: 'Labs, prototyping and real-world demonstration sites.' },
  { icon: Network, title: 'INDUSTRY ACCESS', description: 'Doors to collaboration, pilots and customers.' },
  { icon: CircleDollarSign, title: 'FUNDING', description: 'Help finding the programs that fit your technology.' },
];

const coreStats = [
  { value: '60+', label: 'Startups Supported' },
  { value: '6', label: 'Northern Regions' },
  { value: '20+', label: 'Partner Facilities' },
  { value: '40+', label: 'Pilots & Demos' },
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
              <img
                src={core5LogoWhite.url}
                alt="CORE5"
                className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
              />

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
                  style={{ fontFamily: FONT, background: 'white', color: NAVY, boxShadow: '0 18px 40px -12px rgba(255,255,255,0.25)' }}
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

        {/* ───── 1. INTRO — START HERE (light, image right) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>NORCAT Innovation</Eyebrow>
                <SectionTitle>
                  YOUR CRITICAL<br />
                  <span style={{ color: TEAL }}>NORTHERN ADVANTAGE.</span>
                </SectionTitle>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                  <p>
                    You don't have to navigate the innovation ecosystem on your own.
                  </p>
                  <p>
                    Through Core5, we can connect you with a broader network of innovation organizations, research institutions, specialized facilities and industry partners across Northern Ontario.
                  </p>
                  <p>
                    Whether you need business guidance, technical expertise, a place to test your technology or connections to industry, we'll help you find the right next step.
                  </p>
                </div>
              </div>

              <img
                src={core5NetworkStats}
                alt="CORE5 Northern Ontario network: 70,000 sq. ft. R&D space, 3 km+ underground mine, 22 industry partners"
                className="w-full rounded-3xl object-contain"
              />
            </div>
          </div>
        </section>

        {/* ───── 2. STATS ROW (white) ───── */}
        <section className="py-8 md:py-12" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {coreStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div
                    className="font-black leading-none text-[clamp(2.5rem,5vw,3.75rem)] bg-clip-text text-transparent"
                    style={{ fontFamily: FONT, backgroundImage: `linear-gradient(135deg, ${BLUE} 0%, ${TEAL} 100%)` }}
                  >
                    {stat.value}
                  </div>
                  <p className="mt-3 text-base sm:text-lg" style={{ color: BODY }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ───── 3. UNDERGROUND CENTRE (blue, image right) ───── */}
        <section className="py-16 md:py-24" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)`, color: 'white' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow className="!text-white">Real-World Validation</Eyebrow>
                <SectionTitle className="!text-white">
                  TEST IT<br />
                  <span style={{ color: TEAL }}>UNDERGROUND.</span>
                </SectionTitle>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <p>
                    The NORCAT Underground Centre is an operating mine and active innovation environment where startups
                    and SMEs develop, test and demonstrate technology in real conditions.
                  </p>
                  <p>It's also where technology developers meet the mining companies looking for new solutions.</p>
                </div>
                <Link
                  to="/mining/underground-centre"
                  className="group mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,0,0,0.25)' }}
                >
                  Visit the Underground Centre <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>

              <img
                src={undergroundTesting.url}
                alt="Technology testing at the NORCAT Underground Centre"
                className="w-full rounded-3xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* ───── 4. PARTNERS (light, original logo grid) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow>Regional Partners</Eyebrow>
              <SectionTitle>
                NORTHERN EXPERTISE.<br />
                <span style={{ color: TEAL }}>WORKING TOGETHER.</span>
              </SectionTitle>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: BODY }}>
                Core5 brings together 20+ partners — innovation centres, universities and colleges, R&D and testing
                facilities, economic development organizations and industry — across Greater Sudbury, North Bay,
                Sault Ste. Marie, Timmins, Temiskaming Shores and Thunder Bay.
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

            <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
              {networkAccess.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-6 h-full"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-base mb-2 text-[#001A4D]" style={{ fontFamily: FONT }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ───── 6. OVIN (light, image left) ───── */}
        <section className="py-16 md:py-24" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <img
                src={core5OntarioMap.url}
                alt="Map of Ontario showing CORE5 partner and testing locations across Northern Ontario and the broader province"
                className="w-full rounded-3xl object-contain"
              />

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
                    Core5 is the North's gateway into that network — and the North's strengths in mining, critical
                    minerals and electrification flowing back out to Ontario.
                  </p>
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

        {/* ───── OVIN / ONTARIO ATTRIBUTION (bottom, centered) ───── */}
        <section className="py-10 md:py-14" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] mb-6" style={{ color: NAVY }}>
              Part of the Ontario Vehicle Innovation Network (OVIN)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <img src={ovinLogoAsset.url} alt="Ontario Vehicle Innovation Network (OVIN) logo" className="h-10 md:h-12 object-contain" />
              <img src={ontarioLogo} alt="Government of Ontario logo" className="h-8 md:h-10 object-contain" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Core5;
