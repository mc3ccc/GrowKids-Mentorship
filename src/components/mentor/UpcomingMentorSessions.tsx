
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Video, Calendar, User } from 'lucide-react';

export const UpcomingMentorSessions = () => {
  const sessions = [
    {
      id: 1,
      title: 'Career Planning Session',
      mentee: 'Alex Thompson',
      date: 'Today',
      time: '2:00 PM',
      duration: '60 min',
      type: 'Video Call',
      status: 'Confirmed'
    },
    {
      id: 2,
      title: 'Code Review & Feedback',
      mentee: 'Jamie Chen',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '45 min',
      type: 'Video Call',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Goal Setting Workshop',
      mentee: 'Morgan Davis',
      date: 'Friday',
      time: '3:30 PM',
      duration: '30 min',
      type: 'Video Call',
      status: 'Confirmed'
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    return status === 'Confirmed' ? 'default' : 'secondary';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Video className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {session.title}
                  </p>
                  <Badge variant={getStatusBadgeVariant(session.status)} className="text-xs">
                    {session.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {session.mentee}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {session.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {session.time}
                  </div>
                  <span>{session.duration}</span>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Join
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
