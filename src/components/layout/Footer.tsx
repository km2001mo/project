import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1B263B] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">PriceTracker</h3>
            <p className="text-sm">
              Your trusted source for real-time currency, cryptocurrency, and precious metals pricing.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#FFD700]">Local Currency</Link></li>
              <li><Link to="/crypto" className="hover:text-[#FFD700]">Cryptocurrency</Link></li>
              <li><Link to="/precious-metals" className="hover:text-[#FFD700]">Gold & Silver</Link></li>
              <li><Link to="/blog" className="hover:text-[#FFD700]">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#FFD700]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-[#FFD700]">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-sm">Stay updated with our newsletter</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              <button className="bg-[#FFD700] text-[#1B263B] px-4 py-2 rounded font-semibold hover:bg-[#FFD700]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PriceTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}