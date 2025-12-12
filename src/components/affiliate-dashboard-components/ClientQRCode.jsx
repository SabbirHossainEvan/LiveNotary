// src/components/affiliate-dashboard-components/ClientQRCode.js
'use client';

import React, { useRef } from 'react';
// Note: This direct import is fine because this is a 'use client' file,
// but if you face the "Export default doesn't exist" error again, 
// you may need to change 'QRCode' to 'QRCodeCanvas' based on the build output's suggestion.
import QRCode from 'qrcode.react'; 

const ClientQRCode = ({ referralLink }) => {
    const qrCodeRef = useRef(null);

    // Function to Download QR Code
    const downloadQRCode = () => {
        // Since this component is client-only, window check is technically optional
        // but included for robustness.
        if (qrCodeRef.current) {
            const canvas = qrCodeRef.current.querySelector('canvas'); 
            
            if (canvas) {
                try {
                    const pngUrl = canvas
                        .toDataURL('image/png')
                        .replace('image/png', 'image/octet-stream');
                    
                    let downloadLink = document.createElement('a');
                    downloadLink.href = pngUrl;
                    downloadLink.download = 'livenotary_referral_qr.png';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                } catch (error) {
                    console.error("Error downloading QR code:", error);
                    alert("Could not download QR code. Please ensure the QR code is fully loaded.");
                }
            } else {
                alert("QR Code element not found for download.");
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">QR Code</h3>
            
            {/* QR Code Container */}
            <div 
                ref={qrCodeRef} 
                className="w-40 h-40 mb-4 p-2 border border-gray-200 rounded-lg bg-white flex items-center justify-center"
            >
                {/* Renders the QR Code */}
                <QRCode
                    value={referralLink} 
                    size={144} 
                    level="H" 
                    renderAs="canvas" 
                />
            </div>

            <button 
                onClick={downloadQRCode}
                className="px-6 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center space-x-2"
            >
                {/* Download Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span>Download QR Code</span>
            </button>
        </div>
    );
};

export default ClientQRCode;