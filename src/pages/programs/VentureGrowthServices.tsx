import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket, 
  Target, 
  Users, 
  TrendingUp, 
  Check, 
  Handshake, 
  GraduationCap, 
  Network, 
  Building2,
  UserCheck,
  Calendar,
  MessageCircle,
  Compass,
  Zap
} from 'lucide-react';

const coreServices = [
  {
    icon: UserCheck,
    title: 'One-on-One Advisor Support',
    description: 'Every company is matched with a dedicated venture advisor who works alongside you on strategy, operations, and growth. Regular check-ins keep you accountable and moving forward.',
    features: ['Dedicated advisor relationship', 'Weekly or bi-weekly sessions', 'Strategic planning support', 'Accountability check-ins']
  },
  {
    icon: GraduationCap,
    title: 'Founder Education',
    description: 'Structured curriculum covering everything from customer discovery to fundraising. Learn from practitioners who\'ve built and scaled companies themselves.',
    features: ['Workshop series & masterclasses', 'Fundraising preparation', 'Go-to-market strategies', 'Leadership development']
  },
  {
    icon: Handshake,
    title: 'Customer Pairing',
    description: 'We actively connect you with potential customers, pilot partners, and early adopters from our extensive industry network to accelerate your path to revenue.',
    features: ['Warm introductions to prospects', 'Pilot project facilitation', 'Industry partner matching', 'Feedback loop integration']
  },
  {
    icon: Users,
    title: 'Mentorship Network',
    description: 'Access 200+ experienced mentors across sectors including mining, technology, finance, operations, and more. Get tactical advice from those who\'ve been there.',
    features: ['Domain expert matching', 'Structured mentorship sessions', 'Ongoing relationship building', 'Peer mentor connections'],
    link: '/programs/mentorship-services',
    linkText: 'Explore Mentorship Services'
  },
  {
    icon: Network,
    title: 'Powerful Network Access',
    description: 'Tap into our ecosystem of investors, corporate partners, government agencies, and fellow founders. The right introduction at the right time can change everything.',
    features: ['Investor introductions', 'Corporate partnership opportunities', 'Government funding connections', 'Founder peer network']
  },
  {
    icon: Building2,
    title: 'Community Integration',
    description: 'Join a tight-knit community of ambitious founders building category-defining companies. Shared experiences, mutual support, and lifelong connections.',
    features: ['Cohort-based experience', 'Founder dinners & events', 'Slack community access', 'Alumni network benefits']
  }
];

const programStructure = [
  {
    phase: '01',
    title: 'Onboarding',
    duration: 'Week 1-2',
    description: 'Deep dive into your business, assign your advisor, and create a tailored growth plan.'
  },
  {
    phase: '02',
    title: 'Build & Validate',
    duration: 'Months 1-3',
    description: 'Intensive work on product-market fit, customer discovery, and early traction.'
  },
  {
    phase: '03',
    title: 'Scale & Raise',
    duration: 'Months 4-6',
    description: 'Focus on growth metrics, team building, and fundraising preparation.'
  },
  {
    phase: '04',
    title: 'Ongoing Support',
    duration: 'Continuous',
    description: 'Continued access to network, resources, and advisor support as you scale.'
  }
];

const differentiators = [
  {
    icon: Compass,
    title: 'Hands-On, Not Hands-Off',
    description: 'We roll up our sleeves and work alongside you. This isn\'t passive mentorship—it\'s active partnership in your success.'
  },
  {
    icon: Target,
    title: 'Industry-Connected',
    description: 'Deep relationships with mining, industrial, and technology sectors mean real customer introductions, not just advice.'
  },
  {
    icon: Zap,
    title: 'Northern Advantage',
    description: 'Access to unique infrastructure like the NORCAT Underground Centre, plus lower costs and a focused, supportive community.'
  }
];

const VentureGrowthServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        <div className="orb orb-blue w-64 h-64 bottom-0 left-1/4" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Rocket className="w-4 h-4" />
              Core Program
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Venture Growth<br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-6">
              The operating system for ambitious founders. We provide the hands-on support, 
              education, network, and resources you need to build a category-defining company.
            </p>
            <p className="body-lg text-white/50 max-w-2xl mb-10">
              We work alongside you to find customers, raise capital, build teams, and navigate the challenges of scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Apply to Join
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline-lg">
                <Link to="/insights/success-stories">
                  See Our Portfolio
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What You Get - Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1:1', label: 'Dedicated Advisor' },
              { value: '200+', label: 'Mentors' },
              { value: '50+', label: 'Industry Partners' },
              { value: '$50M+', label: 'Capital Raised' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-6">What's Included</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support designed to accelerate your path from early stage to scale. 
                Everything you need, nothing you don't.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-modern p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="headline-sm mb-3">{service.title}</h3>
                  <p className="body-md text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-auto"
                    >
                      {service.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-6">How It Works</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                A structured program that adapts to your stage and needs, 
                with ongoing support as you scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programStructure.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < programStructure.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-4" />
                  )}
                  <div className="bg-background rounded-2xl p-6 border border-border h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-2">{phase.phase}</div>
                    <h3 className="headline-sm mb-1">{phase.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{phase.duration}</p>
                    <p className="body-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-6">What Makes This Different</h2>
              <p className="body-lg text-muted-foreground mb-8">
                There are a lot of accelerators and programs out there. 
                Here's why founders choose to build with us.
              </p>
              <div className="space-y-8">
                {differentiators.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="body-md text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white">
                <MessageCircle className="w-10 h-10 text-primary mb-6" />
                <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                  "The NORCAT team doesn't just give advice—they open doors. 
                  The customer introductions alone were worth more than any program fee."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10" />
                  <div>
                    <div className="font-semibold">Portfolio Founder</div>
                    <div className="text-sm text-white/60">Mining Technology Startup</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-6">Who This Is For</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="headline-sm mb-4">Great Fit</h3>
                <ul className="space-y-3">
                  {[
                    'Early-stage founders (pre-seed to Series A)',
                    'Building in mining, industrial tech, or tough tech',
                    'Coachable and open to feedback',
                    'Committed full-time to your venture',
                    'Looking for hands-on support, not just capital'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="headline-sm mb-4">Might Not Be Right If</h3>
                <ul className="space-y-3">
                  {[
                    'Looking for passive investment only',
                    'Not ready to commit significant time',
                    'Prefer to work in isolation',
                    'Already past Series A stage',
                    'Not open to pivoting or iterating'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-4 h-4 mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-6">Explore Related Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Mentorship Services', desc: 'Connect with 200+ industry experts', link: '/programs/mentorship-services' },
              { title: 'Capital Navigation', desc: 'Fundraising support and investor access', link: '/programs/capital-navigation' },
              { title: 'Labs & Facilities', desc: 'Prototyping, testing, and workspace', link: '/mining/labs' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link to={item.link} className="card-modern p-6 h-full flex flex-col group hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="body-sm text-muted-foreground mb-4 flex-grow">{item.desc}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Ready to Accelerate?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Join the next cohort of ambitious founders building category-defining 
              companies. Applications are open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="mailto:ventures@norcat.org">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default VentureGrowthServices;
