import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, FlaskConical, Handshake, Battery, Cpu, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import core5Logo from '@/assets/logos/core5.png';
import core5Map from '@/assets/core5-map.png';
import norcatLogo from '@/assets/logos/norcat.png';
import cambrianRdLogo from '@/assets/logos/cambrian-rd.png';
import iionLogo from '@/assets/logos/iion.png';
import icampLogo from '@/assets/logos/icamp.png';
import tedcLogo from '@/assets/logos/tedc.png';

const Core5 = () => {
  const pillars = [
    {
      icon: Zap,
      title: 'Startup & SME Support',
      description: 'Tailored funding and support solutions to accelerate EV technology development.',
    },
    {
      icon: FlaskConical,
      title: 'Testing & R&D Facilities',
      description: 'Access state-of-the-art testing and R&D facilities across Northern Ontario.',
    },
    {
      icon: Handshake,
      title: 'Connecting Buyers & Builders',
      description: 'Matchmaking services connecting tech developers with industry leaders and live test-beds.',
    },
  ];

  const partners = [
    { name: 'NORCAT', logo: norcatLogo },
    { name: 'Cambrian R&D', logo: cambrianRdLogo },
    { name: 'IION', logo: iionLogo },
    { name: 'ICAMP', logo: icampLogo },
    { name: 'TEDC', logo: tedcLogo },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gray-950">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-gray-950 to-teal-900/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]" />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-32 right-20 w-20 h-20 border border-emerald-500/30 rounded-xl hidden lg:block"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-emerald-500/40 to-teal-500/40 rounded-lg hidden lg:block"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm mb-8"
            >
              <Battery className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">OVIN Northern Regional Technology Development Site</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <img 
                src={core5Logo} 
                alt="Core5" 
                className="h-20 md:h-28 lg:h-32 object-contain mx-auto"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              A Pan-Northern Ontario initiative supporting SMEs in developing Battery Electric Vehicle 
              and EV technologies—from critical minerals extraction to manufacturing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25">
                <a href="https://core5.tech/" target="_blank" rel="noopener noreferrer">
                  Visit Core5.tech
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                <a href="https://core5.tech/contact/" target="_blank" rel="noopener noreferrer">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Core5 */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text and stacked boxes */}
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Cpu className="w-4 h-4" />
                  EV Innovation Hub
                </span>
                <h2 className="headline-lg mb-6">Powering Northern Ontario's EV Future</h2>
                <p className="body-lg text-muted-foreground mb-10">
                  Core5 is one of six regional technology development sites within the Ontario Vehicle 
                  Innovation Network (OVIN). We're building a connected ecosystem across Northern Ontario 
                  to support the entire EV value chain.
                </p>
              </ScrollReveal>

              <div className="flex flex-col gap-4">
                {pillars.map((pillar, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-card border border-border rounded-2xl p-6 flex items-start gap-5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:-translate-y-1">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <pillar.icon className="w-7 h-7 text-emerald-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{pillar.title}</h3>
                          <p className="text-muted-foreground text-sm">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right side - Map graphic */}
            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center">
                <img 
                  src={core5Map} 
                  alt="Core5 Northern Ontario Network" 
                  className="w-full max-w-lg object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Regional Partners */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Pan-Northern Network
              </span>
              <h2 className="headline-lg mb-4">Regional Partners</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Core5 connects innovation hubs across Northern Ontario, creating a unified 
                ecosystem for EV technology development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24 hover:border-emerald-500/30 transition-colors">
                  <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <img 
                src={core5Logo} 
                alt="Core5" 
                className="h-12 md:h-16 object-contain mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Innovate in the EV Space?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                Learn more about funding opportunities, R&D facilities, and how Core5 can 
                accelerate your EV technology development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/25">
                  <a href="https://core5.tech/" target="_blank" rel="noopener noreferrer">
                    Explore Core5.tech
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-xl">
                  <a href="https://core5.tech/contact/" target="_blank" rel="noopener noreferrer">
                    Contact Core5
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Core5;