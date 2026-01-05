import { Link } from 'react-router-dom';
import { ArrowRight, Pickaxe, Sparkles, Users, DollarSign, Mountain, Globe, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-underground.jpg';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Team-based mentoring from experienced entrepreneurs and industry executives.',
    link: '/programs/mentorship-services',
  },
  {
    icon: DollarSign,
    title: 'Capital',
    description: 'Access to non-dilutive funding programs and our $5M Catalyst Fund.',
    link: '/funding/sudbury-catalyst-fund',
  },
  {
    icon: Mountain,
    title: 'Underground',
    description: "The world's only underground innovation centre for mining tech.",
    link: '/mining/norcat-underground',
  },
];

const stats = [
  { value: '150+', label: 'Startups Supported' },
  { value: '$75M+', label: 'Capital Raised' },
  { value: '2,000+', label: 'Jobs Created' },
  { value: '50+', label: 'Countries Reached' },
];

const differentiators = [
  'Only innovation centre with an operational underground mine',
  'Team-based mentorship program with no equity taken',
  'Direct access to global mining industry partners',
  'Non-dilutive funding through government programs',
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="NORCAT Underground Centre" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-3xl">
            <ScrollReveal>
              <motion.div 
                className="badge-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                Ontario's Regional Innovation Centre
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Where Mining Tech
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Goes Global
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
                The only innovation centre in the world with an operational underground mine. 
                We help founders build, test, and scale mining technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn-primary-lg group">
                  Work With Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/mining/norcat-underground" className="btn-outline-dark">
                  <Pickaxe className="h-4 w-4" />
                  Explore Underground
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* What Sets Us Apart - Simple statement */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The <span className="text-gradient">only</span> innovation centre with an underground mine
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Test your technology in real mining conditions. Get validation that opens doors 
                to customers worldwide. No other innovation centre can offer this.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to <span className="text-gradient">Scale</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <Link 
                  to={pillar.link}
                  className="block card-modern p-8 h-full group hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why NORCAT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="badge mb-6">
                  <Globe className="h-4 w-4" />
                  Why NORCAT Innovation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Built for <span className="text-gradient">Mining Tech</span> Founders
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We understand what it takes to build and scale mining technology companies 
                  because it's all we do. Our unique assets and expertise give founders 
                  an unfair advantage.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {differentiators.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/about" className="btn-primary group">
                  About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="NORCAT Underground Centre" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-6 border border-border">
                  <div className="text-3xl font-black text-gradient mb-1">15+</div>
                  <p className="text-sm text-muted-foreground">Years of Impact</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Scale?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Join the founders who are building the future of mining technology.
            </p>
            <Link to="/apply" className="btn-primary-lg group">
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
