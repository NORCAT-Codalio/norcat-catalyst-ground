import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Mountain, Rocket, Cpu, Leaf, ChevronRight, Lightbulb, Building2, GraduationCap, Handshake, Brain, Stethoscope, Cog, Globe, Calendar, MapPin, Clock, ExternalLink, Quote, TrendingUp, BarChart3, Activity, Pickaxe, FileText } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroVideo from '@/assets/vnp-hero.mp4.asset.json';
import miningUndergroundHero from '@/assets/mining-underground-hero.jpg';
import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';
import loopxTeam from '@/assets/loopx-team.jpg';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import ctaPhoto1 from '@/assets/cta-photo-1.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import ctaPhoto3 from '@/assets/cta-photo-3.jpg';
import ctaPhoto4 from '@/assets/cta-photo-4.jpg';
import ctaPhoto5 from '@/assets/cta-photo-5.png';
import bev2026Photo from '@/assets/BEV2026.jpg.asset.json';

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
  { value: '500+', label: 'Ecosystem Members', icon: Users },
  { value: '150+', label: 'Innovative Startups Supported', icon: Rocket },
  { value: '2,000+', label: 'Sector-Diverse Jobs Created', icon: Activity },
];

const upcomingPrograms = [
  {
    title: 'Accessible Funding',
    description: 'We help you make the connections with venture capital and government funding.',
    cta: 'Explore Funding',
    link: '/programs/venture-growth-services',
  },
  {
    title: 'Real-World Validation',
    description: 'We mitigate the risk and cost of scientific, industrial, and technological innovation.',
    cta: 'Explore Facilities',
    link: '/programs/mentorship-services',
  },
  {
    title: 'Innovative Advisory',
    description: 'We connect you with a broad network of sector experts, seasoned mentors, and city support.',
    cta: 'Explore Ecosystem',
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
            <img src={heroImage} alt="NORCAT Innovation" className="w-full h-full object-cover object-right" />
            {/* Dark overlay at 20% opacity */}
            <div className="absolute inset-0 bg-black/20" />
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
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white mb-8 tracking-tight leading-[0.92]"
                style={{ fontFamily: "'Open Sans', sans-serif", textShadow: '0 0 80px hsl(168 100% 35% / 0.15), 0 4px 16px hsl(220 25% 4% / 0.4)' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span style={{ color: 'hsl(168, 100%, 35%)', textShadow: '0 0 60px hsl(168 100% 35% / 0.4), 0 0 120px hsl(168 100% 35% / 0.15)', fontWeight: 700 }}>ENTER THE</span>{' '}
                NORTH
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl md:text-2xl text-white leading-relaxed mb-8 max-w-2xl font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
              >
                For more than 30 years, NORCAT has been an engine of creative problem-solving by putting brilliant people together with advanced technology. Our design was built from the ground up to support your small-and-medium-sized business demonstrate, fund, validate, and scale with the innovative advantage only found in Northern Ontario.
              </motion.p>

              {/* Sector tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                {sectors.map((sector, i) => (
                  <motion.span
                    key={sector.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/70 text-sm liquid-glass hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.75 + i * 0.06 }}
                  >
                    <sector.icon className="w-4 h-4" />
                    {sector.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                  background: 'linear-gradient(145deg, hsla(168, 100%, 35%, 0.3) 0%, hsla(168, 100%, 35%, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(168, 100%, 50%, 0.4)',
                  boxShadow: 'inset 0 1px 0 0 hsla(168, 100%, 60%, 0.3), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}>
                  Work With Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98]" style={{
                  background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                  boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}>
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

        {/* ───── STATS Strip ───── */}
        <div className="relative z-20" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="container mx-auto px-4 pt-12 pb-6">
            <p className="text-center text-sm md:text-base uppercase tracking-widest font-black mb-10" style={{ color: 'hsl(220, 15%, 25%)' }}>
              NORCAT Innovation supports creative solutions globally
            </p>
            <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{
                    background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
                    border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    <stat.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black" style={{ color: 'hsl(220, 15%, 20%)' }}>{stat.value}</div>
                    <p className="text-sm md:text-base font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom wave */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ marginBottom: '-49px', zIndex: 10 }}>
            <path d="M0,0 C240,45 480,10 720,35 C960,55 1200,15 1440,0 L1440,50 L0,50 Z" fill="hsl(220 15% 92%)" />
          </svg>
        </div>

        {/* ───── PROGRAMS — Insight Cards Grid ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.06) 0%, transparent 60%)' }} />
          <img src={linesTeal} alt="" aria-hidden="true" className="absolute bottom-0 right-0 w-[1000px] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 glass-frosted-btn-teal">
                    Non-profit. no fee. no equity.
                  </span>
                   <h2 className="text-3xl md:text-4xl mb-2" style={{ color: 'hsl(220, 20%, 15%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                     NORCAT Innovation is built on <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>3 proven pillars</span> of success
                   </h2>
                </div>
                <Link to="/events" className="inline-flex items-center gap-2 font-semibold group shrink-0 transition-colors" style={{ color: 'hsl(168, 100%, 28%)' }}>
                  View all
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-5">
                {upcomingPrograms.map((program, i) => (
                  <ScrollReveal key={program.title} delay={i * 0.1}>
                    <Link to={program.link} className="group block">
                      <div 
                        className="rounded-[20px] p-7 hover:scale-[1.03] transition-transform duration-300"
                        style={{
                          background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                          borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                          borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                          borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                          boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold transition-colors" style={{ color: 'hsl(220, 15%, 20%)' }}>{program.title}</h3>
                            <p className="text-sm font-light mt-2" style={{ color: 'hsl(220, 15%, 40%)' }}>{program.description}</p>
                            <span className="inline-flex items-center mt-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border transition-colors" style={{ borderColor: 'hsl(168, 100%, 35%)', color: 'hsl(168, 100%, 28%)' }}>
                              {program.cta}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" style={{ color: 'hsl(168, 100%, 35%)' }} />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={0.2} className="flex items-center">
                <div className="rounded-[20px] overflow-hidden shadow-lg w-[90%] ml-auto">
                  <img src={loopxTeam} alt="LoopX team photo" className="w-full h-auto object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>





        {/* ───── INSIGHTS 2 — Reports & Resources ───── */}
        <section className="relative py-28" style={{ background: 'linear-gradient(135deg, #00b398 0%, #003da5 100%)' }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src={signatureLines} alt="" aria-hidden="true" className="absolute top-0 right-0 w-[600px] opacity-100" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                   <h2 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                     <span className="text-white">MEET THE </span>
                     <span className="text-white" style={{ fontWeight: 700 }}>INNOVATION TEAM</span>
                   </h2>
                   </div>
                 </div>
            </ScrollReveal>
          </div>

          {/* Two full-width photo columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {[
              { image: bev2026Photo.url, label: 'Connect With Us', link: '/contact' },
              { image: ctaPhoto4, label: 'Meet Our Ecosystem', link: '/ecosystem' },
            ].map((post, i) => (
              <ScrollReveal key={post.label} delay={i * 0.1}>
                <Link to={post.link} className="group relative block w-full h-[520px] overflow-hidden">
                  <img src={post.image} alt={post.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    <span className="inline-flex items-center px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-[hsl(220,40%,15%)] text-white border border-white/20 group-hover:bg-[hsl(168,100%,35%)] group-hover:border-[hsl(168,100%,35%)]">
                      {post.label}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ───── THE SUDBURY ADVANTAGE ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 85%, 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" aria-hidden="true" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left column — text */}
              <ScrollReveal>
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={{
                    background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                    border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                    color: 'hsl(168, 40%, 30%)',
                    boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                  }}>
                    <Globe className="w-3.5 h-3.5" />
                    The Greater Sudbury Advantage
                  </span>
                   <h2 className="text-3xl md:text-4xl leading-[1.1] mb-6" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 500 }}>
                    A Thriving <span style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700 }}>Innovation Ecosystem</span>
                  </h2>
                  <p className="font-light text-lg leading-relaxed mb-8" style={{ color: 'hsl(220, 15%, 40%)' }}>
                    Greater Sudbury is home to the largest mining supply cluster in Canada, world-renowned research institutions, and a community built on innovation. Join an ecosystem where startups and industry connect.
                  </p>
                  <Link 
                    to="/ecosystem" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                      border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                      color: 'hsl(168, 40%, 25%)',
                      boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                    }}
                  >
                    Explore the Ecosystem
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right column — 2×2 cards */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Pickaxe, title: 'Mining Hub', desc: 'Nine operating mines and 300+ mining supply companies' },
                  { icon: TrendingUp, title: 'A City Built to Scale', desc: 'Major investments and growing population' },
                  { icon: GraduationCap, title: 'Talent', desc: 'Five post-secondary institutions' },
                  { icon: Handshake, title: 'The Sudbury Model', desc: 'Industry, academia, and government working as one' },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className="rounded-[20px] p-7 h-full hover:scale-[1.03] transition-transform duration-300" style={{
                      background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                      borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                      borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                      borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}>
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{
                        background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
                        border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
                        boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                      }}>
                        <item.icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{item.title}</h3>
                      <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── PORTFOLIO COMPANIES — Logo Carousel ───── */}
        <section className="relative py-10 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
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

        {/* ───── FINAL CTA ───── */}
        <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6" style={{ color: 'hsl(220, 15%, 20%)' }}>
                Ready to join our{' '}
                <span style={{ color: 'hsl(168, 100%, 28%)' }}>community?</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'hsl(220, 15%, 40%)' }}>
                Whether you're just starting out or ready to scale, we're here to help 
                you build something extraordinary.
              </p>
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  color: 'hsl(168, 40%, 25%)',
                  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                }}
              >
                Apply for Venture Growth Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── Community Photo Strip ───── */}
        <section style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="grid grid-cols-5 gap-3 px-3 py-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto1} alt="Speaker presenting" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto2} alt="Audience at event" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto3} alt="Group celebration" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto4} alt="Industry event" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={ctaPhoto5} alt="Tech showcase" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
