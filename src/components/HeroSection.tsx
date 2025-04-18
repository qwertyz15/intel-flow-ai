
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Where <span className="gradient-text">Knowledge</span> Meets <span className="gradient-text">AI</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Create blogs, ask questions, and discover insights – all powered by GPT technology. Transform how you share and consume knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md w-full sm:w-auto btn-hover-effect"
              >
                Join Beta <ArrowRight size={16} className="ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-200 text-gray-700 hover:bg-purple-50 w-full sm:w-auto"
              >
                <PlayCircle size={16} className="mr-2 text-purple-500" /> See How It Works
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Trusted by students, creators & early startups
            </p>
          </div>
          
          {/* Right side image/animation */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-lg p-4 overflow-hidden animate-float">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Platform Interface" 
                className="rounded w-full h-auto shadow-inner"
              />
              
              {/* Overlaid UI elements */}
              <div className="absolute top-12 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-purple-100 pulse-glow">
                <span className="text-sm font-medium text-gray-800">AI summarizing...</span>
              </div>
              
              <div className="absolute bottom-10 left-12 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                <span className="text-xs font-medium text-purple-600">✓ Knowledge indexed</span>
              </div>
            </div>
            
            {/* Small floating badges */}
            <div className="hidden sm:block absolute -left-4 top-1/4 bg-white p-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm">
                  AI
                </div>
                <span className="text-xs font-medium text-gray-800">GPT Enhanced</span>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -right-2 bottom-1/4 bg-white p-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium text-gray-800">Insights</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm">
                  +1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
