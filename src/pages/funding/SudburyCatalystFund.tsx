import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, DollarSign, Target, BarChart3, MapPin, TrendingUp, Users, Briefcase, Building2, Coins, Globe, Rocket } from 'lucide-react';

const SudburyCatalystFund = () => {
  const portfolioCompanies = [
    { name: 'Company 1', sector: 'Mining Tech' },
    { name: 'Company 2', sector: 'CleanTech' },
    { name: 'Company 3', sector: 'AI/ML' },
    { name: 'Company 4', sector: 'HealthTech' },
    { name: 'Company 5', sector: 'SaaS' },
    { name: 'Company 6', sector: 'Industrial' },
  ];

  const investmentCriteria = [
    {
      icon: Briefcase,
      title: 'Sectors',
      description: 'Co-invest in early-stage tech across multiple sectors including mining tech, cleantech, AI, health, and more.',
    },
    {
      icon: Coins,
      title: 'Funding',
      description: 'Co-invest up to $250,000 on a 1:1 matching basis alongside angel investors and other funds.',
    },
    {
      icon: Globe,
      title: 'Geography',
      description: 'Must have commitment to operate majority of operations in Greater Sudbury.',
    },
    {
      icon: TrendingUp,
      title: 'Stage',
      description: 'Cumulative revenues and capital raised equating to less than $1M since company inception.',
    },
  ];

  const team = {
    directors: [
      {
        name: 'Brendan Skiffington',
        role: 'Co-Managing Director',
        title: 'Chair, Investment Committee',
      },
      {
        name: 'Jason Sullivan',
        role: 'Co-Managing Director',
      },
    ],
    committee: [
      { name: 'Committee Member', role: 'Investment Committee' },
      { name: 'Committee Member', role: 'Investment Committee' },
      { name: 'Committee Member', role: 'Investment Committee' },
      { name: 'Committee Member', role: 'Investment Committee' },
      { name: 'Committee Member', role: 'Investment Committee' },
      { name: 'Committee Member', role: 'Investment Committee' },
    ],
  };

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

      {/* Fund Overview */}
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

      {/* Portfolio Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Portfolio Companies</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                A diversified portfolio of high-growth companies across sectors
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {portfolioCompanies.map((company, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{company.name}</p>
                  <p className="text-sm text-muted-foreground">{company.sector}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About the Fund */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-6">About the Fund</h2>
              <div className="space-y-6">
                <p className="body-lg">
                  The Sudbury Catalyst Fund (SCF) is a unique $5 million venture capital fund 
                  administered by the Nickel Basin Federal Development Corporation in collaboration 
                  with the City of Greater Sudbury, FedNor, and NORCAT.
                </p>
                <p className="body-lg text-muted-foreground">
                  Established with the goal to accelerate the growth of scalable tech start-ups, 
                  the SCF brings together a variety of partners and angel investors eager to build 
                  Northern Ontario's entrepreneurial ecosystem by investing in and supporting a 
                  diversified portfolio of high-growth companies.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {['City of Greater Sudbury', 'FedNor', 'NORCAT', 'Nickel Basin FDC'].map((partner, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-secondary/50 border border-border/50 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-sm">{partner}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg text-white mb-4">Investment Criteria</h2>
              <p className="body-lg text-white/70 max-w-2xl mx-auto">
                What we look for in potential investments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentCriteria.map((criteria, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <criteria.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{criteria.title}</h3>
                  <p className="text-white/60">{criteria.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Leadership Team</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders guiding investments in Northern Ontario's future
              </p>
            </div>
          </ScrollReveal>

          {/* Directors */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {team.directors.map((director, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-3xl bg-secondary/50 border border-border/50">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                  <p className="text-primary font-medium mb-1">{director.role}</p>
                  {director.title && (
                    <p className="text-sm text-muted-foreground">{director.title}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Investment Committee */}
          <ScrollReveal>
            <h3 className="text-xl font-bold text-center mb-8">Investment Committee</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.committee.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="text-center p-4 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/60" />
                  </div>
                  <p className="font-medium text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="orb orb-teal w-64 h-64 -bottom-32 -left-32" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="headline-lg text-white mb-6">Ready to Scale Your Venture?</h2>
              <p className="body-lg text-white/70 mb-10">
                If you're building transformative technology and are committed to growing 
                in Northern Ontario, we want to hear from you.
              </p>
              <Button asChild className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                <Link to="/apply">
                  Apply for Investment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SudburyCatalystFund;
