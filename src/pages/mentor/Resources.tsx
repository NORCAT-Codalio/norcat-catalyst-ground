import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Search,
  FileText,
  Video,
  BookOpen,
  Download,
  ExternalLink,
  FolderOpen,
  Clock,
} from 'lucide-react';
import { useState } from 'react';

const resources = {
  training: [
    {
      id: '1',
      title: 'Effective Mentoring Fundamentals',
      description: 'Core principles of team-based venture mentoring based on the MIT VMS model.',
      type: 'video',
      duration: '45 min',
      required: true,
      completed: true,
    },
    {
      id: '2',
      title: 'Ethics & Boundaries in Mentoring',
      description: 'Understanding confidentiality, conflicts of interest, and professional boundaries.',
      type: 'video',
      duration: '30 min',
      required: true,
      completed: true,
    },
    {
      id: '3',
      title: 'Asking Powerful Questions',
      description: 'Techniques for guiding founders through discovery without prescribing solutions.',
      type: 'document',
      duration: '20 min read',
      required: false,
      completed: false,
    },
    {
      id: '4',
      title: 'Managing Difficult Conversations',
      description: 'How to deliver constructive feedback and navigate challenging mentoring situations.',
      type: 'video',
      duration: '25 min',
      required: false,
      completed: false,
    },
  ],
  templates: [
    {
      id: '5',
      title: 'Meeting Agenda Template',
      description: 'Standard agenda format for venture mentoring sessions.',
      type: 'document',
      downloadUrl: '#',
    },
    {
      id: '6',
      title: 'Session Summary Template',
      description: 'Post-session documentation template for founder-led summaries.',
      type: 'document',
      downloadUrl: '#',
    },
    {
      id: '7',
      title: 'Action Item Tracker',
      description: 'Spreadsheet template for tracking mentoring action items.',
      type: 'document',
      downloadUrl: '#',
    },
    {
      id: '8',
      title: 'Conflict of Interest Disclosure Form',
      description: 'Required form for disclosing potential conflicts with ventures.',
      type: 'document',
      downloadUrl: '#',
    },
  ],
  guides: [
    {
      id: '9',
      title: 'NORCAT Mentor Handbook',
      description: 'Complete guide to the NORCAT Venture Mentoring Program policies and procedures.',
      type: 'document',
      pages: 45,
    },
    {
      id: '10',
      title: 'Lead Mentor Responsibilities',
      description: 'Specific duties and expectations for lead mentors on venture teams.',
      type: 'document',
      pages: 8,
    },
    {
      id: '11',
      title: 'Mining Industry Overview',
      description: 'Background on the mining technology sector for mentors new to the industry.',
      type: 'document',
      pages: 22,
    },
    {
      id: '12',
      title: 'Venture Stage Definitions',
      description: 'Understanding startup stages from idea to scale-up.',
      type: 'document',
      pages: 6,
    },
  ],
};

export default function MentorResources() {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'document':
        return <FileText className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resources</h1>
          <p className="text-muted-foreground mt-1">
            Training materials, templates, and guides for effective mentoring.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="training" className="space-y-6">
          <TabsList>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="training" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.training.map(resource => (
                <Card key={resource.id} className={resource.completed ? 'bg-muted/20' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${resource.completed ? 'bg-chart-4/10 text-chart-4' : 'bg-accent/10 text-accent'}`}>
                        {getIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-semibold">{resource.title}</h3>
                          {resource.required && (
                            <Badge variant="secondary" className="text-xs">Required</Badge>
                          )}
                          {resource.completed && (
                            <Badge className="bg-chart-4/20 text-chart-4 text-xs">Completed</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {resource.duration}
                          </div>
                          <Button variant={resource.completed ? 'outline' : 'default'} size="sm">
                            {resource.completed ? 'Review' : 'Start'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.templates.map(resource => (
                <Card key={resource.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        {getIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.guides.map(resource => (
                <Card key={resource.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-chart-5/10 text-chart-5">
                        {getIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {resource.pages} pages
                          </span>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" /> View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MentorPortalLayout>
  );
}
