

import React from 'react';
import { X as XIcon, MessageSquare as MessageSquareIcon, Calendar as CalendarIcon, AlertCircle as AlertCircleIcon } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Array<Object>} props.notifications 
 * @param {Function} props.onClose 
 * @param {Function} props.onMarkAllRead 
 * @param {Function} props.onMarkRead 
 */
export const NotificationOverlay = ({
    notifications = [], 
    onClose,
    onMarkAllRead,
    onMarkRead
}) => {

    const hasUnread = notifications.some(n => !n.read);

    const getIcon = (type) => {
        switch (type) {
            case 'message':
                return <MessageSquareIcon className="w-4 h-4" />;
            case 'calendar':
                return <CalendarIcon className="w-4 h-4" />;
            case 'alert':
                return <AlertCircleIcon className="w-4 h-4" />;
            default:
                return <AlertCircleIcon className="w-4 h-4" />; 
        }
    };

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

            {hasUnread && ( 
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