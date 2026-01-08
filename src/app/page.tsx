import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  ChevronRight,
  Star,
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
    name: "Madina Biryani - Charminar",
    address: "Near Charminar, Old City, Hyderabad",
    lat: 17.3616,
    lng: 78.4747,
    phone: "+91 9912743366",
    timings: "11:00 AM - 11:00 PM",
  },
  {
    id: 2,
    name: "Madina Biryani - Banjara Hills",
    address: "Road No. 12, Banjara Hills",
    lat: 17.4126,
    lng: 78.4398,
    phone: "+91 9912743366",
    timings: "12:00 PM - 12:00 AM",
  },
  {
    id: 3,
    name: "Madina Biryani - Secunderabad",
    address: "Paradise Circle, Secunderabad",
    lat: 17.4399,
    lng: 78.4983,
    phone: "+91 9912743366",
    timings: "11:00 AM - 11:00 PM",
  },
];

export default function Home() {
  return (
    <main
      className={`${playfair.variable} ${lato.variable} font-sans bg-stone-50 text-stone-800`}
    >
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-stone-900/90 backdrop-blur-sm text-amber-500 py-4 border-b border-amber-500/30">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold tracking-widest font-serif text-white">
            MADINA <span className="text-amber-500">BIRYANI</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-semibold">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#history" className="hover:text-white transition-colors">
              Heritage
            </a>
            <a href="#outlets" className="hover:text-white transition-colors">
              Locations
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="hero-parallax relative h-screen flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="bg-amber-600 text-white px-3 py-1 text-xs uppercase tracking-[0.2em] rounded-sm">
              Est. 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white mb-6 drop-shadow-2xl leading-tight">
            The Royal Taste of <br />{" "}
            <span className="text-amber-500">Hyderabad</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto">
            Slow-cooked authentic Dum Biryani with real Nizam spices, served
            fresh across our city outlets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#outlets"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded text-lg transition duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <MapPin size={20} /> Find Nearest Outlet
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white font-bold rounded text-lg transition duration-300 flex items-center justify-center gap-2"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* --- STORY & HISTORY SECTION --- */}
      <section id="history" className="py-24 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2"></div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
                  alt="Authentic Hyderabadi Biryani"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-serif italic text-lg">
                    "Authenticity in every grain"
                  </p>
                </div>
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900 text-amber-500 p-4 rounded-full flex items-center justify-center text-center shadow-xl border-4 border-white">
                <span className="font-bold text-sm leading-tight">
                  100%
                  <br />
                  Halal
                  <br />
                  Certified
                </span>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">
                  Our Heritage
                </h3>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                  The Story of Hyderabadi Dum Biryani
                </h2>
                <div className="w-24 h-1 bg-amber-500"></div>
              </div>

              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  The history of Hyderabadi Dum Biryani is as rich as its
                  flavor. Originating in the royal kitchens of the{" "}
                  <strong>Nizams of Hyderabad</strong>, this dish is a
                  masterpiece born from the fusion of Mughlai and Iranian
                  cuisine with local Telugu flavors.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                  <h4 className="font-bold text-stone-900 mb-2">
                    The "Kacchi Yakhni" Method
                  </h4>
                  <p className="text-sm">
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

      {/* --- THE MASTERPIECE (Replacing the Menu) --- */}
      <section id="menu" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              {/* Big Hero Image of the Biryani Plate */}
              <div className="aspect-square relative rounded-full border-4 border-amber-500 shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop"
                  alt="The Signature Biryani"
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-stone-900 text-white p-4 rounded-full shadow-lg border-2 border-white">
                <span className="block text-2xl font-bold">₹350</span>
                <span className="text-xs uppercase tracking-widest">
                  Per Plate
                </span>
              </div>
            </div>

            <div className="md:w-1/2 text-left space-y-6">
              <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm">
                One Dish. Infinite Flavor.
              </h3>
              <h2 className="text-5xl font-serif font-bold text-stone-900">
                The Signature Chicken Dum Biryani
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                We don't distract you with a 10-page menu. We serve{" "}
                <strong>one thing</strong>, and we have perfected it over
                decades.
              </p>

              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                    <Star size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">The Rice</h4>
                    <p className="text-sm text-stone-500">
                      Premium extra-long grain Basmati, aged for aroma.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                    <Star size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">The Meat</h4>
                    <p className="text-sm text-stone-500">
                      Fresh, tender cuts marinated for 12 hours in secret
                      spices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full text-amber-600 mt-1">
                    <Star size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">The Dum</h4>
                    <p className="text-sm text-stone-500">
                      Sealed with dough and slow-cooked over low flame to trap
                      the essence.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-6">
                <a
                  href="#outlets"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded shadow-lg transition"
                >
                  Order The Special
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATERING (Bulk Orders) --- */}
      <section className="py-24 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="uppercase tracking-[0.2em] text-sm font-bold mb-4 text-amber-500">
            Weddings • Corporate • Parties
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Serve The City's Best
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light text-stone-300">
            Impress your guests with the authentic taste of Hyderabad. <br />
            Bulk orders available for{" "}
            <span className="font-bold text-white">20 to 2000 people</span>.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-stone-900 hover:bg-amber-500 hover:text-white font-bold py-4 px-12 rounded-full transition duration-300 text-lg shadow-xl"
          >
            Inquire for Catering
          </a>
        </div>
      </section>

      {/* --- REVIEWS (Updated for One Dish) --- */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-16">
            Voices of Hyderabad
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Review 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-4xl absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-lg mb-8 leading-relaxed">
                "I love that they don't confuse you with a huge menu. They do
                one thing, and they are the absolute masters of it."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-sm">
                — Ahmed Khan
              </h4>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-4xl absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-lg mb-8 leading-relaxed">
                "The consistency is incredible. Every time I order, the rice is
                perfectly fluffy and the spice level is spot on."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-sm">
                — Priya Sharma
              </h4>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-stone-100 relative">
              <div className="text-amber-500 text-4xl absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4">
                ★★★★★
              </div>
              <p className="text-stone-600 italic text-lg mb-8 leading-relaxed">
                "Authentic Hyderabadi taste. You can smell the saffron and pure
                ghee as soon as you open the parcel."
              </p>
              <h4 className="font-bold text-stone-900 uppercase tracking-wider text-sm">
                — Rahul Reddy
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUTLETS & MAP SECTION --- */}
      <section id="outlets" className="py-24 bg-stone-900 text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Visit Our Outlets
            </h2>
            <p className="text-stone-400">
              Find the authentic taste near you. We are expanding across
              Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 h-full">
            {/* List of Outlets */}
            <div className="lg:col-span-1 space-y-4 h-[500px] overflow-y-auto pr-2 no-scrollbar">
              {outlets.map((outlet) => (
                <div
                  key={outlet.id}
                  className="bg-stone-800 p-6 rounded-lg border border-stone-700 hover:border-amber-500 transition cursor-pointer group"
                >
                  <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-amber-500 transition">
                    {outlet.name}
                  </h3>
                  <div className="space-y-2 text-sm text-stone-400">
                    <p className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 shrink-0" />{" "}
                      {outlet.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={16} /> {outlet.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock size={16} /> {outlet.timings}
                    </p>
                  </div>
                  <button className="mt-4 w-full py-2 bg-stone-700 hover:bg-stone-600 rounded text-sm font-semibold transition">
                    View on Map
                  </button>
                </div>
              ))}
            </div>

            {/* Google Map Component */}
            <div className="lg:col-span-2 bg-stone-800 rounded-xl overflow-hidden shadow-2xl border border-stone-700 h-[500px]">
              <OutletMap outlets={outlets} />
            </div>
          </div>
        </div>
      </section>

      {/* --- INSTAGRAM SECTION --- */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">
            From Our Kitchen
          </h2>
          <div className="flex justify-center items-center gap-2 text-amber-600 mb-12 font-bold cursor-pointer hover:underline">
            <Instagram /> <span>@MadinaChickenBiryani</span>
          </div>

          {/* Placeholder Grid for Instagram Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-stone-200 relative group overflow-hidden rounded-lg"
              >
                <Image
                  src={`https://source.unsplash.com/random/400x400/?biryani,chicken,indianfood&sig=${i}`}
                  alt="Instagram Post"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-bold">
                  View Post
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        id="contact"
        className="bg-stone-950 text-stone-500 py-12 border-t border-stone-800"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              MADINA BIRYANI
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Carrying forward the Nizam's legacy of authentic Hyderabadi Dum
              Biryani. Fresh ingredients, royal taste.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
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
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-600" /> +91 9912743366
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-600" /> Secunderabad,
                Telangana
              </li>
              <li className="text-xs mt-4">
                © 2026 Madina Chicken Biryani. All Rights Reserved.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
