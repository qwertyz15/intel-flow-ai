
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import AudienceSection from '@/components/AudienceSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialSection from '@/components/TestimonialSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <AudienceSection />
      <ComparisonSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
