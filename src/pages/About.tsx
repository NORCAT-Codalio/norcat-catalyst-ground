import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, X, Users, Lightbulb, Target, Globe, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';
import signatureLines from '@/assets/signature-lines.png';
import miningEquipment from '@/assets/mining-equipment.jpg';

// Team headshots
import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie.png';

// Logos
import ontarioLogo from '@/assets/logos/ontario.png';
import innovateonLogo from '@/assets/logos/innovateon.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import ontarioPartnerLogo from '@/assets/logos/ontario.png';
import norcatLogo from '@/assets/logos/norcat.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import tedcLogo from '@/assets/logos/tedc.png';

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioPartnerLogo },
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'TEDC', logo: tedcLogo },
];

const values = [
  {
    title: 'Founder First',
    description: 'Everything we do centers on helping founders succeed. We support people, not just companies.',
    icon: Users,
  },
  {
    title: 'Impact Driven',
    description: 'We measure success by the jobs created, capital raised, and innovations brought to market.',
    icon: TrendingUp,
  },
  {
    title: 'Community Focused',
    description: 'We believe in the power of community and connections to accelerate growth.',
    icon: Globe,
  },
  {
    title: 'Execution Focused',
    description: 'We prioritize real-world testing, validation, and practical outcomes, with support grounded in execution.',
    icon: Target,
  },
];

const team = [
  { 
    name: 'Brendan Skiffington', 
    role: 'Manager', 
    image: brendanImage,
    bio: 'Brendan leads the innovation team with a focus on helping startups navigate the early stages of growth. With extensive experience in venture development and ecosystem building, he connects founders with the resources they need to succeed.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Shashank Mehta', 
    role: 'Coordinator', 
    image: shashankImage,
    bio: 'Shashank coordinates programs and events that bring together founders, mentors, and investors. His passion for community building helps create meaningful connections within the innovation ecosystem.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Bart Streppel', 
    role: 'Content Specialist', 
    image: bartImage,
    bio: 'Bart crafts compelling narratives that showcase the impact of NORCAT Innovation and its portfolio companies. He helps startups tell their stories effectively to customers, investors, and media.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Jie Chen', 
    role: 'Associate', 
    image: jieImage,
    bio: 'Jie supports founders through research, analysis, and program delivery. Her attention to detail and commitment to excellence ensures startups receive the highest quality support.',
    linkedin: 'https://linkedin.com/in/',
  },
];

const stats = [
  { number: '150+', label: 'STARTUPS SUPPORTED' },
  { number: '15+', label: 'YEARS OF IMPACT' },
  { number: '$50M+', label: 'CAPITAL RAISED' },
];

// Dark glass card (for hero)
function GlassCard({ children, className = '', shimmer = true }: { children: React.ReactNode; className?: string; shimmer?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shimmer || !cardRef.current) return;
    const card = cardRef.current;
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };
    card.addEventListener('mousemove', handleMove);
    return () => card.removeEventListener('mousemove', handleMove);
  }, [shimmer]);

  return (
    <div
      ref={cardRef}
      className={`liquid-glass rounded-2xl ${shimmer ? 'glass-shimmer' : ''} ${className}`}
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,179,152,0.06) 0%, transparent 50%), rgba(255,255,255,0.04)`,
      }}
    >
      {children}
    </div>
  );
}

// Light glass card for white/off-white sections — frosted glass with embossed feel
function LightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };
    card.addEventListener('mousemove', handleMove);
    return () => card.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`liquid-glass-light-strong rounded-2xl glass-shimmer hover:shadow-lg transition-all duration-500 ${className}`}
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(168 100% 36% / 0.05) 0%, transparent 50%), linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0.5) 100%)`,
      }}
    >
      {children}
    </div>
  );
}

interface TeamModalProps {
  member: typeof team[0] | null;
  onClose: () => void;
}

function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-border/50"
          initial={{ scale: 0.95, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
              <img 
                src={member.image} 
                alt={member.name} 
                className="relative w-24 h-24 rounded-full object-cover ring-2 ring-primary/20"
              />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
            <p className="text-primary font-medium mb-6">{member.role}</p>
            <p className="text-muted-foreground text-left leading-relaxed mb-8">
              {member.bio}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
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
      <div>
        {/* ===== HERO SECTION — DARK ===== */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 30% 7%) 0%, hsl(215 28% 10%) 60%, hsl(220 25% 12%) 100%)' }}>
          {/* Ambient gradient orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, hsl(168 100% 36% / 0.3), transparent 70%)' }} />
            <div className="absolute top-[40%] right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse, hsl(168 80% 50% / 0.2), transparent 70%)' }} />
          </div>

          {/* Signature lines decoration */}
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[60%] h-full object-cover opacity-[0.07] pointer-events-none select-none mix-blend-screen"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                <ScrollReveal>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-semibold tracking-[0.15em] uppercase text-white/70 mb-8">
                    <Lightbulb className="w-3.5 h-3.5" />
                    About NORCAT Innovation
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                    Greater Sudbury's Regional{' '}
                    <span className="text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem]" style={{ color: 'hsl(168, 100%, 50%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Innovation Centre</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl">
                    A not-for-profit Innovation Centre funded by the Government of Ontario, 
                    supporting tech-enabled, IP-driven startups across Northern Ontario.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={250}>
                <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={miningEquipment} 
                    alt="Mining equipment at NORCAT facility" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Stats Row — glass capsules */}
          <div className="container mx-auto px-6 relative z-10 mt-20">
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-6 md:gap-8">
                {stats.map((stat) => (
                  <GlassCard key={stat.label} className="px-8 py-6 flex-1 min-w-[180px]">
                    <div className="text-4xl md:text-5xl font-black text-primary tracking-tight icon-glow">
                      {stat.number}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-2 text-white/40">
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* ===== MISSION SECTION — LIGHT ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#e4e4e8' }}>
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[40%] opacity-[0.15] pointer-events-none select-none rotate-180"
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal direction="left">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src={foundersImage}
                    alt="NORCAT Innovation team working with founders"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                    Our Mission
                  </span>
                  <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                    Helping founders build{' '}
                    <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>world-changing</span> companies
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                    Through mentorship, capital access, and our unique underground testing facility, 
                    we provide everything ambitious entrepreneurs need to start, grow, and scale.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground/70">
                    Our specialization in mining technology makes us unique—offering founders 
                    access to a real operational mine for testing and validation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== VALUES SECTION — WHITE ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#dcdce0' }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-border/50" />
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[50%] opacity-[0.08] pointer-events-none select-none"
          />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                  Principles that <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>guide us</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <LightCard className="p-8 md:p-10 h-full group hover:border-primary/30">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary/40 tracking-widest mb-2">0{index + 1}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </LightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM SECTION — OFF-WHITE ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#e4e4e8' }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-border/50" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                  Meet the <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Innovation Team</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our dedicated team works closely with founders to provide the support, 
                  resources, and connections needed to build successful companies.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 80}>
                  <motion.div
                    className="group cursor-pointer"
                    onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LightCard className="p-3 pb-5 text-center overflow-hidden hover:border-primary/30">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full aspect-square object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                      </div>
                      <h3 className="font-bold text-base text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{member.role}</p>
                    </LightCard>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <TeamModal 
            member={selectedMember} 
            onClose={() => setExpandedMember(null)} 
          />
        </section>


        {/* ───── PARTNERS — Glass Marquee ───── */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 80% 50% / 0.05) 0%, transparent 70%)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                  Our Partners
                </span>
                <h2 className="text-2xl md:text-3xl mb-2" style={{ color: 'hsl(220, 20%, 15%)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>Friends Who <span className="text-3xl md:text-4xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>Open Doors</span></h2>
                <p className="font-light" style={{ color: 'hsl(220, 10%, 50%)' }}>These are the operators, builders, and organizations who show up, make intros, and help founders win.</p>
              </div>
            </ScrollReveal>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-12 items-center justify-center"
                animate={{ x: [0, -600] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                  <div key={`${partner.name}-${i}`} className="flex-shrink-0 flex items-center justify-center w-40 h-20 px-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <Link to="/ecosystem" className="inline-flex items-center gap-2 font-semibold group" style={{ color: 'hsl(168, 100%, 30%)' }}>
                Explore Partners
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION — TEAL ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)' }}>
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-3/4 w-auto object-contain object-left opacity-50 pointer-events-none select-none mix-blend-overlay"
            style={{ transform: 'scaleX(-1) scaleY(-1)' }}
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                Ready to join our{' '}
                <span className="text-4xl md:text-5xl lg:text-6xl" style={{ color: 'hsla(0, 0%, 100%, 0.85)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontStyle: 'italic' }}>community?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/60">
                Whether you're just starting out or ready to scale, we're here to help 
                you build something extraordinary.
              </p>
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                  boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}
              >
                Apply for Venture Growth Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== RIC NETWORK SECTION — OFF-WHITE ===== */}
        <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#dcdce0' }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-border/50" />
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-8">
                <LightCard className="p-8">
                  <img 
                    src={innovateonLogo} 
                    alt="InnovateON - Regional Innovation Centre Network" 
                    className="h-8 object-contain mb-5"
                  />
                  <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                    We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs 
                    with resources, mentorship, and funding to start and scale businesses.
                  </p>
                  <div className="flex gap-10">
                    <div>
                      <div className="text-3xl font-black text-primary">17</div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1 text-muted-foreground">Centres</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary">1000+</div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1 text-muted-foreground">Startups/Year</p>
                    </div>
                  </div>
                </LightCard>
                <LightCard className="p-8">
                  <img 
                    src={ontarioLogo} 
                    alt="Government of Ontario" 
                    className="h-10 object-contain mb-5"
                  />
                  <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                    Funded by the <strong className="text-foreground">Ministry of Economic Development, Job Creation and Trade</strong>, 
                    enabling free and subsidized services for Northern Ontario entrepreneurs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Not-for-Profit
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Ontario Funded
                    </span>
                  </div>
                </LightCard>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
