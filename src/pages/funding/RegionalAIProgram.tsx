import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import fednorFullLogo from '@/assets/logos/fednor-full.png';
import { 
  ArrowRight, 
  Brain, 
  Check, 
  Send, 
  Search, 
  CheckCircle, 
  DollarSign, 
  Target, 
  Cpu,
  XCircle,
  ClipboardList,
  Layers,
  Cog,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const RegionalAIProgram = () => {
  const applicationSteps = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit application form; initial review within 2 business days.',
      icon: Send,
    },
    {
      step: '02',
      title: 'Evaluation',
      description: 'Eligible applications reviewed by the Mentorship Committee.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Decision',
      description: 'Receive outcome within 1 month.',
      icon: CheckCircle,
    },
  ];

  const eligibilityCriteria = [
    'The applicant must be a NORCAT Innovation client',
    'Must be a growth-oriented and for-profit entity (registered sole proprietor, partnership, or corporation)',
    'Demonstrate a clear need for AI integration to enhance productivity, commercialization, and competitiveness',
    'Provide an AI commercialization or integration project proposal at TRL 7 or higher (prototype stage or beyond)',
  ];

  const eligibleActivities = {
    pillar1: {
      title: 'AI Productization and Commercialization',
      items: [
        'Technology demonstration and/or commercialization of Canadian-made AI technologies and solutions',
        'Business and capacity development supporting the scale-up of developing AI technologies and AI-driven solutions',
      ],
    },
    pillar2: {
      title: 'AI Adoption',
      items: [
        'Strategic AI adoption and integration of AI technologies and solutions that drive innovation, growth, and productivity',
        'Process re-engineering and capacity development for AI adoption',
      ],
    },
  };

  const eligibleCosts = {
    technologyCapital: [
      'AI servers, GPUs, and cloud infrastructure',
      'Software licenses, subscriptions, and data management platforms',
    ],
    trainingCommercialization: [
      'Specialized AI training for employees',
      'Pre-commercialization activities such as market validation and compliance preparation',
    ],
    professionalServices: [
      'AI solution design and development',
      'Consulting and implementation services',
      'Benchmarking, prototyping, and system testing',
    ],
  };

  const ineligibleActivities = [
    'Ongoing operating costs and administration',
    'Staff salaries or internal overhead',
    'Activities unrelated to AI integration or commercialization',
  ];

  const programRequirements = [
    {
      title: 'Client Intake & Discovery',
      description: 'The applicant must be a NORCAT Innovation client. If not, complete the Discovery Document Form.',
    },
    {
      title: 'Proposal Submission',
      description: 'Submit a proposal outlining the AI integration plan, your current TRL level, and business value.',
    },
    {
      title: 'Quotations for Project Work',
      description: 'Submit a minimum of two competitive quotes from independent and unrelated service providers with scope of work, hourly rate or total cost, and estimated hours required.',
    },
    {
      title: 'Project Feedback Requirements',
      description: 'Upon completion, submit a formal exit survey describing project impact on business operations, outcomes, or future plans.',
    },
    {
      title: 'Long-Term Reporting',
      description: 'Applicants may be contacted for follow-up feedback for up to five years post-completion.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Brain className="w-4 h-4" />
              Funding & Capital
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Regional Artificial<br />
              <span className="text-gradient">Intelligence Initiative</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Accelerate AI adoption with matching grants of up to $20,000 for SMEs 
              in Northern Ontario looking to integrate AI technologies.
            </p>
            <Button asChild className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-6">About the Program</h2>
              <p className="body-lg mb-6">
                NORCAT Innovation proudly supports Greater Sudbury's small and medium-sized enterprises (SMEs) 
                through targeted grant programs that fuel innovation, accelerate commercialization, and drive 
                regional economic growth.
              </p>
              <p className="body-lg text-muted-foreground">
                Through the RAII program, eligible businesses can access matching funds of up to $20,000 per 
                project on a 1:1 basis. These initiatives help local innovators bring bold, forward-thinking 
                AI solutions to market with greater speed, efficiency, and impact — strengthening the future of 
                Northern Ontario's innovation ecosystem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-10 mb-6">
                <h3 className="text-xl font-bold mb-6">Contribution Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Maximum financial assistance is 50% of approved Total Eligible Project Costs, up to $20,000 per SME</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>SME must pay service providers 100% of invoiced costs (including HST) prior to reimbursement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>1:1 matching basis with your investment</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-secondary/50 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">$20K</p>
                  <p className="text-sm text-muted-foreground">Max Grant</p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">50%</p>
                  <p className="text-sm text-muted-foreground">Matching Funds</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Application Process</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                A straightforward path from application to approval
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {applicationSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative text-center p-8 rounded-3xl bg-background border border-border/50 h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <h2 className="headline-md">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong>Note:</strong> Retail and service-based businesses will not be considered under this program.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="headline-md">Ineligible Activities</h2>
              </div>
              <ul className="space-y-4">
                {ineligibleActivities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Eligible Activities - Pillars */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg text-white mb-4">Eligible Activities</h2>
              <p className="body-lg text-white/70 max-w-2xl mx-auto">
                Two pillars supporting AI innovation in Northern Ontario
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <ScrollReveal>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">Pillar 1</p>
                    <h3 className="text-lg font-bold text-white">{eligibleActivities.pillar1.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {eligibleActivities.pillar1.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">Pillar 2</p>
                    <h3 className="text-lg font-bold text-white">{eligibleActivities.pillar2.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {eligibleActivities.pillar2.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Eligible Costs */}
          <ScrollReveal>
            <h3 className="text-xl font-bold text-white text-center mb-8">Eligible Project Costs</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-white mb-4">Technology & Capital</h4>
                <ul className="space-y-2">
                  {eligibleCosts.technologyCapital.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-white mb-4">Training & Commercialization</h4>
                <ul className="space-y-2">
                  {eligibleCosts.trainingCommercialization.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-white mb-4">Professional Services</h4>
                <ul className="space-y-2">
                  {eligibleCosts.professionalServices.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Requirements */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Program Requirements</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                What you'll need to participate in the program
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {programRequirements.map((req, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{req.title}</h3>
                    <p className="text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Funded By */}
      <section className="py-12 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <p className="text-muted-foreground font-medium">Funded by</p>
            <div className="px-8 py-4 bg-background rounded-xl border border-border/50">
              <img src={fednorFullLogo} alt="Federal Economic Development Agency for Northern Ontario" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="orb orb-teal w-64 h-64 -bottom-32 -left-32" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Brain className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="headline-lg text-white mb-6">Ready to Integrate AI?</h2>
              <p className="body-lg text-white/70 mb-10">
                Applications are now open for NORCAT Innovation's RAII Program. 
                Take the first step toward AI-powered growth.
              </p>
              <Button asChild className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                <Link to="/apply">
                  Apply for Funding
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

export default RegionalAIProgram;
