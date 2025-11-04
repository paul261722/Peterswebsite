import React, { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isNewsletterHovered, setIsNewsletterHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
      color: 'white',
      padding: isMobile ? '2rem 1rem 1rem' : isTablet ? '3rem 1.5rem 1.5rem' : '4rem 2rem 2rem',
      fontFamily: "'Inter', sans-serif"
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1.5fr',
      gap: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    section: {
      marginBottom: isMobile ? '1rem' : '1.5rem'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.1rem' : isTablet ? '1.3rem' : '1.5rem',
      marginBottom: isMobile ? '0.8rem' : '1rem',
      color: '#ffd700',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    link: {
      color: '#f8f9fa',
      textDecoration: 'none',
      display: 'block',
      marginBottom: isMobile ? '0.5rem' : '0.6rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: isMobile ? '0.8rem 0.5rem' : '0.5rem 0',
      borderRadius: '8px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      minHeight: '44px',
      display: 'flex',
      alignItems: 'center',
      border: '2px solid transparent'
    },
    linkHovered: {
      color: '#ffd700',
      transform: isMobile ? 'none' : 'translateX(8px)',
      background: 'rgba(255, 255, 255, 0.15)',
      padding: isMobile ? '0.8rem 0.8rem' : '0.5rem 1rem',
      border: isMobile ? '2px solid rgba(255, 215, 0, 0.3)' : '2px solid transparent'
    },
    socialLinks: {
      display: 'flex',
      gap: isMobile ? '0.8rem' : '1rem',
      marginTop: isMobile ? '1rem' : '1.2rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap'
    },
    socialIcon: {
      width: '44px',
      height: '44px',
      background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '1.2rem' : '1.1rem',
      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
      border: '2px solid transparent'
    },
    socialIconHovered: {
      transform: isMobile ? 'scale(1.1)' : 'translateY(-3px) scale(1.05)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)',
      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.5)',
      border: isMobile ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent'
    },
    contactInfo: {
      marginBottom: isMobile ? '0.8rem' : '0.9rem',
      color: '#f8f9fa',
      display: 'flex',
      alignItems: 'flex-start',
      gap: isMobile ? '0.6rem' : '0.8rem',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      padding: isMobile ? '0.3rem 0' : '0',
      lineHeight: '1.4'
    },
    bottomBar: {
      borderTop: '2px solid rgba(255, 255, 255, 0.2)',
      paddingTop: isMobile ? '1rem' : '1.5rem',
      textAlign: 'center',
      color: '#f8f9fa',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      lineHeight: '1.5'
    },
    newsletterInput: {
      padding: isMobile ? '0.9rem 1rem' : '1rem 1.2rem',
      borderRadius: '25px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      width: '100%',
      marginBottom: isMobile ? '0.8rem' : '1rem',
      fontSize: isMobile ? '1rem' : '1rem',
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#8b0000',
      outline: 'none',
      transition: 'all 0.3s ease',
      minHeight: '50px',
      WebkitAppearance: 'none'
    },
    newsletterBtn: {
      background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      color: '#8b0000',
      border: 'none',
      padding: isMobile ? '0.9rem 1.2rem' : '1rem 1.5rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      width: '100%',
      fontSize: isMobile ? '1rem' : '1rem',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
      minHeight: '50px',
      border: '2px solid transparent'
    },
    newsletterBtnHovered: {
      transform: isMobile ? 'scale(1.02)' : 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.6)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)',
      border: isMobile ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent'
    },
    // Map Styles
    mapSection: {
      gridColumn: isMobile ? 'span 1' : isTablet ? 'span 2' : 'span 2'
    },
    mapContainer: {
      borderRadius: isMobile ? '12px' : '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: isMobile ? '2px solid rgba(255, 255, 255, 0.2)' : '3px solid rgba(255, 255, 255, 0.3)',
      height: isMobile ? '200px' : isTablet ? '250px' : '280px',
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
      padding: isMobile ? '0.8rem' : '1.2rem',
      borderRadius: '12px',
      marginTop: isMobile ? '0.8rem' : '1rem',
      color: '#8b0000',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
    },
    locationTitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '700',
      marginBottom: isMobile ? '0.5rem' : '0.6rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif"
    },
    locationDetail: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: isMobile ? '0.5rem' : '0.6rem',
      marginBottom: isMobile ? '0.3rem' : '0.4rem',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      color: '#666',
      lineHeight: '1.4'
    },
    // Brand Section
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: isMobile ? 'center' : 'left',
      gridColumn: isMobile ? 'span 1' : isTablet ? 'span 2' : 'span 1'
    },
    brandLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.6rem' : '0.8rem',
      marginBottom: isMobile ? '1rem' : '1.2rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    brandIcon: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      background: 'linear-gradient(135deg, #ffd700, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    brandText: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffd700, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "'Playfair Display', serif"
    },
    brandDescription: {
      color: '#f8f9fa',
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '1.2rem' : '1.5rem',
      textAlign: isMobile ? 'center' : 'left'
    }
  };

  const quickLinks = ['Home', 'Flowers', 'Bouquets', 'Occasions', 'About Us'];
  const socialIcons = [
    { icon: '📘', label: 'Facebook' },
    { icon: '📷', label: 'Instagram' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '💼', label: 'LinkedIn' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSection}>
          <div>
            <div style={styles.brandLogo}>
              <div style={styles.brandIcon}>🌹</div>
              <div style={styles.brandText}>Pson Floral</div>
            </div>
            <p style={styles.brandDescription}>
              Bringing nature's beauty to Nairobi with fresh, handcrafted floral arrangements 
              for every special moment. Experience the art of floral elegance.
            </p>
          </div>
          
          <div style={styles.socialLinks}>
            {socialIcons.map((social, index) => (
              <div 
                key={index}
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === index ? styles.socialIconHovered : {})
                }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                onTouchStart={() => setHoveredSocial(index)}
                onTouchEnd={() => setHoveredSocial(null)}
                title={social.label}
                aria-label={social.label}
                role="button"
                tabIndex={0}
              >
                {social.icon}
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
              onTouchStart={() => setHoveredLink(index)}
              onTouchEnd={() => setHoveredLink(null)}
              role="button"
              tabIndex={0}
            >
              {link}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Info</h3>
          <div style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1rem' : '1.1rem', minWidth: '20px'}}>📞</span> 
            +254 703 153 181
          </div>
          <div style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1rem' : '1.1rem', minWidth: '20px'}}>✉️</span> 
            psonflowers@gmail.com
          </div>
          <div style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1rem' : '1.1rem', minWidth: '20px'}}>📍</span> 
            Nairobi, Kenya
          </div>
          <div style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1rem' : '1.1rem', minWidth: '20px'}}>🕒</span> 
            Mon-Sat: 9:30AM-6:30PM
          </div>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Newsletter</h3>
          <p style={{color: '#f8f9fa', marginBottom: '1.2rem', lineHeight: '1.5', fontSize: isMobile ? '0.85rem' : '0.9rem'}}>
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
              e.target.style.background = 'rgba(255, 255, 255, 0.95)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            aria-label="Email address for newsletter"
          />
          <button 
            style={{
              ...styles.newsletterBtn,
              ...(isNewsletterHovered ? styles.newsletterBtnHovered : {})
            }}
            onMouseEnter={() => setIsNewsletterHovered(true)}
            onMouseLeave={() => setIsNewsletterHovered(false)}
            onTouchStart={() => setIsNewsletterHovered(true)}
            onTouchEnd={() => setIsNewsletterHovered(false)}
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
              title="Pson Floral Nairobi Location"
            />
          </div>
          <div style={styles.locationInfo}>
            <h4 style={styles.locationTitle}>📍 Pson Floral Expert</h4>
            <div style={styles.locationDetail}>
              <strong>Address:</strong> Nairobi, Kenya
            </div>
            <div style={styles.locationDetail}>
              <strong>Phone:</strong> +254 703 153 181
            </div>
            <div style={styles.locationDetail}>
              <strong>Email:</strong> psonflowers@gmail.com
            </div>
            <div style={styles.locationDetail}>
              <strong>Delivery:</strong> Same-day delivery across Kenya
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={{margin: 0}}>
          &copy; {currentYear} Pson Floral Expert. All rights reserved. | 
          Made with 💐 in Nairobi
        </p>
      </div>
    </footer>
  );
};

export default Footer;