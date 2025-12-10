
import React from 'react';

const PayoutHistoryRow = ({ payout }) => {
  const statusBg = payout.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
      {/* Date and Method */}
      <div>
        <p className="text-base font-medium text-gray-900">{payout.date}</p>
        <span className="text-sm text-gray-500">{payout.method}</span>
      </div>

      {/* Amount and Status */}
      <div className="text-right flex items-center space-x-4">
        <p className="text-lg font-semibold text-gray-800">
          ${payout.amount.toFixed(2)}
        </p>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusBg}`}>
          {payout.status}
        </span>
      </div>
    </div>
  );
};

export default PayoutHistoryRow;