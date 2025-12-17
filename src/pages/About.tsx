import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Globe } from 'lucide-react';
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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-muted-foreground text-[15px] mb-4">
                About Us
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Sudbury's Regional Innovation Centre
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
      <section className="section-padding border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <img
                src={foundersImage}
                alt="NORCAT Innovation team working with founders"
                className="rounded-2xl"
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
                <p className="body-md mb-10">
                  Our specialization in mining technology makes us unique—offering founders 
                  access to a real operational mine for testing and validation.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-[48px] font-semibold tracking-[-0.03em] text-foreground">15+</div>
                    <div className="text-[14px] text-muted-foreground">Years of Impact</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-semibold tracking-[-0.03em] text-foreground">150+</div>
                    <div className="text-[14px] text-muted-foreground">Startups Supported</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="headline-lg mb-6">Our Values</h2>
              <p className="body-lg">
                These principles guide everything we do and how we support founders.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 50}>
                <div className="p-6 bg-background rounded-2xl h-full">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <value.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-[17px] mb-2">{value.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="headline-lg mb-6">Part of Ontario's Innovation Ecosystem</h2>
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
                  <span className="px-4 py-2 bg-secondary rounded-full text-[14px] text-muted-foreground">
                    Government of Ontario Funded
                  </span>
                  <span className="px-4 py-2 bg-secondary rounded-full text-[14px] text-muted-foreground">
                    Not-for-Profit
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="p-6 bg-secondary rounded-2xl text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-[17px] mx-auto mb-4">
                      {member.initials}
                    </div>
                    <div className="font-medium text-[15px]">{member.name}</div>
                    <div className="text-[13px] text-muted-foreground">{member.role}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">
              Ready to join our community?
            </h2>
            <p className="body-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Whether you're just starting out or ready to scale, we're here to help 
              you build something extraordinary.
            </p>
            <Link to="/apply" className="btn-teal inline-flex items-center gap-2">
              Apply for Venture Growth Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
