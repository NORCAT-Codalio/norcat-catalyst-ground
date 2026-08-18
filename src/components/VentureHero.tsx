import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Events / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p
    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
    style={{ fontFamily: FONT, color: '#FFFFFF' }}
  >
    <span className="size-1.5 rounded-full inline-block" style={{ background: '#FFFFFF' }} />
    {children}
  </p>
);

const highlights = [
  { text: 'Mentorship Network', date: 'MIT VMS Model' },
  { text: 'Sudbury Catalyst Fund', date: 'Equity Investment' },
  { text: 'Innovation Acceleration', date: 'IAP' },
  { text: 'Regional AI Program', date: 'RAII' },
  { text: 'Northern Ontario Angels', date: 'Investor Access' },
  { text: 'Core5 EV Initiative', date: 'Pan-Northern' },
  { text: 'Critical Minerals', date: 'Sector Expertise' },
  { text: 'No Equity Required', date: 'Free for Founders' },
];

export function VentureHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: NAVY }}>
      {/* Gradient base */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }}
      />
      {/* Faded half-logo overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.12 }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-4xl">
            <Eyebrow>Become a Client</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-black uppercase leading-[0.95] tracking-tight text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]"
              style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
            >
              Your venture's <br />
              <span style={{ color: TEAL }}>unfair advantage.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Whatever you're building, wherever you're building it — <br className="hidden sm:block" />
              we help you scale.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Scrolling highlights bar */}
        <ScrollReveal delay={100}>
          <div
            className="mt-10 md:mt-14 overflow-hidden rounded-2xl py-4 md:py-5"
            style={{
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4">
                      <span
                        className="text-xs font-bold uppercase tracking-[0.14em]"
                        style={{ color: TEAL }}
                      >
                        {item.date}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.35)' }}
                      />
                      <span className="text-sm md:text-base font-semibold text-white whitespace-nowrap">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
