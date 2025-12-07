
'use client'; 

import React, { useEffect, useState } from 'react';

const IconDollar = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);
const IconShare = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="17"></line></svg>
);
const IconTrending = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13 16 16 19 2 5"></polyline></svg>
);

const features = [
  {
    Icon: IconDollar,
    title: 'Competitive Commissions',
    description: 'Earn on every successful notarization through your link.',
    color: 'text-yellow-400',
  },
  {
    Icon: IconShare,
    title: 'Easy Sharing',
    description: 'Get your unique link and QR code instantly.',
    color: 'text-green-400',
  },
  {
    Icon: IconTrending,
    title: 'Track Performance',
    description: 'Real-time dashboard with clicks and conversions.',
    color: 'text-red-400',
  },
];

// Individual Card Component
const FeatureCard = ({ feature, index,  }) => {

  const delayClass = `delay-${index * 300}`; 

  return (
    <div
      className={`
        flex flex-col items-center p-6 m-4 w-full md:w-1/3 min-h-[250px]
        bg-white/10 backdrop-blur-sm rounded-xl
        transform transition-all duration-700 ease-out -ml-[3px]
        
      `}
    >
      <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm  mb-4">
        <feature.Icon className={`w-8 h-8 ${feature.color}`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 text-center">
        {feature.title}
      </h3>
      <p className="text-blue-200 text-center">
        {feature.description}
      </p>
    </div>
  );
};

// Main Section Component
const AffiliateSection = () => {


  return (
    <section 
      className="bg-[#2563EB] py-16 px-4 sm:px-6 lg:px-8 text-white min-h-[600px] flex flex-col justify-center items-center"
    >
      {/* --- Title Section --- */}
      <div 
        className={`
          text-center mb-12 transition-opacity duration-1000 ease-out
         
        `}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-3">
          Earn with Live Notary Online
        </h2>
        <p className="text-xl text-blue-200">
          Become an Affiliate Partner and earn commissions on every referral
        </p>
      </div>

      {/* --- Cards Container --- */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-7xl w-full">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            feature={feature} 
            index={index} 
            
          />
        ))}
      </div>
      
      {/* --- CTA Button --- */}
      <div 
        // Animated button
        className={`
          mt-12 transition-all duration-1000 ease-out delay-900
          
        `}
      >
        <button className="px-8 py-3 text-lg font-semibold text-blue-800 bg-white rounded-full hover:bg-gray-200 transition duration-300 shadow-xl">
          Join as an Affiliate
        </button>
      </div>
    </section>
  );
};

export default AffiliateSection;