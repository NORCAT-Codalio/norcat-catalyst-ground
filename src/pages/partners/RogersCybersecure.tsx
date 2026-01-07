import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Check, Users, BookOpen, MessageSquare, ClipboardCheck, ExternalLink } from 'lucide-react';

const RogersCybersecure = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Webinars & Bootcamps',
      description: 'Specialized cybersecurity training for both technical and non-technical professionals covering threats, risk management, and security-by-design principles.',
    },
    {
      icon: ClipboardCheck,
      title: 'Self-Assessment Tool',
      description: 'An online tool for mining organizations to evaluate their current cybersecurity posture and identify areas for improvement.',
    },
    {
      icon: MessageSquare,
      title: '1-on-1 Consultations',
      description: 'Free sessions with Catalyst advisors for qualifying participants to develop actionable plans for security improvements.',
    },
    {
      icon: Users,
      title: 'NORCAT Mentorship',
      description: 'Our team provides mining-specific mentorship to Catalyst clients, helping them understand the unique cybersecurity challenges in the mining sector.',
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
              <Shield className="w-4 h-4" />
              Partner Program
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Rogers Cybersecure<br />
              <span className="text-gradient">Catalyst</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Empowering mining sector businesses with the knowledge and tools 
              to safeguard against emerging cyber threats. NORCAT partners with 
              the Catalyst to refer companies and provide mining-specific mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-lg">
                <a href="https://cybersecurecatalyst.ca/mining-sector/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Get Referred
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Partnership */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">About the Partnership</h2>
                <p className="body-lg mb-6">
                  Rogers Cybersecure Catalyst, based at Toronto Metropolitan University, 
                  is a national hub for cybersecurity training, entrepreneurship, and research. 
                  Their mining sector program is designed specifically to equip mining businesses 
                  with knowledge to safeguard against emerging cyber threats.
                </p>
                <p className="body-lg mb-6">
                  As a partner, NORCAT refers companies from our network to the Catalyst's 
                  mining sector program and provides mining-specific mentorship to their clients. 
                  We help mining companies understand the unique cybersecurity challenges they 
                  face and connect them with the right resources.
                </p>
                <p className="body-md text-muted-foreground">
                  Developed in collaboration with the Canadian Cyber Threat Exchange (CCTX) 
                  and supported by the Government of Ontario.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-secondary/30 rounded-3xl p-8">
                <h3 className="headline-sm mb-6">Eligibility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Organizations operating in or adjacent to the mining sector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Staff employed in Ontario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Looking to improve cybersecurity posture</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="headline-lg mb-4">Program Services</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                The Cybersecure Catalyst mining sector program offers comprehensive 
                cybersecurity resources for mining organizations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="body-md text-sm">{service.description}</p>
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
            <h2 className="headline-lg text-white mb-4">Ready to Strengthen Your Cybersecurity?</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Contact us to get referred to the Rogers Cybersecure Catalyst mining sector 
              program and receive mining-specific cybersecurity mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary-lg">
                <a href="https://cybersecurecatalyst.ca/mining-sector/" target="_blank" rel="noopener noreferrer">
                  Visit Cybersecure Catalyst
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild className="btn-outline-dark">
                <Link to="/apply">
                  Get Referred by NORCAT
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

export default RogersCybersecure;