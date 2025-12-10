
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
        <section className="[background:linear-gradient(to_top,#FFFFFF_0%,#EFF6FF_100%)] py-28 sm:py-32 overflow-hidden">
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

                <div className="mt-15">
                    <button className={`inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg 
                        text-white bg-blue-600 hover:bg-blue-700 
                        transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300`}>
                        Start Notarization
                    </button>
                </div>

                <div className="mt-15 flex  justify-center space-x-3 md:space-x-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="block md:flex items-center">
                            <div className='ml-10 md:mb-0 mb-2 md:ml-0'>
                                <benefit.icon size={24} className={`${benefit.color} mb-1`} />
                            </div>
                            <p className="text-sm font-medium text-gray-700 whitespace-nowrap ml-2">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HeroSection;