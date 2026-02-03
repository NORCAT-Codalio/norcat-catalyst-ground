import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Calendar,
  Search,
  ArrowRight,
  Users,
  Target,
  Clock,
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ventures = [
  {
    id: '1',
    name: 'RockPulse Analytics',
    stage: 'Pilot',
    description: 'AI-powered predictive maintenance for mining equipment using acoustic and vibration sensors.',
    founders: [
      { name: 'Dr. Elena Vasquez', role: 'CEO', avatar: null },
    ],
    goals: ['Secure Series A funding', 'Expand to 3 mining sites', 'Build enterprise sales team'],
    nextMeeting: '2026-02-05T14:00:00',
    isLeadMentor: true,
    mentorTeam: ['You (Lead)', 'Michael Chen', 'Sarah Williams'],
    lastSession: '2026-01-28',
    totalSessions: 12,
  },
  {
    id: '2',
    name: 'MineSafe AI',
    stage: 'MVP',
    description: 'Computer vision platform for real-time underground safety monitoring and hazard detection.',
    founders: [
      { name: 'James Chen', role: 'CEO', avatar: null },
      { name: 'Sarah Liu', role: 'CTO', avatar: null },
    ],
    goals: ['Complete MVP', 'Sign first pilot customer', 'Raise seed round'],
    nextMeeting: '2026-02-07T10:00:00',
    isLeadMentor: false,
    mentorTeam: ['Robert Johnson (Lead)', 'You', 'Lisa Park'],
    lastSession: '2026-01-30',
    totalSessions: 6,
  },
  {
    id: '3',
    name: 'TunnelTech Solutions',
    stage: 'Pre-Seed',
    description: 'Automated ventilation optimization systems for underground mining operations.',
    founders: [
      { name: 'Michael Okonkwo', role: 'Founder', avatar: null },
    ],
    goals: ['Validate technical approach', 'Build prototype', 'Identify target customers'],
    nextMeeting: null,
    isLeadMentor: false,
    mentorTeam: ['Amanda White (Lead)', 'You'],
    lastSession: '2026-01-15',
    totalSessions: 3,
  },
];

export default function MentorVentures() {
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Not scheduled';
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const filteredVentures = ventures.filter(v =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Ventures</h1>
          <p className="text-muted-foreground mt-1">
            Ventures you are assigned to mentor. Click on a venture to access its workspace.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search ventures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Ventures List */}
        <div className="space-y-4">
          {filteredVentures.map(venture => (
            <Card key={venture.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left: Venture Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="bg-accent/10 text-accent text-lg">
                          {venture.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-semibold">{venture.name}</h3>
                          {venture.isLeadMentor && (
                            <Badge className="bg-accent text-accent-foreground">
                              Lead Mentor
                            </Badge>
                          )}
                          <Badge variant="outline">{venture.stage}</Badge>
                        </div>
                        <p className="text-muted-foreground mt-1">
                          {venture.description}
                        </p>
                      </div>
                    </div>

                    {/* Founders */}
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Founders:</span>
                      {venture.founders.map((founder, idx) => (
                        <span key={founder.name} className="text-sm">
                          {founder.name} ({founder.role}){idx < venture.founders.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>

                    {/* Goals */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Mentoring Goals</span>
                      </div>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-6">
                        {venture.goals.map((goal, idx) => (
                          <li key={idx}>{goal}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Mentor Team */}
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Mentor Team: {venture.mentorTeam.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Right: Stats & Actions */}
                  <div className="lg:w-64 space-y-4">
                    <Card className="bg-muted/30">
                      <CardContent className="pt-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Next Meeting</span>
                          <span className={venture.nextMeeting ? 'font-medium' : 'text-muted-foreground'}>
                            {venture.nextMeeting ? formatDate(venture.nextMeeting).split(',')[0] : 'None'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Last Session</span>
                          <span>{venture.lastSession}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total Sessions</span>
                          <span className="font-medium">{venture.totalSessions}</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Button className="w-full" asChild>
                      <Link to={`/mentor/ventures/${venture.id}`}>
                        Open Workspace <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVentures.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">No ventures found</h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? 'Try adjusting your search query.'
                  : 'You have not been assigned to any ventures yet.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </MentorPortalLayout>
  );
}
