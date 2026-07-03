import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, DollarSign, ExternalLink, FileText, PieChart, TrendingUp } from 'lucide-react';

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

      {/* Invest Sudbury Funding & Incentives Portal */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-6">
                  <ExternalLink className="w-3.5 h-3.5" />
                  External Resource
                </span>
                <h2 className="headline-lg mb-4">Invest Sudbury Funding &amp; Incentives</h2>
                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore the official Greater Sudbury funding directory to find municipal, provincial, and federal programs matched to your business stage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-modern p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="headline-sm mb-4">Search the Funding Directory</h3>
                    <p className="body-md text-muted-foreground mb-6">
                      The Invest Sudbury portal features a searchable directory of grants, loans, tax incentives, and investor programs available to businesses in Sudbury and Northern Ontario.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        'Filter by business stage and funding type',
                        'Find grants, loans, tax rebates, and VC options',
                        'Access local and regional program details',
                        'Connect with the Greater Sudbury Economic Development team',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://investsudbury.ca/incentives-and-programs/funding-and-incentives/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-lg inline-flex"
                    >
                      Open Funding Portal
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Grants', desc: 'Non-repayable funds' },
                      { label: 'Loans', desc: 'Flexible financing' },
                      { label: 'Tax Rebates', desc: 'Reduce tax burden' },
                      { label: 'Investors', desc: 'Angel & VC capital' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl p-5 text-center"
                        style={{
                          background: 'linear-gradient(145deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 100%)',
                          backdropFilter: 'blur(20px)',
                          borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                        }}
                      >
                        <div className="text-2xl font-black text-foreground mb-1">{item.label}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
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
