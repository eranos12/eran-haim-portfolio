const Pricing = () => {
  const packages = [
    {
      name: "Start",
      price: "₪1,900",
      description: "מושלם לעסקים קטנים שרוצים נוכחות דיגיטלית",
      features: [
        "דף בית + צור קשר + גלריה/שירותים",
        "SEO בסיסי",
        "אנליטיקס וניטור",
        "עיצוב נקי ומותאם למובייל",
        "טופס לידים מחובר לוואטסאפ",
        "אחסון וטכנולוגיה מתקדמת"
      ],
      highlighted: false,
      buttonText: "בחירת חבילה"
    },
    {
      name: "Grow",
      price: "₪2,900",
      description: "הבחירה הפופולרית לעסקים שרוצים לצמוח",
      features: [
        "הכול מחבילת Start",
        "בלוג/קטלוג מוצרים",
        "אינטגרציית CRM/Google Sheets",
        "אופטימיזציה למהירות גבוהה",
        "SEO מתקדם עם תוכן",
        "עמוד נחיתה מותאם להמרות"
      ],
      highlighted: true,
      buttonText: "הכי פופולרי!"
    },
    {
      name: "Pro",
      price: "₪3,900",
      description: "לעסקים שרוצים את הטכנולוגיה הכי מתקדמת",
      features: [
        "הכול מחבילת Grow",
        "צ'אטבוט FAQ חכם",
        "חיפוש סמנטי מתקדם",
        "אופטימיזציית המרה עם A/B טסטים",
        "אנליטיקס מתקדם ודיווחים",
        "אינטגרציות מותאמות אישית"
      ],
      highlighted: false,
      buttonText: "הפתרון המלא"
    }
  ];

  const addOns = [
    "חנות מקוונת מלאה",
    "אזור מאמרים וניהול תוכן",
    "שפות נוספות (אנגלית/ערבית)",
    "אוטומציות מתקדמות",
    "אפליקציה למובייל",
    "מערכת הזמנות מתקדמת"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-darkBlue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-l from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent mb-6">
            חבילות בניית אתרים
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            כל החבילות כוללות עיצוב נקי, Next.js + Tailwind, טופס לידים, SEO בסיסי, אנליטיקס ודפדוף מהיר
          </p>
          <p className="text-lg text-darkBlue-400 font-semibold mt-4">
            ⚡ זמן אספקה: עד 7 ימי עבודה!
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
                    הכי פופולרי
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
                  <li key={featureIndex} className="flex items-start space-x-3 space-x-reverse text-right">
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
                    ? "bg-gradient-to-l from-darkBlue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-darkBlue-500/25"
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
          <h3 className="text-2xl font-bold text-white mb-6 text-center">תוספים זמינים</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-darkBlue-500/20 border border-darkBlue-500/30 text-right"
              >
                <span className="text-gray-300 text-sm flex-1">{addon}</span>
                <div className="w-2 h-2 bg-darkBlue-400 rounded-full flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="bg-gray-800/20 border border-gray-700 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">תוכניות תחזוקה</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "₪290/חודש",
                features: ["עדכוני אבטחה", "גיבויים יומיים", "תמיכה בסיסית"]
              },
              {
                name: "Pro",
                price: "₪490/חודש",
                features: ["הכול מ-Basic", "עדכוני תוכן", "אופטימיזציה שוטפת", "דיווחים חודשיים"]
              },
              {
                name: "Scale",
                price: "₪790/חודש",
                features: ["הכול מ-Pro", "פיתוח תכונות חדשות", "תמיכה 24/7", "ייעוץ אסטרטגי"]
              }
            ].map((plan, index) => (
              <div key={index} className="p-6 bg-darkBlue-500/20 border border-darkBlue-500/30 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 text-center">{plan.name}</h4>
                <div className="text-2xl font-bold text-darkBlue-400 mb-4 text-center">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 space-x-reverse text-right">
                      <span className="text-gray-300 text-sm flex-1">{feature}</span>
                      <div className="w-1.5 h-1.5 bg-darkBlue-400 rounded-full mt-2 flex-shrink-0"></div>
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
              מוכנים להתחיל?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              קבעו שיחת התאמה חינם או כתבו לי בוואטסאפ - נתחיל לבנות את האתר שלכם כבר היום!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-gradient-to-l from-darkBlue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform"
              >
                קבעו שיחת התאמה
              </button>
              <a 
                href="https://wa.me/972508462276"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-green-500 text-green-400 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                וואטסאפ עכשיו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
