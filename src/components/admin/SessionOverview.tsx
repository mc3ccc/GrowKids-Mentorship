
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Video, Calendar, Users } from 'lucide-react';

export const SessionOverview = () => {
  const sessions = [
    {
      id: 1,
      mentor: 'Dr. Sarah Mitchell',
      mentee: 'Alex Johnson',
      title: 'Career Planning Session',
      date: 'Today',
      time: '2:00 PM',
      duration: '60 min',
      status: 'In Progress'
    },
    {
      id: 2,
      mentor: 'Prof. David Chen',
      mentee: 'Jamie Wilson',
      title: 'Technical Skills Review',
      date: 'Today',
      time: '3:30 PM',
      duration: '45 min',
      status: 'Scheduled'
    },
    {
      id: 3,
      mentor: 'Dr. Maria Garcia',
      mentee: 'Taylor Brown',
      title: 'Goal Setting Workshop',
      date: 'Tomorrow',
      time: '10:00 AM',
      duration: '30 min',
      status: 'Confirmed'
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'In Progress': return 'default';
      case 'Confirmed': return 'secondary';
      case 'Scheduled': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Session Overview</CardTitle>
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
                <div className="text-xs text-muted-foreground mb-1">
                  {session.mentor} → {session.mentee}
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
