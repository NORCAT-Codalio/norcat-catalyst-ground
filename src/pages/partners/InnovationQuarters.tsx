import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, MapPin, Wifi, Coffee } from 'lucide-react';

const InnovationQuarters = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Building className="w-4 h-4" />
              Partner Programs
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Innovation<br />
              <span className="text-gradient">Quarters</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Premium workspace and community for innovation-driven companies. 
              Join a vibrant ecosystem of entrepreneurs and creators.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Tour the Space
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">What's Included</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Prime Location', desc: 'Downtown Sudbury with easy access to transit and amenities.' },
              { icon: Wifi, title: 'High-Speed Internet', desc: 'Enterprise-grade connectivity for your team.' },
              { icon: Coffee, title: 'Full Amenities', desc: 'Kitchen, lounge, and collaboration spaces.' },
              { icon: Building, title: 'Flexible Terms', desc: 'Month-to-month options for growing companies.' },
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
            <h2 className="headline-lg text-white mb-6">Find Your Space</h2>
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

export default InnovationQuarters;
