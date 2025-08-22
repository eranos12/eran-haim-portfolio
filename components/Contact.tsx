"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, use mailto - can be replaced with Formspree or other service
    const mailtoLink = `mailto:eranwebs@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.open(mailtoLink);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      name: "Email",
      value: "eranwebs@gmail.com",
      href: "mailto:eranwebs@gmail.com",
      icon: "📧",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "WhatsApp",
      value: "+972-50-846-2276",
      href: "https://wa.me/972508462276",
      icon: "💚",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/eranhaim",
      href: "https://linkedin.com/in/eranhaim",
      icon: "💼",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-600/30"
    },
    {
      name: "GitHub",
      value: "github.com/eranhaim",
      href: "https://github.com/eranhaim",
      icon: "🐙",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-700/20",
      borderColor: "border-gray-700/30"
    }
  ];

  const services = [
    "AI Integration & Machine Learning",
    "Full-Stack Web Applications",
    "Next.js & React Development",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Infrastructure & Deployment"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-purple-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 overflow-visible">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight px-2 pb-2">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have an idea? Let's discuss how we can bring it to life with cutting-edge technology and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Services & Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                What I Offer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building AI-powered applications and modern web solutions that deliver real business value. From concept to deployment, I handle every aspect of the development process.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400">Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400">Get In Touch</h4>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg ${link.bgColor} border ${link.borderColor} hover:scale-105 transition-all duration-300 transform group`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium text-white transition-colors duration-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-300 transition-colors duration-300">
                        {link.value}
                      </div>
                    </div>
                    <div className={`w-3 h-3 bg-gradient-to-r ${link.color} rounded-full transition-opacity duration-300`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Send a Message
              </h3>
              <p className="text-gray-300">
                Ready to start your project? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>

            {/* Response Time Info */}
            <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-300">
                  I typically respond within 24 hours during business days.
                </span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
