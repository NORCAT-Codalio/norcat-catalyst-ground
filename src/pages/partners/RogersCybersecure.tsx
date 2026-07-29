import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Shield,
  Check,
  Users,
  BookOpen,
  MessageSquare,
  ClipboardCheck,
  ExternalLink,
  Lock,
  Building2,
  Globe,
} from 'lucide-react';

import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';
import torontoMetroLogo from '@/assets/logos/toronto-metropolitan-university.png';
import rogersCatalystLogo from '@/assets/logos/rogers-cybersecure-catalyst.png';

// ── Brand tokens (mirrors Home2 / About / NORCAT Underground) ──
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

const services = [
  {
    icon: BookOpen,
    title: 'Webinars & Bootcamps',
    description:
      'Specialized cybersecurity training for both technical and non-technical professionals covering threats, risk management, and security-by-design principles.',
  },
  {
    icon: ClipboardCheck,
    title: 'Self-Assessment Tool',
    description:
      'An online tool for mining organizations to evaluate their current cybersecurity posture and identify areas for improvement.',
  },
  {
    icon: MessageSquare,
    title: '1-on-1 Consultations',
    description:
      'Free sessions with Catalyst advisors for qualifying participants to develop actionable plans for security improvements.',
  },
  {
    icon: Users,
    title: 'NORCAT Mentorship',
    description:
      'Our team provides mining-specific mentorship to Catalyst clients, helping them understand the unique cybersecurity challenges in the mining sector.',
  },
];

const eligibility = [
  'Organizations operating in or adjacent to the mining sector',
  'Staff employed in Ontario',
  'Looking to improve cybersecurity posture',
];

const highlights = [
  { icon: Lock, label: 'MINING-SPECIFIC CYBER TRAINING' },
  { icon: Building2, label: 'BASED AT TORONTO MET UNIVERSITY' },
  { icon: Globe, label: 'NATIONAL CYBERSECURITY HUB' },
];

const RogersCybersecure = () => {
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
          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="!text-white">Partner Program</Eyebrow>

              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Rogers Cybersecure<br />
                <span style={{ color: TEAL }}>Catalyst.</span>
              </Display>

              <p
                className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                Empowering mining sector businesses with the knowledge and tools to safeguard against
                emerging cyber threats. NORCAT partners with the Catalyst to refer companies and
                provide mining-specific mentorship.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://cybersecurecatalyst.ca/mining-sector/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                >
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                  style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                >
                  Get Referred
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── THE PARTNERSHIP (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <Eyebrow>About the Partnership</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  CYBER READINESS<br />
                  <span style={{ color: TEAL }}>BUILT FOR MINING.</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  <p>
                    Rogers Cybersecure Catalyst, based at Toronto Metropolitan University, is a national
                    hub for cybersecurity training, entrepreneurship, and research. Their mining sector
                    program equips mining businesses with the knowledge to safeguard against emerging
                    cyber threats.
                  </p>
                  <p>
                    As a partner, NORCAT refers companies from our network to the Catalyst's mining
                    sector program and provides mining-specific mentorship to their clients - connecting
                    operators with the right resources for the challenges they actually face.
                  </p>
                  <p className="text-sm" style={{ color: '#5b6478' }}>
                    Developed in collaboration with the Canadian Cyber Threat Exchange (CCTX) and
                    supported by the Government of Ontario.
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
                  className="flex flex-wrap items-center justify-center gap-8 rounded-2xl p-8"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <img src={rogersCatalystLogo} alt="Rogers Cybersecure Catalyst" className="h-16 object-contain" />
                  <img src={torontoMetroLogo} alt="Toronto Metropolitan University" className="h-16 object-contain" />
                </div>

                <div className="rounded-2xl p-7 md:p-9" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <span
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.22em] font-bold mb-5 px-2.5 py-1 rounded-full"
                    style={{ color: TEAL, background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                  >
                    Who Qualifies
                  </span>
                  <h3
                    className="font-black uppercase text-xl md:text-2xl mb-5"
                    style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}
                  >
                    Eligibility
                  </h3>
                  <ul className="space-y-4">
                    {eligibility.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#475068' }}>
                        <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SERVICES (dark) ───── */}
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
              <Eyebrow className="!text-white">Program Services</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Practical support,<br />
                <span style={{ color: TEAL }}>not theory.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                The Cybersecure Catalyst mining sector program offers comprehensive cybersecurity
                resources for mining organizations - from training to one-on-one advisory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {services.map((s, i) => (
                <motion.article
                  key={s.title}
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
                    <s.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="font-black uppercase text-lg mb-2 text-white"
                    style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>
                    {s.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA (light) ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
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
                  <Shield className="w-3.5 h-3.5" /> Get Protected
                </Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl">
                  Ready to strengthen<br />
                  <span style={{ color: TEAL }}>your cybersecurity?</span>
                </Display>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                  Get referred to the Rogers Cybersecure Catalyst mining sector program and receive
                  mining-specific cybersecurity mentorship from the NORCAT team.
                </p>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://cybersecurecatalyst.ca/mining-sector/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: NAVY, boxShadow: '0 18px 40px -12px rgba(0,179,152,0.55)' }}
                  >
                    Visit Cybersecure Catalyst <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    to="/apply"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT, color: 'white', border: `2px solid ${TEAL}` }}
                  >
                    Get Referred by NORCAT
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

export default RogersCybersecure;
