"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

// Font Configuration
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function PrivacyPolicy() {
  return (
    <main className={`${playfair.variable} ${lato.variable} font-sans bg-stone-50 text-stone-800`}>
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-[9999] bg-stone-900/95 backdrop-blur-md text-amber-500 py-2 md:py-3 lg:py-4 border-b border-amber-500/20">
        <div className="container mx-auto flex justify-between items-center px-3 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="/favicon.ico"
              alt="Madina Biryani Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              priority
            />
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-widest font-serif text-white">
              MADINA <span className="text-amber-500">BIRYANI</span>
            </div>
          </Link>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-500 hover:text-white transition font-semibold"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-8 text-center bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Privacy Policy</h1>
          
          <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-xl border border-stone-200 p-6 md:p-8 space-y-8 text-stone-700 backdrop-blur-sm">
            <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h2 className="text-xl font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                About Madina Biryani
              </h2>
              <p className="leading-relaxed">
                Madina Biryani is a legitimate restaurant chain operating in Hyderabad, Telangana, India since 1995. 
                We serve authentic Hyderabadi Dum Biryani at our physical outlets located in ECIL, Moula Ali, 
                Dammaiguda, Nacharam, and Ramanthapur.
              </p>
            </section>

            <section className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h2 className="text-xl font-semibold text-stone-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-stone-600 rounded-full"></span>
                Restaurant Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-amber-600">Business Name:</strong> Madina Chicken Biryani
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-amber-600">Established:</strong> 1995
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-amber-600">Location:</strong> Hyderabad, Telangana, India
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <strong className="text-amber-600">Contact:</strong> +91 8374275150
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-lg mt-4">
                <strong>Specialization:</strong> Authentic Hyderabadi Dum Biryani
              </div>
            </section>

            <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Online Presence Verification
              </h2>
              <p className="mb-4 text-green-700">You can verify our authenticity through:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
                  <strong className="text-red-600">Zomato:</strong> Search "Madina Chicken Biryani ECIL" and "Super Chef Nacharam"
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
                  <strong className="text-orange-600">Swiggy:</strong> Search "Madina Biryani-Q Dammaiguda" and "Super Chef Nacharam"
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
                  <strong className="text-blue-600">Google Maps:</strong> Search our outlet addresses for reviews and photos
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
                  <strong className="text-pink-600">Instagram:</strong> @super_chef_biryani, @madinachickenbiryani, @madinabiryaniq
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Information We Collect
              </h2>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="leading-relaxed text-blue-700">
                  This website is informational only. We do not collect personal data through this site. 
                  For orders, customers use established platforms like Zomato and Swiggy, or call our outlets directly.
                </p>
              </div>
            </section>

            <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Third-Party Services
              </h2>
              <p className="mb-4 text-purple-700">We use:</p>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-200 flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                  Google Maps for location display
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-200 flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                  Instagram embeds for social media content
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-200 flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                  Zomato and Swiggy for online ordering
                </div>
              </div>
            </section>

            <section className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h2 className="text-xl font-semibold text-orange-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Contact Information
              </h2>
              <p className="mb-4 text-orange-700">For any concerns about this website or our services:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-orange-200">
                  <strong className="text-orange-600">Phone:</strong><br />+91 8374275150
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-orange-200">
                  <strong className="text-orange-600">Address:</strong><br />South Kamala Nagar, ECIL, Hyderabad
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-orange-200">
                  <strong className="text-orange-600">Developer:</strong><br />Rafi Ud Deen - @rafi_ud_deen
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-stone-100 to-stone-200 p-6 rounded-lg border border-stone-300">
              <h2 className="text-xl font-semibold text-stone-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-stone-600 rounded-full"></span>
                Website Security
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                <p className="leading-relaxed">
                  This website is hosted on Cloudflare Pages with SSL encryption. 
                  We do not process payments or store customer data. All transactions 
                  are handled through verified third-party platforms.
                </p>
              </div>
            </section>

            <div className="border-t-2 border-amber-200 pt-6 mt-8 text-center">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-lg">
                <p className="font-semibold">Last updated: January 2026</p>
                <p>© 2026 Madina Chicken Biryani. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}