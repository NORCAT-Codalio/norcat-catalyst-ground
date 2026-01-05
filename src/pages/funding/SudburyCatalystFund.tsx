import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, DollarSign, Target, BarChart3 } from 'lucide-react';

const SudburyCatalystFund = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Zap className="w-4 h-4" />
              Funding & Capital
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Sudbury<br />
              <span className="text-gradient">Catalyst Fund</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Early-stage investment capital for innovative companies building 
              transformative solutions in Northern Ontario.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Apply for Funding
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Fund Details */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-6">Fund Overview</h2>
              <p className="body-lg mb-8">
                The Sudbury Catalyst Fund provides critical early-stage capital to 
                high-potential startups with a connection to Northern Ontario. We invest 
                in founders solving big problems with innovative technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: DollarSign, label: 'Investment Size', value: '$25K - $250K' },
                  { icon: Target, label: 'Focus', value: 'Seed Stage' },
                  { icon: BarChart3, label: 'Portfolio', value: '20+ Companies' },
                  { icon: Zap, label: 'Decision Time', value: '4-6 Weeks' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-secondary/50">
                    <item.icon className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 text-center">
                <div className="stat-number mb-4">$5M+</div>
                <p className="body-lg">Deployed to Northern Ontario Startups</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Ready to Pitch?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Tell us about your venture and we'll review your application.
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

export default SudburyCatalystFund;
