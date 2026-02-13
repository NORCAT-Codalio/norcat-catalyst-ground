import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, X } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState } from 'react';
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
  },
  {
    title: 'Impact Driven',
    description: 'We measure success by the jobs created, capital raised, and innovations brought to market.',
  },
  {
    title: 'Community Focused',
    description: 'We believe in the power of community and connections to accelerate growth.',
  },
  {
    title: 'Execution Focused',
    description: 'We prioritize real-world testing, validation, and practical outcomes, with support grounded in execution.',
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

interface TeamModalProps {
  member: typeof team[0] | null;
  onClose: () => void;
}

function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
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
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
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
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-[hsl(168,100%,36%)] font-medium mb-6">{member.role}</p>
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
      <div style={{
        '--primary': '168 100% 36%',
        '--accent': '168 100% 36%',
        '--ring': '168 100% 36%',
        '--gradient-primary': 'linear-gradient(135deg, hsl(168 100% 30%) 0%, hsl(168 100% 36%) 50%, hsl(168 85% 55%) 100%)',
        '--shadow-glow': '0 0 60px -12px hsl(168 100% 36% / 0.5)',
        '--shadow-glow-lg': '0 0 80px -12px hsl(168 100% 36% / 0.6)',
      } as React.CSSProperties}>

        {/* Hero Section — Startup Genome style: cream bg, huge text, stats row, signature lines */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
          {/* Signature lines decoration */}
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[60%] h-full object-cover opacity-40 pointer-events-none select-none"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(168,100%,36%)] mb-6">
                  About NORCAT Innovation
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8" style={{ color: '#1a1a2e' }}>
                  Greater Sudbury's Regional{' '}
                  <span className="text-gradient">Innovation Centre</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#4a4a5a' }}>
                  A not-for-profit Innovation Centre funded by the Government of Ontario, 
                  supporting tech-enabled, IP-driven startups across Northern Ontario.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Stats Row */}
          <div className="container mx-auto px-6 relative z-10 mt-20">
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-16 md:gap-24">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-5xl md:text-6xl font-black text-[hsl(168,100%,36%)] tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-xs font-semibold tracking-[0.15em] uppercase mt-2" style={{ color: '#6b6b7b' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission Section — clean white, image + text side by side */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[40%] opacity-20 pointer-events-none select-none rotate-180"
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal direction="left">
                <img
                  src={foundersImage}
                  alt="NORCAT Innovation team working with founders"
                  className="rounded-2xl shadow-xl w-full"
                />
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(168,100%,36%)] mb-4">
                    Our Mission
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6" style={{ color: '#1a1a2e' }}>
                    Helping founders build{' '}
                    <span className="text-gradient">world-changing</span> companies
                  </h2>
                  <p className="text-lg leading-relaxed mb-5" style={{ color: '#4a4a5a' }}>
                    Through mentorship, capital access, and our unique underground testing facility, 
                    we provide everything ambitious entrepreneurs need to start, grow, and scale.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#6b6b7b' }}>
                    Our specialization in mining technology makes us unique—offering founders 
                    access to a real operational mine for testing and validation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section — editorial grid on cream */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(168 100% 36% / 0.2), transparent)' }} />
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[50%] opacity-15 pointer-events-none select-none"
          />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(168,100%,36%)] mb-4">
                  Our Values
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight" style={{ color: '#1a1a2e' }}>
                  Principles that guide us
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'hsl(168 100% 36% / 0.15)' }}>
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="bg-white p-10 md:p-12 h-full">
                    <div className="text-5xl font-black text-[hsl(168,100%,36%)] opacity-30 mb-4">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a2e' }}>{value.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#6b6b7b' }}>{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section — clean, editorial */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-16">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[hsl(168,100%,36%)] mb-4">
                  Our Team
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6" style={{ color: '#1a1a2e' }}>
                  Meet the Innovation Team
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#4a4a5a' }}>
                  Our dedicated team works closely with founders to provide the support, 
                  resources, and connections needed to build successful companies.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 80}>
                  <motion.div
                    className="group cursor-pointer text-center"
                    onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative mb-5 overflow-hidden rounded-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-[hsl(168,100%,36%)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: '#1a1a2e' }}>{member.name}</h3>
                    <p className="text-sm font-medium" style={{ color: '#6b6b7b' }}>{member.role}</p>
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

        {/* CTA Section — dark with signature lines */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#1a1a2e' }}>
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                Ready to join our{' '}
                <span className="text-[hsl(168,100%,36%)]">community?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Whether you're just starting out or ready to scale, we're here to help 
                you build something extraordinary.
              </p>
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'hsl(168, 100%, 36%)' }}
              >
                Apply for Venture Growth Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* RIC Network Section — cream */}
        <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src={innovateonLogo} 
                    alt="InnovateON - Regional Innovation Centre Network" 
                    className="h-8 object-contain mb-5"
                  />
                  <p className="text-base leading-relaxed mb-5" style={{ color: '#4a4a5a' }}>
                    We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs 
                    with resources, mentorship, and funding to start and scale businesses.
                  </p>
                  <div className="flex gap-10">
                    <div>
                      <div className="text-3xl font-black text-[hsl(168,100%,36%)]">17</div>
                      <p className="text-xs font-semibold tracking-[0.1em] uppercase mt-1" style={{ color: '#6b6b7b' }}>Centres</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[hsl(168,100%,36%)]">1000+</div>
                      <p className="text-xs font-semibold tracking-[0.1em] uppercase mt-1" style={{ color: '#6b6b7b' }}>Startups/Year</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={ontarioLogo} 
                    alt="Government of Ontario" 
                    className="h-10 object-contain mb-5"
                  />
                  <p className="text-base leading-relaxed mb-5" style={{ color: '#4a4a5a' }}>
                    Funded by the <strong>Ministry of Economic Development, Job Creation and Trade</strong>, 
                    enabling free and subsidized services for Northern Ontario entrepreneurs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: 'hsl(168 100% 36% / 0.3)', color: 'hsl(168, 100%, 36%)', backgroundColor: 'hsl(168 100% 36% / 0.08)' }}>
                      Not-for-Profit
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: 'hsl(168 100% 36% / 0.3)', color: 'hsl(168, 100%, 36%)', backgroundColor: 'hsl(168 100% 36% / 0.08)' }}>
                      Ontario Funded
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
}
