import React, { useState } from 'react';
import { XIcon, FileTextIcon, MessageSquareIcon, UserIcon, CreditCardIcon, ClockIcon } from 'lucide-react';
import { getRequestById } from '../../data/mockData';

export const RequestDetailsPanel = ({ isOpen, requestId, onClose, onOpenChat, onStartZoom }) => {
  const [activeTab, setActiveTab] = useState('details');
  const request = requestId ? getRequestById(requestId) : null;

  if (!isOpen || !request) return null;

  return (
    <div className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-lg z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
      {/* Panel Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-[#E5E7EB]">
        <div className="flex items-center">
          <button onClick={onClose} className="mr-2 text-[#6B7280] hover:text-[#1F2937] transition-colors md:hidden">
            <XIcon className="h-5 w-5" />
          </button>
          <h3 className="font-medium text-lg text-[#1F2937]">
            Request Details
          </h3>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-[#F5F7FA] transition-colors text-[#6B7280] hidden md:block">
          <XIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Document Info */}
      <div className="px-4 py-3 bg-[#F5F7FA]">
        <h4 className="font-medium text-base text-[#1F2937]">
          {request.documentName}
        </h4>
        <div className="flex items-center mt-1">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${request.status === 'In Progress' ? 'bg-[#FACC15]/20 text-[#B45309]' : request.status === 'Pending' ? 'bg-[#3B82F6]/20 text-[#1E40AF]' : request.status === 'Completed' ? 'bg-[#22C55E]/20 text-[#166534]' : 'bg-[#EF4444]/20 text-[#991B1B]'}`}>
            {request.status}
          </span>
          <span className="text-xs text-[#6B7280] ml-2">
            Requested on {request.requestDate}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#E5E7EB]">
        <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'details' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280]'}`} onClick={() => setActiveTab('details')}>
          Details
        </button>
        <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'documents' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280]'}`} onClick={() => setActiveTab('documents')}>
          Documents
        </button>
        <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'messages' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280]'}`} onClick={() => setActiveTab('messages')}>
          Messages
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'details' && (
          <div className="p-4">
            {/* Notary Info */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-[#6B7280] mb-2">Notary</h5>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                  <img src={request.notary.avatar} alt={request.notary.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-base text-[#1F2937]">{request.notary.name}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < request.notary.rating ? 'text-[#FACC15]' : 'text-[#E5E7EB]'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-[#6B7280]">{request.notary.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="flex mt-4 space-x-3">
                <button onClick={onOpenChat} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg transition-colors text-sm font-medium">
                  <MessageSquareIcon className="h-4 w-4" />
                  <span>Open Chat</span>
                </button>
              </div>
            </div>

            {/* Document Information */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-[#6B7280] mb-2">Document Information</h5>
              <div className="bg-[#F5F7FA] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#6B7280]">Document Type</span>
                  <span className="text-sm font-medium text-[#1F2937]">{request.documentType}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#6B7280]">Pages</span>
                  <span className="text-sm font-medium text-[#1F2937]">{request.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#6B7280]">Signers</span>
                  <span className="text-sm font-medium text-[#1F2937]">{request.signers}</span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-[#6B7280] mb-2">Payment Details</h5>
              <div className="bg-[#F5F7FA] rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#6B7280]">Notarization Fee</span>
                  <span className="text-sm font-medium text-[#1F2937]">${request.fee.toFixed(2)}</span>
                </div>
                {request.additionalFees && (
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#6B7280]">Additional Fees</span>
                    <span className="text-sm font-medium text-[#1F2937]">${request.additionalFees.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-[#E5E7EB] my-2"></div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-[#1F2937]">Total</span>
                  <span className="text-sm font-medium text-[#1F2937]">${(request.fee + (request.additionalFees || 0)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="p-4">
            {/* Documents tab content */}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="p-4">
            {/* Messages tab content */}
          </div>
        )}
      </div>
    </div>
  );
};
