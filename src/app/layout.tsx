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
    default: "Madina Biryani | Authentic Hyderabadi Dum Biryani in Hyderabad",
    template: "%s | Madina Biryani",
  },
  description: "Experience the royal taste of authentic Hyderabadi Dum Biryani at Madina Biryani. Fresh ingredients, traditional recipes, and the legacy of Nizam's kitchen. Order online from our outlets in ECIL, Nacharam, Dammaiguda, and more.",
  keywords: [
    "Biryani",
    "Chicken Biryani", 
    "Hyderabadi Biryani",
    "Dum Biryani",
    "Halal Food",
    "Madina Biryani",
    "Best Biryani Hyderabad",
    "Authentic Biryani",
    "Nizam Biryani",
    "ECIL Biryani",
    "Nacharam Biryani",
    "Secunderabad Food"
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
    title: "Madina Biryani | Authentic Hyderabadi Dum Biryani",
    description: "Experience the royal taste of authentic Hyderabadi Dum Biryani. Fresh ingredients, traditional recipes, and Nizam's legacy.",
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
    title: "Madina Biryani | Authentic Hyderabadi Dum Biryani",
    description: "Experience the royal taste of authentic Hyderabadi Dum Biryani",
    images: ["/MadinaBiryaniSG.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
