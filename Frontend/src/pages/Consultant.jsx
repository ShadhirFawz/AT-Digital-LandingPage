import React, { useState } from 'react';
import DesktopNav from '../components/DesktopNav';
import MobileDrawer from '../components/MobileDrawer';
import Footer from '../components/Footer';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Consultant = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is Webflow and why is it the best website builder?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    },
    {
      id: 2,
      question: 'What is Webflow and why is it the best website builder?',
      answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

      {/* Main Content - Left Aligned */}
      <main className="flex-grow py-12 bg-[hsl(240_33%_99%)]">
        <div className="container mx-auto px-4 space-y-6">
          <Link 
            to='/consultant'
            className="inline-block mt-4 bg-[hsl(28_80%_58%)] text-[#ffffff] hover:text-blue-50 cursor-pointer px-6 py-2 uppercase text-sm font-bold"
          >
            Get free consultation
          </Link>
          
          {/* Single Container for All FAQs */}
          <div className="bg-transparent border-2 border-dashed border-[hsl(231_48%_48%)] rounded-lg p-6 transition-all duration-200 max-w-3xl mt-8">
            {faqs.map((faq, index) => (
              <div key={faq.id} className={index !== 0 ? 'mt-6' : ''}>
                <button 
                  className="flex justify-between items-center w-full text-left"
                  style={{fontFamily: "'Inter', sans-serif" }}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-medium text-lg ${
                    openFaqIndex === index ? 'text-[#0119b7b8]' : 'text-black'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-[hsl(231_48%_48%)] cursor-pointer text-2xl font-bold ml-4">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaqIndex === index && (
                  <div className="mt-4 pt-4 border-t border-[hsl(0_0%_61%/0.2)]">
                    <p className="text-[hsl(0_0%_61%)]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Consultant;