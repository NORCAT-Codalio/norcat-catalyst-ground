import { MentorPortalLayout } from '@/components/mentor-portal/MentorPortalLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bell,
  Calendar,
  FileText,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { useState } from 'react';

const notifications = [
  {
    id: '1',
    type: 'meeting',
    title: 'Meeting Reminder',
    message: 'You have a session with RockPulse Analytics tomorrow at 2:00 PM.',
    time: '1 hour ago',
    read: false,
    link: '/mentor/meetings',
  },
  {
    id: '2',
    type: 'action',
    title: 'Action Required',
    message: 'Q1 2026 Conflict of Interest disclosure is due by February 28.',
    time: '2 hours ago',
    read: false,
    urgent: true,
    link: '/mentor/ethics',
  },
  {
    id: '3',
    type: 'venture',
    title: 'New Venture Assignment',
    message: 'You have been added to the mentor team for TunnelTech Solutions.',
    time: '1 day ago',
    read: true,
    link: '/mentor/ventures/3',
  },
  {
    id: '4',
    type: 'meeting',
    title: 'Meeting Summary Posted',
    message: 'MineSafe AI has posted the summary from your last session.',
    time: '2 days ago',
    read: true,
    link: '/mentor/ventures/2',
  },
  {
    id: '5',
    type: 'training',
    title: 'Training Available',
    message: 'New resource available: "Managing Difficult Conversations"',
    time: '3 days ago',
    read: true,
    link: '/mentor/resources',
  },
  {
    id: '6',
    type: 'announcement',
    title: 'Program Announcement',
    message: 'Quarterly mentor networking event scheduled for March 15.',
    time: '4 days ago',
    read: true,
    link: '/mentor',
  },
];

export default function MentorNotifications() {
  const [notificationState, setNotificationState] = useState(notifications);

  const markAsRead = (id: string) => {
    setNotificationState(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotificationState(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'meeting':
        return <Calendar className="h-5 w-5" />;
      case 'action':
        return <AlertCircle className="h-5 w-5" />;
      case 'venture':
        return <Users className="h-5 w-5" />;
      case 'training':
        return <FileText className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const unreadCount = notificationState.filter(n => !n.read).length;

  return (
    <MentorPortalLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground mt-1">
              Stay updated on your mentoring activities and program announcements.
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Mark All Read
            </Button>
          )}
        </div>

        {/* Unread Count */}
        {unreadCount > 0 && (
          <Card className="border-accent/50 bg-accent/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-accent" />
                <span className="font-medium">
                  You have {unreadCount} unread notification{unreadCount > 1 ? 's' : ''}
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {notificationState.map(notification => (
            <Card
              key={notification.id}
              className={`transition-colors cursor-pointer hover:bg-muted/30 ${
                !notification.read ? 'border-accent/50 bg-accent/5' : ''
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg ${
                      notification.urgent
                        ? 'bg-destructive/10 text-destructive'
                        : !notification.read
                        ? 'bg-accent/10 text-accent'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-semibold ${!notification.read ? '' : 'text-muted-foreground'}`}>
                        {notification.title}
                      </h3>
                      {notification.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {notification.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {notificationState.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">No notifications</h3>
              <p className="text-muted-foreground">
                You're all caught up! Check back later for updates.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </MentorPortalLayout>
  );
}
