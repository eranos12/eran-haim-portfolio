"use client";

import { useState } from "react";
import { projects, getProjectsByTag } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  
  const allTags = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = selectedTag === "all" 
    ? projects 
    : getProjectsByTag(selectedTag);

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
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

export default Projects;
