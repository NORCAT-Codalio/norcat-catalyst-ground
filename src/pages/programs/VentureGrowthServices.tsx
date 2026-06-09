import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Target,
  Compass,
  Zap,
  Quote,
  DollarSign,
  Building2,
  Clock,
  MapPin,
} from 'lucide-react';

import { Layout } from '@/components/Layout';
import { ServicesExplorer, AudienceTabs, type Audience } from '@/components/ServicesExplorer';
import lukeBegleyPhoto from '@/assets/testimonials/luke-begley.png';
import signatureLines from '@/assets/signature-lines.png';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const allServices = [
  { type: 'Program', title: 'Venture Growth Services', duration: 'Ongoing', location: 'Greater Sudbury (Virtual Available)', link: '/programs/venture-growth-services' },
  { type: 'Program', title: 'Mentorship Services', duration: '12+ Month Journey', location: 'Northern Ontario', link: '/programs/mentorship-services' },
  { type: 'Program', title: 'Capital Navigation', duration: 'Ongoing', location: 'Greater Sudbury', link: '/programs/capital-navigation' },
  { type: 'Program', title: 'Critical Industrial Tech', duration: 'Ongoing', location: 'Greater Sudbury', link: '/mining/critical-industrial-tech' },
  { type: 'Funding', title: 'Sudbury Catalyst Fund', duration: '$5M Fund', location: 'Greater Sudbury', link: '/funding/sudbury-catalyst-fund' },
  { type: 'Funding', title: 'Innovation Acceleration Program', duration: 'Up to $50K', location: 'Greater Sudbury', link: '/funding/innovation-acceleration-program' },
  { type: 'Funding', title: 'Regional AI Program', duration: 'Variable', location: 'Northern Ontario', link: '/funding/regional-ai-program' },
  { type: 'Facility', title: 'NORCAT Underground Centre', duration: 'On-Demand', location: 'Onaping, ON', link: '/mining/norcat-underground' },
  { type: 'Facility', title: 'Labs & Facilities', duration: 'Flexible Access', location: 'Greater Sudbury', link: '/mining/labs' },
];

const programStructure = [
  { phase: '01', title: 'Onboarding', description: 'Deep dive into your business, assign your advisor, and create a tailored growth plan.' },
  { phase: '02', title: 'Build & Validate', description: 'Work with your mentorship team on product-market fit and early traction.' },
  { phase: '03', title: 'Scale & Raise', description: 'Focus on growth metrics, team building, and fundraising preparation.' },
  { phase: '04', title: 'Ongoing Support', description: 'Continued access to network, resources, and advisor support as you scale.' },
];

const differentiators = [
  { icon: Compass, title: 'Hands-On, Not Hands-Off', description: "We roll up our sleeves and work alongside you. This isn't passive mentorship — it's active partnership in your success." },
  { icon: Target, title: 'Industry-Connected', description: 'Deep relationships with mining, industrial, and technology sectors mean real customer introductions, not just advice.' },
  { icon: Zap, title: 'Northern Advantage', description: "Access to unique infrastructure like the NORCAT Underground Centre, embedded within one of Canada's most established mining ecosystems." },
];

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p
    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
    style={{ fontFamily: FONT, color: light ? TEAL : TEAL }}
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

export default function VentureGrowthServices() {
  const [activeAudience, setActiveAudience] = useState<Audience>('Startup Support');

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
              <Eyebrow>Core Program</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Venture Growth<br /><span style={{ color: TEAL }}>Services.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The operating system for ambitious founders. Hands-on support, education, network,
                and resources to build a category-defining company.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
                We work alongside you to find customers, raise capital, build teams, and navigate the challenges of scaling.
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <Link
                  to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: NAVY }}
                >
                  Apply to NORCAT Innovation
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
                <Link
                  to="/insights/success-stories"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-colors"
                  style={{ fontFamily: FONT, color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}
                >
                  See Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── SERVICES EXPLORER (light) ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  What's Included
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Everything you need<br /><span style={{ color: TEAL }}>to accelerate.</span>
                </h2>
              </div>
              <AudienceTabs active={activeAudience} onChange={setActiveAudience} />
            </div>

            <ServicesExplorer activeAudience={activeAudience} />
          </div>
        </section>

        {/* ───── HOW IT WORKS (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)',
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Your Journey</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                How it<br /><span style={{ color: TEAL }}>works.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:pt-32">
              {programStructure.map((phase) => {
                const isScale = phase.phase === '03';
                return (
                  <article
                    key={phase.phase}
                    className={`group relative rounded-2xl p-7 transition-transform hover:-translate-y-1 ${isScale ? 'overflow-visible' : 'overflow-hidden'}`}
                    style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                  >
                    {isScale && (
                      <div className="pointer-events-none absolute left-0 right-0 bottom-full h-[120px]">
                        {/* Step 1 (shortest, left third) */}
                        <div
                          className="absolute bottom-0 left-0 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '40px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, transitionDelay: '0ms' }}
                        />
                        {/* Step 2 (middle third) */}
                        <div
                          className="absolute bottom-0 left-1/3 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '70px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, transitionDelay: '140ms' }}
                        />
                        {/* Step 3 (tallest, right third) */}
                        <div
                          className="absolute bottom-0 left-2/3 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '100px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, transitionDelay: '280ms' }}
                        />
                        {/* Money bag drops onto top step */}
                        <div
                          className="absolute left-2/3 w-1/3 flex items-end justify-center opacity-0 -translate-y-24 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                          style={{
                            bottom: '100px',
                            height: '56px',
                            transitionDelay: '720ms',
                            transitionTimingFunction: 'cubic-bezier(0.5, 1.8, 0.5, 1)',
                          }}
                        >
                          <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
                            <path d="M22 14 L42 14 L46 22 L18 22 Z" fill="#5a3a1a" />
                            <path
                              d="M18 22 Q8 36 12 48 Q16 58 32 58 Q48 58 52 48 Q56 36 46 22 Z"
                              fill={TEAL}
                              stroke="#003d33"
                              strokeWidth="1.5"
                            />
                            <text
                              x="32" y="46" textAnchor="middle"
                              fontFamily="Arial Black, sans-serif" fontWeight="900"
                              fontSize="20" fill="#003d33"
                            >$</text>
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="font-black text-5xl mb-4" style={{ color: TEAL, opacity: 0.35, fontFamily: FONT, letterSpacing: '-0.02em' }}>
                      {phase.phase}
                    </div>
                    <h3 className="font-black uppercase text-lg md:text-xl text-white mb-2"
                        style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{phase.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{phase.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── TESTIMONIAL ───── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={circuitiqTeam} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(0,12,38,0.82)' }} />
          </div>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Quote className="w-10 h-10 mx-auto mb-8" style={{ color: TEAL, opacity: 0.6 }} />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/90 mb-10"
                        style={{ fontFamily: FONT }}>
              "The unwavering support we have received from the Sudbury Catalyst Fund and NORCAT has been
              instrumental in our decision to relocate our team to Sudbury."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img src={lukeBegleyPhoto} alt="Luke Begley"
                   className="w-14 h-14 rounded-full object-cover"
                   style={{ border: `3px solid ${TEAL}` }} />
              <div className="text-left">
                <p className="font-black uppercase text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>Luke Begley</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: TEAL, fontFamily: FONT }}>
                  CEO & Co-Founder, CircuitIQ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── WHAT MAKES US DIFFERENT (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Why NORCAT
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  What makes us<br /><span style={{ color: TEAL }}>different?</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                  There are a lot of accelerators and programs out there. Here's why founders choose to build with us.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4">
                {differentiators.map((item) => (
                  <div key={item.title} className="rounded-2xl p-6 md:p-7 flex gap-5 transition-transform hover:-translate-y-0.5"
                       style={{ background: 'white', border: '1px solid #d9dde5' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                         style={{ background: NAVY }}>
                      <item.icon className="w-5 h-5" style={{ color: TEAL }} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-base md:text-lg mb-1"
                          style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: '#475068' }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── EXPLORE OUR SERVICES (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 80% 0%, rgba(0,179,152,0.15), transparent 45%)',
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <Eyebrow>All Services</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Explore our<br /><span style={{ color: TEAL }}>services.</span>
                </Display>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: FG_MUTED }}>
                  From hands-on advisory to funding and world-class facilities — everything you need under one roof.
                </p>
              </div>
              <Link to="/apply"
                    className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.18em] text-xs group shrink-0"
                    style={{ color: TEAL, fontFamily: FONT }}>
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {(['Program', 'Funding', 'Facility'] as const).map((type) => {
                const typeServices = allServices.filter(s => s.type === type);
                const typeLabel = type === 'Program' ? 'Programs' : type === 'Funding' ? 'Funding' : 'Facilities';
                const TypeIcon = type === 'Program' ? Rocket : type === 'Funding' ? DollarSign : Building2;
                return (
                  <div key={type} className="rounded-2xl p-6 md:p-7"
                       style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                    <div className="flex items-center gap-3 mb-5 pb-5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: NAVY }}>
                        <TypeIcon className="w-5 h-5" style={{ color: TEAL }} />
                      </div>
                      <h3 className="font-black uppercase text-lg text-white"
                          style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{typeLabel}</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {typeServices.map((service) => (
                        <Link key={service.title} to={service.link}
                              className="group block rounded-xl p-4 transition-colors"
                              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <h4 className="font-bold text-white mb-2 group-hover:text-[color:var(--teal,#00B398)] transition-colors"
                              style={{ fontFamily: FONT }}>
                            {service.title}
                          </h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3" style={{ color: FG_MUTED }}>
                            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" style={{ color: TEAL }} />{service.duration}</span>
                            <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" style={{ color: TEAL }} />{service.location}</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] group-hover:translate-x-1 transition-transform"
                               style={{ color: TEAL, fontFamily: FONT }}>
                            Learn more
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA (light) ───── */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <Eyebrow>Your move</Eyebrow>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Ready to<br /><span style={{ color: TEAL }}>accelerate?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Join the next cohort of ambitious founders building category-defining companies. Applications are open.
            </p>
            <Link to="/apply"
                  className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ fontFamily: FONT, background: TEAL, color: 'white' }}>
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
}
