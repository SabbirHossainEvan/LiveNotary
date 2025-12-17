'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Sign Up', href: '/signup' },
        { name: 'Login', href: '/login' },
        { name: 'Contact Us', href: '/#contact-us' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/' },
        { name: 'Privacy Policy', href: '/' },
        { name: 'Compliance', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/' },
        { name: 'FAQs', href: '/#faqs-section' },
        { name: 'Contact Support', href: '/' },
      ],
    },
  ];

  return (
    <footer className="bg-[#101828] text-gray-300">
      <div 
        className={`
          mx-auto px-4 sm:px-20 lg:px-25 py-16 transition-opacity duration-1000 ease-in-out transform
          ${isAnimated ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          
          {/* 1. Brand Info / Tagline */}
          <div className="col-span-2 md:col-span-1 pr-8">
            <div className="flex items-center text-white mb-4">
              <ShieldCheck className="w-6 h-6 mr-2 text-blue-500" />
              <span className="text-xl font-semibold">Live Notary Online</span>
            </div>
            <p className="text-sm">
              Connecting you with certified notaries nationwide.
            </p>
          </div>

          {/* 2, 3, 4. Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-base font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm hover:text-blue-400 transition duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; 2024 Live Notary Online. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;