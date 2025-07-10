
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-bounce">
          <Sparkles className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Users className="h-10 w-10 text-blue-400" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-300">
          <Target className="h-8 w-8 text-green-400" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-['Poppins'] leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                Empowering Young Minds
              </span>
              <br />
              <span className="text-gray-800">Through Mentorship</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins']">
              Connect with experienced mentors who guide young learners towards 
              personal growth, academic success, and bright futures. 
              Start your journey today!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-['Poppins'] group"
              asChild
            >
              <Link to="/auth">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 px-8 py-4 text-lg font-['Poppins']"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 font-['Poppins']">500+</div>
              <div className="text-gray-600 font-['Poppins']">Active Mentees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 font-['Poppins']">150+</div>
              <div className="text-gray-600 font-['Poppins']">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 font-['Poppins']">95%</div>
              <div className="text-gray-600 font-['Poppins']">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
