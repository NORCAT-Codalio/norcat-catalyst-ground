import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  AlertTriangle,
  TrendingUp,
  Handshake,
  Shield,
  Target,
  Star,
  Zap,
  Compass,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Presentation,
  Sparkles,
  Crown,
} from 'lucide-react';
import noaLogo from '@/assets/logos/northern-ontario-angels.png';
import vnpBackground from '@/assets/vnp-background.png';
import vnpLogo from '@/assets/logos/venture-north-pitch.png';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Home2 / IAP / RAII) ──
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

const InvestorHub = () => {
  const capitalPlaybook = [
    { step: '01', title: 'Revenue-Led Growth', desc: 'Build a durable business with sustainable unit economics, not growth at all costs.', icon: TrendingUp },
    { step: '02', title: 'Strategic Partnerships', desc: 'Establish enterprise partnerships early for validation, revenue, and strategic value.', icon: Handshake },
    { step: '03', title: 'Non-Dilutive Funding', desc: 'Navigate grants, SR&ED, and government programs with intentional capital strategy.', icon: Shield },
    { step: '04', title: 'Right Capital, Right Time', desc: 'When equity makes sense, connect with investors aligned to your stage and vision.', icon: Target },
  ];

  const realityStats = [
    { value: '$2.1B', label: 'Raised in 2025', sublabel: 'Lowest since 2016' },
    { value: '83%', label: 'To Top 5 Funds', sublabel: 'Capital concentration' },
    { value: '42%', label: 'For New Startups', sublabel: 'Rest held in reserve' },
    { value: '$249M', label: 'Emerging Managers', sublabel: 'Record low' },
  ];

  const noaStats = [
    { value: '50+', label: 'Active Investors' },
    { value: '$250M+', label: 'Invested' },
    { value: '40+', label: 'Portfolio Companies' },
    { value: '20+', label: 'Years Active' },
  ];

  const pitchEvents = [
    { icon: Users, title: 'Curated Audience', desc: 'Present to engaged investors actively looking to deploy capital in the region.' },
    { icon: Presentation, title: 'Pitch Coaching', desc: 'Receive expert coaching and feedback to refine your presentation before the event.' },
    { icon: Sparkles, title: 'Direct Introductions', desc: 'Get warm introductions to investors aligned with your stage and sector.' },
  ];

  const vnpStats = [
    { value: '11', label: 'Years of VNP' },
    { value: '250+', label: 'Attendees' },
    { value: '$350K', label: 'In Prizes Awarded' },
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
              <p
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', color: '#fbbf24', fontFamily: FONT }}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                The Capital Landscape Has Changed
              </p>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                The New<br />
                <span style={{ color: TEAL }}>Capital Playbook.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The capital environment founders were trained for no longer exists.
                This isn't a market correction — it's a structural shift. We help
                you navigate the new era of raising capital.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                >
                  Navigate Your Path
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
                <a
                  href="#new-playbook"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-colors"
                  style={{ border: `1px solid ${BORDER}`, color: 'white', fontFamily: FONT }}
                >
                  Learn the New Playbook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───── THE REALITY (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <p
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                  style={{ background: 'rgba(245,158,11,0.12)', color: '#b45309', fontFamily: FONT }}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  The Reality
                </p>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  2025: The worst year<br /><span style={{ color: TEAL }}>for Canadian VC since 2016.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  Only $2.1B raised by 21 funds — the lowest since 2016. 83% of capital
                  concentrated in Canada's five largest funds. Emerging managers at record
                  lows. LPs pulling back due to lack of exits.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  This isn't a downturn. It's a fundamental restructuring of how capital
                  flows. The playbook that worked in 2021 won't work today. Founders need
                  a new approach.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  {realityStats.map((s) => (
                    <div key={s.label} className="p-6 md:p-7 rounded-2xl" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                      <div className="font-black text-3xl md:text-4xl mb-2" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>{s.value}</div>
                      <p className="text-sm font-bold" style={{ color: NAVY }}>{s.label}</p>
                      <p className="text-xs mt-1" style={{ color: '#6b7387' }}>{s.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── THE NEW PLAYBOOK (dark) ───── */}
        <section
          id="new-playbook"
          className="py-20 md:py-32 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)` }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>The New VC Playbook</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Capital navigation<br /><span style={{ color: TEAL }}>for the new era.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                We don't just help you raise investment — we help you build a durable
                company. Revenue-led growth, strategic partnerships, intentional
                non-dilutive funding. We explore all options and guide you forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capitalPlaybook.map((item) => (
                <article
                  key={item.step}
                  className="group relative rounded-2xl p-8 h-full overflow-hidden transition-transform hover:-translate-y-1"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div className="font-black text-5xl mb-6" style={{ color: 'rgba(0,179,152,0.35)', fontFamily: FONT, letterSpacing: '-0.02em' }}>{item.step}</div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,179,152,0.18)' }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl text-white mb-3" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── NORTHERN ONTARIO ANGELS (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: FONT, color: TEAL }}>
                  <Star className="w-3.5 h-3.5" />
                  Strategic Partner
                </p>
                <div className="rounded-xl p-5 mb-6 inline-block" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                  <img src={noaLogo} alt="Northern Ontario Angels" className="h-10 md:h-12 object-contain" />
                </div>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
                >
                  Connecting founders<br /><span style={{ color: TEAL }}>to active capital.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#475068' }}>
                  Our exclusive partnership with Northern Ontario Angels connects
                  investment-ready founders with a network of active angel investors
                  across the region.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Access to 50+ accredited angel investors',
                    'Private pitch sessions with investor feedback',
                    'Syndicated investment opportunities',
                    'Ongoing mentorship from successful entrepreneurs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="size-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0,179,152,0.15)' }}>
                        <Zap className="w-3 h-3" style={{ color: TEAL }} />
                      </span>
                      <span className="text-sm md:text-base" style={{ color: '#2a3245' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://noangels.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: 'white', fontFamily: FONT }}
                >
                  Learn About NOA
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </a>
              </div>

              <div className="lg:col-span-6">
                <div
                  className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`, border: `1px solid ${BORDER}` }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.25), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.20), transparent 50%)`,
                  }} />
                  <div className="relative grid grid-cols-2 gap-4">
                    {noaStats.map((s) => (
                      <div key={s.label} className="text-center p-5 md:p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="font-black text-4xl md:text-5xl mb-2" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>{s.value}</div>
                        <p className="text-xs uppercase tracking-[0.16em] font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── PRIVATE PITCH EVENTS (dark) ───── */}
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
              <Eyebrow>Exclusive Access</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Private<br /><span style={{ color: TEAL }}>pitch events.</span>
              </Display>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: FG_MUTED }}>
                Invitation-only pitch sessions connecting our top portfolio companies
                with Northern Ontario Angels and select investors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {pitchEvents.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl p-8 h-full transition-transform hover:-translate-y-1"
                  style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,179,152,0.18)' }}>
                    <item.icon className="w-7 h-7" style={{ color: TEAL }} />
                  </div>
                  <h3 className="font-black uppercase text-xl text-white mb-3" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── VENTURE NORTH PITCH — Flagship Event (VNA style) ───── */}
        <section
          id="venture-north"
          className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[80vh] flex items-center"
        >
          {/* Hero image with brand tint, mirroring Venture North Accelerator */}
          <div className="absolute inset-0">
            <img
              src={vnpBackground}
              alt="Founder pitching live at Venture North PITCH"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0" style={{ background: 'hsl(220 60% 10% / 0.55)', mixBlendMode: 'multiply' }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,26,77,0.70) 0%, rgba(0,26,77,0.40) 40%, rgba(0,26,77,0.95) 100%)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, rgba(0,26,77,1) 0%, rgba(0,26,77,0.55) 55%, transparent 100%)` }} />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                style={{ fontFamily: FONT, color: TEAL }}
              >
                <span className="size-1.5 rounded-full bg-current animate-pulse" />
                <Crown className="w-3.5 h-3.5" />
                Flagship Event · Thursday, October 1, 2026 · Sudbury, ON
              </p>

              <h2 className="mb-6">
                <span className="sr-only">Venture North PITCH</span>
                <img
                  src={vnpLogo}
                  alt="Venture North PITCH"
                  className="h-auto w-full max-w-[18rem] sm:max-w-md md:max-w-2xl lg:max-w-[34rem] object-contain"
                />
              </h2>

              <p className="mt-5 md:mt-7 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Northern Ontario's premier pitch event. Think Dragon's Den, but for the
                innovators building the future of our region — connecting bold founders
                with the investors, partners, and capital ready to back what's next.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center justify-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                >
                  Apply to Compete
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
                  style={{ border: `1px solid ${TEAL}66`, color: 'white', fontFamily: FONT }}
                >
                  View Past Events
                </Link>
              </div>

              {/* Event meta */}
              <div className="mt-10 hidden md:grid grid-cols-3 gap-6 border-y py-7" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <div className="flex items-center gap-4">
                  <Calendar className="size-7" style={{ color: TEAL }} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: FONT }}>Date</p>
                    <p className="text-base md:text-lg font-semibold text-white">October 1, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="size-7" style={{ color: TEAL }} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: FONT }}>Venue</p>
                    <p className="text-base md:text-lg font-semibold text-white">Collège Boréal, Sudbury</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Trophy className="size-7" style={{ color: TEAL }} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: FONT }}>Prize Pool</p>
                    <p className="text-base md:text-lg font-semibold text-white">$15,000 in Awards</p>
                  </div>
                </div>
              </div>

              {/* Stats — VNA border-left treatment */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {vnpStats.map((s) => (
                  <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                    <p className="font-black text-3xl md:text-4xl" style={{ color: TEAL, fontFamily: FONT, letterSpacing: '-0.02em' }}>{s.value}</p>
                    <p className="text-xs mt-1 leading-tight" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-20 md:pt-32 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow center>Your move</Eyebrow>
            <Compass className="w-12 h-12 mx-auto mb-6" style={{ color: TEAL }} />
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
            >
              Ready to navigate<br /><span style={{ color: TEAL }}>the new era?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Whether you're exploring non-dilutive funding, building strategic
              partnerships, or preparing for the right investor conversation — we're
              here to help you find the best path for your company.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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
              <Link
                to="/programs/capital-navigation"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
                style={{ border: `1px solid ${NAVY}33`, color: NAVY, fontFamily: FONT }}
              >
                Explore Capital Navigation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default InvestorHub;
