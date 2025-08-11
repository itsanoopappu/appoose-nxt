import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Appoose</h3>
            <p>Kerala's trusted source for fresh fish. Sustainable farming practices from our Muthukulam farm since 2018.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/fish">Fresh Fish</Link></li>
              <li><Link href="/fish">Bulk Orders</Link></li>
              <li><Link href="/blog">Fish Nutrition Blog</Link></li>
              <li><Link href="/locations">Delivery Areas</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 +91-7510940508</li>
              <li>📍 Muthukulam, Alappuzha, Kerala</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Appoose. All rights reserved. | Fresh fish delivery across Kerala from Muthukulam</p>
        </div>
      </div>
    </footer>
  );
}