import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Globe, Sparkles, Zap, Linkedin, X } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foundersImage from '@/assets/founders-collab.jpg';

// Team headshots
import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie.png';

const values = [
  {
    icon: Users,
    title: 'Founder First',
    description: 'Everything we do centers on helping founders succeed. We support people, not just companies.',
  },
  {
    icon: Target,
    title: 'Impact Driven',
    description: 'We measure success by the jobs created, capital raised, and innovations brought to market.',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'We believe in the power of community and connections to accelerate growth.',
  },
  {
    icon: Globe,
    title: 'Globally Relevant',
    description: 'We help startups build solutions that matter on a global scale.',
  },
];

const team = [
  { 
    name: 'Brendan Skiffington', 
    role: 'Manager', 
    initials: 'BS',
    image: brendanImage,
    bio: 'Brendan leads the innovation team with a focus on helping startups navigate the early stages of growth. With extensive experience in venture development and ecosystem building, he connects founders with the resources they need to succeed.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Shashank Mehta', 
    role: 'Coordinator', 
    initials: 'SM',
    image: shashankImage,
    bio: 'Shashank coordinates programs and events that bring together founders, mentors, and investors. His passion for community building helps create meaningful connections within the innovation ecosystem.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Bart Streppel', 
    role: 'Content Specialist', 
    initials: 'BS',
    image: bartImage,
    bio: 'Bart crafts compelling narratives that showcase the impact of NORCAT Innovation and its portfolio companies. He helps startups tell their stories effectively to customers, investors, and media.',
    linkedin: 'https://linkedin.com/in/',
  },
  { 
    name: 'Jie Chen', 
    role: 'Associate', 
    initials: 'JC',
    image: jieImage,
    bio: 'Jie supports founders through research, analysis, and program delivery. Her attention to detail and commitment to excellence ensures startups receive the highest quality support.',
    linkedin: 'https://linkedin.com/in/',
  },
];

interface TeamMemberCardProps {
  member: typeof team[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function TeamMemberCard({ member, isExpanded, onToggle }: TeamMemberCardProps) {
  return (
    <>
      <motion.div
        className="card-modern p-6 text-center cursor-pointer hover:shadow-glow transition-all duration-300"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow-glow"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-glow">
            {member.initials}
          </div>
        )}
        <div className="font-semibold">{member.name}</div>
        <div className="text-sm text-muted-foreground">{member.role}</div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />
            
            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-background rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={onToggle}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                {/* Content */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground flex items-center justify-center font-bold text-3xl mx-auto mb-6 shadow-glow-lg">
                    {member.initials}
                  </div>
                  
                  <h3 className="headline-sm mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-6">{member.role}</p>
                  
                  <p className="body-md text-left mb-8">
                    {member.bio}
                  </p>

                  {/* LinkedIn Link */}
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function About() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="badge mb-6 mx-auto inline-flex">
                <Sparkles className="h-4 w-4" />
                About Us
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-hero mb-8">
                Sudbury's Regional
                <span className="block text-gradient">Innovation Centre</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-xl max-w-2xl mx-auto">
                A not-for-profit Innovation Centre funded by the Government of Ontario. 
                We're the catalyst for tech-enabled startup growth in Northern Ontario.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={foundersImage}
                  alt="NORCAT Innovation team working with founders"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="badge mb-6">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="headline-xl mb-6">
                  Helping founders build
                  <span className="text-gradient"> world-changing</span> companies
                </h2>
                <p className="body-lg mb-6">
                  Through mentorship, capital access, and our unique underground testing facility, 
                  we provide everything ambitious entrepreneurs need to start, grow, and scale.
                </p>
                <p className="body-md mb-10">
                  Our specialization in mining technology makes us unique—offering founders 
                  access to a real operational mine for testing and validation.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="stat-number text-5xl">15+</div>
                    <div className="text-muted-foreground mt-1">Years of Impact</div>
                  </div>
                  <div>
                    <div className="stat-number text-5xl">150+</div>
                    <div className="text-muted-foreground mt-1">Startups Supported</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="badge mb-6 mx-auto inline-flex">
                <Zap className="h-4 w-4" />
                Our Values
              </div>
              <h2 className="headline-xl mb-6">
                Principles that
                <span className="text-gradient"> guide us</span>
              </h2>
              <p className="body-xl">
                These principles guide everything we do and how we support founders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="card-glow h-full">
                  <div className="p-6 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="headline-sm mb-3">{value.title}</h3>
                    <p className="body-md">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="badge mb-6">
                  <Users className="h-4 w-4" />
                  Our Team
                </div>
                <h2 className="headline-xl mb-6">
                  Meet the
                  <span className="text-gradient"> Innovation Team</span>
                </h2>
                <p className="body-lg mb-6">
                  Our dedicated team works closely with founders to provide the support, 
                  resources, and connections needed to build successful companies.
                </p>
                <p className="body-md mb-8">
                  Click on any team member to learn more about their background and 
                  connect with them on LinkedIn.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {team.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    isExpanded={expandedMember === member.name}
                    onToggle={() => setExpandedMember(
                      expandedMember === member.name ? null : member.name
                    )}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RIC Network Section */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - RIC Network */}
              <div>
                <div className="badge mb-4">
                  <Globe className="h-4 w-4" />
                  Regional Innovation Centre Network
                </div>
                <p className="body-md mb-4">
                  We're part of Ontario's 17-centre RIC Network, connecting entrepreneurs 
                  with resources, mentorship, and funding to start and scale businesses.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="stat-number text-3xl">17</div>
                    <p className="text-muted-foreground text-xs">Centres</p>
                  </div>
                  <div className="text-center">
                    <div className="stat-number text-3xl">1000+</div>
                    <p className="text-muted-foreground text-xs">Startups/Year</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Government Funding */}
              <div>
                <div className="badge mb-4">
                  <Target className="h-4 w-4" />
                  Government of Ontario
                </div>
                <p className="body-md mb-4">
                  Funded by the <strong>Ministry of Economic Development, Job Creation and Trade</strong>, 
                  enabling free and subsidized services for Northern Ontario entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Not-for-Profit
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Ontario Funded
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <h2 className="headline-xl text-white mb-6">
              Ready to join our
              <span className="text-gradient"> community?</span>
            </h2>
            <p className="body-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Whether you're just starting out or ready to scale, we're here to help 
              you build something extraordinary.
            </p>
            <Link to="/apply" className="btn-primary-lg">
              Apply for Venture Growth Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
