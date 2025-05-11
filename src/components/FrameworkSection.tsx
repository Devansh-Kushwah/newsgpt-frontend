import React from 'react';

const FrameworkSection = () => {
  return (
    <div className="text-center">
      <p className="text-gray-400 mb-6">or start a blank app with your favorite stack</p>
      <div className="flex justify-center flex-wrap gap-8">
        {/* Angular */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.93 12.645H12.751V15.812H9.93V12.645Z" fill="currentColor"/>
            <path d="M11.373 1.812L1.501 5.496L3.033 17.435L11.374 22.189L19.715 17.435L21.246 5.496L11.373 1.812Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.91 15.812L8.91 8.812H13.967L15.967 15.812" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Vue */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3H5L12 15L19 3H23L12 22L1 3Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 3H9L12 8L15 3H19L12 15L5 3Z" fill="currentColor"/>
          </svg>
        </div>
        {/* Next.js */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19.5H22L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 14.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Nuxt.js */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 10L17 18H10L13.5 10Z" fill="currentColor"/>
            <path d="M6.5 4L2 18H11L6.5 4Z" fill="currentColor"/>
            <path d="M17.5 4L22 18H13L17.5 4Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* React */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="12" cy="12" rx="4.5" ry="10" transform="rotate(90 12 12)" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="12" cy="12" rx="3" ry="3" fill="currentColor"/>
          </svg>
        </div>
        {/* Vite */}
        <div className="w-12 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2L1 12L8 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2L23 12L16 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2L10 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FrameworkSection;