"use client";

import Header from "@/components/he/Header";
import About from "@/components/he/About";
import VisualProjects from "@/components/he/VisualProjects";
import Pricing from "@/components/he/Pricing";
import Contact from "@/components/he/Contact";

export default function HebrewHome() {
  return (
    <main className="min-h-screen bg-navy-900 text-white overflow-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Particle Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-darkBlue-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section with WOW Effect */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-darkBlue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 left-20 w-96 h-96 bg-darkBlue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Additional floating orbs */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-l from-darkBlue-500/30 to-blue-500/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-l from-blue-500/30 to-darkBlue-500/30 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-16 text-4xl opacity-20 animate-bounce">⚛️</div>
          <div className="absolute top-48 left-24 text-3xl opacity-20 animate-bounce delay-300">🚀</div>
          <div className="absolute bottom-32 right-24 text-3xl opacity-20 animate-bounce delay-700">⚡</div>
          <div className="absolute bottom-48 left-16 text-4xl opacity-20 animate-bounce delay-1000">🎯</div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/3 right-1/3 text-2xl opacity-15 animate-bounce">🔮</div>
          <div className="absolute top-2/3 left-1/3 text-2xl opacity-15 animate-bounce delay-1000">💎</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Title with Gradient and Animation */}
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-l from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent">
                  ערן חיים
                </span>
              </h1>
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-darkBlue-500 rounded-full animate-ping"></div>
              
              {/* Glowing effect behind name */}
              <div className="absolute inset-0 bg-gradient-to-l from-darkBlue-500/20 via-blue-400/20 to-darkBlue-600/20 blur-3xl -z-10"></div>
            </div>
            
            {/* Animated Subtitle */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
                בניית אתרים ואפליקציות לעסקים
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                אני בונה <span className="text-darkBlue-400 font-semibold">אתרי אינטרנט מהירים ומותאמים</span> לעסקים קטנים וגדולים
                <span className="text-darkBlue-400 font-semibold"> עם שכבת AI שמביאה לידים</span> - מ-0 ועד אתר שעובד ונראה מדהים!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const workSection = document.getElementById("work");
                  workSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-gradient-to-l from-darkBlue-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="relative z-10">לראות את העבודות שלי</span>
                <div className="absolute inset-0 bg-gradient-to-l from-darkBlue-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-darkBlue-500 text-darkBlue-400 rounded-full font-semibold text-lg hover:bg-darkBlue-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                יצירת קשר
              </button>
            </div>

            {/* Services Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {[
                'פיתוח מהיר (7 ימים!)', 
                'Next.js + AI', 
                'אתרי תדמית', 
                'צ\'אטבוטים', 
                'SEO & מהירות', 
                'תחזוקה שוטפת'
              ].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:text-darkBlue-400 hover:border-darkBlue-500 transition-all duration-300 hover:scale-110 transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-darkBlue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <VisualProjects />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
            <span className="text-lg font-semibold text-white">ערן חיים</span>
            <div className="relative group">
              {/* Neural Network Footer Logo */}
              <div className="w-10 h-10 relative">
                {/* Central Node - Letter E */}
                <div className="w-6 h-6 bg-gradient-to-bl from-darkBlue-500 via-blue-500 to-darkBlue-500 rounded-full flex items-center justify-center shadow-lg shadow-darkBlue-500/50 relative z-20 group-hover:scale-110 transition-transform duration-300 mx-auto mt-2">
                  <span className="text-white font-black text-sm">ע</span>
                </div>
                
                {/* Neural Network Nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Top Node */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-l from-blue-400 to-darkBlue-400 rounded-full opacity-80 animate-pulse"></div>
                  
                  {/* Bottom Node */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-l from-darkBlue-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-300"></div>
                  
                  {/* Left Node */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-l from-blue-400 to-darkBlue-400 rounded-full opacity-80 animate-pulse delay-200"></div>
                  
                  {/* Right Node */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-l from-darkBlue-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-400"></div>
                </div>
                
                {/* Simple Connections */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
                  <line x1="20" y1="20" x2="20" y2="5" stroke="#3b82f6" strokeWidth="1" opacity="0.6"/>
                  <line x1="20" y1="20" x2="20" y2="35" stroke="#1e40af" strokeWidth="1" opacity="0.6"/>
                  <line x1="20" y1="20" x2="5" y2="20" stroke="#2563eb" strokeWidth="1" opacity="0.6"/>
                  <line x1="20" y1="20" x2="35" y2="20" stroke="#3b82f6" strokeWidth="1" opacity="0.6"/>
                </svg>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-l from-darkBlue-500/20 via-blue-500/20 to-darkBlue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            פיתוח בינה מלאכותית ופול-סטאק
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ערן חיים. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </main>
  );
}
