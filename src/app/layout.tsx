import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-body" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rajesh Dhanda — ML Platform Engineer",
  description: "ML Platform Engineer building scalable ML & LLM platforms at enterprise scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var theme = stored || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} ${dmMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
