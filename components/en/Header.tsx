"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "About", href: "about" },
    { name: "Work", href: "work" },
    { name: "Pricing", href: "pricing" },
    { name: "Contact", href: "contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/98 backdrop-blur-xl border-b border-darkBlue-600/30 shadow-2xl shadow-darkBlue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hebrew Language Switch */}
            {/* Revolutionary AI Neural Network Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
                             {/* Main Logo - AI Neural Network Concept */}
               <div className="w-14 h-14 relative">
                 {/* Central Node - Letter E */}
                 <div className="w-8 h-8 bg-gradient-to-br from-darkBlue-600 via-darkBlue-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-darkBlue-500/50 relative z-20 group-hover:scale-110 transition-transform duration-300 mx-auto mt-3">
                   <span className="text-white font-bold text-base">E</span>
                 </div>
                 
                 {/* Neural Network Nodes */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   {/* Top Node */}
                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-darkBlue-400 rounded-full opacity-80 animate-pulse"></div>
                   
                   {/* Bottom Node */}
                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-darkBlue-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-300"></div>
                   
                   {/* Left Node */}
                   <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-darkBlue-400 rounded-full opacity-80 animate-pulse delay-200"></div>
                   
                   {/* Right Node */}
                   <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-darkBlue-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-400"></div>
                 </div>
                 
                 {/* Simple Connections */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                                     <line x1="28" y1="28" x2="28" y2="8" stroke="#3b82f6" strokeWidth="1" opacity="0.6"/>
                  <line x1="28" y1="28" x2="28" y2="48" stroke="#1e40af" strokeWidth="1" opacity="0.6"/>
                  <line x1="28" y1="28" x2="8" y2="28" stroke="#2563eb" strokeWidth="1" opacity="0.6"/>
                  <line x1="28" y1="28" x2="48" y2="28" stroke="#3b82f6" strokeWidth="1" opacity="0.6"/>
                 </svg>
                 
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-gradient-to-r from-darkBlue-500/20 via-blue-500/20 to-darkBlue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
               </div>
            </div>
            
            {/* Enhanced Name with gradient and glow */}
            <div className="relative">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-darkBlue-100 to-blue-100 bg-clip-text text-transparent group-hover:from-darkBlue-200 group-hover:to-blue-200 transition-all duration-300">
                Eran Haim
              </span>
              {/* Subtle glow behind name */}
              <div className="absolute inset-0 bg-gradient-to-r from-darkBlue-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Tech subtitle */}
              <div className="absolute -bottom-5 left-0 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">
                AI Developer
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Services */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-darkBlue-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-darkBlue-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-darkBlue-400 transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-xl border border-darkBlue-600/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-3">
                  <div
                    onClick={() => {
                      const pricingSection = document.getElementById("pricing");
                      pricingSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-gray-300 hover:text-darkBlue-400 transition-colors duration-200 cursor-pointer"
                  >
                    Website Development
                  </div>
                  {[
                    "App Development", 
                    "Fast Development (7 days!)",
                    "Chatbots & AI",
                    "Automations & Integrations",
                    "Speed & SEO"
                  ].map((service, index) => (
                    <div
                      key={service}
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        contactSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-gray-300 hover:text-darkBlue-400 transition-colors duration-200 cursor-pointer"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Language Switch */}
            <a
              href="/"
              className="text-sm text-darkBlue-300 hover:text-white transition-colors duration-200 border border-darkBlue-600 px-3 py-1 rounded-full hover:border-darkBlue-400"
            >
              עברית
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block w-full text-left text-gray-300 hover:text-darkBlue-400 transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </button>
            ))}

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
