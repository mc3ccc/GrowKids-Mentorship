
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Video, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UpcomingScheduleProps {
  hasSubscription?: boolean;
}

export const UpcomingSchedule = ({ hasSubscription = false }: UpcomingScheduleProps) => {
  const upcomingSessions = [
    {
      id: 1,
      title: 'Weekly Check-in',
      date: 'Today',
      time: '2:00 PM',
      type: 'Video Call',
      duration: '30 min',
      isPremium: false
    },
    {
      id: 2,
      title: 'Code Review Session',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'Video Call',
      duration: '45 min',
      isPremium: true
    },
    {
      id: 3,
      title: 'Career Planning',
      date: 'Friday',
      time: '3:30 PM',
      type: 'Video Call',
      duration: '60 min',
      isPremium: true
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
            <Link to={`/session/${session.id}`} key={session.id}>
              <div
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  session.isPremium && !hasSubscription
                    ? 'bg-muted/30 opacity-60'
                    : 'bg-muted/50'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                    {session.isPremium && !hasSubscription ? (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Video className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {session.title}
                    </p>
                    {session.isPremium && (
                      <Badge variant="outline" className="text-xs">
                        Premium
                      </Badge>
                    )}
                  </div>
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
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
