import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import FaqSchema from "@/components/FaqSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madina Biryani | Best Chicken Biryani ₹100 | Order Hyderabadi Dum Biryani Online",
    template: "%s | Madina Biryani - Best Chicken Biryani Hyderabad",
  },
  description: "Order the best chicken biryani in Hyderabad at just ₹100! Madina Biryani serves authentic Hyderabadi Dum Biryani with fresh ingredients. Affordable chicken biryani near you - ECIL, Nacharam, Dammaiguda. Order online now!",
  icons: {
    icon: "/madinabiyani_logo_mini.ico",
    shortcut: "/madinabiyani_logo_mini.ico",
    apple: "/madinabiyani_logo_mini.ico",
  },
  keywords: [
    "chicken biryani",
    "madina chicken biryani", 
    "madina biryani",
    "order chicken biryani",
    "affordable chicken biryani",
    "biryani",
    "order biryani",
    "hyderabadi chicken biryani",
    "chicken biryani near me",
    "best chicken biryani",
    "100 rupees biryani",
    "100 chicken biryani",
    "madina chicken",
    "chicken biryani hyderabad",
    "dum biryani",
    "halal chicken biryani",
    "authentic biryani",
    "chicken biryani delivery",
    "biryani online order",
    "cheap chicken biryani",
    "fresh chicken biryani",
    "hyderabadi dum biryani",
    "nizam biryani",
    "ecil chicken biryani",
    "nacharam biryani",
    "dammaiguda biryani",
    "secunderabad biryani"
  ],
  authors: [{ name: "Madina Biryani" }],
  creator: "Madina Biryani",
  publisher: "Madina Biryani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Madina Biryani | Best Chicken Biryani ₹100 | Order Online Hyderabad",
    description: "Order the best chicken biryani in Hyderabad at just ₹100! Authentic Hyderabadi Dum Biryani with fresh ingredients. Affordable chicken biryani delivery near you.",
    type: "website",
    locale: "en_IN",
    url: "https://madinabiryani.site",
    siteName: "Madina Biryani",
    images: [
      {
        url: "/MadinaBiryaniSG.jpg",
        width: 1200,
        height: 630,
        alt: "Madina Biryani - Authentic Hyderabadi Dum Biryani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madina Biryani | Best Chicken Biryani ₹100 | Order Online",
    description: "Order the best chicken biryani in Hyderabad at just ₹100! Authentic Hyderabadi Dum Biryani delivery.",
    images: ["/MadinaBiryaniSG.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://madinabiryani.site",
  },
  other: {
    "google": "notranslate",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href="https://madinabiryani.site" />
        <JsonLd />
        <FaqSchema />
        <BreadcrumbSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
