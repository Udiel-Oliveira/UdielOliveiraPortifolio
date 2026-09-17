import type { Metadata } from "next";
import { Inter, Jaldi } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jaldi = Jaldi({
  variable: "--font-jaldi",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udielportifolio.vercel.app"),
  title: "Udiel Oliveira | Portfólio de Desenvolvedor Front End",
  description:
    "Portfólio de Udiel Oliveira, desenvolvedor Front End com foco em React, Next.js e TypeScript. Conheça meus projetos, certificações e entre em contato.",
  keywords: [
    "Udiel Oliveira",
    "Udiel Oliveira Portfólio",
    "Udiel Portifolio",
    "Desenvolvedor Front End",
    "React",
    "Next.js",
    "TypeScript",
    "Portfólio",
  ],
  authors: [
    { name: "Udiel Oliveira", url: "https://github.com/Udiel-Oliveira" },
  ],
  creator: "Udiel Oliveira",
  alternates: {
    canonical: "https://udielportifolio.vercel.app",
  },
  openGraph: {
    title: "Udiel Oliveira | Portfólio de Desenvolvedor Front End",
    description:
      "Conheça o portfólio de Udiel Oliveira — projetos, habilidades e formas de contato.",
    url: "https://udielportifolio.vercel.app",
    siteName: "Udiel Oliveira Portfolio",
    images: [
      {
        url: "imageOG.png",
        width: 1200,
        height: 630,
        alt: "Udiel Oliveira Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udiel Oliveira | Portfólio de Desenvolvedor Front End",
    description:
      "Conheça o portfólio de Udiel Oliveira — projetos, habilidades e formas de contato.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Udiel Oliveira",
  url: "https://udielportifolio.vercel.app",
  jobTitle: "Desenvolvedor Front End",
  description:
    "Portfólio de Udiel Oliveira, desenvolvedor Front End com foco em React, Next.js e TypeScript.",
  sameAs: [
    "https://github.com/Udiel-Oliveira",
    "https://www.linkedin.com/in/udiel-oliveira",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${jaldi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  );
}
