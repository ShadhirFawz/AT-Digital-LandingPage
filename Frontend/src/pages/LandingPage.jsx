import React, { useState } from 'react'
import DesktopNav from '../components/DesktopNav'
import MobileDrawer from '../components/MobileDrawer'
import Footer from '../components/Footer'
import HeroImage from '../assets/hero-image.png'
import Logo from '../assets/logo.png'
import StrategyImg from '../assets/strategy-icon.png'
import AppIcon from '../assets/app-icon.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquip. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquip. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquip. Sapien massa morbi risus sagittis tortor integer.'
    }
  ]

  return (
    <div className="text-[hsl(0_0%_25%)]">
      <header className="bg-[hsl(231_48%_48%)] text-[#ffffff] py-4">
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

      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image - Full width container */}
        <div className="w-full h-auto md:h-[600px] overflow-hidden">
          <img 
            src={HeroImage} 
            alt="desk setup" 
            className="w-full h-auto object-fill md:object-fill object-left"
          />
        </div>
        
        {/* Content Box - Positioned absolutely over the image */}
        <div className="container mx-auto px-0 md:px-4">
          <div className="md:w-1/2 bg-gradient-to-r from-green-400 to-blue-400 text-[#ffffff] p-6 md:p-12 relative md:absolute md:top-3/5 md:-translate-y-1/2 md:left-15 mt-0 md:mt-0">
            <h1 className="text-3xl md:text-4xl mb-8 lg:text-5xl font-bold">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
            <Link 
              to='/consultant'
              className="mt-4 bg-[hsl(28_80%_58%)] text-[#ffffff] hover:text-blue-50 cursor-pointer px-6 py-2 uppercase text-sm font-bold"
            >
              Get free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Web & Mobile App Development Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg">
            <div className="md:w-2/5">
              <img src={AppIcon} alt="web app icon" className="w-full max-w-xs mx-auto" />
            </div>
            <div className="md:w-3/5 text-center md:text-left">
              <h2 
                className="text-[hsl(231_48%_48%)] text-3xl font-bold"
                style={{fontFamily: "'Poppins', sans-serif" }}
              >
                Web & Mobile App Development
              </h2>
              <p 
                className="mt-4 text-black font-normal"
                style={{fontFamily: "'Inter', sans-serif" }}
              >
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <button className="mt-4 bg-[hsl(28_80%_58%)] text-[#ffffff] hover:text-blue-50 cursor-pointer px-6 py-2 uppercase text-sm font-bold">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Consulting Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-8 bg-white rounded-lg">
            <div className="md:w-2/5">
              <img src={StrategyImg} alt="strategy icon" className="w-full max-w-xs mx-auto" />
            </div>
            <div className="md:w-3/5 text-center md:text-left">
              <h2 
                className="text-[hsl(231_48%_48%)] text-3xl font-bold"
                style={{fontFamily: "'Poppins', sans-serif" }}
              >
                Digital Strategy Consulting
              </h2>
              <p 
                className="mt-4 text-black font-normal"
                style={{fontFamily: "'Inter', sans-serif" }}
              >
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <button className="mt-4 bg-[hsl(28_80%_58%)] text-[#ffffff] hover:text-blue-50 cursor-pointer px-6 py-2 uppercase text-sm font-bold">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-[hsl(240_33%_99%)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-[hsl(231_48%_48%)] text-3xl font-bold text-center mb-8"
              style={{fontFamily: "'Poppins', sans-serif" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-lg shadow-md p-6 transition-all duration-200"
              >
                <button 
                  className="flex justify-between items-center w-full text-left"
                  style={{fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-medium text-lg ${
                    openIndex === index ? 'text-[#0119b7b8]' : 'text-black'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-[hsl(231_48%_48%)] cursor-pointer text-2xl font-bold ml-4">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
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
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage