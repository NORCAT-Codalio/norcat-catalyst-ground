import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Check, Cpu, Shield, Bot, Network, Blocks, Atom, Users, Rocket, Building2, ExternalLink, GraduationCap, Briefcase, FlaskConical, Target } from 'lucide-react';
import { useState } from 'react';

import citLogo from '@/assets/logos/cit-logo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogo from '@/assets/logos/ontario-logo.png';

const CriticalIndustrialTech = () => {
  const technologies = [
    { icon: Network, name: '5G & Advanced Networks' },
    { icon: Cpu, name: 'Artificial Intelligence' },
    { icon: Blocks, name: 'Blockchain' },
    { icon: Bot, name: 'Robotics' },
    { icon: Shield, name: 'Cybersecurity' },
    { icon: Atom, name: 'Quantum' },
  ];

  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const programs = [
    {
      title: 'Development & Commercialization Program',
      description: 'New SME solutions can commercialize faster through exclusive, no-cost access to the NORCAT Underground Technology Development Site and up to $100k of support from OCI.',
      ideal: 'Accelerated Product Development',
      icon: FlaskConical,
      expandedDetails: {
        funding: 'Up to $100,000',
        benefits: [
          'No-cost access to NORCAT Underground Technology Development Site',
          'Real-world mining environment for testing and validation',
          'Expert mentorship from industry professionals',
          'Accelerated path from prototype to market-ready product'
        ],
        eligibility: 'Ontario-based SMEs developing new critical technology solutions for the mining sector',
        link: 'https://www.citinnovation.ca/program/development-and-commercialization-program/'
      }
    },
    {
      title: 'Technology Access Program',
      description: 'SMEs with an existing critical technology product or service can break into new markets faster through exclusive, no-cost access to our Technology Development Site.',
      ideal: 'Product Validation',
      icon: Target,
      expandedDetails: {
        funding: 'No-cost site access',
        benefits: [
          'Exclusive access to Technology Development Site facilities',
          'Opportunity to validate products in real mining conditions',
          'Connect with potential industry customers and partners',
          'Faster market penetration in the mining sector'
        ],
        eligibility: 'Ontario SMEs with existing critical technology products seeking market expansion',
        link: 'https://www.citinnovation.ca/program/technology-access-program/'
      }
    },
    {
      title: 'Talent Development Internships',
      description: 'Eligible SMEs can invest in the industrial workforce of tomorrow by hiring new talent for Critical Technology internships, with up to $20k in OCI support.',
      ideal: 'New Talent Hiring',
      icon: GraduationCap,
      expandedDetails: {
        funding: 'Up to $20,000 ($10k per 4-month unit)',
        benefits: [
          'Financial support for hiring critical technology interns',
          'Build your pipeline of future talent',
          'Contribute to workforce development in Ontario',
          'Flexible 4-month internship units'
        ],
        eligibility: 'Ontario SMEs looking to hire interns for critical technology roles',
        link: 'https://www.citinnovation.ca/program/talent-development-internships/'
      }
    },
    {
      title: 'Future Ready Program',
      description: 'Eligible SMEs can equip their employees for the challenges of today through upskilling initiatives with up to $10k of OCI support.',
      ideal: 'Talent Development',
      icon: Briefcase,
      expandedDetails: {
        funding: 'Up to $10,000',
        benefits: [
          'Support for employee upskilling initiatives',
          'Training in critical technology areas',
          'Enhance your team\'s competitive capabilities',
          'Prepare workforce for emerging industrial challenges'
        ],
        eligibility: 'Ontario SMEs seeking to upskill existing employees in critical technologies',
        link: 'https://www.citinnovation.ca/program/future-ready-program/'
      }
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
              <Factory className="w-4 h-4" />
              Ontario Centre of Innovation Program
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Critical Industrial<br />
              <span className="text-gradient">Technologies Initiative</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              An Ontario Centre of Innovation program integrating critical technologies 
              into the mining sector. NORCAT delivers this program as a Technology Development 
              Site through the NORCAT Underground Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-lg">
                <a href="https://www.oc-innovation.ca/programs/cit/" target="_blank" rel="noopener noreferrer">
                  Learn More at OCI
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Apply Through NORCAT
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Program */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">About the Initiative</h2>
                <p className="body-lg mb-6">
                  The Critical Industrial Technologies initiative is an Ontario Centre of Innovation 
                  program that converges Ontario industry with innovative SMEs to amplify the 
                  province's critical technology capabilities across four key sectors: Mining, 
                  Advanced Manufacturing, Agri-Food, and Construction.
                </p>
                <p className="body-lg mb-6">
                  As a <strong>Technology Development Site (TDS)</strong>, the NORCAT Underground Centre 
                  provides SMEs with a real-world mining environment to validate and commercialize 
                  their critical technology solutions.
                </p>
                <p className="body-md text-muted-foreground">
                  The initiative supports Ontario SMEs to develop new IP faster and at a greater 
                  scale, while investing in talent development to advance knowledge and training 
                  in critical technologies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Program Logos */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 flex items-center justify-center gap-8">
                  <img 
                    src={citLogo} 
                    alt="Critical Industrial Technologies" 
                    className="h-16 object-contain"
                  />
                  <img 
                    src={ociLogo} 
                    alt="Ontario Centre of Innovation" 
                    className="h-16 object-contain"
                  />
                  <img 
                    src={ontarioLogo} 
                    alt="Government of Ontario" 
                    className="h-12 object-contain"
                  />
                </div>

                {/* TDS Info */}
                <div className="bg-secondary/30 rounded-3xl p-8">
                <h3 className="headline-sm mb-6">NORCAT as a Technology Development Site</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Real-world underground mining environment for testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>No-cost access for qualifying SMEs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Expert mentorship from mining industry professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Accelerated path to commercialization</span>
                  </li>
                </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CIT Impact Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-md text-white mb-2">CIT Initiative Impact</h2>
              <p className="text-white/60">Driving critical technology adoption across Ontario</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">$55.8M</div>
                <div className="text-sm text-white/60">Total Investment</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.15}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">$21.7M</div>
                <div className="text-sm text-white/60">CIT Investment</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">$34.1M</div>
                <div className="text-sm text-white/60">Co-Investment</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.25}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">185</div>
                <div className="text-sm text-white/60">Projects Supported</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">194+</div>
                <div className="text-sm text-white/60">Ontario Companies</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Critical Technologies */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Title and stacked technology areas */}
            <div>
              <ScrollReveal direction="left">
                <h2 className="headline-lg mb-4">Critical Technology Areas</h2>
                <p className="body-lg text-muted-foreground mb-8">
                  The initiative focuses on technologies essential to industrial competitiveness.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <tech.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-medium text-sm">{tech.name}</h3>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right side - YouTube Video */}
            <ScrollReveal direction="right">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/J_Jx8ku0ayI"
                  title="Critical Industrial Technologies"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Streams */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-4">Program Streams</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple pathways to support SMEs at different stages of development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div 
                  className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/30"
                  onMouseEnter={() => setExpandedProgram(i)}
                  onMouseLeave={() => setExpandedProgram(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                        Ideal for: {program.ideal}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                      <p className="body-md text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                  
                  {/* Expanded content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedProgram === i ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-6 border-t border-gray-100 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">Funding:</span>
                        <span className="text-sm text-primary font-bold">{program.expandedDetails.funding}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-foreground block mb-2">Key Benefits:</span>
                        <ul className="space-y-2">
                          {program.expandedDetails.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-foreground">Eligibility: </span>
                        <span className="text-sm text-muted-foreground">{program.expandedDetails.eligibility}</span>
                      </div>
                      
                      <a 
                        href={program.expandedDetails.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mt-2"
                      >
                        Learn more at OCI
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Eligibility */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="headline-lg mb-4">Minimum Eligibility Criteria</h2>
                <p className="body-lg text-muted-foreground">
                  The Critical Industrial Technology programs are a good fit for companies that meet these minimum criteria:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Small-and-Medium Enterprise</h3>
                    <p className="text-sm text-muted-foreground">Less than 500 employees</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">For-Profit Organization</h3>
                    <p className="text-sm text-muted-foreground">Registered as a for-profit entity</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ontario Operations</h3>
                    <p className="text-sm text-muted-foreground">Registered operations in Ontario</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Critical Technology Focus</h3>
                    <p className="text-sm text-muted-foreground">Adoption of Critical Technologies as part of your roadmap</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <p className="text-sm text-muted-foreground text-center mt-8">
                Please note that each program has their own set of eligibility criteria. For details on each program, please view the full set of eligibility criteria in the program guidelines.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-4">Ready to Develop Your Critical Technology?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Access the NORCAT Underground Centre as your Technology Development Site 
              and accelerate your path to commercialization in the mining sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary-lg">
                <a href="https://www.oc-innovation.ca/programs/cit/" target="_blank" rel="noopener noreferrer">
                  Visit OCI Program Page
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Apply Through NORCAT
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

export default CriticalIndustrialTech;