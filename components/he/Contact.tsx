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
    const mailtoLink = `mailto:eranwebs@gmail.com?subject=יצירת קשר מהפורטפוליו מאת ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0Aמאת: ${formData.name}%0Aמייל: ${formData.email}`;
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
      name: "מייל",
      value: "eranwebs@gmail.com",
      href: "mailto:eranwebs@gmail.com",
      icon: "📧",
      color: "from-darkBlue-500 to-darkBlue-600",
      bgColor: "bg-darkBlue-500/20",
      borderColor: "border-darkBlue-500/30"
    },
    {
      name: "וואטסאפ",
      value: "+972-50-846-2276",
      href: "https://wa.me/972508462276",
      icon: "💚",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "לינקדאין",
      value: "linkedin.com/in/eran-haim",
      href: "https://www.linkedin.com/in/eran-haim/",
      icon: "💼",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-600/30"
    },
    {
      name: "גיטהאב",
      value: "github.com/eranos12",
      href: "https://github.com/eranos12",
      icon: "🐙",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-700/20",
      borderColor: "border-gray-700/30"
    }
  ];

  const services = [
    "בניית אתרים לעסקים קטנים וגדולים",
    "אפליקציות עסקיות מותאמות אישית",
    "צ'אטבוטים ואוטומציות AI",
    "אינטגרציות עם מערכות קיימות",
    "אתרי תדמית עם שכבת AI שמביאה לידים",
    "תחזוקה ושיפור מתמשך"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-darkBlue-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 overflow-visible">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight px-2 pb-2">
            <span className="bg-gradient-to-l from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent">
              בואו נבנה משהו מדהים יחד
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            יש לכם רעיון? בואו נדבר על איך אנחנו יכולים להביא אותו לחיים עם טכנולוגיה מתקדמת וחוויית משתמש יוצאת דופן.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Right Column - Services & Info (RTL layout) */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white text-right">
                  שלחו הודעה
                </h3>
                <p className="text-gray-300 text-right">
                  מוכנים להתחיל את הפרויקט שלכם? מלאו את הטופס למטה ואני אחזור אליכם תוך 24 שעות.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-right">
                    שם
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-darkBlue-500 focus:ring-2 focus:ring-darkBlue-500/20 transition-all duration-300 text-right"
                    placeholder="השם שלכם"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-right">
                    מייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-darkBlue-500 focus:ring-2 focus:ring-darkBlue-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-right">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-darkBlue-500 focus:ring-2 focus:ring-darkBlue-500/20 transition-all duration-300 resize-none text-right"
                    placeholder="ספרו לי על הפרויקט שלכם..."
                    dir="rtl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-l from-darkBlue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-darkBlue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-darkBlue-500/25"
                >
                  שלח הודעה
                </button>
              </form>

              {/* Response Time Info */}
              <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30" dir="rtl">
                <div className="flex items-center space-x-3 justify-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-300 text-right">
                    אני בדרך כלל עונה תוך 24 שעות בימי עבודה.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Form (RTL layout) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white text-right">
                בואו נבנה את האתר שלכם!
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed text-right">
                מתמחה בבניית אתרים מהירים ויעילים לעסקים. מ-0 ועד אתר מלא שעובד באוויר ונראה מדהים - עד 7 ימי עבודה! עם כל מה שתצטרכו: צ'אטבוטים, אוטומציות ואינטגרציות.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-darkBlue-400 text-right">שירותים</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-darkBlue-500/20 border border-darkBlue-500/30 hover:border-darkBlue-400 transition-all duration-300 hover:scale-105 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-300 text-sm text-right flex-1">{service}</span>
                    <div className="w-2 h-2 bg-darkBlue-400 rounded-full flex-shrink-0"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-darkBlue-400 text-right">יצירת קשר</h4>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 space-x-reverse p-3 rounded-lg ${link.bgColor} border ${link.borderColor} hover:scale-105 transition-all duration-300 transform group`}
                  >
                    <div className={`w-3 h-3 bg-gradient-to-l ${link.color} rounded-full transition-opacity duration-300`}></div>
                    <div className="flex-1 text-right">
                      <div className="font-medium text-white transition-colors duration-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-300 transition-colors duration-300">
                        {link.value}
                      </div>
                    </div>
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
