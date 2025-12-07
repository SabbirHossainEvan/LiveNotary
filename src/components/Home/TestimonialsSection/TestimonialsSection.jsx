'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';


const testimonialData = [
  {
    id: 1,
    rating: 5,
    quote: "Incredibly fast and professional. I was able to get my documents notarized in minutes, serviced in under ten minutes. No more driving to the offices and waiting in lines.",
    name: "Sarah Johnson",
    title: "Real Estate Agent",
  },
  {
    id: 2,
    rating: 5,
    quote: "As incredibly fast and professional, my documents hassle serviced in notarizations, while more driving to me use. No deixesation, the recommend it to easy to all wis lines.",
    name: "Sarah Johnson",
    title: "Small Business Owner",
  },
  {
    id: 3,
    rating: 5,
    quote: "The notaries are professional and the platform is so easy to use. I recommend it to all my clients who need remote notarization.",
    name: "Emily Rodriguez",
    title: "Legal Assistant",
  },
];

const TestimonialsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
  };

  const TestimonialCard = ({ quote, name, title, company, rating }) => (
    <div className="bg-[#E5E7EB]  rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-2xl transition duration-300">
      <div>
        <span className="text-5xl font-serif text-blue-500 block mb-4">
          &ldquo;
        </span>
        {renderStars(rating)}
        <p className="mt-4 text-gray-700 text-base leading-relaxed">{quote}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">
          {title} 
          {company && <span className="ml-1 text-xs text-gray-400">({company})</span>}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            What Our Users Say
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-500">
            Trusted by thousands across the states
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;