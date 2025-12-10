
import React from 'react';
import { XIcon, MessageSquareIcon, CalendarIcon, AlertCircleIcon } from 'lucide-react';

export const NotificationOverlay = ({
    notifications,
    onClose,
    onMarkAllRead,
    onMarkRead
}) => {
    return (
        <div className="absolute top-12 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {notifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 text-sm">
                        No notifications
                    </div>
                ) : (
                    <div>
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => onMarkRead(notification.id)}
                                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 flex items-start gap-3 ${
                                    !notification.read ? 'bg-blue-50/50' : 'bg-white'
                                }`}
                            >
                                <div
                                    className={`mt-1 p-2 rounded-full flex-shrink-0 ${
                                        notification.type === 'message'
                                            ? 'bg-blue-100 text-blue-600'
                                            : notification.type === 'calendar'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                    }`}
                                >
                                    {notification.type === 'message' && (
                                        <MessageSquareIcon className="w-4 h-4" />
                                    )}
                                    {notification.type === 'calendar' && (
                                        <CalendarIcon className="w-4 h-4" />
                                    )}
                                    {notification.type === 'alert' && (
                                        <AlertCircleIcon className="w-4 h-4" />
                                    )}
                                </div>

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

            <div className="p-4 border-t border-gray-100 bg-white">
                <button
                    onClick={onMarkAllRead}
                    className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Mark all as read
                </button>
            </div>
        </div>
    );
};