
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users, Star, Award, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Guidance",
      description: "Every interaction is rooted in genuine care and understanding for young people's unique journeys."
    },
    {
      icon: Target,
      title: "Goal-Oriented Growth",
      description: "We help young learners set meaningful goals and provide the support needed to achieve them."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Building a supportive community where mentors and mentees thrive together."
    },
    {
      icon: Star,
      title: "Excellence in Mentorship",
      description: "We maintain high standards in mentor selection and training to ensure quality experiences."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            About GrowKIDs Mentorship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
            We're on a mission to connect young learners with experienced mentors, 
            fostering personal growth, academic success, and bright futures through 
            meaningful relationships.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins']">
                Our Mission
              </h2>
              <p className="text-gray-700 font-['Poppins']">
                To empower young minds through meaningful mentorship relationships, 
                providing personalized guidance, support, and resources that help 
                students unlock their potential and achieve their dreams.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-8">
              <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins']">
                Our Vision
              </h2>
              <p className="text-gray-700 font-['Poppins']">
                A world where every young person has access to quality mentorship, 
                creating a generation of confident, capable, and caring individuals 
                who are equipped to make positive impacts in their communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-['Poppins']">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-full">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Poppins']">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 font-['Poppins']">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 font-['Poppins']">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Poppins']">500+</div>
                <div className="text-blue-100 font-['Poppins']">Active Mentees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Poppins']">150+</div>
                <div className="text-blue-100 font-['Poppins']">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Poppins']">5000+</div>
                <div className="text-blue-100 font-['Poppins']">Sessions Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 font-['Poppins']">95%</div>
                <div className="text-blue-100 font-['Poppins']">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-['Poppins']">
            How GrowKIDs Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white font-['Poppins']">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                  Sign Up & Match
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Create your profile and get matched with a mentor who shares your interests and goals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white font-['Poppins']">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                  Connect & Learn
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Schedule regular sessions, access resources, and build a meaningful relationship with your mentor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white font-['Poppins']">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Poppins']">
                  Grow & Succeed
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Track your progress, achieve your goals, and unlock your full potential with ongoing support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-green-50">
          <CardContent className="p-8">
            <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Poppins']">
              Ready to Start Growing?
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-['Poppins']">
              Join thousands of young learners who are already transforming their lives through mentorship
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
