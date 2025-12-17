import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Globe, Sparkles, Zap } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import foundersImage from '@/assets/founders-collab.jpg';

const values = [
  {
    icon: Users,
    title: 'Founder First',
    description: 'Everything we do centers on helping founders succeed. We support people, not just companies.',
  },
  {
    icon: Target,
    title: 'Impact Driven',
    description: 'We measure success by the jobs created, capital raised, and innovations brought to market.',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'We believe in the power of community and connections to accelerate growth.',
  },
  {
    icon: Globe,
    title: 'Globally Relevant',
    description: 'We help startups build solutions that matter on a global scale.',
  },
];

const team = [
  { name: 'Don Duval', role: 'CEO, NORCAT', initials: 'DD' },
  { name: 'Jennifer Mousseau', role: 'Director, Innovation', initials: 'JM' },
  { name: 'Michael Chen', role: 'Director, Venture Services', initials: 'MC' },
  { name: 'Sarah Thompson', role: 'Manager, Capital Programs', initials: 'ST' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="badge mb-6 mx-auto inline-flex">
                <Sparkles className="h-4 w-4" />
                About Us
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-hero mb-8">
                Sudbury's Regional
                <span className="block text-gradient">Innovation Centre</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-xl max-w-2xl mx-auto">
                A not-for-profit Innovation Centre funded by the Government of Ontario. 
                We're the catalyst for tech-enabled startup growth in Northern Ontario.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={foundersImage}
                  alt="NORCAT Innovation team working with founders"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="badge mb-6">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h2 className="headline-xl mb-6">
                  Helping founders build
                  <span className="text-gradient"> world-changing</span> companies
                </h2>
                <p className="body-lg mb-6">
                  Through mentorship, capital access, and our unique underground testing facility, 
                  we provide everything ambitious entrepreneurs need to start, grow, and scale.
                </p>
                <p className="body-md mb-10">
                  Our specialization in mining technology makes us unique—offering founders 
                  access to a real operational mine for testing and validation.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="stat-number text-5xl">15+</div>
                    <div className="text-muted-foreground mt-1">Years of Impact</div>
                  </div>
                  <div>
                    <div className="stat-number text-5xl">150+</div>
                    <div className="text-muted-foreground mt-1">Startups Supported</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="badge mb-6 mx-auto inline-flex">
                <Zap className="h-4 w-4" />
                Our Values
              </div>
              <h2 className="headline-xl mb-6">
                Principles that
                <span className="text-gradient"> guide us</span>
              </h2>
              <p className="body-xl">
                These principles guide everything we do and how we support founders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="card-glow h-full">
                  <div className="p-6 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="headline-sm mb-3">{value.title}</h3>
                    <p className="body-md">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="badge mb-6">
                  <Users className="h-4 w-4" />
                  Our Ecosystem
                </div>
                <h2 className="headline-xl mb-6">
                  Part of Ontario's
                  <span className="text-gradient"> Innovation Network</span>
                </h2>
                <p className="body-lg mb-6">
                  As one of Ontario's Regional Innovation Centres, we're part of a 
                  province-wide network dedicated to driving economic growth through 
                  entrepreneurship.
                </p>
                <p className="body-md mb-8">
                  We work closely with the Ontario Centre of Innovation, other RICs, 
                  universities, and research institutions to provide founders with 
                  unparalleled access and support.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="badge">
                    Government of Ontario Funded
                  </span>
                  <span className="badge">
                    Not-for-Profit
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <div
                    key={member.name}
                    className="card-modern p-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-glow">
                      {member.initials}
                    </div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <ScrollReveal>
            <h2 className="headline-xl text-white mb-6">
              Ready to join our
              <span className="text-gradient"> community?</span>
            </h2>
            <p className="body-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Whether you're just starting out or ready to scale, we're here to help 
              you build something extraordinary.
            </p>
            <Link to="/apply" className="btn-primary-lg">
              Apply for Venture Growth Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
