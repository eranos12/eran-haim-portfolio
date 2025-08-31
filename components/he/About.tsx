const About = () => {
  const stats = [
    {
              number: "2+",
        label: "שנות קוד",
      description: "ניסיון מקצועי",
      icon: "💻"
    },
    {
              number: "15+",
        label: "פרויקטים שנבנו",
      description: "מרעיון ועד יצור",
      icon: "🚀"
    },
    {
      number: "100%",
      label: "שביעות רצון לקוחות",
      description: "הספקת מצוינות",
      icon: "⭐"
    }
  ];

  const skills = [
    "אינטגרציה של AI", "למידת מכונה", "Next.js", "TypeScript", 
    "React", "Node.js", "OpenAI API", "חיפוש וקטורי", "PostgreSQL",
    "Supabase", "Stripe", "Prisma", "Tailwind CSS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-darkBlue-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right Column - Bio (RTL layout) */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-darkBlue-500/20 border border-darkBlue-500/30 hover:border-darkBlue-400 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-darkBlue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-darkBlue-500/20 border border-darkBlue-500/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3 text-right">מה כלול בכל אתר?</h4>
                <p className="text-gray-300 leading-relaxed text-right">
                  עיצוב נקי (Landing של 5–6 סקשנים), Next.js + Tailwind, טופס לידים/וואטסאפ, SEO בסיסי, אנליטיקס, דפדוף מהיר, הדרכה קצרה ותחזוקה שוטפת.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3 text-right">למה דווקא איתי?</h4>
                <p className="text-gray-300 leading-relaxed text-right">
                  פיתוח זריז עד 7 ימי עבודה! אני אוהב לעבוד מהר וביעילות, עם טכנולוגיות מתקדמות שמביאות תוצאות. 
                  מקבלים אתר שעובד, נראה מדהים ומביא לידים אמיתיים.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column - Skills (RTL layout) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-l from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent text-right">
                אודותי
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed text-right">
                  אני ערן חיים, מפתח שמתמחה בבניית אתרי אינטרנט ואפליקציות לעסקים קטנים וגדולים. אני אקח את העסק שלכם מ-0 ועד אתר מלא שעובד באוויר ונראה מדהים!
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed text-right">
                  מה אני בונה? אתרי תדמית מהירים עם שילוב של במידת הצורך AI שיזרים אליכם לידים בכמויות שלא הכרתם. פיתוח מהיר מאוד, חוויית משתמש נקייה, מדידה ושיפור מתמשך.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed text-right">
                  למה איתי? כי אני מתמחה בפיתוח מהיר (עד 7 ימי עבודה!), עם כל מה שאי פעם תצטרכו בישביל האתר המושלם שלכם: אתרים, אפליקציות, צ'אטבוטים, אוטומציות ואינטגרציות. הכל במקום אחד.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-darkBlue-400 text-right">כישורים טכניים</h3>
              <div className="flex flex-wrap gap-2 justify-end">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-darkBlue-500/20 border border-darkBlue-500/30 rounded-full text-sm text-gray-300 hover:text-darkBlue-400 hover:border-darkBlue-400 transition-all duration-300 hover:scale-105 transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
