import React from 'react';
import { ChevronRight, Apple } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <Apple className="w-5 h-5" />
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#" className="hover:text-gray-300 transition-colors">Mac</a>
              <a href="#" className="hover:text-gray-300 transition-colors">iPad</a>
              <a href="#" className="hover:text-gray-300 transition-colors">iPhone</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Watch</a>
              <a href="#" className="hover:text-gray-300 transition-colors">AirPods</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12">
        <div className="text-center pt-20 pb-8">
          <h1 className="text-6xl font-semibold mb-2">iPhone 15 Pro</h1>
          <h2 className="text-2xl text-gray-400 mb-4">Titanium. So strong. So light. So Pro.</h2>
          <div className="flex justify-center space-x-6 text-xl text-blue-500">
            <a href="#" className="flex items-center hover:text-blue-400 transition-colors">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-blue-400 transition-colors">
              Buy <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        <div className="h-[600px] bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80")' }}>
        </div>
      </section>

      {/* Second Product Section */}
      <section className="bg-white text-black py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-2">MacBook Pro</h2>
          <p className="text-2xl text-gray-600 mb-4">Mind-blowing. Head-turning.</p>
          <div className="flex justify-center space-x-6 text-xl text-blue-500">
            <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
              Buy <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        <div className="h-[500px] bg-cover bg-center bg-no-repeat mt-8" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80")' }}>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-black">
        <div className="bg-white rounded-3xl p-8 text-black text-center">
          <h3 className="text-4xl font-semibold mb-2">iPad</h3>
          <p className="text-xl text-gray-600 mb-4">Lovable. Drawable. Magical.</p>
          <div className="flex justify-center space-x-6 text-blue-500">
            <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="h-[300px] bg-cover bg-center bg-no-repeat mt-8" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80")' }}>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 text-black text-center">
          <h3 className="text-4xl font-semibold mb-2">Watch</h3>
          <p className="text-xl text-gray-600 mb-4">Next level adventure.</p>
          <div className="flex justify-center space-x-6 text-blue-500">
            <a href="#" className="flex items-center hover:text-blue-600 transition-colors">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="h-[300px] bg-cover bg-center bg-no-repeat mt-8" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80")' }}>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs">
            <p className="mb-4">1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.</p>
            <hr className="my-4 border-gray-300" />
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;