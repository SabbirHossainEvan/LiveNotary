// components/Modals/SuccessModal.js
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

const SuccessModal = () => {
    const router = useRouter();

    const handleGoToDashboard = () => {
        router.push('/dashboard'); 
    };

    return (
        <div className="text-center p-6 space-y-4">
            {/* Success Icon */}
            <div className="flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
            </div>

            <h3 className="text-xl font-bold text-gray-800">Request Submitted!</h3>
            <p className="text-gray-600 text-sm">
                 connecting you with a verified notary.  receive a notification shortly.
            </p>

            <button
                onClick={handleGoToDashboard}
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 mt-4"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default SuccessModal;