'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductItemProps {
  id: string;
  name: string;
  price: number;
  bulkPrice?: number;
  bulkMinQty?: number;
  freshness: string;
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
  freshness,
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
                "name": "Freshness Guarantee",
                "value": freshness
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
              },
              {
                "@type": "PropertyValue",
                "name": "Farm Location",
                "value": "Muthukulam, Alappuzha, Kerala"
              },
              {
                "@type": "PropertyValue",
                "name": "Harvesting",
                "value": "Fresh daily harvest from sustainable pond"
              },
              {
                "@type": "PropertyValue",
                "name": "Delivery Speed",
                "value": "Same-day delivery available"
              },
              {
                "@type": "PropertyValue",
                "name": "Feed Quality",
                "value": "Premium natural feed - No antibiotics"
              },
              {
                "@type": "PropertyValue",
                "name": "Water Source",
                "value": "Clean Kerala backwater ecosystem"
              }
            ],
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "returnFees": "https://schema.org/FreeReturn",
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnWithin": "P1D"
            },
            "category": "Fresh Fish Kerala",
            "gtin": "APPOOSE-" + id.toUpperCase() + "-Kerala",
            "mpn": "APO-" + id + "-Muthukulam"
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
              <span className="action-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}