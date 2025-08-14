import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[hsl(231_48%_48%)] text-[#ffffff] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
        {/* Left section - Logo and text with right padding */}
        <div className="md:w-[45%] lg:w-[40%] pr-8 md:pl-12 lg:pr-16">
          <img src={Logo} alt="at digital" className="h-8 mb-6" />
          <p className="text-sm leading-relaxed" style={{fontFamily: "'Inter', sans-serif" }}>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>

        {/* Right section - Technologies and Services with left padding */}
        <div className="md:w-auto lg:w-[50%] flex flex-col md:flex-row gap-12 md:pr-12 lg:pl-16">
          <div className="md:w-1/2">
            <h3 className="font-bold text-lg mb-4"
                style={{fontFamily: "'Inter', sans-serif" }}
            >Our Technologies</h3>
            <ul className="text-sm space-y-3 cursor-pointer" style={{fontFamily: "'Lato', sans-serif" }}>
              <li className="hover:text-blue-100 transition-colors">ReactJS</li>
              <li className="hover:text-blue-100 transition-colors">Gatsby</li>
              <li className="hover:text-blue-100 transition-colors">NextJS</li>
              <li className="hover:text-blue-100 transition-colors">NodeJS</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="font-bold text-lg mb-4"
                style={{fontFamily: "'Inter', sans-serif" }}
            >Our Services</h3>
            <ul className="text-sm space-y-3 cursor-pointer" style={{fontFamily: "'Lato', sans-serif" }}>
              <li className="hover:text-blue-100 transition-colors">Social Media Marketing</li>
              <li className="hover:text-blue-100 transition-colors">Web & Mobile App Development</li>
              <li className="hover:text-blue-100 transition-colors">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-1/3 h-[2px] bg-white rounded-md"></div>
      </div>

      <div className="container mx-auto px-4 pt-6 text-center text-sm">
        <a href="#" className="hover:text-[hsl(28_80%_58%)] transition-colors px-3">Privacy Policy</a> | 
        <a href="#" className="hover:text-[hsl(28_80%_58%)] transition-colors px-3">Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer