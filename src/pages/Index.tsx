import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, DollarSign, Pickaxe, Calendar, ChevronRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCounter } from '@/components/StatCounter';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import heroImage from '@/assets/hero-underground.jpg';
import foundersImage from '@/assets/founders-collab.jpg';
import miningTechImage from '@/assets/mining-tech.jpg';

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
    quote: "NORCAT Innovation gave us the credibility and connections we needed to close our Series A. Their underground testing facility was a game-changer.",
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
    quote: "From IAP funding to investor introductions, NORCAT Innovation accelerated our growth by at least 18 months.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "SubSurface AI",
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Startups Supported' },
  { value: 75, prefix: '$', suffix: 'M+', label: 'Capital Raised' },
  { value: 2000, suffix: '+', label: 'Jobs Created' },
  { value: 5, prefix: '$', suffix: 'M', label: 'Catalyst Fund' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="NORCAT Underground Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-gray-400 text-[15px] mb-4">
                Sudbury's Regional Innovation Centre
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="headline-xl text-white mb-6">
                Where tech founders build real-world solutions
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-[19px] text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Ontario's hub for emerging mining technology and tech-enabled startups. 
                World-class mentorship, capital access, and the only underground testing 
                facility of its kind.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn-teal">
                  Apply for Venture Growth Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/mining-innovation"
                  className="btn-outline border-gray-600 text-white hover:bg-white/10"
                >
                  Explore Underground Centre
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-12 flex items-center gap-6 text-[14px] text-gray-500">
                <span>Government of Ontario Funded</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>Not-for-Profit</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-muted-foreground text-[15px] mb-4">What We Do</p>
              <h2 className="headline-lg mb-6">
                Everything founders need to scale
              </h2>
              <p className="body-lg">
                From early-stage mentorship to growth capital, we provide complete 
                support for tech-enabled, IP-driven startups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 50}>
                <ServiceCard {...service} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Underground Centre Feature */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-primary text-[15px] mb-4">Our Unique Advantage</p>
                <h2 className="headline-lg text-white mb-6">
                  The NORCAT Underground Centre
                </h2>
                <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
                  A real, active mine where startups can test, validate, and demonstrate 
                  mining technology in operational conditions. This globally unique asset 
                  gives your technology the credibility it needs.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Test in real mining conditions',
                    'Validate technology with industry partners',
                    'Demonstrate to global customers',
                    'Access OEM partnerships',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300 text-[15px]">
                      <Zap className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/mining-innovation" className="btn-teal inline-flex items-center gap-2">
                  Learn About Mining Innovation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={miningTechImage}
                  alt="Mining technology demonstration"
                  className="rounded-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-6 rounded-xl">
                  <div className="text-[32px] font-semibold tracking-[-0.02em]">1.2km</div>
                  <div className="text-[14px] opacity-70">Underground Facility</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 50}>
                <StatCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <img
                src={foundersImage}
                alt="Startup founders collaborating"
                className="rounded-2xl"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="text-muted-foreground text-[15px] mb-4">Who We Support</p>
                <h2 className="headline-lg mb-6">
                  Built for ambitious founders
                </h2>
                <p className="body-lg mb-8">
                  We work with early-stage to scaling tech-enabled, IP-driven startups. 
                  Whether you're building mining technology, cleantech, industrial IoT, 
                  or critical minerals solutions.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {['Mining Technology', 'Cleantech & BEV', 'Industrial Tech', 'Critical Minerals'].map((label) => (
                    <div
                      key={label}
                      className="px-4 py-3 rounded-xl bg-secondary text-[14px] font-medium"
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <Link to="/apply" className="btn-primary inline-flex items-center gap-2">
                  See If You Qualify
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Sudbury */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-muted-foreground text-[15px] mb-4">Why Sudbury</p>
              <h2 className="headline-lg mb-6">
                The heart of mining innovation
              </h2>
              <p className="body-lg">
                Greater Sudbury is home to the world's largest concentration of mining 
                expertise, research institutions, and industry partners.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Industry Access',
                description: 'Direct connections to major mining companies, OEMs, and global industry leaders.',
              },
              {
                number: '02',
                title: 'Research Ecosystem',
                description: 'World-class research institutions driving innovation in mining technology.',
              },
              {
                number: '03',
                title: 'Talent Pipeline',
                description: 'Access to skilled engineers and technologists with deep mining expertise.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 50}>
                <div className="p-8 bg-background rounded-2xl">
                  <span className="text-[48px] font-semibold text-gray-200 tracking-[-0.03em]">
                    {item.number}
                  </span>
                  <h3 className="headline-sm mb-3 mt-4">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-muted-foreground text-[15px] mb-4">Founder Stories</p>
              <h2 className="headline-lg">
                What founders are saying
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} delay={index * 50}>
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
    </Layout>
  );
}
