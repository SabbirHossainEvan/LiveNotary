import React, { useEffect, useState } from 'react';
import {
    XIcon,
    CheckCircleIcon,
    AlertCircleIcon,
    InfoIcon,
    AlertTriangleIcon
} from 'lucide-react';

export const Toast = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 4700);

        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircleIcon className="h-5 w-5 text-[#22C55E]" />;
            case 'warning':
                return <AlertTriangleIcon className="h-5 w-5 text-[#FACC15]" />;
            case 'error':
                return <AlertCircleIcon className="h-5 w-5 text-[#EF4444]" />;
            case 'info':
                return <InfoIcon className="h-5 w-5 text-[#3B82F6]" />;
            default:
                return null;
        }
    };

    const getBorderColor = () => {
        switch (type) {
            case 'success':
                return 'border-l-[#22C55E]';
            case 'warning':
                return 'border-l-[#FACC15]';
            case 'error':
                return 'border-l-[#EF4444]';
            case 'info':
                return 'border-l-[#3B82F6]';
            default:
                return 'border-l-[#6B7280]';
        }
    };

    return (
        <div
            className={`fixed top-4 right-4 z-50 transform transition-transform duration-300 ease-in-out ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div
                className={`flex items-center p-4 bg-white shadow-md rounded-lg border-l-4 ${getBorderColor()} max-w-sm`}
            >
                <div className="flex-shrink-0 mr-3">{getIcon()}</div>

                <div className="flex-1">
                    <p className="text-sm font-medium text-[#1F2937]">{message}</p>
                </div>

                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(onClose, 300);
                    }}
                    className="ml-4 flex-shrink-0 text-[#6B7280] hover:text-[#1F2937] transition-colors"
                >
                    <XIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};
