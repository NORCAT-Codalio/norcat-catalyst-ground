import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import SectionEyebrow from '@/components/SectionEyebrow';
import { Cpu, Layers, ShieldCheck, ArrowRight, Sparkles, Brain, Banknote, Rocket, DollarSign } from 'lucide-react';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '', center = false }: any) => (
  <div className={`${center ? 'flex justify-center' : ''} ${className}`}>
    <SectionEyebrow>{children}</SectionEyebrow>
  </div>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

const programs = [
  {
    icon: Cpu,
    name: 'Critical Industrial Technologies',
    tag: 'Tough-Tech',
    description: 'Build, test, and validate advanced technologies for mining, manufacturing, construction, and industrial sectors with real-world testing infrastructure.',
    href: '/mining/critical-industrial-tech',
  },
  {
    icon: Layers,
    name: 'Core5',
    tag: 'BEV / EV',
    description: 'The OVIN Northern Regional Technology Development Site supporting startups and SMEs across the full battery and electric vehicle value chain.',
    href: '/mining/core5',
  },
  {
    icon: ShieldCheck,
    name: 'Rogers Cybersecure Catalyst',
    tag: 'Cybersecurity',
    description: 'A national partnership delivering cybersecurity training, assessments, and mentorship tailored to mining and industrial companies.',
    href: '/partners/rogers-cybersecure',
  },
  {
    icon: DollarSign,
    name: 'Funding Programs',
    tag: 'Capital',
    description: 'Non-dilutive grants, seed capital, and dedicated funding streams for mining, industrial, and EV ventures scaling out of Northern Ontario.',
    href: '/funding',
  },
];

const fundingPathways = [
  {
    icon: Sparkles,
    name: 'Innovation Acceleration Program',
    tag: 'Non-dilutive',
    description: 'Funding to accelerate market entry for high-growth ventures across Northern Ontario.',
    href: '/funding/innovation-acceleration-program',
  },
  {
    icon: Brain,
    name: 'Regional Artificial Intelligence Program',
    tag: 'AI Ventures',
    description: 'Capital, compute, and support for AI-driven ventures scaling out of the region.',
    href: '/funding/regional-ai-program',
  },
  {
    icon: Banknote,
    name: 'Sudbury Catalyst Fund',
    tag: 'Seed Capital',
    description: '$3M early-stage fund co-investing up to $250K alongside qualified angel investors.',
    href: '/funding/sudbury-catalyst-fund',
  },
];

const Programs = () => {
  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* HERO */}
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
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow><Rocket className="w-3.5 h-3.5" />Programs & Pathways</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Built to Scale<br /><span style={{ color: TEAL }}>Tough-Tech.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                NORCAT Innovation runs targeted programs for industrial, mining, and cybersecurity ventures - each designed to move founders from concept to commercialization with the right mix of capital, infrastructure, and mentorship.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/portal/auth"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                      style={{ background: TEAL, color: NAVY }}>
                  Become a Client <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS OVERVIEW */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL }}>Our Programs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Four pathways. One mission.
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(0,26,77,0.7)' }}>
                Specialized front doors for ventures building in critical industrial technology, battery and EV, cybersecurity - plus a dedicated funding stream to fuel the journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Link
                    key={program.name}
                    to={program.href}
                    className="group relative flex flex-col rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200/60 shadow-sm hover:shadow-xl"
                  >
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,179,152,0.1)', color: TEAL }}>
                      {program.tag}
                    </span>
                    <div className="flex items-center justify-between mb-6 mt-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,179,152,0.1)' }}>
                        <Icon className="w-6 h-6" style={{ color: TEAL }} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: FONT }}>{program.name}</h3>
                    <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: 'rgba(0,26,77,0.7)' }}>
                      {program.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: TEAL }}>
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FUNDING PATHWAYS */}
        <section className="py-20 md:py-28" style={{ background: NAVY, color: 'white' }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL }}>Funding Pathways</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-6" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Capital for what's next.
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Programs open the door. Funding keeps you moving. From non-dilutive grants to seed equity, NORCAT Innovation connects the right capital to the right ventures at the right time.
                </p>
                <Link to="/funding"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                      style={{ background: TEAL, color: NAVY }}>
                  View All Funding <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {fundingPathways.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group relative flex items-start gap-4 p-5 pt-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,179,152,0.15)', color: TEAL }}>
                        {item.tag}
                      </span>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(0,179,152,0.15)' }}>
                        <Icon className="w-5 h-5" style={{ color: TEAL }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-base" style={{ fontFamily: FONT }}>{item.name}</h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" style={{ color: TEAL }} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 10% 50%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 90% 50%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-6" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
              Not sure which path fits?
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Tell us what you're building and we'll map you to the right program, funding stream, and mentor network.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/portal/auth"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                    style={{ background: TEAL, color: NAVY }}>
                Become a Client <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/funding"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10">
                Explore Funding <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Programs;
