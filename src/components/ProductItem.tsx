'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductItemProps {
  id: string;
  name: string;
  price: number;
  bulkPrice?: number;
  bulkMinQty?: number;
  protein: string;
  calories: number;
  fat: string;
  omega3: string;
  mainImage: string;
  thumbnails: string[];
  benefits: string[];
  rating: number;
  reviewCount: number;
  description: string;
  onAddToCart: (item: CartItem) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export default function ProductItem({
  id,
  name,
  price,
  bulkPrice,
  bulkMinQty = 5,
  protein,
  calories,
  fat,
  omega3,
  mainImage,
  thumbnails,
  benefits,
  rating,
  reviewCount,
  description,
  onAddToCart
}: ProductItemProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [quantity, setQuantity] = useState(2);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate pricing based on quantity
  const effectivePrice = bulkPrice && quantity >= bulkMinQty ? bulkPrice : price;
  const totalPrice = effectivePrice * quantity;
  const savings = bulkPrice && quantity >= bulkMinQty ? (price - bulkPrice) * quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0.5 && newQuantity <= 50) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    const cartItem: CartItem = {
      id,
      name,
      price: effectivePrice,
      quantity,
      total: totalPrice
    };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onAddToCart(cartItem);
    setIsAddingToCart(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const generateStars = (rating: number) => {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 > 0 ? '⭐' : '');
  };

  return (
    <>
      {/* Product Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": name,
            "description": description,
            "image": mainImage,
            "brand": {
              "@type": "Brand",
              "name": "Appoose Fresh Fish Farm"
            },
            "offers": {
              "@type": "Offer",
              "price": price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "LocalBusiness",
                "name": "Appoose Fresh Fish Farm",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Muthukulam, Alappuzha",
                  "addressRegion": "Kerala",
                  "postalCode": "690506",
                  "addressCountry": "IN"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": rating,
              "reviewCount": reviewCount,
              "bestRating": 5,
              "worstRating": 1
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": rating
                },
                "author": {
                  "@type": "Person",
                  "name": "Kerala Customer"
                },
                "reviewBody": `Fresh ${name.toLowerCase()} delivered from Appoose farm Muthukulam. Chemical-free and excellent quality.`
              }
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Protein Content",
                "value": protein + " per 100g"
              },
              {
                "@type": "PropertyValue", 
                "name": "Farming Method",
                "value": "Chemical-free sustainable aquaculture"
              },
              {
                "@type": "PropertyValue",
                "name": "Delivery Area",
                "value": "Alappuzha District, Kerala"
              }
            ]
          })
        }}
      />
      <div id={id} className="product-item">
      <div className="product-images">
        <div className="main-image-container">
          <Image 
            src={selectedImage} 
            alt={`${name} - Premium Quality from Farm`} 
            width={600} 
            height={400}
            className="main-image"
            priority={id === 'tilapia'}
          />
          {showSuccess && (
            <div className="success-overlay">
              <div className="success-message">
                <span className="success-icon">✅</span>
                <span>Added to Cart!</span>
              </div>
            </div>
          )}
        </div>
        <div className="thumbnail-images">
          <Image 
            src={mainImage} 
            alt={`${name} main view`} 
            width={100} 
            height={75} 
            className={`thumb ${selectedImage === mainImage ? 'active' : ''}`}
            onClick={() => setSelectedImage(mainImage)}
          />
          {thumbnails.map((thumb, index) => (
            <Image 
              key={index}
              src={thumb} 
              alt={`${name} view ${index + 1}`} 
              width={100} 
              height={75} 
              className={`thumb ${selectedImage === thumb ? 'active' : ''}`}
              onClick={() => setSelectedImage(thumb)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <h2>{name}</h2>
          <div className="product-rating">
            <span className="stars">{generateStars(rating)}</span>
            <span className="rating-count">({reviewCount} reviews)</span>
          </div>
        </div>

        <div className="product-pricing">
          <div className="price-display">
            <span className="current-price">₹{effectivePrice}/kg</span>
            {bulkPrice && quantity >= bulkMinQty && (
              <span className="original-price">₹{price}/kg</span>
            )}
          </div>
          {bulkPrice && (
            <div className="bulk-pricing-info">
              <span className="bulk-price">₹{bulkPrice}/kg for {bulkMinQty}kg+ orders</span>
              {savings > 0 && (
                <span className="savings">You save ₹{savings.toFixed(2)}!</span>
              )}
            </div>
          )}
        </div>



        <div className="order-section">
          <div className="quantity-section">
            <label className="quantity-label">Quantity (kg):</label>
            <div className="quantity-controls">
              <button 
                type="button" 
                className="quantity-btn minus"
                onClick={() => handleQuantityChange(quantity - 0.5)}
                disabled={quantity <= 0.5}
              >
                −
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => handleQuantityChange(parseFloat(e.target.value) || 0)}
                className="quantity-input"
                min="0.5" 
                max="50" 
                step="0.5"
              />
              <button 
                type="button" 
                className="quantity-btn plus"
                onClick={() => handleQuantityChange(quantity + 0.5)}
                disabled={quantity >= 50}
              >
                +
              </button>
            </div>
          </div>

          <div className="price-summary">
            <div className="price-breakdown">
              <span className="breakdown-label">Price:</span>
              <span className="breakdown-value">₹{effectivePrice} × {quantity}kg</span>
            </div>
            <div className="total-price">
              <span className="total-label">Total:</span>
              <span className="total-value">₹{totalPrice.toFixed(2)}</span>
            </div>
            {savings > 0 && (
              <div className="savings-display">
                <span className="savings-label">You Save:</span>
                <span className="savings-value">₹{savings.toFixed(2)}</span>
              </div>
            )}
          </div>

          <div className="action-buttons">
            <button 
              className="btn btn-primary btn-large add-to-cart"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              <span className="btn-icon">🛒</span>
              <span className="btn-text">
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>
            
            <button className="btn btn-secondary btn-large buy-now">
              <span className="btn-icon">⚡</span>
              <span className="btn-text">Buy Now</span>
            </button>
          </div>

          <div className="quick-actions">
            <a href="tel:+91-7510940508" className="quick-action">
              <span className="action-icon">📞</span>
              <span>Call to Order</span>
            </a>
            <a href="https://wa.me/917510940508" className="quick-action">
              <span className="action-icon">💬</span>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}