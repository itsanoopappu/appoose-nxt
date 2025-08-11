import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresh Fish Delivery Mavelikkara | Buy Tilapia & Varal Fish Online Mavelikkara Taluk Kerala - Appoose",
  description: "Fresh fish delivery Mavelikkara - Premium tilapia ₹280/kg, varal fish ₹320/kg. Same-day delivery to Mavelikkara town, Chennithala, Nooranad, Bharanikkavu. Order from Appoose farm!",
  keywords: ["fresh fish delivery mavelikkara", "buy fish online mavelikkara", "tilapia delivery chennithala", "fresh fish nooranad", "varal fish bharanikkavu", "fish home delivery mavelikkara taluk"],
};

export default function MavelikkaraDeliveryPage() {
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
                "name": "Fresh Fish Delivery Mavelikkara",
                "item": "https://appoose.com/locations/mavelikkara"
              }
            ]
          })
        }}
      />
      
      {/* Mavelikkara Educational Hub Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fresh Fish Delivery Mavelikkara - Appoose Educational Hub Fish",
            "description": "Premium fresh fish delivery to Mavelikkara educational hub and surrounding taluk. Chemical-free tilapia and varal fish from sustainable Muthukulam farm with same-day delivery to colleges and families.",
            "telephone": "+91-7510940508",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "areaServed": [
              {"@type": "City", "name": "Mavelikkara"},
              {"@type": "City", "name": "Chennithala"},
              {"@type": "City", "name": "Nooranad"},
              {"@type": "City", "name": "Bharanikkavu"},
              {"@type": "City", "name": "Kattanam"},
              {"@type": "City", "name": "Vallikunnam"},
              {"@type": "City", "name": "Chunakkara"},
              {"@type": "City", "name": "Thamarakkulam"}
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "9.2512",
                "longitude": "76.5563"
              },
              "geoRadius": "20000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mavelikkara Educational Hub Fish Supply",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Student Hostel Fish Supply Service"
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
          <h1>Fresh Fish Delivery Mavelikkara | Educational Hub Premium Fish</h1>
          <p>Same-day fresh fish delivery to Mavelikkara educational hub from Appoose farm Muthukulam. Serving colleges, hostels, and families with chemical-free fish.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>Mavelikkara</span>
          </div>
        </div>
      </section>

      {/* Fresh Fish Products - Order Cards */}
      <section className="location-products">
        <div className="container">
          <h2>Premium Fish for Mavelikkara Educational Hub</h2>
          <p className="section-subtitle">Fresh fish from our sustainable farm to Kerala's famous educational center</p>
          
          <div className="product-cards-grid">
            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/tilapia-product.jpg" alt="Fresh Tilapia Fish Mavelikkara Same Day Delivery" />
                <div className="delivery-badge">Education Hub Special</div>
              </div>
              <div className="product-info">
                <h3>Fresh Tilapia Fish</h3>
                <div className="price-display">
                  <span className="price">₹280/kg</span>
                  <span className="bulk-price">₹250/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🏋️ High Protein (22g/100g)</span>
                  <span className="benefit">🎓 Student-Friendly</span>
                  <span className="benefit">⚡ Same-Day Delivery</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Mavelikkara Town, College Area, Hostels</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#tilapia" className="btn btn-primary">Order Tilapia</Link>
                  <a href="tel:+91-7510940508" className="btn btn-outline">Quick Call</a>
                </div>
              </div>
            </div>

            <div className="location-product-card featured">
              <div className="product-image">
                <img src="/images/varal-product.jpg" alt="Premium Varal Fish Mavelikkara Educational Hub Delivery" />
                <div className="delivery-badge">Premium Quality</div>
              </div>
              <div className="product-info">
                <h3>Premium Varal Fish</h3>
                <div className="price-display">
                  <span className="price">₹320/kg</span>
                  <span className="bulk-price">₹290/kg for 5kg+</span>
                </div>
                <div className="product-benefits">
                  <span className="benefit">🥇 Premium Quality (24g/100g)</span>
                  <span className="benefit">🍛 Perfect for Hostel Meals</span>
                  <span className="benefit">🚚 Free Delivery ₹500+</span>
                </div>
                <div className="delivery-areas">
                  <p><strong>Popular in:</strong> Chennithala, Nooranad, Bharanikkavu</p>
                </div>
                <div className="card-actions">
                  <Link href="/fish#varal" className="btn btn-primary">Order Varal</Link>
                  <a href="https://wa.me/917510940508" className="btn btn-outline">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Hub Heritage Card */}
          <div className="heritage-order-card">
            <div className="heritage-content">
              <h3>🎓 Mavelikkara Educational Hub Fish</h3>
              <p>Fresh fish delivered to Kerala's educational center, supporting students, families, and educational institutions</p>
              <div className="heritage-stats">
                <span>150+ Family Customers</span>
                <span>25+ Hostel Supply</span>
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

      {/* Educational Institution Support */}
      <section className="educational-support">
        <div className="container">
          <h2>Supporting Mavelikkara Educational Community</h2>
          <div className="support-cards-grid">
            <div className="support-card">
              <div className="support-icon">🏫</div>
              <h3>College Hostel Supply</h3>
              <p>Serving 25+ hostels in Mavelikkara</p>
              <ul>
                <li>Bulk orders for mess kitchens</li>
                <li>Student-friendly pricing</li>
                <li>Regular supply contracts</li>
                <li>Quality guaranteed for large groups</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">View Bulk Options</Link>
            </div>
            <div className="support-card">
              <div className="support-icon">👨‍👩‍👧‍👦</div>
              <h3>Student Family Support</h3>
              <p>Perfect for families with students</p>
              <ul>
                <li>Affordable fresh fish options</li>
                <li>Small quantity orders (0.5kg+)</li>
                <li>Weekend delivery for families</li>
                <li>Nutritious options for growing students</li>
              </ul>
              <Link href="/fish" className="btn btn-outline">Order Family Pack</Link>
            </div>
            <div className="support-card">
              <div className="support-icon">🍽️</div>
              <h3>PG & Mess Supply</h3>
              <p>Supporting student accommodation</p>
              <ul>
                <li>Daily fresh fish supply</li>
                <li>Flexible delivery timing</li>
                <li>Competitive pricing for PGs</li>
                <li>Quality consistency for regular meals</li>
              </ul>
              <a href="tel:+91-7510940508" className="btn btn-outline">Contact for PG Supply</a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="locations-served">
        <div className="container">
          <h2>Areas We Serve in Mavelikkara Taluk</h2>
          <div className="locations-grid">
            <div className="location-card featured">
              <h3>Mavelikkara Central</h3>
              <ul>
                <li>Mavelikkara Town - Educational hub delivery</li>
                <li>College Area - Student hostel supply</li>
                <li>Medical College Zone - Premium fish</li>
                <li>Engineering College Area - Same-day service</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Historic Areas</h3>
              <ul>
                <li>Chennithala - Traditional fish varieties</li>
                <li>Bharanikkavu - Cultural center delivery</li>
                <li>Nooranad - Fresh daily supply</li>
                <li>Kattanam - Quality guarantee service</li>
              </ul>
            </div>
            <div className="location-card">
              <h3>Extended Coverage</h3>
              <ul>
                <li>Vallikunnam - Village community delivery</li>
                <li>Chunakkara - Traditional preferences</li>
                <li>Thamarakkulam - Same-day service</li>
                <li>Palamel - Free delivery above ₹500</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Hub Advantage */}
      <section className="educational-advantage">
        <div className="container">
          <h2>Serving Kerala's Educational Capital</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <h3>Why Mavelikkara Educational Community Chooses Appoose Fish</h3>
              <p>Mavelikkara, Kerala's renowned educational hub with numerous colleges and institutions, requires reliable, affordable, and fresh fish supply for its large student population and their families.</p>
              <p>Our sustainable farm in Muthukulam provides same-day delivery to 150+ families and 25+ hostels/PGs in Mavelikkara, understanding the unique needs of an educational community.</p>
              <ul>
                <li>Affordable pricing for student families</li>
                <li>Bulk supply for educational institutions</li>
                <li>Trusted by colleges and hostels since 2018</li>
                <li>Chemical-free fish for growing students</li>
              </ul>
            </div>
            <div className="heritage-stats">
              <div className="stat">
                <h4>15+</h4>
                <p>Areas Served</p>
              </div>
              <div className="stat">
                <h4>150+</h4>
                <p>Family Customers</p>
              </div>
              <div className="stat">
                <h4>25+</h4>
                <p>Hostels & PGs</p>
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
          <h2>Order Fresh Fish in Mavelikkara Today</h2>
          <p>Experience premium fish delivery to Kerala's educational capital. Same-day delivery across all areas including hostels and PGs!</p>
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