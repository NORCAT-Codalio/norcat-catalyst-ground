import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import heroUnderground from '@/assets/hero-underground.jpg';
import undergroundWorkers from '@/assets/underground-workers.png';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import {
  ArrowUpRight,
  ChevronDown,
  Mountain,
  Pickaxe,
  Bot,
  Wind,
  Video,
  Database,
  Camera,
  Zap,
  Shield,
  HardHat,
  Battery,
  Wifi,
  Lock,
  Target,
  Globe,
  Users,
  Lightbulb,
  Award,
  Compass,
  Gauge,
} from 'lucide-react';

// ── Brand tokens (mirrors Home2 / About / IAP / SCF) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, center = false, color = TEAL }: { children: React.ReactNode; center?: boolean; color?: string }) => (
  <p
    className={`${center ? 'inline-flex justify-center' : 'inline-flex'} items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5`}
    style={{ fontFamily: FONT, color }}
  >
    <span className="size-1.5 rounded-full inline-block" style={{ background: color }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any, color = 'white' }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color }}
  >
    {children}
  </As>
);

const capabilities = [
  { icon: Bot, title: 'Tele-Remote / Autonomous Vehicle Operation' },
  { icon: Pickaxe, title: 'Resin, Screening, Bolting Development' },
  { icon: Wind, title: 'Ventilation-on-Demand / Monitoring' },
  { icon: Video, title: 'Training & "How-To" Video Production' },
  { icon: Database, title: 'Telemetry, Sensors, Analytics, AI & Big Data' },
  { icon: Camera, title: 'Drone & Survey Testing' },
  { icon: Zap, title: 'Blasting Materials & Systems' },
  { icon: Shield, title: 'Wearables for Health, Safety & Location' },
  { icon: HardHat, title: 'Underground & Surface Drilling Tech' },
  { icon: Battery, title: 'Electric Vehicles & Energy Storage' },
  { icon: Wifi, title: '5G, LTE, Leaky Feeder & Wi-Fi Systems' },
  { icon: Lock, title: 'Cybersecurity for Mining Environments' },
];

const stats = [
  { icon: Pickaxe, number: '3 KM', label: 'Operational Underground Tunnels' },
  { icon: Zap, number: '300+', label: 'Technology Tests Hosted' },
  { icon: Globe, number: '50+', label: 'Countries Reached' },
  { icon: Award, number: '15+', label: 'Years of Real-World Validation' },
];

const benefits = [
  { icon: Target, title: 'Real-World Validation', description: 'Proof points that move enterprise sales cycles — generated in an active mine, not a lab.' },
  { icon: Globe, title: 'Global Credibility', description: 'Validation recognized by mining operators across 50+ countries.' },
  { icon: Users, title: 'Customer Demonstrations', description: 'Host buyers live, underground — let them see your tech work where it matters.' },
  { icon: Lightbulb, title: 'Expert Support', description: 'Operate alongside NORCAT mining engineers, instructors and technologists.' },
];

const useCases = [
  { tag: 'OEMs', title: 'Equipment Trials', copy: 'De-risk new machinery — battery EVs, drills, loaders, scoops — in an active production environment.' },
  { tag: 'Software', title: 'Connectivity & Data', copy: 'Stress-test 5G, LTE, leaky feeder, sensors and analytics platforms against real underground conditions.' },
  { tag: 'Startups', title: 'TRL Acceleration', copy: 'Move from prototype to commercial-ready faster with structured testing programs and customer access.' },
  { tag: 'Operators', title: 'Workforce Training', copy: 'Use the facility for instructor-led, hands-on training programs for the next generation of miners.' },
];

const NorcatUnderground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div ref={containerRef} style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)` }}
          />

          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow>The Global One-Stop Shop for the Future of Mining</Eyebrow>

              <Display as="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                NORCAT<br /><span style={{ color: TEAL }}>Underground.</span>
              </Display>

              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                A fully operational, working mine — purpose-built for industry to test, validate and
                prove next-generation mining technology in real underground conditions.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Book a Tour <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Explore the Facility
                </a>
              </div>
            </div>
          </div>

          {/* underground hero image */}
          <img
            src={heroUnderground}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute right-0 bottom-0 h-[85%] w-auto pointer-events-none select-none opacity-80"
            style={{ maskImage: 'linear-gradient(to left, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)' }}
          />
        </section>

        {/* ───── STATS STRIP ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 pl-4"
                  style={{ borderLeft: `2px solid ${TEAL}` }}
                >
                  <s.icon className="w-7 h-7 shrink-0" style={{ color: TEAL }} />
                  <div>
                    <p className="font-black text-2xl md:text-3xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                    <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── THE ASSET (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>The Asset</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  An actual mine.<br /><span style={{ color: TEAL }}>Open for business.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5" style={{ color: '#475068' }}>
                  There is no simulator for the real thing. NORCAT Underground is a fully
                  operational mine — three kilometres of active tunnels — purpose-built for
                  technology trials, demonstrations and hands-on training.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  OEMs, software vendors and startups from around the world come here to do
                  what they cannot do anywhere else: prove their technology in real conditions,
                  in front of real customers.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: Compass, label: '3 km of Active Tunnels' },
                    { icon: Gauge, label: 'Production-Grade Conditions' },
                    { icon: Award, label: 'Globally Recognized' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}>
                        <b.icon className="w-5 h-5" style={{ color: TEAL }} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.1em]" style={{ color: NAVY }}>{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: '1px solid #d9dde5' }}>
                    <img src={undergroundWorkers} alt="NORCAT Underground operations" className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl p-6 max-w-[260px]"
                    style={{ background: NAVY, color: 'white', boxShadow: '0 20px 60px rgba(0,26,77,0.25)' }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2" style={{ color: TEAL }}>One of one</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      The only facility of its kind on Earth — an active mine you can book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── CAPABILITIES (dark) ───── */}
        <section
          id="capabilities"
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${BLUE} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 10% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <img
            src={norcatHalfLogo.url}
            alt=""
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-[420px] opacity-[0.05] pointer-events-none select-none"
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>What You Can Test</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                If it belongs in a mine,<br /><span style={{ color: TEAL }}>we can run it underground.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                From autonomous vehicles and battery-electric equipment to 5G, sensors and AI
                platforms — every category of mining technology has been tested here.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {capabilities.map((c, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                  className="group rounded-2xl p-6 transition-colors h-full"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-sm md:text-[15px] font-bold text-white leading-snug" style={{ fontFamily: FONT }}>
                    {c.title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── USE CASES (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Who It's For</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                Built for the people<br /><span style={{ color: TEAL }}>shaping mining's future.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {useCases.map((u, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-7 md:p-9 transition-shadow hover:shadow-lg"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <span
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] font-bold mb-5 px-2.5 py-1 rounded-full"
                    style={{ color: TEAL, background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                  >
                    {u.tag}
                  </span>
                  <h3 className="font-black uppercase text-xl md:text-2xl mb-3" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    {u.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#475068' }}>{u.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── WHY (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${BLUE} 0%, ${NAVY} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 10% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 90% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Why Operators Choose Us</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                The credibility<br /><span style={{ color: TEAL }}>you need to win.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                Mining companies do not buy on promises. They buy on proof — and proof is what
                we manufacture, underground, every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {benefits.map((b, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-7 h-full"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <b.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-lg mb-2 text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{b.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA (light bridge) ───── */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow center>Your move</Eyebrow>
            <Mountain className="w-12 h-12 mx-auto mb-6" style={{ color: TEAL }} />
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
            >
              Bring your tech<br /><span style={{ color: TEAL }}>underground.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Book a tour, scope a trial, or host your customers in the only working mine
              built for innovation. Let's get to work.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                style={{ fontFamily: FONT, background: TEAL, color: 'white' }}
              >
                Book a Tour
                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
              <Link
                to="/insights/success-stories"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-colors"
                style={{ border: '1px solid #d9dde5', color: NAVY, fontFamily: FONT, background: 'white' }}
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default NorcatUnderground;
