'use client';

import React, { useState, useEffect } from 'react';
import { Send, MapPin } from 'lucide-react';

const ContactUsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted!'); 

  };



  return (
    <section className="py-20 sm:py-28 bg-white">
      <div 
        className={`
          max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out transform
          ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Contact us via filling up the form
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div className="lg:pr-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="Your Full Name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="name@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border rounded-full border-transparent text-base font-medium shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Service Area
            </h3>

            {/* Map Placeholder Box */}
            <div className="bg-gray-50 h-80 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="text-center p-8">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">We service the entire Clean City area</p>
                <p className="text-gray-500 text-sm mt-1">
                  Map would be displayed here in production
                </p>
              </div>
            </div>

            {/* Service Radius Description */}
            <p className="mt-4 text-sm text-gray-600">
              We currently service all neighborhoods in **Clean City** and surrounding areas within a **15-mile radius**.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;