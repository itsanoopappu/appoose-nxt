import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Kerala | Buy Tilapia & Varal Fish Online Alappuzha | Appoose Farm Muthukulam",
  description: "Buy fresh fish online Kerala from Appoose farm Muthukulam. Premium tilapia ₹280/kg, varal fish ₹320/kg. Chemical-free, same-day delivery Cherthala, Alappuzha, Kuttanad. Order now!",
  keywords: ["fresh fish delivery kerala", "buy fresh fish online kerala", "tilapia fish farm alappuzha", "varal fish muthukulam", "fish delivery cherthala", "fresh fish alappuzha district", "chemical free fish kerala", "same day fish delivery"],
  authors: [{ name: "Appoose Fresh Fish Farm" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Fresh Fish Delivery Kerala | Premium Tilapia & Varal Fish - Appoose Farm",
    description: "Order fresh tilapia & varal fish online. Chemical-free farming from Muthukulam, same-day delivery across Alappuzha district Kerala.",
    type: "website",
    locale: "en_IN",
    images: ["/images/farm-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Appoose Fresh Fish Farm",
              "alternateName": "Appoose - Premium Fish Delivery Kerala",
              "description": "Premium fresh tilapia and varal fish farm with chemical-free delivery across Alappuzha district Kerala",
              "url": "https://appoose.com",
              "image": "/images/farm-hero.jpg",
              "telephone": "+91-7510940508",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI, Digital Payment",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fish Farm, Muthukulam Village",
                "addressLocality": "Alappuzha",
                "addressRegion": "Kerala",
                "postalCode": "690506",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 9.2832,
                "longitude": 76.5821
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Cherthala",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                },
                {
                  "@type": "City", 
                  "name": "Alappuzha",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                },
                {
                  "@type": "City",
                  "name": "Kuttanad",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                },
                {
                  "@type": "City",
                  "name": "Kayamkulam",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                },
                {
                  "@type": "City",
                  "name": "Mavelikkara",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                },
                {
                  "@type": "City",
                  "name": "Chengannur",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Kerala"
                  }
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fresh Fish Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Fresh Tilapia Fish",
                      "description": "Premium chemical-free tilapia from sustainable farm"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Fresh Varal Fish",
                      "description": "Local premium varal fish variety"
                    }
                  }
                ]
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "06:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://wa.me/917510940508"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do you deliver fresh fish to all areas in Kerala?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we deliver fresh tilapia and varal fish across Alappuzha district including Cherthala, Kuttanad, Kayamkulam, Mavelikkara, and Chengannur with same-day delivery to most areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of fresh fish do you deliver in Kerala?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in premium fresh tilapia fish (₹280/kg) and varal fish (₹320/kg) from our chemical-free sustainable farm in Muthukulam, Alappuzha district."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is your fish farm chemical-free in Kerala?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Yes, our Muthukulam fish farm uses 100% chemical-free, sustainable aquaculture practices. No antibiotics, no hormones, no harmful chemicals - just natural pond-raised fish."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the delivery charge for fresh fish in Kerala?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Free delivery for orders above ₹500. Same-day delivery areas: ₹30 below ₹500. Daily delivery areas: ₹50 below ₹500. Bulk orders (25kg+) always get free delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fresh is the fish delivered in Kerala?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our fish is harvested fresh every morning from our Muthukulam farm and delivered the same day. We guarantee maximum freshness with our farm-to-door delivery across Alappuzha district."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Appoose Fresh Fish Farm",
              "alternateName": "Appoose - Kerala's Premium Fish Farm",
              "description": "Kerala's leading chemical-free fish farm specializing in premium tilapia and varal fish delivery across Alappuzha district since 2018.",
              "url": "https://appoose.com",
              "logo": "https://appoose.com/images/logo.png",
              "image": "https://appoose.com/images/farm-hero.jpg",
              "telephone": "+91-7510940508",
              "email": "info@appoose.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fish Farm, Muthukulam Village",
                "addressLocality": "Alappuzha",
                "addressRegion": "Kerala", 
                "postalCode": "690506",
                "addressCountry": "IN"
              },
              "foundingDate": "2018",
              "numberOfEmployees": "25",
              "slogan": "Fresh Fish Delivery Kerala - Chemical-Free & Sustainable",
              "knowsAbout": [
                "Sustainable Aquaculture",
                "Chemical-Free Fish Farming", 
                "Fresh Fish Delivery Kerala",
                "Tilapia Fish Farming",
                "Varal Fish Varieties",
                "Kerala Backwater Ecosystem"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Kerala",
                "containsPlace": [
                  {"@type": "City", "name": "Alappuzha District"}
                ]
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Sustainable Aquaculture Practices",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Kerala Government Fisheries Department"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "324",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Rajesh Kumar - Cherthala"
                  },
                  "reviewBody": "Excellent fresh tilapia delivered same day to Cherthala. Chemical-free quality from Appoose farm Muthukulam. Best fish delivery service in Kerala!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Priya Nair - Alappuzha"
                  },
                  "reviewBody": "Regular customer for 3 years. Premium varal fish quality from Muthukulam farm. Perfect for Kerala fish curry. Highly recommend!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Restaurant Owner - Kayamkulam"
                  },
                  "reviewBody": "Supplying our restaurant for 2 years. Consistent quality, fresh delivery, reliable service. Best fish farm in Alappuzha district!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sujitha Thomas - Kuttanad"
                  },
                  "reviewBody": "Good quality fish delivered to Kuttanad. Chemical-free promise kept. Only wish delivery was faster to remote areas."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating", 
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Arun Pillai - Mavelikkara"
                  },
                  "reviewBody": "Amazing tilapia quality for our college hostel. Students love the taste. Chemical-free fish perfect for healthy meals. Great service!"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Appoose Fresh Fish Farm - Kerala",
              "alternateName": "Fresh Fish Delivery Kerala",
              "url": "https://appoose.com",
              "description": "Kerala's premium fresh fish delivery service. Chemical-free tilapia & varal fish from Muthukulam farm. Same-day delivery across Alappuzha district.",
              "inLanguage": "en-IN",
              "isPartOf": {
                "@type": "Organization",
                "name": "Appoose Fresh Fish Farm"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://appoose.com/fish?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
