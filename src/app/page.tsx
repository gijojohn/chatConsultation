import React from 'react';
import { MessageCircle, Heart, Clock, Lock } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-white shadow-sm mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 block md:grid md:grid-cols-3 items-center">
          <div className="text-xl font-semibold text-blue-600">
            TalkItOut
          </div>
          
          <div className="text-right md:text-center">
            <button className="inline-block px-4 py-2 rounded bg-gray-900 text-white">
              Home
            </button>
            <button className="inline-block ml-8 px-3 py-2 text-gray-600 hover:text-gray-900">
              About Us
            </button>
            <button className="inline-block ml-8 px-3 py-2 text-gray-600 hover:text-gray-900">
              Why TalkItOut
            </button>
            <button className="inline-block ml-8 px-3 py-2 text-gray-600 hover:text-gray-900">
              Contact Us
            </button>
          </div>
          
          <div className="hidden md:block"></div>
        </div>
      </div>
    </nav>
  )
}
const App = () => {
  // Rest of the App component remains exactly the same
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-left md:text-center mb-16 max-w-3xl md:mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We hear you!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We understand the impact of unspoken emotions on mental and physical well-being 
            and aim to break down barriers by offering a confidential space for open conversations. 
            Let&apos;s lighten your emotional load together!
          </p>
          <a href="/packages">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Now
            </button>
          </a>
        </div>

        {/* Features section */}
        <div className="space-y-12 md:space-y-16 mb-16 max-w-3xl md:mx-auto">
          <div className="text-left md:text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mx-auto">
              <Heart className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Human Connection</h3>
            <p className="text-gray-600">Real human support, no chatbots. Available in three languages.</p>
          </div>

          <div className="text-left md:text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mx-auto">
              <Clock className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
            <p className="text-gray-600">Chat anytime between 11:00 hrs to 19:00 hrs. No appointments needed.</p>
          </div>

          <div className="text-left md:text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mx-auto">
              <Lock className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Privacy</h3>
            <p className="text-gray-600">Anonymous conversations, no registration required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;