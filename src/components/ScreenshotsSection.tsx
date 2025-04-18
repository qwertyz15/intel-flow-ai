
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Users, MessageCircle, User, Inbox } from 'lucide-react';

const screenshots = [
  {
    id: 'blog-editor',
    title: 'Blog Editor',
    description: 'Write beautiful blogs with AI assistance for better content.',
    icon: <FileText className="h-5 w-5" />,
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&h=600&q=80',
  },
  {
    id: 'feed-layout',
    title: 'Feed Layout',
    description: 'Discover personalized content from people and topics you follow.',
    icon: <Users className="h-5 w-5" />,
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&h=600&q=80',
  },
  {
    id: 'qa-forum',
    title: 'Q&A with AI',
    description: 'Get answers from community members and AI-powered suggestions.',
    icon: <MessageCircle className="h-5 w-5" />,
    imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&h=600&q=80',
  },
  {
    id: 'user-profile',
    title: 'User Profile',
    description: 'Showcase your expertise and track your community contributions.',
    icon: <User className="h-5 w-5" />,
    imageSrc: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=900&h=600&q=80',
  },
  {
    id: 'inbox',
    title: 'Chat & Inbox',
    description: 'Communicate privately with other members of the community.',
    icon: <Inbox className="h-5 w-5" />,
    imageSrc: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&h=600&q=80',
  }
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Preview</h2>
          <p className="text-gray-600 text-lg">
            Experience our intuitive interface designed for knowledge sharing and discovery.
          </p>
        </div>
        
        <Tabs defaultValue="blog-editor" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/80">
              {screenshots.map((screen) => (
                <TabsTrigger key={screen.id} value={screen.id} className="flex items-center gap-2 data-[state=active]:bg-white">
                  {screen.icon}
                  <span className="hidden sm:inline">{screen.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {screenshots.map((screen) => (
            <TabsContent key={screen.id} value={screen.id}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-2/3">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                    <CardContent className="p-1">
                      <div className="relative">
                        <div className="w-full h-12 bg-gray-100 absolute top-0 left-0 flex items-center px-4 space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-full max-w-sm h-6 bg-white rounded-md mx-auto"></div>
                        </div>
                        <img 
                          src={screen.imageSrc} 
                          alt={screen.title} 
                          className="w-full h-auto object-cover rounded-b-lg pt-12"
                        />
                        {screen.id === 'qa-forum' && (
                          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-purple-100">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm">
                                AI
                              </div>
                              <div className="text-sm">
                                <p className="font-medium">AI Assistant</p>
                                <p className="text-xs text-gray-600">Generating answer...</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    {screen.icon}
                    <span className="ml-2">{screen.title}</span>
                  </h3>
                  <p className="text-gray-600 mb-6">{screen.description}</p>
                  <ul className="space-y-3">
                    {screen.id === 'blog-editor' && (
                      <>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Real-time AI content suggestions</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Auto-generated SEO metadata</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Rich media embedding</span>
                        </li>
                      </>
                    )}
                    {screen.id === 'feed-layout' && (
                      <>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Personalized content feeds</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>AI-powered topic recommendations</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Reading time estimates</span>
                        </li>
                      </>
                    )}
                    {screen.id === 'qa-forum' && (
                      <>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>AI-enhanced answers</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Citation of relevant sources</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Smart thread organization</span>
                        </li>
                      </>
                    )}
                    {screen.id === 'user-profile' && (
                      <>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Knowledge graph visualization</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Contribution analytics</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Achievement badges</span>
                        </li>
                      </>
                    )}
                    {screen.id === 'inbox' && (
                      <>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Private messaging</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Discussion thread notifications</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">✓</div>
                          <span>Smart message prioritization</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
