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
import ontarioLogo from '@/assets/logos/ontario-logo.png';
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
  { icon: Network, name: '5G & Advanced Networks' },
  { icon: Cpu, name: 'Artificial Intelligence' },
  { icon: Blocks, name: 'Blockchain' },
  { icon: Bot, name: 'Robotics' },
  { icon: Shield, name: 'Cybersecurity' },
  { icon: Atom, name: 'Quantum' },
];

const programs = [
  {
    title: 'Development & Commercialization Program',
    description: 'New SME solutions can commercialize faster through exclusive, no-cost access to the NORCAT Underground Technology Development Site and up to $100k of support from OCI.',
    ideal: 'Accelerated Product Development',
    icon: FlaskConical,
    expandedDetails: {
      funding: 'Up to $100,000',
      benefits: [
        'No-cost access to NORCAT Underground Technology Development Site',
        'Real-world mining environment for testing and validation',
        'Expert mentorship from industry professionals',
        'Accelerated path from prototype to market-ready product',
      ],
      eligibility: 'Ontario-based SMEs developing new critical technology solutions for the mining sector',
      link: 'https://www.citinnovation.ca/program/development-and-commercialization-program/',
    },
  },
  {
    title: 'Technology Access Program',
    description: 'SMEs with an existing critical technology product or service can break into new markets faster through exclusive, no-cost access to our Technology Development Site.',
    ideal: 'Product Validation',
    icon: Target,
    expandedDetails: {
      funding: 'No-cost site access',
      benefits: [
        'Exclusive access to Technology Development Site facilities',
        'Opportunity to validate products in real mining conditions',
        'Connect with potential industry customers and partners',
        'Faster market penetration in the mining sector',
      ],
      eligibility: 'Ontario SMEs with existing critical technology products seeking market expansion',
      link: 'https://www.citinnovation.ca/program/technology-access-program/',
    },
  },
  {
    title: 'Talent Development Internships',
    description: 'Eligible SMEs can invest in the industrial workforce of tomorrow by hiring new talent for Critical Technology internships, with up to $20k in OCI support.',
    ideal: 'New Talent Hiring',
    icon: GraduationCap,
    expandedDetails: {
      funding: 'Up to $20,000 ($10k per 4-month unit)',
      benefits: [
        'Financial support for hiring critical technology interns',
        'Build your pipeline of future talent',
        'Contribute to workforce development in Ontario',
        'Flexible 4-month internship units',
      ],
      eligibility: 'Ontario SMEs looking to hire interns for critical technology roles',
      link: 'https://www.citinnovation.ca/program/talent-development-internships/',
    },
  },
  {
    title: 'Future Ready Program',
    description: 'Eligible SMEs can equip their employees for the challenges of today through upskilling initiatives with up to $10k of OCI support.',
    ideal: 'Talent Development',
    icon: Briefcase,
    expandedDetails: {
      funding: 'Up to $10,000',
      benefits: [
        'Support for employee upskilling initiatives',
        'Training in critical technology areas',
        "Enhance your team's competitive capabilities",
        'Prepare workforce for emerging industrial challenges',
      ],
      eligibility: 'Ontario SMEs seeking to upskill existing employees in critical technologies',
      link: 'https://www.citinnovation.ca/program/future-ready-program/',
    },
  },
];

const stats = [
  { value: '$55.8M', label: 'Total Investment', icon: DollarSign },
  { value: '$21.7M', label: 'CIT Investment', icon: TrendingUp },
  { value: '185', label: 'Projects Supported', icon: Building2 },
  { value: '194+', label: 'Ontario Companies', icon: Users },
];

const eligibility = [
  { title: 'Small-and-Medium Enterprise', desc: 'Less than 500 employees' },
  { title: 'For-Profit Organization', desc: 'Registered as a for-profit entity' },
  { title: 'Ontario Operations', desc: 'Registered operations in Ontario' },
  { title: 'Critical Technology Focus', desc: 'Adoption of Critical Technologies as part of your roadmap' },
];

const CriticalIndustrialTech = () => {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

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
                    <img src={ontarioLogo} alt="Government of Ontario" className="h-12 object-contain" />
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

        {/* ───── CRITICAL TECHNOLOGY AREAS (dark) ───── */}
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
              <Eyebrow>Focus Areas</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Critical technology<br /><span style={{ color: TEAL }}>areas.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                The initiative focuses on technologies essential to industrial competitiveness in the mining sector.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl p-6 transition-colors"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <tech.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="text-sm md:text-[15px] font-bold text-white leading-snug" style={{ fontFamily: FONT }}>
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PROGRAM STREAMS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow color={TEAL}>Program Streams</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                Multiple pathways to<br /><span style={{ color: TEAL }}>support.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {programs.map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-6 md:p-8 transition-shadow hover:shadow-lg cursor-pointer"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                  onMouseEnter={() => setExpandedProgram(i)}
                  onMouseLeave={() => setExpandedProgram(null)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                    >
                      <program.icon className="w-6 h-6" style={{ color: TEAL }} />
                    </div>
                    <div className="flex-1">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] mb-3"
                        style={{ background: 'rgba(0,179,152,0.10)', color: TEAL, border: `1px solid ${TEAL}33` }}
                      >
                        Ideal for: {program.ideal}
                      </span>
                      <h3 className="font-black uppercase text-lg mb-2" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                        {program.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#475068' }}>{program.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProgram === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 space-y-4" style={{ borderTop: '1px solid #d9dde5' }}>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold" style={{ color: NAVY }}>Funding:</span>
                            <span className="text-sm font-black" style={{ color: TEAL }}>{program.expandedDetails.funding}</span>
                          </div>

                          <div>
                            <span className="text-sm font-bold block mb-2" style={{ color: NAVY }}>Key Benefits:</span>
                            <ul className="space-y-2">
                              {program.expandedDetails.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#475068' }}>
                                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TEAL }} />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-sm font-bold" style={{ color: NAVY }}>Eligibility: </span>
                            <span className="text-sm" style={{ color: '#475068' }}>{program.expandedDetails.eligibility}</span>
                          </div>

                          <a
                            href={program.expandedDetails.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                            style={{ color: TEAL }}
                          >
                            Learn more at OCI <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── MINIMUM ELIGIBILITY (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: `linear-gradient(180deg, ${BLUE} 0%, ${NAVY} 100%)` }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 90% 90%, rgba(47,111,214,0.15), transparent 45%)`,
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <Eyebrow>Requirements</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Minimum eligibility<br /><span style={{ color: TEAL }}>criteria.</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: FG_MUTED }}>
                  The Critical Industrial Technology programs are a good fit for companies that meet these minimum criteria.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {eligibility.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl p-6 h-full flex items-start gap-4"
                    style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,179,152,0.18)', border: `1px solid ${TEAL}33` }}
                    >
                      <span className="font-black text-sm" style={{ color: TEAL }}>{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1" style={{ fontFamily: FONT }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-center mt-8" style={{ color: FG_MUTED }}>
                Please note that each program has their own set of eligibility criteria. For details on each program, please view the full set of eligibility criteria in the program guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: TEAL }}>
          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 h-1/2 w-auto object-contain object-right opacity-30 pointer-events-none select-none mix-blend-overlay"
            style={{ transform: 'scaleX(-1)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 text-center">
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
            >
              Ready to develop your<br /><span style={{ color: NAVY }}>critical technology?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(0,26,77,0.85)' }}>
              Access the NORCAT Underground Centre as your Technology Development Site and accelerate your path to commercialization in the mining sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.oc-innovation.ca/programs/cit/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                style={{ fontFamily: FONT, background: NAVY, color: 'white' }}
              >
                Visit OCI Program Page <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </a>
              <Link
                to="/apply"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/10"
                style={{ fontFamily: FONT, color: NAVY, border: `2px solid ${NAVY}` }}
              >
                Apply Through NORCAT <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CriticalIndustrialTech;
