
import React from 'react';

import { BellIcon, XIcon } from 'lucide-react'; 
import { NotificationOverlay } from '../Modals/NotificationOverlay';

const Header = ({ title, subtitle, isOverlayOpen, onBellClick, notifications, onClose, onMarkAllRead, onMarkRead }) => {
  return (
    <div className="mb-8 flex justify-between items-start relative"> 
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-1 text-lg text-gray-500">{subtitle}</p>
      </div>

      {/* Notification Bell Icon */}
      <div className="relative">
        <button
          onClick={onBellClick}
          className="relative p-2 rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
        >

          <BellIcon className="h-6 w-6 text-gray-600" />
          
          {/* Unread count/dot conditional rendering */}
          {notifications && notifications.some(n => !n.read) && (
             <span className="absolute top-1 right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500"></span>
          )}
        </button>

        {/* Notification Overlay Conditional Rendering */}
        {isOverlayOpen && (
          <NotificationOverlay 
            notifications={notifications}
            onClose={onClose} 
            onMarkAllRead={onMarkAllRead}
            onMarkRead={onMarkRead}
          />
        )}
      </div>
    </div>
  );
};

export default Header;