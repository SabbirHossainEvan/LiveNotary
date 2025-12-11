

import React, { useState } from 'react'; 
import { XIcon, UploadCloud, FileText } from 'lucide-react'; 


export const NotarizeModal = ({ isOpen, isScheduleMode, onClose, onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [docTypeOptional, setDocTypeOptional] = useState('');
    const [documentFile, setDocumentFile] = useState(null); 


    const [numberOfSigners, setNumberOfSigners] = useState(2);
    const [signers, setSigners] = useState([
        { name: '', email: '' },
        { name: '', email: '' }
    ]);


    if (!isOpen) return null;


    const handleSignerCountChange = (e) => {
        const count = parseInt(e.target.value);
        setNumberOfSigners(count);
        const newSigners = [...signers];
        if (count > signers.length) {
            for (let i = signers.length; i < count; i++) {
                newSigners.push({ name: '', email: '' });
            }
        } else {
            newSigners.splice(count);
        }
        setSigners(newSigners);
    };

    const updateSigner = (index, field, value) => {
        const newSigners = [...signers];
        newSigners[index][field] = value;
        setSigners(newSigners);
    };


    const handleFileChange = (e) => {

        if (e.target.files && e.target.files.length > 0) {
            setDocumentFile(e.target.files[0]);
        }
    };


    const handleClearFile = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        setDocumentFile(null);

        const fileInput = document.getElementById('document-upload');
        if (fileInput) {
            fileInput.value = '';
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!documentFile) {
            alert("Please upload a document before submitting.");
            return;
        }

        console.log("Submitting file:", documentFile); 
        console.log("Other data:", { fullName, email, phone, docTypeOptional, signers });

        onSubmit();

    };


    return (
        <div className="fixed inset-0 z-50 overflow-y-auto mt-20 bg-transparent bg-opacity-40 backdrop-blur-lg">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

                <div
                    className="fixed inset-0 transition-opacity bg-transparent bg-opacity-75"
                    onClick={onClose}
                ></div>


                <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl">

                    {/* Header */}
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {isScheduleMode ? 'Schedule Notarization' : 'Notarize Now'}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                            <XIcon className="h-5 w-5" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="px-6 pb-6 max-h-[85vh] overflow-y-auto">


                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {/* Full Name */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Phone Number */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Document Type */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Document Type (optional)
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={docTypeOptional}
                                    onChange={(e) => setDocTypeOptional(e.target.value)}
                                />
                            </div>
                        </div>


                        {isScheduleMode && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                            </div>
                        )}


                        <div className="mt-4">
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Upload Document <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="document-upload"
                                    className={`relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white 
                                    ${documentFile ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'
                                        } transition-colors p-4`}
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                                        {documentFile ? (
                                            <>
                                                <FileText className="w-8 h-8 mb-2 text-blue-600" />
                                                <p className="text-sm text-gray-800 font-medium truncate w-full px-2">{documentFile.name}</p>
                                                <p className="text-xs text-blue-600 mt-1">Click or drag new file to change</p>

                                                <button
                                                    onClick={handleClearFile}
                                                    className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 rounded-full bg-white/70 shadow"
                                                    aria-label="Remove document"
                                                >
                                                    <XIcon className="w-4 h-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <UploadCloud className="w-8 h-8 mb-2 text-gray-400" />
                                                <p className="text-sm text-gray-600">
                                                    Drag and drop your file here, or <span className="text-blue-600 font-medium">browse</span>
                                                </p>
                                                <p className="text-xs text-gray-500">PDF, JPG, PNG (max 25MB)</p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        id="document-upload"
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            {/* Number of Signers */}
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Number of Signers
                                </label>
                                <select
                                    className="block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none"
                                    value={numberOfSigners}
                                    onChange={handleSignerCountChange}
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Individual Signer Fields */}
                            {signers.map((signer, index) => (
                                <div key={index} className="bg-white p-0"> 
                                    <h4 className="text-sm font-medium text-gray-700 mb-2">Signer {index + 1}</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-1 text-sm text-gray-500">Name</label>
                                            <input
                                                type="text"
                                                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                value={signer.name}
                                                onChange={(e) => updateSigner(index, 'name', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-sm text-gray-500">Email</label>
                                            <input
                                                type="email"
                                                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                                value={signer.email}
                                                onChange={(e) => updateSigner(index, 'email', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-end pt-4 border-t border-[#E5E7EB] mt-6">
                            {/* Cancel Button */}
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2.5 text-sm font-medium text-[#6B7280] hover:text-[#1F2937] transition-colors mr-3"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-8 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                            >
                                {isScheduleMode ? 'Schedule Notarization' : 'Submit Request'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};