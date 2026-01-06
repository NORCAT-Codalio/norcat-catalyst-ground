import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, DollarSign, Target, BarChart3, MapPin, TrendingUp, Users, Briefcase, Building2, Coins, Globe, Rocket } from 'lucide-react';

// Portfolio company logos
import iregainedLogo from '@/assets/logos/iregained.png';
import vervLogo from '@/assets/logos/verv.png';
import rephealthLogo from '@/assets/logos/rephealth.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import myomarLogo from '@/assets/logos/myomar.png';
import codalioLogo from '@/assets/logos/codalio.png';

// Fund partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import nickelBasinLogo from '@/assets/logos/nickel-basin.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import scfLogo from '@/assets/logos/sudbury-catalyst-fund.png';

// Team headshots
import jasonSullivanImage from '@/assets/team/jason-sullivan.png';
import brendanScfImage from '@/assets/team/brendan-scf.png';

const SudburyCatalystFund = () => {
  const portfolioCompanies = [
    { name: 'IRegained', logo: iregainedLogo },
    { name: 'Verv', logo: vervLogo },
    { name: 'Rep Health', logo: rephealthLogo },
    { name: 'Circuit IQ', logo: circuitiqLogo },
    { name: 'Kinmetrix', logo: kinmetrixLogo },
    { name: 'Myomar', logo: myomarLogo },
    { name: 'Codalio', logo: codalioLogo },
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
        image: brendanScfImage,
      },
      {
        name: 'Jason Sullivan',
        role: 'Co-Managing Director',
        title: 'NBFDC',
        image: jasonSullivanImage,
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
      <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden">
        {/* Decorative elements using SCF brand colors */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1A4B5C]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7ABFBF]/10 blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img 
                src={scfLogo} 
                alt="Sudbury Catalyst Fund" 
                className="h-32 md:h-40 mb-8 object-contain"
              />
              <p className="body-xl text-[#1A4B5C] max-w-xl mb-10">
                Early-stage investment capital for innovative companies building 
                transformative solutions in Northern Ontario.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#1A4B5C] hover:bg-[#1A4B5C]/90 text-white px-8 py-6 text-lg rounded-xl">
                  <Link to="/apply">
                    Apply for Funding
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#1A4B5C] text-[#1A4B5C] hover:bg-[#1A4B5C]/5 px-8 py-6 text-lg rounded-xl">
                  <Link to="#overview">
                    Learn More
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Stats card */}
                <div className="bg-gradient-to-br from-[#1A4B5C] to-[#2D7A8C] rounded-3xl p-10 text-white shadow-2xl">
                  <div className="text-6xl font-bold mb-2">$5M</div>
                  <p className="text-xl text-white/80 mb-8">In Deployable Capital</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-[#C9A227]">$3M</div>
                      <p className="text-sm text-white/70">Deployed To Date</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-[#C9A227]">60+</div>
                      <p className="text-sm text-white/70">Jobs Created</p>
                    </div>
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A227] rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fund Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
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
                  { icon: BarChart3, label: 'Portfolio', value: '7 Companies' },
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
              <div className="flex flex-col justify-end space-y-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 text-center flex flex-col justify-center">
                  <div className="stat-number mb-4">$5M</div>
                  <p className="body-lg">In Deployable Capital</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">$3M</div>
                    <p className="text-sm text-muted-foreground">Deployed To Date</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">60+</div>
                    <p className="text-sm text-muted-foreground">Jobs Created In Sudbury</p>
                  </div>
                </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {portfolioCompanies.map((company, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 flex items-center justify-center min-h-[120px]">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
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
              <div className="space-y-4">
                {/* Top row - 2 boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white border border-border/50 flex items-center justify-center min-h-[100px]">
                    <img src={nickelBasinLogo} alt="Nickel Basin Federal Development Corporation" className="max-h-16 max-w-full object-contain" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-border/50 flex items-center justify-center min-h-[100px]">
                    <img src={sudburyLogo} alt="City of Greater Sudbury" className="max-h-16 max-w-full object-contain" />
                  </div>
                </div>
                {/* Bottom row - full width */}
                <div className="p-6 rounded-2xl bg-white border border-border/50 flex items-center justify-center min-h-[100px]">
                  <img src={fednorLogo} alt="Federal Economic Development Agency for Northern Ontario" className="max-h-12 max-w-full object-contain" />
                </div>
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
                  {director.image ? (
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  )}
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
