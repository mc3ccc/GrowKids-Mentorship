import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar, User, Target } from 'lucide-react';

export const MenteesList = () => {
  const mentees = [
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex@example.com',
      progress: 'On Track',
      nextSession: 'Today, 2:00 PM',
      goals: 3,
      avatar: '/placeholder.svg',
      initials: 'AT',
      subscriptionType: 'Premium'
    },
    {
      id: 2,
      name: 'Jamie Chen',
      email: 'jamie@example.com',
      progress: 'Needs Support',
      nextSession: 'Tomorrow, 10:00 AM',
      goals: 2,
      avatar: '/placeholder.svg',
      initials: 'JC',
      subscriptionType: 'Basic'
    },
    {
      id: 3,
      name: 'Morgan Davis',
      email: 'morgan@example.com',
      progress: 'Excellent',
      nextSession: 'Friday, 3:30 PM',
      goals: 5,
      avatar: '/placeholder.svg',
      initials: 'MD',
      subscriptionType: 'Free'
    }
  ];

  const getProgressBadgeVariant = (progress: string) => {
    switch (progress) {
      case 'Excellent': return 'default';
      case 'On Track': return 'secondary';
      case 'Needs Support': return 'destructive';
      default: return 'secondary';
    }
  };

  const getSubscriptionBadgeVariant = (type: string) => {
    switch (type) {
      case 'Premium': return 'default';
      case 'Basic': return 'secondary';
      case 'Free': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">My Mentees</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mentees.map((mentee) => (
            <div key={mentee.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
              <Avatar>
                <AvatarImage src={mentee.avatar} alt={mentee.name} />
                <AvatarFallback>{mentee.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {mentee.name}
                  </p>
                  <Badge variant={getSubscriptionBadgeVariant(mentee.subscriptionType)} className="text-xs">
                    {mentee.subscriptionType}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{mentee.email}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {mentee.nextSession}
                  </div>
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    {mentee.goals} goals
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <Badge variant={getProgressBadgeVariant(mentee.progress)} className="text-xs">
                  {mentee.progress}
                </Badge>
                <div className="flex space-x-1">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <User className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
