import React from 'react';

// Social Media Icons (using simple SVGs for demo; replace with real icons if needed)
const SocialIcon = ({ children }) => (
  <span className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-300">
    {children}
  </span>
);

const Footer = () => {
  return (
    <footer className="bg-[#0c0a0b] text-gray-300 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">AOT Gaming</h2>
          <p className="text-sm">
            Join the ultimate gaming adventure. Premium experiences, epic battles, and a community that thrives on victory.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors duration-200">Games</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors duration-200">Community</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors duration-200">Support</a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Twitter">
              <SocialIcon>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </SocialIcon>
            </a>
            <a href="#" aria-label="Discord">
              <SocialIcon>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.22 5.34A19.67 19.67 0 0015.5 4.1c-.2.35-.43.69-.65 1a13.9 13.9 0 00-4.2 0c-.22-.31-.45-.65-.65-1a19.67 19.67 0 00-4.72 1.24C2.5 9.37 1.5 13.3 2 17.5a20.5 20.5 0 006.1 3.1c.5-.7.95-1.45 1.35-2.25-.75-.3-1.45-.65-2.1-1.05 1.5 1 3.2 1.6 5 1.6s3.5-.6 5-1.6c-.65.4-1.35.75-2.1 1.05.4.8.85 1.55 1.35 2.25a20.5 20.5 0 006.1-3.1c.5-4.2-.5-8.13-3.1-12.16zM9 15.5c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2- .9 2.2-2 2.2zm6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2z" />
                </svg>
              </SocialIcon>
            </a>
            <a href="#" aria-label="YouTube">
              <SocialIcon>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8zM9.8 15.5V8.5l6 3.5-6 3.5z" />
                </svg>
              </SocialIcon>
            </a>
          </div>
          <p className="text-sm">Contact: support@aotgaming.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-800 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AOT Gaming. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;