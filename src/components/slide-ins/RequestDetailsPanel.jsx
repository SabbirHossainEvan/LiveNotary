// import React, { useState } from 'react';
// import { XIcon, FileTextIcon, MessageSquareIcon, UserIcon, CreditCardIcon, ClockIcon } from 'lucide-react';
// import { getRequestById } from '@/data/mockData';

// export const RequestDetailsPanel = ({ isOpen, requestId, onClose, onOpenChat, onStartZoom }) => {
//   const [activeTab, setActiveTab] = useState('details');
//   const request = requestId ? getRequestById(requestId) : null;

//   if (!isOpen || !request) return null;

//   return (
//     <div className={`fixed inset-y-0 mt-20 h-[91%] right-0 w-full sm:w-[420px] bg-white shadow-lg z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
//       {/* Panel Header */}
//       <div className="flex justify-between items-center px-4 py-3 border-b border-[#E5E7EB]">
//         <div className="flex items-center">
//           <button onClick={onClose} className="mr-2 text-[#6B7280] hover:text-[#1F2937] transition-colors md:hidden">
//             <XIcon className="h-5 w-5" />
//           </button>
//           <h3 className="font-medium text-lg text-[#1F2937]">
//             Request Details
//           </h3>
//         </div>
//         <button onClick={onClose} className="p-2 rounded-full hover:bg-[#F5F7FA] transition-colors text-[#6B7280] hidden md:block">
//           <XIcon className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Document Info */}
//       <div className="px-4 py-3 bg-[#F5F7FA]">
//         <h4 className="font-medium text-base text-[#1F2937]">
//           {request.documentName}
//         </h4>
//         <div className="flex items-center mt-1">
//           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${request.status === 'In Progress' ? 'bg-[#FACC15]/20 text-[#B45309]' : request.status === 'Pending' ? 'bg-[#3B82F6]/20 text-[#1E40AF]' : request.status === 'Completed' ? 'bg-[#22C55E]/20 text-[#166534]' : 'bg-[#EF4444]/20 text-[#991B1B]'}`}>
//             {request.status}
//           </span>
//           <span className="text-xs text-[#6B7280] ml-2">
//             Requested on {request.requestDate}
//           </span>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b border-[#E5E7EB]">
//         <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'details' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280]'}`} onClick={() => setActiveTab('details')}>
//           Details
//         </button>
//         <button className={`flex-1 py-3 text-sm font-medium ${activeTab === 'documents' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280]'}`} onClick={() => setActiveTab('documents')}>
//           Documents
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="flex-1 overflow-y-auto">
//         {activeTab === 'details' && (
//           <div className="p-4">
//             {/* Notary Info */}
//             <div className="mb-6">
//               <h5 className="text-sm font-medium text-[#6B7280] mb-2">Notary</h5>
//               <div className="flex items-center">
//                 <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
//                   <img src={request.notary.avatar} alt={request.notary.name} className="h-full w-full object-cover" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-base text-[#1F2937]">{request.notary.name}</p>
//                   <div className="flex items-center">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className={`w-3 h-3 ${i < request.notary.rating ? 'text-[#FACC15]' : 'text-[#E5E7EB]'}`} fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <span className="ml-1 text-xs text-[#6B7280]">{request.notary.rating.toFixed(1)}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex mt-4 space-x-3">
//                 <button onClick={onOpenChat} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg transition-colors text-sm font-medium">
//                   <MessageSquareIcon className="h-4 w-4" />
//                   <span>Open Chat</span>
//                 </button>
//               </div>
//             </div>

//             {/* Document Information */}
//             <div className="mb-6">
//               <h5 className="text-sm font-medium text-[#6B7280] mb-2">Document Information</h5>
//               <div className="bg-[#F5F7FA] rounded-lg p-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-[#6B7280]">Document Type</span>
//                   <span className="text-sm font-medium text-[#1F2937]">{request.documentType}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-[#6B7280]">Pages</span>
//                   <span className="text-sm font-medium text-[#1F2937]">{request.pages}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-sm text-[#6B7280]">Signers</span>
//                   <span className="text-sm font-medium text-[#1F2937]">{request.signers}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Details */}
//             <div className="mb-6">
//               <h5 className="text-sm font-medium text-[#6B7280] mb-2">Payment Details</h5>
//               <div className="bg-[#F5F7FA] rounded-lg p-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm text-[#6B7280]">Notarization Fee</span>
//                   <span className="text-sm font-medium text-[#1F2937]">${request.fee.toFixed(2)}</span>
//                 </div>
//                 {request.additionalFees && (
//                   <div className="flex justify-between mb-2">
//                     <span className="text-sm text-[#6B7280]">Additional Fees</span>
//                     <span className="text-sm font-medium text-[#1F2937]">${request.additionalFees.toFixed(2)}</span>
//                   </div>
//                 )}
//                 <div className="border-t border-[#E5E7EB] my-2"></div>
//                 <div className="flex justify-between">
//                   <span className="text-sm font-medium text-[#1F2937]">Total</span>
//                   <span className="text-sm font-medium text-[#1F2937]">${(request.fee + (request.additionalFees || 0)).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'documents' && (
//           <div className="p-4">
//             {/* Documents tab content */}
//           </div>
//         )}

//         {activeTab === 'messages' && (
//           <div className="p-4">
//             {/* Messages tab content */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// src/components/slide-ins/RequestDetailsPanel.jsx 
'use client';
import React, { useState } from 'react';
// icons
import { XIcon, FileTextIcon, MessageSquareIcon, UserIcon, CreditCardIcon, ClockIcon } from 'lucide-react';

import { getRequestById } from '@/data/mockData'; 

export const RequestDetailsPanel = ({ isOpen, requestId, onClose, onOpenChat, onStartZoom }) => {
    const [activeTab, setActiveTab] = useState('details');
    const request = requestId ? getRequestById(requestId) : null; 

    if (!isOpen || !request) return null;

    // --- Helper Component for Timeline Items ---
    const TimelineItem = ({ icon, title, date, isLast = false }) => (
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {icon}
                </div>
                {!isLast && <div className="w-px h-10 bg-gray-300"></div>}
            </div>
            <div>
                <p className="font-medium text-sm text-[#1F2937]">{title}</p>
                <p className="text-xs text-[#6B7280] mb-4">{date}</p>
            </div>
        </div>
    );

    const DocumentsContent = () => (
        
        <div className="p-4 space-y-6">
            {/* Original Document Section */}
            <div>
                <h5 className="text-sm font-medium text-[#6B7280] mb-3">Original Document</h5>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                    <div className="flex items-center">
                        <FileTextIcon className="h-6 w-6 text-gray-500 mr-3" />
                        <div>
                            <p className="font-medium text-[#1F2937]">{request.documentName}</p>
                            <p className="text-xs text-[#6B7280]">Uploaded on {request.requestDate}</p>
                        </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                        Download
                    </button>
                </div>
            </div>

            {/* Notarized Document Section */}
            <div>
                <h5 className="text-sm font-medium text-[#6B7280] mb-3">Notarized Document</h5>
                {request.status === 'Completed' ? (
                    <div className="flex justify-between items-center p-4 border border-green-200 rounded-lg bg-green-50 shadow-sm">
                        <div className="flex items-center">
                            <FileTextIcon className="h-6 w-6 text-green-600 mr-3" />
                            <div>
                                <p className="font-medium text-green-700">{request.documentName} (Notarized)</p>
                                <p className="text-xs text-green-600">Completed on {request.completedDate}</p>
                            </div>
                        </div>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors">
                            Download
                        </button>
                    </div>
                ) : (
                    <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg bg-gray-50">
                        <FileTextIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="font-medium text-[#1F2937] mb-1">Notarization in Progress</p>
                        <p className="text-sm text-[#6B7280]">
                            Your notarized document will appear here once the notarization is complete.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
    // --- End Documents Tab Content ---


    const DetailsContent = () => (
        <div className="p-4">
            {/* Notary Info */}
            <div className="mb-6 pb-4 border-b border-gray-200">
                <h5 className="text-sm font-medium text-[#6B7280] mb-2">Notary</h5>
                <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-3 ring-2 ring-offset-2 ring-blue-500">
                        <img src={request.notary.avatar} alt={request.notary.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <p className="font-medium text-base text-[#1F2937]">{request.notary.name}</p>
                        <div className="flex items-center">
                            <div className="flex">
                                {/* Star Rating */}
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
                    <button onClick={onOpenChat} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg transition-colors text-sm font-medium shadow-md">
                        <MessageSquareIcon className="h-4 w-4" />
                        <span>Open Chat</span>
                    </button>
                    {/* Start Meeting button is visible if the job is 'In Progress' */}
                    {request.status === 'In Progress' && (
                        <button onClick={onStartZoom} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-call"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path><path d="M18 12h-2"></path><path d="M8 12H6"></path><path d="M12 6v2"></path><path d="M12 16v2"></path></svg>
                            <span>Start Meeting</span>
                        </button>
                    )}
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
                        <span className="text-base font-bold text-blue-600">${(request.fee + (request.additionalFees || 0)).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Notarization Timeline */}
            <div className="mb-6">
                <h5 className="text-sm font-medium text-[#6B7280] mb-4">Notarization Timeline</h5>
                <div className="pl-2">
                    <TimelineItem 
                        icon={<FileTextIcon className='h-4 w-4' />} 
                        title="Request Submitted" 
                        date={request.requestDate} 
                    />
                    {request.notaryAssignedDate && (
                        <TimelineItem 
                            icon={<UserIcon className='h-4 w-4' />} 
                            title="Notary Assigned" 
                            date={request.notaryAssignedDate} 
                        />
                    )}
                    {request.paymentProcessedDate && (
                        <TimelineItem 
                            icon={<CreditCardIcon className='h-4 w-4' />} 
                            title="Payment Processed" 
                            date={request.paymentProcessedDate} 
                        />
                    )}
                    {request.completedDate && (
                        <TimelineItem 
                            icon={<ClockIcon className='h-4 w-4' />} 
                            title="Notarization Completed" 
                            date={request.completedDate}
                            isLast={true}
                        />
                    )}
                </div>
            </div>
        </div>
    );
    // --- End Details Tab Content ---


    // --- Main Render ---
    return (
        <div className={`fixed inset-y-0 mt-20 h-[91%] right-0 w-full sm:w-[420px] bg-white shadow-xl z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
            {/* Panel Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#E5E7EB]">
                <h3 className="font-semibold text-lg text-[#1F2937]">
                    Request Details
                </h3>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-[#F5F7FA] transition-colors text-[#6B7280]">
                    <XIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Document Info Bar */}
            <div className="px-4 py-3 bg-[#F5F7FA]">
                <h4 className="font-medium text-base text-[#1F2937]">
                    {request.documentName}
                </h4>
                <div className="flex items-center mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${request.status === 'In Progress' ? 'bg-[#FACC15]/20 text-[#B45309]' : 
                          request.status === 'Pending' ? 'bg-[#3B82F6]/20 text-[#1E40AF]' : 
                          request.status === 'Completed' ? 'bg-[#22C55E]/20 text-[#166534]' : 
                          'bg-[#EF4444]/20 text-[#991B1B]'}`
                    }>
                        {request.status}
                    </span>
                    <span className="text-xs text-[#6B7280] ml-2">
                        Requested on {request.requestDate}
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E5E7EB]">
                <button className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'details' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280] hover:text-[#1F2937]'}`} onClick={() => setActiveTab('details')}>
                    Details
                </button>
                <button className={`flex-1 py-3 text-sm font-semibold transition-colors ${activeTab === 'documents' ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]' : 'text-[#6B7280] hover:text-[#1F2937]'}`} onClick={() => setActiveTab('documents')}>
                    Documents
                </button>
                {/* Messages Tab */}
                <button 
                    className={`flex-1 py-3 text-sm font-semibold transition-colors text-[#6B7280] hover:text-[#1F2937]`} 
                    onClick={() => {onOpenChat(); onClose(); }}
                >
                    Messages
                </button>
            </div>

            {/* Tab Content (The corrected section) */}
            <div className="flex-1 overflow-y-auto bg-white">
                {activeTab === 'details' && <DetailsContent />}
                {activeTab === 'documents' && <DocumentsContent />}
            </div>
        </div>
    );
};