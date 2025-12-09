// Mock active requests
export const mockRequests = [{
  id: 'req-001',
  documentName: 'Power of Attorney',
  documentType: 'Power of Attorney',
  requestDate: 'June 15, 2023',
  status: 'In Progress',
  fee: 25.0,
  additionalFees: 4.99,
  pages: 5,
  signers: 2,
  notary: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
    isOnline: true
  },
  hasUnreadMessages: true,
  notaryAssignedDate: 'June 15, 2023',
  paymentProcessedDate: 'June 15, 2023'
}, {
  id: 'req-002',
  documentName: 'Real Estate Deed',
  documentType: 'Deed',
  requestDate: 'June 14, 2023',
  status: 'Pending',
  fee: 35.0,
  pages: 12,
  signers: 3,
  notary: {
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.7,
    isOnline: false
  },
  notaryAssignedDate: 'June 14, 2023'
}];

// Mock history requests
export const mockHistoryRequests = [{
  id: 'req-003',
  documentName: 'Affidavit of Support',
  documentType: 'Affidavit',
  requestDate: 'June 10, 2023',
  status: 'Completed',
  fee: 25.0,
  pages: 3,
  signers: 1,
  notary: {
    name: 'Lisa Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 5.0,
    isOnline: false
  },
  notaryAssignedDate: 'June 10, 2023',
  paymentProcessedDate: 'June 10, 2023',
  completedDate: 'June 10, 2023'
}, {
  id: 'req-004',
  documentName: 'Living Trust Document',
  documentType: 'Trust',
  requestDate: 'June 5, 2023',
  status: 'Completed',
  fee: 45.0,
  additionalFees: 10.0,
  pages: 24,
  signers: 2,
  notary: {
    name: 'Robert Taylor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.8,
    isOnline: false
  },
  notaryAssignedDate: 'June 5, 2023',
  paymentProcessedDate: 'June 5, 2023',
  completedDate: 'June 6, 2023'
}, {
  id: 'req-005',
  documentName: 'Medical Consent Form',
  documentType: 'Consent Form',
  requestDate: 'May 28, 2023',
  status: 'Cancelled',
  fee: 20.0,
  pages: 2,
  signers: 1,
  notary: {
    name: 'Jennifer Adams',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.6,
    isOnline: false
  },
  notaryAssignedDate: 'May 28, 2023'
}, {
  id: 'req-006',
  documentName: 'Business Contract',
  documentType: 'Contract',
  requestDate: 'May 20, 2023',
  status: 'Completed',
  fee: 30.0,
  pages: 8,
  signers: 4,
  notary: {
    name: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
    isOnline: false
  },
  notaryAssignedDate: 'May 20, 2023',
  paymentProcessedDate: 'May 20, 2023',
  completedDate: 'May 21, 2023'
}, {
  id: 'req-007',
  documentName: 'Loan Agreement',
  documentType: 'Agreement',
  requestDate: 'May 15, 2023',
  status: 'Completed',
  fee: 35.0,
  pages: 15,
  signers: 2,
  notary: {
    name: 'Patricia Moore',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.7,
    isOnline: false
  },
  notaryAssignedDate: 'May 15, 2023',
  paymentProcessedDate: 'May 15, 2023',
  completedDate: 'May 16, 2023'
}];

// Mock chat messages
export const mockChatMessages = [{
  id: 'msg-001',
  sender: 'system',
  content: 'Notary accepted the request',
  timestamp: '2023-06-15T09:30:00Z',
  status: 'read',
  type: 'system'
}, {
  id: 'msg-002',
  sender: 'notary',
  content: "Hello! I'm Sarah, your assigned notary...",
  timestamp: '2023-06-15T09:32:00Z',
  status: 'read',
  type: 'text'
}, {
  id: 'msg-003',
  sender: 'client',
  content: "Hi Sarah, thanks for taking on my request...",
  timestamp: '2023-06-15T09:35:00Z',
  status: 'read',
  type: 'text'
},
// ... rest same as original
];

// Get request by ID
export const getRequestById = (id) => {
  const allRequests = [...mockRequests, ...mockHistoryRequests];
  return allRequests.find(request => request.id === id);
};
