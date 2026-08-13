import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Clock, Video, Search, ChevronRight, Sparkles, Mic, Presentation, Globe, Coffee, GraduationCap, Radio } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import pitchEventImage from '@/assets/pitch-event.jpg';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL, ...style }}>
    <span className="size-1.5 rounded-full inline-block" style={{ background: style?.color || TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

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
  type: string;
  description: string;
  featured: boolean;
  registrationOpen: boolean;
  isVirtual: boolean;
  isHybrid?: boolean;
  attendees?: number;
  maxAttendees?: number;
  image?: string;
  host?: string;
  highlight?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 'venture-north-pitch-2026',
    title: 'Venture North PITCH 2026',
    date: 'October 1, 2026',
    time: '5:00 PM EST',
    location: 'College Boréal',
    type: 'Pitch Competition',
    description: "Northern Ontario's premier startup pitch competition returns. Save the date — details, applications, and venue announcement coming soon.",
    featured: true,
    registrationOpen: false,
    isVirtual: false,
    image: pitchEventImage,
    host: 'NORCAT Innovation',
    highlight: 'Save the date',
  },
  {
    id: 'gdg-workshop-2026',
    title: 'Google Developers Group Workshop',
    date: 'September 15, 2026',
    time: 'TBD',
    location: 'Sudbury, ON',
    type: 'Workshop',
    description: 'A hands-on workshop hosted with the Google Developers Group. Date and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    host: 'NORCAT Innovation & GDG',
  },
  {
    id: 'ai-collective-aug-2026',
    title: 'AI Collective Workshop — #1',
    date: 'August 27, 2026',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Kickoff session of the AI Collective series. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-collective-sep-2026',
    title: 'AI Collective Workshop — #2',
    date: 'September 24, 2026',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Monthly AI Collective workshop. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-collective-oct-2026',
    title: 'AI Collective Workshop — #3',
    date: 'October 29, 2026',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Monthly AI Collective workshop. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-collective-nov-2026',
    title: 'AI Collective Workshop — #4',
    date: 'November 26, 2026',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Monthly AI Collective workshop. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-collective-dec-2026',
    title: 'AI Collective Workshop — #5',
    date: 'December 31, 2026',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Monthly AI Collective workshop. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-collective-jan-2027',
    title: 'AI Collective Workshop — #6',
    date: 'January 28, 2027',
    time: 'TBD',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'Final session of the six-month AI Collective series. Topic and agenda to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
  },
  {
    id: 'noa-ai-pitch-2027',
    title: 'NOA Private Pitch - AI',
    date: 'January 15, 2027',
    time: 'TBD',
    location: 'Sudbury, ON',
    type: 'PITCH EVENT',
    description: 'Private pitch event spotlighting Northern Ontario AI ventures. Date and venue to be confirmed.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    host: 'NORCAT Innovation',
  },
];

const pastHighlights: Event[] = [
  {
    id: 'mining-transformed-2024',
    title: 'Mining Transformed 2024',
    date: 'March 15, 2025',
    time: '9:00 AM EST',
    endDate: 'March 16, 2024',
    location: 'NORCAT Underground Centre, Sudbury',
    type: 'Conference',
    description: 'Our flagship annual conference bringing together mining innovators, technology companies, and industry leaders from around the world. Two days of keynotes, demos, and networking.',
    featured: true,
    registrationOpen: false,
    isVirtual: false,
    attendees: 342,
    maxAttendees: 500,
    image: pitchEventImage,
    host: 'NORCAT Innovation',
    highlight: '40+ speakers',
  },
  {
    id: 'mining-transformed-2026',
    title: 'Mining Transformed 2026',
    date: 'March 14, 2026',
    time: '9:00 AM EST',
    endDate: 'March 15, 2026',
    location: 'NORCAT Underground Centre, Sudbury',
    type: 'Conference',
    description: 'Our flagship annual conference bringing together mining innovators, technology companies, and industry leaders from around the world. Two days of keynotes, demos, and networking.',
    featured: true,
    registrationOpen: false,
    isVirtual: false,
    attendees: 400,
    maxAttendees: 600,
    image: pitchEventImage,
    host: 'NORCAT Innovation',
    highlight: '50+ speakers',
  },
  {
    id: 'venture-north-pitch',
    title: 'Venture North PITCH 2025',
    date: 'October 2, 2025',
    time: '5:00 PM EST',
    location: '@ College Boreal',
    type: 'Pitch Competition',
    description: "Northern Ontario's premier startup pitch competition. $100K in prizes and direct access to investors. Pitch applications are now closed — register to attend the showcase.",
    featured: true,
    registrationOpen: false,
    isVirtual: false,
    attendees: 156,
    maxAttendees: 200,
    host: 'NORCAT Innovation',
    highlight: '$100K awarded',
  },
  {
    id: 'ask-expert-ip-2026',
    title: 'Ask an Expert: IP Protection with Kushal Shah (Gowling Law)',
    date: 'May 15, 2025',
    time: '12:00 PM EST',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: 'An Ask an Expert session on intellectual property protection with Kushal Shah from Gowling WLG.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    host: 'NORCAT Innovation',
    highlight: 'IP masterclass',
  },
  {
    id: 'ai-workshop-vibe-coding',
    title: 'AI Workshop: Vibe Coding & Bridging the Technical Gap',
    date: 'July 2, 2026',
    time: '10:00 - 11:30 AM EST',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: '',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    attendees: 30,
    host: 'NORCAT Innovation',
  },
  {
    id: 'ai-101-codalio',
    title: 'AI 101 - Building an MVP with Codalio',
    date: 'May 13, 2025',
    time: '8:30 AM EST',
    location: 'Hybrid Event',
    type: 'Workshop',
    description: '',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    isHybrid: true,
    attendees: 24,
    maxAttendees: 30,
    host: 'NORCAT Innovation',
  },
  {
    id: 'noa-pitch-health',
    title: 'NOA Private Pitch - Health & Science Innovation',
    date: 'March 5, 2025',
    time: '11:00 AM EST',
    location: 'In-person',
    type: 'PITCH EVENT',
    description: '',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    attendees: 45,
    maxAttendees: 50,
    host: 'NORCAT Mentorship Team',
  },
  {
    id: 'noa-pitch-mining',
    title: 'NOA Private Pitch - Mining Innovation',
    date: 'January 14, 2025',
    time: '11:00 AM EST',
    location: 'In-person',
    type: 'PITCH EVENT',
    description: '',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    attendees: 112,
    host: 'NORCAT & Mining Innovation Council',
  },
  {
    id: 'underground-demo-day-2023',
    title: 'Underground Demo Day',
    date: 'September 28, 2023',
    time: '1:00 PM EST',
    location: 'NORCAT Underground Centre, Sudbury',
    type: 'Showcase',
    description: 'Eight portfolio companies delivered live technology demonstrations to global mining operators and investors.',
    featured: false,
    registrationOpen: false,
    isVirtual: false,
    attendees: 150,
    maxAttendees: 200,
    host: 'NORCAT Innovation',
    highlight: '8 live demos',
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

const PAPER = '#F2F3F6';
const CARD_BORDER = '#d9dde5';
const BODY = '#5b6478';

const SectionHead = ({ eyebrow, title, aside, eyebrowStyle }: { eyebrow: string; title: React.ReactNode; aside?: React.ReactNode; eyebrowStyle?: React.CSSProperties }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
    <div className="text-left">
      <Eyebrow style={eyebrowStyle}>{eyebrow}</Eyebrow>
      <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl"
          style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
        {title}
      </h2>
    </div>
    {aside && (
      <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: BODY, fontFamily: FONT }}>{aside}</p>
    )}
  </div>
);

// ── Featured Event Card ──
const FeaturedEventCard = ({ event }: { event: Event }) => {
  const dateInfo = formatDate(event.date);
  const Icon = typeIconMap[event.type] || Calendar;

  return (
    <div className="group rounded-2xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1.5 h-full flex flex-col"
         style={{ border: `1px solid ${CARD_BORDER}` }}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image || pitchEventImage}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(0,26,77,0.55) 100%)' }} />

        {/* Date badge */}
        <div className="absolute top-4 left-4 rounded-xl px-4 py-3 text-center bg-white">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>{dateInfo.month}</div>
          <div className="text-2xl font-black leading-none" style={{ color: NAVY, fontFamily: FONT }}>{dateInfo.day}</div>
        </div>

        {/* Type badge */}
        <div className="absolute top-4 right-4">
          <span className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] flex items-center gap-1.5 text-white"
                style={{ background: 'rgba(0,26,77,0.75)', backdropFilter: 'blur(6px)' }}>
            <Icon className="w-3 h-3" />
            {event.type}
          </span>
        </div>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-black uppercase text-xl md:text-2xl leading-[1.05] mb-3"
            style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
          {event.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm mb-4" style={{ color: BODY }}>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" style={{ color: TEAL }} />{event.time}</span>
          <span className="flex items-center gap-1.5">
            {(event.isVirtual || event.isHybrid) ? <Video className="w-4 h-4" style={{ color: TEAL }} /> : <MapPin className="w-4 h-4" style={{ color: TEAL }} />}
            {event.isVirtual ? 'Virtual' : event.isHybrid ? 'Hybrid' : event.location}
          </span>
        </div>

        <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: BODY }}>{event.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4">
          {event.attendees ? (
            <span className="flex items-center gap-1.5 text-sm" style={{ color: BODY }}>
              <Users className="w-4 h-4" />{event.attendees} attended
            </span>
          ) : event.highlight ? (
            <span className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>{event.highlight}</span>
          ) : <span />}

          <a href="#"
             className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 no-underline"
             style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`, fontFamily: FONT }}>
            {event.registrationOpen ? 'Register' : 'Coming Soon'}
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
    <div className="group flex flex-col sm:flex-row gap-5 p-5 md:p-6 rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-0.5"
         style={{ border: `1px solid ${CARD_BORDER}` }}>
      {/* Date column */}
      <div className="flex-shrink-0 sm:w-20 text-left sm:text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>{dateInfo.month}</div>
        <div className="text-3xl font-black leading-none" style={{ color: NAVY, fontFamily: FONT }}>{dateInfo.day}</div>
        <div className="text-xs mt-1" style={{ color: BODY }}>{dateInfo.weekday}</div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>
                <Icon className="w-3.5 h-3.5" />
                {event.type}
              </span>
              {(event.isVirtual || event.isHybrid) && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: BODY }}>
                  <Video className="w-3 h-3" />
                  {event.isVirtual ? 'Virtual' : 'Hybrid'}
                </span>
              )}
            </div>

            <h3 className="font-black uppercase text-base md:text-lg leading-tight mb-2"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
              {event.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: BODY }}>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            {event.attendees && (
              <span className="flex items-center gap-1 text-xs" style={{ color: BODY }}>
                <Users className="w-3.5 h-3.5" />
                {event.attendees}{event.maxAttendees && `/${event.maxAttendees}`}
              </span>
            )}
            <a
              href="#"
              className={cn(
                "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] inline-flex items-center gap-1.5 no-underline transition-all duration-300",
                event.registrationOpen ? "text-white hover:-translate-y-0.5" : ""
              )}
              style={event.registrationOpen
                ? { background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`, fontFamily: FONT }
                : { background: PAPER, color: BODY, fontFamily: FONT, border: `1px solid ${CARD_BORDER}` }}
            >
              {event.registrationOpen ? 'Register' : 'Coming Soon'}
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
      <section className="relative overflow-hidden pt-16 pb-10 md:pt-24 md:pb-16" style={{ background: NAVY }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${TEAL} 100%)` }} />
        <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
             style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.12 }} />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <Eyebrow style={{ color: '#FFFFFF' }}>Discover What's Happening</Eyebrow>
              <Display as="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Upcoming <span style={{ color: TEAL }}>Events.</span>
              </Display>
              <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Connect with founders, investors, and industry leaders at our conferences, workshops, and networking events.
              </p>
            </div>
          </ScrollReveal>

          {/* Scrolling highlights bar */}
          <ScrollReveal delay={100}>
            <div className="mt-10 md:mt-14 overflow-hidden rounded-2xl py-4 md:py-5" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-8 md:gap-12 px-4 md:px-6">
                    {[
                      { text: 'Venture North PITCH 2026', date: 'Oct 1, 2026' },
                      { text: 'AI Collective Workshops', date: '6-Part Series' },
                      { text: 'Google Developers Group Workshop', date: 'Sept 2026' },
                      { text: 'NOA Private Pitch — AI', date: 'Jan 2027' },
                      { text: 'Mining Transformed', date: 'Mar 2026' },
                      { text: '$100K in Prizes', date: 'Venture North PITCH' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: TEAL }}>{item.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.35)' }} />
                        <span className="text-sm md:text-base font-semibold text-white whitespace-nowrap">{item.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Events ── */}
      <section className="py-16 md:py-24" style={{ background: PAPER }}>
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <ScrollReveal>
            <SectionHead
              eyebrow="FLAGSHIP"
              eyebrowStyle={{ color: BLUE }}
              title={<span style={{ color: TEAL }}>FEATURED EVENTS</span>}
              aside={`${featuredEvents.length} featured`}
            />
          </ScrollReveal>

          <div className={cn("gap-6 md:gap-8", featuredEvents.length === 1 ? "max-w-3xl" : "grid md:grid-cols-2")}>
            {featuredEvents.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 100}>
                <FeaturedEventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Events ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <ScrollReveal>
            <SectionHead
              eyebrow="WHAT'S NEXT"
              title={<>ALL UPCOMING EVENTS.</>}
              aside={`${filteredEvents.length} events`}
            />
          </ScrollReveal>

          {/* Search & filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center mb-8">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: BODY }} />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-11 rounded-full bg-white"
                style={{ borderColor: CARD_BORDER }}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors"
                  style={{
                    color: selectedType === type ? '#FFFFFF' : BODY,
                    border: `1px solid ${selectedType === type ? 'transparent' : CARD_BORDER}`,
                    fontFamily: FONT,
                  }}
                >
                  {selectedType === type && (
                    <motion.div
                      layoutId="events-filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)` }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 rounded-2xl bg-white" style={{ border: `1px solid ${CARD_BORDER}` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: PAPER }}>
                <Calendar className="w-6 h-6" style={{ color: TEAL }} />
              </div>
              <p className="mb-6" style={{ color: BODY }}>No events match your search.</p>
              <button
                onClick={() => { setSelectedType('All'); setSearchQuery(''); }}
                className="rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white"
                style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 100%)`, fontFamily: FONT }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Past Highlights ── */}
      <section className="py-16 md:py-24" style={{ background: PAPER }}>
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <ScrollReveal>
            <SectionHead
              eyebrow="LOOKING BACK"
              title={<>PAST HIGHLIGHTS.</>}
              aside={`${pastHighlights.length} events`}
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {pastHighlights.map((event, i) => {
              const Icon = typeIconMap[event.type] || Calendar;
              const displayDate = new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
              return (
                <ScrollReveal key={event.id} delay={i * 80}>
                  <div className="h-full p-6 md:p-7 rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1"
                       style={{ border: `1px solid ${CARD_BORDER}` }}>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>
                        <Icon className="w-3.5 h-3.5" />
                        {event.type}
                      </span>
                      <span className="text-xs" style={{ color: BODY }}>{displayDate}</span>
                    </div>
                    <h3 className="font-black uppercase text-lg leading-tight mb-4"
                        style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm pt-4" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
                      {event.attendees && (
                        <span className="flex items-center gap-1.5" style={{ color: BODY }}>
                          <Users className="w-4 h-4" />
                          {event.attendees}{event.maxAttendees && '+'}
                        </span>
                      )}
                      {event.highlight && (
                        <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: TEAL }}>{event.highlight}</span>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA: Newsletter + Host ── */}
      <section className="py-16 md:py-24 relative overflow-hidden"
               style={{ background: `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 60%, ${NAVY} 100%)`, color: 'white' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 35%), radial-gradient(circle at 90% 80%, rgba(0,179,152,0.32), transparent 45%)`,
        }} />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-6"
                 style={{ fontFamily: FONT, color: 'white' }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: 'white' }} />
                STAY IN THE LOOP
              </p>
              <h2 className="font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                NEVER MISS AN <span style={{ color: NAVY }}>EVENT.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.90)' }}>
                Get notified about upcoming events, early registration, and exclusive invites.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-5 rounded-full text-sm text-white placeholder:text-white/60"
                  style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.28)' }}
                />
                <button className="rounded-full px-7 py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                        style={{ background: 'white', color: NAVY, fontFamily: FONT }}>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl p-8 md:p-10"
                 style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.22)' }}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] mb-4" style={{ color: 'white' }}>Host with us</p>
              <h3 className="font-black uppercase leading-[0.95] tracking-tight text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                WANT TO HOST AN EVENT?
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Partner with NORCAT Innovation to host your next event at our facilities or collaborate on programming.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform duration-300 hover:-translate-y-1 no-underline"
                style={{ background: 'white', color: NAVY, fontFamily: FONT }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
