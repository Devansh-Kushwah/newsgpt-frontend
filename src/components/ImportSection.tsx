import React from 'react';
import { Github } from 'lucide-react';

const ImportSection = () => {
  return (
    <div className="text-center mb-10">
      <p className="text-gray-400 mb-4">or import from</p>
      <div className="flex justify-center gap-4">
        <button className="bg-[#1e1e24] hover:bg-[#2a2a32] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L12 21M12 12L19.5 7.5M12 12L4.5 7.5M19.5 16.5V7.5M4.5 16.5V7.5M4.5 7.5L12 3L19.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Figma
        </button>
        <button className="bg-[#1e1e24] hover:bg-[#2a2a32] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
          <Github size={20} />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default ImportSection;