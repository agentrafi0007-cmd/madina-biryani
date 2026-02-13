export default function BreadcrumbSchema() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://madinabiryani.in"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Menu",
        "item": "https://madinabiryani.in/#menu"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Outlets",
        "item": "https://madinabiryani.in/#outlets"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://madinabiryani.in/#contact"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}