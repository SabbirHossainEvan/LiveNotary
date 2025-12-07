
'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, Clock } from 'lucide-react'; 

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const benefits = [
        { icon: CheckCircle, text: 'Verified Notaries', color: 'text-blue-600' },
        { icon: Zap, text: 'State-Approved', color: 'text-blue-600' },
        { icon: Clock, text: 'Available 24/7', color: 'text-blue-600' },
    ];

    return (
        <section className="bg-gray-100 pt-28 sm:py-32 overflow-hidden">
            <div
                className={`
                    max-w-5xl mx-auto px-4 text-center transition-opacity duration-1000 ease-in-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Connect Instantly with a <br className="hidden sm:inline" />
                    <span className="text-gray-900">Certified Online Notary</span>
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Fast. Secure. Fully Compliant. No downloads needed.
                </p>

                <div className="mt-8">
                    <button className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg 
                        text-white bg-blue-600 hover:bg-blue-700 
                        transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Start Notarization
                    </button>
                </div>

                <div className="mt-12 flex justify-center space-x-8 sm:space-x-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <benefit.icon size={24} className={`${benefit.color} mb-1`} />
                            <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            <button className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-xl 
                transition duration-300 hover:bg-blue-700 
                animate-pulse hover:animate-none">
                <span className="flex items-center justify-center transform rotate-90">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </span>
            </button>
        </section>
    );
};

export default HeroSection;