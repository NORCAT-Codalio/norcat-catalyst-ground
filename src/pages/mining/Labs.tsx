import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Microscope, Cpu, Lightbulb } from 'lucide-react';

const Labs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <FlaskConical className="w-4 h-4" />
              Mining & Tough Tech
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              <span className="text-gradient">Labs</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              State-of-the-art research and development facilities for 
              prototyping, testing, and validating new technologies.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Access Our Labs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">Our Facilities</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FlaskConical, title: 'Materials Lab', desc: 'Advanced materials testing and analysis capabilities.' },
              { icon: Microscope, title: 'Prototyping Lab', desc: 'Rapid prototyping and 3D printing facilities.' },
              { icon: Cpu, title: 'Electronics Lab', desc: 'Electronics design and embedded systems development.' },
              { icon: Lightbulb, title: 'Innovation Lab', desc: 'Collaborative space for ideation and experimentation.' },
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

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Build Something New</h2>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Labs;
