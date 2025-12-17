import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Globe, Award, Building } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
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
    description: 'We help startups build solutions that matter on a global scale, especially in mining and industrial tech.',
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
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Sudbury's Regional{' '}
                <span className="text-gradient-teal">Innovation Centre</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl">
                NORCAT Innovation is a not-for-profit Regional Innovation Centre 
                funded by the Government of Ontario. We're Ontario's hub for emerging 
                mining technology and the catalyst for tech-enabled startup growth in 
                Northern Ontario.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <img
                src={foundersImage}
                alt="NORCAT Innovation team working with founders"
                className="rounded-2xl shadow-2xl"
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="headline-lg mb-6">Our Mission</h2>
                <p className="body-lg mb-6">
                  We exist to help founders build world-changing companies. Through 
                  mentorship, capital access, and our unique underground testing facility, 
                  we provide everything ambitious entrepreneurs need to start, grow, and scale.
                </p>
                <p className="body-md mb-8">
                  As part of Ontario's Regional Innovation Centre network, we focus on 
                  tech-enabled, IP-driven startups with the potential for global impact. 
                  Our specialization in mining technology makes us unique—offering founders 
                  access to a real operational mine for testing and validation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-3xl font-display font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Impact</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary">
                    <div className="text-3xl font-display font-bold text-primary mb-1">150+</div>
                    <div className="text-sm text-muted-foreground">Startups Supported</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">Our Values</h2>
              <p className="body-lg">
                These principles guide everything we do and how we support the founders 
                in our ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-teal-200 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">Part of Ontario's Innovation Ecosystem</h2>
                <p className="body-lg mb-6">
                  As one of Ontario's Regional Innovation Centres, we're part of a 
                  province-wide network dedicated to driving economic growth through 
                  entrepreneurship and innovation.
                </p>
                <p className="body-md mb-8">
                  We work closely with the Ontario Centre of Innovation, other RICs across 
                  the province, and a network of universities, research institutions, and 
                  industry partners to provide founders with unparalleled access and support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    Government of Ontario Funded
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm">
                    <Building className="h-4 w-4 text-primary" />
                    Not-for-Profit Organization
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <div
                    key={member.name}
                    className="p-6 bg-secondary rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl mx-auto mb-4">
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
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-slate-50 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="body-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you're just starting out or ready to scale, we're here to help 
              you build something extraordinary.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/apply">
                Apply for Venture Growth Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
