
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, Target, TrendingUp } from 'lucide-react';

export const MentorStats = () => {
  const stats = [
    {
      title: 'Active Mentees',
      value: '8',
      icon: Users,
      description: '+2 this month',
      trend: 'up'
    },
    {
      title: 'Sessions This Month',
      value: '24',
      icon: Calendar,
      description: '3 scheduled today',
      trend: 'up'
    },
    {
      title: 'Goals Completed',
      value: '15',
      icon: Target,
      description: '5 in progress',
      trend: 'up'
    },
    {
      title: 'Success Rate',
      value: '92%',
      icon: TrendingUp,
      description: '+5% from last month',
      trend: 'up'
    }
  ];

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
