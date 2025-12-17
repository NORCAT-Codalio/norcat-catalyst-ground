import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, DollarSign, Pickaxe, Calendar, ChevronRight, Zap, Target, TrendingUp, Sparkles, Play } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCounter } from '@/components/StatCounter';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import heroImage from '@/assets/hero-underground.jpg';
import foundersImage from '@/assets/founders-collab.jpg';
import miningTechImage from '@/assets/mining-tech.jpg';
const services = [{
  icon: Rocket,
  title: 'Venture Growth Services',
  description: 'Structured mentorship and advisory to help you build, launch, and scale.',
  features: ['1-on-1 mentorship', 'Growth strategy', 'Market validation']
}, {
  icon: DollarSign,
  title: 'Capital Navigation',
  description: 'Expert guidance through funding rounds, investor relations, and deal structuring.',
  features: ['Investor readiness', 'Pitch coaching', 'Due diligence prep']
}, {
  icon: Target,
  title: 'Non-Dilutive Funding',
  description: 'Access IAP, RAII, and other programs that fund growth without equity dilution.',
  features: ['Grant applications', 'Program matching', 'Compliance support']
}, {
  icon: TrendingUp,
  title: 'Sudbury Catalyst Fund',
  description: 'Our $5M fund investing in promising startups ready to scale.',
  features: ['Seed investment', 'Follow-on funding', 'Strategic support']
}, {
  icon: Pickaxe,
  title: 'Mining Innovation',
  description: 'Test and validate mining technology in our operational underground facility.',
  features: ['Real-world testing', 'Industry connections', 'Global partnerships']
}, {
  icon: Calendar,
  title: 'Events & Programming',
  description: 'Mining Transformed, Venture North PITCH, demo days, and networking events.',
  features: ['Flagship conferences', 'Pitch competitions', 'Community events']
}];
const testimonials = [{
  quote: "NORCAT Innovation gave us the credibility and connections we needed to close our Series A. Their underground testing facility was a game-changer.",
  author: "Sarah Chen",
  role: "CEO",
  company: "MineTech Robotics"
}, {
  quote: "The mentorship here is world-class. They understand what it takes to build hardware companies and connected us with exactly the right investors.",
  author: "Marcus Williams",
  role: "Founder",
  company: "CriticalMin Solutions"
}, {
  quote: "From IAP funding to investor introductions, NORCAT Innovation accelerated our growth by at least 18 months.",
  author: "Elena Rodriguez",
  role: "CTO",
  company: "SubSurface AI"
}];
const stats = [{
  value: 150,
  suffix: '+',
  label: 'Startups Supported'
}, {
  value: 75,
  prefix: '$',
  suffix: 'M+',
  label: 'Capital Raised'
}, {
  value: 2000,
  suffix: '+',
  label: 'Jobs Created'
}, {
  value: 5,
  prefix: '$',
  suffix: 'M',
  label: 'Catalyst Fund'
}];
export default function Index() {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="NORCAT Underground Centre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-900/90 to-teal-950/80" />
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="badge-dark mb-6">
                <Sparkles className="h-4 w-4" />
                Sudbury's Regional Innovation Centre
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
            <h1 className="headline-hero text-white mb-8">
                Your Venture's
                <span className="block text-gradient">Unfair Advantage</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Ontario's hub for emerging mining technology. World-class mentorship, 
                capital access, and the only underground testing facility of its kind.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="btn-primary-lg">
                  Apply to NORCAT Innovation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/mining-innovation" className="btn-outline-dark">
                  <Play className="h-4 w-4" />
                  2025 Recap
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-16 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {['S', 'M', 'E', 'J'].map((initial, i) => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-gray-900 flex items-center justify-center text-white font-semibold text-sm">
                      {initial}
                    </div>)}
                </div>
                <div className="text-gray-400">
                  <span className="text-white font-semibold">150+ founders</span> have scaled with us
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-20 border-b border-border bg-secondary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Top NORCAT Innovation Companies
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Proudly funded by the Government of Ontario
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {Array.from({
            length: 24
          }).map((_, i) => <div key={i} className="aspect-[3/2] rounded-xl bg-muted/50 border border-border hover:border-primary/30 hover:bg-muted transition-all duration-300" />)}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="badge mb-6">
                <Zap className="h-4 w-4" />
                What We Do
              </div>
              <h2 className="headline-xl mb-6">
                Everything founders need to
                <span className="text-gradient"> scale</span>
              </h2>
              <p className="body-xl">
                From early-stage mentorship to growth capital, we provide complete 
                support for tech-enabled, IP-driven startups.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <ScrollReveal key={service.title} delay={index * 80}>
                <div className="card-glow h-full">
                  <ServiceCard {...service} className="h-full" />
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Underground Centre Feature */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="badge-dark mb-6">
                  <Pickaxe className="h-4 w-4" />
                  Our Unique Advantage
                </div>
                <h2 className="headline-xl text-white mb-6">
                  The NORCAT
                  <span className="text-gradient"> Underground Centre</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  A real, active mine where startups can test, validate, and demonstrate 
                  mining technology in operational conditions. This globally unique asset 
                  gives your technology the credibility it needs.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Test in real mining conditions', 'Validate technology with industry partners', 'Demonstrate to global customers', 'Access OEM partnerships'].map((item, index) => <li key={index} className="flex items-center gap-4 text-gray-200">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-teal-400" />
                      </div>
                      {item}
                    </li>)}
                </ul>
                <Link to="/mining-innovation" className="btn-primary-lg">
                  Explore the Underground Centre
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-3xl blur-2xl" />
                <img src={miningTechImage} alt="Mining technology demonstration" className="relative rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 glass-dark p-6 rounded-2xl">
                  <div className="text-4xl font-black text-white mb-1">3km</div>
                  <div className="text-sm text-gray-400">Underground Facility</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-glow">
                  Globally Unique
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-gradient-to-b from-gray-950 to-gray-900 relative">
        <div className="absolute inset-0 bg-glow" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="stat-number mb-2 text-white">
                    {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="font-semibold text-lg text-white">{stat.label}</div>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl blur-2xl" />
                <img src={foundersImage} alt="Startup founders collaborating" className="relative rounded-3xl shadow-2xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="badge mb-6">
                  <Target className="h-4 w-4" />
                  Who We Support
                </div>
                <h2 className="headline-xl mb-6">
                  Built for
                  <span className="text-gradient"> ambitious</span> founders
                </h2>
                <p className="body-xl mb-8">
                  We work with early-stage to scaling tech-enabled, IP-driven startups. 
                  Whether you're building mining technology, cleantech, or industrial IoT.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {['Mining Technology', 'Cleantech & BEV', 'Industrial Tech', 'Critical Minerals'].map(label => <div key={label} className="px-5 py-4 rounded-2xl bg-secondary border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 font-medium">
                      {label}
                    </div>)}
                </div>
                <Link to="/apply" className="btn-primary-lg">
                  See If You Qualify
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Sudbury */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="badge mb-6">
                <Sparkles className="h-4 w-4" />
                Why Sudbury
              </div>
              <h2 className="headline-xl mb-6">
                The heart of
                <span className="text-gradient"> mining innovation</span>
              </h2>
              <p className="body-xl">
                Greater Sudbury is home to the world's largest concentration of mining 
                expertise, research institutions, and industry partners.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
            number: '01',
            title: 'Industry Access',
            description: 'Direct connections to major mining companies, OEMs, and global industry leaders.'
          }, {
            number: '02',
            title: 'Research Ecosystem',
            description: 'World-class research institutions driving innovation in mining technology.'
          }, {
            number: '03',
            title: 'Talent Pipeline',
            description: 'Access to skilled engineers and technologists with deep mining expertise.'
          }].map((item, index) => <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-modern p-8 h-full">
                  <span className="text-6xl font-black text-gradient opacity-50">
                    {item.number}
                  </span>
                  <h3 className="headline-sm mt-4 mb-3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="badge mb-6">
                <Sparkles className="h-4 w-4" />
                Founder Stories
              </div>
              <h2 className="headline-xl">
                What founders are
                <span className="text-gradient"> saying</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <ScrollReveal key={testimonial.author} delay={index * 100}>
                <TestimonialCard {...testimonial} variant={index === 1 ? 'featured' : 'default'} className="h-full" />
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <h2 className="headline-hero text-white mb-8 max-w-4xl mx-auto">
              Ready to build
              <span className="text-gradient"> something big?</span>
            </h2>
            <p className="body-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join Ontario's most ambitious founders. Get the mentorship, funding, and 
              connections you need to scale your tech startup.
            </p>
            <Link to="/apply" className="btn-primary-lg">
              Apply for Venture Growth Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>;
}