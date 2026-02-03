import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  FileText,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingMeetings = [
  {
    id: '1',
    venture: 'RockPulse Analytics',
    ventureId: '1',
    date: '2026-02-05T14:00:00',
    duration: 60,
    type: 'Regular Session',
    location: 'Virtual',
    virtualLink: 'https://meet.example.com/abc123',
    agenda: 'Pilot deployment review, next milestone planning, investor outreach strategy',
    attendees: ['Dr. Elena Vasquez', 'You', 'Michael Chen'],
  },
  {
    id: '2',
    venture: 'MineSafe AI',
    ventureId: '2',
    date: '2026-02-07T10:00:00',
    duration: 45,
    type: 'Team Meeting',
    location: 'NORCAT Innovation Hub, Room 204',
    virtualLink: null,
    agenda: 'Technical architecture review, MVP feature prioritization',
    attendees: ['James Chen', 'Sarah Liu', 'Robert Johnson', 'You', 'Lisa Park'],
  },
  {
    id: '3',
    venture: 'TunnelTech Solutions',
    ventureId: '3',
    date: '2026-02-12T15:30:00',
    duration: 60,
    type: 'Regular Session',
    location: 'Virtual',
    virtualLink: 'https://meet.example.com/def456',
    agenda: 'Customer discovery findings, prototype development update',
    attendees: ['Michael Okonkwo', 'Amanda White', 'You'],
  },
];

const pastMeetings = [
  {
    id: '4',
    venture: 'RockPulse Analytics',
    ventureId: '1',
    date: '2026-01-28T14:00:00',
    duration: 60,
    type: 'Regular Session',
    location: 'Virtual',
    summary: 'Discussed Series A preparation timeline. Agreed on key milestones for Q1.',
    actionItems: ['Finalize pitch deck by Feb 4', 'Schedule investor intro calls'],
    pulseComplete: true,
  },
  {
    id: '5',
    venture: 'MineSafe AI',
    ventureId: '2',
    date: '2026-01-30T10:00:00',
    duration: 45,
    type: 'Team Meeting',
    location: 'NORCAT Innovation Hub',
    summary: 'Reviewed MVP scope. Identified critical path for pilot readiness.',
    actionItems: ['Complete safety detection module', 'Draft pilot agreement template'],
    pulseComplete: true,
  },
  {
    id: '6',
    venture: 'TunnelTech Solutions',
    ventureId: '3',
    date: '2026-01-15T15:30:00',
    duration: 60,
    type: 'Regular Session',
    location: 'Virtual',
    summary: 'Technical validation session. Reviewed ventilation optimization approach.',
    actionItems: ['Research competitor solutions', 'Connect with mining engineer contact'],
    pulseComplete: false,
  },
];

export default function MentorMeetings() {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meetings</h1>
          <p className="text-muted-foreground mt-1">
            View and manage your mentoring sessions with assigned ventures.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingMeetings.length})
            </TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <Card key={meeting.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Date Display */}
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="bg-accent/10 rounded-xl p-4 text-center">
                        <p className="text-accent font-bold text-2xl">
                          {new Date(meeting.date).getDate()}
                        </p>
                        <p className="text-accent text-sm font-medium">
                          {new Date(meeting.date).toLocaleDateString('en-US', { month: 'short' })}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          {formatTime(meeting.date)}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Meeting Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold">{meeting.venture}</h3>
                        <Badge variant="outline">{meeting.type}</Badge>
                        <Badge variant="secondary">{meeting.duration} min</Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {meeting.virtualLink ? (
                          <>
                            <Video className="h-4 w-4" />
                            <span>Virtual Meeting</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4" />
                            <span>{meeting.location}</span>
                          </>
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Agenda</p>
                        <p className="text-sm text-muted-foreground">{meeting.agenda}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Attendees</p>
                        <p className="text-sm text-muted-foreground">
                          {meeting.attendees.join(', ')}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="lg:w-48 flex flex-col gap-2">
                      {meeting.virtualLink && (
                        <Button asChild>
                          <a href={meeting.virtualLink} target="_blank" rel="noopener noreferrer">
                            <Video className="mr-2 h-4 w-4" /> Join Meeting
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" asChild>
                        <Link to={`/mentor/ventures/${meeting.ventureId}`}>
                          <FileText className="mr-2 h-4 w-4" /> View Venture
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastMeetings.map(meeting => (
              <Card key={meeting.id} className="bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: Date Display */}
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="bg-muted rounded-xl p-4 text-center">
                        <p className="text-foreground font-bold text-2xl">
                          {new Date(meeting.date).getDate()}
                        </p>
                        <p className="text-muted-foreground text-sm font-medium">
                          {new Date(meeting.date).toLocaleDateString('en-US', { month: 'short' })}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          {formatTime(meeting.date)}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Meeting Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold">{meeting.venture}</h3>
                        <Badge variant="outline">{meeting.type}</Badge>
                        {meeting.pulseComplete && (
                          <Badge className="bg-chart-4/20 text-chart-4">
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Feedback Complete
                          </Badge>
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Session Summary</p>
                        <p className="text-sm text-muted-foreground">{meeting.summary}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Action Items</p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {meeting.actionItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="lg:w-48 flex flex-col gap-2">
                      {!meeting.pulseComplete && (
                        <Button variant="default" size="sm">
                          Complete Pulse Survey
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/mentor/ventures/${meeting.ventureId}`}>
                          View Venture <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </MentorPortalLayout>
  );
}
