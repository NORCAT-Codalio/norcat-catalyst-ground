import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import lukeBegleyPhoto from '@/assets/testimonials/luke-begley.png';
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
  Zap,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';

const allServices = [
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
    type: 'Program',
    title: 'Capital Navigation',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury',
    link: '/programs/capital-navigation',
  },
  {
    type: 'Funding',
    title: 'Sudbury Catalyst Fund',
    applyBy: 'Always Open',
    duration: '$5M Fund',
    location: 'Greater Sudbury',
    link: '/funding/sudbury-catalyst-fund',
  },
  {
    type: 'Funding',
    title: 'Innovation Acceleration Program',
    applyBy: 'Rolling Intake',
    duration: 'Up to $50K',
    location: 'Greater Sudbury',
    link: '/funding/innovation-acceleration-program',
  },
  {
    type: 'Funding',
    title: 'Regional AI Program',
    applyBy: 'Program Based',
    duration: 'Variable',
    location: 'Northern Ontario',
    link: '/funding/regional-ai-program',
  },
  {
    type: 'Facility',
    title: 'NORCAT Underground Centre',
    applyBy: 'Contact Us',
    duration: 'On-Demand',
    location: 'Onaping, ON',
    link: '/mining/norcat-underground',
  },
  {
    type: 'Facility',
    title: 'Labs & Facilities',
    applyBy: 'Contact Us',
    duration: 'Flexible Access',
    location: 'Greater Sudbury',
    link: '/mining/labs',
  },
  {
    type: 'Program',
    title: 'Critical Industrial Tech',
    applyBy: 'Rolling Intake',
    duration: 'Ongoing',
    location: 'Greater Sudbury',
    link: '/mining/critical-industrial-tech',
  },
];

const coreServices = [
  {
    icon: UserCheck,
    title: 'One-on-One Advisor Support',
    description: 'Every company is matched with a dedicated venture advisor who works alongside you on strategy, operations, and growth. Regular check-ins keep you accountable and moving forward.',
    features: ['Dedicated advisor relationship', 'Schedule flexible sessions', 'Strategic planning support', 'Leadership development']
  },
  {
    icon: GraduationCap,
    title: 'Founder Education',
    description: 'Structured curriculum covering everything from customer discovery to fundraising. Learn from practitioners who\'ve built and scaled companies themselves.',
    features: ['Workshop series & masterclasses', 'Fundraising preparation', 'Go-to-market strategies', 'On-Demand Courses']
  },
  {
    icon: Handshake,
    title: 'Customer Pairing',
    description: 'We actively connect you with potential customers, pilot partners, and early adopters from our extensive industry network to accelerate your path to revenue.',
    features: ['Strategic network building', 'Pilot project facilitation', 'Industry partner matching', 'Feedback loop integration']
  },
  {
    icon: Users,
    title: 'Mentorship Network',
    description: 'Access 18+ experienced mentors across sectors including mining, technology, finance, operations, and more. Get tactical advice from those who\'ve been there.',
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
    features: ['Cohort-based experience', 'Founder dinners & events', 'NORCAT Community access', 'Alumni network benefits']
  }
];

const programStructure = [
  {
    phase: '01',
    title: 'Onboarding',
    description: 'Deep dive into your business, assign your advisor, and create a tailored growth plan.'
  },
  {
    phase: '02',
    title: 'Build & Validate',
    description: 'Work with your mentorship team on product-market fit and early traction.'
  },
  {
    phase: '03',
    title: 'Scale & Raise',
    description: 'Focus on growth metrics, team building, and fundraising preparation.'
  },
  {
    phase: '04',
    title: 'Ongoing Support',
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
    description: 'Access to unique infrastructure like the NORCAT Underground Centre, embedded within one of Canada\'s most established mining ecosystems.'
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
              { value: '18+', label: 'Mentors' },
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
                    <h3 className="headline-sm mb-3">{phase.title}</h3>
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
              <h2 className="headline-lg mb-6">What Makes Us Different?</h2>
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
                  "The unwavering support we have received from the Sudbury Catalyst Fund and NORCAT has been instrumental in our decision to relocate our team to Sudbury, a region with immense potential for growth and innovation."
                </blockquote>
                <div className="flex items-center gap-3">
                  <img src={lukeBegleyPhoto} alt="Luke Begley" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">Luke Begley</div>
                    <div className="text-sm text-white/60">CEO and Co-Founder of CircuitIQ</div>
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
                    'Building a tech-enabled, IP-focused venture',
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

      {/* Our Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-6">Explore Our Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <Link to={service.link} className="group block h-full">
                  <div className="bg-background rounded-2xl p-6 h-full border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      service.type === 'Program' 
                        ? 'bg-primary/10 text-primary' 
                        : service.type === 'Funding'
                        ? 'bg-amber-500/10 text-amber-600'
                        : 'bg-blue-500/10 text-blue-600'
                    }`}>
                      {service.type}
                    </span>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {service.applyBy}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {service.location}
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
              <Button asChild variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white/10">
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
