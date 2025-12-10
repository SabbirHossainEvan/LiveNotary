

import React from 'react';

const CommissionRow = ({ commission }) => {
  const statusColors = {
    Approved: 'text-green-600 bg-green-100',
    Pending: 'text-yellow-600 bg-yellow-100',

  };

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      {/* Name and Date */}
      <div>
        <p className="text-base font-medium text-gray-900">{commission.name}</p>
        <span className="text-sm text-gray-500">{commission.date}</span>
      </div>

      {/* Status and Amount */}
      <div className="text-right flex items-center space-x-4">
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[commission.status] || 'text-gray-600 bg-gray-100'}`}>
          {commission.status}
        </span>
        <p className="text-lg font-semibold text-gray-800">
          ${commission.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CommissionRow;