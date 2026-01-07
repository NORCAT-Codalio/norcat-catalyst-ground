import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Check, Cpu, Shield, Bot, Network, Blocks, Atom, Users, Rocket, Building2, ExternalLink } from 'lucide-react';

import citOciOntarioLogos from '@/assets/logos/cit-oci-ontario.png';

const CriticalIndustrialTech = () => {
  const technologies = [
    { icon: Network, name: '5G & Advanced Networks' },
    { icon: Cpu, name: 'Artificial Intelligence' },
    { icon: Blocks, name: 'Blockchain' },
    { icon: Bot, name: 'Robotics' },
    { icon: Shield, name: 'Cybersecurity' },
    { icon: Atom, name: 'Quantum' },
  ];

  const programs = [
    {
      title: 'Development & Commercialization Program',
      description: 'New SME solutions can commercialize faster through exclusive, no-cost access to the NORCAT Underground Technology Development Site and up to $100k of support from OCI.',
      ideal: 'Accelerated Product Development',
    },
    {
      title: 'Technology Access Program',
      description: 'SMEs with an existing critical technology product or service can break into new markets faster through exclusive, no-cost access to our Technology Development Site.',
      ideal: 'Product Validation',
    },
    {
      title: 'Talent Development Internships',
      description: 'Eligible SMEs can invest in the industrial workforce of tomorrow by hiring new talent for Critical Technology internships, with up to $20k in OCI support.',
      ideal: 'New Talent Hiring',
    },
    {
      title: 'Future Ready Program',
      description: 'Eligible SMEs can equip their employees for the challenges of today through upskilling initiatives with up to $10k of OCI support.',
      ideal: 'Talent Development',
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
                <div className="bg-white rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
                  <img 
                    src={citOciOntarioLogos} 
                    alt="Critical Industrial Technologies - Ontario Centre of Innovation - Government of Ontario" 
                    className="max-h-64 object-contain"
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

      {/* Critical Technologies */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="headline-lg mb-4">Critical Technology Areas</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                The initiative focuses on technologies essential to industrial competitiveness.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                </div>
              </ScrollReveal>
            ))}
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
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Ideal for: {program.ideal}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{program.title}</h3>
                  <p className="body-md text-sm">{program.description}</p>
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