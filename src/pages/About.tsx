import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Linkedin, X, Users, TrendingUp, DollarSign, Calendar, MapPin, Trophy } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';
import norcatBuilding from '@/assets/norcat-building.jpg.asset.json';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

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

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
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

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background (matches Home2 hero) */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow (matches Home2 hero) */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          {/* signature lines */}
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow className="text-lg">About NORCAT Innovation</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                <span style={{ color: TEAL }}>The Innovation Engine</span><br />of the North.
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Designed by-and-for the builders of innovative technology and scientific discovery, NORCAT Innovation provides you with the Sudbury Advantage: land, resources, talent, capital, and an unparalleled appeal to wanting to see others succeed.
              </p>
            </div>
          </div>
        </section>


        {/* ───── MISSION (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid #d9dde5' }}>
                  <img src={norcatBuilding.url} alt="NORCAT Innovation headquarters building in Sudbury"
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
                  About NORCAT Innovation
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

        {/* ───── STORY OF NORCAT (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <Eyebrow>Our Story</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                The Story of <span style={{ color: TEAL }}>NORCAT.</span>
              </Display>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Greater Sudbury’s narrative is forged deep in ancient rock, where a rich mining heritage laid the foundation for a global industrial hub. However, by the early 2000s, a profound challenge emerged: too many talented young people and promising startups were leaving the North.
                </p>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  The necessary answer to this regional talent drain was established in 1995 when the Northern Centre for Advanced Technology (NORCAT) was founded by Darryl Lake in a modest Cambrian College basement. Driven by a vision to retain local genius, Lake’s mission was simple: create jobs so students could stay. Alongside co-founders Ed Wisniewski and Jason Bubba, they built an ethos rooted in safety, training, and innovation. By the late 1990s, the team pioneered digital training via CD-ROMs—a technological leap that introduced AR/VR capabilities and evolved into today’s internationally award-winning programs.
                </p>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  A pivotal moment arrived in 1997 with the establishment of an underground training mine at the Falconbridge Onaping Adit, putting NORCAT on the map as a global one-stop-shop “living laboratory” for mining tech. Rapid growth followed. After outgrowing its basement in 1998, a transformative $14 million expansion in 2009 enabled a move to a 70,000-square-foot headquarters on Maley Drive, anchoring ecosystem pillars under one roof.
                </p>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Innovation is Greater Sudbury's heritage; NORCAT Innovation is a direct response to the entrepreneurs and builders who needed a place to come together — a hub where resources and ideation have a place to come together.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: `1px solid ${BORDER}` }}>
                  <img src={foundersImage} alt="NORCAT founders collaborating in the early years"
                       className="w-full h-full object-cover" />
                </div>

                <div className="relative">
                  <div className="absolute left-[15px] top-3 bottom-3 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <div className="space-y-6">
                    {[
                      { year: '1995', title: 'Founded in a Basement', desc: 'Darryl Lake launches NORCAT at Cambrian College to keep local talent in the North.' },
                      { year: '1997', title: 'The Living Laboratory', desc: 'Underground training mine opens at Falconbridge Onaping Adit.' },
                      { year: '1998', title: 'Outgrowing the Space', desc: 'Rapid growth forces the team out of the college basement.' },
                      { year: '2009', title: 'A New Headquarters', desc: '$14M expansion delivers a 70,000 sq ft home on Maley Drive.' },
                      { year: 'Today', title: 'NORCAT Innovation', desc: 'A hub where entrepreneurs, resources, and ideas come together.' },
                    ].map((milestone) => (
                      <div key={milestone.year} className="relative flex gap-5 pl-1">
                        <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                             style={{ background: TEAL, border: `2px solid ${TEAL}` }}>
                          <div className="w-2.5 h-2.5 rounded-full" style={{ background: NAVY }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1" style={{ color: TEAL, fontFamily: FONT }}>{milestone.year}</p>
                          <h3 className="font-black uppercase text-lg mb-1 text-white" style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>{milestone.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: FG_MUTED }}>{milestone.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

            <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {team.map((member) => {
                const isExpanded = expandedMember === member.name;
                return (
                  <motion.div
                    key={member.name}
                    layout
                    onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                    whileHover={isExpanded ? undefined : { y: -6 }}
                    className="group text-left rounded-2xl overflow-hidden cursor-pointer relative"
                    style={{ background: 'white', border: '1px solid #d9dde5' }}
                  >
                    <motion.div layout className={isExpanded ? 'p-6' : ''}>
                      <motion.div
                        layout
                        className={`relative overflow-hidden ${
                          isExpanded
                            ? 'w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0'
                            : 'w-full aspect-square'
                        }`}
                        style={isExpanded ? { border: `3px solid ${TEAL}` } : undefined}
                      >
                        <motion.img
                          layout
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {!isExpanded && (
                          <div className="absolute inset-0"
                               style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,26,77,0.15) 100%)' }} />
                        )}
                      </motion.div>

                      <motion.div layout className={isExpanded ? 'flex-1 min-w-0' : 'p-5'}>
                        <motion.h3 layout className="font-black uppercase text-base md:text-lg mb-1"
                            style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                          {member.name}
                        </motion.h3>
                        <motion.p layout className="text-xs font-bold uppercase tracking-[0.18em]"
                           style={{ color: TEAL, fontFamily: FONT }}>
                          {member.role}
                        </motion.p>

                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                          >
                              <p className="mt-4 leading-relaxed text-sm" style={{ color: '#475068' }}>
                                {member.bio}
                              </p>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mt-5 group/btn inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                              >
                                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                                <span className="inline-flex items-center justify-center size-7 rounded-full"
                                      style={{ background: NAVY, color: 'white' }}>
                                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:rotate-[360deg]" />
                                </span>
                              </a>
                          </motion.div>
                        )}
                      </motion.div>

                      {isExpanded && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setExpandedMember(null); }}
                          className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors"
                          style={{ background: PAPER, color: NAVY }}
                          aria-label="Close"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
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

        {/* ───── RIC NETWORK (light) ───── */}
        <section className="pb-10 md:pb-16" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
              <div>
                <img src={innovateonLogo} alt="InnovateON - Regional Innovation Centre Network"
                     className="h-8 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs
                  with resources, mentorship, and funding to start and scale businesses.
                </p>
              </div>

              <div>
                <img src={ontarioLogo} alt="Government of Ontario" className="h-10 object-contain mb-4" />
                <p className="text-base leading-relaxed" style={{ color: '#475068' }}>
                  Funded by the <strong style={{ color: NAVY }}>Ministry of Economic Development, Job Creation and Trade</strong>,
                  enabling free and subsidized services for Northern Ontario entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
