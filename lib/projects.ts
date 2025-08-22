export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  source: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "ai-resume-ranker",
    title: "AI Resume Ranker",
    description: "AI-powered resume analysis and job matching system using OpenAI embeddings and vector search.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "OpenAI", "Vector Search", "RAG", "Next.js"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vector Database"],
    highlights: [
      "AI-powered resume analysis and scoring",
      "Semantic matching with job descriptions",
      "PDF and DOCX file parsing",
      "Real-time feedback and suggestions",
      "Responsive design with modern UI"
    ],
    link: "/resume-ranker",
    source: "https://github.com/eranhaim/ai-resume-ranker"
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Advanced image generation using DALL-E and custom AI models with style customization.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "DALL-E", "Image Generation", "Next.js", "Creative AI"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI DALL-E", "Canvas API"],
    highlights: [
      "DALL-E powered image generation",
      "Custom style presets and filters",
      "Real-time image editing tools",
      "Batch generation capabilities",
      "High-resolution output support"
    ],
    link: "/image-generator",
    source: "https://github.com/eranhaim/ai-image-generator"
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store Template",
    description: "Modern, fully-featured e-commerce platform with advanced filtering, search, and shopping cart functionality.",
    image: "/api/placeholder/600/400",
    tags: ["E-commerce", "Full-Stack", "Next.js", "Shopping Cart", "Responsive Design"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks", "Local Storage"],
    highlights: [
      "Advanced product filtering and search",
      "Shopping cart with local storage",
      "Wishlist functionality",
      "Responsive grid and list views",
      "Modern glass morphism design"
    ],
    link: "/ecommerce-store",
    source: "https://github.com/eranhaim/ecommerce-store"
  },
  
                {
                id: "ai-chatbot",
                title: "AI Chatbot for Businesses",
                description: "Professional AI-powered customer service chatbot with FAQ handling and human fallback.",
                image: "/api/placeholder/600/400",
                tags: ["AI/ML", "Chatbot", "Customer Service", "Business", "Next.js"],
                year: "2025",
                featured: true,
                technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Real-time Chat"],
                highlights: [
                  "Smart FAQ handling and responses",
                  "Human support fallback system",
                  "Customizable business branding",
                  "Chat export and analytics",
                  "24/7 automated customer service"
                ],
                link: "/ai-chatbot",
                source: "https://github.com/eranhaim/ai-chatbot"
              },
                             {
                 id: "analytics-dashboard",
                 title: "Analytics Dashboard with AI Insights",
                 description: "Professional business intelligence platform with AI-powered analytics, data visualization, and automated insights.",
                 image: "/api/placeholder/600/400",
                 tags: ["AI/ML", "Data Analysis", "Business Intelligence", "Analytics", "Dashboard"],
                 year: "2025",
                 featured: true,
                 technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "AI Integration"],
                 highlights: [
                   "AI-powered business insights and recommendations",
                   "Interactive data visualizations and charts",
                   "Multi-format data upload (CSV, Excel, JSON)",
                   "Real-time analytics and reporting",
                   "Export functionality and automated insights"
                 ],
                 link: "/analytics-dashboard",
                 source: "https://github.com/eranhaim/analytics-dashboard"
               },
                               {
                  id: "ai-data-analyzer",
                  title: "AI Data Analyzer",
                  description: "Advanced neural network-powered data intelligence platform with real-time pattern recognition, anomaly detection, and predictive analytics.",
                  image: "/api/placeholder/600/400",
                  tags: ["AI/ML", "Neural Networks", "Data Intelligence", "Pattern Recognition", "Next.js"],
                  year: "2025",
                  featured: true,
                  technologies: ["Next.js", "TypeScript", "Neural Networks", "AI Models", "Real-time Analytics"],
                  highlights: [
                    "Live neural network visualization",
                    "Real-time anomaly detection",
                    "AI-powered pattern recognition",
                    "Predictive analytics engine",
                    "Advanced data streaming capabilities"
                  ],
                  link: "/ai-data-analyzer",
                  source: "https://github.com/eranhaim/ai-data-analyzer"
                }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};
