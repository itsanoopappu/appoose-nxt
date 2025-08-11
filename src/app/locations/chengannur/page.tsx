import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Chengannur | Buy Tilapia & Varal Fish Online Chengannur Taluk Kerala - Appoose",
  description: "Fresh fish delivery Chengannur - Premium tilapia ₹280/kg, varal fish ₹320/kg. Daily delivery to Chengannur town, Pandanad, Thiruvanvandoor, Mannar. Order from Appoose farm Muthukulam!",
  keywords: ["fresh fish delivery chengannur", "buy fish online chengannur", "tilapia delivery pandanad", "fresh fish thiruvanvandoor", "varal fish mannar", "fish home delivery chengannur taluk"],
};

export default function ChengannurDeliveryPage() {
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
                "name": "Fresh Fish Delivery Chengannur",
                "item": "https://appoose.com/locations/chengannur"
              }
            ]
          })
        }}
      />
      
      {/* Chengannur Heritage Town Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Chengannur - Appoose Heritage Town Fish",
            "description": "Premium fresh fish delivery to Chengannur heritage town and surrounding taluk. Chemical-free tilapia and varal fish from sustainable Muthukulam farm with daily delivery.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Chengannur"},
              {"@type": "City", "name": "Pandanad"},
              {"@type": "City", "name": "Thiruvanvandoor"},
              {"@type": "City", "name": "Mannar"},
              {"@type": "City", "name": "Cheriyanad"},
              {"@type": "City", "name": "Mulakuzha"},
              {"@type": "City", "name": "Kurattissery"},
              {"@type": "City", "name": "Venmony"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.3217",
                "longitude": "76.6147"
              },
              "geoRadius": "18000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Chengannur Heritage Town Fish Supply",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Daily Fresh Fish Delivery Chengannur"
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
          <h1>Fresh Fish Delivery Chengannur | Heritage Town Premium Fish</h1>
          <p>Daily fresh fish delivery to Chengannur heritage town from Appoose farm Muthukulam. Chemical-free fish for traditional Kerala families.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Chengannur</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Premium Fish for Chengannur Heritage Town</h2>
          <p className="section-subtitle">Fresh fish from our sustainable farm to Kerala's historic heritage town</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Chengannur Daily Delivery" />
                <div className="delivery-badge">Heritage Fresh</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">🏛️ Heritage Quality</span>
                  <span className="benefit">📅 Daily Delivery</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Chengannur Town, Pandanad, Temple Area</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Premium Varal Fish Chengannur Heritage Town Delivery" />
                <div className="delivery-badge">Traditional Choice</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Quality (24g/100g)</span>
                  <span className="benefit">🍛 Perfect for Traditional Curry</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Thiruvanvandoor, Mannar, Cheriyanad</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Town Heritage Card */}
          <div className="heritage-order-card">
            <div className="heritage-content">
              <h3>🏛️ Chengannur Heritage Town Fish</h3>
              <p>Fresh fish delivered to Chengannur's historic town, famous for its ancient temple and traditional Kerala culture</p>
              <div className="heritage-stats">
                <span>80+ Family Customers</span>
                <span>Traditional Varieties</span>
                <span>Daily Fresh Delivery</span>
              </div>
              <div className="heritage-actions">
                <Link href="/fish" className="btn btn-large btn-primary">Order Fresh Fish</Link>
                <a href="tel:+91-7510940508" className="btn btn-large btn-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Community Support */}
      <section className="heritage-community">
        <div className="container">
          <h2>Supporting Chengannur Heritage Community</h2>
          <div className="community-cards-grid">
            <div className="community-card">
              <div className="community-icon">🏛️</div>
              <h3>Temple Community</h3>
              <p>Serving traditional families near historic temple</p>
              <ul>
                <li>Traditional fish varieties preferred</li>
                <li>Quality suitable for temple offerings</li>
                <li>Festival season bulk orders</li>
                <li>Heritage cooking compatible</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">View Traditional Options</Link>
            </div>
            <div className="community-card">
              <div className="community-icon">👴</div>
              <h3>Senior Citizens</h3>
              <p>Special care for elderly families</p>
              <ul>
                <li>Easy-to-clean fish varieties</li>
                <li>Soft texture for elderly</li>
                <li>Flexible delivery timing</li>
                <li>Doorstep delivery service</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">Order for Seniors</Link>
            </div>
            <div className="community-card">
              <div className="community-icon">👨‍👩‍👧‍👦</div>
              <h3>Heritage Families</h3>
              <p>Traditional Kerala family preferences</p>
              <ul>
                <li>Authentic Kerala fish varieties</li>
                <li>Chemical-free for family health</li>
                <li>Custom family pack sizes</li>
                <li>Weekly delivery schedules</li>
              </ul>
              <a href="tel:+91-7510940508" className="btn btn-outline">Family Orders</a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Chengannur Taluk</h2>
          <div className="locations-grid">
            <div className="location-card featured">
              <h3>Chengannur Central</h3>
              <ul>
                <li>Chengannur Town - Heritage town delivery</li>
                <li>Temple Area - Traditional fish varieties</li>
                <li>Railway Station Area - Daily fresh supply</li>
                <li>Market Area - Business district service</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Historic Villages</h3>
              <ul>
                <li>Pandanad - Cultural heritage delivery</li>
                <li>Thiruvanvandoor - Ancient temple area</li>
                <li>Mannar - Traditional community service</li>
                <li>Cheriyanad - Village family delivery</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Rural Areas</h3>
              <ul>
                <li>Mulakuzha - Rural community delivery</li>
                <li>Kurattissery - Traditional preferences</li>
                <li>Venmony - Village fresh fish supply</li>
                <li>Ala - Free delivery above ₹500</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Town Advantage */}
      <section className="heritage-advantage">
        <div className="container">
          <h2>Serving Historic Chengannur</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <h3>Why Chengannur Heritage Community Trusts Appoose Fish</h3>
              <p>Chengannur, with its rich heritage and ancient temple, has deep-rooted traditions in food and cooking. Families here value authentic, fresh fish that meets their traditional standards.</p>
              <p>Our sustainable farm in Muthukulam provides daily delivery to 80+ traditional families in Chengannur, respecting the local preferences for quality fish suitable for heritage cooking styles.</p>
              <ul>
                <li>Traditional Kerala fish varieties preferred locally</li>
                <li>Quality suitable for heritage temple cooking</li>
                <li>Trusted by traditional families since 2018</li>
                <li>Chemical-free farming respects heritage values</li>
              </ul>
            </div>
            <div className="heritage-stats">
              <div className="stat">
                <h4>11+</h4>
                <p>Villages Served</p>
              </div>
              <div className="stat">
                <h4>80+</h4>
                <p>Heritage Families</p>
              </div>
              <div className="stat">
                <h4>Daily</h4>
                <p>Fresh Delivery</p>
              </div>
              <div className="stat">
                <h4>Traditional</h4>
                <p>Fish Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="local-cta">
        <div className="container">
          <h2>Order Fresh Fish in Chengannur Today</h2>
          <p>Experience traditional Kerala fish delivered fresh to Chengannur heritage town. Daily delivery across all areas!</p>
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