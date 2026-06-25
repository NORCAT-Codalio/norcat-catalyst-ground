import { Link } from 'react-router-dom';
import { ArrowUpRight, Brain, Check, Send, Search, CheckCircle, DollarSign, Target, Cpu, XCircle, Layers, Cog, GraduationCap, Briefcase, ClipboardList } from 'lucide-react';
import { Layout } from '@/components/Layout';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';
import raiiLogo from '@/assets/logos/raii-logo.png.asset.json';
import fednorFullLogo from '@/assets/logos/fednor-full.png';

// ── Brand tokens (mirrors About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

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

const applicationSteps = [
  { step: '01', title: 'Apply', description: 'Submit application form; initial review within 2 business days.', icon: Send },
  { step: '02', title: 'Evaluation', description: 'Eligible applications reviewed by the Mentorship Committee.', icon: Search },
  { step: '03', title: 'Decision', description: 'Receive outcome within 1 month.', icon: CheckCircle },
];

const eligibilityCriteria = [
  'The applicant must be a NORCAT Innovation client',
  'Must be a growth-oriented and for-profit entity (registered sole proprietor, partnership, or corporation)',
  'Demonstrate a clear need for AI integration to enhance productivity, commercialization, and competitiveness',
  'Provide an AI commercialization or integration project proposal at TRL 7 or higher (prototype stage or beyond)',
];

const ineligibleActivities = [
  'Ongoing operating costs and administration',
  'Staff salaries or internal overhead',
  'Activities unrelated to AI integration or commercialization',
];

const eligibleActivities = {
  pillar1: {
    title: 'AI Productization and Commercialization',
    items: [
      'Technology demonstration and/or commercialization of Canadian-made AI technologies and solutions',
      'Business and capacity development supporting the scale-up of developing AI technologies and AI-driven solutions',
    ],
  },
  pillar2: {
    title: 'AI Adoption',
    items: [
      'Strategic AI adoption and integration of AI technologies and solutions that drive innovation, growth, and productivity',
      'Process re-engineering and capacity development for AI adoption',
    ],
  },
};

const eligibleCosts = {
  technologyCapital: [
    'AI servers, GPUs, and cloud infrastructure',
    'Software licenses, subscriptions, and data management platforms',
  ],
  trainingCommercialization: [
    'Specialized AI training for employees',
    'Pre-commercialization activities such as market validation and compliance preparation',
  ],
  professionalServices: [
    'AI solution design and development',
    'Consulting and implementation services',
    'Benchmarking, prototyping, and system testing',
  ],
};

const programRequirements = [
  { title: 'Client Intake & Discovery', description: 'The applicant must be a NORCAT Innovation client. If not, complete the Discovery Document Form.' },
  { title: 'Proposal Submission', description: 'Submit a proposal outlining the AI integration plan, your current TRL level, and business value.' },
  { title: 'Quotations for Project Work', description: 'Submit a minimum of two competitive quotes from independent and unrelated service providers with scope of work, hourly rate or total cost, and estimated hours required.' },
  { title: 'Project Feedback Requirements', description: 'Upon completion, submit a formal exit survey describing project impact on business operations, outcomes, or future plans.' },
  { title: 'Long-Term Reporting', description: 'Applicants may be contacted for follow-up feedback for up to five years post-completion.' },
];

const stats = [
  { number: '$20K', label: 'Maximum Grant', icon: DollarSign },
  { number: '50%', label: 'Matching Funds', icon: Target },
  { number: '1:1', label: 'Cost-Share Basis', icon: Cpu },
];

export default function RegionalAIProgram() {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>Funding & Capital</Eyebrow>
                <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                  Regional Artificial<br /><span style={{ color: TEAL }}>Intelligence Initiative.</span>
                </Display>
                <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Accelerate AI adoption with matching grants of up to $20,000 for SMEs in Northern Ontario looking to integrate AI technologies.
                </p>
                <Link to="/apply"
                      className="group mt-8 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                      style={{ fontFamily: FONT, background: TEAL, color: 'white' }}>
                  Apply Now
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="rounded-2xl p-8 md:p-10 backdrop-blur-sm w-full max-w-sm"
                     style={{ background: 'rgba(255,255,255,0.95)', border: `1px solid ${BORDER}` }}>
                  <img src={raiiLogo.url} alt="Regional Artificial Intelligence Initiative (RAII) logo"
                       className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── STATS STRIP ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4 pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <s.icon className="w-7 h-7 shrink-0" style={{ color: TEAL }} />
                  <div>
                    <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                    <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ABOUT THE PROGRAM (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>About the Program</Eyebrow>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Fueling <span style={{ color: TEAL }}>AI innovation</span> across <span style={{ color: NAVY }}>Northern Ontario.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  NORCAT Innovation proudly supports Greater Sudbury's small and medium-sized enterprises (SMEs) through targeted grant programs that fuel innovation, accelerate commercialization, and drive regional economic growth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Through the RAII program, eligible businesses can access matching funds of up to $20,000 per project on a 1:1 basis — helping local innovators bring bold, forward-thinking AI solutions to market with greater speed, efficiency, and impact.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: TEAL }}>Contribution Requirements</p>
                  <ul className="space-y-4">
                    {[
                      'Maximum financial assistance is 50% of approved Total Eligible Project Costs, up to $20,000 per SME',
                      'SME must pay service providers 100% of invoiced costs (including HST) prior to reimbursement',
                      '1:1 matching basis with your investment',
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: TEAL }} />
                        <span className="text-sm md:text-base" style={{ color: '#475068' }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── APPLICATION PROCESS (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Application Process</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                From application<br />to <span style={{ color: TEAL }}>approval.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {applicationSteps.map((s) => (
                <article key={s.step} className="rounded-2xl p-8 relative overflow-hidden"
                         style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <p className="font-black text-6xl mb-4" style={{ fontFamily: FONT, color: 'rgba(0,179,152,0.25)', letterSpacing: '-0.02em' }}>{s.step}</p>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                       style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <s.icon className="w-6 h-6" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl mb-3 text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ELIGIBILITY (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Eligibility
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Who qualifies<br /><span style={{ color: TEAL }}>and what doesn't.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,179,152,0.15)' }}>
                    <ClipboardList className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>Eligibility Criteria</h3>
                </div>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                      <span className="text-sm md:text-base" style={{ color: '#475068' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs uppercase tracking-[0.16em] font-bold" style={{ color: '#6b7387' }}>
                  Note: Retail and service-based businesses will not be considered under this program.
                </p>
              </div>

              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(220,38,38,0.10)' }}>
                    <XCircle className="w-5 h-5" style={{ color: '#dc2626' }} />
                  </div>
                  <h3 className="font-black uppercase text-xl" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>Ineligible Activities</h3>
                </div>
                <ul className="space-y-3">
                  {ineligibleActivities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                      <span className="text-sm md:text-base" style={{ color: '#475068' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───── ELIGIBLE ACTIVITIES (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #001a4d 0%, #003da5 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 20% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Eligible Activities</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Two pillars supporting<br /><span style={{ color: TEAL }}>AI innovation.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {[
                { pillar: 'Pillar 1', data: eligibleActivities.pillar1, icon: Layers },
                { pillar: 'Pillar 2', data: eligibleActivities.pillar2, icon: Cog },
              ].map((p) => (
                <article key={p.pillar} className="rounded-2xl p-8 md:p-10"
                         style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,179,152,0.18)' }}>
                      <p.icon className="w-5 h-5" style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: TEAL }}>{p.pillar}</p>
                      <h3 className="font-black uppercase text-lg md:text-xl text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{p.data.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {p.data.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                        <span className="text-sm" style={{ color: FG_MUTED }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="font-black uppercase text-2xl md:text-3xl text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                Eligible <span style={{ color: TEAL }}>project costs.</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: 'Technology & Capital', icon: Cpu, items: eligibleCosts.technologyCapital },
                { title: 'Training & Commercialization', icon: GraduationCap, items: eligibleCosts.trainingCommercialization },
                { title: 'Professional Services', icon: Briefcase, items: eligibleCosts.professionalServices },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-7"
                     style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <c.icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <h4 className="font-black uppercase text-base mb-4 text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{c.title}</h4>
                  <ul className="space-y-2">
                    {c.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: FG_MUTED }}>
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PROGRAM REQUIREMENTS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Program Requirements
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                What you'll need<br /><span style={{ color: TEAL }}>to participate.</span>
              </h2>
            </div>

            <div className="max-w-4xl space-y-4">
              {programRequirements.map((req, i) => (
                <div key={i} className="flex gap-6 p-6 md:p-7 rounded-2xl"
                     style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgba(0,179,152,0.15)' }}>
                    <span className="font-black" style={{ color: TEAL, fontFamily: FONT }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-base md:text-lg mb-1"
                        style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>{req.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: '#475068' }}>{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FUNDED BY ───── */}
        <section className="pt-10 pb-10 md:pt-12 md:pb-12" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: '#5b6478', fontFamily: FONT }}>Funded by</p>
              <div className="px-8 py-4 rounded-xl" style={{ background: 'white', border: '1px solid #e3e6ec' }}>
                <img src={fednorFullLogo} alt="Federal Economic Development Agency for Northern Ontario (FedNor)"
                     className="h-10 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow>Your move</Eyebrow>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Ready to <span style={{ color: TEAL }}>integrate AI?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Applications are now open for NORCAT Innovation's RAII Program. Take the first step toward AI-powered growth.
            </p>
            <Link to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: 'white' }}>
              Apply for Funding
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
