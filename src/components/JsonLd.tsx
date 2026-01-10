export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Madina Biryani",
    "image": "https://madinabiryani.site/MadinaBiryaniSG.jpg",
    "@id": "https://madinabiryani.site",
    "url": "https://madinabiryani.site",
    "telephone": "+91-8374275150",
    "servesCuisine": "Hyderabadi",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "South Kamala Nagar, ECIL",
      "addressLocality": "Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500062",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.440081,
      "longitude": 78.498356
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "menu": "https://madinabiryani.site/#menu",
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": {
        "@type": "MenuSection",
        "name": "Biryani",
        "hasMenuItem": {
          "@type": "MenuItem",
          "name": "Chicken Dum Biryani",
          "description": "Authentic Hyderabadi Dum Biryani with tender chicken and aromatic basmati rice",
          "offers": {
            "@type": "Offer",
            "price": "100",
            "priceCurrency": "INR"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}