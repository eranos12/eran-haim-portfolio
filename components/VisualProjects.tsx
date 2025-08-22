"use client";

import { useState } from "react";
import { projects, getProjectsByTag } from "@/lib/projects";
import { ExternalLink, Play, Sparkles, Image as ImageIcon } from "lucide-react";

const VisualProjects = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  
  const allTags = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = selectedTag === "all" 
    ? projects 
    : getProjectsByTag(selectedTag);

  // Project images with fallbacks - using gradient backgrounds as placeholders
  const getProjectImage = (projectId: string) => {
    const imageMap: { [key: string]: { bg: string, text: string, accent: string } } = {
      "ai-resume-ranker": { 
        bg: "from-purple-500 to-blue-600", 
        text: "AI Resume Ranker",
        accent: "from-purple-400 to-blue-500"
      },
      "image-generator": { 
        bg: "from-emerald-500 to-teal-600", 
        text: "AI Image Generator",
        accent: "from-emerald-400 to-teal-500"
      },
      "ecommerce-store": { 
        bg: "from-orange-500 to-red-600", 
        text: "E-commerce Store",
        accent: "from-orange-400 to-red-500"
      },
      "ai-chatbot": { 
        bg: "from-indigo-500 to-purple-600", 
        text: "AI Chatbot",
        accent: "from-indigo-400 to-purple-500"
      },
      "analytics-dashboard": { 
        bg: "from-blue-500 to-indigo-600", 
        text: "Analytics Dashboard",
        accent: "from-blue-400 to-indigo-500"
      },
      "ai-data-analyzer": { 
        bg: "from-pink-500 to-rose-600", 
        text: "AI Data Analyzer",
        accent: "from-pink-400 to-rose-500"
      }
    };

    return imageMap[projectId] || { 
      bg: "from-gray-500 to-gray-600", 
      text: "Project",
      accent: "from-gray-400 to-gray-500"
    };
  };

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work in AI integration, full-stack development, and modern web applications.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                selectedTag === tag
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-purple-500/20 text-gray-300 hover:text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500"
              }`}
            >
              {tag === "all" ? "All Projects" : tag}
            </button>
          ))}
        </div>

        {/* Visual Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const projectImage = getProjectImage(project.id);
            
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/20 hover:border-purple-500 transition-all duration-500 hover:scale-105 transform"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Gradient Background as Project Image */}
                  <div className={`w-full h-full bg-gradient-to-br ${projectImage.bg} flex items-center justify-center relative`}>
                    {/* Project Icon */}
                    <div className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {project.id === "ai-resume-ranker" && "📄"}
                      {project.id === "image-generator" && "🎨"}
                      {project.id === "ecommerce-store" && "🛒"}
                      {project.id === "ai-chatbot" && "🤖"}
                      {project.id === "analytics-dashboard" && "📊"}
                      {project.id === "ai-data-analyzer" && "🧠"}
                    </div>
                    
                    {/* Project Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg text-center">
                        {projectImage.text}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-purple-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                          style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Live Demo Button */}
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-medium rounded-lg text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">
              Try selecting a different technology or category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Let's discuss how we can bring your ideas to life with cutting-edge AI technology and modern web development.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualProjects;
