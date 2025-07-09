
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Video, Calendar } from 'lucide-react';

export const UpcomingSchedule = () => {
  const upcomingSessions = [
    {
      id: 1,
      title: 'Weekly Check-in',
      date: 'Today',
      time: '2:00 PM',
      type: 'Video Call',
      duration: '30 min'
    },
    {
      id: 2,
      title: 'Code Review Session',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'Video Call',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Career Planning',
      date: 'Friday',
      time: '3:30 PM',
      type: 'Video Call',
      duration: '60 min'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Video className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {session.title}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
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
