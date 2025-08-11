'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-brand">
          <Link href="/">
            <h1 className="logo">Appoose</h1>
          </Link>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/fish" className="nav-link">Fresh Fish</Link></li>
          <li><Link href="/blog" className="nav-link">Blog</Link></li>
          <li><Link href="/locations" className="nav-link">Locations</Link></li>
          <li><Link href="/#contact" className="nav-link">Contact</Link></li>
        </ul>
        
        <div className="nav-cta">
          <button 
            className="cart-button"
            onClick={toggleCart}
            aria-label="Shopping cart"
          >
            <span className="cart-icon">🛒</span>
            {state.totalItems > 0 && (
              <span className="cart-badge">{state.totalItems}</span>
            )}
          </button>
          <a href="tel:+91-7510940508" className="btn btn-primary">Call Now</a>
        </div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}