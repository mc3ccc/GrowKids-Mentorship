
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Home, Calendar, Target, BookOpen, MessageSquare, Users, Settings, BarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  userType?: 'mentee' | 'mentor' | 'admin';
}

export const Navigation = ({ userType = 'mentee' }: NavigationProps) => {
  const location = useLocation();

  const getNavItems = () => {
    const baseItems = [
      { label: 'Home', icon: Home, path: '/', active: location.pathname === '/' },
      { label: 'Sessions', icon: Calendar, path: '/sessions' },
      { label: 'Messages', icon: MessageSquare, path: '/messages' },
    ];

    if (userType === 'mentee') {
      return [
        ...baseItems.slice(0, 2),
        { label: 'Goals', icon: Target, path: '/goals' },
        { label: 'Resource Hub', icon: BookOpen, path: '/resources' },
        baseItems[2],
      ];
    }

    if (userType === 'mentor') {
      return [
        { label: 'Dashboard', icon: Home, path: '/mentor', active: location.pathname === '/mentor' },
        { label: 'Mentees', icon: Users, path: '/mentor/mentees' },
        { label: 'Sessions', icon: Calendar, path: '/mentor/sessions' },
        { label: 'Resources', icon: BookOpen, path: '/mentor/resources' },
        { label: 'Messages', icon: MessageSquare, path: '/mentor/messages' },
      ];
    }

    if (userType === 'admin') {
      return [
        { label: 'Dashboard', icon: Home, path: '/admin', active: location.pathname === '/admin' },
        { label: 'Users', icon: Users, path: '/admin/users' },
        { label: 'Analytics', icon: BarChart, path: '/admin/analytics' },
        { label: 'Sessions', icon: Calendar, path: '/admin/sessions' },
        { label: 'Settings', icon: Settings, path: '/admin/settings' },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();
  const userName = userType === 'mentor' ? 'Dr. Sarah Mitchell' : 
                   userType === 'admin' ? 'Admin User' : 'Alex Johnson';
  const userInitials = userType === 'mentor' ? 'SM' : 
                       userType === 'admin' ? 'AU' : 'AJ';

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Navigation items */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-foreground">MentorHub</h2>
              {userType !== 'mentee' && (
                <Badge variant="secondary" className="text-xs">
                  {userType === 'mentor' ? 'Mentor' : 'Admin'}
                </Badge>
              )}
            </div>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className="flex items-center space-x-2"
                asChild
              >
                <Link to={item.path}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Right side - User profile */}
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
