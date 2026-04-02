import type { Metadata } from "next";
import { Inter, Jaldi } from "next/font/google";
import "./globals.css";

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
  title: "Udiel Oliveira | Dev",
  description:
    "Portfólio de Udiel Oliveira, desenvolvedor Front End com foco em React, Next.js e TypeScript. Conheça meus projetos, certificações e entre em contato.",
  keywords: [
    "Udiel Oliveira",
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
  openGraph: {
    title: "Udiel Oliveira | Desenvolvedor Front End",
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
    title: "Udiel Oliveira | Desenvolvedor Front End",
    description:
      "Conheça o portfólio de Udiel Oliveira — projetos, habilidades e formas de contato.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
