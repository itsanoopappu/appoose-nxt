import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Locations Kerala | Alappuzha District Service Areas - Appoose Farm Muthukulam", 
  description: "Fresh fish delivery Kerala across Alappuzha district - Cherthala, Kuttanad, Kayamkulam, Mavelikkara. Same-day tilapia & varal fish delivery from Appoose farm Muthukulam. Free delivery above ₹500.",
  keywords: ["fresh fish delivery kerala", "fish delivery alappuzha district", "tilapia delivery cherthala", "fresh fish kuttanad", "varal fish delivery kayamkulam", "fish home delivery mavelikkara", "same day fish delivery kerala"],
};

export default function LocationsPage() {
  return (
    <>
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service", 
            "name": "Fresh Fish Delivery Service Kerala",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Appoose Fresh Fish Farm",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Muthukulam, Alappuzha", 
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Fresh Fish Home Delivery",
            "description": "Premium fresh tilapia and varal fish delivery service across Alappuzha district Kerala with same-day delivery from our sustainable Muthukulam farm.",
            "areaServed": [
              {"@type": "City", "name": "Cherthala", "containedInPlace": {"@type": "State", "name": "Kerala"}},
              {"@type": "City", "name": "Alappuzha", "containedInPlace": {"@type": "State", "name": "Kerala"}}, 
              {"@type": "City", "name": "Kuttanad", "containedInPlace": {"@type": "State", "name": "Kerala"}},
              {"@type": "City", "name": "Kayamkulam", "containedInPlace": {"@type": "State", "name": "Kerala"}},
              {"@type": "City", "name": "Mavelikkara", "containedInPlace": {"@type": "State", "name": "Kerala"}},
              {"@type": "City", "name": "Chengannur", "containedInPlace": {"@type": "State", "name": "Kerala"}}
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "Same-Day Fresh Fish Delivery",
                "description": "Fresh tilapia and varal fish delivered same day to Cherthala, Alappuzha, Kuttanad areas", 
                "priceCurrency": "INR",
                "price": "30",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "30",
                  "priceCurrency": "INR", 
                  "referenceQuantity": {
                    "@type": "QuantitativeValue",
                    "value": "1",
                    "unitCode": "delivery"
                  }
                }
              },
              {
                "@type": "Offer",
                "name": "Free Delivery Above ₹500",
                "description": "Free home delivery for all orders above ₹500 across Kerala",
                "priceCurrency": "INR",
                "price": "0"
              }
            ]
          })
        }}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Fresh Fish Delivery Locations</h1>
          <p>We deliver fresh tilapia and varal fish across all taluks in Kerala's Alappuzha district</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span>Delivery Locations</span>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="locations-section">
        <div className="container">
          <div className="locations-intro">
            <h2>Serving 500+ Families & Restaurants Across Alappuzha District</h2>
            <p>Based in Muthukulam, we provide fresh daily delivery to over 80 locations across 6 taluks in Alappuzha district. Our delivery network ensures your fish reaches you fresh every day.</p>
          </div>

          <div className="locations-grid">
            <div className="location-card">
              <div className="location-card-header">
                <h3>Cherthala Taluk</h3>
                <span className="delivery-badge daily">Daily Delivery</span>
              </div>
              <p className="location-count">21 locations served</p>
              <ul className="location-list">
                <li>Arookutty</li>
                <li>Aroor</li>
                <li>Arthunkal</li>
                <li>Cherthala North</li>
                <li>Cherthala South</li>
                <li>Ezhupunna</li>
                <li>Kadakkarappally</li>
                <li>Kanjikuzhy</li>
                <li>Kodamthuruth</li>
                <li>Kokkothamangalam</li>
                <li>Kuthiyathode</li>
                <li>Mararikulam North</li>
                <li>Pallippuram</li>
                <li className="more">+ 8 more locations</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="location-card-header">
                <h3>Alappuzha Taluk</h3>
                <span className="delivery-badge daily">Daily Delivery</span>
              </div>
              <p className="location-count">15 locations served</p>
              <ul className="location-list">
                <li>Alappuzha West</li>
                <li>Ambalappuzha</li>
                <li>Ambalappuzha North</li>
                <li>Aryad South</li>
                <li>Thumpoly</li>
                <li>Kalavoor</li>
                <li>Karumady</li>
                <li>Komalapuram</li>
                <li>Mannancherry</li>
                <li>Mullakkal</li>
                <li>Punnapra</li>
                <li>Purakkad</li>
                <li className="more">+ 3 more locations</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="location-card-header">
                <h3>Kuttanad Taluk</h3>
                <span className="delivery-badge daily">Daily Delivery</span>
              </div>
              <p className="location-count">14 locations served</p>
              <ul className="location-list">
                <li>Champakulam</li>
                <li>Edathua</li>
                <li>Kainakary North</li>
                <li>Kainakary South</li>
                <li>Kavalam</li>
                <li>Kunnumma</li>
                <li>Muttar</li>
                <li>Nedumudi</li>
                <li>Neelamperoor</li>
                <li>Pulinkunnu</li>
                <li>Ramankary</li>
                <li>Thakazhy</li>
                <li className="more">+ 2 more locations</li>
              </ul>
            </div>

            <div className="location-card primary">
              <div className="location-card-header">
                <h3>Karthikappally Taluk</h3>
                <span className="delivery-badge same-day">Same-Day Delivery</span>
              </div>
              <p className="location-count">18 locations served</p>
              <div className="farm-location">
                <span className="farm-badge">🏠 Farm Location</span>
              </div>
              <ul className="location-list">
                <li>Arattupuzha</li>
                <li>Cheppad</li>
                <li>Haripad</li>
                <li>Kandalloor</li>
                <li>Karthikappally</li>
                <li>Karuvatta</li>
                <li>Kayamkulam</li>
                <li>Krishnapuram</li>
                <li className="farm-location">Muthukulam (Farm)</li>
                <li>Pallippad</li>
                <li className="more">+ 8 more locations</li>
              </ul>
            </div>

            <div className="location-card primary">
              <div className="location-card-header">
                <h3>Mavelikkara Taluk</h3>
                <span className="delivery-badge same-day">Same-Day Delivery</span>
              </div>
              <p className="location-count">15 locations served</p>
              <ul className="location-list">
                <li>Bharanikkavu</li>
                <li>Chennithala</li>
                <li>Chunakkara</li>
                <li>Kannamangalam</li>
                <li>Kattanam</li>
                <li>Mavelikkara</li>
                <li>Nooranad</li>
                <li>Palamel</li>
                <li>Thamarakkulam</li>
                <li>Vallikunnam</li>
                <li className="more">+ 5 more locations</li>
              </ul>
            </div>

            <div className="location-card">
              <div className="location-card-header">
                <h3>Chengannur Taluk</h3>
                <span className="delivery-badge daily">Daily Delivery</span>
              </div>
              <p className="location-count">11 locations served</p>
              <ul className="location-list">
                <li>Ala</li>
                <li>Chengannur</li>
                <li>Cheriyanad</li>
                <li>Ennakkad</li>
                <li>Kurattissery</li>
                <li>Mannar</li>
                <li>Mulakuzha</li>
                <li>Pandanad</li>
                <li>Puliyoor</li>
                <li>Thiruvanvandoor</li>
                <li>Venmony</li>
              </ul>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info-section">
            <h2>Delivery Information</h2>
            <div className="delivery-options">
              <div className="delivery-option">
                <div className="delivery-icon">🚚</div>
                <h3>Same-Day Delivery</h3>
                <p>Available in Karthikappally and Mavelikkara taluks</p>
                <ul>
                  <li>Order before 2:00 PM</li>
                  <li>Free delivery on orders above ₹500</li>
                  <li>Delivery charge: ₹30 for orders below ₹500</li>
                </ul>
              </div>
              <div className="delivery-option">
                <div className="delivery-icon">📅</div>
                <h3>Daily Delivery Service</h3>
                <p>Available in Cherthala, Alappuzha, Kuttanad, and Chengannur taluks</p>
                <ul>
                  <li>Next-day delivery guaranteed</li>
                  <li>Free delivery on orders above ₹500</li>
                  <li>Delivery charge: ₹50 for orders below ₹500</li>
                </ul>
              </div>
              <div className="delivery-option">
                <div className="delivery-icon">🏪</div>
                <h3>Bulk Orders (25kg+)</h3>
                <p>Special delivery for restaurants and bulk customers</p>
                <ul>
                  <li>Free delivery for all bulk orders</li>
                  <li>Flexible delivery timing</li>
                  <li>Direct farm-to-business pricing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Access to Location Pages */}
          <div className="location-quick-access">
            <h2>Detailed Delivery Information by Area</h2>
            <p>Click on your area for specific delivery details, pricing, and order options</p>
            <div className="quick-access-cards">
              <Link href="/locations/cherthala" className="quick-access-card">
                <div className="access-icon">🚚</div>
                <h3>Cherthala Taluk</h3>
                <p>Same-day delivery to 21+ locations</p>
                <div className="access-highlights">
                  <span>Aroor • Cherthala • Arthunkal</span>
                </div>
                <div className="access-button">View Details & Order →</div>
              </Link>
              
              <Link href="/locations/alappuzha" className="quick-access-card featured">
                <div className="access-icon">🌊</div>
                <h3>Alappuzha Taluk</h3>
                <p>Backwater heritage fish delivery</p>
                <div className="access-highlights">
                  <span>Alappuzha West • Ambalappuzha • Mullakkal</span>
                </div>
                <div className="access-button">View Details & Order →</div>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="location-cta">
            <h2>Don't See Your Location?</h2>
            <p>We're expanding our delivery network. Contact us to check if we can deliver to your area.</p>
            <div className="cta-buttons">
              <a href="tel:+91-7510940508" className="btn btn-primary btn-large">📞 Call Now</a>
              <a href="https://wa.me/917510940508" className="btn btn-secondary btn-large">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <Link href="/fish" className="btn btn-outline btn-large">🐟 Order Fish</Link>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Find Our Farm Location</h2>
            <p>Visit us at our sustainable fish farm in Muthukulam, Alappuzha district</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.3496077056066!2d76.45359077450061!3d9.212992086082748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061f4c334eb4c3%3A0x6e17a8c2b73d39df!2sKelwo%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1754902709559!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Appoose Fish Farm Location - Muthukulam, Alappuzha"
              />
            </div>
            <div className="map-info">
              <div className="location-details">
                <h4>📍 Farm Address</h4>
                <p>Muthukulam, Alappuzha District<br />Kerala - 690506, India</p>
              </div>
              <div className="visit-info">
                <h4>🕒 Visit Timings</h4>
                <p>Monday - Saturday: 6:00 AM - 7:00 PM<br />Sunday: 8:00 AM - 5:00 PM</p>
              </div>
              <div className="contact-info">
                <h4>📞 Contact Before Visit</h4>
                <p>Call us before visiting to ensure availability<br />+91-7510940508</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}