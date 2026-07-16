import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, X, Users } from 'lucide-react';
import { team, type TeamMember } from '@/data/team';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
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
  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              style={{ background: 'white', border: '1px solid #d9dde5' }}
              initial={{ scale: 0.92, y: 16, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, y: 16, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={onClose}
                      className="absolute top-4 right-4 z-10 size-10 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                      style={{ background: PAPER, color: NAVY }}
                      aria-label="Close">
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row md:min-h-[520px]">
                <div className="md:w-[45%] aspect-square md:aspect-auto md:h-auto">
                  <img src={member.image} alt={member.name}
                       className="w-full h-full object-cover object-top" />
                </div>
                <div className="md:w-[55%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-2" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ color: TEAL, fontFamily: FONT }}>
                    {member.role}
                  </p>
                  <p className="leading-relaxed mb-8 text-sm md:text-base" style={{ color: '#475068' }}>
                    {member.bio}
                  </p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                     className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_2px_10px_-2px_hsla(168,100%,35%,0.4)] hover:shadow-[0_4px_16px_-2px_hsla(168,100%,35%,0.55)] hover:scale-[1.02] self-start text-white"
                     style={{ background: 'linear-gradient(135deg, #00b398 0%, #003da5 100%)', fontFamily: FONT }}>
                    Connect on LinkedIn
                    <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function OurTeam() {
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);

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
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <Eyebrow className="text-lg !text-white">ABOUT NORCAT INNOVATION</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                MEET OUR <span style={{ color: TEAL }}>TEAM.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The people helping Northern Ontario founders build, validate, and grow.
              </p>
            </div>
          </div>
        </section>


        {/* ───── TEAM GRID ───── */}
        <section className="py-16 md:py-24" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 md:mb-16">
              <div className="flex-1 flex flex-col justify-start text-left">
                <Eyebrow>THE INNOVATION TEAM</Eyebrow>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  EXPERTISE TO HELP<br />YOU MOVE FORWARD
                </h2>
              </div>
              <p className="flex-1 flex items-start text-base md:text-lg leading-relaxed md:pt-10"
                 style={{ color: '#5b6478' }}>
                From early-stage ideas to market-ready ventures, our Innovation team works alongside founders with practical guidance, strategic connections, and access to the resources needed to start and scale.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  onClick={() => setModalMember(member)}
                  className="group text-left rounded-2xl overflow-hidden cursor-pointer relative bg-white"
                  style={{ border: '1px solid #d9dde5' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalMember(member); }}
                  aria-label={`Open profile for ${member.name}`}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0"
                         style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,26,77,0.15) 100%)' }} />
                  </div>

                  <div className="p-5">
                    <h3 className="font-black uppercase text-base md:text-lg mb-1"
                        style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.18em]"
                       style={{ color: TEAL, fontFamily: FONT }}>
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── MENTOR NETWORK ───── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 60%, ${NAVY} 100%)`, color: 'white' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 35%), radial-gradient(circle at 90% 80%, rgba(0,179,152,0.35), transparent 45%)`,
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full opacity-30 pointer-events-none"
               style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`, filter: 'blur(80px)' }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                   style={{ fontFamily: FONT, color: 'white' }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: 'white' }} />
                  MENTOR NETWORK
                </p>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  WORLD-CLASS <span style={{ color: NAVY }}>MENTORS.</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.90)' }}>
                  Our mentors are operators, founders, and industry experts who volunteer their time to help northern ventures scale. From pitch practice to go-to-market strategy, they bring decades of real-world experience.
                </p>
                <Link
                  to="/programs/mentorship-services#meet-our-mentors"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
                  style={{ background: 'white', color: NAVY, fontFamily: FONT }}
                >
                  <Users className="w-5 h-5" style={{ color: TEAL }} />
                  Meet Our Mentors
                  <span className="inline-flex items-center justify-center size-8 rounded-full transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
                        style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { number: '18', label: 'Active Mentors', desc: 'Vetted operators and founders across sectors.' },
                  { number: '1000+', label: 'Hours Mentored in 2025', desc: 'Hands-on guidance for northern ventures.' },
                  { number: '100', label: 'NPS Score', desc: 'Founder-rated mentorship experience.' },
                  { number: '$0', label: 'To Access Mentorship', desc: 'No cost for qualifying ventures.' },
                ].map((s, i) => (
                  <div key={s.label}
                       className="rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02]"
                       style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)' }}>
                    <p className="font-black text-3xl md:text-4xl mb-1" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] mb-3" style={{ color: 'white' }}>{s.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── GET IN TOUCH ───── */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 80% 10%, rgba(0,179,152,0.12), transparent 40%), radial-gradient(circle at 10% 90%, rgba(0,61,165,0.10), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <Eyebrow>START THE CONVERSATION</Eyebrow>
                <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-5"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                  GET IN <span style={{ color: TEAL }}>TOUCH.</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#475068' }}>
                  Have a question, partnership idea, or just want to learn more about how we can help? Reach out — we'd love to hear from you.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-[1.02] whitespace-nowrap"
                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
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
