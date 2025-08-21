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
    title: "AI Chatbot Assistant",
    description: "Intelligent conversational AI chatbot with context awareness and multi-language support.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "Chatbot", "NLP", "Conversational AI", "Next.js"],
    year: "2025",
    featured: false,
    technologies: ["Next.js", "TypeScript", "OpenAI GPT", "WebSocket", "Tailwind CSS"],
    highlights: [
      "Context-aware conversations",
      "Multi-language support",
      "Sentiment analysis",
      "Real-time chat interface",
      "Conversation history management"
    ],
    link: "/ai-chatbot",
    source: "https://github.com/eranhaim/ai-chatbot"
  },
  {
    id: "ai-data-analyzer",
    title: "AI Data Analyzer",
    description: "Intelligent data analysis and visualization platform with AI-powered insights and reporting.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "Data Analysis", "Visualization", "Analytics", "Next.js"],
    year: "2025",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Chart.js", "AI Models", "Data Processing"],
    highlights: [
      "AI-powered pattern recognition",
      "Interactive data visualizations",
      "Automated insight generation",
      "Multiple data format support",
      "Export and reporting tools"
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
