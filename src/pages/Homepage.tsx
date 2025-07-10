
import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { MentorHighlights } from '@/components/home/MentorHighlights';
import { SubscriptionPlans } from '@/components/home/SubscriptionPlans';
import { Testimonials } from '@/components/home/Testimonials';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MentorHighlights />
      <Testimonials />
      <SubscriptionPlans />
    </div>
  );
};

export default Homepage;
