"use client";

import { useState } from "react";
import { projectsHe, getProjectsByTagHe } from "@/lib/projects-he";
import { ExternalLink, Play, Sparkles, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const VisualProjects = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  
  const allTags = ["all", ...Array.from(new Set(projectsHe.flatMap(p => p.tags)))];
  
  const filteredProjects = selectedTag === "all" 
    ? projectsHe 
    : getProjectsByTagHe(selectedTag);

  // Project images - using actual uploaded screenshots
  const getProjectImage = (projectId: string) => {
    const imageMap: { [key: string]: { src: string, alt: string, fallback: string } } = {
      "ai-resume-ranker": { 
        src: "/images/projects/ResumeRanker.png", 
        alt: "צילום מסך מחולל דירוג קורות חיים AI",
        fallback: "מחולל דירוג קורות חיים AI"
      },
      "ai-image-generator": { 
        src: "/images/projects/ImageGen.png", 
        alt: "צילום מסך מחולל תמונות AI",
        fallback: "מחולל תמונות AI"
      },
      "ecommerce-store": { 
        src: "/images/projects/EcomStore.png", 
        alt: "צילום מסך חנות מקוונת",
        fallback: "חנות מקוונת"
      },
      "ai-chatbot": { 
        src: "/images/projects/AIChatBot.png", 
        alt: "צילום מסך צ'אטבוט AI",
        fallback: "צ'אטבוט AI"
      },
      "analytics-dashboard": { 
        src: "/images/projects/AnalyticsDashboard.png", 
        alt: "צילום מסך לוח אנליטיקה",
        fallback: "לוח אנליטיקה"
      },
      "ai-data-analyzer": { 
        src: "/images/projects/AIDataAnalyzer.png", 
        alt: "צילום מסך מנתח נתונים AI",
        fallback: "מנתח נתונים AI"
      }
    };

    return imageMap[projectId] || { 
      src: "/images/projects/default.jpg", 
      alt: "צילום מסך פרויקט",
      fallback: "פרויקט"
    };
  };

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-darkBlue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-l from-darkBlue-400 via-blue-400 to-darkBlue-600 bg-clip-text text-transparent mb-6">
            פרויקטים מובילים
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            מבחר העבודות האחרונות שלי בתחומי אינטגרציית בינה מלאכותית, פיתוח פול-סטאק ואפליקציות רשת מודרניות.
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
                  ? "bg-darkBlue-500 text-white shadow-lg shadow-darkBlue-500/25"
                  : "bg-darkBlue-500/20 text-gray-300 hover:text-darkBlue-400 hover:bg-darkBlue-500/30 border border-darkBlue-500/30 hover:border-darkBlue-400"
              }`}
            >
              {tag === "all" ? "כל הפרויקטים" : tag}
            </button>
          ))}
        </div>

        {/* Visual Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            const projectImage = getProjectImage(project.id);
            
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/20 hover:border-darkBlue-500 transition-all duration-500 hover:scale-105 transform flex flex-col h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* Try to load actual screenshot, fallback to placeholder */}
                  <div className="relative w-full h-full">
                    <Image
                      src={projectImage.src}
                      alt={projectImage.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // If image fails to load, show fallback
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback placeholder */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-center p-4"
                      style={{ display: 'none' }}
                    >
                      <div>
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-60" />
                        <p className="text-sm font-medium">{projectImage.fallback}</p>
                        <p className="text-xs opacity-60 mt-1">צילום מסך לא זמין</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-darkBlue-500/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white mr-1" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Content that can grow */}
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <span className="inline-block px-2 py-1 bg-darkBlue-500/20 text-darkBlue-400 text-xs font-medium rounded-full border border-darkBlue-500/30">
                          {project.year}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-darkBlue-400 transition-colors duration-300 text-right flex-1 mr-3">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed text-right">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 justify-end">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600 hover:border-darkBlue-500 hover:text-darkBlue-400 transition-all duration-300"
                            style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600">
                            +{project.technologies.length - 4} נוספים
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Live Demo Button */}
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full px-4 py-3 bg-gradient-to-l from-darkBlue-500 to-blue-600 text-white text-sm font-medium rounded-lg text-center hover:shadow-lg hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2 space-x-reverse"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                        <span>הדגמה חיה</span>
                        <Play className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-darkBlue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Sparkle Effect */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-5 h-5 text-darkBlue-400 animate-pulse" />
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
              לא נמצאו פרויקטים
            </h3>
            <p className="text-gray-400">
              נסו לבחור טכנולוגיה או קטגוריה אחרת.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-darkBlue-500/20 border border-darkBlue-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-darkBlue-400 mb-4">
              יש לכם פרויקט בראש?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              בואו נדבר על איך אנחנו יכולים להביא את הרעיונות שלכם לחיים עם טכנולוגיית בינה מלאכותית מתקדמת ופיתוח רשת מודרני.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-l from-darkBlue-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-darkBlue-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              בואו נדבר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualProjects;
