import Link from 'next/link';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Fish Delivery Kerala | <span className="highlight">Appoose</span> Farm Muthukulam - Premium Tilapia & Varal Fish
          </h1>
          <p className="hero-subtitle">
            Buy fresh fish online Kerala - Premium quality, chemical-free tilapia ₹280/kg & varal fish ₹320/kg with same-day delivery across Alappuzha district. 
            From our sustainable farm in Muthukulam, serving 500+ families and restaurants in Cherthala, Kuttanad, Kayamkulam & surrounding areas.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <span>Chemical-Free Farming</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span>Fresh Daily Delivery</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💪</span>
              <span>High-Protein Quality</span>
            </div>
          </div>
          <div className="hero-cta">
            <Link href="/fish" className="btn btn-large btn-primary">
              <span className="btn-text">Order Fresh Fish Now</span>
              <span className="btn-icon">🐟</span>
            </Link>
            <Link href="#pricing" className="btn btn-large btn-outline">
              <span className="btn-text">View Prices</span>
              <span className="btn-icon">💰</span>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image 
            src="/images/farm-hero.jpg" 
            alt="Fresh Tilapia and Varal Fish from Appoose Premium Farm Muthukulam Alappuzha Kerala - Chemical Free Fish Delivery" 
            width={600} 
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}