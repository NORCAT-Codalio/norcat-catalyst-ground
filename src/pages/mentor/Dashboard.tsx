import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  AlertCircle,
  Bell,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Demo data for ventures
const assignedVentures = [
  {
    id: '1',
    name: 'RockPulse Analytics',
    stage: 'Pilot',
    description: 'AI-powered predictive maintenance for mining equipment',
    founders: ['Dr. Elena Vasquez'],
    nextMeeting: '2026-02-05T14:00:00',
    isLeadMentor: true,
  },
  {
    id: '2',
    name: 'MineSafe AI',
    stage: 'MVP',
    description: 'Computer vision for underground safety monitoring',
    founders: ['James Chen', 'Sarah Liu'],
    nextMeeting: '2026-02-07T10:00:00',
    isLeadMentor: false,
  },
  {
    id: '3',
    name: 'TunnelTech Solutions',
    stage: 'Pre-Seed',
    description: 'Automated ventilation optimization systems',
    founders: ['Michael Okonkwo'],
    nextMeeting: null,
    isLeadMentor: false,
  },
];

const upcomingMeetings = [
  {
    id: '1',
    venture: 'RockPulse Analytics',
    date: '2026-02-05T14:00:00',
    type: 'Regular Session',
    agenda: 'Pilot deployment review, next milestone planning',
  },
  {
    id: '2',
    venture: 'MineSafe AI',
    date: '2026-02-07T10:00:00',
    type: 'Team Meeting',
    agenda: 'Technical architecture review',
  },
];

const actionItems = [
  {
    id: '1',
    task: 'Review pitch deck draft',
    venture: 'RockPulse Analytics',
    dueDate: '2026-02-04',
    priority: 'high',
  },
  {
    id: '2',
    task: 'Connect with potential pilot customer',
    venture: 'MineSafe AI',
    dueDate: '2026-02-10',
    priority: 'medium',
  },
  {
    id: '3',
    task: 'Provide feedback on technical roadmap',
    venture: 'TunnelTech Solutions',
    dueDate: '2026-02-12',
    priority: 'low',
  },
];

const announcements = [
  {
    id: '1',
    title: 'Quarterly Mentor Training Session',
    date: '2026-02-15',
    description: 'Join us for our Q1 training on effective venture mentoring practices.',
  },
  {
    id: '2',
    title: 'Ethics Refresher Required',
    date: '2026-02-28',
    description: 'Annual ethics acknowledgement due. Please complete by end of month.',
    urgent: true,
  },
];

export default function MentorDashboard() {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mentor Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back. Here's an overview of your mentoring activities.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{assignedVentures.length}</p>
                  <p className="text-sm text-muted-foreground">Assigned Ventures</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{upcomingMeetings.length}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Meetings</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-chart-4/10">
                  <CheckCircle2 className="h-6 w-6 text-chart-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{actionItems.length}</p>
                  <p className="text-sm text-muted-foreground">Open Action Items</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-chart-5/10">
                  <Clock className="h-6 w-6 text-chart-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Sessions This Quarter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements Banner */}
        {announcements.some(a => a.urgent) && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-destructive">Action Required</h3>
                  {announcements
                    .filter(a => a.urgent)
                    .map(a => (
                      <p key={a.id} className="text-sm text-muted-foreground mt-1">
                        {a.description}
                      </p>
                    ))}
                </div>
                <Button variant="destructive" size="sm" asChild>
                  <Link to="/mentor/ethics">Complete Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assigned Ventures */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your Ventures</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/mentor/ventures" className="flex items-center gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-3">
              {assignedVentures.map(venture => (
                <Card key={venture.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-accent/10 text-accent">
                            {venture.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{venture.name}</h3>
                            {venture.isLeadMentor && (
                              <Badge variant="secondary" className="text-xs">
                                Lead Mentor
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {venture.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="outline">{venture.stage}</Badge>
                            <span className="text-xs text-muted-foreground">
                              Founders: {venture.founders.join(', ')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/mentor/ventures/${venture.id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    {venture.nextMeeting && (
                      <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Next meeting: {formatDate(venture.nextMeeting)}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Meetings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Meetings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMeetings.map(meeting => (
                  <div key={meeting.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{meeting.venture}</span>
                      <Badge variant="outline" className="text-xs">
                        {meeting.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDate(meeting.date)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{meeting.agenda}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/mentor/meetings">View All Meetings</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Action Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Action Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {actionItems.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        item.priority === 'high'
                          ? 'bg-destructive'
                          : item.priority === 'medium'
                          ? 'bg-chart-4'
                          : 'bg-muted-foreground'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.task}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.venture} · Due {item.dueDate}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-4 w-4" /> Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between">
                      <span className="font-medium text-sm">{announcement.title}</span>
                      {announcement.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{announcement.date}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {announcement.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MentorPortalLayout>
  );
}
