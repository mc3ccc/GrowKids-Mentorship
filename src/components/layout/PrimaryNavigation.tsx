
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/branding/Logo';
import { Menu, X, User } from 'lucide-react';

export const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Hide navigation on dashboard routes
  const isDashboardRoute = location.pathname.includes('/dashboard') || 
                          location.pathname === '/mentor' || 
                          location.pathname === '/admin';
  
  if (isDashboardRoute) return null;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Meet Founder', path: '/meet-founder' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="h-10 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-['Poppins']">
                GrowKIDs
              </h1>
              <p className="text-xs text-muted-foreground font-['Poppins']">
                Mentorship
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary font-['Poppins'] ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/auth">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary font-['Poppins'] ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
