import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Linkedin, X, Users, TrendingUp, DollarSign, Calendar, MapPin, Trophy } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';
import signatureLines from '@/assets/signature-lines.png';
import aboutHeroBg from '@/assets/about-hero-bg.png';
import founderFirstGif from '@/assets/values/founder-first.gif';
import communityFocusedGif from '@/assets/values/community-focused.gif';
import executionFocusedGif from '@/assets/values/execution-focused.gif';
import impactDrivenGif from '@/assets/values/impact-driven.gif';

// Team headshots
import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie-new.png';

// Logos
import ontarioLogo from '@/assets/logos/ontario.png';
import innovateonLogo from '@/assets/logos/innovateon.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import norcatLogo from '@/assets/logos/norcat.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import tedcLogo from '@/assets/logos/tedc.png';

// ── Brand tokens (mirrors Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogo },
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'TEDC', logo: tedcLogo },
];

const values = [
  { title: 'Founder First', description: 'Everything we do centers on helping founders succeed. We support people, not just companies.', bgGif: founderFirstGif },
  { title: 'Impact Driven', description: 'We measure success by the jobs created, capital raised, and innovations brought to market.', bgGif: impactDrivenGif },
  { title: 'Community Focused', description: 'We believe in the power of community and connections to accelerate growth.', bgGif: communityFocusedGif },
  { title: 'Execution Focused', description: 'We prioritize real-world testing, validation, and practical outcomes, with support grounded in execution.', bgGif: executionFocusedGif },
];

const team = [
  { name: 'Brendan Skiffington', role: 'Manager', image: brendanImage, bio: 'Brendan leads the innovation team with a focus on helping startups navigate the early stages of growth. With extensive experience in venture development and ecosystem building, he connects founders with the resources they need to succeed.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Shashank Mehta', role: 'Coordinator', image: shashankImage, bio: 'Shashank coordinates programs and events that bring together founders, mentors, and investors. His passion for community building helps create meaningful connections within the innovation ecosystem.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Bart Streppel', role: 'Content Specialist', image: bartImage, bio: 'Bart crafts compelling narratives that showcase the impact of NORCAT Innovation and its portfolio companies. He helps startups tell their stories effectively to customers, investors, and media.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Jie Chen', role: 'Associate', image: jieImage, bio: 'Jie supports founders through research, analysis, and program delivery. Her attention to detail and commitment to excellence ensures startups receive the highest quality support.', linkedin: 'https://linkedin.com/in/' },
];

const stats = [
  { number: '150+', label: 'Startups Supported', icon: Users },
  { number: '15+', label: 'Years of Impact', icon: TrendingUp },
  { number: '$50M+', label: 'Capital Raised', icon: DollarSign },
];

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

function TeamModal({ member, onClose }: { member: typeof team[0] | null; onClose: () => void }) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="rounded-2xl max-w-md w-full p-8 relative"
          style={{ background: 'white', border: '1px solid #d9dde5' }}
          initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose}
                  className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: PAPER, color: NAVY }}>
            <X className="w-4 h-4" />
          </button>
          <div className="text-center">
            <img src={member.image} alt={member.name}
                 className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
                 style={{ border: `3px solid ${TEAL}` }} />
            <h3 className="text-2xl font-black uppercase mb-1" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
              {member.name}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: TEAL, fontFamily: FONT }}>
              {member.role}
            </p>
            <p className="text-left leading-relaxed mb-7 text-sm" style={{ color: '#475068' }}>
              {member.bio}
            </p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
               style={{ background: TEAL, color: NAVY, fontFamily: FONT }}>
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function About() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const selectedMember = team.find(m => m.name === expandedMember) || null;

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[78vh] flex items-center pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* hero background image (preserved content) */}
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
            <img src={aboutHeroBg} alt="" className="h-full max-w-none object-contain object-right opacity-90" />
          </div>

          {/* radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.20), transparent 50%)`,
          }} />

          {/* signature lines */}
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow>About NORCAT Innovation</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Sudbury's<br />Regional<br /><span style={{ color: TEAL }}>Innovation Centre.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                A not-for-profit Innovation Centre funded by the Government of Ontario,
                supporting tech-enabled, IP-driven startups across Northern Ontario.
              </p>
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

        {/* ───── MISSION (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid #d9dde5' }}>
                  <img src={foundersImage} alt="NORCAT Innovation team working with founders"
                       className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block mr-2 align-middle" style={{ background: TEAL }} />
                  Our Mission
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Helping founders build <span style={{ color: TEAL }}>world-changing</span>{' '}<span style={{ color: NAVY }}>companies.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#475068' }}>
                  Through mentorship, capital access, and our unique underground testing facility,
                  we provide everything ambitious entrepreneurs need to start, grow, and scale.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#475068' }}>
                  Our specialization in mining technology makes us unique — offering founders
                  access to a real operational mine for testing and validation.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-7" style={{ borderTop: '1px solid #d9dde5' }}>
                  {[
                    { icon: Calendar, label: 'Established', value: '1995' },
                    { icon: MapPin, label: 'Headquarters', value: 'Sudbury, ON' },
                    { icon: Trophy, label: 'Capital Catalyzed', value: '$50M+' },
                  ].map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <m.icon className="w-6 h-6 mt-0.5 shrink-0" style={{ color: TEAL }} />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ fontFamily: FONT, color: '#6b7387' }}>{m.label}</p>
                        <p className="text-base md:text-lg font-bold" style={{ color: NAVY }}>{m.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── VALUES (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Our Values</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Principles that<br /><span style={{ color: TEAL }}>guide us.</span>
              </Display>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value) => (
                <article key={value.title}
                         className="group relative rounded-2xl overflow-hidden aspect-[3/4] flex flex-col"
                         style={{ background: '#0a2a6b', border: `1px solid ${BORDER}` }}>
                  <img src={value.bgGif} alt=""
                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                       style={value.title === 'Execution Focused'
                         ? { objectPosition: 'left center', transform: 'scale(1.15)', transformOrigin: 'left center' }
                         : value.title === 'Impact Driven'
                         ? { transform: 'scale(1.15)' }
                         : {}} />
                  <div className="absolute inset-0 pointer-events-none"
                       style={{ background: 'linear-gradient(180deg, rgba(0,26,77,0) 35%, rgba(0,26,77,0.85) 75%, #001a4d 100%)' }} />
                  <div className="relative mt-auto p-6">
                    <h3 className="font-black uppercase text-xl md:text-2xl text-white mb-2"
                        style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{value.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── TEAM (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Our Team
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Meet the<br /><span style={{ color: TEAL }}>Innovation Team.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base md:max-w-sm leading-relaxed" style={{ color: '#5b6478' }}>
                Our dedicated team works closely with founders to provide the support,
                resources, and connections needed to build successful companies.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <motion.button
                  key={member.name}
                  onClick={() => setExpandedMember(member.name)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group text-left rounded-2xl overflow-hidden"
                  style={{ background: 'white', border: '1px solid #d9dde5' }}
                >
                  <div className="relative overflow-hidden">
                    <img src={member.image} alt={member.name}
                         className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 transition-colors"
                         style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,26,77,0.15) 100%)' }} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black uppercase text-base md:text-lg mb-1"
                        style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: TEAL, fontFamily: FONT }}>
                      {member.role}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <TeamModal member={selectedMember} onClose={() => setExpandedMember(null)} />
        </section>

        {/* ───── PARTNERS — Powered by ───── */}
        <section className="pt-20 md:pt-24 pb-10 md:pb-12" style={{ background: PAPER }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="text-center mb-10 md:mb-12">
              <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Our Partners
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
                Friends who open doors.
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#5b6478' }}>
                The operators, builders, and organizations who show up, make intros, and help founders win.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              {partnerLogos.map((p) => (
                <div key={p.name}
                     className="aspect-[3/2] rounded-lg flex items-center justify-center transition hover:-translate-y-0.5 p-5"
                     style={{ background: 'white', border: '1px solid #e3e6ec' }}>
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── RIC NETWORK (light) ───── */}
        <section className="py-20 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <img src={innovateonLogo} alt="InnovateON - Regional Innovation Centre Network"
                     className="h-8 object-contain mb-6" />
                <p className="text-base leading-relaxed mb-7" style={{ color: '#475068' }}>
                  We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs
                  with resources, mentorship, and funding to start and scale businesses.
                </p>
                <div className="flex gap-10 pt-6" style={{ borderTop: '1px solid #d9dde5' }}>
                  <div>
                    <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: TEAL }}>17</p>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase mt-1" style={{ color: '#6b7387' }}>Centres</p>
                  </div>
                  <div>
                    <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: TEAL }}>1000+</p>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase mt-1" style={{ color: '#6b7387' }}>Startups / Year</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid #d9dde5' }}>
                <img src={ontarioLogo} alt="Government of Ontario" className="h-10 object-contain mb-6" />
                <p className="text-base leading-relaxed mb-7" style={{ color: '#475068' }}>
                  Funded by the <strong style={{ color: NAVY }}>Ministry of Economic Development, Job Creation and Trade</strong>,
                  enabling free and subsidized services for Northern Ontario entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-2 pt-6" style={{ borderTop: '1px solid #d9dde5' }}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ background: 'rgba(0,179,152,0.12)', color: TEAL, fontFamily: FONT }}>
                    Not-for-Profit
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ background: 'rgba(0,179,152,0.12)', color: TEAL, fontFamily: FONT }}>
                    Ontario Funded
                  </span>
                </div>
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
              Ready to join<br /><span style={{ color: TEAL }}>our community?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Whether you're just starting out or ready to scale, we're here to help
              you build something extraordinary.
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
