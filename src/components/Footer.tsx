
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <a href="#" className="text-xl font-bold">
              <span className="text-purple-700">intel</span>
              <span className="text-gray-900">flow</span>
              <span className="text-purple-700">.ai</span>
            </a>
            <p className="mt-4 text-gray-600 text-sm">
              AI-powered knowledge sharing and discovery platform for individuals and organizations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Newsletter signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Stay Updated</h3>
            <p className="mt-4 text-sm text-gray-600">Get the latest news and updates.</p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full min-w-0 px-3 py-2 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <Mail size={16} />
                    <span className="sr-only">Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} intelflow.ai. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
