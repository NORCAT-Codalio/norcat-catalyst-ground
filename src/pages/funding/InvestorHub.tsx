import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket, 
  Target, 
  Users, 
  Presentation, 
  Trophy,
  Sparkles,
  TrendingUp,
  Calendar,
  Star,
  Zap,
  Crown,
  Building2,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const InvestorHub = () => {
  const investorReadySteps = [
    { 
      step: '01', 
      title: 'Pitch Refinement', 
      desc: 'Craft a compelling narrative that resonates with investors',
      icon: Presentation
    },
    { 
      step: '02', 
      title: 'Financial Modeling', 
      desc: 'Build investor-grade projections and unit economics',
      icon: TrendingUp
    },
    { 
      step: '03', 
      title: 'Due Diligence Prep', 
      desc: 'Organize your data room and anticipate investor questions',
      icon: Target
    },
    { 
      step: '04', 
      title: 'Investor Matching', 
      desc: 'Connect with the right investors for your stage and sector',
      icon: Users
    },
  ];

  return (
    <Layout>
      {/* Hero - Ultra Modern */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-purple-500/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-32 right-20 w-20 h-20 border border-teal-500/30 rounded-xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-teal-500/40 to-purple-500/40 rounded-lg"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Rocket className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-white/80">Funding & Capital</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[0.95]"
            >
              Get Investor
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed"
            >
              From pitch deck to term sheet. We prepare Northern Ontario's 
              boldest founders to raise capital and scale their vision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg rounded-xl shadow-lg shadow-teal-500/25">
                <Link to="/apply">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                <a href="#venture-north">
                  Explore Venture North
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Investor Ready Journey */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Your Path to Funding
              </span>
              <h2 className="headline-lg mb-4">Become Investor Ready</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven methodology has helped founders across Northern Ontario 
                raise over $50M in capital.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorReadySteps.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl border border-border bg-card h-full transition-all duration-300 group-hover:border-primary/30 group-hover:-translate-y-1">
                    <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-4">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="headline-sm mb-3">{item.title}</h3>
                    <p className="body-md text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Northern Ontario Angels Partnership */}
      <section className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  Strategic Partner
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Northern Ontario
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Angels
                  </span>
                </h2>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  Our exclusive partnership with Northern Ontario Angels connects 
                  investment-ready founders with a network of active angel investors 
                  across the region. Together, we're building the future of Northern 
                  Ontario's startup ecosystem.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Access to 50+ accredited angel investors',
                    'Private pitch sessions with investor feedback',
                    'Syndicated investment opportunities',
                    'Ongoing mentorship from successful entrepreneurs'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-teal-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-white/10 hover:bg-white/20 text-white border border-white/10">
                  <a href="https://noangels.ca" target="_blank" rel="noopener noreferrer">
                    Learn About NOA
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-white/5">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">50+</div>
                      <p className="text-white/60 text-sm">Active Investors</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">$25M+</div>
                      <p className="text-white/60 text-sm">Invested</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">40+</div>
                      <p className="text-white/60 text-sm">Portfolio Companies</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5">
                      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">15+</div>
                      <p className="text-white/60 text-sm">Years Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Private Pitch Events */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                Exclusive Access
              </span>
              <h2 className="headline-lg mb-4">Private Pitch Events</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Invitation-only pitch sessions connecting our top portfolio companies 
                with Northern Ontario Angels and select investors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: 'Curated Audience', 
                desc: 'Present to engaged investors actively looking to deploy capital in the region.' 
              },
              { 
                icon: Presentation, 
                title: 'Pitch Coaching', 
                desc: 'Receive expert coaching and feedback to refine your presentation before the event.' 
              },
              { 
                icon: Sparkles, 
                title: 'Direct Introductions', 
                desc: 'Get warm introductions to investors aligned with your stage and sector.' 
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-teal-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="headline-sm mb-3">{item.title}</h3>
                  <p className="body-md text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venture North Pitch - Flagship Event */}
      <section id="venture-north" className="py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-500/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-yellow-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
                <Crown className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-500 font-medium">Flagship Event</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Venture North
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Pitch
                </span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                Northern Ontario's premier pitch competition. Think Dragon's Den, but for 
                the innovators building the future of our region. Compete for investment, 
                mentorship, and the spotlight.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { value: '$50K+', label: 'In Prizes & Investment' },
                  { value: '10', label: 'Finalist Pitches' },
                  { value: '200+', label: 'Attendees' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-yellow-500/25">
                  <Link to="/apply">
                    Apply to Compete
                    <Trophy className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  <Link to="/events">
                    View Past Events
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="headline-lg mb-6">Ready to Raise?</h2>
              <p className="body-lg text-muted-foreground mb-10">
                Whether you're preparing for your first angel round or scaling to 
                Series A, we're here to help you navigate the journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="btn-primary-lg">
                  <Link to="/apply">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-lg">
                  <Link to="/programs/capital-navigation">
                    Learn About Capital Navigation
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorHub;
