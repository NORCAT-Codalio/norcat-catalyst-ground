import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, DollarSign, Mountain, Rocket, Zap, Globe, Cpu, Leaf, Factory, ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-underground.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Team-based mentoring from entrepreneurs and executives who have been there.',
    link: '/programs/mentorship-services',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: DollarSign,
    title: 'Capital',
    description: 'Non-dilutive funding programs and our $5M Sudbury Catalyst Fund.',
    link: '/funding/sudbury-catalyst-fund',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Mountain,
    title: 'Underground',
    description: "The world's only underground facility for testing mining technology.",
    link: '/mining/norcat-underground',
    color: 'from-amber-500 to-orange-600',
  },
];

const sectors = [
  { icon: Cpu, label: 'Mining Tech' },
  { icon: Leaf, label: 'Cleantech' },
  { icon: Factory, label: 'Industrial IoT' },
  { icon: Zap, label: 'Energy' },
  { icon: Globe, label: 'Critical Minerals' },
  { icon: Rocket, label: 'Deep Tech' },
];

const stats = [
  { value: '150+', label: 'Startups Supported' },
  { value: '$75M+', label: 'Capital Raised' },
  { value: '2,000+', label: 'Jobs Created' },
  { value: '50+', label: 'Countries Reached' },
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img 
            src={heroImage} 
            alt="NORCAT Innovation" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-teal-950/70" />
        </motion.div>

        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(173 83% 44% / 0.15) 0%, transparent 70%)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(270 60% 50% / 0.1) 0%, transparent 70%)' }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <motion.div 
          className="container mx-auto px-6 relative z-10 py-32"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4 text-teal-400" />
                Ontario's Regional Innovation Centre
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Build the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 animate-gradient" style={{ backgroundSize: '200% 200%' }}>
                Future Here
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              World-class mentorship, capital access, and the only underground 
              testing facility of its kind. For tech-enabled, IP-driven startups 
              ready to scale.
            </motion.p>

            {/* Sectors */}
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

        {/* Scroll indicator */}
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

      {/* Stats Bar */}
      <section className="py-12 bg-gray-950 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything to <span className="text-gradient">Scale</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From early-stage mentorship to growth capital, we provide complete 
                support for ambitious founders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <Link 
                  to={pillar.link}
                  className="group block relative rounded-3xl bg-secondary/50 border border-border p-10 h-full overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-8 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>

                  {/* Corner accent */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${pillar.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Underground Feature */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(173 83% 44% / 0.08) 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
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
                  Test, validate, and demonstrate your technology in real conditions.
                </p>
                <Link 
                  to="/mining/norcat-underground" 
                  className="btn-primary-lg group"
                >
                  Explore Underground
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <motion.div 
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <img 
                    src={heroImage} 
                    alt="NORCAT Underground Centre" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                  
                  {/* Floating stats */}
                  <motion.div 
                    className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-3xl font-black text-white">1.2km</div>
                    <p className="text-white/70 text-sm">Underground Tunnels</p>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                For <span className="text-gradient">Ambitious</span> Founders
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                We work with early-stage to scaling tech-enabled, IP-driven startups 
                across multiple sectors.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {sectors.map((sector, i) => (
                  <motion.div
                    key={sector.label}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-secondary border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <sector.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{sector.label}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link to="/apply" className="btn-primary-lg group">
                See If You Qualify
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300">
                Something Big
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join the founders who are building the future. Get the mentorship, 
              funding, and connections to scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/apply" className="btn-primary-lg group text-lg px-10 py-5">
                Apply Now
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
