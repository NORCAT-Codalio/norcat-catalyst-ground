import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, MessageCircle, Calendar } from 'lucide-react';

const MentorshipServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="orb orb-teal w-96 h-96 -top-48 -right-48" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <Users className="w-4 h-4" />
              Programs
            </div>
            <h1 className="headline-hero text-white mb-6 max-w-4xl">
              Mentorship<br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl mb-10">
              Connect with experienced entrepreneurs, executives, and industry experts 
              who can help you navigate the challenges of building a startup.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Find a Mentor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg text-center mb-16">How Mentorship Works</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: 'Match', desc: 'We pair you with mentors based on your industry, stage, and specific needs.' },
              { icon: Calendar, title: 'Meet', desc: 'Schedule regular 1:1 sessions to work through challenges and opportunities.' },
              { icon: Lightbulb, title: 'Grow', desc: 'Apply insights to accelerate your growth and expand your network.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="card-modern p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="headline-sm mb-3">{item.title}</h3>
                  <p className="body-md">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Stats */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '200+', label: 'Industry Mentors' },
              { number: '15+', label: 'Sectors Covered' },
              { number: '500+', label: 'Sessions Per Year' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-number mb-2">{stat.number}</div>
                <p className="body-lg">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg text-white mb-6">Get Matched with a Mentor</h2>
            <p className="body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Tell us about your venture and we'll connect you with the right advisor.
            </p>
            <Button asChild className="btn-primary-lg">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default MentorshipServices;
