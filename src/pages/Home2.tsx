import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Calendar, MapPin, Users, Rocket, Building2, Handshake, Sparkles, Quote, Trophy, Star, TrendingUp, Activity, Cpu, Leaf, Brain, Stethoscope, Cog, ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import signatureLines from '@/assets/signature-lines.png';
import miningUndergroundHero from '@/assets/mining-underground-hero.jpg';
import ctaPhoto4 from '@/assets/cta-photo-4.jpg';
import ctaPhoto5 from '@/assets/cta-photo-5.png';

import ctaPhoto1 from '@/assets/cta-photo-1.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import ctaPhoto3 from '@/assets/cta-photo-3.jpg';
import loopxTeam from '@/assets/loopx-team.jpg';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import norcatHalfLogoSquare from '@/assets/norcat-half-logo-square-v2.png.asset.json';
import heroModel from '@/assets/hero-model.png.asset.json';
import founderSpotlight from '@/assets/underground-centre-v3.png.asset.json';
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
import rephealthLogo from '@/assets/logos/rephealth.png';
import rnaLogo from '@/assets/logos/rna-diagnostics.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import ontarioLogo from '@/assets/logos/ontario.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import noaLogoAsset from '@/assets/logos/noa.png.asset.json';

const noaLogo = noaLogoAsset.url;

const FONT = "'Open Sans', system-ui, sans-serif";

const audiences = [
  { icon: Rocket, title: 'Founders', body: 'World-class mentorship, hands-on support, and access to the capital and infrastructure to scale your tech-enabled, IP-driven startup.' },
  { icon: Building2, title: 'Industry', body: 'Test, validate, and de-risk new technologies in the only operating mine on the planet built for innovation: the NORCAT Underground Centre.' },
  { icon: Handshake, title: 'Investors', body: 'Discover high-potential companies across mining tech, clean tech, AI, and health sciences — all curated through the NORCAT pipeline.' },
];

const highlights = [
  { icon: Sparkles, label: 'Venture Growth', desc: '1-on-1 mentorship, IP strategy, and micro-grants for early-stage founders ready to move fast.', img: circuitiqTeam },
  { icon: Cpu, label: 'Test & Validate', desc: 'Access the Fortin Discovery Lab and the NORCAT Underground Centre to test technology in a real operating mine.', img: ctaPhoto2 },
  { icon: TrendingUp, label: 'Capital Access', desc: 'Navigate dilutive and non-dilutive funding — from SR&ED and IRAP to the Sudbury Catalyst Fund.', img: loopxTeam },
];

const stats = [
  { stat: '$75M+', label: 'Capital raised by NORCAT-backed startups' },
  { stat: '150+', label: 'Startups supported across Northern Ontario' },
  { stat: '2,000+', label: 'Jobs created across the ecosystem' },
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
    quote: "My first pitch with NORCAT Innovation was a night I'll never forget. The investment that followed changed everything. Since then, our company has relocated to Sudbury, secured $2M in seed funding, and grown our team from 7 to 26 in just two years.",
    name: 'Luke Begley',
    role: 'Founder, CircuitIQ',
  },
  {
    quote: 'Securing this level of trust and expertise from Northern Ontario through the NORCAT ecosystem has acted as a true catalyst, opening doors for us to bring in additional capital and scale our laboratory operations.',
    name: 'Rafaela Andrade',
    role: 'CEO, Myomar Molecular',
  },
  {
    quote: 'The exceptional mentorship, guidance, and unwavering support from the NORCAT team were instrumental in refining our business strategy. We have since expanded our team and extended our reach across Canada.',
    name: 'Karen Hastie',
    role: 'Founder/CEO, Chamber Perks App',
  },
];

const portfolio = [
  { name: 'Turnkey', logo: turnkeyLogo }, { name: 'Rogers', logo: rogersLogo },
  { name: 'Hard-Line', logo: hardlineLogo }, { name: 'Waive', logo: waiveLogo },
  { name: 'Symx AI', logo: symxLogo }, { name: 'Codalio', logo: codalioLogo },
  { name: 'Flosonics', logo: flosonicsLogo }, { name: 'Kinmetrix', logo: kinmetrixLogo },
  { name: 'LoopX', logo: loopxLogo }, { name: 'CircuitIQ', logo: circuitiqLogo },
  { name: 'Rep Health', logo: rephealthLogo }, { name: 'RNA Diagnostics', logo: rnaLogo },
];

const partners = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogo },
  { name: 'Northern Ontario Angels', logo: noaLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'Rogers', logo: rogersLogo },
];

// Style tokens — NORCAT Innovation Brand V1.0 (2026)
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
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: "'Open Sans', sans-serif" }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.2 }}
          />

          {/* radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>Greater Sudbury · Northern Ontario</Eyebrow>

                <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  Build, Test, and Scale Your{' '}
                  <span style={{ color: TEAL }}>Tech Venture</span>
                </Display>

                <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Turn your rough idea into a market-ready reality. Gain world-class mentorship, capital access, and strategic ecosystem infrastructure built to help IP-driven startups scale successfully.
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

              {/* Photo collage */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="grid grid-cols-3 gap-4 h-[560px]">
                  <div className="flex flex-col gap-4 pt-10">
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={circuitiqTeam} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={ctaPhoto3} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={ctaPhoto1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={loopxTeam} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={ctaPhoto2} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-16">
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={ctaPhoto4} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden flex-1 shadow-2xl ring-1 ring-white/10">
                      <img src={miningUndergroundHero} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── IMPACT STATS ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { number: '30+', label: 'Years of Building Innovation' },
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

        {/* ───── WHAT IS NORCAT INNOVATION (light section) ───── */}
        <section className="py-20 md:py-32" style={{ background: '#F2F3F6', color: '#001A4D' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  What is NORCAT Innovation?
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Northern Ontario isn't <span className="whitespace-nowrap">just growing.</span>{' '}
                  <span style={{ color: TEAL }}>We're redefining what's possible.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-4">
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  For nearly three decades, NORCAT has been Sudbury's Regional Innovation Centre — a one-stop shop for founders building tough-tech, IP-driven companies. We pair world-class mentorship and capital access with the only operating mine on the planet built for innovation.
                </p>
                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  From the Fortin Discovery Lab to the NORCAT Underground Centre, our infrastructure lets founders build, test, and validate technology in environments no other ecosystem can match.
                </p>
                <div className="mt-10 hidden md:grid grid-cols-3 gap-6 py-7" style={{ borderTop: '1px solid #d9dde5', borderBottom: '1px solid #d9dde5' }}>
                  {[
                    { icon: Calendar, label: 'Established', value: '1995' },
                    { icon: MapPin, label: 'Headquarters', value: 'Sudbury, ON' },
                    { icon: Trophy, label: 'Capital Catalyzed', value: '$75M+' },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center gap-4">
                      <m.icon className="w-7 h-7" style={{ color: TEAL }} />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{m.label}</p>
                        <p className="text-base md:text-lg font-bold" style={{ color: '#001A4D' }}>{m.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ───── PROGRAM HIGHLIGHTS ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <Eyebrow>What we do</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  One ecosystem.<br />Three ways to grow.
                </Display>
              </div>
              <Link to="/programs/venture-growth-services"
                    className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02] self-start md:self-end"
                    style={{ fontFamily: FONT, background: 'rgba(255,255,255,0.5)', color: NAVY, border: '1px solid #001A4D' }}>
                Explore Programs
                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((h, i) => {
                const num = `0${i + 1}`;
                const eyebrowRight = ['CircuitIQ', 'UNDERGROUND CENTRE', 'Raising Capital?'][i];

                if (i === 0) {
                  // Box 1 — gray→navy gradient, NORCAT logo + cohort tag, big bottom headline
                  const words = h.label.split(' ');
                  const last = words.pop();
                  const first = words.join(' ');
                  return (
                    <article key={h.label}
                             className="relative overflow-hidden rounded-2xl aspect-[4/5] flex flex-col p-6 md:p-7"
                             style={{ background: '#0a2a6b' }}>
                      <img src={h.img} alt={h.label} loading="lazy"
                           className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 pointer-events-none"
                           style={{ background: 'linear-gradient(180deg, transparent 0%, transparent 35%, rgba(10,42,107,0.85) 75%, #0a2a6b 100%)' }} />
                      <span className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-white/85" style={{ fontFamily: FONT }}>
                        {eyebrowRight}
                      </span>
                      <div className="relative mt-auto">
                        <p className="text-xs mb-3 leading-relaxed text-white/85">{h.desc}</p>
                        <h3 className="font-black text-3xl md:text-4xl leading-[1.02] text-white" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                          {first} <span style={{ color: TEAL }}>{last}.</span>
                        </h3>
                      </div>
                    </article>
                  );
                }

                if (i === 1) {
                  // Box 2 — white card, teal eyebrow, quote-style title, founder photo right
                  return (
                    <article key={h.label}
                             className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-white"
                             style={{ border: '1px solid #e3e6ec' }}>
                      <img src={founderSpotlight.url} alt="Underground Centre"
                           className="absolute right-0 bottom-0 h-[105%] w-auto object-contain object-bottom pointer-events-none select-none" />
                      <div className="absolute inset-0 p-6 md:p-7 flex flex-col">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ fontFamily: FONT, color: TEAL }}>
                          {eyebrowRight}
                        </p>
                        <div className="mt-6 max-w-[50%]">
                          <h3 className="font-black text-3xl md:text-4xl leading-[1.02]" style={{ fontFamily: FONT, color: '#0a1a3a', letterSpacing: '-0.02em' }}>
                            {h.label}.
                          </h3>
                          <p className="mt-3 text-xs leading-relaxed" style={{ color: '#475068' }}>{h.desc}</p>
                        </div>
                      </div>
                    </article>
                  );
                }

                // Box 3 — teal background, half logo right @ 20% opacity, big title + RSVP
                return (
                  <article key={h.label}
                           className="relative overflow-hidden rounded-2xl aspect-[4/5] p-6 md:p-7 flex flex-col"
                           style={{ background: TEAL }}>
                    <img src={norcatHalfLogoSquare.url} alt=""
                         aria-hidden="true"
                         className="absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto pointer-events-none select-none"
                         style={{ opacity: 0.2 }} />
                    <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-white" style={{ fontFamily: FONT }}>
                      {eyebrowRight}
                    </p>
                    <div className="relative mt-auto">
                      <h3 className="font-black text-3xl md:text-4xl leading-[1.02] text-white mb-5" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                        {h.label}.
                      </h3>
                      <p className="text-xs mb-5 leading-relaxed text-white/90 max-w-[28ch]">{h.desc}</p>
                      <Link to="/programs/venture-growth-services"
                            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                            style={{ background: 'rgba(255,255,255,0.5)', color: NAVY, border: '1px solid #001A4D', fontFamily: FONT }}>
                        Learn More
                        <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>



            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: TEAL }}>{s.stat}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: FG_MUTED }}>{s.label}</p>
                </div>
              ))}
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
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Built for
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Built for the builders of the North.
              </h2>
            </div>

            {/* Bento grid: tall quote left, founders/industry top, investors + CTA bottom */}
            <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr">
              {/* Tall quote box (left, spans 2 rows) */}
              <div className="relative rounded-2xl overflow-hidden p-7 md:p-10 lg:row-span-2 min-h-[420px] lg:min-h-[560px] flex flex-col justify-end"
                   style={{
                     background: `linear-gradient(135deg, ${TEAL} 0%, #0b6fb8 45%, #0a3a8c 100%)`,
                   }}>
                <div className="absolute inset-0 pointer-events-none opacity-40"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 18px)',
                     }} />
                <Quote className="relative w-8 h-8 mb-4 text-white/90" />
                <p className="relative text-xl sm:text-2xl md:text-3xl leading-snug font-semibold text-white">
                  "Northern Ontario led Canada on a per-capita basis with 35.9 deals per million population, widening its lead over Southern Ontario from 50% in 2024 to 64% in 2025."
                </p>
                <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  — National Angel Capital Organization
                </p>
              </div>

              {/* Three audience cards: Founders (top-mid), Industry (top-right), Investors (bottom-mid) */}
              {audiences.map((a) => (
                <div key={a.title} className="relative p-7 md:p-9 rounded-2xl bg-white"
                     style={{ border: '1px solid #d9dde5' }}>
                  <div className="size-12 rounded-lg flex items-center justify-center mb-5"
                       style={{ background: 'rgba(0,179,152,0.12)', color: TEAL }}>
                    <a.icon className="size-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-black uppercase text-xl md:text-2xl mb-3" style={{ fontFamily: FONT }}>{a.title}</h3>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#475068' }}>{a.body}</p>
                </div>
              ))}

              {/* Bottom-right CTA box */}
              <div className="relative rounded-2xl p-7 md:p-9 flex flex-col justify-end"
                   style={{ background: '#E6F5F1', border: '1px solid #cfe7df' }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mb-auto" style={{ color: TEAL, fontFamily: FONT }}>
                  Get involved
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <Link to="/apply"
                        className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                        style={{ background: TEAL, color: NAVY }}>
                    Apply
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
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

        {/* ───── REAL STORIES. UNIQUE INSIGHTS. ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src={signatureLines} alt="" aria-hidden="true" className="absolute top-0 right-0 w-[600px] opacity-100" />
          </div>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <Eyebrow>Insights</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Real Stories.<br />Unique Insights.
                </Display>
                <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: FG_MUTED }}>
                  Stories, insights, and reports from the founders, partners, and programs powering Northern Ontario's innovation ecosystem.
                </p>
              </div>
              <Link to="/insights/reports"
                    className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02] self-start md:self-end"
                    style={{ background: 'rgba(255,255,255,0.5)', color: NAVY, border: '1px solid #001A4D', fontFamily: FONT }}>
                View all reports
                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Horizontally scrollable cards */}
          <div ref={storiesScrollRef} className="pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="flex gap-5 pr-6 items-stretch" style={{ width: 'max-content' }}>
              {[
                { category: 'Success Stories', title: 'How NORCAT Innovation Helped 150+ Startups', image: ctaPhoto1, link: '/insights/success-stories', wide: false },
                { category: 'News', title: 'Mining Transformation: Technology Innovation in Northern Ontario', image: miningUndergroundHero, link: '/insights/news', wide: true },
                { category: 'Reports', title: 'The State of the Greater Sudbury Innovation Ecosystem', image: ctaPhoto3, link: '/insights/reports', wide: false },
                { category: 'Ecosystem', title: "Northern Ontario's Growing Tech & Innovation Landscape", image: ctaPhoto4, link: '/ecosystem', wide: false },
                { category: 'Success Stories', title: 'CircuitIQ: From Sudbury Startup to Industry Leader', image: ctaPhoto2, link: '/insights/success-stories', wide: false },
                { category: 'News', title: 'NORCAT Underground: A Global Hub for Mining Innovation', image: ctaPhoto5, link: '/insights/news', wide: false },
                { category: 'Reports', title: 'Annual Impact Report: Jobs, Capital & Growth Metrics', image: loopxTeam, link: '/insights/reports', wide: false },
              ].map((post) => (
                <Link key={post.title} to={post.link} className="group block h-full">
                  <div className={`relative rounded-2xl overflow-hidden h-[420px] hover:scale-[1.02] transition-transform duration-300 ${post.wide ? 'w-[700px]' : 'w-[380px]'}`}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, hsl(0 0% 0%) 0%, hsl(0 0% 0% / 0.7) 30%, hsl(0 0% 0% / 0.2) 60%, transparent 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3" style={{
                        background: 'hsla(168, 100%, 35%, 0.2)',
                        color: 'hsl(168, 100%, 60%)',
                        border: '1px solid hsla(168, 100%, 50%, 0.25)',
                        backdropFilter: 'blur(8px)',
                      }}>{post.category}</span>
                      <h3 className="text-white font-bold text-lg leading-snug mb-2" style={{ fontFamily: FONT }}>{post.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                        Read More <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 relative z-10">
            <div className="flex justify-end mt-8 gap-3">
              <button
                onClick={() => storiesScrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: 'hsla(0, 0%, 100%, 0.15)', border: '1px solid hsla(0, 0%, 100%, 0.25)', backdropFilter: 'blur(10px)' }}
                aria-label="Scroll left"
              >
                <ChevronRight className="w-5 h-5 text-white/80 rotate-180" />
              </button>
              <button
                onClick={() => storiesScrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ background: 'hsla(0, 0%, 100%, 0.15)', border: '1px solid hsla(0, 0%, 100%, 0.25)', backdropFilter: 'blur(10px)' }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-white/80" />
              </button>
            </div>
          </div>
        </section>

        {/* ───── TESTIMONIALS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: '#F2F3F6', color: '#001A4D' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Voices from founders
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  The founders behind<br />the momentum.
                </h2>
              </div>
              <p className="text-sm md:max-w-xs" style={{ color: '#5b6478' }}>
                Hear from the companies who've come through the NORCAT pipeline — and the milestones they've hit since.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <figure key={t.name}
                        className="relative overflow-hidden rounded-2xl p-6 md:p-7 flex flex-col h-full min-h-[420px]"
                        style={{ background: TEAL }}>
                  <img src={norcatHalfLogoSquare.url} alt=""
                       aria-hidden="true"
                       className="absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto pointer-events-none select-none"
                       style={{ opacity: 0.08 }} />
                  <Quote className="relative size-8 mb-4 text-white" />
                  <blockquote className="relative leading-relaxed flex-1 text-sm sm:text-base text-white font-medium">"{t.quote}"</blockquote>
                  <figcaption className="relative mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                    <p className="font-bold uppercase tracking-wider text-sm md:text-base text-white" style={{ fontFamily: FONT }}>{t.name}</p>
                    <p className="text-xs md:text-sm mt-1 text-white/85">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PORTFOLIO COMPANIES — Logo Carousel ───── */}
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
