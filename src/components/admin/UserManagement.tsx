
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Shield, Users, Crown } from 'lucide-react';

export const UserManagement = () => {
  const users = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      email: 'sarah@example.com',
      role: 'Mentor',
      status: 'Active',
      joinDate: '2024-01-15',
      mentees: 8,
      avatar: '/placeholder.svg',
      initials: 'SM'
    },
    {
      id: 2,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      role: 'Mentee',
      status: 'Active',
      joinDate: '2024-02-20',
      subscription: 'Premium',
      avatar: '/placeholder.svg',
      initials: 'AJ'
    },
    {
      id: 3,
      name: 'Jamie Chen',
      email: 'jamie@example.com',
      role: 'Mentee',
      status: 'Inactive',
      joinDate: '2024-01-10',
      subscription: 'Basic',
      avatar: '/placeholder.svg',
      initials: 'JC'
    }
  ];

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'Mentor': return 'default';
      case 'Admin': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    return status === 'Active' ? 'default' : 'secondary';
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Mentor': return Crown;
      case 'Admin': return Shield;
      default: return Users;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => {
            const RoleIcon = getRoleIcon(user.role);
            return (
              <div key={user.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {user.name}
                    </p>
                    <Badge variant={getRoleBadgeVariant(user.role)} className="text-xs">
                      <RoleIcon className="h-3 w-3 mr-1" />
                      {user.role}
                    </Badge>
                    <Badge variant={getStatusBadgeVariant(user.status)} className="text-xs">
                      {user.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{user.email}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Joined: {user.joinDate}</span>
                    {user.mentees && <span>{user.mentees} mentees</span>}
                    {user.subscription && <span>{user.subscription} plan</span>}
                  </div>
                </div>
                
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
