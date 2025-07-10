
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      icon: Star,
      description: "Perfect for getting started",
      features: [
        "1 session per month",
        "Basic resources access",
        "Standard mentors",
        "Community support",
        "Email support"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-100 to-gray-200"
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      icon: Crown,
      description: "For serious young learners",
      features: [
        "Unlimited sessions",
        "Premium resources access",
        "Priority mentor matching",
        "1-on-1 support",
        "Progress tracking",
        "Goal setting tools"
      ],
      buttonText: "Start Premium",
      popular: true,
      gradient: "from-blue-100 to-green-100"
    },
    {
      name: "One-Time",
      price: "$50",
      period: "/session",
      icon: Zap,
      description: "Pay as you go flexibility",
      features: [
        "Single session access",
        "Choose your mentor",
        "No monthly commitment",
        "Basic resources",
        "Session recording"
      ],
      buttonText: "Book Session",
      popular: false,
      gradient: "from-yellow-100 to-orange-100"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Flexible options designed to fit every young learner's needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            
            return (
              <Card 
                key={plan.name}
                className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className={`text-center bg-gradient-to-br ${plan.gradient} rounded-t-lg`}>
                  <div className="mx-auto mb-2 p-3 rounded-full bg-white/70">
                    <IconComponent className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-['Poppins']">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gray-900 font-['Poppins']">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 font-['Poppins']">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center font-['Poppins']">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-['Poppins'] ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link to="/auth">
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
