import React from 'react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-[#1B263B]">Privacy Policy</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Introduction</h2>
          <p className="text-gray-700">
            This Privacy Policy explains how PriceTracker ("we," "us," or "our") collects, uses, and protects your personal information when you use our website and services.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personal information (name, email address)</li>
            <li>Usage data (browser type, IP address)</li>
            <li>Cookie data</li>
            <li>Newsletter subscription preferences</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at privacy@pricetracker.com
          </p>
        </section>
      </div>
    </div>
  );
}