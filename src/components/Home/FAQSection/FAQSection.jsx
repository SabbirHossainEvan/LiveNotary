'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'How secure is the online notarization process?',
    answer:
      'Our platform uses bank-level encryption and follows all state regulations for remote online notarization. All sessions are recorded and securely stored for legal compliance.',
  },
  {
    id: 2,
    question: 'How long does the process take?',
    answer:
      'Most notarization sessions take less than 15 minutes, provided all your identification documents are ready and you have a stable internet connection.',
  },
  {
    id: 3,
    question: 'What documents can be notarized online?',
    answer:
      'Common documents include affidavits, power of attorney forms, real estate documents, deeds, and more. If you have a specific document, please contact support to confirm its eligibility in your state.',
  },
  {
    id: 4,
    question: 'Do I need any special software?',
    answer:
      'No. You only need a computer or mobile device with a working camera and microphone, and a modern web browser (Chrome, Firefox, Safari, Edge). There are no downloads needed.',
  },
  {
    id: 5,
    question: 'How much does it cost?',
    answer:
      'The cost varies based on your state and the complexity of the document. You will see the exact fee before you begin the session. We offer transparent, upfront pricing with no hidden fees.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const AccordionItem = ({ item }) => {
    const isOpen = openId === item.id;
    return (
      <div  
        className="bg-white p-5 rounded-lg transition-all duration-300 cursor-pointer"
        onClick={() => toggleFAQ(item.id)}
      >
        {/* Question Row */}
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-800">
            {item.question}
          </h4>
          <ChevronDown 
            className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0 mt-0'
          }`}
        >
          <p className="text-gray-600 border-t border-gray-200 pt-4">
            {item.answer}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id='faqs-section' className=" sm:py-10 bg-[#F9FAFB]">
      <div 
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Header Section */}
        <div className="text-center pt-20 md:mt-15 mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold  text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;