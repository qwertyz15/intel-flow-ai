
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] pt-24 lg:pt-32 pb-16 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 -z-10"></div>
      <div className="absolute right-0 top-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Where Knowledge Meets AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create blogs, ask questions, and discover insights – all powered by GPT technology
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Join Beta Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] border-purple-200"
            >
              <PlayCircle className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
          {[
            { title: "AI Writing", icon: "📝" },
            { title: "Smart Forums", icon: "💬" },
            { title: "Knowledge Base", icon: "📚" },
            { title: "Team Spaces", icon: "👥" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-sm font-medium text-gray-700">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
