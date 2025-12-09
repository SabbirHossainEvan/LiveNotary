import React, { useState } from 'react';
import { XIcon, UploadIcon, CheckIcon } from 'lucide-react';

export const NotarizeModal = ({ isOpen, isScheduleMode, onClose, onSubmit }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [docTypeOptional, setDocTypeOptional] = useState('');
  const [documentFile, setDocumentFile] = useState(null);

  // Signers
  const [numberOfSigners, setNumberOfSigners] = useState(2);
  const [signers, setSigners] = useState([
    { name: '', email: '' },
    { name: '', email: '' }
  ]);

  // Pricing
  const [selectedTier, setSelectedTier] = useState('standard');

  // Notes & Confirmation
  const [notes, setNotes] = useState('');
  const [isConfirmedFragment, setIsConfirmedFragment] = useState(false);

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
    if (e.target.files && e.target.files[0]) {
      setDocumentFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setDocTypeOptional('');
    setDocumentFile(null);
    setNumberOfSigners(2);
    setSigners([
      { name: '', email: '' },
      { name: '', email: '' }
    ]);
    setSelectedTier('standard');
    setNotes('');
    setIsConfirmedFragment(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documentFile) {
      alert('Please upload a document before submitting.');
      return;
    }
    onSubmit();
    resetForm();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-xl shadow-xl">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937]">
              {isScheduleMode ? 'Schedule Notarization' : 'Notarize Now'}
            </h3>
            <button
              onClick={onClose}
              className="text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-6 max-h-[85vh] overflow-y-auto">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                  Document Type (optional)
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                  value={docTypeOptional}
                  onChange={(e) => setDocTypeOptional(e.target.value)}
                />
              </div>
            </div>

            {/* Schedule Fields */}
            {isScheduleMode && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1F2937]">Select Date</label>
                  <input
                    type="date"
                    className="block w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1F2937]">Select Time</label>
                  <input
                    type="time"
                    className="block w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Upload Document */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                Upload Document <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="document-upload"
                  className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-[#F5F7FA] ${
                    documentFile ? 'border-[#3B82F6]' : 'border-[#E5E7EB] hover:border-[#3B82F6]'
                  } transition-colors`}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {documentFile ? (
                      <>
                        <UploadIcon className="w-8 h-8 mb-2 text-[#3B82F6]" />
                        <p className="text-sm text-[#1F2937] font-medium">{documentFile.name}</p>
                        <p className="text-xs text-[#6B7280]">Click to change file</p>
                      </>
                    ) : (
                      <>
                        <UploadIcon className="w-8 h-8 mb-2 text-[#6B7280]" />
                        <p className="text-sm text-[#1F2937]">
                          Drag and drop your file here, or <span className="text-blue-500">browse</span>
                        </p>
                        <p className="text-xs text-[#6B7280]">PDF, JPG, PNG (max 25MB)</p>
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

            {/* Signers */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                Number of Signers
              </label>
              <select
                className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] appearance-none"
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

            <div className="mb-8 space-y-4">
              {signers.map((signer, index) => (
                <div key={index} className="border border-[#E5E7EB] rounded-lg p-4">
                  <h4 className="text-sm font-medium text-[#1F2937] mb-3">Signer {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-sm text-[#6B7280]">Name</label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg"
                        value={signer.name}
                        onChange={(e) => updateSigner(index, 'name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-[#6B7280]">Email</label>
                      <input
                        type="email"
                        className="block w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg"
                        value={signer.email}
                        onChange={(e) => updateSigner(index, 'email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Tiers */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-[#1F2937] mb-3">Select Price Tier</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['basic', 'standard', 'priority'].map((tier) => {
                  const tierData = {
                    basic: { price: 25, features: ['Standard processing time (24-48 hours)', 'Single document notarization', 'Email support'] },
                    standard: { price: 35, features: ['Faster processing (12-24 hours)', 'Up to 3 documents', 'Priority email & chat support'] },
                    priority: { price: 50, features: ['Express processing (1-6 hours)', 'Unlimited documents', '24/7 priority support', 'Document review & suggestions'] }
                  }[tier];

                  return (
                    <div
                      key={tier}
                      className={`border rounded-xl p-4 cursor-pointer transition-all ${
                        selectedTier === tier ? 'border-[#3B82F6] ring-2 ring-[#3B82F6]' : 'border-[#E5E7EB] hover:border-[#3B82F6]'
                      } relative`}
                      onClick={() => setSelectedTier(tier)}
                    >
                      {selectedTier === tier && (
                        <div className="absolute top-2 right-2 text-blue-600">
                          <CheckIcon className="w-5 h-5 bg-blue-100 rounded-full p-0.5" />
                        </div>
                      )}
                      <h5 className="font-bold text-lg mb-1">{tier.charAt(0).toUpperCase() + tier.slice(1)}</h5>
                      <div className="text-2xl font-bold mb-3">${tierData.price}</div>
                      <ul className="text-xs text-[#6B7280] space-y-2">
                        {tierData.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckIcon className="w-3 h-3 text-blue-500 mt-0.5" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-[#1F2937]">Additional Notes for Notary</label>
              <textarea
                className="block w-full px-4 py-2.5 text-[#1F2937] bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#3B82F6] border-gray-300 rounded focus:ring-[#3B82F6]"
                  checked={isConfirmedFragment}
                  onChange={(e) => setIsConfirmedFragment(e.target.checked)}
                  required
                />
                <span className="ml-2 text-sm text-[#1F2937]">
                  I confirm I will verify identity during session.
                </span>
              </label>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end pt-4 border-t border-[#E5E7EB]">
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
