import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, FlaskConical, Handshake } from 'lucide-react';

const Core5 = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Zap className="w-4 h-4" />
              OVIN Regional Technology Development Site
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              <span className="text-gradient">Core5</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              A Pan-Northern Ontario initiative supporting SMEs in developing Battery Electric Vehicle 
              and EV technologies across the value chain—from critical minerals extraction to manufacturing.
            </p>
            <Button 
              asChild 
              className="btn-primary-lg"
              onClick={() => window.open('https://core5.tech/', '_blank')}
            >
              <a href="https://core5.tech/" target="_blank" rel="noopener noreferrer">
                Visit Core5
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg mb-12 text-center">Programs & Services</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Startup & SME Support</h3>
                <p className="text-muted-foreground">
                  Tailored funding and support solutions to accelerate your startup's growth.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Testing & R&D Facilities</h3>
                <p className="text-muted-foreground">
                  Access state-of-the-art testing and R&D facilities across Northern Ontario.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Connecting Buyers & Builders</h3>
                <p className="text-muted-foreground">
                  Matchmaking services that connect tech developers with industry leaders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Learn more about how Core5 can help your business innovate and succeed in the EV space.
            </p>
            <Button 
              asChild 
              className="btn-primary-lg"
            >
              <a href="https://core5.tech/contact/" target="_blank" rel="noopener noreferrer">
                Apply to Core5
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Core5;
