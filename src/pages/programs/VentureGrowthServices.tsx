import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Target, Users, TrendingUp, Check } from 'lucide-react';

const VentureGrowthServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        <div className="orb orb-blue w-64 h-64 bottom-0 left-1/4" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Rocket className="w-4 h-4" />
              Programs
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Venture Growth<br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Comprehensive support to help early-stage ventures scale through strategic guidance, 
              operational excellence, and access to critical resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-lg">
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-6">What We Offer</h2>
              <p className="body-lg max-w-2xl mx-auto">
                A tailored approach to venture development that meets you where you are.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: 'Strategy Development', desc: 'Define your go-to-market strategy and product roadmap.' },
              { icon: Target, title: 'Customer Discovery', desc: 'Validate your market and find product-market fit.' },
              { icon: Users, title: 'Team Building', desc: 'Recruit and develop high-performing founding teams.' },
              { icon: TrendingUp, title: 'Growth Planning', desc: 'Scale operations and prepare for investment.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-modern p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="headline-sm mb-3">{item.title}</h3>
                  <p className="body-md">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-6">Why Venture Growth Services?</h2>
              <p className="body-lg mb-8">
                Our program is designed for ambitious founders who want to build 
                category-defining companies in Canada's innovation ecosystem.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated venture advisor assigned to your company',
                  'Access to our network of 200+ industry mentors',
                  'Quarterly milestone reviews and accountability',
                  'Connections to strategic investors and partners',
                  'Workspace and collaboration opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 text-center">
                <div className="stat-number mb-4">$50M+</div>
                <p className="body-lg">Capital raised by our portfolio companies</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Ready to Scale Your Venture?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Join the next cohort of ambitious founders building the future.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default VentureGrowthServices;
