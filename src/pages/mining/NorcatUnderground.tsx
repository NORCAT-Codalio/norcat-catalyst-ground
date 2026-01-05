import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Shield, Cpu, Wrench } from 'lucide-react';

const NorcatUnderground = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Mountain className="w-4 h-4" />
              Mining & Tough Tech
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              NORCAT<br />
              <span className="text-gradient">Underground Centre</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              The world's first underground centre for mining innovation. 
              Test, develop, and demonstrate new technologies in a real mining environment.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Book a Tour
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">Our Capabilities</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Mountain, title: 'Underground Testing', desc: 'Real-world testing in an active underground environment.' },
              { icon: Shield, title: 'Safety Training', desc: 'Industry-leading safety training and certification programs.' },
              { icon: Cpu, title: 'Technology Demo', desc: 'Showcase your innovations to global mining companies.' },
              { icon: Wrench, title: 'Equipment Testing', desc: 'Test equipment performance in challenging conditions.' },
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

      {/* Stats */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '5km', label: 'Underground Tunnels' },
              { number: '100+', label: 'Technology Demos' },
              { number: '25K+', label: 'People Trained' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-number mb-2">{stat.number}</div>
                <p className="body-lg">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Experience the Underground</h2>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default NorcatUnderground;
