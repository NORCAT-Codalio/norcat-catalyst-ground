import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, DollarSign, Target, TrendingUp, Pickaxe, Calendar, Users, FileCheck, Lightbulb, Building2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 'venture-growth',
    icon: Rocket,
    title: 'Venture Growth Services',
    description: 'Our flagship program providing structured mentorship and advisory to help you build, launch, and scale your startup.',
    whoFor: 'Early-stage to scaling tech-enabled startups with strong IP potential.',
    whatYouGet: [
      'Dedicated mentor matching based on your industry and stage',
      '1-on-1 strategic advisory sessions',
      'Market validation and go-to-market strategy support',
      'Access to our network of industry experts and advisors',
      'Pitch deck development and investor preparation',
    ],
    whyMatters: 'Get the guidance that typically costs $500/hour for free, from people who\'ve built and scaled companies before.',
  },
  {
    id: 'capital',
    icon: DollarSign,
    title: 'Capital Navigation',
    description: 'Expert guidance through funding rounds, investor relations, and deal structuring to help you raise the capital you need.',
    whoFor: 'Startups preparing for or actively raising seed to Series A funding.',
    whatYouGet: [
      'Investor readiness assessment',
      'Financial modeling and valuation support',
      'Warm introductions to relevant investors',
      'Term sheet review and negotiation guidance',
      'Due diligence preparation',
    ],
    whyMatters: 'Navigate the complex world of startup financing with experts who understand both sides of the table.',
  },
  {
    id: 'funding',
    icon: Target,
    title: 'Non-Dilutive Funding',
    description: 'Access IAP, RAII, and other programs that fund growth without giving up equity.',
    whoFor: 'Canadian-incorporated startups with eligible R&D or commercialization projects.',
    whatYouGet: [
      'Program eligibility assessment',
      'Application strategy and writing support',
      'Budget and milestone planning',
      'Compliance and reporting guidance',
      'Connections to complementary funding programs',
    ],
    whyMatters: 'Non-dilutive funding lets you grow without giving up ownership. We help you access programs most founders don\'t know exist.',
  },
  {
    id: 'catalyst',
    icon: TrendingUp,
    title: 'Sudbury Catalyst Fund',
    description: 'Our $5M fund providing direct investment to promising startups ready to scale.',
    whoFor: 'High-potential startups with proven traction looking for seed or bridge financing.',
    whatYouGet: [
      'Seed investments from $50K to $500K',
      'Follow-on funding for portfolio companies',
      'Strategic support beyond capital',
      'Access to co-investment opportunities',
      'Board-level guidance and governance support',
    ],
    whyMatters: 'Patient capital from people who understand your industry and are committed to your long-term success.',
  },
  {
    id: 'mining',
    icon: Pickaxe,
    title: 'Mining Innovation Support',
    description: 'Specialized support for startups building mining technology, including access to our underground testing facility.',
    whoFor: 'Startups developing mining technology, automation, safety, or sustainability solutions.',
    whatYouGet: [
      'Underground testing and validation',
      'Industry partner introductions',
      'OEM connection facilitation',
      'Technology demonstration opportunities',
      'Mining industry market intelligence',
    ],
    whyMatters: 'The NORCAT Underground Centre is a globally unique asset that gives your technology the credibility to win global customers.',
  },
  {
    id: 'events',
    icon: Calendar,
    title: 'Events & Programming',
    description: 'Flagship events, pitch competitions, and networking opportunities to connect with the ecosystem.',
    whoFor: 'All startups in our network and the broader innovation community.',
    whatYouGet: [
      'Mining Transformed conference access',
      'Venture North PITCH competition',
      'Monthly demo days and showcases',
      'Networking events with investors and industry',
      'Educational workshops and masterclasses',
    ],
    whyMatters: 'The right connection at the right time can transform your business. Our events create those opportunities.',
  },
];

export default function Programs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Programs & Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Everything You Need to{' '}
                <span className="text-gradient-teal">Build & Scale</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl">
                From early-stage mentorship to growth capital, we provide comprehensive 
                support for tech-enabled, IP-driven startups at every stage of their journey.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {program.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-40"
              >
                <ScrollReveal>
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
                        <program.icon className="h-4 w-4" />
                        {program.title}
                      </div>
                      <h2 className="headline-lg mb-4">{program.title}</h2>
                      <p className="body-lg mb-6">{program.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            Who It's For
                          </h3>
                          <p className="text-muted-foreground">{program.whoFor}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            Why It Matters
                          </h3>
                          <p className="text-muted-foreground">{program.whyMatters}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-primary" />
                        What You Get
                      </h3>
                      <ul className="space-y-3">
                        {program.whatYouGet.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-8 btn-hero">
                        <Link to="/apply">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-slate-50 mb-6">
              Not Sure Which Program Is Right for You?
            </h2>
            <p className="body-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Apply for our Venture Growth Services and we'll work with you to identify 
              the best combination of programs for your stage and goals.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/apply">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
