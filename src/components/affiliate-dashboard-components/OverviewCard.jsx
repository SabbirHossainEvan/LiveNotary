

import React from 'react';
import { TrendingUp } from 'lucide-react';

const OverviewCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-lg font-medium text-gray-600">{title}</h4>

        <TrendingUp className="w-5 h-5 text-blue-500" /> 
      </div>
      
      <p className="text-4xl font-extrabold text-gray-900 mb-2">
        {value}
      </p>
      
      <p className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </p>
    </div>
  );
};

export default OverviewCard;