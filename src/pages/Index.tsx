import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, DollarSign, Mountain, Rocket, Cpu, Leaf, ChevronRight, Lightbulb, Target, Building2, GraduationCap, Handshake, Brain, Stethoscope, Cog, Globe, Calendar, MapPin, Clock, ExternalLink, Quote, TrendingUp, BarChart3, Activity } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-underground.jpg';
import miningUndergroundHero from '@/assets/mining-underground-hero.jpg';
import signatureLines from '@/assets/signature-lines.png';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import ctaPhoto1 from '@/assets/cta-photo-1.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import ctaPhoto3 from '@/assets/cta-photo-3.jpg';
import ctaPhoto4 from '@/assets/cta-photo-4.jpg';
import ctaPhoto5 from '@/assets/cta-photo-5.png';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
import rephealthLogo from '@/assets/logos/rephealth.png';
import rnaDiagnosticsLogo from '@/assets/logos/rna-diagnostics.png';
import komatsuLogo from '@/assets/logos/komatsu.png';
import maestroLogo from '@/assets/logos/maestro.png';
import staffstatLogo from '@/assets/logos/staffstat.png';
import planaLogo from '@/assets/logos/plana.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import ontarioLogo from '@/assets/logos/ontario.png';
import norcatLogo from '@/assets/logos/norcat.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import tedcLogo from '@/assets/logos/tedc.png';

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
  { name: 'Rep Health', logo: rephealthLogo },
  { name: 'RNA Diagnostics', logo: rnaDiagnosticsLogo },
  { name: 'Komatsu', logo: komatsuLogo },
  { name: 'Maestro Digital Mine', logo: maestroLogo },
  { name: 'StaffStat', logo: staffstatLogo },
  { name: 'Plan A', logo: planaLogo },
];

const partnerLogos = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogo },
  { name: 'NORCAT', logo: norcatLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'TEDC', logo: tedcLogo },
];

const sectors = [
  { icon: Cpu, label: 'Mining Tech' },
  { icon: Leaf, label: 'Clean Tech' },
  { icon: Brain, label: 'AI/ML' },
  { icon: Stethoscope, label: 'Med Tech' },
  { icon: Cog, label: 'Robotics' },
  { icon: Rocket, label: 'and more' },
];

const stats = [
  { value: '$75M+', label: 'Capital Raised by Startups', icon: TrendingUp },
  { value: '15+', label: 'Countries with Active Clients', icon: Globe },
  { value: '18', label: 'Mentors & Advisors in Your Corner', icon: Users },
  { value: '2,000+', label: 'Jobs Created', icon: Activity },
];

const upcomingPrograms = [
  {
    type: 'Program',
    title: 'Venture Growth Services',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury (Virtual Available)',
    link: '/programs/venture-growth-services',
  },
  {
    type: 'Program',
    title: 'Mentorship Services',
    applyBy: 'Rolling Intake',
    duration: '12+ Month Journey',
    location: 'Northern Ontario',
    link: '/programs/mentorship-services',
  },
  {
    type: 'Funding',
    title: 'Sudbury Catalyst Fund',
    applyBy: 'Always Open',
    duration: '$5M Fund',
    location: 'Greater Sudbury',
    link: '/funding/sudbury-catalyst-fund',
  },
];

const blogPosts = [
  {
    category: 'Success Stories',
    title: 'How NORCAT Innovation Helped Scale 150+ Startups',
    link: '/insights/success-stories',
  },
  {
    category: 'News',
    title: 'Mining Transformed: Technology Innovation in Northern Ontario',
    link: '/insights/news',
  },
  {
    category: 'Reports',
    title: 'The State of the Greater Sudbury Innovation Ecosystem',
    link: '/insights/reports',
  },
];

/* Animated counter hook */
function useCounter(end: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
}

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* ══════════════ FULL DARK PAGE WRAPPER ══════════════ */}
      <div className="bg-[hsl(220,20%,7%)] min-h-screen">

        {/* ───── HERO ───── */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Parallax background image */}
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src={heroImage} alt="NORCAT Innovation" className="w-full h-full object-cover scale-[1.15]" />
            {/* Cinematic multi-layer gradient */}
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(180deg, hsl(220 25% 4% / 0.6) 0%, transparent 35%),
                linear-gradient(0deg, hsl(220 25% 4% / 0.95) 0%, transparent 40%),
                linear-gradient(160deg, hsl(220 22% 6% / 0.92) 0%, hsl(220 20% 8% / 0.7) 40%, hsl(168 50% 10% / 0.75) 100%)
              `
            }} />
          </motion.div>

          {/* Cinematic vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, hsl(220 25% 4% / 0.5) 100%)'
          }} />

          {/* Animated ambient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-[15%] right-[20%] w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.15) 0%, hsl(168 100% 35% / 0.05) 40%, transparent 70%)' }}
              animate={{ scale: [1, 1.4, 1], x: [0, 80, 0], y: [0, -50, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(168 80% 45% / 0.1) 0%, transparent 70%)' }}
              animate={{ scale: [1.2, 0.9, 1.2], x: [0, -60, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(200 60% 50% / 0.06) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'linear-gradient(hsl(168 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(168 100% 50% / 0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Noise texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}
          />

          {/* Signature lines */}
          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-2/3 object-contain object-right-top opacity-20 pointer-events-none select-none mix-blend-overlay"
          />

          {/* Hero content */}
          <motion.div className="container mx-auto px-6 relative z-10 py-32" style={{ opacity: heroOpacity }}>
            <div className="max-w-5xl">
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/90 mb-8 liquid-glass-btn">
                  <Sparkles className="h-4 w-4 icon-glow" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  Sudbury's Regional Innovation Centre
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-8 tracking-tight leading-[0.92]"
                style={{ textShadow: '0 0 80px hsl(168 100% 35% / 0.15), 0 4px 16px hsl(220 25% 4% / 0.4)' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Build the
                <span className="block" style={{ color: 'hsl(168, 100%, 35%)', textShadow: '0 0 60px hsl(168 100% 35% / 0.4), 0 0 120px hsl(168 100% 35% / 0.15)' }}>
                  Future Here
                </span>
              </motion.h1>

              {/* Sector tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
              >
                {sectors.map((sector, i) => (
                  <motion.span
                    key={sector.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/70 text-sm liquid-glass hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + i * 0.06 }}
                  >
                    <sector.icon className="w-4 h-4" />
                    {sector.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-xl md:text-2xl text-white leading-relaxed mb-10 max-w-2xl font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                World-class mentorship, capital access, and infrastructure for tech-enabled, IP-driven startups ready to scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{ background: 'hsl(168, 100%, 35%)', boxShadow: '0 0 50px -8px hsl(168 100% 35% / 0.5), 0 0 100px -20px hsl(168 100% 35% / 0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)' }}>
                  Work With Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/80 hover:text-white transition-all duration-300 group liquid-glass-btn hover:scale-[1.02] active:scale-[0.98]">
                  Learn More
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
              style={{ boxShadow: '0 0 20px hsl(168 100% 35% / 0.1)' }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: 'hsl(168, 100%, 35%)', boxShadow: '0 0 6px hsl(168 100% 35% / 0.6)' }}
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </section>



        {/* ───── PORTFOLIO COMPANIES — Logo Carousel ───── */}
        <section className="relative py-10 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...portfolioCompanies, ...portfolioCompanies].map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-36 h-16 px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── STATS — Data Dashboard Strip ───── */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.05) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 80% 50% / 0.04) 0%, transparent 70%)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Global Impact Dashboard
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'hsl(220, 20%, 15%)' }}>
                  Trusted by <span style={{ color: 'hsl(168, 100%, 30%)' }}>150+ startups.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <div className="rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform duration-300" style={{
                    background: 'linear-gradient(135deg, hsla(168, 100%, 35%, 0.06) 0%, hsla(168, 80%, 40%, 0.03) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderTop: '1px solid hsla(168, 100%, 60%, 0.35)',
                    borderLeft: '1px solid hsla(168, 100%, 60%, 0.25)',
                    borderRight: '0.5px solid hsla(168, 100%, 35%, 0.1)',
                    borderBottom: '0.5px solid hsla(168, 100%, 35%, 0.08)',
                    boxShadow: 'inset 0 1px 1px 0 hsla(168, 100%, 70%, 0.15), inset 0 0 20px 0 hsla(168, 100%, 35%, 0.04), 0 8px 32px hsla(168, 100%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                  }}>
                    <stat.icon className="w-6 h-6 mx-auto mb-4" style={{ color: 'hsl(168, 100%, 30%)' }} />
                    <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: 'hsl(220, 20%, 15%)' }}>{stat.value}</div>
                    <p className="text-sm font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ───── PROGRAMS — Insight Cards Grid ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 glass-frosted-btn-teal">
                    Programs & Funding
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'hsl(220, 20%, 15%)' }}>
                    Support that adapts as your <span style={{ color: 'hsl(168, 100%, 28%)' }}>company grows.</span>
                  </h2>
                  <p className="font-light max-w-xl" style={{ color: 'hsl(220, 20%, 10%)' }}>We help you turn a rough idea into something real—with hands-on support, hard conversations, and access to the stuff that actually moves the needle.</p>
                </div>
                <Link to="/events" className="inline-flex items-center gap-2 font-semibold group shrink-0 transition-colors" style={{ color: 'hsl(168, 100%, 28%)' }}>
                  View all
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingPrograms.map((program, i) => (
                <ScrollReveal key={program.title} delay={i * 0.1}>
                  <Link to={program.link} className="group block h-full">
                    <div 
                      className="rounded-[20px] p-7 h-full hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(165deg, hsla(168, 100%, 35%, 0.12) 0%, hsla(168, 100%, 35%, 0.06) 50%, hsla(168, 80%, 40%, 0.03) 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderTop: '1px solid hsla(168, 100%, 60%, 0.35)',
                        borderLeft: '1px solid hsla(168, 100%, 60%, 0.25)',
                        borderRight: '0.5px solid hsla(168, 100%, 35%, 0.1)',
                        borderBottom: '0.5px solid hsla(168, 100%, 35%, 0.08)',
                        boxShadow: 'inset 0 1px 1px 0 hsla(168, 100%, 70%, 0.15), inset 0 0 20px 0 hsla(168, 100%, 35%, 0.04), 0 8px 32px hsla(168, 100%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                      }}
                    >
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
                        style={{ 
                          background: 'hsl(168 100% 35% / 0.1)',
                          color: 'hsl(168, 100%, 28%)',
                          border: '0.5px solid hsl(168 100% 35% / 0.15)',
                        }}
                      >
                        {program.type}
                      </span>
                      <h3 className="text-xl font-bold mb-5 transition-colors" style={{ color: 'hsl(220, 20%, 15%)' }}>{program.title}</h3>
                      <div className="space-y-3 text-sm font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          {program.applyBy}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          {program.location}
                        </div>
                      </div>
                      <div className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium glass-frosted-btn-teal group-hover:scale-[1.03]">
                        See Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── TESTIMONIAL — Full-width Glass Quote ───── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={circuitiqTeam} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'hsla(220, 25%, 8%, 0.8)' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="liquid-glass-strong glass-shimmer rounded-3xl p-10 md:p-14 text-center">
                  <Quote className="w-10 h-10 mx-auto mb-8 opacity-30" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/80 mb-10">
                    Building a startup is lonely. NORCAT's community pulled me in, but the expert support—from mentorship to
                    capital access—is what's kept me here. The value is real.
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'hsl(168 100% 35% / 0.15)', border: '1px solid hsl(168 100% 35% / 0.3)' }}>
                      <span className="text-xl font-bold" style={{ color: 'hsl(168, 100%, 35%)' }}>LB</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white">Luke Begley</p>
                      <p className="text-white/35 text-sm font-light">Founder & CEO, CircuitIQ</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── ECOSYSTEM — Data Map Section ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6 glass-frosted-btn-teal">
                    <Globe className="w-4 h-4" />
                    The Greater Sudbury Advantage
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(220, 20%, 15%)' }}>
                    A Thriving <span style={{ color: 'hsl(168, 100%, 28%)' }}>Innovation Ecosystem</span>
                  </h2>
                  <p className="text-xl leading-relaxed mb-8 font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    Greater Sudbury is home to the largest mining supply cluster in Canada, world-renowned research
                    institutions, and a community built on innovation. Join an ecosystem where startups and industry connect.
                  </p>
                  <Link to="/ecosystem/sudbury" className="glass-frosted-btn-teal inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]">
                    Explore the Ecosystem
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mountain, name: 'Mining Hub', desc: 'Nine operating mines and 300+ mining supply companies' },
                    { icon: Rocket, name: 'A City Built to Scale', desc: 'Major investments and growing population' },
                    { icon: GraduationCap, name: 'Talent', desc: 'Five post-secondary institutions' },
                    { icon: Handshake, name: 'The Sudbury Model', desc: 'Industry, academia, and government working as one' },
                  ].map((partner, i) => (
                    <motion.div
                      key={partner.name}
                      className="rounded-[20px] p-6 hover:scale-[1.03] transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(165deg, hsla(168, 100%, 35%, 0.12) 0%, hsla(168, 100%, 35%, 0.06) 50%, hsla(168, 80%, 40%, 0.03) 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderTop: '1px solid hsla(168, 100%, 60%, 0.35)',
                        borderLeft: '1px solid hsla(168, 100%, 60%, 0.25)',
                        borderRight: '0.5px solid hsla(168, 100%, 35%, 0.1)',
                        borderBottom: '0.5px solid hsla(168, 100%, 35%, 0.08)',
                        boxShadow: 'inset 0 1px 1px 0 hsla(168, 100%, 70%, 0.15), inset 0 0 20px 0 hsla(168, 100%, 35%, 0.04), 0 8px 32px hsla(168, 100%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'hsl(168 100% 35% / 0.1)' }}>
                        <partner.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                      <h3 className="font-semibold mb-1" style={{ color: 'hsl(220, 20%, 15%)' }}>{partner.name}</h3>
                      <p className="text-sm font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>{partner.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───── ECOSYSTEM 2 — Duplicate ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6 glass-frosted-btn-teal">
                    <Globe className="w-4 h-4" />
                    The Greater Sudbury Advantage
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(220, 20%, 15%)' }}>
                    A Thriving <span style={{ color: 'hsl(168, 100%, 28%)' }}>Innovation Ecosystem</span>
                  </h2>
                  <p className="text-xl leading-relaxed mb-8 font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>
                    Greater Sudbury is home to the largest mining supply cluster in Canada, world-renowned research
                    institutions, and a community built on innovation. Join an ecosystem where startups and industry connect.
                  </p>
                  <Link to="/ecosystem/sudbury" className="glass-frosted-btn-teal inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]">
                    Explore the Ecosystem
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mountain, name: 'Mining Hub', desc: 'Nine operating mines and 300+ mining supply companies' },
                    { icon: Rocket, name: 'A City Built to Scale', desc: 'Major investments and growing population' },
                    { icon: GraduationCap, name: 'Talent', desc: 'Five post-secondary institutions' },
                    { icon: Handshake, name: 'The Sudbury Model', desc: 'Industry, academia, and government working as one' },
                  ].map((partner, i) => (
                    <motion.div
                      key={partner.name}
                      className="rounded-[20px] p-6 hover:scale-[1.03] transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(165deg, hsla(168, 100%, 35%, 0.12) 0%, hsla(168, 100%, 35%, 0.06) 50%, hsla(168, 80%, 40%, 0.03) 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderTop: '1px solid hsla(168, 100%, 60%, 0.35)',
                        borderLeft: '1px solid hsla(168, 100%, 60%, 0.25)',
                        borderRight: '0.5px solid hsla(168, 100%, 35%, 0.1)',
                        borderBottom: '0.5px solid hsla(168, 100%, 35%, 0.08)',
                        boxShadow: 'inset 0 1px 1px 0 hsla(168, 100%, 70%, 0.15), inset 0 0 20px 0 hsla(168, 100%, 35%, 0.04), 0 8px 32px hsla(168, 100%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'hsl(168 100% 35% / 0.1)' }}>
                        <partner.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                      <h3 className="font-semibold mb-1" style={{ color: 'hsl(220, 20%, 15%)' }}>{partner.name}</h3>
                      <p className="text-sm font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>{partner.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>



        {/* ───── INSIGHTS — Blog Cards ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(168 40% 98%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 80% 50% / 0.05) 0%, transparent 70%)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Insights
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(220, 20%, 15%)' }}>
                    Real stories. <span style={{ color: 'hsl(168, 100%, 30%)' }}>Unique insights.</span>
                  </h2>
                  <p className="mt-2 font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>No corporate fluff—just the raw, unfiltered truth about what it takes to build a company from the people who've done it.</p>
                </div>
                <Link to="/insights/news" className="inline-flex items-center gap-2 font-semibold group shrink-0" style={{ color: 'hsl(168, 100%, 30%)' }}>
                  See all stories
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.1}>
                  <Link to={post.link} className="group block h-full">
                    <div className="rounded-2xl p-7 h-full hover:scale-[1.02] transition-all duration-300" style={{
                      background: 'linear-gradient(135deg, hsla(168, 100%, 35%, 0.06) 0%, hsla(168, 80%, 40%, 0.03) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 100%, 60%, 0.35)',
                      borderLeft: '1px solid hsla(168, 100%, 60%, 0.25)',
                      borderRight: '0.5px solid hsla(168, 100%, 35%, 0.1)',
                      borderBottom: '0.5px solid hsla(168, 100%, 35%, 0.08)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 100%, 70%, 0.15), inset 0 0 20px 0 hsla(168, 100%, 35%, 0.04), 0 8px 32px hsla(168, 100%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}>
                      <span className="text-xs font-medium mb-4 block" style={{ color: 'hsl(168, 100%, 30%)' }}>{post.category}</span>
                      <h3 className="text-lg font-bold mb-5 group-hover:text-[hsl(168,100%,30%)] transition-colors" style={{ color: 'hsl(220, 20%, 15%)' }}>{post.title}</h3>
                      <span className="inline-flex items-center gap-2 text-sm group-hover:text-[hsl(168,100%,30%)] transition-colors font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ───── INSIGHTS 2 — Reports & Resources ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(220 10% 80% / 0.3) 0%, transparent 70%)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                    Reports & Resources
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'hsl(220, 15%, 20%)' }}>
                    Real Stories. <span className="text-gradient">Unique Insights.</span>
                  </h2>
                  <p className="mt-2 font-light" style={{ color: 'hsl(220, 15%, 25%)' }}>Research, analysis, and quarterly updates from our team—transparent reporting on ecosystem impact and portfolio performance.</p>
                </div>
                <Link to="/insights/reports" className="inline-flex items-center gap-2 font-semibold group shrink-0" style={{ color: 'hsl(220, 15%, 40%)' }}>
                  View all reports
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { category: 'Annual Report', title: '2025 Annual Impact Report: Our Ecosystem at a Glance', link: '/insights/reports' },
                { category: 'Research', title: 'Northern Ontario Tech Ecosystem Landscape Analysis', link: '/insights/reports' },
                { category: 'Industry Report', title: 'Mining Technology Trends Shaping 2026 and Beyond', link: '/insights/reports' },
              ].map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.1}>
                  <Link to={post.link} className="group block h-full">
                    <div className="rounded-2xl p-7 h-full hover:scale-[1.02] transition-all duration-300" style={{
                      background: 'linear-gradient(145deg, hsla(220, 15%, 75%, 0.2) 0%, hsla(220, 15%, 65%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(220, 15%, 100%, 0.5)',
                      borderLeft: '1px solid hsla(220, 15%, 100%, 0.35)',
                      borderRight: '0.5px solid hsla(220, 15%, 80%, 0.15)',
                      borderBottom: '0.5px solid hsla(220, 15%, 60%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(220, 15%, 100%, 0.25), inset 0 0 20px 0 hsla(220, 15%, 80%, 0.06), 0 8px 32px hsla(220, 15%, 20%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}>
                      <span className="text-xs font-medium mb-4 block" style={{ color: 'hsl(220, 15%, 45%)' }}>{post.category}</span>
                      <h3 className="text-lg font-bold mb-5 group-hover:opacity-70 transition-opacity" style={{ color: 'hsl(220, 15%, 20%)' }}>{post.title}</h3>
                      
                      {/* Glass capsule button inspired by reference */}
                      <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-[1.03]" style={{
                        background: 'linear-gradient(145deg, hsla(220, 15%, 75%, 0.25) 0%, hsla(220, 15%, 65%, 0.15) 100%)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        borderTop: '1px solid hsla(220, 15%, 100%, 0.45)',
                        borderLeft: '1px solid hsla(220, 15%, 100%, 0.3)',
                        borderRight: '0.5px solid hsla(220, 15%, 80%, 0.12)',
                        borderBottom: '0.5px solid hsla(220, 15%, 60%, 0.08)',
                        boxShadow: 'inset 0 1px 0 0 hsla(220, 15%, 100%, 0.3), inset 0 -1px 2px 0 hsla(220, 15%, 40%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.1)',
                        color: 'hsl(220, 15%, 30%)',
                      }}>
                        Download PDF
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-24 md:pt-32 pb-0 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)' }}>
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 h-1/2 w-auto object-contain object-right opacity-50 pointer-events-none select-none mix-blend-overlay"
            style={{ transform: 'scaleX(-1)' }}
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                Ready to join our{' '}
                <span style={{ color: 'hsla(0, 0%, 100%, 0.85)' }}>community?</span>
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

          {/* Community photo strip — edge to edge */}
          <div className="grid grid-cols-5 gap-3 px-3 pb-5 mt-14">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto1} alt="Speaker presenting" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto2} alt="Audience at event" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto3} alt="Community event" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto4} alt="NORCAT podium presentation" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto5} alt="Kinmetrix pitch presentation" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
