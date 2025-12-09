import React from 'react';
import { FileTextIcon, CalendarIcon } from 'lucide-react';

export const NotarizationPanel = ({ onNotarizeNow, onSchedule }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
        Start Your Notarization
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={onNotarizeNow}
          className="flex-1 flex items-center justify-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-4 px-6 rounded-xl transition-colors"
        >
          <FileTextIcon className="h-5 w-5" />
          <span className="font-medium text-base">Notarize Now</span>
        </button>

        <button
          onClick={onSchedule}
          className="flex-1 flex items-center justify-center gap-3 bg-[#14B8A6] hover:bg-[#0D9488] text-white py-4 px-6 rounded-xl transition-colors"
        >
          <CalendarIcon className="h-5 w-5" />
          <span className="font-medium text-base">Schedule Notarization</span>
        </button>
      </div>
    </div>
  );
};
