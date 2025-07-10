
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote, Heart, Target, Users } from 'lucide-react';

const MeetFounder = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Meet Our Founder
          </h1>
          <p className="text-lg text-gray-600 font-['Poppins']">
            The passionate educator behind GrowKIDs Mentorship
          </p>
        </div>

        <Card className="mb-12 border-2 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <Avatar className="h-32 w-32 lg:h-40 lg:w-40">
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-blue-100 to-green-100">
                  JD
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Poppins']">
                  John Doe
                </h2>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    Educator
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-600 to-yellow-600 text-white">
                    Mentor
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    Founder
                  </Badge>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed font-['Poppins']">
                  With over 15 years of experience in education and youth development, 
                  John has dedicated his career to empowering young minds. His passion 
                  for mentorship began when he realized the transformative power of 
                  having the right guidance at the right time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Statement */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <Quote className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <blockquote className="text-xl lg:text-2xl font-medium mb-4 font-['Poppins'] italic">
              "Every young person deserves a mentor who believes in their potential 
              and guides them toward their dreams. At GrowKIDs, we're not just 
              connecting mentors and mentees – we're building futures."
            </blockquote>
            <cite className="text-lg font-['Poppins']">- John Doe, Founder</cite>
          </CardContent>
        </Card>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins']">
                1000+
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Young lives impacted through mentorship programs
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins']">
                15 Years
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Experience in education and youth development
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins']">
                Passion
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Driven by genuine care for young people's success
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Background Story */}
        <Card className="border-2">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Poppins']">
              The Story Behind GrowKIDs
            </h3>
            <div className="space-y-4 text-gray-700 font-['Poppins']">
              <p>
                John's journey began as a high school teacher where he noticed that 
                many bright students struggled not because they lacked ability, but 
                because they lacked guidance and someone who believed in them.
              </p>
              <p>
                After years of informal mentoring and seeing incredible transformations, 
                John realized that every young person deserved access to quality mentorship, 
                regardless of their background or circumstances.
              </p>
              <p>
                GrowKIDs Mentorship was born from this vision – a platform that connects 
                passionate mentors with eager young learners, creating relationships that 
                foster growth, confidence, and success.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeetFounder;
