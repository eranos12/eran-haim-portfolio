export interface ProjectHe {
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

export const projectsHe: ProjectHe[] = [
  {
    id: "ai-resume-ranker",
    title: "מחולל דירוג קורות חיים AI",
    description: "מערכת ניתוח קורות חיים והתאמת משרות מבוססת בינה מלאכותית באמצעות OpenAI embeddings וחיפוש וקטורי.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "OpenAI", "חיפוש וקטורי", "RAG", "Next.js"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "מסד נתונים וקטורי"],
    highlights: [
      "ניתוח ודירוג קורות חיים מבוסס בינה מלאכותית",
      "התאמה סמנטית עם תיאורי משרות",
      "עיבוד קבצי PDF ו-DOCX",
      "משוב והצעות בזמן אמת",
      "עיצוב רספונסיבי עם ממשק מודרני"
    ],
    link: "/resume-ranker",
    source: "https://github.com/eranhaim/ai-resume-ranker"
  },
  {
    id: "ai-image-generator",
    title: "מחולל תמונות AI",
    description: "יצירת תמונות מתקדמת באמצעות DALL-E ומודלי בינה מלאכותית מותאמים עם התאמה אישית של סגנונות.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "DALL-E", "יצירת תמונות", "Next.js", "AI יצירתי"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI DALL-E", "Canvas API"],
    highlights: [
      "יצירת תמונות מבוססת DALL-E",
      "הגדרות סגנון מותאמות אישית ופילטרים",
      "כלי עריכת תמונות בזמן אמת",
      "יכולות יצירה במקבץ",
      "תמיכה בפלט ברזולוציה גבוהה"
    ],
    link: "/image-generator",
    source: "https://github.com/eranhaim/ai-image-generator"
  },
  {
    id: "ecommerce-store",
    title: "תבנית חנות מקוונת",
    description: "פלטפורמת מסחר אלקטרוני מודרנית ומלאה עם סינון מתקדם, חיפוש ועגלת קניות פונקציונלית.",
    image: "/api/placeholder/600/400",
    tags: ["מסחר אלקטרוני", "פול-סטאק", "Next.js", "עגלת קניות", "עיצוב רספונסיבי"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hooks", "Local Storage"],
    highlights: [
      "סינון וחיפוש מוצרים מתקדם",
      "עגלת קניות עם שמירה מקומית",
      "פונקציונליות רשימת משאלות",
      "תצוגות רשת ורשימה רספונסיביות",
      "עיצוב מודרני עם glass morphism"
    ],
    link: "/ecommerce-store",
    source: "https://github.com/eranhaim/ecommerce-store"
  },
  {
    id: "ai-chatbot",
    title: "צ'אטבוט AI לעסקים",
    description: "צ'אטבוט מקצועי מבוסס בינה מלאכותית לשירות לקוחות עם טיפול בשאלות נפוצות והעברה לנציג אנושי.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "צ'אטבוט", "שירות לקוחות", "עסקי", "Next.js"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "אינטגרציית AI", "צ'אט בזמן אמת"],
    highlights: [
      "טיפול חכם בשאלות נפוצות ותשובות",
      "מערכת העברה לתמיכה אנושית",
      "מיתוג עסקי מותאם אישית",
      "ייצוא צ'אט ואנליטיקה",
      "שירות לקוחות אוטומטי 24/7"
    ],
    link: "/ai-chatbot",
    source: "https://github.com/eranhaim/ai-chatbot"
  },
  {
    id: "analytics-dashboard",
    title: "לוח אנליטיקה עם תובנות AI",
    description: "פלטפורמת בינה עסקית מקצועית עם אנליטיקה מבוססת בינה מלאכותית, הדמיית נתונים ותובנות אוטומטיות.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "ניתוח נתונים", "בינה עסקית", "אנליטיקה", "לוח בקרה"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "אינטגרציית AI"],
    highlights: [
      "תובנות והמלצות עסקיות מבוססות בינה מלאכותית",
      "הדמיות נתונים וגרפים אינטראקטיביים",
      "העלאת נתונים בפורמטים שונים (CSV, Excel, JSON)",
      "אנליטיקה ודיווח בזמן אמת",
      "פונקציונליות ייצוא ותובנות אוטומטיות"
    ],
    link: "/analytics-dashboard",
    source: "https://github.com/eranhaim/analytics-dashboard"
  },
  {
    id: "ai-data-analyzer",
    title: "מנתח נתונים AI",
    description: "פלטפורמת מודיעין נתונים מתקדמת מבוססת רשתות עצביות עם זיהוי דפוסים בזמן אמת, גילוי חריגות ואנליטיקה חזויה.",
    image: "/api/placeholder/600/400",
    tags: ["AI/ML", "רשתות עצביות", "מודיעין נתונים", "זיהוי דפוסים", "Next.js"],
    year: "2025",
    featured: true,
    technologies: ["Next.js", "TypeScript", "רשתות עצביות", "מודלי AI", "אנליטיקה בזמן אמת"],
    highlights: [
      "הדמיית רשת עצבית חיה",
      "גילוי חריגות בזמן אמת",
      "זיהוי דפוסים מבוסס בינה מלאכותית",
      "מנוע אנליטיקה חזויה",
      "יכולות הזרמת נתונים מתקדמות"
    ],
    link: "/ai-data-analyzer",
    source: "https://github.com/eranhaim/ai-data-analyzer"
  }
];

export const getFeaturedProjectsHe = (): ProjectHe[] => {
  return projectsHe.filter(project => project.featured);
};

export const getProjectByIdHe = (id: string): ProjectHe | undefined => {
  return projectsHe.find(project => project.id === id);
};

export const getProjectsByTagHe = (tag: string): ProjectHe[] => {
  return projectsHe.filter(project => 
    project.tags.some(projectTag => 
      projectTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};
