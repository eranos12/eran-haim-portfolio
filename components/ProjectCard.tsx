import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/20 hover:border-purple-500 transition-all duration-500 hover:scale-105 transform"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Card Content */}
      <div className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="ml-4">
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
              {project.year}
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech, techIndex) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md border border-gray-600">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6 flex-1">
          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
              <li
                key={highlightIndex}
                className="flex items-start space-x-2 text-sm text-gray-300"
                style={{ animationDelay: `${(index * 200) + (highlightIndex * 100)}ms` }}
              >
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300"
                style={{ animationDelay: `${(index * 200) + (tagIndex * 50)}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-medium rounded-lg text-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              Live Demo
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border border-purple-500 text-purple-400 text-sm font-medium rounded-lg text-center hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
