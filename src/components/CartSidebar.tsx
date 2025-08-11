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
                        <span className="btn-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </span>
                        <span>Send WhatsApp Order</span>
                      </button>
                    </div>
                    
                    <div className="checkout-info">
                      <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Your order details will be sent via WhatsApp
                      </p>
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