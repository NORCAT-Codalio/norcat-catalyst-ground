import { Layout } from '@/components/Layout';
import sectorManufacturing from '@/assets/cit-sector-manufacturing.jpg';
import sectorAgrifood from '@/assets/cit-sector-agrifood.jpg';
import sectorConstruction from '@/assets/cit-sector-construction.jpg';
import sectorMining from '@/assets/cit-sector-mining.jpg';
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
  Building2,
  TrendingUp,
  Lightbulb,
  Settings,
  CheckCircle,
  BarChart3,
} from 'lucide-react';

import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogoAsset from '@/assets/logos/ontario-logo-wordmark.png';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import undergroundProofImg from '@/assets/underground/underground-2.jpg.asset.json';

// ── Brand tokens (mirrors Home2 / About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, color = TEAL, className = '' }: { children: React.ReactNode; color?: string; className?: string }) => (
  <p
    className={`inline-flex items-center text-sm font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
    style={{ fontFamily: FONT, color }}
  >
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
  { name: 'Advanced Manufacturing', icon: Factory, image: sectorManufacturing },
  { name: 'Agri-Food', icon: Briefcase, image: sectorAgrifood },
  { name: 'Construction', icon: Building2, image: sectorConstruction },
  { name: 'Mining', icon: TrendingUp, image: sectorMining },
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

const CriticalIndustrialTech = () => {
  const [activeStream, setActiveStream] = useState<'dc' | 'tap'>('dc');
  const stream = streams[activeStream];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-10 md:py-14">
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

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow className="!text-white">Ontario Centre of Innovation Program</Eyebrow>

              <Display as="h1" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
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
                  style={{ fontFamily: FONT, background: 'rgba(0, 179, 152, 0.8)', color: 'white', boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
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


        {/* ───── ABOUT + PARTNERS (light) ───── */}
        <section className="pt-10 md:pt-14 pb-6 md:pb-8" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>About the Initiative</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  What is CIT?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  Critical Industrial Technologies is a Government of Ontario initiative delivered by the Ontario Centre of Innovation to accelerate the development, commercialization and adoption of advanced technologies by Ontario SMEs.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  It brings together funding, specialized testing environments, industry partners, commercialization support and talent development to help Ontario companies move critical technologies into real-world use.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#475068' }}>
                  As part of the initiative, the <Link to="/mining/underground-centre" className="font-semibold underline underline-offset-2 hover:text-[#00B398]" style={{ color: NAVY }}>NORCAT Underground Centre</Link> is a Technology Development Site (TDS) providing mining technology companies with a real-world environment to develop, test and validate their solutions.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl p-6 md:p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <div className="flex flex-col items-center text-center">
                    <a href="https://www.citinnovation.ca/" target="_blank" rel="noopener noreferrer">
                      <img src={citLogo} alt="Critical Industrial Technologies" className="h-20 md:h-24 object-contain mb-6 transition-transform hover:scale-[1.02]" />
                    </a>

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: '#6b7387' }}>Program Partners</p>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                      <a href="https://www.oc-innovation.ca/programs/cit/" target="_blank" rel="noopener noreferrer">
                        <img src={ociLogo} alt="Ontario Centre of Innovation" className="h-12 object-contain transition-transform hover:scale-[1.02]" />
                      </a>
                      <a href="https://www.ontario.ca/page/critical-technology-initiatives" target="_blank" rel="noopener noreferrer">
                        <img src={ontarioLogoAsset} alt="Government of Ontario" className="h-10 object-contain transition-transform hover:scale-[1.02]" />
                      </a>
                    </div>
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

        {/* ───── TECHNOLOGY DEVELOPMENT SITES (light) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
              {/* Left column - narrative */}
              <div className="lg:col-span-4">
                <Eyebrow>Technology Development Sites</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Real-world places<br /><span style={{ color: TEAL }}>to put technology to work.</span>
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#475068' }}>
                  Technology Development Sites (Dev Sites) are specialized facilities across Ontario where eligible SMEs can
                  develop, test and demonstrate critical technology solutions in environments that reflect their target market.
                </p>
                <p className="text-base leading-relaxed mb-7" style={{ color: '#475068' }}>
                  Each site brings different infrastructure, expertise and sector capabilities.
                </p>
                <a
                  href="https://www.oc-innovation.ca/programs/critical-industrial-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  style={{ background: 'rgba(0,179,152,0.8)', color: 'white' }}
                >
                  Explore all CIT Dev Sites
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right column - hierarchy diagram */}
              <div className="lg:col-span-8">
                <div className="rounded-3xl p-5 md:p-8" style={{ background: PAPER, border: '1px solid #d9dde5' }}>
                  {/* Tier 1 */}
                  <div className="rounded-2xl px-6 py-4 text-center" style={{ background: NAVY }}>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-white">CIT Initiative</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Led by the Ontario Centre of Innovation (OCI)</p>
                  </div>
                  <div className="mx-auto w-px h-5" style={{ background: 'rgba(0,179,152,0.5)' }} />
                  {/* Tier 2 */}
                  <div className="rounded-2xl px-6 py-4 text-center" style={{ background: 'linear-gradient(90deg,#00806E,#00B398)' }}>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-white">Dev Sites Across Ontario</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.85)' }}>Specialized environments for testing, validation and demonstration</p>
                  </div>
                  <div className="mx-auto w-px h-5" style={{ background: 'rgba(0,179,152,0.5)' }} />

                  {/* Tier 3 - sectors */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {sectors.map((s, i) => (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="rounded-2xl overflow-hidden group flex flex-col"
                        style={{ background: 'white', border: '1px solid #d9dde5' }}
                      >
                        <div className="px-4 py-4 text-center h-[4.5rem] flex items-center justify-center">
                          <h3 className="font-bold text-sm sm:text-base leading-tight" style={{ fontFamily: FONT, color: NAVY }}>{s.name}</h3>
                        </div>
                        <div className="relative h-36 md:h-40 overflow-hidden">

                          <img
                            src={s.image}
                            alt={s.name}
                            loading="lazy"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>


                  {/* Different environment note */}
                  <div className="mt-5 flex items-start gap-4 px-1">
                    <Network className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
                    <p className="text-sm leading-relaxed" style={{ color: '#475068' }}>
                      <strong style={{ color: NAVY }}>Need a different environment?</strong> NORCAT is one Technology Development Site
                      within the broader CIT network. If your technology is better suited to another facility or sector, we can help
                      point you in the right direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical technologies strip */}
            <div className="mt-14 md:mt-20">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,179,152,0.45))' }} />
                <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: TEAL }}>
                  Six Critical Technologies
                </p>
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(0,179,152,0.45), transparent)' }} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1"
                    style={{ background: PAPER, border: '1px solid #d9dde5' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(0,179,152,0.12)' }}
                    >
                      <tech.icon className="w-5 h-5" style={{ color: TEAL }} />
                    </div>
                    <h3 className="text-sm font-bold leading-snug" style={{ fontFamily: FONT, color: NAVY }}>
                      {tech.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ───── FROM PROTOTYPE TO REAL-WORLD PROOF ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>NORCAT as a Technology Development Site</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  From Prototype to<br /><span style={{ color: TEAL }}>Real-World Proof.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  The NORCAT Underground Centre gives mining technology companies an operating environment to move beyond controlled testing and see how their solutions perform underground.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: '#475068' }}>
                  Companies can develop, test, validate and demonstrate technology in conditions that reflect the realities of mining operations.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Lightbulb, label: 'Develop' },
                    { icon: Settings, label: 'Test' },
                    { icon: CheckCircle, label: 'Validate' },
                    { icon: BarChart3, label: 'Demonstrate' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex flex-col items-center text-center p-4 rounded-xl"
                      style={{ background: 'white', border: '1px solid #d9dde5' }}
                    >
                      <item.icon className="w-6 h-6 mb-3" style={{ color: TEAL }} />
                      <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: NAVY }}>{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/mining/underground-centre"
                  className="group inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: 'rgba(0, 179, 152, 0.8)', color: 'white', boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Explore NORCAT's Dev Site <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid #d9dde5', boxShadow: '0 24px 60px -30px rgba(0,26,77,0.35)' }}
              >
                <img
                  src={undergroundProofImg.url}
                  alt="Mining technology being tested in the NORCAT Underground Centre"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── PROGRAM STREAMS - SELECTABLE CARDS ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-10 md:mb-14">
              <Eyebrow color={TEAL}>Two Program Streams</Eyebrow>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Choose your<br /><span style={{ color: TEAL }}>pathway.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                CIT delivers two distinct streams through NORCAT's Technology Development Site. Tap a card below to see the details for that pathway.
              </p>
            </div>

            {/* Stream selector cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {(['dc', 'tap'] as const).map((key) => {
                const s = streams[key];
                const active = activeStream === key;
                const Icon = s.icon;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveStream(key)}
                    className="group text-left rounded-2xl p-6 md:p-8 transition-all duration-300"
                    style={{
                      background: active ? `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` : 'white',
                      border: active ? `1px solid ${BORDER}` : '1px solid #d9dde5',
                      boxShadow: active ? '0 24px 60px -30px rgba(0,26,77,0.35)' : '0 4px 20px -8px rgba(0,26,77,0.12)',
                    }}
                    aria-pressed={active}
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{ background: active ? 'rgba(255,255,255,0.12)' : 'rgba(0,179,152,0.10)' }}
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: active ? TEAL : '#00B398' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                          <span
                            className="inline-flex items-center justify-center w-10 h-6 rounded text-[10px] font-black uppercase tracking-wider"
                            style={{
                              background: active ? 'rgba(0,179,152,0.20)' : '#001A4D',
                              color: active ? TEAL : 'white',
                            }}
                          >
                            {s.code}
                          </span>
                          <span className="text-xs md:text-sm font-semibold uppercase tracking-wider" style={{ color: active ? 'rgba(255,255,255,0.72)' : '#6b7387' }}>
                            Stream
                          </span>
                        </div>
                        <h3 className="font-black uppercase text-lg md:text-xl lg:text-2xl mb-2" style={{ fontFamily: FONT, color: active ? 'white' : NAVY, letterSpacing: '-0.01em' }}>
                          {s.name}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: active ? 'rgba(255,255,255,0.85)' : '#475068' }}>
                          {s.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Quick stats - visible on all sizes, compact on mobile */}
                    <div className="grid grid-cols-3 gap-2 md:gap-3 mt-5 md:mt-6 pt-5 md:pt-6" style={{ borderTop: active ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e8eaef' }}>
                      {[
                        { label: 'Funding', value: s.funding },
                        { label: 'Match', value: s.match },
                        { label: 'Duration', value: s.duration },
                      ].map((m) => (
                        <div key={m.label} className="text-left">
                          <p className="text-[10px] uppercase tracking-[0.14em] font-bold mb-1" style={{ color: active ? TEAL : '#6b7387' }}>{m.label}</p>
                          <p className="text-xs md:text-sm font-black" style={{ fontFamily: FONT, color: active ? 'white' : NAVY }}>{m.value}</p>
                        </div>
                      ))}
                    </div>
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
                {/* Stream overview */}
                <div className="rounded-2xl p-6 md:p-8 mb-5 md:mb-6" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: TEAL }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: TEAL }} />
                    Stream overview
                  </span>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475068' }}>
                    {stream.overview}
                  </p>
                </div>

                {/* Eligibility + Project Rules */}
                <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
                  <div className="rounded-2xl p-6 md:p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <Eyebrow color={TEAL}>Eligibility</Eyebrow>
                    <h4 className="font-black uppercase text-xl md:text-2xl mb-5 md:mb-6" style={{ color: NAVY, fontFamily: FONT, letterSpacing: '-0.01em' }}>
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

                  <div className="rounded-2xl p-6 md:p-8" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <Eyebrow color={TEAL}>Project Requirements</Eyebrow>
                    <h4 className="font-black uppercase text-xl md:text-2xl mb-5 md:mb-6" style={{ color: NAVY, fontFamily: FONT, letterSpacing: '-0.01em' }}>
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

        {/* ───── HOW TO APPLY + VIDEO (light) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'white', color: NAVY }}>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>How to Apply</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Start with the<br /><span style={{ color: TEAL }}>NORCAT team.</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#475068' }}>
                  CIT is <strong style={{ color: NAVY }}>open for applications on a rolling basis.</strong> Applications MUST be initiated in AccessOCI by an OCI Business Development Manager (BDM) or CIT Sector Manager.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Contact the NORCAT Innovation team to discuss your technology.',
                    'NORCAT facilitates your introduction to an OCI BDM.',
                    'Your BDM initiates the application in AccessOCI on your behalf.',
                    'Receive tailored support matching your tech to the right mining applications.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: '#475068' }}>
                      <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-black text-xs" style={{ background: 'rgba(0,179,152,0.12)', color: TEAL }}>{i + 1}</span>

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
                    style={{ fontFamily: FONT, background: 'rgba(0, 179, 152, 0.8)', color: 'white' }}
                  >
                    Visit CIT on OCI <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black/5"
                    style={{ fontFamily: FONT, color: NAVY, border: `2px solid ${TEAL}` }}
                  >
                    Contact NORCAT Innovation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #d9dde5', background: PAPER, boxShadow: '0 24px 60px -30px rgba(0,26,77,0.35)' }}>
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
                      style={{ color: NAVY }}
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
