
// import React from 'react';
// import { XIcon, MessageSquareIcon, CalendarIcon, AlertCircleIcon } from 'lucide-react';

// export const NotificationOverlay = ({
//     notifications,
//     onClose,
//     onMarkAllRead,
//     onMarkRead
// }) => {
//     return (
//         <div className="absolute top-12 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
//             <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//                 <h3 className="font-semibold text-gray-900">Notifications</h3>
//                 <button
//                     onClick={onClose}
//                     className="text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                     <XIcon className="w-5 h-5" />
//                 </button>
//             </div>

//             <div className="max-h-[400px] overflow-y-auto">
//                 {notifications.length === 0 ? (
//                     <div className="p-8 text-center text-gray-500 text-sm">
//                         No notifications
//                     </div>
//                 ) : (
//                     <div>
//                         {notifications.map((notification) => (
//                             <div
//                                 key={notification.id}
//                                 onClick={() => onMarkRead(notification.id)}
//                                 className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 flex items-start gap-3 ${
//                                     !notification.read ? 'bg-blue-50/50' : 'bg-white'
//                                 }`}
//                             >
//                                 <div
//                                     className={`mt-1 p-2 rounded-full flex-shrink-0 ${
//                                         notification.type === 'message'
//                                             ? 'bg-blue-100 text-blue-600'
//                                             : notification.type === 'calendar'
//                                             ? 'bg-green-100 text-green-600'
//                                             : 'bg-yellow-100 text-yellow-600'
//                                     }`}
//                                 >
//                                     {notification.type === 'message' && (
//                                         <MessageSquareIcon className="w-4 h-4" />
//                                     )}
//                                     {notification.type === 'calendar' && (
//                                         <CalendarIcon className="w-4 h-4" />
//                                     )}
//                                     {notification.type === 'alert' && (
//                                         <AlertCircleIcon className="w-4 h-4" />
//                                     )}
//                                 </div>

//                                 <div>
//                                     <h4 className="text-sm font-medium text-gray-900 mb-0.5">
//                                         {notification.title}
//                                     </h4>
//                                     <p className="text-sm text-gray-600 mb-1 leading-snug">
//                                         {notification.description}
//                                     </p>
//                                     <span className="text-xs text-gray-400">{notification.time}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <div className="p-4 border-t border-gray-100 bg-white">
//                 <button
//                     onClick={onMarkAllRead}
//                     className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
//                 >
//                     Mark all as read
//                 </button>
//             </div>
//         </div>
//     );
// };


// components/NotificationOverlay.jsx

import React from 'react';
// Lucide-react icons-gulo
import { X as XIcon, MessageSquare as MessageSquareIcon, Calendar as CalendarIcon, AlertCircle as AlertCircleIcon } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Array<Object>} props.notifications - List of notification objects.
 * @param {Function} props.onClose - Function to close the overlay.
 * @param {Function} props.onMarkAllRead - Function to mark all notifications as read.
 * @param {Function} props.onMarkRead - Function to mark a specific notification as read.
 */
export const NotificationOverlay = ({
    notifications = [], // Default to an empty array for safety
    onClose,
    onMarkAllRead,
    onMarkRead
}) => {
    // Check for unread notifications to conditionally show the "Mark all as read" button
    const hasUnread = notifications.some(n => !n.read);

    // Function to select the appropriate icon based on notification type
    const getIcon = (type) => {
        switch (type) {
            case 'message':
                return <MessageSquareIcon className="w-4 h-4" />;
            case 'calendar':
                return <CalendarIcon className="w-4 h-4" />;
            case 'alert':
                return <AlertCircleIcon className="w-4 h-4" />;
            default:
                return <AlertCircleIcon className="w-4 h-4" />; // Default icon
        }
    };

    // Function to select appropriate icon background colors
    const getIconStyle = (type) => {
        switch (type) {
            case 'message':
                return 'bg-blue-100 text-blue-600';
            case 'calendar':
                return 'bg-green-100 text-green-600';
            case 'alert':
                return 'bg-yellow-100 text-yellow-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        // Absolute positioning in Header component-er "relative" container-er moddhe thakbe
        <div className="absolute top-12 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            
            {/* Header Section */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button
                    onClick={onClose}
                    aria-label="Close notifications"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Notification List Container */}
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {notifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 text-sm">
                        No notifications
                    </div>
                ) : (
                    <div>
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                // onMarkRead call hobe jodi notification unread thake
                                onClick={() => !notification.read && onMarkRead && onMarkRead(notification.id)}
                                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors flex items-start gap-3
                                    ${!notification.read ? 'bg-blue-50/70 hover:bg-blue-100' : 'bg-white hover:bg-gray-50'}
                                `}
                            >
                                {/* Icon Section */}
                                <div
                                    className={`mt-1 p-2 rounded-full flex-shrink-0 ${getIconStyle(notification.type)}`}
                                >
                                    {getIcon(notification.type)}
                                </div>

                                {/* Content Section */}
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 mb-0.5">
                                        {notification.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-1 leading-snug">
                                        {notification.description}
                                    </p>
                                    <span className="text-xs text-gray-400">{notification.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer Section - Mark All Read */}
            {hasUnread && ( // Only show if there are unread items
                <div className="p-4 border-t border-gray-100 bg-white">
                    <button
                        onClick={onMarkAllRead}
                        className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Mark all as read
                    </button>
                </div>
            )}
        </div>
    );
};