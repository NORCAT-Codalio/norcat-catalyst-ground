import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  FileText,
  Shield,
  CheckCircle2,
  Clock,
  Video,
  MapPin,
  Plus,
  ExternalLink,
  Download,
  Linkedin,
  Mail,
  Building2,
  TrendingUp,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

// Demo data for RockPulse Analytics
const ventureData = {
  id: '1',
  name: 'RockPulse Analytics',
  tagline: 'AI-powered predictive maintenance for mining equipment',
  stage: 'Pilot',
  location: 'Sudbury, ON',
  founded: 2024,
  website: 'https://rockpulse.ai',
  description: `RockPulse Analytics is developing an AI-powered predictive maintenance platform specifically designed for heavy mining equipment. Using a proprietary combination of acoustic sensors and vibration analysis, the system can predict equipment failures up to 72 hours in advance, reducing unplanned downtime by up to 40%.

The company has completed successful proof-of-concept trials with two major mining operations and is currently in pilot deployment phase with a third site. The technology has demonstrated a 35% reduction in maintenance costs during trials.`,
  founders: [
    {
      name: 'Dr. Elena Vasquez',
      role: 'CEO & Co-Founder',
      bio: 'Former mining engineer with 15 years experience at Vale. PhD in Mechanical Engineering from Queen\'s University. Expert in equipment reliability and predictive analytics.',
      email: 'elena@rockpulse.ai',
      linkedin: 'https://linkedin.com/in/elenavasquez',
      avatar: null,
    },
  ],
  mentorTeam: [
    { name: 'You', role: 'Lead Mentor', expertise: 'Mining Technology, B2B Sales' },
    { name: 'Michael Chen', role: 'Mentor', expertise: 'Enterprise Software, Fundraising' },
    { name: 'Sarah Williams', role: 'Mentor', expertise: 'IP Strategy, Legal' },
  ],
  goals: [
    { goal: 'Secure Series A funding ($3-5M)', status: 'in_progress', targetDate: '2026-Q2' },
    { goal: 'Expand to 3 mining sites', status: 'in_progress', targetDate: '2026-Q1' },
    { goal: 'Build enterprise sales team', status: 'not_started', targetDate: '2026-Q3' },
    { goal: 'File 2 additional patents', status: 'completed', targetDate: '2026-Q1' },
  ],
  metrics: {
    employees: 8,
    revenue: '$120K ARR',
    pilots: 3,
    patents: 2,
    funding: '$500K (Pre-seed)',
  },
};

const meetings = [
  {
    id: '1',
    date: '2026-02-05T14:00:00',
    type: 'Regular Session',
    location: 'Virtual',
    virtualLink: 'https://meet.example.com/abc123',
    status: 'upcoming',
    agenda: `1. Pilot deployment progress update
2. Series A investor outreach strategy
3. Review pitch deck revisions
4. Discuss enterprise sales hire timeline`,
    attendees: ['Dr. Elena Vasquez', 'You (Lead)', 'Michael Chen'],
  },
  {
    id: '2',
    date: '2026-01-28T14:00:00',
    type: 'Regular Session',
    location: 'Virtual',
    status: 'completed',
    summary: `Discussed Series A preparation timeline and agreed on key milestones for Q1. Elena presented updated financial projections showing path to $1M ARR by end of year. Team agreed to focus on securing 2 more pilot customers before approaching Series A investors.

Key decisions:
- Target minimum 3 active pilots before Series A conversations
- Prioritize mining-focused VCs over generalist funds
- Delay enterprise sales hire until after funding round`,
    decisions: [
      'Target 3 active pilots before Series A',
      'Prioritize mining-focused VCs',
      'Delay sales hire until post-funding',
    ],
    attendees: ['Dr. Elena Vasquez', 'You (Lead)', 'Michael Chen', 'Sarah Williams'],
  },
  {
    id: '3',
    date: '2026-01-14T14:00:00',
    type: 'Regular Session',
    location: 'NORCAT Innovation Hub',
    status: 'completed',
    summary: `Technical deep-dive session focused on IP strategy. Sarah led discussion on patent portfolio expansion and freedom-to-operate analysis. Identified 2 additional patent opportunities around sensor fusion algorithm.`,
    decisions: [
      'File provisional patent for sensor fusion method',
      'Conduct FTO analysis on competitor patents',
    ],
    attendees: ['Dr. Elena Vasquez', 'You (Lead)', 'Sarah Williams'],
  },
];

const actionItems = [
  {
    id: '1',
    task: 'Finalize Series A pitch deck',
    owner: 'Dr. Elena Vasquez',
    ownerType: 'founder',
    dueDate: '2026-02-04',
    status: 'in_progress',
    notes: 'Focus on unit economics slide and customer testimonials',
  },
  {
    id: '2',
    task: 'Review and provide feedback on pitch deck',
    owner: 'You',
    ownerType: 'mentor',
    dueDate: '2026-02-06',
    status: 'pending',
    notes: '',
  },
  {
    id: '3',
    task: 'Intro to Northleaf Ventures partner',
    owner: 'Michael Chen',
    ownerType: 'mentor',
    dueDate: '2026-02-10',
    status: 'pending',
    notes: 'Warm intro through previous portfolio company',
  },
  {
    id: '4',
    task: 'Complete FTO analysis report',
    owner: 'Sarah Williams',
    ownerType: 'mentor',
    dueDate: '2026-02-15',
    status: 'in_progress',
    notes: 'External IP counsel engaged',
  },
  {
    id: '5',
    task: 'Submit pilot results summary',
    owner: 'Dr. Elena Vasquez',
    ownerType: 'founder',
    dueDate: '2026-02-01',
    status: 'completed',
    notes: '',
  },
];

const resources = {
  norcat: [
    { name: 'Series A Readiness Checklist', type: 'document', url: '#' },
    { name: 'Mining VC Landscape 2026', type: 'document', url: '#' },
    { name: 'Enterprise Sales Playbook', type: 'document', url: '#' },
    { name: 'IP Strategy Guide', type: 'document', url: '#' },
  ],
  venture: [
    { name: 'RockPulse Pitch Deck v3.2', type: 'document', uploadedBy: 'Elena', date: '2026-01-28' },
    { name: 'Pilot Results - Site A', type: 'document', uploadedBy: 'Elena', date: '2026-01-25' },
    { name: 'Financial Model 2026', type: 'spreadsheet', uploadedBy: 'Elena', date: '2026-01-20' },
    { name: 'Technical Architecture', type: 'document', uploadedBy: 'Elena', date: '2026-01-15' },
  ],
};

const ethicsStatus = {
  ndaSigned: true,
  ndaDate: '2025-08-15',
  coiStatus: 'clear',
  coiLastReview: '2026-01-15',
  boundaries: [
    'No investment discussions',
    'No consulting arrangements',
    'No board role offers',
    'Maintain confidentiality',
  ],
};

export default function VentureWorkspace() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-chart-4/20 text-chart-4';
      case 'in_progress':
        return 'bg-accent/20 text-accent';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <MentorPortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/mentor/ventures" aria-label="Back to ventures">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold text-foreground">{ventureData.name}</h1>
                <Badge className="bg-accent text-accent-foreground">Lead Mentor</Badge>
                <Badge variant="outline">{ventureData.stage}</Badge>
              </div>
              <p className="text-muted-foreground mt-1">{ventureData.tagline}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {ventureData.location}
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" /> Founded {ventureData.founded}
                </span>
                <a
                  href={ventureData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" /> Website
                </a>
              </div>
            </div>
          </div>
          <Button>
            <Calendar className="mr-2 h-4 w-4" /> Schedule Meeting
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
            <TabsTrigger value="actions">Action Items</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="ethics">Ethics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card>
                  <CardHeader>
                    <CardTitle>About the Venture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {ventureData.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Founders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Founder Team</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {ventureData.founders.map(founder => (
                      <div key={founder.name} className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {founder.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{founder.name}</h4>
                            <Badge variant="secondary">{founder.role}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{founder.bio}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <a
                              href={`mailto:${founder.email}`}
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              <Mail className="h-3 w-3" /> Email
                            </a>
                            <a
                              href={founder.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              <Linkedin className="h-3 w-3" /> LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Mentoring Goals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" /> Mentoring Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {ventureData.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            goal.status === 'completed' ? 'bg-chart-4' :
                            goal.status === 'in_progress' ? 'bg-accent' : 'bg-muted-foreground'
                          }`} />
                          <span className={goal.status === 'completed' ? 'line-through text-muted-foreground' : ''}>
                            {goal.goal}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{goal.targetDate}</span>
                          <Badge className={getStatusColor(goal.status)}>
                            {goal.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" /> Key Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(ventureData.metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Mentor Team */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-4 w-4" /> Mentor Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {ventureData.mentorTeam.map(mentor => (
                      <div key={mentor.name} className="flex items-start gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-accent/10 text-accent text-sm">
                            {mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{mentor.name}</span>
                            {mentor.role === 'Lead Mentor' && (
                              <Badge variant="secondary" className="text-xs">Lead</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{mentor.expertise}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" /> View Pitch Deck
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" /> Message Founder
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" /> View Calendar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Meetings Tab */}
          <TabsContent value="meetings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Session History</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Schedule Session
              </Button>
            </div>

            <div className="space-y-4">
              {meetings.map(meeting => (
                <Card key={meeting.id} className={meeting.status === 'upcoming' ? 'border-accent' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Date */}
                      <div className="lg:w-32 flex-shrink-0">
                        <div className={`rounded-xl p-4 text-center ${
                          meeting.status === 'upcoming' ? 'bg-accent/10' : 'bg-muted'
                        }`}>
                          <p className={`font-bold text-2xl ${
                            meeting.status === 'upcoming' ? 'text-accent' : 'text-foreground'
                          }`}>
                            {new Date(meeting.date).getDate()}
                          </p>
                          <p className={`text-sm font-medium ${
                            meeting.status === 'upcoming' ? 'text-accent' : 'text-muted-foreground'
                          }`}>
                            {new Date(meeting.date).toLocaleDateString('en-US', { month: 'short' })}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant={meeting.status === 'upcoming' ? 'default' : 'secondary'}>
                            {meeting.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </Badge>
                          <Badge variant="outline">{meeting.type}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            {meeting.location === 'Virtual' ? (
                              <><Video className="h-3 w-3" /> Virtual</>
                            ) : (
                              <><MapPin className="h-3 w-3" /> {meeting.location}</>
                            )}
                          </span>
                        </div>

                        {meeting.status === 'upcoming' && meeting.agenda && (
                          <div>
                            <h4 className="font-medium text-sm mb-2">Agenda</h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">
                              {meeting.agenda}
                            </p>
                          </div>
                        )}

                        {meeting.status === 'completed' && meeting.summary && (
                          <div>
                            <h4 className="font-medium text-sm mb-2">Session Summary</h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">
                              {meeting.summary}
                            </p>
                          </div>
                        )}

                        {meeting.decisions && meeting.decisions.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                              <Lightbulb className="h-4 w-4 text-accent" /> Key Decisions
                            </h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {meeting.decisions.map((decision, idx) => (
                                <li key={idx}>{decision}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {meeting.attendees.join(', ')}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="lg:w-40 flex flex-col gap-2">
                        {meeting.status === 'upcoming' && meeting.virtualLink && (
                          <Button size="sm" asChild>
                            <a href={meeting.virtualLink} target="_blank" rel="noopener noreferrer">
                              <Video className="mr-2 h-4 w-4" /> Join
                            </a>
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Action Items Tab */}
          <TabsContent value="actions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Action Items</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Action Item
              </Button>
            </div>

            <div className="space-y-3">
              {actionItems.map(item => (
                <Card key={item.id} className={item.status === 'completed' ? 'bg-muted/20' : ''}>
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <Checkbox checked={item.status === 'completed'} className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`font-medium ${item.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                              {item.task}
                            </p>
                            {item.notes && (
                              <p className="text-sm text-muted-foreground mt-1">{item.notes}</p>
                            )}
                          </div>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {item.owner}
                            <Badge variant="outline" className="ml-1 text-xs">
                              {item.ownerType}
                            </Badge>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Due: {item.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* NORCAT Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>NORCAT Resources</CardTitle>
                  <CardDescription>Curated resources for this venture's stage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {resources.norcat.map((resource, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{resource.name}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Venture Uploads */}
              <Card>
                <CardHeader>
                  <CardTitle>Venture Documents</CardTitle>
                  <CardDescription>Files shared by the founder</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {resources.venture.map((resource, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-sm block">{resource.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {resource.uploadedBy} · {resource.date}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Ethics Tab */}
          <TabsContent value="ethics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Agreement Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Agreement Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-chart-4/10">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-chart-4" />
                      <div>
                        <p className="font-medium">NDA Signed</p>
                        <p className="text-sm text-muted-foreground">Signed on {ethicsStatus.ndaDate}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-chart-4/10">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-chart-4" />
                      <div>
                        <p className="font-medium">Conflict of Interest</p>
                        <p className="text-sm text-muted-foreground">Status: Clear · Last reviewed {ethicsStatus.coiLastReview}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Boundary Reminders */}
              <Card className="border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" /> Boundary Reminders
                  </CardTitle>
                  <CardDescription>
                    Important guidelines for your mentoring relationship with this venture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {ethicsStatus.boundaries.map((boundary, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {boundary}
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                  <p className="text-xs text-muted-foreground">
                    If you become aware of any potential conflict or boundary issue, please 
                    <Link to="/mentor/escalation" className="text-primary hover:underline ml-1">
                      raise a concern
                    </Link> immediately.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Pulse Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Post-Session Feedback</CardTitle>
                <CardDescription>
                  Quick pulse check after your mentoring sessions (optional, confidential)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You have 1 session pending feedback from January 28, 2026.
                </p>
                <Button variant="outline">
                  Complete Pulse Survey
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MentorPortalLayout>
  );
}
