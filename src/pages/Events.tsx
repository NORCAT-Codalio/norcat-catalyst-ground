import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Clock, Video, Search, Filter, ChevronRight, Sparkles } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import pitchEventImage from '@/assets/pitch-event.jpg';

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

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
  };
};

const getTypeColor = (type: Event['type']) => {
  const colors: Record<Event['type'], string> = {
    'Conference': 'bg-primary/10 text-primary border-primary/20',
    'Workshop': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    'Networking': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    'Pitch Competition': 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    'Showcase': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    'Webinar': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  };
  return colors[type];
};

// Featured Event Card (Luma-style)
const FeaturedEventCard = ({ event }: { event: Event }) => {
  const dateInfo = formatDate(event.date);
  
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={event.image || pitchEventImage}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        
        {/* Date badge - floating */}
        <div className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-lg text-center">
          <div className="text-xs font-semibold text-gray-500">{dateInfo.month}</div>
          <div className="text-2xl font-black text-gray-900 leading-none">{dateInfo.day}</div>
        </div>

        {/* Type badge */}
        <div className="absolute top-4 right-4">
          <span className={cn(
            "px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm",
            getTypeColor(event.type)
          )}>
            {event.type}
          </span>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
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
            {event.host && (
              <span className="text-sm text-muted-foreground">by {event.host}</span>
            )}
          </div>
          
          <Button className="btn-primary group/btn">
            Register
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Regular Event Card (Eventbrite list-style)
const EventCard = ({ event }: { event: Event }) => {
  const dateInfo = formatDate(event.date);
  
  return (
    <div className="group flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      {/* Date column */}
      <div className="flex-shrink-0 w-16 text-center pt-1">
        <div className="text-xs font-semibold text-primary uppercase">{dateInfo.month}</div>
        <div className="text-3xl font-black text-gray-900 leading-none">{dateInfo.day}</div>
        <div className="text-xs text-muted-foreground mt-1">{dateInfo.weekday}</div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs font-medium border",
                getTypeColor(event.type)
              )}>
                {event.type}
              </span>
              {event.isVirtual && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Video className="w-3 h-3" />
                  Virtual
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-1 truncate">
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
            <Button variant="outline" size="sm" className="rounded-full text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              Register
            </Button>
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
      {/* Hero - Minimal Luma-style */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Discover What's Happening
              </div>
              <h1 className="headline-xl mb-6">
                Events
              </h1>
              <p className="body-lg max-w-2xl mx-auto">
                Connect with founders, investors, and industry leaders at our conferences, workshops, and networking events.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Events - Large cards */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="headline-md">Featured Events</h2>
              <span className="text-sm text-muted-foreground">{featuredEvents.length} events</span>
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

      {/* Search & Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-y border-gray-100 shadow-sm">
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
                className="pl-10 rounded-full border-gray-200 focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Type filters */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    selectedType === type
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              {filteredEvents.length} events
            </div>
          </div>
        </div>
      </section>

      {/* All Events List */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="headline-md mb-8">All Upcoming Events</h2>
          </ScrollReveal>

          <div className="space-y-3">
            {filteredEvents.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 50}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No events match your search.</p>
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedType('All');
                  setSearchQuery('');
                }}
                className="text-primary"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="section-padding-sm bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="headline-md">Past Highlights</h2>
              <Link to="#" className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
                View all past events
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Mining Transformed 2023',
                date: 'March 2023',
                attendees: '500+',
                stat: '40 speakers',
              },
              {
                title: 'Venture North PITCH 2023',
                date: 'April 2023',
                attendees: '200+',
                stat: '$100K awarded',
              },
              {
                title: 'Underground Demo Day',
                date: 'September 2023',
                attendees: '150+',
                stat: '8 live demos',
              },
            ].map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{event.title}</h3>
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

      {/* Newsletter CTA - Luma style */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="headline-lg mb-4">Never Miss an Event</h2>
              <p className="text-white/70 text-lg mb-8">
                Get notified about upcoming events, early registration, and exclusive invites.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus:bg-white/20"
                />
                <Button className="btn-primary whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="section-padding-sm bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="headline-md mb-4">Want to Host an Event?</h2>
            <p className="body-md max-w-xl mx-auto mb-8">
              Partner with NORCAT Innovation to host your next event at our facilities or collaborate on programming.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/apply">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
