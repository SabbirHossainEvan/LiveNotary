
'use client';
import React, { useState } from 'react';
import SignerForm from '@/components/Modals/forms/SignerForm';
import NotaryForm from '@/components/Modals/forms/NotaryForm';
import AffiliateForm from '@/components/Modals/forms/AffiliateForm';

const tabs = [
    { role: 'signer', label: 'Signer(s)', description: 'Need notarization' },
    { role: 'notary', label: 'Notary', description: 'Provide services' },
    { role: 'affiliate', label: 'Affiliate', description: 'Earn commissions' },
];

const SignupModal = () => {

    const [currentRole, setCurrentRole] = useState('signer');

    let FormComponent;
    if (currentRole === 'signer') FormComponent = SignerForm;
    if (currentRole === 'notary') FormComponent = NotaryForm;
    if (currentRole === 'affiliate') FormComponent = AffiliateForm;

    return (
        <div className="p-4 ">
            {/* Tab Navigation Section */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.role}
                        onClick={() => setCurrentRole(tab.role)}
                        className={`
                            p-3 rounded-lg border transition duration-200 text-center
                            ${currentRole === tab.role 
                                ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-md'
                                : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                            }
                        `}
                    >
                        <span className="font-semibold block">{tab.label}</span>
                        <span className="text-xs text-gray-500 block">{tab.description}</span>
                    </button>
                ))}
            </div>

            <FormComponent />
        </div>
    );
};

export default SignupModal;
