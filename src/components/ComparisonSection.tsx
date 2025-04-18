
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section id="why-different" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're Different</h2>
          <p className="text-gray-600 text-lg">
            Our AI-native approach transforms how knowledge is shared and consumed online.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="col-span-1"></div>
            <div className="font-medium text-gray-600">Standard Platforms</div>
            <div className="font-medium text-purple-600">intelflow.ai (AI-Native)</div>
          </div>
          
          <div className="space-y-6">
            {/* Comparison Row 1 */}
            <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="text-gray-800 font-medium">Content Creation</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <XCircle className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Static blog tools</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm text-purple-600 mt-1">Dynamic AI summaries and tagging</p>
              </div>
            </div>
            
            {/* Comparison Row 2 */}
            <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="text-gray-800 font-medium">Content Discovery</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <XCircle className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Manual discovery process</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm text-purple-600 mt-1">Personalized AI-powered feeds</p>
              </div>
            </div>
            
            {/* Comparison Row 3 */}
            <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="text-gray-800 font-medium">Knowledge Management</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <XCircle className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Siloed knowledge bases</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm text-purple-600 mt-1">Centralized, searchable AI-enhanced knowledge</p>
              </div>
            </div>
            
            {/* Comparison Row 4 */}
            <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="text-gray-800 font-medium">User Engagement</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <XCircle className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">No incentives for quality</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm text-purple-600 mt-1">Leaderboards, badges, and monetization</p>
              </div>
            </div>
            
            {/* Comparison Row 5 */}
            <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
              <div className="text-gray-800 font-medium">Q&A Experience</div>
              <div className="text-center">
                <div className="flex justify-center">
                  <XCircle className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Generic community answers</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-sm text-purple-600 mt-1">GPT-enhanced contextual answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
