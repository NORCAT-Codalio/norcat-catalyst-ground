import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Clock, Video, Search, ChevronRight, Sparkles, Mic, Presentation, Globe, Coffee, GraduationCap, Radio } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import pitchEventImage from '@/assets/pitch-event.jpg';
import signatureLines from '@/assets/signature-lines.png';

// ── Neumorphic icon container (matches homepage) ──
const iconContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow:
    'inset 0 2px 4px 0 hsla(0, 0%, 100%, 0.7), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.15), 0 4px 8px -2px hsla(220, 15%, 30%, 0.15), 0 2px 4px -2px hsla(220, 15%, 30%, 0.1)',
};

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  endDate?: string;
  location: string;
  type: 'Conference' | 'Workshop' | 'Networking' | 'Pitch Competition' | 'Showcase' | 'Webinar';
  description: string;
  featured: boolean;
  registrationOpen: boolean;
  isVirtual: boolean;
  attendees?: number;
  maxAttendees?: number;
  image?: string;
  host?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 'mining-transformed-2024',
    title: 'Mining Transformed 2024',
    date: 'March 15, 2024',
    time: '9:00 AM EST',
    endDate: 'March 16, 2024',
    location: 'NORCAT Underground Centre, Sudbury',
    type: 'Conference',
    description: 'Our flagship annual conference bringing together mining innovators, technology companies, and industry leaders from around the world. Two days of keynotes, demos, and networking.',
    featured: true,
    registrationOpen: true,
    isVirtual: false,
    attendees: 342,
    maxAttendees: 500,
    image: pitchEventImage,
    host: 'NORCAT Innovation',
  },
  {
    id: 'venture-north-pitch',
    title: 'Venture North PITCH',
    date: 'April 25, 2024',
    time: '6:00 PM EST',
    location: 'Sudbury Theatre Centre',
    type: 'Pitch Competition',
    description: "Northern Ontario's premier startup pitch competition. $100K in prizes and direct access to investors.",
    featured: true,
    registrationOpen: true,
    isVirtual: false,
    attendees: 156,
    maxAttendees: 200,
    host: 'NORCAT Innovation',
  },
  {
    id: 'demo-day-q1',
    title: 'Q1 Portfolio Demo Day',
    date: 'February 28, 2024',
    time: '2:00 PM EST',
    location: 'Virtual Event',
    type: 'Showcase',
    description: 'Quarterly showcase featuring 8 portfolio companies presenting their latest milestones and product updates to investors.',
    featured: false,
    registrationOpen: true,
    isVirtual: true,
    attendees: 89,
    host: 'NORCAT Innovation',
  },
  {
    id: 'founder-networking',
    title: 'Founder Coffee & Connect',
    date: 'February 15, 2024',
    time: '8:30 AM EST',
    location: 'The Laughing Buddha, Sudbury',
    type: 'Networking',
    description: 'Monthly casual networking for founders. No agenda, just good conversations with fellow entrepreneurs.',
    featured: false,
    registrationOpen: true,
    isVirtual: false,
    attendees: 24,
    maxAttendees: 30,
    host: 'NORCAT Innovation',
  },
  {
    id: 'investor-readiness',
    title: 'Investor Readiness Masterclass',
    date: 'March 5, 2024',
    time: '1:00 PM EST',
    location: 'Virtual Event',
    type: 'Workshop',
    description: 'A deep-dive workshop on preparing for investor meetings, structuring your pitch, and navigating due diligence.',
    featured: false,
    registrationOpen: true,
    isVirtual: true,
    attendees: 45,
    maxAttendees: 50,
    host: 'NORCAT Mentorship Team',
  },
  {
    id: 'ai-mining-webinar',
    title: 'AI in Mining: What Works',
    date: 'March 12, 2024',
    time: '11:00 AM EST',
    location: 'Virtual Event',
    type: 'Webinar',
    description: 'Industry experts share real case studies of successful AI implementations in mining operations.',
    featured: false,
    registrationOpen: true,
    isVirtual: true,
    attendees: 112,
    host: 'NORCAT & Mining Innovation Council',
  },
];

const eventTypes = ['All', 'Conference', 'Workshop', 'Networking', 'Pitch Competition', 'Showcase', 'Webinar'];

const typeIconMap: Record<string, React.ElementType> = {
  'Conference': Mic,
  'Workshop': GraduationCap,
  'Networking': Coffee,
  'Pitch Competition': Presentation,
  'Showcase': Globe,
  'Webinar': Radio,
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
  };
};

// ── Featured Event Card ──
const FeaturedEventCard = ({ event }: { event: Event }) => {
  const dateInfo = formatDate(event.date);
  const Icon = typeIconMap[event.type] || Calendar;

  return (
    <div className="group relative rounded-3xl overflow-hidden liquid-glass-light-strong hover:-translate-y-1 transition-all duration-500">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image || pitchEventImage}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 liquid-glass-light-strong rounded-2xl px-4 py-3 text-center">
          <div className="text-xs font-semibold text-muted-foreground">{dateInfo.month}</div>
          <div className="text-2xl font-black text-foreground leading-none">{dateInfo.day}</div>
        </div>

        {/* Type badge */}
        <div className="absolute top-4 right-4">
          <span className="glass-frosted-btn rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
            <Icon className="w-3 h-3" />
            {event.type}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {event.title}
          </h3>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {event.time}
            </div>
            <div className="flex items-center gap-1.5">
              {event.isVirtual ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
              {event.isVirtual ? 'Virtual' : event.location.split(',')[0]}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {event.attendees && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{event.attendees} going</span>
              </div>
            )}
          </div>

          <a href="#" className="glass-frosted-btn-teal rounded-full px-6 py-2.5 text-sm font-semibold inline-flex items-center gap-2 no-underline">
            Register
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// ── Regular Event Card ──
const EventCard = ({ event }: { event: Event }) => {
  const dateInfo = formatDate(event.date);
  const Icon = typeIconMap[event.type] || Calendar;

  return (
    <div className="group flex gap-5 p-5 rounded-3xl liquid-glass-light hover:-translate-y-0.5 transition-all duration-300">
      {/* Date column */}
      <div className="flex-shrink-0 w-16 text-center pt-1">
        <div className="text-xs font-semibold text-primary uppercase">{dateInfo.month}</div>
        <div className="text-3xl font-black text-foreground leading-none">{dateInfo.day}</div>
        <div className="text-xs text-muted-foreground mt-1">{dateInfo.weekday}</div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                <Icon className="w-3.5 h-3.5" style={{ color: 'hsl(168, 100%, 35%)' }} />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{event.type}</span>
              {event.isVirtual && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Video className="w-3 h-3" />
                  Virtual
                </span>
              )}
            </div>

            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1 truncate" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              {event.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {event.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {event.location}
              </span>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-1">{event.description}</p>
          </div>

          <div className="flex-shrink-0 flex flex-col items-end gap-2">
            {event.attendees && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5" />
                {event.attendees}{event.maxAttendees && `/${event.maxAttendees}`}
              </div>
            )}
            <a href="#" className="glass-frosted-btn-teal rounded-full px-5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 no-underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredEvents = upcomingEvents.filter(e => e.featured);
  const filteredEvents = upcomingEvents.filter(e => {
    if (selectedType !== 'All' && e.type !== selectedType) return false;
    if (searchQuery && !e.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'hsl(224 71% 4%)' }}>
        {/* Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'hsl(168 100% 35%)' }} />
        <div className="absolute bottom-[-30%] right-[-5%] w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'hsl(172 100% 30%)' }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="badge-dark mb-6 mx-auto w-fit">
                <Sparkles className="w-4 h-4" />
                Discover What's Happening
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Upcoming{' '}
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                  Events
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                Connect with founders, investors, and industry leaders at our conferences, workshops, and networking events.
              </p>

              {/* Animated stats marquee */}
              <div className="liquid-glass rounded-full py-3 px-6 overflow-hidden max-w-xl mx-auto">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[
                    '🎤 6 Upcoming Events',
                    '👥 768 Attendees Expected',
                    '🏆 $100K in Prizes',
                    '🌍 3 Virtual Events',
                    '📍 Sudbury & Online',
                    '🎤 6 Upcoming Events',
                    '👥 768 Attendees Expected',
                    '🏆 $100K in Prizes',
                    '🌍 3 Virtual Events',
                    '📍 Sudbury & Online',
                  ].map((stat, i) => (
                    <span key={i} className="text-white/70 text-sm mx-8">{stat}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Signature lines */}
        <img
          src={signatureLines}
          alt="" aria-hidden="true"
          className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none"
        />
      </section>

      {/* ── Featured Events ── */}
      <section className="section-padding-sm" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Featured{' '}
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                  Events
                </span>
              </h2>
              <span className="text-sm text-muted-foreground">{featuredEvents.length} flagship events</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 100}>
                <FeaturedEventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <section className="sticky top-16 z-30 border-y border-border" style={{ background: 'hsla(220, 15%, 92%, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-4 flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-border focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Type filters with animated pill */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    selectedType === type
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {selectedType === type && (
                    <motion.div
                      layoutId="events-filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'hsl(168 100% 35%)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground whitespace-nowrap">
              {filteredEvents.length} events
            </div>
          </div>
        </div>
      </section>

      {/* ── All Events List ── */}
      <section className="section-padding-sm" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              All Upcoming{' '}
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                Events
              </span>
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 liquid-glass-light rounded-3xl">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={iconContainerStyle}>
                <Calendar className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
              </div>
              <p className="text-muted-foreground mb-4">No events match your search.</p>
              <button
                onClick={() => { setSelectedType('All'); setSearchQuery(''); }}
                className="glass-frosted-btn-teal rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Past Highlights ── */}
      <section className="section-padding-sm bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Past{' '}
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                  Highlights
                </span>
              </h2>
              <Link to="#" className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
                View all
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Mining Transformed 2023', date: 'March 2023', attendees: '500+', stat: '40 speakers', icon: Mic },
              { title: 'Venture North PITCH 2023', date: 'April 2023', attendees: '200+', stat: '$100K awarded', icon: Presentation },
              { title: 'Underground Demo Day', date: 'September 2023', attendees: '150+', stat: '8 live demos', icon: Globe },
            ].map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 100}>
                <div className="p-6 rounded-3xl liquid-glass-light hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                      <event.icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                    </div>
                    <div className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.attendees}
                    </span>
                    <span className="text-primary font-medium">{event.stat}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'hsl(224 71% 4%)' }}>
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'hsl(168 100% 35%)' }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Never Miss an{' '}
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                  Event
                </span>
              </h2>
              <p className="text-white/50 text-lg mb-10">
                Get notified about upcoming events, early registration, and exclusive invites.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary liquid-glass"
                />
                <button className="glass-frosted-btn rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Host CTA ── */}
      <section className="section-padding-sm" style={{ background: 'hsl(220 15% 92%)' }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Want to Host an{' '}
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, color: 'hsl(168, 100%, 35%)' }}>
                Event?
              </span>
            </h2>
            <p className="body-md max-w-xl mx-auto mb-8">
              Partner with NORCAT Innovation to host your next event at our facilities or collaborate on programming.
            </p>
            <Link
              to="/apply"
              className="glass-frosted-btn-teal rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 no-underline"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
