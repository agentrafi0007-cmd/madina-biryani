export default function FaqSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of Chicken Dum Biryani at Madina Biryani?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our authentic Hyderabadi Chicken Dum Biryani is priced at ₹100 per plate, offering the best value for traditional taste in Hyderabad."
        }
      },
      {
        "@type": "Question", 
        "name": "Where are Madina Biryani outlets located in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have 5 outlets across Hyderabad: ECIL (South Kamala Nagar), Moula Ali (Gayatrinagar X Road), Dammaiguda (Dammaiguda X Rd), Nacharam (Bhavani Nagar), and Ramanthapur (Mallikarjuna Nagar)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order Madina Biryani online for delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can order online through Zomato (ECIL & Nacharam outlets) and Swiggy (Dammaiguda & Nacharam outlets) for home delivery across Hyderabad."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Madina Biryani authentic Hyderabadi style?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow the traditional Kacchi Yakhni method where raw marinated chicken is layered with half-cooked basmati rice and slow-cooked (Dum) in sealed handi, preserving the Nizam's royal recipe since 1995."
        }
      },
      {
        "@type": "Question",
        "name": "What are the opening hours of Madina Biryani outlets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our outlets are open daily from 11:00 AM to 11:00 PM, serving fresh Hyderabadi Dum Biryani throughout the day."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}