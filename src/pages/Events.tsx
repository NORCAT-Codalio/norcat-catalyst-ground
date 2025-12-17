import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Clock, ExternalLink, Play } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import pitchEventImage from '@/assets/pitch-event.jpg';

const upcomingEvents = [
  {
    id: 'mining-transformed-2024',
    title: 'Mining Transformed 2024',
    date: 'March 15-16, 2024',
    location: 'Sudbury, ON',
    type: 'Conference',
    description: 'Our flagship annual conference bringing together mining innovators, technology companies, and industry leaders from around the world.',
    featured: true,
    registrationOpen: true,
  },
  {
    id: 'venture-north-pitch',
    title: 'Venture North PITCH',
    date: 'April 25, 2024',
    location: 'Sudbury, ON',
    type: 'Pitch Competition',
    description: 'Northern Ontario\'s premier startup pitch competition. $100K in prizes and investment opportunities.',
    featured: true,
    registrationOpen: true,
  },
  {
    id: 'demo-day-q1',
    title: 'Q1 Demo Day',
    date: 'February 28, 2024',
    location: 'Virtual',
    type: 'Showcase',
    description: 'Quarterly showcase of portfolio company progress and achievements.',
    featured: false,
    registrationOpen: true,
  },
  {
    id: 'founder-networking',
    title: 'Founder Networking Mixer',
    date: 'February 15, 2024',
    location: 'Sudbury, ON',
    type: 'Networking',
    description: 'Monthly networking event for founders in the NORCAT Innovation ecosystem.',
    featured: false,
    registrationOpen: true,
  },
  {
    id: 'investor-readiness',
    title: 'Investor Readiness Workshop',
    date: 'March 5, 2024',
    location: 'Virtual',
    type: 'Workshop',
    description: 'Learn how to prepare for investor meetings, structure your pitch, and navigate due diligence.',
    featured: false,
    registrationOpen: true,
  },
];

const pastEvents = [
  {
    title: 'Mining Transformed 2023',
    date: 'March 2023',
    attendees: '500+',
    highlights: '40 speakers, 25 startups showcased',
  },
  {
    title: 'Venture North PITCH 2023',
    date: 'April 2023',
    attendees: '200+',
    highlights: '$100K awarded to 5 startups',
  },
  {
    title: 'Underground Demo Day',
    date: 'September 2023',
    attendees: '150+',
    highlights: '8 companies demonstrated tech underground',
  },
];

const mediaLinks = [
  {
    title: 'NORCAT Innovation Named Top Mining Accelerator',
    source: 'Mining Weekly',
    date: 'January 2024',
  },
  {
    title: 'Sudbury\'s Innovation Ecosystem: A Model for Resource Regions',
    source: 'Globe and Mail',
    date: 'December 2023',
  },
  {
    title: 'How NORCAT is Shaping the Future of Mining Technology',
    source: 'Canadian Mining Journal',
    date: 'November 2023',
  },
];

export default function Events() {
  const featuredEvents = upcomingEvents.filter(e => e.featured);
  const otherEvents = upcomingEvents.filter(e => !e.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Events & Media
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="headline-xl mb-6">
                Where the Ecosystem{' '}
                <span className="text-gradient-teal">Connects</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg max-w-2xl">
                From our flagship Mining Transformed conference to monthly networking events, 
                we create opportunities for founders to connect, learn, and grow.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg mb-12">
              Featured <span className="text-gradient-teal">Events</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <div className="bg-slate-900 rounded-2xl overflow-hidden h-full">
                  <div className="relative h-48">
                    <img
                      src={pitchEventImage}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        <Calendar className="h-3 w-3" />
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="headline-sm text-slate-50 mb-3">{event.title}</h3>
                    <p className="text-slate-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                    {event.registrationOpen && (
                      <Button className="w-full btn-hero">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg mb-12">
              Upcoming <span className="text-gradient-teal">Events</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {otherEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <div className="bg-background rounded-xl border border-border p-6 hover:border-teal-200 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded bg-secondary text-sm font-medium">
                          {event.type}
                        </span>
                        <h3 className="font-display font-bold text-lg">{event.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="btn-hero-outline">
                      Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-lg mb-12">
              Past <span className="text-gradient-teal">Highlights</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.title} delay={index * 100}>
                <div className="p-6 bg-secondary rounded-2xl h-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    {event.date}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Users className="h-4 w-4" />
                    {event.attendees} attendees
                  </div>
                  <p className="text-sm text-muted-foreground">{event.highlights}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="headline-lg text-slate-50 mb-6">
                In the <span className="text-gradient-teal">News</span>
              </h2>
              <p className="body-lg text-slate-300">
                Recent media coverage and announcements.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {mediaLinks.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 100}>
                <a
                  href="#"
                  className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-500 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-50 group-hover:text-teal-400 transition-colors mb-1">
                        {article.title}
                      </h3>
                      <div className="text-sm text-slate-400">
                        {article.source} • {article.date}
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-lg mb-6">
              Stay in the Loop
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Get notified about upcoming events, program deadlines, and opportunities 
              in the NORCAT Innovation ecosystem.
            </p>
            <Button asChild className="btn-hero">
              <Link to="/apply">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
