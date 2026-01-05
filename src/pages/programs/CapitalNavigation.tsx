import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, DollarSign, FileText, PieChart, TrendingUp } from 'lucide-react';

const CapitalNavigation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -left-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Compass className="w-4 h-4" />
              Programs
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Capital<br />
              <span className="text-gradient">Navigation</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Navigate the complex landscape of startup funding with expert guidance 
              on government grants, venture capital, and strategic investment.
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

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">Our Services</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, title: 'Grant Writing Support', desc: 'Expert assistance with government funding applications including SR&ED, IRAP, and provincial programs.' },
              { icon: PieChart, title: 'Investment Readiness', desc: 'Prepare your pitch deck, financial models, and data room for investor conversations.' },
              { icon: DollarSign, title: 'Funding Strategy', desc: 'Develop a comprehensive capital strategy aligned with your growth milestones.' },
              { icon: TrendingUp, title: 'Investor Introductions', desc: 'Connect with our network of angel investors, VCs, and strategic partners.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-modern p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="headline-sm mb-3">{item.title}</h3>
                    <p className="body-md">{item.desc}</p>
                  </div>
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
              { number: '$150M+', label: 'Capital Raised' },
              { number: '85%', label: 'Grant Success Rate' },
              { number: '50+', label: 'Investor Partners' },
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
            <h2 className="headline-lg text-white mb-6">Ready to Raise Capital?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let us help you navigate your funding journey.
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

export default CapitalNavigation;
