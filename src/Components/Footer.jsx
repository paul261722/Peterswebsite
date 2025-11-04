import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isNewsletterHovered, setIsNewsletterHovered] = useState(false);

  // Nairobi CBD coordinates for Google Maps
  const nairobiLocation = {
    lat: -1.2921,
    lng: 36.8219
  };

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
      color: 'white',
      padding: '4rem 2rem 2rem',
      fontFamily: "'Inter', sans-serif"
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    section: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      color: '#ffd700',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    link: {
      color: '#f8f9fa',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.8rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: '0.5rem 0',
      borderRadius: '8px',
      fontSize: '1rem'
    },
    linkHovered: {
      color: '#ffd700',
      transform: 'translateX(10px)',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '0.5rem 1rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1.5rem'
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.2rem',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
    },
    socialIconHovered: {
      transform: 'translateY(-5px) scale(1.1)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)',
      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.5)'
    },
    contactInfo: {
      marginBottom: '1rem',
      color: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '1rem'
    },
    bottomBar: {
      borderTop: '2px solid rgba(255, 255, 255, 0.2)',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#f8f9fa',
      fontSize: '1rem'
    },
    newsletterInput: {
      padding: '1rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      width: '100%',
      marginBottom: '1rem',
      fontSize: '1rem',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#8b0000',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    newsletterBtn: {
      background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      color: '#8b0000',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      width: '100%',
      fontSize: '1.1rem',
      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)'
    },
    newsletterBtnHovered: {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(255, 215, 0, 0.6)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)'
    },
    // Map Styles
    mapSection: {
      gridColumn: 'span 2'
    },
    mapContainer: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
      border: '3px solid rgba(255, 255, 255, 0.3)',
      height: '300px',
      background: '#f8f9fa'
    },
    mapFrame: {
      width: '100%',
      height: '100%',
      border: 'none',
      filter: 'sepia(0.1) saturate(1.2)'
    },
    locationInfo: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '1.5rem',
      borderRadius: '15px',
      marginTop: '1rem',
      color: '#8b0000',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    },
    locationTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '0.8rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif"
    },
    locationDetail: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      color: '#666'
    },
    // Brand Section
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    brandLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    brandIcon: {
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #ffd700, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    brandText: {
      fontSize: '2.5rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffd700, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "'Playfair Display', serif"
    },
    brandDescription: {
      color: '#f8f9fa',
      lineHeight: '1.7',
      fontSize: '1.1rem',
      marginBottom: '2rem'
    }
  };

  const quickLinks = ['Home', 'Flowers', 'Bouquets', 'Occasions', 'About Us'];
  const socialIcons = ['📘', '📷', '🐦', '💼'];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSection}>
          <div>
            <div style={styles.brandLogo}>
              <div style={styles.brandIcon}>🌹</div>
              <div style={styles.brandText}>Bloomify</div>
            </div>
            <p style={styles.brandDescription}>
              Bringing nature's beauty to Nairobi with fresh, handcrafted floral arrangements 
              for every special moment. Experience the art of floral elegance.
            </p>
          </div>
          
          <div style={styles.socialLinks}>
            {socialIcons.map((icon, index) => (
              <div 
                key={index}
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === index ? styles.socialIconHovered : {})
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          {quickLinks.map((link, index) => (
            <div 
              key={link}
              style={{
                ...styles.link,
                ...(hoveredLink === index ? styles.linkHovered : {})
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Info</h3>
          <p style={styles.contactInfo}>
            <span style={{fontSize: '1.2rem'}}>📞</span> 
            +254 711 123 456
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: '1.2rem'}}>✉️</span> 
            hello@bloomify.co.ke
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: '1.2rem'}}>📍</span> 
            Nairobi CBD, Kenyatta Avenue
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: '1.2rem'}}>🕒</span> 
            Mon-Sun: 7AM-9PM
          </p>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Newsletter</h3>
          <p style={{color: '#f8f9fa', marginBottom: '1.5rem', lineHeight: '1.6'}}>
            Subscribe for exclusive floral offers, care tips, and seasonal arrangements!
          </p>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={styles.newsletterInput}
            onFocus={(e) => {
              e.target.style.background = 'white';
              e.target.style.borderColor = '#ffd700';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          />
          <button 
            style={{
              ...styles.newsletterBtn,
              ...(isNewsletterHovered ? styles.newsletterBtnHovered : {})
            }}
            onMouseEnter={() => setIsNewsletterHovered(true)}
            onMouseLeave={() => setIsNewsletterHovered(false)}
          >
            Subscribe Now 🌸
          </button>
        </div>

        {/* Map Section */}
        <div style={styles.mapSection}>
          <h3 style={styles.sectionTitle}>Visit Our Store</h3>
          <div style={styles.mapContainer}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808345237736!2d36.82115231475387!3d-1.286899635975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f3d29d%3A0xfa6cb1d991bb1d0!2sNairobi%20Central%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1641231234567!5m2!1sen!2ske`}
              style={styles.mapFrame}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bloomify Nairobi CBD Location"
            />
          </div>
          <div style={styles.locationInfo}>
            <h4 style={styles.locationTitle}>📍 Bloomify Nairobi CBD</h4>
            <div style={styles.locationDetail}>
              <strong>Address:</strong> Kenyatta Avenue, Nairobi Central Business District
            </div>
            <div style={styles.locationDetail}>
              <strong>Landmark:</strong> Next to Hilton Hotel, opposite ICEA Building
            </div>
            <div style={styles.locationDetail}>
              <strong>Parking:</strong> Available at Hilton Hotel parking lot
            </div>
            <div style={styles.locationDetail}>
              <strong>Delivery:</strong> Free same-day delivery within Nairobi CBD
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={{margin: 0}}>
          &copy; {currentYear} Bloomify Kenya. All rights reserved. | 
          Made with 💐 in Nairobi
        </p>
      </div>
    </footer>
  );
};

export default Footer;