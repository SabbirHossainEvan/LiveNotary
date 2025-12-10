
import React from 'react';

const AffiliateHeader = ({ title, subtitle }) => {
  return (

    <div className="mb-8 flex justify-start items-start"> 
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-1 text-lg text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default AffiliateHeader;