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

const Display = ({ children, className = '', light = false, as: As = 'h2' as any }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: light ? NAVY : 'white' }}
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
                  style={{ fontFamily: FONT, background: TEAL, color: 'white' }}
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
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ background: PAPER, color: NAVY }}
        >
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <Eyebrow>What's Included</Eyebrow>
                <Display light className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Everything you need<br /><span style={{ color: TEAL }}>to accelerate.</span>
                </Display>
              </div>
              <AudienceTabs light active={activeAudience} onChange={setActiveAudience} />
            </div>

            <ServicesExplorer light activeAudience={activeAudience} />
          </div>
        </section>

        {/* ───── HOW IT WORKS (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)',
          }} />
          <style>{`
            @keyframes printer-head {
              from { transform: translateX(-18px); }
              to   { transform: translateX(18px); }
            }
            @keyframes printer-build {
              0%   { transform: scaleY(0); }
              85%  { transform: scaleY(1); }
              95%  { transform: scaleY(1); }
              100% { transform: scaleY(0); }
            }
            @keyframes arm-shoulder {
              0%   { transform: rotate(-18deg); }
              100% { transform: rotate(22deg); }
            }
            @keyframes arm-elbow {
              0%   { transform: rotate(-25deg); }
              100% { transform: rotate(40deg); }
            }
            /* Morph-in for Build & Validate scene */
            .build-scene .printer-rig,
            .build-scene .arm-rig {
              transform: scaleY(0);
              transform-box: view-box;
              transition: transform 750ms cubic-bezier(0.5, 1.5, 0.4, 1);
              transform-origin: 50px 92.5px;
            }
            .build-scene .arm-rig { transform-origin: 155px 92.5px; }
            .group:hover .build-scene .printer-rig { transform: scaleY(1); transition-delay: 80ms; }
            .group:hover .build-scene .arm-rig { transform: scaleY(1); transition-delay: 260ms; }
            /* iMessage bubbles for Ongoing Support */
            @keyframes bubble-typing {
              0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
              30% { transform: translateY(-2px); opacity: 1; }
            }
          `}</style>
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-6 md:mb-8">
              <Eyebrow>Your Journey</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                How it<br /><span style={{ color: TEAL }}>works.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:pt-16">
              {programStructure.map((phase) => {
                const isScale = phase.phase === '03';
                const isOnboarding = phase.phase === '01';
                const isBuild = phase.phase === '02';
                const isOngoing = phase.phase === '04';
                const needsOverflow = isScale || isOnboarding || isBuild || isOngoing;
                return (
                  <article
                    key={phase.phase}
                    className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${needsOverflow ? 'overflow-visible' : 'overflow-hidden'} ${isScale || isOnboarding ? 'hover:rounded-t-none' : ''}`}
                    style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}
                  >
                    {isBuild && (
                      <div
                        className="pointer-events-none absolute left-0 right-0 bottom-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                        style={{ height: '120px' }}
                      >
                        <svg viewBox="0 0 200 93" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" aria-hidden="true" className="build-scene">
                          {/* Workshop floor */}
                          <line x1="0" y1="92.5" x2="200" y2="92.5" stroke={TEAL} strokeWidth="0.5" opacity="0.6" />

                          {/* ── 3D PRINTER (left) — morphs in from base ── */}
                          <g className="printer-rig">
                            {/* Frame posts */}
                            <rect x="14" y="20" width="2.5" height="70" fill={NAVY} />
                            <rect x="83.5" y="20" width="2.5" height="70" fill={NAVY} />
                            <rect x="14" y="20" width="72" height="2.5" fill={NAVY} />
                            {/* Print bed */}
                            <rect x="20" y="86" width="60" height="3" fill={NAVY} />
                            <rect x="18" y="89" width="64" height="2" fill={TEAL} opacity="0.7" />
                            {/* Gantry rail */}
                            <rect x="16" y="34" width="68" height="1.5" fill={TEAL} opacity="0.7" />
                            {/* Printed object growing */}
                            <rect
                              x="38"
                              y="46"
                              width="24"
                              height="40"
                              fill={TEAL}
                              style={{ transformOrigin: '50px 86px', animation: 'printer-build 3.6s ease-out infinite' }}
                            />
                            {/* Print head sliding along gantry */}
                            <g style={{ animation: 'printer-head 1.8s ease-in-out infinite alternate' }}>
                              <rect x="44" y="32" width="12" height="7" rx="1" fill={NAVY} />
                              <polygon points="48,39 52,39 50,44" fill={TEAL} />
                            </g>
                          </g>

                          {/* ── ROBOTIC ARM (right) — morphs in from base ── */}
                          <g className="arm-rig">
                            {/* Base */}
                            <rect x="138" y="84" width="34" height="9" rx="1" fill={NAVY} />
                            <rect x="148" y="80" width="14" height="4" fill={NAVY} />
                            {/* Shoulder rotates */}
                            <g style={{ transformOrigin: '155px 82px', animation: 'arm-shoulder 3s ease-in-out infinite alternate' }}>
                              <rect x="152" y="48" width="6" height="34" rx="1.5" fill={NAVY} />
                              <circle cx="155" cy="82" r="3" fill={TEAL} />
                              <circle cx="155" cy="48" r="3" fill={TEAL} />
                              {/* Elbow / forearm rotates */}
                              <g style={{ transformOrigin: '155px 48px', animation: 'arm-elbow 2.2s ease-in-out infinite alternate' }}>
                                <rect x="155" y="45" width="32" height="6" rx="1.5" fill={NAVY} />
                                <circle cx="186" cy="48" r="2.5" fill={TEAL} />
                                {/* Gripper claws */}
                                <rect x="186" y="42" width="2" height="9" fill={TEAL} />
                                <rect x="190" y="42" width="2" height="9" fill={TEAL} />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )}
                    {isOnboarding && (
                      <>
                        {/* Monitor bezel + webcam (grows up from top of card) */}
                        <div
                          className="pointer-events-none absolute -left-px -right-px bottom-full origin-bottom scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center"
                          style={{
                            height: '22px',
                            background: '#0a2a6b',
                            borderTop: `1px solid ${BORDER}`,
                            borderLeft: `1px solid ${BORDER}`,
                            borderRight: `1px solid ${BORDER}`,
                            borderTopLeftRadius: '14px',
                            borderTopRightRadius: '14px',
                          }}
                        >
                          <div
                            className="relative size-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: 'radial-gradient(circle at 35% 35%, #4ade80 0%, #064e3b 70%)',
                              boxShadow: '0 0 6px rgba(74,222,128,0.7)',
                              transitionDelay: '500ms',
                            }}
                          >
                            <span
                              className="absolute -right-1 -top-1 size-1.5 rounded-full animate-pulse"
                              style={{ background: '#ef4444', boxShadow: '0 0 4px #ef4444' }}
                            />
                          </div>
                        </div>

                        {/* Monitor neck + base (grows down from bottom of card) */}
                        <div
                          className="pointer-events-none absolute -left-px -right-px top-full h-[34px] flex flex-col items-center origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                          style={{ transitionDelay: '150ms' }}
                        >
                          <div
                            className="w-10 h-3"
                            style={{
                              background: '#0a2a6b',
                              borderLeft: `1px solid ${BORDER}`,
                              borderRight: `1px solid ${BORDER}`,
                            }}
                          />
                          <div
                            className="w-2/3 h-2 rounded-b-lg"
                            style={{
                              background: '#0a2a6b',
                              border: `1px solid ${BORDER}`,
                              borderTop: 'none',
                            }}
                          />
                        </div>

                        {/* Video-call "LIVE" tile overlay inside card */}
                        <div
                          className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'rgba(0,0,0,0.45)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            transitionDelay: '650ms',
                          }}
                        >
                          <span className="size-1.5 rounded-full animate-pulse" style={{ background: '#ef4444' }} />
                          <span className="text-[9px] font-bold tracking-widest text-white/90" style={{ fontFamily: FONT }}>LIVE</span>
                        </div>
                      </>
                    )}
                    {isScale && (
                      <div className="pointer-events-none absolute -left-px -right-px bottom-full h-[120px]">
                        {/* Step 1 (shortest, left third) */}
                        <div
                          className="absolute bottom-0 left-0 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '40px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}`, borderTopLeftRadius: '18px', transitionDelay: '0ms' }}
                        />
                        {/* Step 2 (middle third) */}
                        <div
                          className="absolute bottom-0 left-1/3 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '70px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderTopLeftRadius: '12px', transitionDelay: '140ms' }}
                        />
                        {/* Step 3 (tallest, right third) */}
                        <div
                          className="absolute bottom-0 left-2/3 w-1/3 origin-bottom transition-all duration-500 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                          style={{ height: '100px', background: '#0a2a6b', borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderTopLeftRadius: '12px', borderTopRightRadius: '12px', transitionDelay: '280ms' }}
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
                          <DollarSign
                            size={44}
                            strokeWidth={2.5}
                            className="text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )}
                    {isOngoing && (
                      <div className="pointer-events-none absolute left-0 right-0 bottom-full h-[160px] px-4 flex flex-col justify-end gap-1.5 pb-2">
                        {/* Incoming bubble (left, navy) — iMessage style */}
                        <div
                          className="relative self-start max-w-[85%] origin-bottom-left scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.5, 1.6, 0.4, 1)', transitionDelay: '120ms' }}
                        >
                          <div
                            className="relative px-3.5 py-2 text-[13px] leading-snug text-white"
                            style={{
                              background: NAVY,
                              borderRadius: '18px 18px 18px 18px',
                              fontFamily: FONT,
                            }}
                          >
                            How did last week go?
                          </div>
                          {/* iMessage tail (left) */}
                          <span
                            className="absolute -left-0.5 bottom-0 w-3 h-3"
                            style={{
                              background: NAVY,
                              borderBottomRightRadius: '14px',
                              clipPath: 'path("M12 12 Q 12 0, 0 12 Z")',
                            }}
                          />
                        </div>
                        {/* Outgoing bubble (right, teal) — iMessage style */}
                        <div
                          className="relative self-end max-w-[90%] origin-bottom-right scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.5, 1.6, 0.4, 1)', transitionDelay: '720ms' }}
                        >
                          <div
                            className="relative px-3.5 py-2 text-[13px] leading-snug text-white font-semibold"
                            style={{
                              background: TEAL,
                              borderRadius: '18px 18px 18px 18px',
                              fontFamily: FONT,
                            }}
                          >
                            Onboarded 12 new customers!!!
                          </div>
                          {/* iMessage tail (right) */}
                          <span
                            className="absolute -right-0.5 bottom-0 w-3 h-3"
                            style={{
                              background: TEAL,
                              clipPath: 'path("M0 12 Q 0 0, 12 12 Z")',
                            }}
                          />
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
                    <div className="size-12 rounded-lg flex items-center justify-center shrink-0"
                         style={{ background: 'rgba(0,179,152,0.12)', color: TEAL }}>
                      <item.icon className="size-6" strokeWidth={2} />
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
                       style={{ background: 'rgba(0, 179, 152, 0.06)', border: `1px solid rgba(0, 179, 152, 0.15)`, backdropFilter: 'blur(14px)' }}>
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
