import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eran Haim - Business Website & App Developer",
  description: "I build fast, custom websites for small and large businesses with AI features that generate leads - from 0 to a stunning, live website!",
  keywords: ["web development", "business websites", "AI integration", "fast development", "Next.js", "chatbots"],
  authors: [{ name: "Eran Haim" }],
  creator: "Eran Haim",
  publisher: "Eran Haim",
  openGraph: {
    title: "Eran Haim - Business Website & App Developer",
    description: "I build fast, custom websites for small and large businesses with AI features that generate leads - from 0 to a stunning, live website!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eran Haim - Business Website & App Developer",
    description: "I build fast, custom websites for small and large businesses with AI features that generate leads - from 0 to a stunning, live website!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
