import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import GrantFAQSection from '@/components/GrantFAQSection';
import {
  ArrowUpRight,
  Rocket,
  Check,
  DollarSign,
  Target,
  XCircle,
  ClipboardList,
  Briefcase,
  Layers,
  Cog,
  FileText,
  Calendar,
  MapPin,
  Megaphone,
} from 'lucide-react';

import fednorFullLogo from '@/assets/logos/fednor-full.png';
import canadaLogo from '@/assets/logos/government-of-canada.png';
import iapLogo from '@/assets/iap-logo.png.asset.json';

// ── Brand tokens (mirrors RAII) ──
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

  const eligibilityCriteria = [
    'Must be a registered NORCAT Innovation client (complete the Discovery Document Form to begin intake)',
    'Must be a growth-oriented and for-profit entity (registered sole proprietor, partnership, or corporation)',
    'Must be located within NORCAT Innovation\'s service area of Greater Sudbury, Ontario',
    'Seeking assistance to develop and commercialize an innovative tech-based service, product, or process with potential to contribute to increased sales and employment',
    'Project must be a new, high-impact strategic initiative - not a duplicate of previously funded work or already underway',
  ];

  const ineligibleActivities = [
    'Resellers or distributors',
    'Capital and ongoing operational costs of the startup or SME',
    'Existing staff wages, administration costs, and rolling stock',
  ];

  const eligibleActivities = {
    pillar1: {
      title: 'Planning & Development',
      items: [
        'Business planning, market research, and feasibility analysis',
        'Product development and product testing',
        'Export development, certifications, and in-market licenses',
        'IP research and protection, productivity research, and market entry fees',
      ],
    },
    pillar2: {
      title: 'Sales & Marketing',
      items: [
        'Trade show exhibiting and travel',
        'Sales training and marketing tests',
        'E-commerce, promotions, and website enhancements that create competitive edge',
        'Export market development',
      ],
    },
  };

  const eligibleCosts = [
    { icon: Briefcase, title: 'Business Management & Enhancement', items: ['Management support and training', 'Business capacity development', 'Productivity or lean production implementation'] },
    { icon: Megaphone, title: 'Go-to-Market', items: ['Trade show exhibiting and travel', 'E-commerce, promotions, and website enhancements', 'Export market development'] },
    { icon: Layers, title: 'Product & IP', items: ['Product development and testing', 'IP research and protection', 'Certifications and in-market licenses'] },
  ];

  const programRequirements = [
    { title: 'Client Intake & Discovery', description: 'The applicant must be a NORCAT Innovation client. If not, complete the Discovery Document Form to begin the intake process.' },
    { title: 'Quotations for Project Work', description: 'With the exception of IP Research and Protection projects, submit a minimum of two competitive quotes from independent and unrelated service providers - each detailing scope of work, hourly rate or total cost, and estimated hours required.' },
    { title: 'Contribution & Reimbursement', description: 'SMEs pay project service providers 100% of invoiced costs (including HST) prior to submitting for reimbursement. Funding covers up to 50% of approved Total Eligible Project Costs, up to $20,000 per SME.' },
    { title: 'Project Feedback', description: 'Within three months of project completion, recipients must submit formal feedback describing the project\'s impact on their business operations, outcomes, and future.' },
    { title: 'Final Survey & Long-Term Reporting', description: 'Complete a final project survey capturing key success metrics. Applicants may be contacted for follow-up feedback for up to five years post-completion to support program evaluation.' },
  ];

  const overviewStats = [
    { icon: DollarSign, label: 'Max Grant', value: '$20,000' },
    { icon: Target, label: 'Match Ratio', value: '1:1 / 50%' },
    { icon: Calendar, label: 'Open Window', value: '2025–2027' },
    { icon: MapPin, label: 'Service Area', value: 'Greater Sudbury' },
  ];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── PROGRAM OVERVIEW (light) ───── */}
        <section id="overview" className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">

            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center mb-14 md:mb-20">
              <div className="lg:col-span-7">
                <Eyebrow>About the Program</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Powering up<br /><span style={{ color: TEAL }}>Sudbury founders.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5" style={{ color: '#475068' }}>
                  The NORCAT Innovation Acceleration Program (IAP) empowers
                  early-stage SMEs with the funding required to expand product
                  development and strengthen market position across the Greater
                  Sudbury innovation ecosystem.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  Designed to alleviate the funding challenges faced by Northern
                  Ontario founders, IAP gives early teams a foundation of capital
                  to continue prospecting, growing, and promoting their business.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7387' }}>
                  Applications are open from <strong style={{ color: NAVY }}>2025 to 2027</strong>.
                  Approved projects must reach completion within <strong style={{ color: NAVY }}>6 months</strong> of approval.
                  <span className="block mt-2"><strong style={{ color: NAVY }}>Important:</strong> The IAP program is not available to anyone outside of the Greater Sudbury Region.</span>
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-[220px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <img src={iapLogo.url} alt="Innovation Acceleration Program (IAP)" className="max-h-32 md:max-h-40 max-w-full object-contain" />
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

        {/* ───── ELIGIBLE ACTIVITIES (dark) ───── */}
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
              <Eyebrow>Eligible Activities</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Two pillars<br />driving growth.
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                Projects must represent a new, high-impact strategic initiative aimed at advancing development and commercialization - not duplicating prior funded work and not already underway.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {[
                { pillar: 'Pillar 1', data: eligibleActivities.pillar1, icon: Layers },
                { pillar: 'Pillar 2', data: eligibleActivities.pillar2, icon: Cog },
              ].map((p) => (
                <article key={p.pillar} className="rounded-2xl p-8 md:p-10" style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <p.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: TEAL }}>{p.pillar}</p>
                  <h3 className="font-black uppercase text-xl md:text-2xl text-white mb-5" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {p.data.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {p.data.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FG_MUTED }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <h3 className="font-black uppercase text-2xl md:text-3xl text-white mb-6" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
              Eligible <span style={{ color: TEAL }}>project costs.</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {eligibleCosts.map((col) => (
                <article key={col.title} className="rounded-2xl p-8 h-full" style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <col.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <h4 className="font-black uppercase text-lg md:text-xl text-white mb-5" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {col.title}
                  </h4>
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

        {/* ───── ELIGIBILITY (light) ───── */}
        <section className="pt-20 pb-10 md:pt-32 md:pb-20" style={{ background: PAPER, color: NAVY }}>
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
                  <strong style={{ color: NAVY }}>Note:</strong> The IAP program is not available to applicants outside of the Greater Sudbury Region.
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

        {/* ───── PROGRAM REQUIREMENTS (timeline) ───── */}
        <section className="pt-10 pb-20 md:pt-20 md:pb-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Program Requirements</Eyebrow>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                What you'll need<br /><span style={{ color: TEAL }}>to participate.</span>
              </h2>
            </div>

            <div className="relative max-w-4xl">
              <div
                className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                style={{ background: `linear-gradient(180deg, ${TEAL} 0%, ${BLUE} 100%)` }}
              />

              <div className="space-y-8 md:space-y-10">
                {programRequirements.map((req, i) => (
                  <div key={i} className="relative flex gap-5 md:gap-8 items-start">
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

        {/* ───── FINAL CTA ───── */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow center>Your move</Eyebrow>
            <Rocket className="w-12 h-12 mx-auto mb-6" style={{ color: TEAL }} />
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
            >
              Ready to <span style={{ color: TEAL }}>accelerate?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <div className="rounded-2xl p-8 text-left" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <p className="text-sm font-semibold mb-4" style={{ color: '#475068' }}>Not yet a NORCAT Innovation client?</p>
                <Link
                  to="/validate-idea"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: NAVY, color: 'white' }}
                >
                  Submit your Discovery Document
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: NAVY }}>
                    <FileText className="w-4 h-4" />
                  </span>
                </Link>
              </div>
              <div className="rounded-2xl p-8 text-left" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <p className="text-sm font-semibold mb-4" style={{ color: '#475068' }}>Already a NORCAT client?</p>
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: 'white' }}
                >
                  Submit your IAP now
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <GrantFAQSection program="iap" />

        {/* ───── FUNDED BY ───── */}
        <section className="py-16" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-5 text-center" style={{ color: '#6b7387' }}>Funded by</p>
            <div className="max-w-md mx-auto rounded-xl p-6 flex items-center justify-center gap-5 min-h-[110px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
              <img src={canadaLogo} alt="Government of Canada" className="max-h-12 max-w-[120px] object-contain" />
              <img src={fednorFullLogo} alt="Federal Economic Development Agency for Northern Ontario" className="max-h-14 max-w-full object-contain" />
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default InnovationAccelerationProgram;
