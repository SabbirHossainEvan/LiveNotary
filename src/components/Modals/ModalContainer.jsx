// components/Modals/ModalContainer.jsx
'use client';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const ModalContainer = ({ children, title = 'Modal' }) => {
    const router = useRouter();

    const handleClose = () => {
        router.push('/')
    };

    return (

        <div 
            className="fixed inset-0  bg-transparent bg-opacity-40 flex items-center justify-center p-4 transition-opacity duration-300 top-20" 
            onClick={handleClose}
        >
            
            {/* Modal Content Container */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full md:w-[24%] max-w-lg max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300 relative" 

                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex justify-between items-center px-6 py-4 top-0 bg-white z-10">

                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <button 
                        onClick={handleClose} 
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalContainer;