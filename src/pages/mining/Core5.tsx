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
} from 'lucide-react';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

import core5Logo from '@/assets/logos/core5-logo.png.asset.json';
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

const pillars = [
  {
    icon: Zap,
    title: 'Startup & SME Support',
    description: 'Tailored funding and support solutions to accelerate EV technology development.',
  },
  {
    icon: FlaskConical,
    title: 'Testing & R&D Facilities',
    description: 'Access state-of-the-art testing and R&D facilities across Northern Ontario.',
  },
  {
    icon: Handshake,
    title: 'Buyers Meet Builders',
    description: 'Matchmaking that connects tech developers with industry leaders and live test-beds.',
  },
];

const highlights = [
  { icon: Battery, label: 'OVIN REGIONAL TECH SITE' },
  { icon: Cpu, label: 'FULL EV VALUE CHAIN' },
  { icon: MapPin, label: 'PAN-NORTHERN NETWORK' },
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
            <div className="max-w-3xl">
              <Display as="h1" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Core5.<br />
                <span style={{ color: TEAL }}>Northern EV Innovation.</span>
              </Display>

              <p
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                A pan-Northern Ontario initiative supporting Ontario SMEs in developing EV technologies
                across the value chain, from critical minerals extraction to EV technology manufacturing.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://core5.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Visit Core5.tech <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://core5.tech/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── WHAT IS CORE5 (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <Eyebrow>EV Innovation Hub</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  POWERING THE NORTH'S<br />
                  <span style={{ color: TEAL }}>EV FUTURE.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>
                    Core5 is one of six regional technology development sites within the Ontario Vehicle
                    Innovation Network (OVIN). We're building a connected ecosystem across Northern
                    Ontario to support the entire EV value chain.
                  </p>
                  <p>
                    From the mines that supply critical minerals to the shops that build and test
                    vehicles, Core5 links founders to the facilities, funding and buyers that move
                    technology from prototype to production.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: 'white', border: '1px solid #d9dde5' }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                      >
                        <h.icon className="w-5 h-5" style={{ color: TEAL }} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.08em]" style={{ color: NAVY }}>
                        {h.label}
                      </p>
                    </div>
                  ))}
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

        {/* ───── WHAT WE OFFER (dark) ───── */}
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
              <Eyebrow className="!text-white">What Core5 Delivers</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Funding, facilities,<br />
                <span style={{ color: TEAL }}>and real buyers.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                Three pillars built around what EV technology companies in the North actually need to
                get to market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {pillars.map((p, i) => (
                <motion.article
                  key={p.title}
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
                    <p.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="font-black uppercase text-lg mb-2 text-white"
                    style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>
                    {p.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PARTNERS (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow>Pan-Northern Network</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                REGIONAL<br />
                <span style={{ color: TEAL }}>PARTNERS.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                Core5 connects innovation hubs across Northern Ontario into one unified ecosystem for
                EV technology development.
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
          </div>
        </section>

        {/* ───── CTA (light) ───── */}
        <section className="pb-16 md:pb-24" style={{ background: PAPER, color: NAVY }}>
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
                <Eyebrow className="!text-white">
                  <Battery className="w-3.5 h-3.5" /> Get Started
                </Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl">
                  Ready to innovate<br />
                  <span style={{ color: TEAL }}>in the EV space?</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Learn more about funding opportunities, R&D facilities, and how Core5 can accelerate
                  your EV technology development.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://core5.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Explore Core5.tech <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Talk to NORCAT
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </Link>
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
