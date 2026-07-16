import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Check,
  Cpu,
  Shield,
  Bot,
  Network,
  Blocks,
  Atom,
  ExternalLink,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Target,
  DollarSign,
  Users,
  Building2,
  TrendingUp,
} from 'lucide-react';

import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogoAsset from '@/assets/logos/ontario-logo-wordmark.png';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors Home2 / About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, color = TEAL }: { children: React.ReactNode; color?: string }) => (
  <p
    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
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

const technologies = [
  { icon: Network, name: '5G & Advanced Networks', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
  { icon: Cpu, name: 'Artificial Intelligence', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
  { icon: Blocks, name: 'Blockchain', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
  { icon: Bot, name: 'Robotics', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
  { icon: Shield, name: 'Cybersecurity', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
  { icon: Atom, name: 'Quantum', tags: ['Advanced Mfg', 'Agri-Food', 'Construction', 'Mining'] },
];

const sectors = [
  { name: 'Advanced Manufacturing', icon: Factory },
  { name: 'Agri-Food', icon: Briefcase },
  { name: 'Construction', icon: Building2 },
  { name: 'Mining', icon: TrendingUp },
];

const streams = {
  dc: {
    code: 'DC',
    name: 'Development & Commercialization',
    icon: FlaskConical,
    tagline: 'Develop, test, validate, and showcase new Ontario-made solutions.',
    funding: '$50,000 – $200,000',
    match: '1:1 minimum match',
    duration: 'Max 6 months',
    overview:
      "The DC Program enables Ontario-based, standalone SMEs to access technology facilities and capabilities across the province to develop, test, validate and showcase products and services that integrate critical technologies - helping disruptive innovations hit the market faster.",
    eligibility: [
      { title: 'Small or Medium Enterprise', desc: 'Fewer than 500 global full-time employees.' },
      { title: 'Ontario Operations', desc: 'Registered operations (R&D, manufacturing, product management, etc.) in Ontario with a valid CRA business number.' },
      { title: 'OCI Funding History', desc: 'Applicants who have received over $500,000 of OCI-administered funding (excluding TalentEdge) must obtain OCI approval before applying. Your BDM can guide you through this.' },
      { title: 'Commercialization Intent', desc: 'Has the intent, expertise and resources to apply, exploit and/or commercialize results for the economic benefit of Ontario within an appropriate timeframe.' },
      { title: 'Good Standing with OCI', desc: 'Must be in good financial and reporting standing with OCI.' },
      { title: 'Critical Tech Roadmap', desc: 'Adoption of critical technologies is part of the applicant\'s long-term product roadmap.' },
    ],
    projectRules: [
      { title: 'Critical Technology Integration', description: 'Projects must support critical technology integration, adoption, demonstration, prototyping, or testing by the SME.' },
      { title: 'Technology Development Site Use', description: 'Projects must utilize at least one Technology Development Site for a minimum of 2 hours per test bed. Multiple sites may be leveraged where applicable.' },
      { title: 'Critical Technology Focus', description: 'Solutions must involve the acceleration, development, or integration of at least one of the six critical technologies: 5G & Advanced Networks, AI, Blockchain, Robotics, Cybersecurity, or Quantum.' },
      { title: 'Ontario-Based Commercial Outcome', description: 'Projects must result in a new solution, product, or service with strong commercial opportunity in one or more of the four key sectors. Activities must be carried out in Ontario, with a minimum 1:1 contribution match, max 6 months, and all required certifications already in place.' },
      { title: 'Strong ROI for Ontario', description: 'Project must form the basis of a highly competitive business and offer good return on investment and clear benefits to Ontario - new revenues, job creation/retention, new customers, follow-on investment, productivity improvement.' },
      { title: 'IP Managed by Applicant', description: 'IP arising from the project is managed by the Applicant. OCI does not claim IP rights. Successful applicants execute OCI\'s funding agreement, including an Intellectual Property Statement outlining IP arrangements among project partners.' },
    ],
  },
  tap: {
    code: 'TAP',
    name: 'Technology Access Program',
    icon: Target,
    tagline: 'No-cost access to NORCAT Underground for market validation.',
    funding: 'No-cost site access',
    match: 'No match required',
    duration: 'Project-dependent',
    overview:
      'TAP gives Ontario SMEs with an existing critical-technology product or service exclusive, no-cost access to the NORCAT Underground Centre Technology Development Site - accelerating validation, customer discovery, and entry into the mining sector.',
    eligibility: [
      { title: 'Ontario SME', desc: 'Ontario-based small or medium enterprise with an existing critical-technology product or service.' },
      { title: 'Market-Ready Solution', desc: 'Solution is past prototype with all necessary certifications required to operate on a Technology Development Site.' },
      { title: 'Mining-Sector Fit', desc: 'Clear use case for the underground mining environment and intent to validate, demonstrate, or commercialize the offering.' },
      { title: 'Good Standing with OCI', desc: 'Must be in good financial and reporting standing with OCI.' },
    ],
    projectRules: [
      { title: 'Critical Technology Solution', description: 'Solution must involve one of the six critical technologies: 5G & Advanced Networks, AI, Blockchain, Robotics, Cybersecurity, or Quantum.' },
      { title: 'TDS Utilization', description: 'Use of the NORCAT Underground Technology Development Site to validate the product in a real-world mining environment.' },
      { title: 'Certifications In Place', description: 'Solution MUST already hold all certifications required for the on-site project to be executed safely.' },
      { title: 'Ontario-Based Activity', description: 'Project activities are carried out in Ontario, with clear commercial benefit (e.g. new revenues, customers, follow-on investment).' },
      { title: 'IP Managed by Applicant', description: 'IP remains with the Applicant. OCI does not claim or manage IP rights.' },
    ],
  },
} as const;

const stats = [
  { value: '$55.8M', label: 'Total Investment', icon: DollarSign },
  { value: '$21.7M', label: 'CIT Investment', icon: TrendingUp },
  { value: '185', label: 'Projects Supported', icon: Building2 },
  { value: '194+', label: 'Ontario Companies', icon: Users },
];

const CriticalIndustrialTech = () => {
  const [activeStream, setActiveStream] = useState<'dc' | 'tap'>('dc');
  const stream = streams[activeStream];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
            }}
          />

          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow>
                <Factory className="w-3.5 h-3.5" />
                Ontario Centre of Innovation Program
              </Eyebrow>

              <Display as="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Critical Industrial<br /><span style={{ color: TEAL }}>Technologies.</span>
              </Display>

              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                An Ontario Centre of Innovation program integrating critical technologies into the mining sector.
                NORCAT delivers this initiative as a Technology Development Site through the NORCAT Underground Centre.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.oc-innovation.ca/programs/cit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Learn More at OCI <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </a>
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Apply Through NORCAT <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── STATS STRIP ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 pl-4"
                  style={{ borderLeft: `2px solid ${TEAL}` }}
                >
                  <s.icon className="w-7 h-7 shrink-0" style={{ color: TEAL }} />
                  <div>
                    <p className="font-black text-2xl md:text-3xl" style={{ fontFamily: FONT, color: NAVY }}>{s.value}</p>
                    <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ABOUT + PARTNERS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>About the Initiative</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Converging industry with<br /><span style={{ color: TEAL }}>innovation.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  The Critical Industrial Technologies initiative is an Ontario Centre of Innovation program that converges
                  Ontario industry with innovative SMEs to amplify the province's critical technology capabilities across four
                  key sectors: Mining, Advanced Manufacturing, Agri-Food, and Construction.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  As a <strong>Technology Development Site (TDS)</strong>, the NORCAT Underground Centre provides SMEs with a
                  real-world mining environment to validate and commercialize their critical technology solutions.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-6" style={{ color: '#6b7387' }}>Program Partners</p>
                  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
                    <img src={citLogo} alt="Critical Industrial Technologies" className="h-14 object-contain" />
                  <img src={ociLogo} alt="Ontario Centre of Innovation" className="h-14 object-contain" />
                    <img src={ontarioLogoAsset} alt="Government of Ontario" className="h-12 object-contain" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <h3 className="font-black uppercase text-lg mb-5" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    NORCAT as a Technology Development Site
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Real-world underground mining environment for testing',
                      'No-cost access for qualifying SMEs',
                      'Expert mentorship from mining industry professionals',
                      'Accelerated path to commercialization',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: TEAL }} />
                        <span className="text-sm" style={{ color: '#475068' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── CRITICAL TECHNOLOGY AREAS + KEY SECTORS (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${BLUE} 100%)` }}
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
              <Eyebrow>Key Sectors</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Four sectors<br /><span style={{ color: TEAL }}>powering Ontario.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                CIT funds the development and commercialization of Ontario-made products and services that integrate critical technologies across four key sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {sectors.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-6 flex flex-col items-start gap-4"
                  style={{ background: 'rgba(10,42,107,0.6)', border: `1px solid ${BORDER}` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,179,152,0.18)', border: `1px solid ${TEAL}33` }}>
                    <s.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-white" style={{ fontFamily: FONT }}>{s.name}</h3>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,179,152,0.4))' }} />
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: TEAL }}>
                Technology Streams
              </p>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(0,179,152,0.4), transparent)' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl p-6 transition-colors flex flex-col"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <tech.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-sm md:text-[15px] font-bold text-white leading-snug mb-4" style={{ fontFamily: FONT }}>
                    {tech.name}
                  </h3>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                        style={{ background: 'rgba(0,179,152,0.12)', color: TEAL, border: `1px solid rgba(0,179,152,0.25)` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PROGRAM STREAMS - TABS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-10">
              <Eyebrow color={TEAL}>Two Program Streams</Eyebrow>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Choose your<br /><span style={{ color: TEAL }}>pathway.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                CIT delivers two distinct streams through NORCAT's Technology Development Site - pick the one that matches where your solution is today.
              </p>
            </div>

            {/* Tab buttons */}
            <div className="inline-flex p-1.5 rounded-2xl mb-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
              {(['dc', 'tap'] as const).map((key) => {
                const s = streams[key];
                const active = activeStream === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveStream(key)}
                    className="flex items-center gap-3 px-5 md:px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
                    style={{
                      background: active ? `linear-gradient(135deg, ${NAVY}, ${BLUE})` : 'transparent',
                      color: active ? 'white' : '#475068',
                      fontFamily: FONT,
                    }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: active ? TEAL : '#6b7387' }} />
                    <span>{s.code} - {s.name}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStream}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header card */}
                <div className="rounded-2xl p-8 md:p-10 mb-6" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, border: `1px solid ${BORDER}` }}>
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] mb-4" style={{ background: 'rgba(0,179,152,0.18)', color: TEAL }}>
                        Stream · {stream.code}
                      </span>
                      <h3 className="font-black uppercase text-2xl md:text-3xl lg:text-4xl text-white mb-4" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                        {stream.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        {stream.tagline}
                      </p>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: FG_MUTED }}>
                        {stream.overview}
                      </p>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                      {[
                        { label: 'Funding', value: stream.funding },
                        { label: 'Match', value: stream.match },
                        { label: 'Duration', value: stream.duration },
                      ].map((m) => (
                        <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${BORDER}` }}>
                          <p className="text-[10px] uppercase tracking-[0.16em] font-bold mb-1.5" style={{ color: TEAL }}>{m.label}</p>
                          <p className="text-sm md:text-base font-black text-white" style={{ fontFamily: FONT }}>{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Eligibility + Project Rules */}
                <div className="grid lg:grid-cols-2 gap-5">
                  <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <Eyebrow color={TEAL}>Eligibility</Eyebrow>
                    <h4 className="font-black uppercase text-xl md:text-2xl mb-6" style={{ color: NAVY, fontFamily: FONT, letterSpacing: '-0.01em' }}>
                      Who qualifies.
                    </h4>
                    <ul className="space-y-3">
                      {stream.eligibility.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(0,179,152,0.12)', border: `1px solid ${TEAL}33` }}>
                            <span className="font-black text-xs" style={{ color: TEAL }}>{i + 1}</span>
                          </div>
                          <div>
                            <p className="font-bold text-sm" style={{ color: NAVY }}>{item.title}</p>
                            <p className="text-sm leading-relaxed mt-0.5" style={{ color: '#475068' }}>{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <Eyebrow color={TEAL}>Project Requirements</Eyebrow>
                    <h4 className="font-black uppercase text-xl md:text-2xl mb-6" style={{ color: NAVY, fontFamily: FONT, letterSpacing: '-0.01em' }}>
                      What projects look like.
                    </h4>
                    <ul className="space-y-3">
                      {stream.projectRules.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                          <div>
                            <p className="font-bold text-sm" style={{ color: NAVY }}>{req.title}</p>
                            <p className="text-sm leading-relaxed mt-0.5" style={{ color: '#475068' }}>{req.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ───── HOW TO APPLY + VIDEO (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${BLUE} 0%, ${NAVY} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 10% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 90% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>How to Apply</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl mb-6">
                  Start with the<br /><span style={{ color: TEAL }}>NORCAT team.</span>
                </Display>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: FG_MUTED }}>
                  CIT is <strong style={{ color: 'white' }}>open for applications on a rolling basis.</strong> Applications MUST be initiated in AccessOCI by an OCI Business Development Manager (BDM) or CIT Sector Manager.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Contact the NORCAT Innovation team to discuss your technology.',
                    'NORCAT facilitates your introduction to an OCI BDM.',
                    'Your BDM initiates the application in AccessOCI on your behalf.',
                    'Receive tailored support matching your tech to the right mining applications.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: FG_MUTED }}>
                      <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-black text-xs" style={{ background: 'rgba(0,179,152,0.18)', color: TEAL }}>{i + 1}</span>
                      <span className="text-sm md:text-base">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.oc-innovation.ca/programs/cit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY }}
                  >
                    Visit CIT on OCI <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Contact NORCAT Innovation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${BORDER}`, background: '#0a2a6b' }}>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/NFXQFdgoE0E"
                      title="Critical Industrial Technologies Initiative"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: TEAL }}>CIT Initiative · Overview</p>
                    <a
                      href="https://www.oc-innovation.ca/programs/cit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'white' }}
                    >
                      OCI website <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </Layout>
  );
};

export default CriticalIndustrialTech;
