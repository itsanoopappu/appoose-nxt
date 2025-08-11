'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();

  // Close menu when clicking outside or on navigation link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on escape key press and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav-menu') && !target.closest('.nav-toggle')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    } else {
      // Re-enable body scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-brand">
          <Link href="/" onClick={closeMenu}>
            <h1 className="logo">Appoose</h1>
          </Link>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><Link href="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/fish" className="nav-link" onClick={closeMenu}>Fresh Fish</Link></li>
          <li><Link href="/blog" className="nav-link" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/locations" className="nav-link" onClick={closeMenu}>Locations</Link></li>
          <li><Link href="/#contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
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
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
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