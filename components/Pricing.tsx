const Pricing = () => {
  const packages = [
    {
      name: "Start",
      price: "₪1,900",
      description: "Perfect for small businesses wanting digital presence",
      features: [
        "Homepage + Contact + Gallery/Services",
        "Basic SEO",
        "Analytics and monitoring",
        "Clean design responsive for mobile",
        "Lead forms connected to WhatsApp",
        "Hosting and advanced technology"
      ],
      highlighted: false,
      buttonText: "Choose Package"
    },
    {
      name: "Grow",
      price: "₪2,900",
      description: "The popular choice for businesses that want to grow",
      features: [
        "Everything from Start package",
        "Blog/Product catalog",
        "CRM/Google Sheets integration",
        "High-speed optimization",
        "Advanced SEO with content",
        "Landing page optimized for conversions"
      ],
      highlighted: true,
      buttonText: "Most Popular!"
    },
    {
      name: "Pro",
      price: "₪3,900",
      description: "For businesses wanting the most advanced technology",
      features: [
        "Everything from Grow package",
        "Smart FAQ chatbot",
        "Advanced semantic search",
        "Conversion optimization with A/B testing",
        "Advanced analytics and reporting",
        "Custom integrations"
      ],
      highlighted: false,
      buttonText: "Complete Solution"
    }
  ];

  const addOns = [
    "Complete online store",
    "Articles area and content management",
    "Additional languages (Hebrew/Arabic)",
    "Advanced automations",
    "Mobile application",
    "Advanced booking system"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-darkBlue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent mb-6">
            Website Development Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All packages include clean design, Next.js + Tailwind, lead forms, basic SEO, analytics and fast browsing
          </p>
          <p className="text-lg text-darkBlue-400 font-semibold mt-4">
            ⚡ Delivery time: Up to 7 working days!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 transform ${
                pkg.highlighted
                  ? "bg-darkBlue-500/30 border-darkBlue-400 shadow-2xl shadow-darkBlue-500/25"
                  : "bg-gray-800/20 border-gray-700 hover:border-darkBlue-500"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-darkBlue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-darkBlue-400 mb-4">{pkg.price}</div>
                <p className="text-gray-300 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-darkBlue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform ${
                  pkg.highlighted
                    ? "bg-gradient-to-r from-darkBlue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-darkBlue-500/25"
                    : "border-2 border-darkBlue-500 text-darkBlue-400 hover:bg-darkBlue-500 hover:text-white"
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-800/20 border border-gray-700 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Available Add-ons</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-darkBlue-500/20 border border-darkBlue-500/30"
              >
                <div className="w-2 h-2 bg-darkBlue-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm flex-1">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="bg-gray-800/20 border border-gray-700 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Maintenance Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "₪290/month",
                features: ["Security updates", "Daily backups", "Basic support"]
              },
              {
                name: "Pro",
                price: "₪490/month",
                features: ["Everything from Basic", "Content updates", "Ongoing optimization", "Monthly reports"]
              },
              {
                name: "Scale",
                price: "₪790/month",
                features: ["Everything from Pro", "New feature development", "24/7 support", "Strategic consulting"]
              }
            ].map((plan, index) => (
              <div key={index} className="p-6 bg-darkBlue-500/20 border border-darkBlue-500/30 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 text-center">{plan.name}</h4>
                <div className="text-2xl font-bold text-darkBlue-400 mb-4 text-center">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-darkBlue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-darkBlue-500/20 border border-darkBlue-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-darkBlue-400 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Schedule a free consultation call or message me on WhatsApp - let's start building your website today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-gradient-to-r from-darkBlue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform"
              >
                Schedule Consultation
              </button>
              <a 
                href="https://wa.me/972508462276"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-green-500 text-green-400 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
