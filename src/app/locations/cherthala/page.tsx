import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Cherthala | Buy Tilapia & Varal Fish Online Cherthala Taluk Kerala - Appoose",
  description: "Fresh fish delivery Cherthala taluk - Premium tilapia ₹280/kg, varal fish ₹320/kg. Same-day delivery to Arookutty, Aroor, Arthunkal, Cherthala North & South. Order from Appoose farm Muthukulam!",
  keywords: ["fresh fish delivery cherthala", "buy fish online cherthala", "tilapia delivery aroor", "fresh fish arthunkal", "varal fish cherthala north", "fish home delivery cherthala taluk"],
};

export default function CherthalaDeliveryPage() {
  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Fresh Fish Delivery Kerala",
                "item": "https://appoose.com/"
              },
              {
                "@type": "ListItem",
                "position": 2, 
                "name": "Fish Delivery Locations",
                "item": "https://appoose.com/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Fresh Fish Delivery Cherthala Taluk",
                "item": "https://appoose.com/locations/cherthala"
              }
            ]
          })
        }}
      />
      
      {/* Location-Specific Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Cherthala - Appoose",
            "description": "Same-day fresh tilapia and varal fish delivery across Cherthala taluk - Aroor, Cherthala North, Arthunkal, Ezhupunna. Premium quality from Muthukulam farm.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress", 
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Aroor"}, 
              {"@type": "City", "name": "Cherthala North"},
              {"@type": "City", "name": "Cherthala South"},
              {"@type": "City", "name": "Arthunkal"},
              {"@type": "City", "name": "Ezhupunna"},
              {"@type": "City", "name": "Kadakkarappally"},
              {"@type": "City", "name": "Mararikulam North"},
              {"@type": "City", "name": "Pallippuram"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.6845",
                "longitude": "76.3378"
              },
              "geoRadius": "25000"
            }
          })
        }}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Fresh Fish Delivery Cherthala Taluk | Premium Tilapia & Varal Fish</h1>
          <p>Same-day fresh fish delivery across Cherthala taluk from Appoose farm Muthukulam. Serving 21+ locations with chemical-free tilapia and varal fish.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Cherthala Taluk</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Fresh Fish Available in Cherthala Taluk</h2>
          <p className="section-subtitle">Premium quality fish delivered fresh from our Muthukulam farm</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Cherthala Delivery" />
                <div className="delivery-badge">Same-Day Delivery</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">🌱 Chemical-Free</span>
                  <span className="benefit">⚡ Same-Day Cherthala</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Aroor, Cherthala North, Arthunkal, Ezhupunna</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Fresh Varal Fish Cherthala Delivery" />
                <div className="delivery-badge">Same-Day Delivery</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Variety (24g/100g)</span>
                  <span className="benefit">🌊 Local Favorite</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Cherthala South, Mararikulam, Pallippuram</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Order Card */}
          <div className="quick-order-card">
            <div className="quick-order-content">
              <h3>🚀 Quick Order for Cherthala Taluk</h3>
              <p>Get both varieties delivered fresh to your location in Cherthala taluk</p>
              <div className="quick-order-actions">
                <Link href="/fish" className="btn btn-large btn-primary">View All Fish & Order</Link>
                <a href="tel:+91-7510940508" className="btn btn-large btn-secondary">Call +91-7510940508</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Service Cards */}
      <section className="delivery-service">
        <div className="container">
          <h2>Delivery Service in Cherthala Taluk</h2>
          <div className="service-cards-grid">
            <div className="service-card">
              <div className="service-icon">🕐</div>
              <h3>Same-Day Delivery</h3>
              <p>Order before 2:00 PM</p>
              <ul>
                <li>Available across all 21+ locations</li>
                <li>Fresh morning catch delivered</li>
                <li>Perfect for lunch & dinner</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Free Delivery</h3>
              <p>Orders above ₹500</p>
              <ul>
                <li>No delivery charges</li>
                <li>Bulk orders always free</li>
                <li>Family pack savings</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Easy Ordering</h3>
              <p>Multiple ways to order</p>
              <ul>
                <li>Online fish ordering</li>
                <li>Phone call orders</li>
                <li>WhatsApp ordering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Cherthala Taluk</h2>
          <div className="locations-grid">
            <div className="location-card">
              <h3>North Cherthala Areas</h3>
              <ul>
                <li>Arookutty - Fresh fish delivery</li>
                <li>Aroor - Premium tilapia & varal</li>
                <li>Cherthala North - Same-day service</li>
                <li>Ezhupunna - Chemical-free fish</li>
                <li>Kadakkarappally - Farm-fresh delivery</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>South Cherthala Areas</h3>
              <ul>
                <li>Arthunkal - Premium fish varieties</li>
                <li>Cherthala South - Daily fresh delivery</li>
                <li>Kanjikuzhy - Sustainable fish farm</li>
                <li>Mararikulam North - Quality guarantee</li>
                <li>Pallippuram - Free delivery above ₹500</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Extended Areas</h3>
              <ul>
                <li>Kodamthuruth - Fresh tilapia delivery</li>
                <li>Kokkothamangalam - Varal fish supply</li>
                <li>Kuthiyathode - Chemical-free farming</li>
                <li>+ 8 more locations in Cherthala taluk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="local-testimonials">
        <div className="container">
          <h2>What Cherthala Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"Fresh fish delivered to Aroor within hours of ordering. Best quality tilapia in the area!"</p>
              <span className="customer">- Ramesh K., Aroor</span>
            </div>
            <div className="testimonial">
              <p>"Appoose delivers the freshest varal fish to Cherthala North. Chemical-free and tastes amazing!"</p>
              <span className="customer">- Priya M., Cherthala North</span>
            </div>
            <div className="testimonial">
              <p>"Regular customer from Arthunkal. Never disappointed with the quality and delivery time."</p>
              <span className="customer">- Suresh P., Arthunkal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="local-cta">
        <div className="container">
          <h2>Order Fresh Fish in Cherthala Taluk Today</h2>
          <p>Same-day delivery available. Order before 2:00 PM for delivery today!</p>
          <div className="cta-buttons">
            <Link href="/fish" className="btn btn-primary btn-large">Order Fresh Fish</Link>
            <a href="tel:+91-7510940508" className="btn btn-secondary btn-large">Call +91-7510940508</a>
            <a href="https://wa.me/917510940508" className="btn btn-outline btn-large">WhatsApp Order</a>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="local-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-section">
              <h3>Why Choose Appoose for Fresh Fish Delivery in Cherthala?</h3>
              <p>Located just 15 km from Cherthala taluk, our Muthukulam farm ensures the freshest possible fish delivery to your area. We've been serving Cherthala families and restaurants since 2018 with:</p>
              <ul>
                <li>Chemical-free tilapia and varal fish farming</li>
                <li>Same-day delivery across all Cherthala areas</li>
                <li>Premium quality guarantee for every order</li>
                <li>Direct farm-to-door pricing</li>
                <li>Free delivery for orders above ₹500</li>
              </ul>
            </div>
            <div className="content-section">
              <h3>Fresh Fish Varieties Available in Cherthala</h3>
              <p>We specialize in two premium fish varieties perfect for Kerala cooking:</p>
              <div className="fish-varieties">
                <div className="variety">
                  <h4>Fresh Tilapia - ₹280/kg</h4>
                  <p>High-protein (22g per 100g), chemical-free farming, perfect for grilling and frying. Popular in Aroor, Cherthala North, and Arthunkal areas.</p>
                </div>
                <div className="variety">
                  <h4>Premium Varal Fish - ₹320/kg</h4>
                  <p>Local favorite with exceptional taste (24g protein per 100g). Ideal for traditional Kerala fish curry. High demand in Ezhupunna and Mararikulam areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}