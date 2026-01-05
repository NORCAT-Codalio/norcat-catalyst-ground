import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Check } from 'lucide-react';

const InnovationAccelerationProgram = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Rocket className="w-4 h-4" />
              Funding & Capital
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Innovation<br />
              <span className="text-gradient">Acceleration Program</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Accelerate your innovation with funding support for research, 
              development, and commercialization activities.
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

      {/* Program Details */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="headline-lg mb-8">Program Benefits</h2>
              <ul className="space-y-4 mb-12">
                {[
                  'Funding for prototype development and testing',
                  'Support for market validation activities',
                  'Access to technical advisors and experts',
                  'Connections to pilot customers and partners',
                  'Follow-on funding opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Accelerate Your Innovation</h2>
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

export default InnovationAccelerationProgram;
