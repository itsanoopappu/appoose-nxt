'use client';

import { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    fishType: '',
    quantity: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        location: '',
        fishType: '',
        quantity: '2',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className={`contact-form-success ${className}`}>
        <div className="success-message">
          <h3>✅ Order Request Sent!</h3>
          <p>We'll call you within 30 minutes to confirm your order.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`contact-form-container ${className}`}>
      {/* Left Side - Contact Info and Map */}
      <div className="location-contact-section">
        {/* Contact Options */}
        <div className="contact-options">
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h4>Call for Instant Orders</h4>
              <a href="tel:+91-7510940508" className="contact-link">+91-7510940508</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <h4>WhatsApp Orders</h4>
              <a href="https://wa.me/917510940508" className="contact-link">+91-7510940508</a>
            </div>
          </div>
        </div>

        {/* Farm Location Header */}
        <div className="farm-location-header">
          <div className="location-pin">📍</div>
          <div className="location-info">
            <h3>Farm Location</h3>
            <p>Muthukulam, Alappuzha, Kerala - 690506</p>
          </div>
        </div>

        {/* Map Below */}
        <div className="location-map-section">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.3496077056066!2d76.45359077450061!3d9.212992086082748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061f4c334eb4c3%3A0x6e17a8c2b73d39df!2sKelwo%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1754902709559!5m2!1sen!2sin"
            width="100%" 
            height="300" 
            style={{border: 0}}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Appoose Fish Farm Location"
          />
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Quick Order Form</h3>
        <p className="form-description">Fill out the form below and we'll contact you within 30 minutes to confirm your order</p>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="location">Select Your Location *</label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Select Your Area --</option>
          <optgroup label="Cherthala Taluk (Same Day Delivery)">
            <option value="Arookutty">Arookutty</option>
            <option value="Aroor">Aroor</option>
            <option value="Arthunkal">Arthunkal</option>
            <option value="Cherthala North">Cherthala North</option>
            <option value="Cherthala South">Cherthala South</option>
            <option value="Ezhupunna">Ezhupunna</option>
            <option value="Kadakkarappally">Kadakkarappally</option>
            <option value="Kanjikuzhy">Kanjikuzhy</option>
            <option value="Kodamthuruth">Kodamthuruth</option>
            <option value="Kokkothamangalam">Kokkothamangalam</option>
            <option value="Kuthiyathode">Kuthiyathode</option>
            <option value="Mararikulam North">Mararikulam North</option>
            <option value="Pallippuram">Pallippuram</option>
          </optgroup>
          <optgroup label="Alappuzha Taluk (Same Day Delivery)">
            <option value="Alappuzha West">Alappuzha West</option>
            <option value="Ambalappuzha">Ambalappuzha</option>
            <option value="Ambalappuzha North">Ambalappuzha North</option>
            <option value="Aryad South">Aryad South</option>
            <option value="Thumpoly">Thumpoly</option>
            <option value="Kalavoor">Kalavoor</option>
            <option value="Karumady">Karumady</option>
            <option value="Komalapuram">Komalapuram</option>
            <option value="Mannancherry">Mannancherry</option>
            <option value="Mullakkal">Mullakkal</option>
            <option value="Punnapra">Punnapra</option>
            <option value="Purakkad">Purakkad</option>
          </optgroup>
          <optgroup label="Kuttanad Taluk (Daily Delivery)">
            <option value="Champakulam">Champakulam</option>
            <option value="Edathua">Edathua</option>
            <option value="Kainakary North">Kainakary North</option>
            <option value="Kainakary South">Kainakary South</option>
            <option value="Kavalam">Kavalam</option>
            <option value="Kunnumma">Kunnumma</option>
            <option value="Muttar">Muttar</option>
            <option value="Nedumudi">Nedumudi</option>
            <option value="Neelamperoor">Neelamperoor</option>
            <option value="Pulinkunnu">Pulinkunnu</option>
            <option value="Ramankary">Ramankary</option>
            <option value="Thakazhy">Thakazhy</option>
          </optgroup>
          <optgroup label="Karthikappally Taluk (Daily Delivery)">
            <option value="Arattupuzha">Arattupuzha</option>
            <option value="Cheppad">Cheppad</option>
            <option value="Haripad">Haripad</option>
            <option value="Kandalloor">Kandalloor</option>
            <option value="Karthikappally">Karthikappally</option>
            <option value="Karuvatta">Karuvatta</option>
            <option value="Kayamkulam">Kayamkulam</option>
            <option value="Krishnapuram">Krishnapuram</option>
            <option value="Muthukulam">Muthukulam (Farm Location)</option>
            <option value="Pallippad">Pallippad</option>
          </optgroup>
          <optgroup label="Mavelikkara Taluk (Daily Delivery)">
            <option value="Bharanikkavu">Bharanikkavu</option>
            <option value="Chennithala">Chennithala</option>
            <option value="Chunakkara">Chunakkara</option>
            <option value="Kannamangalam">Kannamangalam</option>
            <option value="Kattanam">Kattanam</option>
            <option value="Mavelikkara">Mavelikkara</option>
            <option value="Nooranad">Nooranad</option>
            <option value="Palamel">Palamel</option>
            <option value="Thamarakkulam">Thamarakkulam</option>
            <option value="Vallikunnam">Vallikunnam</option>
          </optgroup>
          <optgroup label="Chengannur Taluk (Daily Delivery)">
            <option value="Ala">Ala</option>
            <option value="Chengannur">Chengannur</option>
            <option value="Cheriyanad">Cheriyanad</option>
            <option value="Ennakkad">Ennakkad</option>
            <option value="Kurattissery">Kurattissery</option>
            <option value="Mannar">Mannar</option>
            <option value="Mulakuzha">Mulakuzha</option>
            <option value="Pandanad">Pandanad</option>
            <option value="Puliyoor">Puliyoor</option>
            <option value="Thiruvanvandoor">Thiruvanvandoor</option>
            <option value="Venmony">Venmony</option>
          </optgroup>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fishType">Select Fish Type *</label>
          <select
            id="fishType"
            name="fishType"
            value={formData.fishType}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Choose Fish Type --</option>
            <option value="tilapia">Fresh Tilapia - ₹280/kg</option>
            <option value="varal">Fresh Varal Fish - ₹320/kg</option>
            <option value="both">Both Types (Mixed) - ₹300/kg avg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity (kg) *</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            max="50"
            step="0.5"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Special Requirements (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Any specific requirements, preferred delivery time, or cooking instructions..."
          rows={3}
        />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary btn-full"
          disabled={isSubmitting}
        >
          <span className="btn-text">
            {isSubmitting ? 'Sending...' : 'Send Order Request'}
          </span>
          <span className="btn-icon">📞</span>
        </button>
        <p className="form-note">
          <strong>What happens next?</strong><br />
          ✅ We'll call you within 30 minutes to confirm<br />
          ✅ Fresh fish prepared and delivered same day<br />
          ✅ Pay on delivery - Cash or UPI accepted
        </p>
      </div>
      </form>
    </div>
  );
}