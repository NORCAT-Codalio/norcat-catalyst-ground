import { Link } from 'react-router-dom';
import { ArrowRight, Pickaxe, Zap, Shield, Globe, CheckCircle2, Building2, Users, Target } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCounter } from '@/components/StatCounter';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-underground.jpg';
import miningTechImage from '@/assets/mining-tech.jpg';

const capabilities = [
  {
    icon: Pickaxe,
    title: 'Real-World Testing',
    description: 'Test your technology in actual mining conditions—not a simulation. Our 1.2km underground facility provides authentic operational environments.',
  },
  {
    icon: Shield,
    title: 'Validation & Certification',
    description: 'Gain the validation you need to sell to major mining companies. Our facility is recognized by industry leaders worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Demonstration',
    description: 'Host customers from around the world for live technology demonstrations. Show, don\'t just tell.',
  },
  {
    icon: Users,
    title: 'OEM Partnerships',
    description: 'Connect with original equipment manufacturers looking for innovative technology to integrate into their solutions.',
  },
];

const techAreas = [
  'Autonomous vehicles and systems',
  'Underground communications',
  'Ventilation and air quality',
  'Safety and rescue technology',
  'Electrification and battery systems',
  'AI and machine learning applications',
  'Sensors and monitoring systems',
  'Robotics and automation',
];

const stats = [
  { value: 1.2, suffix: 'km', label: 'Underground Facility' },
  { value: 50, suffix: '+', label: 'Companies Tested' },
  { value: 15, suffix: '+', label: 'Countries Represented' },
  { value: 100, suffix: '%', label: 'Operational Conditions' },
];

export default function MiningInnovation() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="NORCAT Underground Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
                <Pickaxe className="h-4 w-4" />
                Mining Innovation
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="headline-xl text-slate-50 mb-6">
                The NORCAT{' '}
                <span className="text-gradient-teal">Underground Centre</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="body-lg text-slate-300 mb-8">
                A globally unique facility where mining technology startups can test, 
                validate, and demonstrate their solutions in real operational conditions. 
                This is where breakthrough technology becomes market-ready.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Button asChild className="btn-hero">
                <Link to="/apply">
                  Apply for Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding-sm bg-secondary border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <StatCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Unique */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">
                Why the Underground Centre{' '}
                <span className="text-gradient-teal">Matters</span>
              </h2>
              <p className="body-lg">
                Mining companies won't buy technology that hasn't been proven underground. 
                Our facility bridges the gap between prototype and market-ready product.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 100}>
                <div className="p-8 bg-background rounded-2xl border border-border hover:border-teal-200 transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                    <cap.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="headline-sm mb-3">{cap.title}</h3>
                  <p className="body-md">{cap.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Technology Focus Areas
                </span>
                <h2 className="headline-lg text-slate-50 mb-6">
                  What You Can Test
                </h2>
                <p className="body-lg text-slate-300 mb-8">
                  Our facility supports a wide range of mining technology categories. 
                  If you're building something that operates underground, we can help 
                  you test it.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {techAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={miningTechImage}
                  alt="Mining technology testing"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <Zap className="h-8 w-8 mb-2" />
                  <div className="text-sm font-semibold">Fully Operational</div>
                  <div className="text-xs opacity-90">24/7 Testing Available</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">
                How It <span className="text-gradient-teal">Works</span>
              </h2>
              <p className="body-lg">
                From application to validation, here's how startups work with the 
                Underground Centre.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply',
                description: 'Submit your application describing your technology and testing needs.',
              },
              {
                step: '02',
                title: 'Assessment',
                description: 'Our team evaluates fit and develops a customized testing plan.',
              },
              {
                step: '03',
                title: 'Testing',
                description: 'Execute your testing program in real underground conditions.',
              },
              {
                step: '04',
                title: 'Validation',
                description: 'Receive documentation and support for commercialization.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Gateway */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">
                  Your Gateway to{' '}
                  <span className="text-gradient-teal">Global Mining</span>
                </h2>
                <p className="body-lg mb-6">
                  The NORCAT Underground Centre isn't just a testing facility—it's your 
                  entry point to the global mining industry. Our connections span six 
                  continents and include the world's largest mining companies.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Direct introductions to mining company innovation teams',
                    'Participation in international mining conferences',
                    'Access to global OEM partnership opportunities',
                    'Visibility to mining-focused investors worldwide',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="btn-hero">
                  <Link to="/apply">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
                <Globe className="h-16 w-16 text-teal-400 mb-6" />
                <h3 className="headline-sm text-slate-50 mb-4">Global Reach</h3>
                <p className="text-slate-300 mb-6">
                  Our portfolio companies have gone on to work with mining operations 
                  in Canada, Australia, Chile, South Africa, and beyond.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-display font-bold text-teal-400">6</div>
                    <div className="text-xs text-slate-400">Continents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-teal-400">20+</div>
                    <div className="text-xs text-slate-400">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-teal-400">50+</div>
                    <div className="text-xs text-slate-400">Partners</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
