
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "I shared my first blog here and within 2 days got feedback from 5 new connections. The summary feature made it more discoverable!",
    name: "Ahmed Rahman",
    title: "Computer Science Student",
    avatarSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The AI-powered forum gives answers that are incredibly accurate. It's like having a team of experts available 24/7 to help with my projects.",
    name: "Sarah Chen",
    title: "UX Designer",
    avatarSrc: "https://i.pravatar.cc/150?img=20"
  },
  {
    quote: "As a startup founder, the knowledge management features have been invaluable. We've reduced our documentation time by 40%.",
    name: "Miguel Rodriguez",
    title: "Tech Entrepreneur",
    avatarSrc: "https://i.pravatar.cc/150?img=52"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Users Say</h2>
          <p className="text-gray-600 text-lg">
            Hear from our beta testers who are already experiencing the power of our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 relative">
                {/* Large quote mark background */}
                <div className="absolute top-4 left-4 text-8xl text-purple-100 font-serif leading-none z-0">
                  "
                </div>
                
                <div className="relative z-10">
                  <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
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

export default TestimonialSection;
