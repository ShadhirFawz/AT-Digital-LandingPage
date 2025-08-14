import React from 'react';

const MobileDrawer = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-[hsl(0_0%_25%/0.5)] z-50" 
      onClick={onClose}
    >
      <div 
        className="fixed top-0 right-0 h-2/3 w-3/4 bg-white text-black p-4 shadow-lg" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button 
            className="text-black p-2"
            onClick={onClose}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-8 px-4">
          <a href="#" className="text-lg hover:text-[hsl(28_80%_58%)] transition-colors">SERVICES</a>
          <a href="#" className="text-lg hover:text-[hsl(28_80%_58%)] transition-colors">ABOUT US</a>
          <a href="#" className="text-lg hover:text-[hsl(28_80%_58%)] transition-colors">CONTACT US</a>
          <a href="#" className="text-lg hover:text-[hsl(28_80%_58%)] transition-colors">CAREERS</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;