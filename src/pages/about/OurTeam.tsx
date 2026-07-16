import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Linkedin, Mail, X, Users } from 'lucide-react';
import { team, type TeamMember } from '@/data/team';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

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

function TeamModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
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

export default function OurTeam() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>
        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[50vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="text-lg !text-white">ABOUT NORCAT INNOVATION</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                OUR <span style={{ color: TEAL }}>TEAM.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The people behind the programs. Meet the innovation team helping founders turn ideas into impact.
              </p>
            </div>
          </div>
        </section>


        {/* ───── TEAM GRID ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-stretch justify-between gap-8 mb-12 md:mb-16">
              <div className="flex-1 flex flex-col justify-center">
                <Eyebrow>THE INNOVATION TEAM</Eyebrow>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  MEET THE INNOVATION TEAM!<br /><span style={{ color: TEAL }}>&nbsp;</span>
                </h2>
              </div>
              <p className="flex-1 flex items-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed"
                 style={{ color: '#5b6478' }}>
                Whether it's your first time jotting a business idea down on the back of a napkin
                or you're scaling and ready to demonstrate your technology to the world,
                we are here to help you scale success!&nbsp;
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

        {/* ───── MENTORS CTA ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 10% 80%, rgba(0,179,152,0.22), transparent 40%), radial-gradient(circle at 90% 20%, rgba(47,111,214,0.22), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <Eyebrow>MENTOR NETWORK</Eyebrow>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  WORLD-CLASS <span style={{ color: TEAL }}>MENTORS.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Our mentors are operators, founders, and industry experts who volunteer their time to help northern ventures scale. From pitch practice to go-to-market strategy, they bring decades of real-world experience.
                </p>
              </div>
              <Link
                to="/programs/mentorship-services"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-[1.02] whitespace-nowrap"
                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
              >
                <Users className="w-5 h-5" />
                Meet Our Mentors
                <span className="inline-flex items-center justify-center size-8 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </Layout>
  );
}
