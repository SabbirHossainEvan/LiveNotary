import React, { useState } from 'react';
import { MessageSquareIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { NotarizationRequest } from '../data/mockData';

export const RequestHistorySection = ({ requests, onViewChatHistory }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only 4 items when collapsed
  const displayedRequests = isExpanded ? requests : requests.slice(0, 4);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1F2937]">
          Request History
        </h2>

        {requests.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUpIcon className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                <span>Show All</span>
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        )}
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-[#6B7280]">
            You don t have any previous notarization requests.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-md p-4">
              <h3 className="font-medium text-base text-[#1F2937] truncate mb-1">
                {request.documentName}
              </h3>

              <p className="text-xs text-[#6B7280] mb-2">
                {request.requestDate}
              </p>

              <div className="flex justify-between items-center mb-3">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    request.status === 'Completed'
                      ? 'bg-[#22C55E]/20 text-[#166534]'
                      : request.status === 'Cancelled'
                      ? 'bg-[#EF4444]/20 text-[#991B1B]'
                      : 'bg-[#3B82F6]/20 text-[#1E40AF]'
                  }`}
                >
                  {request.status}
                </span>

                <span className="text-xs font-medium text-[#1F2937]">
                  ${(request.fee + (request.additionalFees || 0)).toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => onViewChatHistory(request.id)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#F5F7FA] hover:bg-[#E5E7EB] rounded-lg transition-colors text-sm font-medium text-[#1F2937]"
              >
                <MessageSquareIcon className="h-4 w-4" />
                <span>View Chat History</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
