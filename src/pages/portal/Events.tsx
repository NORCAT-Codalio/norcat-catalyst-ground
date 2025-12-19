import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Calendar,
  MapPin,
  Video,
  ExternalLink,
  Clock,
  Users,
  Star,
  CheckCircle,
  CalendarPlus
} from 'lucide-react';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { format, isPast, isFuture } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  end_date: string | null;
  location: string | null;
  is_virtual: boolean;
  virtual_link: string | null;
  registration_url: string | null;
  image_url: string | null;
  is_flagship: boolean;
  max_attendees: number | null;
  tags: string[];
  is_registered?: boolean;
  attendee_count?: number;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');
  const { user, profile } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, [user]);

  const fetchEvents = async () => {
    try {
      const { data: eventsData, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;

      // Check user registrations
      let registeredIds = new Set<string>();
      if (user) {
        const { data: registrations } = await supabase
          .from('event_registrations')
          .select('event_id')
          .eq('user_id', user.id);
        registeredIds = new Set(registrations?.map(r => r.event_id) || []);
      }

      // Get attendee counts
      const { data: counts } = await supabase
        .from('event_registrations')
        .select('event_id');

      const countMap = new Map<string, number>();
      counts?.forEach(c => {
        countMap.set(c.event_id, (countMap.get(c.event_id) || 0) + 1);
      });

      const eventsWithData = (eventsData || []).map(event => ({
        ...event,
        is_registered: registeredIds.has(event.id),
        attendee_count: countMap.get(event.id) || 0,
      }));

      setEvents(eventsWithData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (event: Event) => {
    if (!user) return;

    try {
      if (event.is_registered) {
        // Unregister
        await supabase
          .from('event_registrations')
          .delete()
          .eq('event_id', event.id)
          .eq('user_id', user.id);

        toast({
          title: 'Registration cancelled',
          description: `You've been unregistered from ${event.title}.`,
        });
      } else {
        // Register
        await supabase.from('event_registrations').insert({
          event_id: event.id,
          user_id: user.id,
          company_id: profile?.company_id,
        });

        toast({
          title: 'Registered!',
          description: `You're now registered for ${event.title}.`,
        });
      }

      fetchEvents();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update registration. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const upcomingEvents = events.filter(e => isFuture(new Date(e.event_date)));
  const pastEvents = events.filter(e => isPast(new Date(e.event_date)));
  const myEvents = events.filter(e => e.is_registered);
  const flagshipEvents = upcomingEvents.filter(e => e.is_flagship);

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : activeTab === 'past' ? pastEvents : myEvents)
    .filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <PortalLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">Events Hub</h1>
          <p className="text-muted-foreground">
            Discover and register for ecosystem events, workshops, and networking opportunities.
          </p>
        </motion.div>

        {/* Flagship Events */}
        {flagshipEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Flagship Events
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {flagshipEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 overflow-hidden"
                >
                  {event.image_url && (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-3">
                      <Star size={12} className="mr-1" />
                      Flagship Event
                    </Badge>
                    <h3 className="font-bold text-xl text-foreground mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {format(new Date(event.event_date), 'MMM d, yyyy')}
                      </span>
                      <span className="flex items-center gap-1">
                        {event.is_virtual ? <Video size={14} /> : <MapPin size={14} />}
                        {event.is_virtual ? 'Virtual' : event.location}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleRegister(event)}
                      className={event.is_registered ? 'bg-green-600 hover:bg-green-700' : ''}
                    >
                      {event.is_registered ? (
                        <>
                          <CheckCircle size={16} className="mr-2" />
                          Registered
                        </>
                      ) : (
                        <>
                          <CalendarPlus size={16} className="mr-2" />
                          Register Now
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search & Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="my-events">
                My Events ({myEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past">
                Past ({pastEvents.length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Events List */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-2xl border border-border">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">No events found</h3>
            <p className="text-muted-foreground text-sm">
              {activeTab === 'my-events'
                ? "You haven't registered for any events yet."
                : 'Check back later for new events.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`bg-card rounded-2xl border ${
                  event.is_registered ? 'border-green-200 ring-1 ring-green-100' : 'border-border'
                } overflow-hidden hover:shadow-md transition-all`}
              >
                <div className="flex flex-col md:flex-row">
                  {event.image_url && (
                    <div className="md:w-48 h-32 md:h-auto">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {event.is_registered && (
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              <CheckCircle size={10} className="mr-1" />
                              Registered
                            </Badge>
                          )}
                          {event.is_virtual && (
                            <Badge variant="secondary">
                              <Video size={10} className="mr-1" />
                              Virtual
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">{event.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {format(new Date(event.event_date), 'd')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {format(new Date(event.event_date), 'MMM yyyy')}
                        </div>
                      </div>
                    </div>

                    {event.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {event.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {format(new Date(event.event_date), 'h:mm a')}
                      </span>
                      <span className="flex items-center gap-1">
                        {event.is_virtual ? <Video size={14} /> : <MapPin size={14} />}
                        {event.is_virtual ? 'Online' : event.location || 'TBA'}
                      </span>
                      {event.attendee_count !== undefined && event.attendee_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {event.attendee_count} attending
                        </span>
                      )}
                    </div>

                    {event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      {isFuture(new Date(event.event_date)) && (
                        <Button
                          variant={event.is_registered ? 'outline' : 'default'}
                          size="sm"
                          onClick={() => handleRegister(event)}
                        >
                          {event.is_registered ? 'Cancel Registration' : 'Register'}
                        </Button>
                      )}
                      {event.registration_url && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            External Link
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
