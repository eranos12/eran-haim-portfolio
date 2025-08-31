import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ערן חיים - בניית אתרים ואפליקציות לעסקים",
  description: "אני בונה אתרי אינטרנט מהירים ומותאמים לעסקים קטנים וגדולים עם שילוב של AI שמביא לידים - מ-0 ועד אתר שעובד ונראה מדהים!",
  keywords: ["בניית אתרים", "פיתוח אפליקציות", "AI", "צ'אטבוטים", "אוטומציות", "Next.js", "פיתוח מהיר"],
  authors: [{ name: "ערן חיים" }],
  creator: "ערן חיים",
  openGraph: {
    title: "ערן חיים - בניית אתרים ואפליקציות לעסקים",
    description: "אני בונה אתרי אינטרנט מהירים ומותאמים לעסקים קטנים וגדולים עם שילוב של AI שמביא לידים - מ-0 ועד אתר שעובד ונראה מדהים!",
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "ערן חיים - בניית אתרים ואפליקציות לעסקים",
    description: "אני בונה אתרי אינטרנט מהירים ומותאמים לעסקים קטנים וגדולים עם שילוב של AI שמביא לידים - מ-0 ועד אתר שעובד ונראה מדהים!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth font-hebrew">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eran Haim",
              jobTitle: "AI Integration & Full-Stack Developer",
              description: "I build AI-powered web apps and high-quality user experiences.",
              knowsAbout: [
                "AI Integration",
                "Full-Stack Development",
                "Next.js",
                "TypeScript",
                "React",
                "OpenAI",
                "Machine Learning"
              ],
              sameAs: [
                "https://github.com/eranhaim",
                "https://linkedin.com/in/eranhaim"
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
