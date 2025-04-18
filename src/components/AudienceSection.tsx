
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Code, PenTool, Building2, School } from 'lucide-react';

const audiences = [
  {
    id: 'students',
    icon: <GraduationCap className="h-8 w-8" />,
    emoji: '🧑‍🎓',
    title: 'Students',
    description: 'Build your personal brand and get answers to your academic questions.',
    benefits: [
      'Create a digital portfolio of your work',
      'Connect with peers and mentors',
      'Get AI-powered study assistance',
      'Showcase projects to potential employers',
      'Learn from experts in your field'
    ]
  },
  {
    id: 'developers',
    icon: <Code className="h-8 w-8" />,
    emoji: '🧑‍💻',
    title: 'Developers',
    description: 'Share technical insights and get help with coding challenges.',
    benefits: [
      'Build a technical reputation',
      'Get code-specific answers',
      'Connect with other engineers',
      'Discover new technologies and approaches',
      'Share tutorials and gain followers'
    ]
  },
  {
    id: 'creators',
    icon: <PenTool className="h-8 w-8" />,
    emoji: '✍️',
    title: 'Creators',
    description: 'Write blogs and grow your audience with AI-powered optimization.',
    benefits: [
      'Optimize content with AI suggestions',
      'Grow an engaged audience',
      'Get analytics on your content performance',
      'Connect with other creators',
      'Build a monetizable following'
    ]
  },
  {
    id: 'organizations',
    icon: <Building2 className="h-8 w-8" />,
    emoji: '🏢',
    title: 'Organizations',
    description: 'Manage internal knowledge and improve team collaboration.',
    benefits: [
      'Create private knowledge bases',
      'Improve team collaboration',
      'Streamline onboarding with AI assistance',
      'Preserve institutional knowledge',
      'Enhance cross-team communication'
    ]
  },
  {
    id: 'educators',
    icon: <School className="h-8 w-8" />,
    emoji: '👩‍🏫',
    title: 'Educators',
    description: 'Create educational content and lead discussions with students.',
    benefits: [
      'Create organized course materials',
      'Foster student discussions',
      'Get AI assistance in answering questions',
      'Track student engagement',
      'Build a teaching portfolio'
    ]
  }
];

const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState('individuals');

  return (
    <section id="who-is-it-for" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is It For</h2>
          <p className="text-gray-600 text-lg">
            Our platform is designed to serve various user groups with specific features tailored to their needs.
          </p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <Tabs defaultValue="individuals" className="w-full max-w-md" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="individuals">Individual Users</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences
            .filter(audience => 
              activeTab === 'individuals' 
                ? audience.id !== 'organizations' 
                : audience.id === 'organizations' || audience.id === 'educators'
            )
            .map(audience => (
              <div 
                key={audience.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    <span className="mr-2">{audience.emoji}</span>
                    {audience.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">{audience.description}</p>
                
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-xs">
                        ✓
                      </div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        
        {activeTab === 'enterprise' && (
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Enterprise Solutions Available</h3>
            <p className="mb-6">We offer custom enterprise solutions with dedicated support, SSO, advanced analytics, and more.</p>
            <button className="bg-white text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Contact Sales for Demo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AudienceSection;
