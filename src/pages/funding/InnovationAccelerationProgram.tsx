import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Rocket,
  Check,
  Search,
  CheckCircle,
  DollarSign,
  Target,
  Lightbulb,
  XCircle,
  ClipboardList,
  Users,
  BarChart3,
  Send,
  Zap,
} from 'lucide-react';

import fednorFullLogo from '@/assets/logos/fednor-full.png';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import iapLogo from '@/assets/iap-logo.png.asset.json';

// ── Brand tokens (mirrors Home2 / About / SCF) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, center = false }: { children: React.ReactNode; center?: boolean }) => (
  <p
    className={`${center ? 'inline-flex justify-center' : 'inline-flex'} items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5`}
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

const InnovationAccelerationProgram = () => {
  const applicationSteps = [
    { step: '01', title: 'Apply', description: 'Submit application form; initial review within 2 business days.', icon: Send },
    { step: '02', title: 'Evaluation', description: 'Eligible applications reviewed and approved by Mentorship Committee.', icon: Search },
    { step: '03', title: 'Decision', description: 'Receive outcome within 1 month.', icon: CheckCircle },
  ];

  const eligibilityCriteria = [
    'The applicant must be a NORCAT Innovation client',
    'Must be a growth-oriented and for-profit entity (registered sole proprietor, partnership, or corporation)',
    'Must be located within Greater Sudbury, Ontario',
    'Must be developing and commercializing an innovative tech-based service, product, or process at TRL 7 or higher',
  ];

  const eligibleProjects = {
    planningDevelopment: [
      'Business planning', 'Market research', 'Product development', 'Product testing',
      'Export development', 'Feasibility analysis', 'Certifications', 'In-market licenses',
      'IP research and protection', 'Productivity research', 'Market entry fees',
    ],
    salesMarketing: [
      'Trade show exhibiting and travel', 'Sales training', 'Test marketing',
      'E-commerce and promotions', 'Export market development',
    ],
    businessManagement: [
      'Management support/training', 'Business capacity development',
      'Productivity or lean production implementation',
    ],
  };

  const ineligibleActivities = [
    'Capital and any ongoing operational costs of the startup or SME',
    'Existing staff wages',
    'Administration costs',
    'Rolling stock, etc.',
    'Operating as resellers or distributors',
  ];

  const programRequirements = [
    { title: 'Client Intake & Discovery', description: 'The applicant must be a NORCAT Innovation client. If not, complete the Discovery Document.' },
    { title: 'Proposal Submission', description: 'Submit a proposal outlining the project, your current TRL level, and business value.' },
    { title: 'Quotations for Project Work', description: 'Submit a minimum of two competitive quotes from independent and unrelated service providers with scope of work, hourly rate or total cost, and estimated hours required.' },
    { title: 'Project Feedback Requirements', description: 'Upon completion, submit a formal exit survey describing project impact on business operations, outcomes, or future plans.' },
    { title: 'Long-Term Reporting', description: 'Applicants may be contacted for follow-up feedback for up to five years post-completion.' },
  ];

  const overviewStats = [
    { icon: DollarSign, label: 'Max Grant', value: '$20,000' },
    { icon: Target, label: 'Match Ratio', value: '1:1 / 50%' },
    { icon: Zap, label: 'Decision Time', value: '~1 Month' },
    { icon: BarChart3, label: 'Focus', value: 'TRL 7+' },
  ];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
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
              <Eyebrow>Funding &amp; Capital</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Innovation<br />
                <span style={{ color: TEAL }}>Acceleration Program.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Matching grants of up to $20,000 for tech-enabled founders in Greater
                Sudbury — accelerate commercialization and drive regional growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                >
                  Apply to NORCAT Innovation
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-colors"
                  style={{ border: `1px solid ${BORDER}`, color: 'white', fontFamily: FONT }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── PROGRAM OVERVIEW (light) ───── */}
        <section id="overview" className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">

            {/* Heading + logo */}
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center mb-14 md:mb-20">
              <div className="lg:col-span-7">
                <Eyebrow>About the Program</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Fuel for Sudbury's<br /><span style={{ color: TEAL }}>tech founders.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5" style={{ color: '#475068' }}>
                  NORCAT Innovation backs Greater Sudbury's small and medium-sized
                  enterprises through targeted grant programs that fuel innovation,
                  accelerate commercialization, and drive regional economic growth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Through IAP, eligible businesses can access matching funds of up to
                  $20,000 per project on a 1:1 basis — helping local innovators bring
                  bold solutions to market with greater speed, efficiency, and impact.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-[220px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <img src={iapLogo.url} alt="Innovation Acceleration Program" className="max-h-32 md:max-h-40 max-w-full object-contain" />
                </div>
              </div>
            </div>

            {/* Featured stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div
                className="rounded-2xl p-8 md:p-10 text-center"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, border: `1px solid ${BORDER}` }}
              >
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>$20K</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'rgba(255,255,255,0.75)' }}>Max Matching Grant</p>
              </div>
              <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>50%</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#6b7387' }}>Eligible Project Costs</p>
              </div>
              <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>1:1</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#6b7387' }}>Matching Basis</p>
              </div>
            </div>

            {/* Detail stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 px-6 md:px-10 rounded-2xl" style={{ background: 'white', border: '1px solid #d9dde5' }}>
              {overviewStats.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}33` }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5" style={{ color: '#6b7387' }}>{s.label}</p>
                    <p className="text-base md:text-lg font-bold" style={{ color: NAVY }}>{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── APPLICATION PROCESS (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Application Process</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                A straight path<br />from apply to approved.
              </Display>
            </div>

            <style>{`
              @keyframes paper-plane-fly {
                0%   { transform: translate(0,0) rotate(0deg) scale(1); opacity: 1; }
                100% { transform: translate(320px,-340px) rotate(-30deg) scale(0.1); opacity: 0; }
              }
              @keyframes magnify-look {
                0%   { transform: translate(0,0) rotate(0deg); }
                20%  { transform: translate(-6px, -3px) rotate(-18deg); }
                45%  { transform: translate(8px, -2px) rotate(15deg); }
                70%  { transform: translate(-3px, 5px) rotate(-10deg); }
                100% { transform: translate(0,0) rotate(0deg); }
              }
              @keyframes decision-stamp {
                0%   { transform: scale(1); }
                35%  { transform: scale(1.35); }
                55%  { transform: scale(0.92); }
                75%  { transform: scale(1.08); }
                100% { transform: scale(1); }
              }
              @keyframes decision-fill {
                0%   { fill-opacity: 0; }
                100% { fill-opacity: 1; }
              }
              @keyframes decision-ring {
                0%   { transform: scale(1); opacity: 0.55; }
                100% { transform: scale(2.2); opacity: 0; }
              }
              .plane-icon { transition: transform 0.3s ease; }
              .group:hover .plane-icon { animation: paper-plane-fly 1.5s ease-out forwards; }
              .search-icon { transition: transform 0.3s ease; }
              .group:hover .search-icon { animation: magnify-look 0.9s ease-in-out infinite; }
              .decision-icon circle {
                fill: #00B398;
                fill-opacity: 0;
                transition: fill-opacity 0.4s ease;
              }
              .decision-icon path {
                transform-origin: center;
              }
              .group:hover .decision-icon circle {
                fill-opacity: 1;
                transition: fill-opacity 0.3s ease;
              }
              .group:hover .decision-icon path {
                animation: decision-stamp 0.55s ease-out forwards;
              }
              .group:hover .decision-ring {
                animation: decision-ring 0.6s ease-out forwards;
              }
            `}</style>
            <div className="grid md:grid-cols-3 gap-5">
              {applicationSteps.map((s, i) => (
                <article
                  key={s.step}
                  className="group relative rounded-2xl p-8 transition-colors h-full overflow-visible"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div className="font-black text-5xl mb-6" style={{ color: 'rgba(0,179,152,0.35)', fontFamily: FONT, letterSpacing: '-0.02em' }}>{s.step}</div>
                  <div
                    className={`${i === 0 ? '' : 'transition-transform duration-300 group-hover:scale-110'} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    {i === 2 ? (
                      <div className="relative w-7 h-7 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 decision-icon absolute inset-0" style={{ color: TEAL }}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 decision-ring" style={{ borderColor: TEAL }} />
                      </div>
                    ) : (
                      <s.icon className={`w-7 h-7 ${i === 0 ? 'plane-icon' : i === 1 ? 'search-icon' : ''}`} style={{ color: TEAL }} />
                    )}
                  </div>
                  <h3 className="font-black uppercase text-xl md:text-2xl text-white mb-3" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{s.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ───── ELIGIBILITY (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-2">

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,179,152,0.12)', border: `1px solid ${TEAL}33` }}>
                    <ClipboardList className="w-6 h-6" style={{ color: TEAL }} />
                  </div>
                  <Eyebrow>Eligibility Criteria</Eyebrow>
                </div>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-8" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                  Who qualifies.
                </h2>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                      <span className="text-sm md:text-base" style={{ color: '#2a3245' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm" style={{ color: '#6b7387' }}>
                  <strong style={{ color: NAVY }}>Note:</strong> Retail and distributor businesses will not be considered under this program.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(220,38,38,0.10)', border: '1px solid rgba(220,38,38,0.25)' }}>
                    <XCircle className="w-6 h-6" style={{ color: '#dc2626' }} />
                  </div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-0" style={{ fontFamily: FONT, color: '#dc2626' }}>
                    <span className="size-1.5 rounded-full inline-block" style={{ background: '#dc2626' }} />
                    Ineligible Activities
                  </p>
                </div>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-8" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                  What's not covered.
                </h2>
                <ul className="space-y-3">
                  {ineligibleActivities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'white', border: '1px solid #f1d1d1' }}>
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                      <span className="text-sm md:text-base" style={{ color: '#2a3245' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ───── ELIGIBLE PROJECTS (dark) ───── */}
        <section
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #001a4d 0%, #003da5 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 10% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Eligible Projects</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Where the<br />money goes.
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                Projects must demonstrate economic development objectives and create
                short-to-medium, measurable results. Must not be a project already in progress.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Lightbulb, title: 'Planning & Development', items: eligibleProjects.planningDevelopment },
                { icon: BarChart3, title: 'Sales & Marketing', items: eligibleProjects.salesMarketing },
                { icon: Users, title: 'Business Management', items: eligibleProjects.businessManagement },
              ].map((col) => (
                <article
                  key={col.title}
                  className="rounded-2xl p-8 h-full"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <col.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl md:text-2xl text-white mb-5" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FG_MUTED }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PROGRAM REQUIREMENTS (timeline) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Program Requirements</Eyebrow>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                What you'll need<br /><span style={{ color: TEAL }}>to participate.</span>
              </h2>
            </div>

            <div className="relative max-w-4xl">
              {/* Vertical spine */}
              <div
                className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                style={{ background: `linear-gradient(180deg, ${TEAL} 0%, ${BLUE} 100%)` }}
              />

              <div className="space-y-8 md:space-y-10">
                {programRequirements.map((req, i) => (
                  <div key={i} className="relative flex gap-5 md:gap-8 items-start">
                    {/* Timeline node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm"
                        style={{
                          background: i === 0 ? `linear-gradient(135deg, ${TEAL}, ${BLUE})` : 'white',
                          border: `2px solid ${TEAL}`,
                        }}
                      >
                        <span
                          className="font-black text-sm md:text-lg"
                          style={{ color: i === 0 ? 'white' : TEAL, fontFamily: FONT }}
                        >
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 p-6 md:p-8 rounded-2xl transition-shadow hover:shadow-lg"
                      style={{ background: 'white', border: '1px solid #d9dde5' }}
                    >
                      <h3 className="font-black uppercase text-base md:text-lg mb-2" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                        {req.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: '#475068' }}>
                        {req.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── FUNDED BY (light) ───── */}
        <section className="py-16" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-5 text-center" style={{ color: '#6b7387' }}>Funded by</p>
            <div className="max-w-md mx-auto rounded-xl p-6 flex items-center justify-center min-h-[110px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
              <img src={fednorFullLogo} alt="Federal Economic Development Agency for Northern Ontario" className="max-h-14 max-w-full object-contain" />
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow center>Your move</Eyebrow>
            <Rocket className="w-12 h-12 mx-auto mb-6" style={{ color: TEAL }} />
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
            >
              Ready to accelerate<br /><span style={{ color: TEAL }}>your innovation?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Applications are open. Take the first step toward bringing your
              innovation to market — with NORCAT in your corner.
            </p>
            <Link
              to="/apply"
              className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
              style={{ fontFamily: FONT, background: TEAL, color: 'white' }}
            >
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
};

export default InnovationAccelerationProgram;
