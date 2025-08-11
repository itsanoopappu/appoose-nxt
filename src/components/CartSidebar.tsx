'use client';

import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export default function CartSidebar() {
  const { state, removeItem, updateQuantity, clearCart, closeCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleCheckout = () => {
    if (!showPhoneInput) {
      setShowPhoneInput(true);
      return;
    }
    
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    
    if (!customerName.trim()) {
      alert('Please enter your name');
      return;
    }
    
    // Generate WhatsApp message
    const orderDetails = state.items.map(item => 
      `• ${item.name} - ${item.quantity}kg @ ₹${item.price}/kg = ₹${item.total.toFixed(2)}`
    ).join('\n');
    
    const deliveryFee = state.totalPrice >= 500 ? 0 : 50;
    const finalTotal = state.totalPrice + deliveryFee;
    
    const message = `🐟 *New Order from Appoose Website*

*Customer Details:*
Name: ${customerName}
Phone: ${phoneNumber}

*Order Items:*
${orderDetails}

*Order Summary:*
Subtotal: ₹${state.totalPrice.toFixed(2)}
Delivery: ${deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}
*Total: ₹${finalTotal.toFixed(2)}*

*Payment:* Pay on Delivery (Cash/UPI)
*Delivery:* Same-day delivery available

Please confirm this order and provide delivery address.`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/917510940508?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close
    clearCart();
    closeCart();
    setShowPhoneInput(false);
    setPhoneNumber('');
    setCustomerName('');
  };
  
  const handleBackToCart = () => {
    setShowPhoneInput(false);
    setIsCheckingOut(false);
  };

  const deliveryFee = state.totalPrice >= 500 ? 0 : 50;
  const finalTotal = state.totalPrice + deliveryFee;

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={closeCart} />
      
      {/* Sidebar */}
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3>Your Order ({state.totalItems} items)</h3>
          <button className="cart-close" onClick={closeCart}>×</button>
        </div>
        
        <div className="cart-content">
          {state.items.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <h4>Your cart is empty</h4>
              <p>Add some fresh fish to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {state.items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <div className="item-price">₹{item.price}/kg</div>
                    </div>
                    
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 0.5)}
                          disabled={item.quantity <= 0.5}
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}kg</span>
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 0.5)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="item-total">₹{item.total.toFixed(2)}</div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                        title="Remove item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>₹{state.totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Delivery:</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="free-delivery">Free</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                
                {deliveryFee === 0 && state.totalPrice < 500 && (
                  <div className="delivery-note">
                    Add ₹{(500 - state.totalPrice).toFixed(2)} more for free delivery
                  </div>
                )}
                
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="cart-actions">
                {showPhoneInput ? (
                  <div className="customer-details-form">
                    <h4>Enter Your Details</h4>
                    
                    <div className="form-group">
                      <label htmlFor="customer-name">Your Name *</label>
                      <input
                        type="text"
                        id="customer-name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name"
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="customer-phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="customer-phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter 10-digit phone number"
                        className="form-input"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                    
                    <div className="form-buttons">
                      <button 
                        className="btn btn-secondary"
                        onClick={handleBackToCart}
                      >
                        ← Back
                      </button>
                      <button 
                        className="btn btn-primary btn-full"
                        onClick={handleCheckout}
                        disabled={!phoneNumber || !customerName.trim() || phoneNumber.length < 10}
                      >
                        <span className="btn-icon">💬</span>
                        <span>Send WhatsApp Order</span>
                      </button>
                    </div>
                    
                    <div className="checkout-info">
                      <p>💬 Your order details will be sent via WhatsApp</p>
                      <p>📞 We'll call to confirm delivery address</p>
                      <p>💳 Pay on delivery - Cash or UPI</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <button 
                      className="btn btn-primary btn-full"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span className="btn-icon">📞</span>
                          <span>Place Order</span>
                        </>
                      )}
                    </button>
                    
                    <div className="checkout-info">
                      <p>📞 We'll call to confirm delivery details</p>
                      <p>💳 Pay on delivery - Cash or UPI</p>
                    </div>
                    
                    <button 
                      className="clear-cart-btn"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}