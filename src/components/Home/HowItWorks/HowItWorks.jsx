

'use client';

import React, { useCallback } from 'react';

const steps = [
    {
        id: 1,
        title: 'Fill a Short Request Form',
        description: 'Provide basic details about your document and signers. Takes less than 2 minutes.',
        color: 'bg-blue-100/70 text-blue-800 ring-blue-100/70',
    },
    {
        id: 2,
        title: 'Get Matched with a Notary',
        description: 'A verified notary accepts your request and sends you a secure session link.',
        color: 'bg-green-100/70 text-green-800 ring-green-100/70',
    },
    {
        id: 3,
        title: 'Complete Notarization Online',
        description: 'Join the secure video session and get your documents notarized instantly.',
        color: 'bg-purple-100/70 text-purple-800 ring-purple-100/70',
    },
];

const StepCard = ({ step }) => {
    return (
        <div 
            className={`
                flex flex-col items-center text-center p-4 
                // All transition/opacity/transform classes removed
            `}
        >
            {/* Step Number Circle */}
            <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-6 
                font-bold text-2xl ring-4 ${step.color}
            `}>
                {step.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 max-w-xs">
                {step.description}
            </p>
        </div>
    );
};


const HowItWorks = () => {
    


    return (
        <section className="bg-white mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
                    How It Works
                </h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step) => (
                        <StepCard
                            key={step.id}
                            step={step}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;