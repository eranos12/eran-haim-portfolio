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
        ? 'bg-gray-900/98 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              {/* Main Logo Container */}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                
                {/* AI Circuit Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-400"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-600"></div>
                  
                  {/* Circuit Lines */}
                  <div className="absolute top-2 left-2 w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <div className="absolute top-2 right-2 w-2 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                </div>
                
                {/* Central Logo Elements */}
                <div className="relative z-10 flex items-center justify-center">
                  {/* Main Letter E with enhanced styling */}
                  <span className="text-white font-black text-2xl group-hover:scale-110 transition-transform duration-300 relative">
                    E
                    {/* Glow effect on E */}
                    <div className="absolute inset-0 bg-white blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </span>
                  
                  {/* Floating AI Elements */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500">
                    <div className="w-full h-full bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-300 transition-all duration-500">
                    <div className="w-full h-full bg-white rounded-full animate-ping delay-300"></div>
                  </div>
                  
                  {/* Tech Icons */}
                  <div className="absolute top-0 left-0 w-3 h-3 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin">
                    ⚛️
                  </div>
                  <div className="absolute top-0 right-0 w-3 h-3 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin delay-200">
                    🚀
                  </div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin delay-400">
                    ⚡
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin delay-600">
                    🎯
                  </div>
                </div>
                
                {/* Corner accents with tech theme */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 rounded-tl-2xl opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-cyan-400 via-blue-400 to-purple-400 rounded-br-2xl opacity-80"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Hover ring effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              
              {/* Floating particles around logo */}
              <div className="absolute -top-2 -right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-600 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-900 transition-opacity duration-500"></div>
            </div>
            
            {/* Enhanced Name with gradient and glow */}
            <div className="relative">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-cyan-200 transition-all duration-300">
                Eran Haim
              </span>
              {/* Subtle glow behind name */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Tech subtitle */}
              <div className="absolute -bottom-5 left-0 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">
                AI Developer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

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
                className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium py-2"
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
