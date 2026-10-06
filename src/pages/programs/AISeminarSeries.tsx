import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import FinalCTA from '@/components/FinalCTA';
import {
  ArrowRight,
  Check,
  X,
  Clock,
  Users,
  MapPin,
  DollarSign,
  Target,
  BarChart3,
  Search,
  Boxes,
  Sparkles,
  CalendarDays,
  UserCheck,
} from 'lucide-react';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const GREY = '#6b7387';
const FONT = "'Open Sans', system-ui, sans-serif";

const REGISTER_URL =
  'https://forms.monday.com/forms/96101c7226756c5823ef48ec62b2ca7f?r=use1';

const RegisterButton = ({
  label = 'Join the Community',
  className = '',
}: {
  label?: string;
  className?: string;
}) => (
  <a
    href={REGISTER_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
    style={{
      fontFamily: FONT,
      background: `linear-gradient(135deg, ${TEAL} 0%, #003DA6 100%)`,
      boxShadow: '0 8px 24px -6px hsla(168,100%,35%,0.45)',
    }}
  >
    {label}
    <span className="inline-flex items-center justify-center size-7 rounded-full bg-white/20">
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </span>
  </a>
);

const Eyebrow = ({ children, color = GREY }: { children: React.ReactNode; color?: string }) => (
  <p
    className="inline-flex items-center text-sm font-semibold tracking-[0.18em] uppercase mb-5"
    style={{ fontFamily: FONT, color }}
  >
    {children}
  </p>
);

const AISeminarSeries = () => {
  const heroFacts = [
    { icon: Clock, label: '60-minute session' },
    { icon: Users, label: 'Limited seats' },
    { icon: MapPin, label: 'Greater Sudbury' },
    { icon: CalendarDays, label: 'Dates announced on registration' },
  ];

  const businessValue = [
    {
      icon: Search,
      title: 'Why your systems miss the obvious',
      body: 'Keyword search and legacy databases fail when the words differ but the meaning matches. See exactly why that costs you time in maintenance logs, quotes, invoices, and customer inquiries.',
    },
    {
      icon: Boxes,
      title: 'How the technology actually works',
      body: 'Embeddings, tokenization, and vector similarity explained in plain terms, with a live build of a working search engine over real content.',
    },
    {
      icon: Sparkles,
      title: 'What it takes to deploy it',
      body: 'Modern off-the-shelf models mean days of work, not months of custom training. Understand scope, cost drivers, and where the real effort sits.',
    },
    {
      icon: UserCheck,
      title: 'How to vet a vendor',
      body: 'Leave with the questions to ask, how to read competing quotes, and what architecture your business needs before committing capital.',
    },
  ];

  const agenda = [
    { group: 'Foundations', items: ['Setup', 'Embeddings', 'Tokenization', 'Vectors'] },
    { group: 'Implementation', items: ['The shortcut', 'Similarity scoring', 'Building the search engine'] },
    { group: 'Experimentation', items: ['Visualization', 'Model swap', 'Wrap-up', 'Live playground'] },
  ];

  const designedFor = [
    'Businesses registered and operating in the Greater Sudbury region',
    'Owners and operators with proprietary data or operational bottlenecks ready for AI',
    'Teams evaluating AI software, vendors, or quotes before spending',
    'Companies seeking non-dilutive matching funding of up to $20,000 through RAII',
  ];

  const notFor = [
    'General AI hobbyists without a business use case',
    'Generic AI copywriting or prompt-engineering enthusiasts',
    'Businesses without an operating presence in Northern Ontario',
    'Applicants expecting full funding without a matching contribution',
  ];

  const grantStats = [
    { icon: DollarSign, label: 'Max Grant', value: '$20,000' },
    { icon: Target, label: 'Match Ratio', value: '1:1 / 50%' },
    { icon: BarChart3, label: 'Eligibility', value: 'TRL 4+' },
  ];

  const upcoming = [
    {
      tag: 'Seminar 01',
      title: 'Semantic Search',
      body: 'Teaching computers to understand meaning — and where that changes your operations.',
      live: true,
    },
    {
      tag: 'Seminar 02',
      title: 'AI on Your Own Data',
      body: 'Putting company documents, manuals, and records to work with retrieval-based AI.',
      live: false,
    },
    {
      tag: 'Seminar 03',
      title: 'Vision & Edge AI',
      body: 'Cameras, sensors, and on-site intelligence for industrial and underground operations.',
      live: false,
    },
  ];

  return (
    <Layout>
      <div style={{ fontFamily: FONT }}>
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden" style={{ background: NAVY, color: 'white' }}>
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, hsla(168,100%,40%,0.20) 0%, transparent 65%)' }}
          />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <Eyebrow color={TEAL}>REGIONAL WORKSHOP &amp; ADOPTION SERIES</Eyebrow>
                <h1
                  className="font-black uppercase leading-[0.92] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Understand the technology.
                  <br />
                  <span style={{ color: TEAL }}>Modernize your business.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  At NORCAT Innovation, we see firsthand that modern ventures are built by three
                  distinct types of leaders: those who write the code, those who drive the business,
                  and those who do both.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  We also see that AI is fundamentally changing how businesses operate; whether you're a technical or non-technical founder, you don't have to navigate this shift alone.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  Together with regional software and education partners, we are demystifying
                  what’s possible with artificial intelligence, analyzing practical Canadian use
                  cases, and giving founders and their teams the confidence to pursue adoption and
                  productization.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <RegisterButton />
                  <a
                    href="#grant"
                    className="inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                    style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.28)' }}
                  >
                    About the $20,000 AI Grant
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {heroFacts.map((f) => (
                    <span key={f.label} className="inline-flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
                      <f.icon className="h-4 w-4" style={{ color: TEAL }} />
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className="rounded-[2rem] p-8 md:p-10"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: TEAL }}>
                    Seminar 01
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4">
                    Semantic Search: teaching computers to understand meaning
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    Search "tasty feline treats" and you'll miss a page titled "delicious cat food."
                    Exact-match search fails on meaning. In 60 minutes we show you what replaces it —
                    and what that unlocks inside your company.
                  </p>
                  <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Free to attend. Registration required — seats are limited.
                  </p>
                  <RegisterButton label="Register Now" className="w-full justify-center" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── WHAT YOU'LL TAKE AWAY ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <Eyebrow>What you'll take away</Eyebrow>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-12"
              style={{ color: BLUE, letterSpacing: '-0.02em' }}
            >
              Built for operators,
              <br />
              <span style={{ color: TEAL }}>not for hype.</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {businessValue.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl p-7 md:p-8 bg-white"
                  style={{ border: '1px solid rgba(0,26,77,0.08)', boxShadow: '0 12px 30px -20px rgba(0,26,77,0.35)' }}
                >
                  <span
                    className="inline-flex items-center justify-center size-11 rounded-xl mb-5"
                    style={{ background: 'rgba(0,179,152,0.12)' }}
                  >
                    <b.icon className="h-5 w-5" style={{ color: TEAL }} />
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#475068' }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── AGENDA ───── */}
        <section className="py-20 md:py-28" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <Eyebrow>The 60 minutes</Eyebrow>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-12"
              style={{ color: BLUE, letterSpacing: '-0.02em' }}
            >
              Eleven parts,
              <br />
              <span style={{ color: TEAL }}>one working build.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {agenda.map((a) => (
                <div key={a.group} className="rounded-2xl p-7" style={{ background: PAPER }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: TEAL }}>
                    {a.group}
                  </p>
                  <ul className="space-y-3">
                    {a.items.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#475068' }}>
                        <Check className="h-4 w-4 mt-1 shrink-0" style={{ color: TEAL }} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── QUALIFIER ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <Eyebrow>Is this for your business?</Eyebrow>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-12"
              style={{ color: BLUE, letterSpacing: '-0.02em' }}
            >
              Sudbury owners
              <br />
              <span style={{ color: TEAL }}>and operators.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl p-8 bg-white" style={{ border: `1.5px solid rgba(0,179,152,0.35)` }}>
                <h3 className="text-lg font-bold mb-6" style={{ color: TEAL }}>
                  Designed for
                </h3>
                <ul className="space-y-4">
                  {designedFor.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#475068' }}>
                      <Check className="h-5 w-5 mt-0.5 shrink-0" style={{ color: TEAL }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8 bg-white" style={{ border: '1.5px solid rgba(0,26,77,0.12)' }}>
                <h3 className="text-lg font-bold mb-6" style={{ color: GREY }}>
                  Not geared toward
                </h3>
                <ul className="space-y-4">
                  {notFor.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#475068' }}>
                      <X className="h-5 w-5 mt-0.5 shrink-0" style={{ color: GREY }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───── GRANT + CONSULT ───── */}
        <section id="grant" className="py-20 md:py-28" style={{ background: NAVY, color: 'white' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <Eyebrow color={TEAL}>Why we offer this free</Eyebrow>
                <h2
                  className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Register once,
                  <br />
                  <span style={{ color: TEAL }}>unlock the grant path.</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Every registrant can book a complimentary 30-minute consultation with NORCAT's AI
                  Lead. We review your use case, assess where it sits technically, and tell you
                  plainly whether it qualifies for the Regional Artificial Intelligence Initiative
                  (RAII) — a matching grant covering up to 50% of eligible project costs, to a
                  maximum of $20,000.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <RegisterButton label="Register & Book My Consult" />
                  <Link
                    to="/funding/regional-ai-program"
                    className="inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                    style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.28)' }}
                  >
                    Full RAII details
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid gap-4">
                {grantStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-5 rounded-2xl p-6"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <span
                      className="inline-flex items-center justify-center size-12 rounded-xl shrink-0"
                      style={{ background: 'rgba(0,179,152,0.16)' }}
                    >
                      <s.icon className="h-5 w-5" style={{ color: TEAL }} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {s.label}
                      </p>
                      <p className="text-2xl font-black">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── SERIES ROADMAP ───── */}
        <section className="py-20 md:py-28" style={{ background: 'white', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <Eyebrow>The series</Eyebrow>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-12"
              style={{ color: BLUE, letterSpacing: '-0.02em' }}
            >
              More sessions
              <br />
              <span style={{ color: TEAL }}>on the way.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {upcoming.map((u) => (
                <div
                  key={u.tag}
                  className="rounded-2xl p-7"
                  style={{
                    background: u.live ? 'rgba(0,179,152,0.06)' : PAPER,
                    border: u.live ? '1.5px solid rgba(0,179,152,0.35)' : '1px solid rgba(0,26,77,0.08)',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: u.live ? TEAL : GREY }}>
                      {u.tag}
                    </p>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        background: u.live ? TEAL : 'rgba(0,26,77,0.07)',
                        color: u.live ? 'white' : GREY,
                      }}
                    >
                      {u.live ? 'Open' : 'Coming soon'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{u.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475068' }}>
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA
          eyebrow="Seats are limited"
          title="Take the first step."
          titleAccent="Reserve your seat."
          body="Register for the AI Seminar Series and book your free 30-minute grant consultation with NORCAT's AI Lead."
          ctaLabel="Register Now"
          ctaHref={REGISTER_URL}
          secondaryLabel="Explore RAII Funding"
          secondaryHref="/funding/regional-ai-program"
        />
      </div>
    </Layout>
  );
};

export default AISeminarSeries;
