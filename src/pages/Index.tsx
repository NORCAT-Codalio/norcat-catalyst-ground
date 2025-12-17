import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, DollarSign, Users, Building2, Pickaxe, Calendar, ChevronRight, MapPin, Zap, Target, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCounter } from '@/components/StatCounter';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-underground.jpg';
import foundersImage from '@/assets/founders-collab.jpg';
import miningTechImage from '@/assets/mining-tech.jpg';
import pitchEventImage from '@/assets/pitch-event.jpg';

const services = [
  {
    icon: Rocket,
    title: 'Venture Growth Services',
    description: 'Structured mentorship and advisory to help you build, launch, and scale.',
    features: ['1-on-1 mentorship', 'Growth strategy', 'Market validation'],
  },
  {
    icon: DollarSign,
    title: 'Capital Navigation',
    description: 'Expert guidance through funding rounds, investor relations, and deal structuring.',
    features: ['Investor readiness', 'Pitch coaching', 'Due diligence prep'],
  },
  {
    icon: Target,
    title: 'Non-Dilutive Funding',
    description: 'Access IAP, RAII, and other programs that fund growth without equity dilution.',
    features: ['Grant applications', 'Program matching', 'Compliance support'],
  },
  {
    icon: TrendingUp,
    title: 'Sudbury Catalyst Fund',
    description: 'Our $5M fund investing in promising startups ready to scale.',
    features: ['Seed investment', 'Follow-on funding', 'Strategic support'],
  },
  {
    icon: Pickaxe,
    title: 'Mining Innovation',
    description: 'Test and validate mining technology in our operational underground facility.',
    features: ['Real-world testing', 'Industry connections', 'Global partnerships'],
  },
  {
    icon: Calendar,
    title: 'Events & Programming',
    description: 'Mining Transformed, Venture North PITCH, demo days, and networking events.',
    features: ['Flagship conferences', 'Pitch competitions', 'Community events'],
  },
];

const testimonials = [
  {
    quote: "NORCAT Innovation gave us the credibility and connections we needed to close our Series A. Their underground testing facility was a game-changer for our mining automation technology.",
    author: "Sarah Chen",
    role: "CEO",
    company: "MineTech Robotics",
  },
  {
    quote: "The mentorship here is world-class. They understand what it takes to build hardware companies and connected us with exactly the right investors.",
    author: "Marcus Williams",
    role: "Founder",
    company: "CriticalMin Solutions",
  },
  {
    quote: "From IAP funding to investor introductions, NORCAT Innovation accelerated our growth by at least 18 months. This is where serious founders come to build.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "SubSurface AI",
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Startups Supported', description: 'Companies launched and scaled' },
  { value: 75, prefix: '$', suffix: 'M+', label: 'Capital Raised', description: 'By portfolio companies' },
  { value: 2000, suffix: '+', label: 'Jobs Created', description: 'Across Northern Ontario' },
  { value: 5, prefix: '$', suffix: 'M', label: 'Catalyst Fund', description: 'Direct investment capital' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="NORCAT Underground Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                Sudbury's Regional Innovation Centre
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="headline-xl text-slate-50 mb-6">
                Where Tech Founders
                <span className="block text-gradient-teal">Build Real-World Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="body-lg text-slate-300 mb-8 max-w-2xl">
                Ontario's hub for emerging mining technology and tech-enabled startups. 
                We help founders start, grow, and scale with world-class mentorship, 
                capital access, and the only underground testing facility of its kind.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/apply">
                    Apply for Venture Growth Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-hero-outline border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-slate-50">
                  <Link to="/mining-innovation">
                    Explore Underground Centre
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-12 flex items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-soft" />
                  Government of Ontario Funded
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-soft" />
                  Not-for-Profit
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                What We Do
              </span>
              <h2 className="headline-lg mb-6">
                Everything Founders Need to{' '}
                <span className="text-gradient-teal">Scale</span>
              </h2>
              <p className="body-lg">
                From early-stage mentorship to growth capital, we provide the complete 
                support system for tech-enabled, IP-driven startups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <ServiceCard {...service} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Underground Centre Feature */}
      <section className="section-padding bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Our Unique Advantage
                </span>
                <h2 className="headline-lg text-slate-50 mb-6">
                  The NORCAT Underground Centre
                </h2>
                <p className="body-lg text-slate-300 mb-6">
                  A real, active mine where startups can test, validate, and demonstrate 
                  mining technology in operational conditions. This globally unique asset 
                  gives your technology the credibility it needs to win customers and investors.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Test in real mining conditions',
                    'Validate technology with industry partners',
                    'Demonstrate to global customers',
                    'Access OEM partnerships',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-200">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <Zap className="h-3.5 w-3.5 text-teal-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="btn-hero">
                  <Link to="/mining-innovation">
                    Learn About Mining Innovation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={miningTechImage}
                  alt="Mining technology demonstration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-display font-bold mb-1">1.2km</div>
                  <div className="text-sm opacity-90">Underground Facility</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-secondary border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <StatCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={foundersImage}
                  alt="Startup founders collaborating"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Who We Support
                </span>
                <h2 className="headline-lg mb-6">
                  Built for Ambitious{' '}
                  <span className="text-gradient-teal">Founders</span>
                </h2>
                <p className="body-lg mb-6">
                  We work with early-stage to scaling tech-enabled, IP-driven startups. 
                  Whether you're building mining technology, cleantech, industrial IoT, 
                  or critical minerals solutions—if you're solving hard problems, you belong here.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Pickaxe, label: 'Mining Technology' },
                    { icon: Zap, label: 'Cleantech & BEV' },
                    { icon: Building2, label: 'Industrial Tech' },
                    { icon: Target, label: 'Critical Minerals' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="btn-hero">
                  <Link to="/apply">
                    See If You Qualify
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Sudbury */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Sudbury
              </span>
              <h2 className="headline-lg mb-6">
                The Heart of{' '}
                <span className="text-gradient-teal">Mining Innovation</span>
              </h2>
              <p className="body-lg">
                Greater Sudbury is home to the world's largest concentration of mining 
                expertise, research institutions, and industry partners. It's the ideal 
                place to build and scale mining technology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Industry Access',
                description: 'Direct connections to major mining companies, OEMs, and global industry leaders actively seeking new technology.',
              },
              {
                number: '02',
                title: 'Research Ecosystem',
                description: 'World-class research institutions including Laurentian University, MIRARCO, and CEMI driving innovation.',
              },
              {
                number: '03',
                title: 'Talent Pipeline',
                description: 'Access to skilled engineers, geologists, and technologists with deep mining industry expertise.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="relative p-8 bg-background rounded-2xl border border-border hover:border-teal-200 transition-colors">
                  <span className="text-6xl font-display font-bold text-primary/10 absolute top-4 right-6">
                    {item.number}
                  </span>
                  <h3 className="headline-sm mb-3 relative z-10">{item.title}</h3>
                  <p className="body-md relative z-10">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Founder Stories
              </span>
              <h2 className="headline-lg mb-6">
                What Founders Are{' '}
                <span className="text-gradient-teal">Saying</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} delay={index * 100}>
                <TestimonialCard
                  {...testimonial}
                  variant={index === 1 ? 'featured' : 'default'}
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Events & Community
                </span>
                <h2 className="headline-lg text-slate-50 mb-6">
                  Where the Ecosystem Connects
                </h2>
                <p className="body-lg text-slate-300 mb-8">
                  Our flagship events bring together founders, investors, industry leaders, 
                  and innovation partners. From Mining Transformed to Venture North PITCH, 
                  these are where deals get done.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { name: 'Mining Transformed', date: 'Annual flagship conference' },
                    { name: 'Venture North PITCH', date: 'Startup pitch competition' },
                    { name: 'Demo Days', date: 'Monthly showcase events' },
                  ].map((event) => (
                    <div
                      key={event.name}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                    >
                      <div>
                        <div className="font-semibold text-slate-50">{event.name}</div>
                        <div className="text-sm text-slate-400">{event.date}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-teal-400" />
                    </div>
                  ))}
                </div>
                <Button asChild className="btn-hero">
                  <Link to="/events">
                    View All Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={pitchEventImage}
                  alt="Venture North PITCH event"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
