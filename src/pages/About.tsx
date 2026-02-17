import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, X, Users, Lightbulb, Target, Zap, Globe, TrendingUp, Building2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';
import signatureLines from '@/assets/signature-lines.png';

// Team headshots
import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie.png';

// Logos
import ontarioLogo from '@/assets/logos/ontario.png';
import innovateonLogo from '@/assets/logos/innovateon.png';

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

// Shimmer card wrapper with mouse tracking
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

interface TeamModalProps {
  member: typeof team[0] | null;
  onClose: () => void;
}

function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
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
          className="liquid-glass-strong rounded-3xl max-w-md w-full p-8 relative"
          initial={{ scale: 0.95, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full liquid-glass-btn flex items-center justify-center transition-colors hover:bg-white/10"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              <img 
                src={member.image} 
                alt={member.name} 
                className="relative w-24 h-24 rounded-full object-cover ring-2 ring-primary/30"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-primary font-medium mb-6">{member.role}</p>
            <p className="text-white/60 text-left leading-relaxed mb-8">
              {member.bio}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass-btn text-white font-medium hover:bg-white/15 transition-all"
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
      {/* Dark base with fluid teal gradients */}
      <div className="relative" style={{ background: 'linear-gradient(180deg, hsl(220 30% 7%) 0%, hsl(215 28% 10%) 30%, hsl(220 25% 8%) 60%, hsl(218 30% 6%) 100%)' }}>

        {/* Ambient gradient orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, hsl(168 100% 36% / 0.3), transparent 70%)' }} />
          <div className="absolute top-[40%] right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse, hsl(168 80% 50% / 0.2), transparent 70%)' }} />
          <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse, hsl(200 60% 30% / 0.2), transparent 70%)' }} />
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
          {/* Signature lines decoration */}
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[60%] h-full object-cover opacity-[0.07] pointer-events-none select-none mix-blend-screen"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-btn text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-8">
                  <Lightbulb className="w-3.5 h-3.5 icon-glow" />
                  About NORCAT Innovation
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white mb-8">
                  Greater Sudbury's Regional{' '}
                  <span className="text-gradient">Innovation Centre</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl">
                  A not-for-profit Innovation Centre funded by the Government of Ontario, 
                  supporting tech-enabled, IP-driven startups across Northern Ontario.
                </p>
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

        {/* ===== MISSION SECTION ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[40%] opacity-[0.05] pointer-events-none select-none rotate-180 mix-blend-screen"
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal direction="left">
                <GlassCard className="p-2 overflow-hidden">
                  <img
                    src={foundersImage}
                    alt="NORCAT Innovation team working with founders"
                    className="rounded-xl w-full"
                  />
                </GlassCard>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass-btn text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
                    Our Mission
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                    Helping founders build{' '}
                    <span className="text-gradient">world-changing</span> companies
                  </h2>
                  <p className="text-lg leading-relaxed text-white/50 mb-5">
                    Through mentorship, capital access, and our unique underground testing facility, 
                    we provide everything ambitious entrepreneurs need to start, grow, and scale.
                  </p>
                  <p className="text-base leading-relaxed text-white/35">
                    Our specialization in mining technology makes us unique—offering founders 
                    access to a real operational mine for testing and validation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== VALUES SECTION ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(168 100% 36% / 0.15), transparent)' }} />
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[50%] opacity-[0.04] pointer-events-none select-none mix-blend-screen"
          />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass-btn text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
                  Principles that guide us
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <GlassCard className="p-8 md:p-10 h-full group hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl liquid-glass-btn flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-500">
                        <value.icon className="w-5 h-5 text-primary icon-glow" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary/40 tracking-widest mb-2">0{index + 1}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                        <p className="text-base leading-relaxed text-white/45">{value.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM SECTION ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(168 100% 36% / 0.15), transparent)' }} />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass-btn text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                  Meet the Innovation Team
                </h2>
                <p className="text-lg leading-relaxed text-white/50">
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
                    <GlassCard className="p-3 pb-5 text-center overflow-hidden hover:border-primary/20 transition-all duration-500">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                      </div>
                      <h3 className="font-bold text-base text-white">{member.name}</h3>
                      <p className="text-sm font-medium text-white/40">{member.role}</p>
                    </GlassCard>
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

        {/* ===== CTA SECTION ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(168 100% 36% / 0.15), transparent)' }} />
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none select-none mix-blend-screen"
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <GlassCard className="max-w-3xl mx-auto p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                  Ready to join our{' '}
                  <span className="text-primary">community?</span>
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/45">
                  Whether you're just starting out or ready to scale, we're here to help 
                  you build something extraordinary.
                </p>
                <Link 
                  to="/apply" 
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-primary hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Apply for Venture Growth Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </GlassCard>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== RIC NETWORK SECTION ===== */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(168 100% 36% / 0.1), transparent)' }} />
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-8">
                <GlassCard className="p-8">
                  <img 
                    src={innovateonLogo} 
                    alt="InnovateON - Regional Innovation Centre Network" 
                    className="h-8 object-contain mb-5 brightness-0 invert opacity-70"
                  />
                  <p className="text-base leading-relaxed mb-6 text-white/45">
                    We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs 
                    with resources, mentorship, and funding to start and scale businesses.
                  </p>
                  <div className="flex gap-10">
                    <div>
                      <div className="text-3xl font-black text-primary icon-glow">17</div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1 text-white/35">Centres</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary icon-glow">1000+</div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1 text-white/35">Startups/Year</p>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-8">
                  <img 
                    src={ontarioLogo} 
                    alt="Government of Ontario" 
                    className="h-10 object-contain mb-5 brightness-0 invert opacity-70"
                  />
                  <p className="text-base leading-relaxed mb-6 text-white/45">
                    Funded by the <strong className="text-white/60">Ministry of Economic Development, Job Creation and Trade</strong>, 
                    enabling free and subsidized services for Northern Ontario entrepreneurs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full liquid-glass-btn text-primary">
                      Not-for-Profit
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full liquid-glass-btn text-primary">
                      Ontario Funded
                    </span>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
}
