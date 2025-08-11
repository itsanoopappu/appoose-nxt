import HomeHero from '@/components/HomeHero';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHero />
      
      {/* Products Preview */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Fresh Fish Products</h2>
          
          <div className="products-grid" id="fish-products">
            <div className="product-card">
              <Image 
                src="/images/tilapia-product.jpg" 
                alt="Fresh Tilapia Fish - Premium Quality" 
                width={300} 
                height={200}
                loading="lazy"
              />
              <h3>Fresh Tilapia</h3>
              <p className="product-freshness">Daily harvest guarantee</p>
              <p className="product-price">₹280/kg</p>
              <p className="product-description">Premium tilapia raised in clean pond water with natural feed</p>
              <Link href="/fish#tilapia" className="btn btn-product">Order Now</Link>
            </div>
            <div className="product-card">
              <Image 
                src="/images/varal-product.jpg" 
                alt="Fresh Varal Fish - Premium Quality" 
                width={300} 
                height={200}
                loading="lazy"
              />
              <h3>Fresh Varal Fish</h3>
              <p className="product-freshness">Same-day fresh delivery</p>
              <p className="product-price">₹320/kg</p>
              <p className="product-description">Locally preferred varal fish with excellent taste and nutrition</p>
              <Link href="/fish#varal" className="btn btn-product">Order Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Our Fish Farm?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🏆</div>
              <h3>Premium Quality Guarantee</h3>
              <p>Sourced fresh daily from our sustainable aquaculture ponds with premium feed</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🚫</div>
              <h3>100% Chemical-Free</h3>
              <p>No hormones, no antibiotics, no harmful chemicals - just natural pond-raised fish</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⚡</div>
              <h3>Same-Day Fresh Delivery</h3>
              <p>Order before 2 PM and get fresh fish delivered to your door the same day</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Best Price Direct from Farm</h3>
              <p>Direct from farm pricing means no middlemen markup - best prices for all quantities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Today's Fish Prices</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Retail Customers</h3>
              <div className="price-item">
                <span className="fish-name">Fresh Tilapia</span>
                <span className="price">₹280/kg</span>
              </div>
              <div className="price-item">
                <span className="fish-name">Varal Fish</span>
                <span className="price">₹320/kg</span>
              </div>
              <p className="pricing-note">Minimum order: 1kg | Free delivery above ₹500</p>
              <Link href="/fish" className="btn btn-pricing">Order Now</Link>
            </div>
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Bulk Orders (5kg+)</h3>
              <div className="price-item">
                <span className="fish-name">Fresh Tilapia</span>
                <span className="price">₹250/kg</span>
              </div>
              <div className="price-item">
                <span className="fish-name">Varal Fish</span>
                <span className="price">₹290/kg</span>
              </div>
              <p className="pricing-note">Perfect for families & small restaurants</p>
              <Link href="/fish" className="btn btn-pricing">Order Bulk</Link>
            </div>
            <div className="pricing-card">
              <h3>Large Orders (25kg+)</h3>
              <div className="price-item">
                <span className="fish-name">Fresh Tilapia</span>
                <span className="price">₹220/kg</span>
              </div>
              <div className="price-item">
                <span className="fish-name">Varal Fish</span>
                <span className="price">₹260/kg</span>
              </div>
              <p className="pricing-note">For restaurants, hotels & caterers</p>
              <a href="tel:+91-7510940508" className="btn btn-pricing">Call for Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Order Fresh Fish Today</h2>
          <div className="contact-content">
            <ContactForm className="contact-form-container" />
          </div>
        </div>
      </section>

    </>
  );
}
