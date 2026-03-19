import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, DollarSign, Mountain, Rocket, Cpu, Leaf, ChevronRight, Lightbulb, Target, Building2, GraduationCap, Handshake, Brain, Stethoscope, Cog, Globe, Calendar, MapPin, Clock, ExternalLink, Quote, TrendingUp, BarChart3, Activity, Pickaxe, FileText } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-header-bg.png';
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
  { value: '150+', label: 'Clients', icon: TrendingUp },
  { value: '$75M+', label: 'Capital Raised by Startups', icon: DollarSign },
  { value: '15+', label: 'Countries with Active Clients', icon: Globe },
  { value: '18', label: 'Mentors & Advisors in Your Corner', icon: Users },
  { value: '2,000+', label: 'Jobs Created', icon: Activity },
];

const upcomingPrograms = [
  {
    tag: 'Founders',
    title: 'Venture Growth Services',
    bullets: ['Believe in you', 'Ongoing', 'Greater Sudbury (Greater Audience)'],
    link: '/programs/venture-growth-services',
  },
  {
    tag: 'Founders',
    title: 'Mentorship Services',
    bullets: ['Scaling/Move', '16 Month Journey', 'Matched Mentors'],
    link: '/programs/mentorship-services',
  },
  {
    tag: 'Funding',
    title: 'Sudbury Catalyst Fund',
    bullets: ['Jentry Byrne', 'Staff Fund', 'Growth Mastery'],
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
      <div className="min-h-screen">
        {/* Dark hero area */}
        <div style={{ background: 'hsl(220, 20%, 7%)' }}>

        {/* ───── HERO ───── */}
        <section ref={heroRef} className="relative flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {/* Parallax background image */}
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src={heroImage} alt="NORCAT Innovation" className="w-full h-full object-cover object-right" />
            {/* Cinematic multi-layer gradient */}
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(180deg, hsl(220 25% 4% / 0.6) 0%, transparent 35%),
                linear-gradient(0deg, hsl(220 25% 4% / 0.95) 0%, transparent 40%),
                linear-gradient(90deg, hsl(220 22% 6% / 0.92) 0%, hsl(220 20% 8% / 0.7) 40%, hsl(168 50% 10% / 0.35) 100%)
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
          </div>

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'linear-gradient(hsl(168 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(168 100% 50% / 0.4) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }}
          />

          {/* Signature lines */}
          <img
            src={signatureLines}
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 w-auto h-2/3 object-contain object-right-top opacity-80 pointer-events-none select-none mix-blend-overlay"
          />

          {/* Hero content — grows to fill */}
          <motion.div className="container mx-auto px-6 relative z-10 flex-1 flex items-center pt-20 pb-4" style={{ opacity: heroOpacity }}>
            <div className="max-w-3xl">
              {/* Tag line */}
              <motion.p
                className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase mb-6"
                style={{ color: 'hsl(168, 100%, 40%)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                // Advanced Mining Innovation
              </motion.p>

              {/* Headline */}
              <motion.h1
                className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white mb-6 tracking-tight leading-[0.95] uppercase"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Build the<br />
                <span style={{ color: 'hsl(168, 100%, 35%)' }}>Future </span>
                Here
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                World-class mentorship, capital access and infrastructure for tech-enabled, IP-driven startups ready to scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                <Link to="/apply" className="btn-primary group">
                  Work With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="btn-outline-dark group">
                  Learn More
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <div className="relative z-20 pb-8">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="rounded-3xl flex items-center justify-between liquid-glass-strong glass-shimmer"
              >
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex-1 text-center py-6 px-2 relative">
                    {i > 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
                    )}
                    <div className="text-2xl md:text-4xl font-bold" style={{ color: 'hsl(168, 100%, 45%)' }}>{stat.value}</div>
                    <p className="text-[10px] md:text-xs text-white/35 font-light leading-tight mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dark-to-light fade transition */}
        <div className="h-32" style={{ background: 'linear-gradient(180deg, hsl(220, 20%, 7%) 0%, hsl(0, 0%, 96%) 100%)' }} />
        </div>{/* end dark hero wrapper */}

        {/* ───── GLOBAL TECH, NORTHERN GRIT ───── */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'hsl(220 20% 10%)' }}>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="rounded-[24px] overflow-hidden liquid-glass-strong" style={{ border: '1px solid hsla(168, 100%, 35%, 0.15)' }}>
                <div className="grid lg:grid-cols-[0.45fr_0.55fr]">
                  {/* Left — Image */}
                  <div className="relative min-h-[300px] lg:min-h-[420px]">
                    <img src={miningUndergroundHero} alt="Mining underground" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 60%, hsl(220 20% 8% / 0.6) 100%)' }} />
                  </div>

                  {/* Right — Content */}
                  <div className="p-10 lg:p-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white mb-8 leading-tight">
                      Global Tech,<br />
                      <span style={{ color: 'hsl(168, 100%, 40%)' }}>Northern Grit</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-10">
                      {/* For Founders */}
                      <div>
                        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-5">For Founders</h3>
                        <ul className="space-y-3">
                          {[
                            { icon: Rocket, text: 'One-on-one and cohort-based mentorship' },
                            { icon: DollarSign, text: 'Capital access and investor connections' },
                            { icon: Handshake, text: 'Community, events, and strategic partnerships' },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <item.icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(168, 100%, 40%)' }} />
                              <span className="text-sm text-white/60 font-light">{item.text}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/programs/venture-growth-services" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold group" style={{ color: 'hsl(168, 100%, 40%)' }}>
                          Explore Startup Programs
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>

                      {/* For Industry */}
                      <div>
                        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-5">For Industry</h3>
                        <ul className="space-y-3">
                          {[
                            { icon: Mountain, text: 'Underground testing and validation' },
                            { icon: Cpu, text: 'Diversified technology isolation' },
                            { icon: Globe, text: 'Innovation and smart city properties' },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <item.icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(168, 100%, 40%)' }} />
                              <span className="text-sm text-white/60 font-light">{item.text}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/mining/norcat-underground" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold group" style={{ color: 'hsl(168, 100%, 40%)' }}>
                          Explore the NORCAT Underground Centre
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── PROGRAMS — Insight Cards Grid ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 20% 8%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.05) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.04) 0%, transparent 60%)' }} />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 liquid-glass-btn" style={{ color: 'hsl(168, 100%, 45%)' }}>
                    Programs & Funding
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Support that adapts as your{' '}
                    <span style={{ color: 'hsl(168, 100%, 40%)' }}>company grows.</span>
                  </h2>
                  <p className="font-light max-w-xl text-white/50">We help you turn a rough idea into something real—with hands-on support, hard conversations, and access to the stuff that actually moves the needle.</p>
                </div>
                <Link to="/events" className="inline-flex items-center gap-2 font-semibold group shrink-0 transition-colors" style={{ color: 'hsl(168, 100%, 40%)' }}>
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
                      className="rounded-[20px] p-7 h-full hover:scale-[1.03] transition-transform duration-300 liquid-glass-strong glass-shimmer"
                    >
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 liquid-glass-btn" style={{ color: 'hsl(168, 100%, 45%)' }}>
                        {program.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-4 transition-colors">{program.title}</h3>
                      <ul className="space-y-2.5 mb-5">
                        {program.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'hsl(168, 100%, 40%)' }} />
                            <span className="text-sm text-white/50 font-light">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: 'hsl(168, 100%, 40%)' }}>
                        See Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
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

        {/* ───── REAL STORIES. UNIQUE INSIGHTS. ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 20% 8%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.04) 0%, transparent 70%)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 liquid-glass-btn" style={{ color: 'hsl(168, 100%, 45%)' }}>
                    Reports & Resources
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-white">
                    Real Stories.{' '}
                    <span style={{ color: 'hsl(168, 100%, 40%)' }}>Unique Insights.</span>
                  </h2>
                  <p className="mt-2 font-light text-white/50">Research, analysis, and quarterly updates from our team—transparent reporting on ecosystem impact and portfolio performance.</p>
                </div>
                <Link to="/insights/reports" className="inline-flex items-center gap-2 font-semibold group shrink-0" style={{ color: 'hsl(168, 100%, 40%)' }}>
                  View all reports
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.1}>
                  <Link to={post.link} className="group block h-full">
                    <div className="rounded-[20px] overflow-hidden h-full hover:scale-[1.03] transition-transform duration-300 liquid-glass-strong glass-shimmer">
                      {/* Image placeholder using existing photos */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={i === 0 ? ctaPhoto1 : i === 1 ? ctaPhoto3 : ctaPhoto2} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 liquid-glass-btn" style={{ color: 'hsl(168, 100%, 45%)' }}>
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-4 transition-colors">{post.title}</h3>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: 'hsl(168, 100%, 40%)' }}>
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PORTFOLIO COMPANIES — Logo Carousel ───── */}
        <section className="relative py-14 overflow-hidden" style={{ background: 'hsl(220 20% 10%)' }}>
          <div className="container mx-auto px-6 mb-8">
            <h3 className="text-center text-xl md:text-2xl font-bold text-white">Our Clients are Pretty Cool</h3>
          </div>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...portfolioCompanies, ...portfolioCompanies].map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-36 h-16 px-4 rounded-xl liquid-glass"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-8 max-w-full object-contain brightness-0 invert opacity-70"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── Community Photo Strip ───── */}
        <section style={{ background: 'hsl(220 20% 7%)' }}>
          <div className="grid grid-cols-5 gap-3 px-3 pb-8">
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

        {/* ───── FINAL CTA ───── */}
        <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)' }}>
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
        </section>

      </div>
    </Layout>
  );
}
