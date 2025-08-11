import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Kayamkulam | Buy Tilapia & Varal Fish Online Kayamkulam Kerala - Appoose",
  description: "Fresh fish delivery Kayamkulam - Premium tilapia ₹280/kg, varal fish ₹320/kg. Same-day delivery to Kayamkulam town, Krishnapuram, Oachira. Order from Appoose farm Muthukulam!",
  keywords: ["fresh fish delivery kayamkulam", "buy fish online kayamkulam", "tilapia delivery krishnapuram", "fresh fish oachira", "varal fish kayamkulam kerala", "fish home delivery kayamkulam"],
};

export default function KayamkulamDeliveryPage() {
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
                "name": "Fresh Fish Delivery Kayamkulam",
                "item": "https://appoose.com/locations/kayamkulam"
              }
            ]
          })
        }}
      />
      
      {/* Kayamkulam Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Kayamkulam - Appoose Premium Fish",
            "description": "Premium fresh fish delivery to Kayamkulam town and surrounding areas. Chemical-free tilapia and varal fish from sustainable Muthukulam farm with same-day delivery.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Kayamkulam"},
              {"@type": "City", "name": "Krishnapuram"},
              {"@type": "City", "name": "Oachira"},
              {"@type": "City", "name": "Karuvatta"},
              {"@type": "City", "name": "Kandalloor"},
              {"@type": "City", "name": "Pallippad"},
              {"@type": "City", "name": "Arattupuzha"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.1742",
                "longitude": "76.5000"
              },
              "geoRadius": "15000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kayamkulam Fresh Fish Supply",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Fish Delivery Kayamkulam"
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
          <h1>Fresh Fish Delivery Kayamkulam | Premium Tilapia & Varal Fish</h1>
          <p>Same-day fresh fish delivery to Kayamkulam and surrounding areas from Appoose farm Muthukulam. Chemical-free fish for your family's health.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Kayamkulam</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Premium Fish for Kayamkulam Families</h2>
          <p className="section-subtitle">Fresh fish from our sustainable farm to your doorstep in Kayamkulam</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Kayamkulam Same Day Delivery" />
                <div className="delivery-badge">Same-Day Fresh</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">💊 Chemical-Free</span>
                  <span className="benefit">⚡ Same-Day Delivery</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Kayamkulam Town, Krishnapuram, Oachira</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Premium Varal Fish Kayamkulam Kerala Delivery" />
                <div className="delivery-badge">Local Favorite</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Quality (24g/100g)</span>
                  <span className="benefit">🍛 Perfect for Curry</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Karuvatta, Kandalloor, Pallippad</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Kayamkulam Heritage Card */}
          <div className="heritage-order-card">
            <div className="heritage-content">
              <h3>🏛️ Kayamkulam Heritage Fish</h3>
              <p>Fresh fish delivered to Kayamkulam's historic town, famous for its temple and traditional Kerala culture</p>
              <div className="heritage-stats">
                <span>75+ Family Customers</span>
                <span>15+ Restaurant Partners</span>
                <span>Same-Day Delivery</span>
              </div>
              <div className="heritage-actions">
                <Link href="/fish" className="btn btn-large btn-primary">Order Fresh Fish</Link>
                <a href="tel:+91-7510940508" className="btn btn-large btn-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Support */}
      <section className="local-business">
        <div className="container">
          <h2>Supporting Kayamkulam Businesses</h2>
          <div className="business-cards-grid">
            <div className="business-card">
              <div className="business-icon">🏪</div>
              <h3>Restaurant Supply</h3>
              <p>Trusted by 15+ restaurants in Kayamkulam</p>
              <ul>
                <li>Morning fresh delivery</li>
                <li>Bulk pricing available</li>
                <li>Quality consistency guaranteed</li>
                <li>Flexible delivery timing</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">View Bulk Options</Link>
            </div>
            <div className="business-card">
              <div className="business-icon">🏠</div>
              <h3>Family Delivery</h3>
              <p>Perfect for Kayamkulam households</p>
              <ul>
                <li>Same-day fresh delivery</li>
                <li>Chemical-free guarantee</li>
                <li>Minimum 0.5kg orders</li>
                <li>Weekend delivery available</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">Order for Family</Link>
            </div>
            <div className="business-card">
              <div className="business-icon">🎊</div>
              <h3>Special Events</h3>
              <p>Bulk orders for Kayamkulam functions</p>
              <ul>
                <li>Wedding & function supply</li>
                <li>Temple feast preparations</li>
                <li>Custom bulk quantities</li>
                <li>Advance booking available</li>
              </ul>
              <a href="tel:+91-7510940508" className="btn btn-outline">Book Event Order</a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Kayamkulam</h2>
          <div className="locations-grid">
            <div className="location-card featured">
              <h3>Kayamkulam Town</h3>
              <ul>
                <li>Kayamkulam Central - Premium fish delivery</li>
                <li>Kayamkulam North - Same-day service</li>
                <li>Kayamkulam South - Chemical-free fish</li>
                <li>Temple Area - Traditional varieties</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Heritage Areas</h3>
              <ul>
                <li>Krishnapuram - Palace area delivery</li>
                <li>Oachira - Temple town special service</li>
                <li>Karuvatta - Fresh daily supply</li>
                <li>Kandalloor - Quality guarantee delivery</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Surrounding Villages</h3>
              <ul>
                <li>Pallippad - Village community delivery</li>
                <li>Arattupuzha - Traditional fish varieties</li>
                <li>Thamarakkulam - Same-day service</li>
                <li>Chunakkara - Free delivery above ₹500</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kayamkulam Advantage */}
      <section className="kayamkulam-advantage">
        <div className="container">
          <h2>Serving Historic Kayamkulam</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <h3>Why Kayamkulam Trusts Appoose Fish</h3>
              <p>Kayamkulam, with its rich cultural heritage and famous temple, has traditional preferences for the finest fish varieties. Our Muthukulam farm, located nearby, provides same-day delivery of chemical-free fish.</p>
              <p>We serve 75+ families and 15+ restaurants in Kayamkulam, understanding the local taste preferences and the importance of fresh, high-quality fish for traditional Kerala meals.</p>
              <ul>
                <li>Traditional Kerala fish varieties preferred locally</li>
                <li>Perfect for authentic Kayamkulam recipes</li>
                <li>Trusted by local restaurants since 2018</li>
                <li>Chemical-free farming for family health</li>
              </ul>
            </div>
            <div className="heritage-stats">
              <div className="stat">
                <h4>8+</h4>
                <p>Areas Served</p>
              </div>
              <div className="stat">
                <h4>75+</h4>
                <p>Family Customers</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Restaurant Partners</p>
              </div>
              <div className="stat">
                <h4>Same-Day</h4>
                <p>Fresh Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="local-cta">
        <div className="container">
          <h2>Order Fresh Fish in Kayamkulam Today</h2>
          <p>Experience the taste of premium fish delivered fresh to Kayamkulam. Same-day delivery across all areas!</p>
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