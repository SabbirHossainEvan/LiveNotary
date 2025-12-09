import React from 'react';
import { MessageSquareIcon, FileIcon } from 'lucide-react';

export const ActiveRequestsSection = ({ requests, onOpenChat, onViewDetails }) => {
  
  if (requests.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
          Active Requests
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-[#6B7280]">
            You don t have any active notarization requests.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
        Active Requests
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-md p-6">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg text-[#1F2937]">
                  {request.documentName}
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Requested on {request.requestDate}
                </p>
              </div>

              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${
                    request.status === 'In Progress'
                      ? 'bg-[#FACC15]/20 text-[#B45309]'
                      : request.status === 'Pending'
                      ? 'bg-[#3B82F6]/20 text-[#1E40AF]'
                      : 'bg-[#22C55E]/20 text-[#166534]'
                  }`}
                >
                  {request.status}
                </span>
              </div>
            </div>

            {/* Notary Details */}
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img
                  src={request.notary.avatar}
                  alt={request.notary.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="font-medium text-sm text-[#1F2937]">
                  {request.notary.name}
                </p>

                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < request.notary.rating
                            ? 'text-[#FACC15]'
                            : 'text-[#E5E7EB]'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1
                        1 0 00.95.69h3.462c.969 0 1.371 1.24.588
                        1.81l-2.8 2.034a1 1 0 00-.364
                        1.118l1.07 3.292c.3.921-.755 1.688-1.54
                        1.118l-2.8-2.034a1 1 0 00-1.175
                        0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                        1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1
                        1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="ml-1 text-xs text-[#6B7280]">
                    {request.notary.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Fee Section */}
            <div className="border-t border-[#E5E7EB] pt-4 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-[#6B7280]">Notarization Fee:</span>
                <span className="font-medium text-sm text-[#1F2937]">
                  ${request.fee.toFixed(2)}
                </span>
              </div>

              {request.additionalFees && (
                <div className="flex justify-between mt-1">
                  <span className="text-sm text-[#6B7280]">Additional Fees:</span>
                  <span className="font-medium text-sm text-[#1F2937]">
                    ${request.additionalFees.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex justify-between mt-1">
                <span className="text-sm font-medium text-[#1F2937]">Total:</span>
                <span className="font-medium text-sm text-[#1F2937]">
                  ${(request.fee + (request.additionalFees || 0)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onOpenChat(request.id)}
                className="flex items-center gap-2 px-3 py-2 bg-[#F5F7FA] hover:bg-[#E5E7EB]
                rounded-lg transition-colors text-sm font-medium text-[#1F2937]"
              >
                <MessageSquareIcon className="h-4 w-4" />
                <span>
                  {request.hasUnreadMessages ? 'New Message' : 'Open Chat'}
                </span>
                {request.hasUnreadMessages && (
                  <span className="h-2 w-2 rounded-full bg-[#EF4444]"></span>
                )}
              </button>

              <button
                onClick={() => onViewDetails(request.id)}
                className="flex items-center gap-2 px-3 py-2 bg-[#F5F7FA] hover:bg-[#E5E7EB]
                rounded-lg transition-colors text-sm font-medium text-[#1F2937]"
              >
                <FileIcon className="h-4 w-4" />
                <span>View Details</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
