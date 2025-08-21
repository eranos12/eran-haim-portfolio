"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Particle Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
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
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Additional floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-bounce delay-1000"></div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 text-4xl opacity-20 animate-bounce">⚛️</div>
          <div className="absolute top-48 right-24 text-3xl opacity-20 animate-bounce delay-300">🚀</div>
          <div className="absolute bottom-32 left-24 text-3xl opacity-20 animate-bounce delay-700">⚡</div>
          <div className="absolute bottom-48 right-16 text-4xl opacity-20 animate-bounce delay-1000">🎯</div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/3 left-1/3 text-2xl opacity-15 animate-bounce">🔮</div>
          <div className="absolute top-2/3 right-1/3 text-2xl opacity-15 animate-bounce delay-1000">💎</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Title with Gradient and Animation */}
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Eran Haim
                </span>
              </h1>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
              
              {/* Glowing effect behind name */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-400/20 to-purple-600/20 blur-3xl -z-10"></div>
            </div>
            
            {/* Animated Subtitle */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
                AI Integration & Full-Stack Developer
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                I build <span className="text-purple-400 font-semibold">AI-powered web apps</span> and 
                <span className="text-purple-400 font-semibold"> high-quality user experiences</span> that 
                make a difference.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const workSection = document.getElementById("work");
                  workSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="relative z-10">See My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                Contact Me
              </button>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {['Next.js', 'TypeScript', 'AI/ML', 'React', 'OpenAI', 'Full-Stack'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:text-purple-400 hover:border-purple-500 transition-all duration-300 hover:scale-110 transform"
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
            <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative group">
              {/* Enhanced Footer Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                
                {/* AI Circuit Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-200"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-400"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-600"></div>
                  
                  {/* Circuit Lines */}
                  <div className="absolute top-1.5 left-1.5 w-1.5 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-1.5 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  <div className="absolute bottom-1.5 right-1.5 w-1.5 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                </div>
                
                {/* Letter E */}
                <span className="text-white font-black text-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                  E
                </span>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 rounded-tl-xl opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-cyan-400 via-blue-400 to-purple-400 rounded-br-xl opacity-80"></div>
              </div>
              
              {/* Hover ring effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            </div>
            <span className="text-lg font-semibold text-white">Eran Haim</span>
          </div>
          <p className="text-gray-300 mb-4">
            AI Integration & Full-Stack Developer
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Eran Haim. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
