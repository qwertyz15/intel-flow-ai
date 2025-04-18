
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold">
              <span className="text-purple-700">intel</span>
              <span className="text-gray-900">flow</span>
              <span className="text-purple-700">.ai</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-purple-600 relative navigation-item">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-purple-600 relative navigation-item">
              How It Works
            </a>
            <a href="#who-is-it-for" className="text-sm font-medium text-gray-700 hover:text-purple-600 relative navigation-item">
              Who Is It For
            </a>
            <a href="#why-different" className="text-sm font-medium text-gray-700 hover:text-purple-600 relative navigation-item">
              Why We're Different
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md btn-hover-effect"
            >
              Join Beta
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#who-is-it-for" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Who Is It For
            </a>
            <a 
              href="#why-different" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Why We're Different
            </a>
            <div className="mt-4 flex flex-col space-y-3 px-3">
              <Button variant="outline" className="border-purple-600 text-purple-600 w-full justify-center">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-full justify-center">
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
