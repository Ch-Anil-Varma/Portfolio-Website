import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { profile } from "@/lib/data";

const siteUrl = "https://anilvarmachitturi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI & Robotics Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Anil Varma Chitturi",
    "AI Engineer",
    "Robotics Engineer",
    "Automation Anywhere Developer",
    "Machine Learning",
    "Portfolio",
    "Kakinada",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI & Robotics Engineer`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/images/profile.jpeg", width: 1120, height: 1400, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI & Robotics Engineer`,
    description: profile.summary,
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI & Robotics Engineering Student",
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kakinada",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  url: siteUrl,
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:text-white focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
