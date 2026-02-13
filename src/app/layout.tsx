import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import FaqSchema from "@/components/FaqSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Madina Biryani | Best Chicken Biryani ₹100 | Hyderabad",
  description: "Order the best chicken biryani in Hyderabad at just ₹100! Madina Biryani serves authentic Hyderabadi Dum Biryani with fresh ingredients. Affordable chicken biryani near you - ECIL, Nacharam, Dammaiguda. Order online now!",
  keywords: "chicken biryani,madina chicken biryani,madina biryani,order chicken biryani,affordable chicken biryani,biryani,order biryani,hyderabadi chicken biryani,chicken biryani near me,best chicken biryani,100 rupees biryani,100 chicken biryani,madina chicken,chicken biryani hyderabad,dum biryani,halal chicken biryani,authentic biryani,chicken biryani delivery,biryani online order,cheap chicken biryani,fresh chicken biryani,hyderabadi dum biryani,nizam biryani,ecil chicken biryani,nacharam biryani,dammaiguda biryani,secunderabad biryani",
  creator: "Rafi Ud Deen",
  publisher: "Madina Biryani",
  robots: "index, follow",
  googlebot: "index, follow",
  alternates: {
    canonical: "https://madinabiryani.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="developer" content="Rafi Ud Deen" />
        <JsonLd />
        <FaqSchema />
        <BreadcrumbSchema />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
