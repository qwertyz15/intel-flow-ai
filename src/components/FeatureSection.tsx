
import React from 'react';
import { PenLine, Brain, MessageSquare, Lock, Trophy } from 'lucide-react';

const features = [
  {
    icon: <PenLine className="h-6 w-6 text-purple-500" />,
    emoji: "✍️",
    title: "Write Smarter",
    description: "AI-summarized, spam-checked, and automatically tagged blogs for maximum discoverability."
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    emoji: "🧠",
    title: "Ask AI Anything",
    description: "GPT answers questions using knowledge from community blogs & forum discussions."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-purple-500" />,
    emoji: "💬",
    title: "Discuss in Forums",
    description: "Public and private spaces with structured threads for focused conversations."
  },
  {
    icon: <Lock className="h-6 w-6 text-purple-500" />,
    emoji: "🔒",
    title: "Private Workspaces",
    description: "Build your own organizational space for internal discussions and knowledge sharing."
  },
  {
    icon: <Trophy className="h-6 w-6 text-purple-500" />,
    emoji: "🏆",
    title: "Get Recognized",
    description: "Earn ranks, XP, and showcase your expertise to build your professional profile."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Product Highlights
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform combines the power of AI with community knowledge to create a unique experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-xl p-6 border border-purple-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="mr-2">{feature.emoji}</span>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
