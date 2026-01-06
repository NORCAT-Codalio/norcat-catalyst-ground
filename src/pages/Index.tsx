import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, DollarSign, Mountain, Rocket, Zap, Globe, Cpu, Leaf, Factory, ChevronRight, Lightbulb, Target, Building2, GraduationCap, Handshake, Send, PresentationIcon, UserPlus, Scale, Briefcase, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-underground.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Portfolio company logos
import turnkeyLogo from '@/assets/logos/turnkey.png';
import rogersLogo from '@/assets/logos/rogers.png';
import hardlineLogo from '@/assets/logos/hardline.png';
import waiveLogo from '@/assets/logos/waive.png';
import symxLogo from '@/assets/logos/symx.png';
import codalioLogo from '@/assets/logos/codalio.png';
import flosonicsLogo from '@/assets/logos/flosonics.png';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import loopxLogo from '@/assets/logos/loopx.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';

const portfolioCompanies = [
  { name: 'Turnkey', logo: turnkeyLogo },
  { name: 'Rogers', logo: rogersLogo },
  { name: 'Hard-Line', logo: hardlineLogo },
  { name: 'Waive', logo: waiveLogo },
  { name: 'Symx AI', logo: symxLogo },
  { name: 'Codalio', logo: codalioLogo },
  { name: 'Flosonics Medical', logo: flosonicsLogo },
  { name: 'Kinmetrix', logo: kinmetrixLogo },
  { name: 'LoopX', logo: loopxLogo },
  { name: 'Circuit IQ', logo: circuitiqLogo },
];
const services = [{
  icon: Users,
  title: 'Mentorship',
  description: 'Team-based mentoring from 12+ seasoned entrepreneurs and executives.',
  link: '/programs/mentorship-services',
  gradient: 'from-violet-500 to-purple-600'
}, {
  icon: DollarSign,
  title: 'Capital Access',
  description: 'Non-dilutive funding and our $5M Sudbury Catalyst Fund.',
  link: '/funding/sudbury-catalyst-fund',
  gradient: 'from-emerald-500 to-teal-600'
}, {
  icon: Lightbulb,
  title: 'Venture Growth',
  description: 'Strategic guidance from ideation to market traction.',
  link: '/programs/venture-growth-services',
  gradient: 'from-amber-500 to-orange-600'
}, {
  icon: Mountain,
  title: 'Labs',
  description: 'State-of-the-art underground testing and R&D facilities at the NORCAT Underground Centre.',
  link: '/mining/norcat-underground',
  gradient: 'from-cyan-500 to-blue-600'
}];
const ecosystemPartners = [{
  icon: Mountain,
  name: 'Mining Hub',
  desc: 'Nine operating mines, two mills, two smelters, a nickel refinery and over 300 mining supply and service companies'
}, {
  icon: Rocket,
  name: 'A City Built to Scale',
  desc: "Population boom, major investments, housing growth, and one of Canada's most successful immigration pilot programs"
}, {
  icon: GraduationCap,
  name: 'Talent',
  desc: 'Five post-secondary institutions and eight research and innovation centres fueling a skilled workforce'
}, {
  icon: Handshake,
  name: 'The Sudbury Model',
  desc: 'Innovation centres, industry, post-secondaries, and government working as one'
}];
const sectors = [{
  icon: Cpu,
  label: 'Mining Tech'
}, {
  icon: Leaf,
  label: 'Cleantech'
}, {
  icon: Factory,
  label: 'Industrial IoT'
}, {
  icon: Zap,
  label: 'Energy'
}, {
  icon: Globe,
  label: 'Critical Minerals'
}, {
  icon: Rocket,
  label: 'Deep Tech'
}];
const stats = [{
  value: '150+',
  label: 'Startups Supported'
}, {
  value: '$75M+',
  label: 'Capital Raised'
}, {
  value: '2,000+',
  label: 'Jobs Created'
}, {
  value: '50+',
  label: 'Countries Reached'
}];

const chatSupportItems = [
  { icon: PresentationIcon, label: 'Build my pitch deck' },
  { icon: Users, label: 'Find a co-founder' },
  { icon: UserPlus, label: 'Hire my first employee' },
  { icon: Building2, label: 'Register my business' },
  { icon: DollarSign, label: 'Raise funding' },
  { icon: Target, label: 'Find product-market fit' },
  { icon: Globe, label: 'Expand internationally' },
  { icon: Lightbulb, label: 'Validate my idea' },
  { icon: Scale, label: 'Legal & IP strategy' },
  { icon: Briefcase, label: 'Connect with mentors' },
  { icon: TrendingUp, label: 'Scale my operations' },
];

const typingExamples = [
  "How do I build a compelling pitch deck?",
  "What grants are available for cleantech startups?",
  "How do I find a technical co-founder?",
  "What's the best way to validate my idea?",
  "How do I protect my intellectual property?",
  "What funding options exist for early-stage startups?",
];

function AIChatSection() {
  const [chatInput, setChatInput] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentExample = typingExamples[exampleIndex];
    
    if (isTyping) {
      if (charIndex < currentExample.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 50 + Math.random() * 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setExampleIndex((prev) => (prev + 1) % typingExamples.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, exampleIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      console.log('Chat input:', chatInput);
      setChatInput('');
    }
  };

  const handleItemClick = (label: string) => {
    setChatInput(`Help me ${label.toLowerCase()}`);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Guidance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How can we help you <span className="text-gradient">scale?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get personalized guidance for your startup journey
            </p>
          </div>
        </ScrollReveal>

        {/* Scrolling Carousel */}
        <ScrollReveal delay={100}>
          <div className="mb-8 overflow-hidden">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee gap-4">
                {[...chatSupportItems, ...chatSupportItems].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => handleItemClick(item.label)}
                      className="group flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* AI Chat Input */}
        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative rounded-2xl border-2 border-border bg-background/90 backdrop-blur-sm shadow-lg hover:border-primary/30 focus-within:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full py-6 px-5 pr-14 text-base border-0 bg-transparent focus:outline-none focus:ring-0"
                    placeholder=""
                  />
                  {!chatInput && (
                    <div className="absolute inset-0 flex items-center px-5 pointer-events-none">
                      <span className="text-muted-foreground/60 text-base">
                        {displayText}
                        <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 bg-secondary/30">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                      title="AI Suggestions"
                    >
                      <Sparkles className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-muted-foreground">
                      Powered by AI
                    </span>
                  </div>
                  
                  <Button
                    type="submit"
                    size="sm"
                    className="rounded-full h-9 w-9 p-0 bg-primary hover:bg-primary/90"
                    disabled={!chatInput.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{
        y: heroY
      }}>
          <img src={heroImage} alt="NORCAT Innovation" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-teal-950/70" />
        </motion.div>

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{
          background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 70%)'
        }} animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <motion.div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full" style={{
          background: 'radial-gradient(circle, hsl(270 60% 50% / 0.1) 0%, transparent 70%)'
        }} animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

        <motion.div className="container mx-auto px-6 relative z-10 py-32" style={{
        opacity: heroOpacity
      }}>
          <div className="max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4 text-teal-400" />
                Ontario's Regional Innovation Centre
              </span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]" initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
              Build the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300">
                Future Here
              </span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-2xl" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              World-class mentorship, capital access, and infrastructure 
              for tech-enabled, IP-driven startups ready to scale.
            </motion.p>

            <motion.div className="flex flex-wrap gap-2 mb-10" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              {sectors.map((sector, i) => <motion.span key={sector.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.6 + i * 0.05
            }}>
                  <sector.icon className="w-4 h-4" />
                  {sector.label}
                </motion.span>)}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }}>
              <Link to="/apply" className="btn-primary-lg group">
                Work With Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-outline-dark group">
                Learn More
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }}>
          <motion.div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2" animate={{
          y: [0, 5, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <motion.div className="w-1 h-2 bg-white/60 rounded-full" animate={{
            y: [0, 4, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-20 bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
              Trusted by innovative companies worldwide
            </p>
          </ScrollReveal>
          
          <div className="relative">
            
            {/* Scrolling logos */}
            <motion.div className="flex gap-12" animate={{
            x: [0, -1200]
          }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}>
              {[...portfolioCompanies, ...portfolioCompanies].map((company, i) => (
                <div key={`${company.name}-${i}`} className="flex-shrink-0 flex items-center justify-center w-40 h-20 rounded-xl bg-white border border-border hover:border-primary/30 transition-colors group px-4">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-12 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <AIChatSection />

      {/* Services */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need to <span className="text-gradient">Scale</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive support designed for founders who want to move fast.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link to={service.link} className="group block h-full">
                  <motion.div className="relative h-full rounded-3xl bg-secondary/50 border border-border p-8 overflow-hidden hover:border-primary/30 transition-all duration-500" whileHover={{
                y: -8
              }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <motion.div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`} whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }}>
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </span>

                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  </motion.div>
                </Link>
              </ScrollReveal>)}
          </div>
        </div>
      </section>


      {/* Sudbury Ecosystem */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  The Sudbury Advantage
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A Thriving <span className="text-gradient">Innovation Ecosystem</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Greater Sudbury is home to the largest mining supply cluster in Canada, 
                  world-class research institutions, and a community built on innovation. 
                  Join an ecosystem where startups and industry connect.
                </p>
                <Link to="/ecosystem/sudbury" className="btn-primary group">
                  Explore the Ecosystem
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {ecosystemPartners.map((partner, i) => <motion.div key={partner.name} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.1
              }} whileHover={{
                y: -4
              }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <partner.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.desc}</p>
                  </motion.div>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => <motion.div key={stat.label} className="text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Underground Centre */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{
          background: 'radial-gradient(circle, hsl(173 83% 44% / 0.08) 0%, transparent 60%)'
        }} animate={{
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity
        }} />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-8">
                  <Mountain className="w-4 h-4" />
                  Globally Unique
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  NORCAT<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Underground Centre
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  The only innovation centre in the world with an operational underground mine. 
                  Test, validate, and demonstrate your technology in real conditions—1.2km of active tunnels.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Live underground testing environment', 'Technology demonstration zones', 'Mining industry validation', 'Global client access'].map((item, i) => <motion.li key={item} className="flex items-center gap-3 text-gray-300" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }}>
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      {item}
                    </motion.li>)}
                </ul>
                <Link to="/mining/norcat-underground" className="btn-primary-lg group">
                  Explore Underground
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <motion.div className="relative aspect-[4/3] rounded-3xl overflow-hidden" whileHover={{
                scale: 1.02
              }} transition={{
                type: 'spring',
                stiffness: 200
              }}>
                  <img src={heroImage} alt="NORCAT Underground Centre" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                  
                  <motion.div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.3
                }}>
                    <div className="text-3xl font-black text-white">1.2km</div>
                    <p className="text-white/70 text-sm">Underground Tunnels</p>
                  </motion.div>
                  
                  <motion.div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-glow" initial={{
                  opacity: 0,
                  scale: 0.8
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.4
                }}>
                    50+ Countries
                  </motion.div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Who We Support
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                For <span className="text-gradient">Ambitious</span> Founders
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Early-stage to scaling tech-enabled, IP-driven startups 
                building solutions that matter.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {sectors.map((sector, i) => <motion.div key={sector.label} className="flex items-center gap-3 p-5 rounded-2xl bg-secondary border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.05
              }} whileHover={{
                y: -4
              }}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <sector.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{sector.label}</span>
                  </motion.div>)}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn-primary-lg group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="btn-secondary group">
                  Learn About Us
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{
          background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 60%)'
        }} animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }} transition={{
          duration: 6,
          repeat: Infinity
        }} />
        </div>

        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Ready to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300">
                  Build?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join the next generation of founders scaling breakthrough technology.
              </p>
              <Link to="/apply" className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group">
                <Rocket className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
}