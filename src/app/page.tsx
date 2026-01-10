"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  ChevronRight,
  Star,
  ArrowUp,
  Youtube,
} from "lucide-react";
import OutletMap from "@/components/OutletMap";

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

// --- DATA: Outlets ---
const outlets = [
  {
    id: 1,
    name: "Madina Chicken Biryani - ECIL",
    address: "South Kamala Nagar, Ecil, Hyderabad",
    phone: "+91 8374275150",
    timings: "11:00 AM - 11:00 PM",
    mapLink: "https://maps.app.goo.gl/97oZUsoZwDJjXLpJ6",
  },
  {
    id: 2,
    name: "Madina Chicken Biryani - Moula Ali",
    address: "Gayatrinagar X Road, Moula Ali , Hyderabad",
    phone: "+91 8374275150",
    timings: "11:00 AM - 11:00 PM",
    mapLink: "https://maps.app.goo.gl/hLa7fk5Pv9xsWGqm9",
  },
  {
    id: 3,
    name: "Madina Biryani-Q - Dammaiguda",
    address: "Dammaiguda X Rd, Hyderabad",
    phone: "+91 8121137729",
    timings: "11:00 AM - 11:00 PM",
    mapLink: "https://maps.app.goo.gl/zG3x349ZJ8hN8yqR8",
  },
  {
    id: 4,
    name: "Super Chef Chicken Biryani - Nacharam",
    address: "Street Number 3, Bhavani Nagar, Nacharam, Hyderabad",
    phone: "+91 8555055605",
    timings: "11:00 AM - 11:00 PM",
    mapLink: "https://maps.app.goo.gl/bVWAxF3cqDyWKn2n7",
  },
  {
    id: 5,
    name: "MCM Super chef - Ramanthapur",
    address: "Mallikarjuna Nagar, Ramanthapur, Hyderabad",
    phone: "+91 8639884585",
    timings: "11:00 AM - 11:00 PM",
    mapLink: "https://maps.app.goo.gl/vBJe7SokrMymQCC36",
  },
];

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToOutlets = () => {
    document.getElementById("outlets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className={`${playfair.variable} ${lato.variable} font-sans bg-stone-50 text-stone-800`}
    >
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-stone-900/95 backdrop-blur-md text-amber-500 py-2 md:py-3 lg:py-4 border-b border-amber-500/20 landscape-nav">
        <div className="container mx-auto flex justify-between items-center px-3 md:px-6 lg:px-8">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-widest font-serif text-white landscape-text">
            MADINA <span className="text-amber-500">BIRYANI</span>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-xs lg:text-sm uppercase tracking-wider font-semibold">
            <a
              href="#home"
              className="hover:text-white transition-colors py-2 px-2"
            >
              Home
            </a>
            <a
              href="#history"
              className="hover:text-white transition-colors py-2 px-2"
            >
              Heritage
            </a>
            <a
              href="#outlets"
              className="hover:text-white transition-colors py-2 px-2"
            >
              Locations
            </a>
            <button
              onClick={scrollToOutlets}
              className="px-3 lg:px-4 xl:px-5 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 hover:text-white transition-all hover:scale-105 uppercase tracking-wider text-xs lg:text-sm font-semibold shadow-lg"
            >
              ORDER NOW
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={scrollToOutlets}
              className="px-3 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 hover:text-white transition-all hover:scale-105 font-bold text-xs shadow-lg"
            >
              Order
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[url('/MadinaBiryaniBG.jpg')] bg-cover bg-center bg-no-repeat landscape-hero"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-6 lg:px-8 max-w-6xl mx-auto landscape-content">
          <span className="bg-amber-600 text-white px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-full text-xs md:text-sm lg:text-base font-semibold tracking-wide uppercase shadow-lg inline-block">
            Est. 1995
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-serif text-white mt-4 md:mt-6 lg:mt-8 mb-3 md:mb-4 lg:mb-6 leading-tight landscape-spacing">
            The Royal Taste of <span className="text-amber-400">Hyderabad</span>
            <span className="sr-only">chicken biryani near me chicken biryani recipe chicken biryani kaise banate hain chicken biryani images chicken biryani calories chicken biryani seivathu eppadi chicken biryani masala chicken biryani photo chicken biryani price chicken biryani at home chicken biryani ahmedabad chicken biryani and kabab chicken biryani app chicken biryani allergens chicken biryani agra chicken biryani andhra style chicken biryani available near me chicken biryani and mutton biryani chicken biryani all ingredients</span>
          </h1>

          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-stone-200 mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto px-2 leading-relaxed landscape-spacing">
            Slow-cooked authentic Dum Biryani with real Nizam spices, served
            fresh across our city outlets.
            <span className="sr-only">chicken biryani banane ka tarika chicken biryani banane ki recipe chicken biryani banane ki vidhi chicken biryani banana chicken biryani benefits chicken biryani banane ka vidhi chicken biryani banner design chicken biryani best near me chicken biryani bangalore chicken biryani bucket price chicken biryani chicken biryani chicken biryani calories per 100g chicken biryani calories per 250g chicken biryani calories per 500g chicken biryani chesa vidhanam chicken biryani center near me chicken biryani cooker chicken biryani cut chicken biryani caterers near me</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center px-2">
            <button
              onClick={scrollToOutlets}
              className="bg-amber-600 hover:bg-amber-700 text-white hover:text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-bold text-sm md:text-lg lg:text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
            >
              <MapPin size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" /> Order Now
              <span className="sr-only">chicken biryani description chicken biryani drawing chicken biryani dum biryani chicken biryani dikhao chicken biryani digestion time chicken biryani dum time chicken biryani delhi chicken biryani delivery near me chicken biryani dada boudi price chicken biryani drawing for kids chicken biryani eppadi seivathu chicken biryani ela cheyali chicken biryani easy recipe chicken biryani executive smile pack chicken biryani eppadi chicken biryani eating chicken biryani essence chicken biryani ela chestaru chicken biryani ela tayaru cheyali chicken biryani emoji</span>
            </button>
            <a
              href="#menu"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white px-5 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base lg:text-lg shadow-lg"
            >
              View Menu
              <span className="sr-only">chicken biryani family pack price chicken biryani for 100 persons price chicken biryani full plate price chicken biryani family pack chicken biryani for 15 persons ingredients chicken biryani for 50 person price chicken biryani for 20 persons ingredients chicken biryani for 10 persons ingredients chicken biryani for 25 persons price chicken biryani famous near me chicken biryani game chicken biryani gravy recipe chicken biryani glycemic index chicken biryani gravy chicken biryani gurgaon chicken biryani good for health chicken biryani gravy masala chicken biryani good for weight loss chicken biryani gorakhpur chicken biryani ghaziabad</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- STORY & HISTORY SECTION --- */}
      <section
        id="history"
        className="py-12 md:py-20 lg:py-24 xl:py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden landscape-content"
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2"></div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
                <Image
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
                  alt="Authentic Hyderabadi Dum Biryani served in traditional style with aromatic basmati rice and tender chicken"
                  fill
                  sizes="(max-width: 640px) 384px, (max-width: 1024px) 448px, 512px"
                  className="object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 lg:p-8">
                  <p className="text-white font-serif italic text-base md:text-lg lg:text-xl">
                    "Authenticity in every grain"
                  </p>
                </div>
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-stone-900 text-amber-500 p-2 md:p-3 lg:p-4 rounded-full flex items-center justify-center text-center shadow-xl border-2 md:border-3 lg:border-4 border-white">
                <span className="font-bold text-xs md:text-sm lg:text-base leading-tight">
                  100%
                  <br />
                  Halal
                  <br />
                  Certified
                </span>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
              <div>
                <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs md:text-sm lg:text-base mb-2 md:mb-3">
                  Our Heritage
                </h3>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-stone-900 mb-4 md:mb-6 lg:mb-8">
                  The Story of Hyderabadi Dum Biryani
                </h2>
                <div className="w-16 md:w-20 lg:w-24 h-1 bg-amber-500 mx-auto lg:mx-0"></div>
              </div>

              <div className="space-y-4 md:space-y-6 lg:space-y-8 text-sm md:text-base lg:text-lg text-stone-600 leading-relaxed">
                <p>
                  The history of Hyderabadi Dum Biryani is as rich as its
                  flavor. Originating in the royal kitchens of the{" "}
                  <strong>Nizams of Hyderabad</strong>, this dish is a
                  masterpiece born from the fusion of Mughlai and Iranian
                  cuisine with local Telugu flavors.
                </p>

                <div className="bg-amber-50 p-4 md:p-6 lg:p-8 rounded-lg border-l-4 border-amber-600">
                  <h4 className="font-bold text-stone-900 mb-2 md:mb-3 text-base md:text-lg">
                    The "Kacchi Yakhni" Method
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg">
                    At Madina Chicken Biryani, we honor the traditional method.
                    Raw, marinated meat is layered with half-cooked basmati rice
                    in a sealed handi. This allows the meat and rice to
                    slow-cook together (Dum) in their own juices, absorbing the
                    aroma of saffron and our secret spices.
                  </p>
                </div>

                <p>
                  Today, it is an icon of Hyderabad, associated with landmarks
                  like the Charminar. We bring this royal legacy to your plate
                  at our multiple outlets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE MASTERPIECE (Menu) --- */}
      <section
        id="menu"
        className="py-16 md:py-20 lg:py-24 xl:py-28 bg-stone-100"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="w-full lg:w-1/2 relative">
              {/* Big Hero Image of the Biryani Plate */}
              <div className="aspect-square relative rounded-full border-3 md:border-4 lg:border-5 border-amber-500 shadow-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <Image
                  src="/MadinaBiryaniSG.jpg"
                  alt="Madina Biryani signature Hyderabadi Dum Biryani plate with fragrant basmati rice, tender chicken, and traditional spices - ₹100 per plate"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 512px, 576px"
                  priority
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-6 lg:right-6 bg-stone-900 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg border-2 border-white">
                <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  ₹100
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest">
                  Per Plate
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 lg:space-y-8">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs md:text-sm lg:text-base">
                One Dish. Infinite Flavor.
                <span className="sr-only">chicken biryani hd images chicken biryani hotel near me chicken biryani handi chicken biryani hyderabad chicken biryani hyderabadi chicken biryani how many calories chicken biryani hd chicken biryani home delivery near me chicken biryani hotel chicken biryani hindi chicken biryani ingredients chicken biryani images hd chicken biryani images at home chicken biryani items list chicken biryani in cooker chicken biryani in tamil chicken biryani ingredients list chicken biryani in hindi chicken biryani in telugu</span>
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-stone-900 leading-tight">
                The Signature Chicken Dum Biryani
                <span className="sr-only">chicken biryani jaise vidhanam chicken biryani jumbo pack price chicken biryani jaipur chicken biryani jabbar bhai chicken biryani jabalpur chicken biryani jalandhar chicken biryani jumbo chicken biryani jalgaon chicken biryani jpg image chicken biryani jumbo pack chicken biryani ki recipe chicken biryani kannada chicken biryani ka photo chicken biryani khane ke fayde chicken biryani kashi banvaychi chicken biryani kaise vidhanam chicken biryani kaise chicken biryani kerala style chicken biryani kolkata</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-stone-600 leading-relaxed">
                We don't distract you with a 10-page menu. We serve{" "}
                <strong>one thing</strong>, and we have perfected it over
                decades.
                <span className="sr-only">chicken biryani list chicken biryani lucknow chicken biryani logo chicken biryani leg piece chicken biryani list of ingredients chicken biryani low price chicken biryani list in tamil chicken biryani location chicken biryani ludhiana chicken biryani large quantity chicken biryani maduva vidhana chicken biryani malayalam chicken biryani masala everest chicken biryani masala suhana chicken biryani masala recipe chicken biryani model chicken biryani masala packet chicken biryani mutton biryani chicken biryani maduva vidhana kannada</span>
              </p>

              <ul className="space-y-3 md:space-y-4 lg:space-y-5 mt-4 md:mt-6 lg:mt-8">
                <li className="flex items-start gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-amber-100 p-2 md:p-3 rounded-full text-amber-600 mt-1 shrink-0">
                    <Star
                      size={16}
                      className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm md:text-base lg:text-lg">
                      The Rice
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base text-stone-500">
                      Premium extra-long grain Basmati, aged for aroma.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-amber-100 p-2 md:p-3 rounded-full text-amber-600 mt-1 shrink-0">
                    <Star
                      size={16}
                      className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm md:text-base lg:text-lg">
                      The Meat
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base text-stone-500">
                      Fresh, tender cuts marinated for 12 hours in secret
                      spices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 md:gap-4 lg:gap-5">
                  <div className="bg-amber-100 p-2 md:p-3 rounded-full text-amber-600 mt-1 shrink-0">
                    <Star
                      size={16}
                      className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm md:text-base lg:text-lg">
                      The Dum
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base text-stone-500">
                      Sealed with dough and slow-cooked over low flame to trap
                      the essence.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-4 md:pt-6 lg:pt-8">
                <button
                  onClick={scrollToOutlets}
                  className="bg-amber-600 hover:bg-amber-700 text-white hover:text-white font-bold py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 xl:px-12 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  Order Now
                  <span className="sr-only">chicken biryani near me delivery chicken biryani near me open now chicken biryani near me within 400m chicken biryani near me with price chicken biryani near me within 800m chicken biryani nearby chicken biryani nutrition chicken biryani near me within 1.6 km chicken biryani near me home delivery chicken biryani online order chicken biryani order chicken biryani online chicken biryani online order near me chicken biryani order near me chicken biryani origin chicken biryani original photo chicken biryani offer chicken biryani order in train chicken biryani odia</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATERING (Bulk Orders) --- */}
      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h3 className="uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base font-bold mb-4 md:mb-6 text-amber-500">
            Weddings • Corporate • Parties
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6 md:mb-8 lg:mb-10">
            Serve The City's Best
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto font-light text-stone-300 leading-relaxed">
            Impress your guests with the authentic taste of Hyderabad.{" "}
            <br className="hidden sm:block" />
            Bulk orders available for{" "}
            <span className="font-bold text-white">20 to 2000 people</span>.
          </p>
          <button
            onClick={scrollToOutlets}
            className="bg-amber-600 text-black hover:bg-amber-700 hover:text-black font-bold py-3 md:py-4 lg:py-5 px-8 md:px-10 lg:px-12 xl:px-16 rounded-full transition duration-300 text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Inquire for Catering
          </button>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-12 md:mb-16">
            Voices of Hyderabad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Review 1 */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-2xl md:text-4xl absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-white px-3 md:px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-sm md:text-lg mb-6 md:mb-8 leading-relaxed pt-4 md:pt-0">
                "I love that they don't confuse you with a huge menu. They do
                one thing, and they are the absolute masters of it."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-xs md:text-sm">
                — Ahmed Khan
              </h4>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-2xl md:text-4xl absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-white px-3 md:px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-sm md:text-lg mb-6 md:mb-8 leading-relaxed pt-4 md:pt-0">
                "The consistency is incredible. Every time I order, the rice is
                perfectly fluffy and the spice level is spot on."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-xs md:text-sm">
                — Priya Sharma
              </h4>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-2xl md:text-4xl absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-white px-3 md:px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-sm md:text-lg mb-6 md:mb-8 leading-relaxed pt-4 md:pt-0">
                "Authentic Hyderabadi taste. You can smell the saffron and pure
                ghee as soon as you open the parcel."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-xs md:text-sm">
                — Rahul Reddy
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUTLETS & MAP SECTION --- */}
      <section
        id="outlets"
        className="py-16 md:py-20 lg:py-24 xl:py-28 bg-stone-900 text-white relative"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 md:mb-6">
              Visit Our Outlets
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-stone-400 leading-relaxed">
              Find the authentic taste near you. We are expanding across
              Hyderabad.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 h-auto xl:grid xl:grid-cols-5">
            {/* List of Outlets */}
            <div className="xl:col-span-2 space-y-3 md:space-y-4 lg:space-y-5 h-64 md:h-80 lg:h-[600px] xl:h-[600px] overflow-y-auto pr-2 no-scrollbar">
              {outlets.map((outlet) => (
                <div
                  key={outlet.id}
                  className="bg-stone-800 p-4 md:p-5 lg:p-6 xl:p-8 rounded-lg border border-stone-700 hover:border-amber-500 transition cursor-pointer group"
                >
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-serif mb-2 md:mb-3 group-hover:text-amber-500 transition">
                    {outlet.name}
                  </h3>
                  <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base xl:text-lg text-stone-400">
                    <p className="flex items-start gap-2 md:gap-3">
                      <MapPin
                        size={16}
                        className="mt-1 shrink-0 md:w-[18px] md:h-[18px] xl:w-5 xl:h-5"
                      />{" "}
                      {outlet.address}
                    </p>
                    <a
                      href={`tel:${outlet.phone}`}
                      className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition"
                    >
                      <Phone size={16} className="md:w-[18px] md:h-[18px] xl:w-5 xl:h-5" />{" "}
                      {outlet.phone}
                    </a>
                    <p className="flex items-center gap-2 md:gap-3">
                      <Clock size={16} className="md:w-[18px] md:h-[18px] xl:w-5 xl:h-5" />{" "}
                      {outlet.timings}
                    </p>
                  </div>
                  <a
                    href={outlet.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 md:mt-4 lg:mt-5 xl:mt-6 w-full py-2 md:py-3 xl:py-4 bg-stone-700 hover:bg-stone-600 rounded text-xs md:text-sm lg:text-base xl:text-lg font-semibold transition block text-center"
                  >
                    View on Map
                  </a>
                </div>
              ))}
            </div>

            {/* Google Map Component */}
            <div className="xl:col-span-3 bg-stone-800 rounded-xl overflow-hidden shadow-2xl border border-stone-700 h-64 md:h-80 lg:h-[600px] xl:h-[600px]">
              <OutletMap outlets={outlets} />
            </div>
          </div>
        </div>
      </section>

      {/* --- INSTAGRAM SECTION --- */}
      <section id="gallery" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-6 md:mb-8 lg:mb-10">
            From Our Kitchen
          </h2>
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-amber-600 font-bold mb-3 md:mb-4 lg:mb-5 text-base md:text-lg lg:text-xl">
              Follow Us
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 text-amber-600 font-bold text-sm md:text-base lg:text-lg">
              <a
                href="https://www.instagram.com/super_chef_biryani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 hover:underline transition"
              >
                <Instagram size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />{" "}
                @super_chef_biryani
              </a>
              <a
                href="https://www.youtube.com/@Growbyte07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 hover:underline transition"
              >
                <Youtube size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />{" "}
                @Growbyte07
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 text-amber-600 font-bold mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base">
              <a
                href="https://www.instagram.com/madinachickenbiryani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 hover:underline transition"
              >
                <Instagram size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />{" "}
                @madinachickenbiryani
              </a>
              <a
                href="https://www.instagram.com/madinabiryaniq/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 hover:underline transition"
              >
                <Instagram size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />{" "}
                @madinabiryaniq
              </a>
            </div>
          </div>

          {/* Instagram Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-7xl mx-auto">
            <a
              href="https://www.instagram.com/reel/DOGzzvykh9c/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[302px] h-[537px] bg-stone-200 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 landscape:aspect-[16/9] landscape:col-span-1"
            >
              <iframe
                src="https://www.instagram.com/reel/DOGzzvykh9c/embed?autoplay=1&muted=1"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Instagram Reel 1"
              ></iframe>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full">
                  View Post
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/reel/DPYUFDSiDak/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[302px] h-[537px] bg-stone-200 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <iframe
                src="https://www.instagram.com/reel/DPYUFDSiDak/embed?autoplay=1&muted=1"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Instagram Reel 2"
              ></iframe>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full">
                  View Post
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/reel/DPV8eE_iIoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[302px] h-[537px] bg-stone-200 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <iframe
                src="https://www.instagram.com/reel/DPV8eE_iIoy/embed?autoplay=1&muted=1"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Instagram Reel 3"
              ></iframe>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full">
                  View Post
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/reel/DSZbUL1kl3p/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[302px] h-[537px] bg-stone-200 relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <iframe
                src="https://www.instagram.com/reel/DSZbUL1kl3p/embed?autoplay=1&muted=1"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Instagram Reel 4"
              ></iframe>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-sm md:text-base lg:text-lg">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full">
                  View Post
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- ORDER ONLINE SECTION --- */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-red-600 via-red-500 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 md:mb-6 lg:mb-8">
            Order Online Now
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Skip the wait! Order your favorite Hyderabadi Dum Biryani online and
            get it delivered fresh to your doorstep.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Zomato Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/20">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-5 lg:mb-6 flex items-center justify-center gap-2 md:gap-3">
                <span className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                  Zomato
                </span>
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="http://zoma.to/r/21398988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-red-600 hover:bg-red-50 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base hover:scale-105 transform"
                >
                  ECIL Outlet
                </a>
                <a
                  href="http://zoma.to/r/20942835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-red-600 hover:bg-red-50 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base hover:scale-105 transform"
                >
                  Nacharam Outlet
                </a>
              </div>
            </div>

            {/* Swiggy Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/20">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-5 lg:mb-6 flex items-center justify-center gap-2 md:gap-3">
                <span className="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                  Swiggy
                </span>
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="https://www.swiggy.com/city/hyderabad/madina-biryani-q-dammaiguda-x-road-yapral-kowkoor-rest1013705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-orange-600 hover:bg-orange-50 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base hover:scale-105 transform"
                >
                  Dammaiguda Outlet
                </a>
                <a
                  href="https://www.swiggy.com/city/hyderabad/super-chef-chicken-biryani-bhavani-nagar-tarnaka-nacharam-and-malkajigiri-rest880447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-orange-600 hover:bg-orange-50 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base hover:scale-105 transform"
                >
                  Nacharam Outlet
                </a>
              </div>
            </div>
          </div>

          <div className="text-xs md:text-sm lg:text-base opacity-75 mt-6 md:mt-8">
            Available for delivery in Hyderabad
          </div>
        </div>
      </section>

      {/* Hidden SEO Keywords Section */}
      <div className="sr-only">
        <h2>Complete Chicken Biryani Guide - All Keywords</h2>
        <p>chicken biryani png chicken biryani pics chicken biryani protein chicken biryani per kg price chicken biryani price near me chicken biryani photos hd chicken biryani plate chicken biryani preparation chicken biryani quotes chicken biryani quarter means chicken biryani quarter chicken biryani quantity chicken biryani quick recipe chicken biryani quick style chicken biryani quotation chicken biryani quantity for 10 persons chicken biryani qawwali chicken biryani quantity for 6 persons</p>
        <p>chicken biryani recipe in tamil chicken biryani recipe in hindi chicken biryani recipe ingredients chicken biryani recipe in marathi chicken biryani recipe in malayalam chicken biryani recipe in kannada chicken biryani recipe in bengali chicken biryani recipe in telugu chicken biryani restaurant near me chicken biryani shop near me chicken biryani seimurai chicken biryani smile pack chicken biryani spelling chicken biryani seivathu chicken biryani swiggy chicken biryani song chicken biryani shop chicken biryani seivathu eppadi tamil</p>
        <p>chicken biryani tayari vidhanam chicken biryani telugu chicken biryani tayari chicken biryani tamil chicken biryani telugu lo chicken biryani types chicken biryani taiyar jaise vidhanam chicken biryani telugu video chicken biryani thane chicken biryani thali chicken biryani under 100 near me chicken biryani under 100 chicken biryani under 150 near me chicken biryani under 200 chicken biryani under 150 chicken biryani under 200 near me chicken biryani unlimited chicken biryani uttam nagar chicken biryani uses chicken biryani upokoron</p>
        <p>chicken biryani video chicken biryani varieties chicken biryani vadodara chicken biryani vidhanam chicken biryani vs chicken dum biryani chicken biryani vs mutton biryani chicken biryani video download chicken biryani vismai food chicken biryani vidhana chicken biryani videos telugu chicken biryani with raita chicken biryani wala chicken biryani with egg chicken biryani wallpaper chicken biryani with gravy chicken biryani with leg piece chicken biryani wala cartoon chicken biryani wala cheyali chicken biryani without chicken chicken biryani water ratio</p>
        <p>chicken biryani xl chicken xl biryani ambur chicken xl biryani ambur quantity thalappakatti chicken biryani xl how to make biryani chicken biryani at home how to make chicken biryani at home 4 kg chicken biryani recipe how long to cook chicken for biryani types of chicken biryani chicken biryani express chicken biryani youtube chicken biryani yfl chicken biryani your food lab chicken biryani youtube telugu chicken biryani yummy o yummy chicken biryani youtube shorts chicken biryani yummy tummy chicken biryani youtube video chicken biryani yummy tummy aarthi chicken biryani youtube kannada</p>
        <p>chicken biryani zomato chicken biryani zomato price chicken biryani zomato order chicken biryani zepto chicken biryani zomato image chicken biryani zam zam chicken biryani zomato price near me chicken biryani zaika chicken biryani zomato near me chicken biryani zanzibar chicken biryani o chicken biryani o que é 1 chicken biryani calories half kg chicken biryani recipe half chicken biryani calories 1.5 kg chicken biryani recipe</p>
        <p>chicken biryani 100 chicken biryani 11 chicken biryani 8 chicken biryani 50 chicken biryani 1 kg price chicken biryani 1 kg price near me chicken biryani 1kg chicken biryani 1 plate price chicken biryani 100g calories chicken biryani 1 kg recipe chicken biryani 100 rupees chicken biryani 1000ml means chicken biryani 1/2 kg chicken biryani 1 kilo chicken biryani 250g calories chicken biryani 2 kg price chicken biryani 2 kg chicken biryani 2 kg recipe chicken biryani 250g chicken biryani 200g calories chicken biryani 24 hours chicken biryani 2 chicken biryani 2 plate chicken biryani 2 kilo</p>
        <p>chicken biryani 3 kg chicken biryani 3 kg price chicken biryani 3d images chicken biryani 300g calories chicken biryani 30 members chicken biryani 3 chicken biryani 300 gm chicken biryani 3d model chicken biryani 3d chicken biryani 3 kilo chicken biryani 4k images chicken biryani 4k hd images chicken biryani 4k chicken biryani 400g calories chicken biryani 4 kg chicken biryani 400g chicken biryani 4k wallpaper chicken biryani 4k png chicken 43 biryani chicken biryani for 40 persons price</p>
        <p>chicken biryani 500g calories chicken biryani 500 ml chicken biryani 5 kg price chicken biryani 50 members chicken biryani 500g protein chicken biryani 500gm chicken biryani 50 rupees chicken biryani 5 rupay chicken biryani 500 ml calories chicken biryani 5 star hotel chicken biryani 65 chicken biryani 60 rupees chicken biryani 65 images chicken biryani 65 recipe chicken biryani 600g calories chicken 65 biryani combo chicken biryani 69 chicken biryani 65 near me chicken biryani 600ml chicken 65 biryani calories</p>
        <p>chicken biryani 750 ml means chicken biryani 750 ml chicken biryani 750 ml calories 7-11 chicken biryani chicken biryani 7 chicken biryani 70 rupees chicken 75 biryani chicken 78 biryani chicken biryani for 70 person butter chicken biryani 7 eleven chicken biryani 80 rupees chicken biryani 80 chicken biryani 8k images chicken 85 biryani chicken biryani for 8 persons chicken biryani for 800 people chicken biryani for 80 people chicken biryani within 800m chicken biryani for 800</p>
        <p>chicken biryani 99 chicken biryani 99 rupees near me chicken biryani 99 near me chicken biryani 99 rupees chicken 999 biryani chicken 95 biryani chicken 90 biryani chicken biryani for 9 people ambur chicken 95 biryani 913 chicken biryani</p>
      </div>

      {/* --- FOOTER --- */}
      <footer
        id="contact"
        className="bg-stone-950 text-stone-500 py-8 md:py-12 border-t border-stone-800"
      >
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 md:mb-4">
              MADINA BIRYANI
            </h3>
            <p className="text-xs md:text-sm leading-relaxed mb-4">
              Carrying forward the Nizam's legacy of authentic Hyderabadi Dum
              Biryani. Fresh ingredients, royal taste.
            </p>
            <div className="flex gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <a
                  href="https://www.instagram.com/super_chef_biryani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram @super_chef_biryani"
                >
                  <Instagram size={16} className="md:w-5 md:h-5" />
                </a>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer">
                <a
                  href="https://www.youtube.com/@Growbyte07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel @Growbyte07"
                >
                  <Youtube size={16} className="md:w-5 md:h-5" />
                </a>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <a
                  href="https://www.instagram.com/madinachickenbiryani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram @madinachickenbiryani"
                >
                  <Instagram size={14} className="md:w-4 md:h-4" />
                </a>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <a
                  href="https://www.instagram.com/madinabiryaniq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram @madinabiryaniq"
                >
                  <Instagram size={14} className="md:w-4 md:h-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
              Quick Links
            </h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-500 transition">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#outlets" className="hover:text-amber-500 transition">
                  Locate Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
              Contact Us
            </h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-amber-600 md:w-4 md:h-4" />
                <a
                  href="tel:+918374275150"
                  className="hover:text-amber-500 transition"
                >
                  +91 8374275150
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-600 md:w-4 md:h-4" />{" "}
                Secunderabad, Telangana
              </li>
              <li className="text-xs mt-3 md:mt-4">
                © 2026 Madina Chicken Biryani. All Rights Reserved.
              </li>
              <li className="text-xs mt-1">
                For feedback & suggestions: <a href="mailto:Rafiudden@outlook.com" className="text-amber-500 hover:text-amber-400 transition">Rafiudden@outlook.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-amber-600 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 z-50 hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </button>
    </main>
  );
}
