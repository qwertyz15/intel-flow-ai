
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "You're on the list!",
        description: "Thank you for joining our beta waitlist.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Early Access Now</h2>
            <p className="text-lg md:text-xl opacity-90">
              Be the first to experience AI-powered knowledge sharing
            </p>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 px-4 bg-white/90 border-0 placeholder:text-gray-500 text-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit" 
                className="h-12 px-6 bg-white text-purple-700 hover:bg-gray-100 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : (
                  <>
                    Join Beta <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center text-white animate-fade-in">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! We'll be in touch soon.</span>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Free for individuals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Private workspaces for orgs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
