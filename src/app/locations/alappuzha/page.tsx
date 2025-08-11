import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Alappuzha | Buy Tilapia & Varal Fish Online Alappuzha Taluk Kerala - Appoose",
  description: "Fresh fish delivery Alappuzha taluk - Premium tilapia ₹280/kg, varal fish ₹320/kg. Same-day delivery to Alappuzha West, Ambalappuzha, Thumpoly, Mullakkal. Order from Appoose farm Muthukulam!",
  keywords: ["fresh fish delivery alappuzha", "buy fish online alappuzha", "tilapia delivery ambalappuzha", "fresh fish mullakkal", "varal fish alappuzha west", "fish home delivery alappuzha taluk"],
};

export default function AlappuzhaDeliveryPage() {
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
                "name": "Fresh Fish Delivery Alappuzha Taluk",
                "item": "https://appoose.com/locations/alappuzha"
              }
            ]
          })
        }}
      />
      
      {/* Restaurant Supply Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Alappuzha - Appoose Backwater Fish",
            "description": "Premium backwater fish delivery across Alappuzha taluk. Supplying 50+ restaurants with fresh tilapia and varal fish from sustainable Muthukulam farm.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kerala", 
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Alappuzha West"},
              {"@type": "City", "name": "Ambalappuzha"},
              {"@type": "City", "name": "Ambalappuzha North"},
              {"@type": "City", "name": "Mullakkal"},
              {"@type": "City", "name": "Thumpoly"}, 
              {"@type": "City", "name": "Punnapra"},
              {"@type": "City", "name": "Kalavoor"},
              {"@type": "City", "name": "Karumady"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.4981",
                "longitude": "76.3388"
              },
              "geoRadius": "20000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Alappuzha Restaurant Supply",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Restaurant Bulk Fish Supply Alappuzha"
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
          <h1>Fresh Fish Delivery Alappuzha Taluk | Premium Tilapia & Varal Fish</h1>
          <p>Same-day fresh fish delivery across Alappuzha taluk from Appoose farm Muthukulam. Serving the heart of Kerala's backwater region with chemical-free fish.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Alappuzha Taluk</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Premium Backwater Fish - Alappuzha Taluk</h2>
          <p className="section-subtitle">Authentic Kerala fish varieties from our Muthukulam farm in the same backwater ecosystem</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Alappuzha Backwater Delivery" />
                <div className="delivery-badge">Backwater Fresh</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">🌊 Backwater Quality</span>
                  <span className="benefit">⚡ Same-Day Delivery</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Alappuzha West, Mullakkal, Thumpoly, Punnapra</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Premium Varal Fish Alappuzha Backwater Delivery" />
                <div className="delivery-badge">Local Favorite</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Variety (24g/100g)</span>
                  <span className="benefit">🍛 Perfect for Curry</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Ambalappuzha, Kalavoor, Karumady, Mannancherry</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Backwater Heritage Card */}
          <div className="heritage-order-card">
            <div className="heritage-content">
              <h3>🌊 Alappuzha Backwater Heritage Fish</h3>
              <p>Experience authentic Kerala backwater fish from the same ecosystem as Venice of the East</p>
              <div className="heritage-stats">
                <span>50+ Restaurant Partners</span>
                <span>200+ Regular Families</span>
                <span>6 Years in Alappuzha</span>
              </div>
              <div className="heritage-actions">
                <Link href="/fish" className="btn btn-large btn-primary">Order Authentic Fish</Link>
                <a href="tel:+91-7510940508" className="btn btn-large btn-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Supply Cards */}
      <section className="restaurant-supply">
        <div className="container">
          <h2>Restaurant & Bulk Supply - Alappuzha</h2>
          <div className="supply-cards-grid">
            <div className="supply-card">
              <div className="supply-icon">🏪</div>
              <h3>Restaurant Supply</h3>
              <p>Trusted by 50+ Alappuzha restaurants</p>
              <ul>
                <li>Daily fresh supply</li>
                <li>Bulk pricing available</li>
                <li>Quality consistency</li>
                <li>Morning delivery guarantee</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">View Bulk Options</Link>
            </div>
            <div className="supply-card">
              <div className="supply-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Packs</h3>
              <p>Perfect for Alappuzha families</p>
              <ul>
                <li>Mixed variety packs</li>
                <li>Weekly subscriptions</li>
                <li>Free home delivery</li>
                <li>Custom pack sizes</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">Order Family Pack</Link>
            </div>
            <div className="supply-card">
              <div className="supply-icon">🚚</div>
              <h3>Backwater Routes</h3>
              <p>Specialized delivery network</p>
              <ul>
                <li>Same backwater ecosystem</li>
                <li>Optimized delivery routes</li>
                <li>Temperature controlled</li>
                <li>Fresh guarantee</li>
              </ul>
              <a href="tel:+91-7510940508" className="btn btn-outline">Check Delivery</a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Alappuzha Taluk</h2>
          <div className="locations-grid">
            <div className="location-card featured">
              <h3>Central Alappuzha</h3>
              <ul>
                <li>Alappuzha West - Premium fish delivery</li>
                <li>Mullakkal - Fresh tilapia & varal</li>
                <li>Thumpoly - Chemical-free fish</li>
                <li>Punnapra - Sustainable farm delivery</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Ambalappuzha Region</h3>
              <ul>
                <li>Ambalappuzha - Traditional favorite varieties</li>
                <li>Ambalappuzha North - Same-day service</li>
                <li>Kalavoor - Quality guarantee delivery</li>
                <li>Karumady - Fresh daily supply</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Extended Coverage</h3>
              <ul>
                <li>Aryad South - Premium fish varieties</li>
                <li>Komalapuram - Free delivery above ₹500</li>
                <li>Mannancherry - Chemical-free farming</li>
                <li>Purakkad - Fresh backwater fish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Backwater Advantage */}
      <section className="backwater-advantage">
        <div className="container">
          <h2>Alappuzha's Backwater Fish Heritage</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <h3>Why Alappuzha Chooses Appoose Fish</h3>
              <p>Alappuzha, Kerala's Venice, has a rich tradition of fish cuisine. Our Muthukulam farm, located in the same backwater ecosystem, understands the local preferences for fresh fish varieties.</p>
              <p>We supply to 50+ restaurants in Alappuzha taluk and 200+ families who trust our chemical-free farming methods for their daily fish needs.</p>
              <ul>
                <li>Traditional Kerala fish varieties</li>
                <li>Perfect for authentic backwater recipes</li>
                <li>Trusted by Alappuzha restaurants since 2018</li>
                <li>Same ecosystem - maximum freshness</li>
              </ul>
            </div>
            <div className="heritage-stats">
              <div className="stat">
                <h4>15+</h4>
                <p>Areas Served in Alappuzha Taluk</p>
              </div>
              <div className="stat">
                <h4>200+</h4>
                <p>Regular Customers</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Partner Restaurants</p>
              </div>
              <div className="stat">
                <h4>6 Years</h4>
                <p>Serving Alappuzha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="local-cta">
        <div className="container">
          <h2>Order Fresh Fish in Alappuzha Taluk Today</h2>
          <p>Experience the taste of authentic backwater fish. Same-day delivery across all Alappuzha areas!</p>
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