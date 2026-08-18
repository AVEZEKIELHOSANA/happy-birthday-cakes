import type { Metadata } from "next";
import { siteConfig } from "../config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `Happy Birthday, ${siteConfig.partnerName}`,
  description: "A private birthday journey, made for one person.",
  robots: { index: false, follow: false }, // keep this out of search results — it's private
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are loaded via <link> rather than next/font so this build
          never needs network access to fonts.googleapis.com at build
          time — the browser fetches them at runtime instead, same as
          any normal external stylesheet.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}