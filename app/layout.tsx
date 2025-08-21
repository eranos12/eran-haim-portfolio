import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eran Haim — AI Integration & Full-Stack Developer",
  description: "I build AI-powered web apps and high-quality user experiences. Full-stack developer focused on AI integration, clean architecture, and shipping fast.",
  keywords: ["AI Integration", "Full-Stack Developer", "Next.js", "TypeScript", "React", "AI", "Web Development"],
  authors: [{ name: "Eran Haim" }],
  creator: "Eran Haim",
  openGraph: {
    title: "Eran Haim — AI Integration & Full-Stack Developer",
    description: "I build AI-powered web apps and high-quality user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eran Haim — AI Integration & Full-Stack Developer",
    description: "I build AI-powered web apps and high-quality user experiences.",
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
    <html lang="en" className="scroll-smooth">
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
