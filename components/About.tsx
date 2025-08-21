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
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm Eran Haim, a full-stack developer with expertise in AI integrations. I love taking ideas and turning them into production products with clean, fast user experiences.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  I focus on Next.js, TypeScript, and cloud solutions. I build intelligent applications that combine AI with modern, professional user experiences.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a passion for clean architecture and rapid development, I specialize in building AI-powered web applications that deliver real business value and exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:text-purple-400 hover:border-purple-500 transition-all duration-300 hover:scale-105 transform"
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
                  className="text-center p-6 rounded-2xl bg-purple-500/20 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
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
              <div className="p-6 rounded-2xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">What I Do</h4>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in building AI-powered web applications, from intelligent chatbots to data analysis tools. 
                  Every project focuses on clean code, user experience, and real business value.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">My Approach</h4>
                <p className="text-gray-300 leading-relaxed">
                  I believe in rapid prototyping, user feedback, and iterative development. 
                  This approach ensures we build exactly what users need, not just what we think they want.
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
