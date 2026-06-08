import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Calendar, MapPin, Users, Rocket, Building2, Handshake, Sparkles, Quote, Trophy, Star, TrendingUp, Activity, Cpu, Leaf, Brain, Stethoscope, Cog } from 'lucide-react';
import { Layout } from '@/components/Layout';

import ctaPhoto1 from '@/assets/cta-photo-1.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import ctaPhoto3 from '@/assets/cta-photo-3.jpg';
import loopxTeam from '@/assets/loopx-team.jpg';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import heroModel from '@/assets/hero-model.png.asset.json';

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
import norcatLogo from '@/assets/logos/norcat.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import tedcLogo from '@/assets/logos/tedc.png';

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
    year: 'NORCAT INNOVATION',
  },
  {
    quote: 'Securing this level of trust and expertise from Northern Ontario through the NORCAT ecosystem has acted as a true catalyst, opening doors for us to bring in additional capital and scale our laboratory operations.',
    name: 'Myomar Molecular',
    role: 'Judges\' Choice & Peter Dal Bianco Award',
    year: 'PITCH 2025',
  },
  {
    quote: 'The exceptional mentorship, guidance, and unwavering support from the NORCAT team were instrumental in refining our business strategy. We have since expanded our team and extended our reach across Canada.',
    name: 'Karen Hastie',
    role: 'Founder/CEO, Chamber Perks App',
    year: 'PITCH 2024',
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
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'TEDC', logo: tedcLogo },
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
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow>Greater Sudbury · Northern Ontario</Eyebrow>

              <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Build.<br />
                Test.<br />
                <span style={{ color: TEAL }}>Scale.</span>
              </Display>

              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                NORCAT Innovation is the launchpad for tech-enabled, IP-driven startups, bringing together world-class mentorship, capital access, and the only operating mine on the planet built for tech testing.
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
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                      style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}>
                  Apply to NORCAT Innovation <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/about"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                      style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* hero model image */}
          <img
            src={heroModel.url}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute right-0 bottom-0 h-[90%] w-auto pointer-events-none select-none"
            style={{ transform: 'scaleX(-1)' }}
          />
        </section>

        {/* ───── WHAT IS NORCAT INNOVATION (light section) ───── */}
        <section className="py-20 md:py-32" style={{ background: '#F2F3F6', color: '#001A4D' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  What is NORCAT Innovation?
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Northern Ontario isn't just growing.{' '}
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
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: NAVY }}>
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
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider self-start md:self-end transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: TEAL, border: `2px solid ${TEAL}` }}>
                Explore Programs <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {highlights.map((h, i) => (
                <article key={h.label} className="group relative overflow-hidden rounded-xl"
                         style={{ background: NAVY_ELEV, border: `1px solid ${BORDER}` }}>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={h.img} alt={h.label} loading="lazy"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY_ELEV} 0%, ${NAVY_ELEV}66 40%, transparent 100%)` }} />
                  </div>
                  <div className="p-7 -mt-20 relative">
                    <div className="size-12 rounded-lg flex items-center justify-center mb-4"
                         style={{ background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}>
                      <h.icon className="size-6" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1"
                       style={{ fontFamily: FONT, color: TEAL }}>0{i + 1}</p>
                    <h3 className="font-black uppercase text-2xl mb-2 text-white" style={{ fontFamily: FONT }}>{h.label}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)' }}>{h.desc}</p>
                  </div>
                </article>
              ))}
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

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.title} className="relative p-7 md:p-10 rounded-xl bg-white"
                     style={{ border: '1px solid #d9dde5' }}>
                  <div className="size-14 rounded-lg flex items-center justify-center mb-6"
                       style={{ background: 'rgba(0,179,152,0.12)', color: TEAL }}>
                    <a.icon className="size-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-black uppercase text-2xl mb-3" style={{ fontFamily: FONT }}>{a.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#475068' }}>{a.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 flex justify-center">
              <Link to="/apply"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}>
                Apply to NORCAT Innovation <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───── AWARDS / SIGNATURE CALLOUT ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: NAVY_SURFACE }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 relative">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  <img src={ctaPhoto1} alt="NORCAT Underground Centre" loading="lazy"
                       className="w-full h-auto aspect-[4/3] object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-20 text-white"
                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 60%, transparent)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ fontFamily: FONT, color: TEAL }}>The NORCAT Underground Centre</p>
                    <p className="font-black uppercase text-base" style={{ fontFamily: FONT }}>The Global One-Stop Shop</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>3km of operating tunnels. Real ground. Real conditions.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <Eyebrow>Infrastructure that scales</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Real ground. Real momentum.{' '}
                  <span style={{ color: TEAL }}>Real outcomes.</span>
                </Display>
                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  We don't simulate. NORCAT-backed founders test their technology in operating environments, validate with industry, and de-risk before they raise.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Trophy, title: 'Venture Growth Services', value: 'Mentorship & Micro-Grants', desc: 'For early-stage founders ready for 1-on-1 support, IP strategy, and the fundamentals of building a defensible business.' },
                { icon: Star, title: 'Capital Navigation', value: 'Dilutive & Non-Dilutive', desc: 'From the Sudbury Catalyst Fund to SR&ED, IRAP, and the Regional AI Program — we help you raise the right money at the right time.' },
              ].map((a) => (
                <div key={a.title} className="group relative p-6 sm:p-7 rounded-xl transition-all"
                     style={{ background: NAVY_ELEV, border: `1px solid ${BORDER}` }}>
                  <div className="flex items-start gap-5">
                    <div className="size-12 shrink-0 rounded-lg flex items-center justify-center"
                         style={{ background: TEAL, color: NAVY }}>
                      <a.icon className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        <h3 className="font-black uppercase text-lg md:text-xl text-white" style={{ fontFamily: FONT }}>{a.title}</h3>
                        <p className="font-black text-base md:text-lg" style={{ fontFamily: FONT, color: TEAL }}>{a.value}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                <figure key={t.name} className="h-full p-7 sm:p-9 rounded-xl flex flex-col bg-white transition-colors hover:border-primary/40"
                        style={{ border: '1px solid #d9dde5' }}>
                  <Quote className="size-8 mb-4" style={{ color: TEAL }} />
                  <blockquote className="leading-relaxed flex-1 text-sm sm:text-base" style={{ color: '#1a2440' }}>"{t.quote}"</blockquote>
                  <figcaption className="mt-8 pt-6" style={{ borderTop: '1px solid #d9dde5' }}>
                    <p className="font-bold uppercase tracking-wider text-sm md:text-base" style={{ fontFamily: FONT }}>{t.name}</p>
                    <p className="text-xs md:text-sm mt-1" style={{ color: '#5b6478' }}>{t.role}</p>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-3" style={{ fontFamily: FONT, color: TEAL }}>{t.year}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PORTFOLIO / PARTNERS ───── */}
        <section className="py-20 md:py-24" style={{ background: NAVY_SURFACE }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center mb-10 md:mb-12">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Powered by partners
              </p>
              <Display className="text-2xl sm:text-3xl md:text-4xl">
                Made possible by those who believe in the North.
              </Display>
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

            <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: FONT, color: TEAL }}>
              Portfolio Companies
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {portfolio.map((c) => (
                <div key={c.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center p-4"
                     style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                  <img src={c.logo} alt={c.name} loading="lazy" className="max-h-10 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: SIGNATURE_GRADIENT }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(127,227,211,0.20), transparent 60%)`,
          }} />
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow>Your move</Eyebrow>
            <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Ready to build<br /><span style={{ color: TEAL }}>something real?</span>
            </Display>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Whether you're validating an idea or scaling a series-A company, NORCAT Innovation has a seat at the table for you.
            </p>
            <Link to="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: 'white', color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,0,0,0.45)' }}>
              Apply to NORCAT Innovation <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
