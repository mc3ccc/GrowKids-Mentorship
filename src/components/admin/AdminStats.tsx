
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';

export const AdminStats = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: Users,
      description: '+12% from last month',
      trend: 'up'
    },
    {
      title: 'Active Sessions',
      value: '89',
      icon: Calendar,
      description: '156 this week',
      trend: 'up'
    },
    {
      title: 'Growth Rate',
      value: '23%',
      icon: TrendingUp,
      description: '+4% from last month',
      trend: 'up'
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: DollarSign,
      description: '+8% from last month',
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
