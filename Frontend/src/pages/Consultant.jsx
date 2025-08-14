import React, { useState } from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileDrawer from '../components/MobileDrawer';
import Footer from '../components/Footer';
import Logo from '../assets/logo.png';

const Consultant = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="text-[hsl(0_0%_25%)] min-h-screen flex flex-col">
      {/* Header with responsive navigation */}
      <header className="bg-[hsl(231_48%_48%)] text-[#ffffff] py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src={Logo} alt="at digital" className="h-8" />
          <div className="hidden md:flex">
            <DesktopNav />
          </div>
          <button 
            className="md:hidden text-[#ffffff]"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            {drawerOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Content */}
      <main className="flex-grow">
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Consultant;