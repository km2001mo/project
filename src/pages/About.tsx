import React from 'react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-[#1B263B]">About Us</h1>
      
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At PriceTracker, we're dedicated to providing real-time, accurate financial data to empower your investment decisions. Our platform brings together comprehensive information about currencies, cryptocurrencies, and precious metals in one accessible place.
        </p>
        
        <h2 className="text-2xl font-bold text-[#1B263B] mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li>Real-time currency exchange rates across major global currencies</li>
          <li>Up-to-the-minute cryptocurrency price tracking and analysis</li>
          <li>Live precious metals pricing with historical data</li>
          <li>Expert market analysis and insights through our blog</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-[#1B263B] mb-2">Accuracy</h3>
            <p className="text-gray-600">We prioritize providing precise, reliable data you can trust.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-[#1B263B] mb-2">Transparency</h3>
            <p className="text-gray-600">Clear, honest information about market movements and trends.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-[#1B263B] mb-2">Innovation</h3>
            <p className="text-gray-600">Continuously improving our platform with the latest technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
}