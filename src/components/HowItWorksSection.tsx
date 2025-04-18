
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Write or Ask',
    description: 'Create a blog post or ask a question in the community forum. Our platform supports markdown, code snippets, and rich media.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    number: '02',
    title: 'AI Enhances Content',
    description: 'Our AI generates summaries, tags, and suggestions to improve your content and increase discoverability.',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    number: '03',
    title: 'Community Engages',
    description: 'Get feedback, answers, and insights from the community. Our AI helps moderate and highlight valuable responses.',
    imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    number: '04',
    title: 'Grow Your Profile',
    description: 'Gain visibility, followers, and rankings as you contribute quality content and helpful responses.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Our intuitive platform makes knowledge sharing and discovery seamless.
          </p>
        </div>
        
        <div className="space-y-20 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg blur-sm opacity-30"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-white shadow-lg">
                    <img 
                      src={step.imageSrc} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                          <ArrowRight className="h-6 w-6 text-purple-500 transform rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex flex-col">
                  <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                  <h3 className="text-2xl font-bold mb-4 -mt-8">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
