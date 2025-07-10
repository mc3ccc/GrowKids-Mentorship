
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export const MentorHighlights = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: ["Leadership", "Career Guidance"],
      image: "/placeholder.svg",
      rating: 4.9,
      sessions: 150,
      bio: "Leadership coach with 10+ years experience"
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: ["Coding", "Technology"],
      image: "/placeholder.svg",
      rating: 4.8,
      sessions: 200,
      bio: "Senior software engineer at top tech company"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      expertise: ["Study Skills", "Academic Success"],
      image: "/placeholder.svg",
      rating: 4.9,
      sessions: 180,
      bio: "Educational specialist and former teacher"
    },
    {
      id: 4,
      name: "David Thompson",
      expertise: ["Communication", "Public Speaking"],
      image: "/placeholder.svg",
      rating: 4.7,
      sessions: 120,
      bio: "Professional speaker and communication coach"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Meet Our Amazing Mentors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Connect with experienced professionals who are passionate about guiding young minds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src={mentor.image} alt={mentor.name} />
                  <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-100 to-green-100">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2 font-['Poppins']">
                  {mentor.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 font-['Poppins']">
                  {mentor.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {mentor.expertise.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-r from-blue-100 to-green-100 text-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{mentor.rating}</span>
                  </div>
                  <div>
                    {mentor.sessions} sessions
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
