
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, Calendar, Target, BookOpen, MessageSquare } from 'lucide-react';

export const Navigation = () => {
  const navItems = [
    { label: 'Home', icon: Home, active: true },
    { label: 'Sessions', icon: Calendar },
    { label: 'Goals', icon: Target },
    { label: 'Resource Hub', icon: BookOpen },
    { label: 'Messages', icon: MessageSquare },
  ];

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Navigation items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Right side - User profile */}
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">Alex Johnson</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
