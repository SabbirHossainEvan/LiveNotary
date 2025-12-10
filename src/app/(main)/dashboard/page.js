

'use client';

import React, { useState } from 'react';

import { NotarizeModal } from '@/components/Modals/NotarizeModal';
import { NotarizationPanel } from '@/components/NotarizationPanel';
import { ActiveRequestsSection } from '@/components/ActiveRequestsSection';
import { RequestHistorySection } from '@/components/RequestHistorySection';
import { ChatPanel } from '@/components/slide-ins/ChatPanel';
import { RequestDetailsPanel } from '@/components/slide-ins/RequestDetailsPanel';
import { Toast } from '@/components/ui/Toast';
import { mockRequests, mockHistoryRequests } from '@/data/mockData';

export default function DashboardPage() {
  // State for notifications
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'message',
      title: 'New message from Sarah Johnson',
      description: 'I need additional information about the signers.',
      time: '10 minutes ago',
      read: false
    },
    {
      id: '2',
      type: 'calendar',
      title: 'Upcoming notarization',
      description: 'Your scheduled notarization starts in 30 minutes.',
      time: '20 minutes ago',
      read: false
    },
    {
      id: '3',
      type: 'alert',
      title: 'Price update request',
      description: 'Notary requested a price change from $25 to $40.',
      time: '1 hour ago',
      read: false
    }
  ]);

  // Handle Mark All Read
  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Handle Mark Single Read
  const handleMarkRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Derived unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Modal states
  const [isNotarizeModalOpen, setIsNotarizeModalOpen] = useState(false);
  const [isScheduleMode, setIsScheduleMode] = useState(false);

  // Slide-in panel states
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
  const [isDetailsPanelOpen, setIsDetailsPanelOpen] = useState(false);

  // Active request/chat states
  const [activeRequestId, setActiveRequestId] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState({
    message: '',
    type: null
  });

  // Open notarize modal
  const openNotarizeModal = (scheduleMode = false) => {
    setIsScheduleMode(scheduleMode);
    setIsNotarizeModalOpen(true);
  };

  // Open chat panel
  const openChatPanel = (requestId) => {
    setActiveRequestId(requestId);
    setIsChatPanelOpen(true);
  };

  // Open request details panel
  const openDetailsPanel = (requestId) => {
    setActiveRequestId(requestId);
    setIsDetailsPanelOpen(true);
  };

  // Show toast notification
  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: null }), 5000);
  };

  // Handle new notarization submission
  const handleNotarizeSubmit = () => {
    setIsNotarizeModalOpen(false);
    if (isScheduleMode) {
      showToast('Notarization scheduled successfully', 'success');
    } else {
      showToast('Notarization request submitted successfully', 'success');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA]">

      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F2937]">User Dashboard</h1>
          <p className="text-[#6B7280] mt-2 text-lg">Manage your notarization requests</p>
        </div>

        <NotarizationPanel
          onNotarizeNow={() => openNotarizeModal(false)}
          onSchedule={() => openNotarizeModal(true)}
        />        

        <ActiveRequestsSection
          requests={mockRequests} 
          onOpenChat={openChatPanel}
          onViewDetails={openDetailsPanel} 
        />

        <RequestHistorySection
          requests={mockHistoryRequests} 
          onViewChatHistory={openChatPanel}
        />
      </main>

      {/* Modals */}

      <NotarizeModal
        isOpen={isNotarizeModalOpen}
        isScheduleMode={isScheduleMode}
        onClose={() => setIsNotarizeModalOpen(false)}
        onSubmit={handleNotarizeSubmit}
      />

      {/* Slide-in Panels */}

      <ChatPanel
        isOpen={isChatPanelOpen}
        requestId={activeRequestId}
        onClose={() => setIsChatPanelOpen(false)}
        onViewDetails={() => {
          setIsChatPanelOpen(false);
          setIsDetailsPanelOpen(true);
        }}
      />

      <RequestDetailsPanel
        isOpen={isDetailsPanelOpen}
        requestId={activeRequestId}
        onClose={() => setIsDetailsPanelOpen(false)}
        onOpenChat={() => {
          setIsDetailsPanelOpen(false);
          setIsChatPanelOpen(true);
        }}
        onStartZoom={() => showToast('Starting Zoom call...', 'info')}
      />

      {/* Toast Notifications */}
      {toast.type && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: null })}
        />
      )}
    </div>
  );
}