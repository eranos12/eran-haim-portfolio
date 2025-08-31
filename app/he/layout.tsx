import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ערן חיים — פיתוח בינה מלאכותית ופול-סטאק",
  description: "אני בונה אפליקציות רשת מבוססות בינה מלאכותית וחוויות משתמש איכותיות. מפתח פול-סטאק המתמחה באינטגרציה של בינה מלאכותית, ארכיטקטורה נקייה ופתרונות מהירים.",
  keywords: ["בינה מלאכותית", "פיתוח פול-סטאק", "Next.js", "TypeScript", "React", "AI", "פיתוח רשת"],
  authors: [{ name: "ערן חיים" }],
  creator: "ערן חיים",
  openGraph: {
    title: "ערן חיים — פיתוח בינה מלאכותית ופול-סטאק",
    description: "אני בונה אפליקציות רשת מבוססות בינה מלאכותית וחוויות משתמש איכותיות.",
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "ערן חיים — פיתוח בינה מלאכותית ופול-סטאק",
    description: "אני בונה אפליקציות רשת מבוססות בינה מלאכותית וחוויות משתמש איכותיות.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ערן חיים",
              jobTitle: "פיתוח בינה מלאכותית ופול-סטאק",
              description: "אני בונה אפליקציות רשת מבוססות בינה מלאכותית וחוויות משתמש איכותיות.",
              knowsAbout: [
                "אינטגרציה של בינה מלאכותית",
                "פיתוח פול-סטאק",
                "Next.js",
                "TypeScript",
                "React",
                "OpenAI",
                "למידת מכונה"
              ],
              sameAs: [
                "https://github.com/eranhaim",
                "https://linkedin.com/in/eranhaim"
              ]
            })
          }}
        />
        {/* Hebrew Font Support */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-navy-900 text-white antialiased font-hebrew">
        {children}
      </body>
    </html>
  );
}
