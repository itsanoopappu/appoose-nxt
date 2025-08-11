import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Kuttanad | Buy Tilapia & Varal Fish Online Rice Bowl Kerala - Appoose Farm",
  description: "Fresh fish delivery Kuttanad - Premium tilapia ₹280/kg, varal fish ₹320/kg. Daily delivery to Champakulam, Edathua, Thakazhy, Nedumudi. Order from Appoose farm Muthukulam, below sea level fresh fish!",
  keywords: ["fresh fish delivery kuttanad", "buy fish online kuttanad", "tilapia delivery champakulam", "fresh fish edathua", "varal fish thakazhy", "fish home delivery kuttanad kerala", "below sea level fish farming"],
};

export default function KuttanadDeliveryPage() {
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
                "name": "Fresh Fish Delivery Kuttanad",
                "item": "https://appoose.com/locations/kuttanad"
              }
            ]
          })
        }}
      />
      
      {/* Kuttanad Specialized Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Kuttanad - Appoose Below Sea Level Fish",
            "description": "Specialized fresh fish delivery to Kuttanad's unique below sea level region. Premium tilapia and varal fish from sustainable Muthukulam farm to the Rice Bowl of Kerala.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Champakulam"},
              {"@type": "City", "name": "Edathua"},
              {"@type": "City", "name": "Thakazhy"},
              {"@type": "City", "name": "Nedumudi"},
              {"@type": "City", "name": "Kainakary North"},
              {"@type": "City", "name": "Kainakary South"},
              {"@type": "City", "name": "Ramankary"},
              {"@type": "City", "name": "Pulinkunnu"},
              {"@type": "City", "name": "Kavalam"},
              {"@type": "City", "name": "Neelamperoor"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.6031",
                "longitude": "76.4298"
              },
              "geoRadius": "25000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kuttanad Rice Bowl Fish Supply",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Below Sea Level Fish Delivery Service"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Fresh Fish Delivery Kuttanad | Rice Bowl of Kerala</h1>
          <p>Daily fresh fish delivery to Kuttanad's unique below sea level region from Appoose farm Muthukulam. Serving the historic Rice Bowl of Kerala with chemical-free fish.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Kuttanad</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Premium Fish for Kuttanad's Historic Region</h2>
          <p className="section-subtitle">Fresh fish from our sustainable farm to Kerala's famous below sea level region</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Kuttanad Below Sea Level Delivery" />
                <div className="delivery-badge">Rice Bowl Special</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">🌾 Rice Bowl Quality</span>
                  <span className="benefit">📅 Daily Delivery</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Champakulam, Edathua, Thakazhy, Nedumudi</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Premium Varal Fish Kuttanad Rice Bowl Delivery" />
                <div className="delivery-badge">Traditional Favorite</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Variety (24g/100g)</span>
                  <span className="benefit">🍛 Perfect for Kuttanad Curry</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Ramankary, Kainakary, Pulinkunnu, Kavalam</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Rice Bowl Heritage Card */}
          <div className="heritage-order-card">
            <div className="heritage-content">
              <h3>🌾 Kuttanad Rice Bowl Heritage Fish</h3>
              <p>Experience authentic Kerala fish from our farm to the historic below sea level region - Rice Bowl of Kerala</p>
              <div className="heritage-stats">
                <span>100+ Family Customers</span>
                <span>Below Sea Level Delivery</span>
                <span>Historic Rice Bowl Region</span>
              </div>
              <div className="heritage-actions">
                <Link href="/fish" className="btn btn-large btn-primary">Order Fresh Fish</Link>
                <a href="tel:+91-7510940508" className="btn btn-large btn-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Kuttanad Features */}
      <section className="kuttanad-features">
        <div className="container">
          <h2>Why Kuttanad Trusts Appoose Fish</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Below Sea Level Delivery</h3>
              <p>Specialized delivery to Kuttanad's unique below sea level geography, ensuring fresh fish reaches every household in this historic region.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌾</div>
              <h3>Rice Bowl Heritage</h3>
              <p>Supporting Kerala's famous Rice Bowl region with chemical-free fish, perfect for traditional Kuttanad recipes and family meals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚤</div>
              <h3>Backwater Access Routes</h3>
              <p>Optimized delivery through Kuttanad's unique canal and backwater network, ensuring maximum freshness for island communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Kuttanad</h2>
          <div className="locations-grid">
            <div className="location-card featured">
              <h3>Northern Kuttanad</h3>
              <ul>
                <li>Champakulam - Traditional rice bowl delivery</li>
                <li>Edathua - Chemical-free fish supply</li>
                <li>Kavalam - Daily fresh fish service</li>
                <li>Kunnumma - Backwater route delivery</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Central Kuttanad</h3>
              <ul>
                <li>Thakazhy - Below sea level fresh fish</li>
                <li>Nedumudi - Traditional variety specialists</li>
                <li>Pulinkunnu - Island community delivery</li>
                <li>Neelamperoor - Quality guarantee service</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Island Communities</h3>
              <ul>
                <li>Kainakary North - Specialized backwater access</li>
                <li>Kainakary South - Fresh daily supply</li>
                <li>Ramankary - Premium fish varieties</li>
                <li>Muttar - Chemical-free farming delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Bowl Advantage */}
      <section className="rice-bowl-advantage">
        <div className="container">
          <h2>Serving Kerala's Historic Rice Bowl</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <h3>Why Kuttanad Families Choose Appoose Fish</h3>
              <p>Kuttanad, the Rice Bowl of Kerala and one of the few places on earth where farming is done below sea level, has a unique food culture that demands the freshest ingredients.</p>
              <p>Our sustainable farm in Muthukulam provides chemical-free fish to 100+ families across Kuttanad's island communities, understanding the region's traditional preferences for authentic fish varieties.</p>
              <ul>
                <li>Below sea level specialized delivery routes</li>
                <li>Perfect for traditional Kuttanad rice and fish meals</li>
                <li>Trusted by island communities since 2018</li>
                <li>Backwater ecosystem - maximum freshness</li>
              </ul>
            </div>
            <div className="heritage-stats">
              <div className="stat">
                <h4>14+</h4>
                <p>Villages Served</p>
              </div>
              <div className="stat">
                <h4>100+</h4>
                <p>Family Customers</p>
              </div>
              <div className="stat">
                <h4>-2.2m</h4>
                <p>Below Sea Level Delivery</p>
              </div>
              <div className="stat">
                <h4>Daily</h4>
                <p>Fresh Supply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="local-cta">
        <div className="container">
          <h2>Order Fresh Fish in Kuttanad Today</h2>
          <p>Experience the taste of fresh fish delivered to Kerala's historic Rice Bowl. Daily delivery across all Kuttanad villages!</p>
          <div className="cta-buttons">
            <Link href="/fish" className="btn btn-primary btn-large">Order Fresh Fish</Link>
            <a href="tel:+91-7510940508" className="btn btn-secondary btn-large">Call +91-7510940508</a>
            <a href="https://wa.me/917510940508" className="btn btn-outline btn-large">WhatsApp Order</a>
          </div>
        </div>
      </section>
    </>
  );
}