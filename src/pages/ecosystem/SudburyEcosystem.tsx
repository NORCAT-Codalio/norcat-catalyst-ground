import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Building2, TrendingUp } from 'lucide-react';

const SudburyEcosystem = () => {
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
              <Globe className="w-4 h-4" />
              Ecosystem
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Sudbury Innovation<br />
              <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              A thriving community of entrepreneurs, researchers, investors, 
              and industry partners building the future of Northern Ontario.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Get Connected
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building2, number: '200+', label: 'Startups' },
              { icon: Users, number: '50+', label: 'Mentors' },
              { icon: TrendingUp, number: '$150M+', label: 'Capital Raised' },
              { icon: Globe, number: '15+', label: 'Partner Orgs' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-modern p-8">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="stat-number mb-2">{stat.number}</div>
                  <p className="body-md">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">Key Sectors</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Mining & Natural Resources', desc: 'Innovation in extraction, processing, and sustainability.' },
              { title: 'Clean Technology', desc: 'Solutions for environmental challenges and energy transition.' },
              { title: 'Health & Life Sciences', desc: 'Healthcare innovation for Northern communities.' },
            ].map((sector, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="card-modern p-8 h-full">
                  <h3 className="headline-sm mb-3">{sector.title}</h3>
                  <p className="body-md">{sector.desc}</p>
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
            <h2 className="headline-lg text-white mb-6">Join the Ecosystem</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Whether you're a startup, investor, or industry partner, 
              there's a place for you in Sudbury's innovation community.
            </p>
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

export default SudburyEcosystem;
