import React from 'react';
import { COLORS, BRAND_CONFIG } from '../constants';

const ChatAssistant: React.FC = () => {
  const handleContact = () => {
    window.location.href = `mailto:${BRAND_CONFIG.email || 'saltbuilds@gmail.com'}?subject=Project Inquiry`;
  };

  return (
    <button
      onClick={handleContact}
      className="fixed bottom-10 right-10 z-[100] w-16 h-16 md:w-20 md:h-20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/40 group relative overflow-hidden"
      style={{ backgroundColor: COLORS.NAVY }}
      aria-label="Contact Us"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </button>
  );
};

export default ChatAssistant;
