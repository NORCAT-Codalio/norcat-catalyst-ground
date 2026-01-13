import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, DollarSign, Mountain, Rocket, Cpu, Leaf, ChevronRight, Lightbulb, Target, Building2, GraduationCap, Handshake, Brain, Stethoscope, Cog, Globe, Calendar, MapPin, Clock, ExternalLink, Quote } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-underground.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  { value: '$75M+', label: 'Capital Raised by Startups' },
  { value: '15+', label: 'Countries with Active Clients' },
  { value: '18', label: 'Mentors & Advisors in Your Corner' },
  { value: '2,000+', label: 'Jobs Created' },
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
      {/* Hero Section - KEEP EXISTING */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroImage} alt="NORCAT Innovation" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-teal-950/70" />
        </motion.div>

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(270 60% 50% / 0.1) 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div className="container mx-auto px-6 relative z-10 py-32" style={{ opacity: heroOpacity }}>
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4 text-teal-400" />
                Sudbury's Regional Innovation Centre
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Build the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300">
                Future Here
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              World-class mentorship, capital access, and infrastructure for tech-enabled, IP-driven startups ready to scale.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {sectors.map((sector, i) => (
                <motion.span
                  key={sector.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                >
                  <sector.icon className="w-4 h-4" />
                  {sector.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
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

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Two Column Value Prop - DMZ Style */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              The North's Hub for Global Innovation
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Founders */}
            <ScrollReveal direction="left">
              <div className="bg-secondary/50 rounded-3xl p-8 md:p-10 h-full border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-bold mb-6">For Founders</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">One-on-one and team-based mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Capital access and investor connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Community and networking opportunities</span>
                  </li>
                </ul>
                <Link to="/programs/venture-growth-services" className="inline-flex items-center gap-2 text-primary font-semibold group">
                  Explore Startup Programs
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            {/* For Industry */}
            <ScrollReveal direction="right">
              <div className="bg-secondary/50 rounded-3xl p-8 md:p-10 h-full border border-border hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-bold mb-6">For Industry</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Underground testing and validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">De-risked technology adoption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Innovation partnership opportunities</span>
                  </li>
                </ul>
                <Link to="/mining/norcat-underground" className="inline-flex items-center gap-2 text-primary font-semibold group">
                  Explore the NORCAT Underground Centre
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section with Image - DMZ Style */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={heroImage} alt="NORCAT Innovation community" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
                  Trusted by <span className="text-gradient">150+ startups.</span>
                </h2>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-3xl md:text-4xl font-black text-primary">{stat.value}</div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Companies - DMZ Style */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Proudly Built in the North</h2>
          </ScrollReveal>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...portfolioCompanies, ...portfolioCompanies].map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-36 h-16 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors group px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-10 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Up / Programs - DMZ Style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">How We Can Help You <span className="text-gradient">Scale</span></h2>
                <p className="text-muted-foreground">NORCAT offers founders a variety of programs and services to help start, grow, and scale your venture.</p>
              </div>
              <Link to="/events" className="inline-flex items-center gap-2 text-primary font-semibold group">
                View all
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingPrograms.map((program, i) => (
              <ScrollReveal key={program.title} delay={i * 0.1}>
                <Link to={program.link} className="group block h-full">
                  <div className="bg-secondary/50 rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {program.type}
                    </span>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {program.applyBy}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {program.location}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
                      See Details
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote - DMZ Style */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary/50 mx-auto mb-8" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
                  Building a startup is lonely. NORCAT's community pulled me in, but the expert support—from mentorship to
                  capital access—is what's kept me here. The value is real.
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">LB</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Luke Begley</p>
                    <p className="text-gray-400">Founder & CEO, CircuitIQ</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners - DMZ Style */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Our partners.</h2>
              <p className="text-muted-foreground">An ecosystem built on value-driven partnerships.</p>
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
                    className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link to="/ecosystem" className="inline-flex items-center gap-2 text-primary font-semibold group">
              Explore Partners
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog / Stories - DMZ Style */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <span className="text-primary font-medium mb-2 block">Insights</span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Real stories. <span className="text-gradient">Unique insights.</span>
                </h2>
                <p className="text-muted-foreground mt-2">The ideas, advice and stories shaping the startup world.</p>
              </div>
              <Link to="/insights/news" className="inline-flex items-center gap-2 text-primary font-semibold group">
                See all stories
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <Link to={post.link} className="group block h-full">
                  <div className="bg-background rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <span className="text-xs font-medium text-primary mb-3 block">{post.category}</span>
                    <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm group-hover:text-primary transition-colors">
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

      {/* Ecosystem / Community Section - DMZ Style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  The Greater Sudbury Advantage
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  A Thriving <span className="text-gradient">Innovation Ecosystem</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Greater Sudbury is home to the largest mining supply cluster in Canada, world-renowned research
                  institutions, and a community built on innovation. Join an ecosystem where startups and industry connect.
                </p>
                <Link to="/ecosystem/sudbury" className="btn-primary group">
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
                    className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <partner.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section - DMZ Camel Style */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">The Sudbury Model.</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                The Sudbury Model is rooted in a century of industrial excellence, where generations of mining, precision manufacturing, and hands-on problem-solving have forged a unique culture of grit and technical mastery. In Northern Ontario, we don't just ideate—we build. For startup founders, this means access to an ecosystem that values strategic patience, relentless execution, and the sophisticated engineering required to solve the world's toughest real-world challenges.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold group">
                Read More About Our Approach
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                Ready to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300">
                  Build?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join founders building and scaling tech-enabled solutions in Northern Ontario that deliver real-world
                impact.
              </p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group"
              >
                <Rocket className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
