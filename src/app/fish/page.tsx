'use client';

import ProductItem from '@/components/ProductItem';
import { useCart } from '@/contexts/CartContext';

export default function FishPage() {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (item: any) => {
    addItem(item);
    openCart();
  };

  const tilapiaData = {
    id: 'tilapia',
    name: 'Fresh Tilapia - Premium Quality',
    price: 280,
    bulkPrice: 250,
    bulkMinQty: 5,
    protein: '22g',
    calories: 128,
    fat: '3.2g',
    omega3: 'High',
    mainImage: '/images/tilapia-main.jpg',
    thumbnails: [
      '/images/tilapia-thumb1.jpg',
      '/images/tilapia-thumb2.jpg',
      '/images/tilapia-thumb3.jpg'
    ],
    benefits: [
      '✅ <strong>High-protein fish perfect for bodybuilding</strong> - 22g protein per 100g',
      '✅ <strong>Premium feed tilapia</strong> - Fed only natural, high-quality feed',
      '✅ <strong>Chemical-free farming</strong> - No antibiotics or hormones',
      '✅ <strong>Fresh daily harvest</strong> - Caught fresh every morning',
      '✅ <strong>Best price guarantee</strong> - Direct from farm pricing'
    ],
    rating: 4.9,
    reviewCount: 127,
    description: 'Premium tilapia raised in clean pond water with natural feed, perfect for high-protein diets and bodybuilding.',
    onAddToCart: handleAddToCart
  };

  const varalData = {
    id: 'varal',
    name: 'Fresh Varal Fish - Local Premium Variety',
    price: 320,
    bulkPrice: 290,
    bulkMinQty: 5,
    protein: '24g',
    calories: 135,
    fat: '3.8g',
    omega3: 'Very High',
    mainImage: '/images/varal-main.jpg',
    thumbnails: [
      '/images/varal-thumb1.jpg',
      '/images/varal-thumb2.jpg',
      '/images/varal-thumb3.jpg'
    ],
    benefits: [
      '✅ <strong>Highest protein content</strong> - 24g protein per 100g',
      '✅ <strong>Local favorite variety</strong> - Preferred taste and texture',
      '✅ <strong>Excellent for traditional recipes</strong> - Perfect for curry and fry',
      '✅ <strong>Rich in Omega-3 fatty acids</strong> - Heart-healthy choice',
      '✅ <strong>Sustainable pond farming</strong> - Environmentally responsible'
    ],
    rating: 4.8,
    reviewCount: 94,
    description: 'Locally preferred varal fish with exceptional nutritional profile and distinctive taste, perfect for traditional cooking.',
    onAddToCart: handleAddToCart
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Buy Fresh Tilapia & Varal Fish Online Kerala | Appoose Farm Muthukulam</h1>
          <p>Order premium fresh fish online Kerala from our sustainable farm in Muthukulam. Chemical-free tilapia ₹280/kg, varal fish ₹320/kg with same-day delivery across Alappuzha district.</p>
          <div className="breadcrumb">
            <a href="/">Home</a> / <span>Buy Fresh Fish Kerala</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <ProductItem {...tilapiaData} />
          <ProductItem {...varalData} />
        </div>
      </section>
    </>
  );
}