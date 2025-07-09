
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ReportsChart = () => {
  const data = [
    { name: 'Jan', sessions: 45, users: 120 },
    { name: 'Feb', sessions: 52, users: 135 },
    { name: 'Mar', sessions: 48, users: 142 },
    { name: 'Apr', sessions: 61, users: 158 },
    { name: 'May', sessions: 55, users: 167 },
    { name: 'Jun', sessions: 67, users: 185 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Platform Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Sessions"
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                name="Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
