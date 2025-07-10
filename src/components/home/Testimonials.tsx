
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      age: 16,
      text: "My mentor helped me build confidence and improve my public speaking skills. Now I'm the student council president!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Alex Chen",
      age: 14,
      text: "Learning to code with my mentor has been amazing! I've already built my first website and want to become a software engineer.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      age: 17,
      text: "The study techniques my mentor taught me helped raise my grades from B's to A's. I'm now planning for college!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      age: 15,
      text: "My mentor showed me how to set and achieve goals. I went from struggling in math to actually enjoying it!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Lily Park",
      age: 13,
      text: "The leadership skills I learned helped me start a recycling club at school. We've already made a huge impact!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Jordan Williams",
      age: 16,
      text: "My mentor helped me overcome my fear of presentations. Now I actually look forward to speaking in class!",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Success Stories From Our Mentees
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Hear from young learners who've transformed their lives through mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                </div>
                
                <p className="text-gray-700 mb-4 font-['Poppins'] italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-green-100">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 font-['Poppins']">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 font-['Poppins']">
                        Age {testimonial.age}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
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
