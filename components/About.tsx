const About = () => {
  const stats = [
    {
      number: "5+",
      label: "Years Coding",
      description: "Professional experience",
      icon: "💻"
    },
    {
      number: "50+",
      label: "Projects Built",
      description: "From concept to production",
      icon: "🚀"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Delivering excellence",
      icon: "⭐"
    }
  ];

  const skills = [
    "AI Integration", "Machine Learning", "Next.js", "TypeScript", 
    "React", "Node.js", "OpenAI API", "Vector Search", "PostgreSQL",
    "Supabase", "Stripe", "Prisma", "Tailwind CSS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-darkBlue-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm Eran Haim, an expert developer specializing in building websites and applications for small and large businesses. I take your business from 0 to a fully functional, stunning website that works online!
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  What do I build? Fast business websites with AI layers that generate leads. Agile development with Next.js, clean user experience, measurement and continuous improvement.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Why choose me? I specialize in rapid development (up to 7 working days!), with everything you'll ever need: websites, applications, chatbots, automations and integrations. All in one place.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-darkBlue-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
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

          {/* Right Column - Stats */}
          <div className="space-y-8">
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
                <h4 className="text-lg font-semibold text-white mb-3">What's Included in Every Website?</h4>
                <p className="text-gray-300 leading-relaxed">
                  Clean design (5–6 section landing page), Next.js + Tailwind, lead forms/WhatsApp integration, basic SEO, analytics, fast browsing, short training and ongoing maintenance.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">Why Choose Me?</h4>
                <p className="text-gray-300 leading-relaxed">
                  Agile development up to 7 working days! I love working fast and efficiently, with advanced technologies that deliver results. 
                  You get a website that works, looks amazing and generates real leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
