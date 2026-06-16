import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, DollarSign, Target, BarChart3, TrendingUp, Users, Briefcase, Coins, Globe, Rocket } from 'lucide-react';

// Portfolio company logos
import iregainedLogo from '@/assets/logos/iregained.png';
import vervLogo from '@/assets/logos/verv.png';
import rephealthLogo from '@/assets/logos/rephealth.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import myomarLogo from '@/assets/logos/myomar.png';
import codalioLogo from '@/assets/logos/codalio.png';
import waiveLogo from '@/assets/waive-logo.png.asset.json';

// Fund partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import nickelBasinLogo from '@/assets/logos/nickel-basin.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import scfLogo from '@/assets/logos/sudbury-catalyst-fund.png';

// Team headshots
import jasonSullivanImage from '@/assets/team/jason-sullivan.png';
import brendanScfImage from '@/assets/team/brendan-scf.png';

// Brand assets
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

const SudburyCatalystFund = () => {
  const portfolioCompanies = [
    { name: 'IRegained', logo: iregainedLogo },
    { name: 'Verv', logo: vervLogo },
    { name: 'Rep Health', logo: rephealthLogo },
    { name: 'Circuit IQ', logo: circuitiqLogo },
    { name: 'Kinmetrix', logo: kinmetrixLogo },
    { name: 'Myomar', logo: myomarLogo },
    { name: 'Codalio', logo: codalioLogo },
    { name: 'Waive', logo: waiveLogo.url },
  ];

  const investmentCriteria = [
    { icon: Briefcase, title: 'Sectors', description: 'Co-invest in early-stage tech across multiple sectors including mining tech, cleantech, AI, health, and more.' },
    { icon: Coins, title: 'Funding', description: 'Co-invest up to $250,000 on a 1:1 matching basis alongside angel investors and other funds.' },
    { icon: Globe, title: 'Geography', description: 'Must have commitment to operate majority of operations in Greater Sudbury.' },
    { icon: TrendingUp, title: 'Stage', description: 'Cumulative revenues and capital raised equating to less than $1M since company inception.' },
  ];

  const overviewStats = [
    { icon: DollarSign, label: 'Investment Size', value: '$25K – $250K' },
    { icon: Target, label: 'Focus', value: 'Seed Stage' },
    { icon: BarChart3, label: 'Portfolio', value: '7 Companies' },
    { icon: Zap, label: 'Decision Time', value: '4–6 Weeks' },
  ];

  const directors = [
    { name: 'Brendan Skiffington', role: 'Co-Managing Director', title: 'Chair, Investment Committee', image: brendanScfImage },
    { name: 'Jason Sullivan', role: 'Co-Managing Director', title: 'NBFDC', image: jasonSullivanImage },
  ];

  const committee = Array.from({ length: 6 }).map(() => ({ name: 'Committee Member', role: 'Investment Committee' }));

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
              <Eyebrow>Sudbury Catalyst Fund</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Early-stage capital,<br /><span style={{ color: TEAL }}>built for Sudbury.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Investment capital for innovative companies building transformative
                solutions in Northern Ontario.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                >
                  Apply for Funding
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

        {/* ───── FUND OVERVIEW (light) ───── */}
        <section id="overview" className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">

            {/* Heading */}
            <div className="max-w-3xl mb-14 md:mb-20">
              <Eyebrow>Fund Overview</Eyebrow>
              <h2
                className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
              >
                Capital for founders<br /><span style={{ color: TEAL }}>solving big problems.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#475068' }}>
                The Sudbury Catalyst Fund provides critical early-stage capital to
                high-potential startups with a connection to Northern Ontario. We invest
                in founders solving big problems with innovative technology.
              </p>
            </div>

            {/* Featured stats — 3 big cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-14 md:mb-20">
              <div
                className="rounded-2xl p-8 md:p-10 text-center"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, border: `1px solid ${BORDER}` }}
              >
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>$5M</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'rgba(255,255,255,0.75)' }}>In Deployable Capital</p>
              </div>
              <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>$3M</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#6b7387' }}>Deployed To Date</p>
              </div>
              <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-3" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>60+</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#6b7387' }}>Jobs Created in Sudbury</p>
              </div>
            </div>

            {/* Detail stats — horizontal bar */}
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

            {/* Portfolio logos */}
            <div className="mt-16 md:mt-20">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#6b7387' }}>Portfolio Companies</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {portfolioCompanies.map((c) => (
                  <div
                    key={c.name}
                    className="aspect-[3/2] rounded-lg flex items-center justify-center p-4 transition hover:-translate-y-0.5"
                    style={{ background: 'white', border: '1px solid #e3e6ec' }}
                  >
                    <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── INVESTMENT CRITERIA (dark) ───── */}
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
              <Eyebrow>Investment Criteria</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                What we look<br />for in founders.
              </Display>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {investmentCriteria.map((c) => (
                <article
                  key={c.title}
                  className="group relative rounded-2xl p-8 transition-colors h-full"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <c.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <h3
                    className="font-black uppercase text-xl md:text-2xl text-white mb-3"
                    style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{c.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── ABOUT THE FUND (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <Eyebrow>About the Fund</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
                >
                  A <span style={{ color: TEAL }}>$5M</span> venture<br />capital fund.
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  The Sudbury Catalyst Fund (SCF) is a unique $5 million venture capital fund
                  administered by the Nickel Basin Federal Development Corporation in collaboration
                  with the City of Greater Sudbury, FedNor, and NORCAT.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  Established to accelerate the growth of scalable tech start-ups, the SCF brings
                  together a variety of partners and angel investors eager to build Northern
                  Ontario's entrepreneurial ecosystem by investing in and supporting a diversified
                  portfolio of high-growth companies.
                </p>
              </div>

              <div className="lg:col-span-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: '#6b7387' }}>Administered by & in collaboration with</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl p-6 flex items-center justify-center min-h-[110px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <img src={nickelBasinLogo} alt="Nickel Basin Federal Development Corporation" className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="rounded-xl p-6 flex items-center justify-center min-h-[110px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <img src={sudburyLogo} alt="City of Greater Sudbury" className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="col-span-2 rounded-xl p-6 flex items-center justify-center min-h-[110px]" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <img src={fednorLogo} alt="Federal Economic Development Agency for Northern Ontario" className="max-h-14 max-w-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── LEADERSHIP TEAM (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <Eyebrow>Leadership Team</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
                >
                  Guiding investments<br /><span style={{ color: TEAL }}>in Sudbury's future.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base md:max-w-sm leading-relaxed" style={{ color: '#5b6478' }}>
                Experienced leaders working alongside founders, angel investors, and partners
                to grow Northern Ontario's most promising companies.
              </p>
            </div>

            {/* Directors */}
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
              {directors.map((d) => (
                <div
                  key={d.name}
                  className="text-center rounded-2xl p-8"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-24 h-24 mx-auto mb-5 rounded-full object-cover"
                      style={{ border: `3px solid ${TEAL}` }}
                    />
                  ) : (
                    <div
                      className="w-24 h-24 mx-auto mb-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(0,179,152,0.15)' }}
                    >
                      <Users className="w-12 h-12" style={{ color: TEAL }} />
                    </div>
                  )}
                  <h3 className="text-xl font-black uppercase mb-1" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    {d.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1" style={{ color: TEAL, fontFamily: FONT }}>
                    {d.role}
                  </p>
                  {d.title && <p className="text-sm" style={{ color: '#5b6478' }}>{d.title}</p>}
                </div>
              ))}
            </div>

            {/* Investment Committee */}
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: '#6b7387' }}>Investment Committee</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {committee.map((m, i) => (
                <div
                  key={i}
                  className="text-center rounded-xl p-5"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,179,152,0.12)' }}
                  >
                    <Users className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <p className="font-bold text-sm" style={{ color: NAVY }}>{m.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold mt-1" style={{ color: '#6b7387' }}>{m.role}</p>
                </div>
              ))}
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
              Ready to scale<br /><span style={{ color: TEAL }}>your venture?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              If you're building transformative technology and are committed to growing
              in Northern Ontario, we want to hear from you.
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

export default SudburyCatalystFund;
