import { Link } from 'react-router-dom';

import {
  ArrowUpRight,
  DollarSign,
  FileText,
  PieChart,
  TrendingUp,
  Check,
} from 'lucide-react';

import { Layout } from '@/components/Layout';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import FinalCTA from "@/components/FinalCTA";

// ── Brand tokens (mirrors Venture Growth Services / About / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const capitalServices = [
  { icon: FileText, title: 'Grant Writing Support', desc: 'Expert assistance with government funding applications including SR&ED, IRAP, and provincial programs.' },
  { icon: PieChart, title: 'Investment Readiness', desc: 'Prepare your pitch deck, financial models, and data room for investor conversations.' },
  { icon: DollarSign, title: 'Funding Strategy', desc: 'Develop a comprehensive capital strategy aligned with your growth milestones.' },
  { icon: TrendingUp, title: 'Investor Introductions', desc: 'Connect with our network of angel investors, VCs, and strategic partners.' },
];

const fundingTypes = [
  { label: 'Grants', desc: 'Non-repayable funds' },
  { label: 'Loans', desc: 'Flexible financing' },
  { label: 'Tax Rebates', desc: 'Reduce tax burden' },
  { label: 'Investors', desc: 'Angel & VC capital' },
];

const stats = [
  { number: '$150M+', label: 'Capital Raised' },
  { number: '85%', label: 'Grant Success Rate' },
  { number: '50+', label: 'Investor Partners' },
];

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`inline-flex items-center text-sm font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
    style={{ fontFamily: FONT, color: TEAL }}
  >
    {children}
  </p>
);

const Display = ({ children, className = '', light = false, as: As = 'h2' as any }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: light ? NAVY : 'white' }}
  >
    {children}
  </As>
);

export default function CapitalNavigation() {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden flex items-center py-16 md:py-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)',
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
              <Eyebrow className="!text-white">Programs</Eyebrow>
              <Display as="h1" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Capital<br /><span style={{ color: TEAL }}>Navigation.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl leading-snug max-w-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Funding your venture shouldn't feel like guesswork.
              </p>
              <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
                Navigate the complex landscape of startup funding with expert guidance on government grants,
                venture capital, and strategic investment.
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: 'rgba(0, 179, 152, 0.8)', color: 'white' }}
                >
                  Get Started
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
                <a
                  href="https://investsudbury.ca/incentives-and-programs/funding-and-incentives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-colors"
                  style={{ fontFamily: FONT, color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}
                >
                  Explore Funding Programs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── OUR SERVICES (light) ───── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: PAPER, color: NAVY }}
        >
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Our Services</Eyebrow>
              <Display light className="text-3xl sm:text-4xl md:text-5xl">
                Expert guidance<br /><span style={{ color: TEAL }}>at every stage.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {capitalServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl p-7 md:p-8 flex gap-5 transition-transform hover:-translate-y-1"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div
                    className="size-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,179,152,0.10)', border: `1px solid ${TEAL}` }}
                  >
                    <service.icon className="size-5" style={{ color: TEAL }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3
                      className="text-lg md:text-xl font-bold leading-tight mb-2"
                      style={{ fontFamily: FONT, color: NAVY }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm md:text-base font-light leading-relaxed"
                      style={{ color: 'rgba(0,26,77,0.72)', fontFamily: FONT }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── INVEST SUDBURY PORTAL (light) ───── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: 'white', color: NAVY }}
        >
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>External Resource</Eyebrow>
              <Display light className="text-3xl sm:text-4xl md:text-5xl">
                Invest Sudbury<br /><span style={{ color: TEAL }}>Funding &amp; Incentives.</span>
              </Display>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(0,26,77,0.72)', fontFamily: FONT }}>
                Explore the official Greater Sudbury funding directory to find municipal, provincial, and federal
                programs matched to your business stage.
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-10 grid lg:grid-cols-12 gap-7 lg:gap-10 items-start"
              style={{ background: 'linear-gradient(135deg, #F4FAF9 0%, #FFFFFF 100%)', border: '1px solid rgba(0,179,152,0.25)' }}
            >
              <div className="lg:col-span-7">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: FONT, color: NAVY }}>
                  Search the <span style={{ color: TEAL }}>Funding Directory</span>
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(0,26,77,0.72)', fontFamily: FONT }}>
                  The Invest Sudbury portal features a searchable directory of grants, loans, tax incentives, and
                  investor programs available to businesses in Sudbury and Northern Ontario.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {[
                    'Filter by business stage and funding type',
                    'Find grants, loans, tax rebates, and VC options',
                    'Access local and regional program details',
                    'Connect with the Greater Sudbury Economic Development team',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TEAL }} />
                      <span className="text-sm" style={{ color: 'rgba(0,26,77,0.80)', fontFamily: FONT }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://investsudbury.ca/incentives-and-programs/funding-and-incentives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: 'rgba(0, 179, 152, 0.8)', color: 'white' }}
                >
                  Open Funding Portal
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </a>
              </div>

              <div className="lg:col-span-5 lg:pl-8 lg:border-l" style={{ borderColor: 'rgba(0,179,152,0.20)' }}>
                <div className="grid grid-cols-2 gap-4">
                  {fundingTypes.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl p-5 text-center"
                      style={{ background: 'white', border: '1px solid #d9dde5' }}
                    >
                      <div className="text-xl font-black mb-1" style={{ fontFamily: FONT, color: NAVY }}>{item.label}</div>
                      <p className="text-xs" style={{ color: 'rgba(0,26,77,0.60)', fontFamily: FONT }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── STATS (dark) ───── */}
        <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: NAVY }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, rgba(0,179,152,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(47,111,214,0.12), transparent 50%)',
            }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: FONT, color: TEAL }}>
                    {stat.number}
                  </div>
                  <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.78)', fontFamily: FONT }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA ───── */}
        <FinalCTA
          eyebrow="Capital Navigation"
          title="Ready to raise"
          titleAccent="capital?"
          body="Let us help you navigate your funding journey."
          ctaLabel="Apply Now"
          ctaHref="/apply"
        />
      </div>
    </Layout>
  );
}
