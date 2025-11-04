import React, { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isNewsletterHovered, setIsNewsletterHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
      color: 'white',
      padding: isMobile ? '3rem 1rem 1rem' : '4rem 2rem 2rem',
      fontFamily: "'Inter', sans-serif"
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      marginBottom: isMobile ? '2rem' : '3rem'
    },
    section: {
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      color: '#ffd700',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    link: {
      color: '#f8f9fa',
      textDecoration: 'none',
      display: 'block',
      marginBottom: isMobile ? '0.6rem' : '0.8rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      padding: isMobile ? '0.4rem 0' : '0.5rem 0',
      borderRadius: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      minHeight: isMobile ? '44px' : 'auto',
      display: 'flex',
      alignItems: 'center'
    },
    linkHovered: {
      color: '#ffd700',
      transform: isMobile ? 'none' : 'translateX(10px)',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem'
    },
    socialLinks: {
      display: 'flex',
      gap: isMobile ? '0.8rem' : '1rem',
      marginTop: isMobile ? '1rem' : '1.5rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    socialIcon: {
      width: isMobile ? '50px' : '45px',
      height: isMobile ? '50px' : '45px',
      background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '1.3rem' : '1.2rem',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
      minWidth: '50px'
    },
    socialIconHovered: {
      transform: isMobile ? 'scale(1.05)' : 'translateY(-5px) scale(1.1)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)',
      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.5)'
    },
    contactInfo: {
      marginBottom: isMobile ? '0.8rem' : '1rem',
      color: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.6rem' : '0.8rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      padding: isMobile ? '0.3rem 0' : '0'
    },
    bottomBar: {
      borderTop: '2px solid rgba(255, 255, 255, 0.2)',
      paddingTop: isMobile ? '1.5rem' : '2rem',
      textAlign: 'center',
      color: '#f8f9fa',
      fontSize: isMobile ? '0.9rem' : '1rem',
      lineHeight: '1.5'
    },
    newsletterInput: {
      padding: isMobile ? '0.9rem 1.2rem' : '1rem 1.5rem',
      borderRadius: '25px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      width: '100%',
      marginBottom: isMobile ? '0.8rem' : '1rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#8b0000',
      outline: 'none',
      transition: 'all 0.3s ease',
      minHeight: isMobile ? '50px' : 'auto'
    },
    newsletterBtn: {
      background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      color: '#8b0000',
      border: 'none',
      padding: isMobile ? '0.9rem 1.5rem' : '1rem 2rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      width: '100%',
      fontSize: isMobile ? '1rem' : '1.1rem',
      boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
      minHeight: isMobile ? '50px' : 'auto'
    },
    newsletterBtnHovered: {
      transform: isMobile ? 'none' : 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(255, 215, 0, 0.6)',
      background: 'linear-gradient(135deg, #ffffff, #ffd700)'
    },
    // Map Styles
    mapSection: {
      gridColumn: isMobile ? 'span 1' : 'span 2'
    },
    mapContainer: {
      borderRadius: isMobile ? '15px' : '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
      border: isMobile ? '2px solid rgba(255, 255, 255, 0.3)' : '3px solid rgba(255, 255, 255, 0.3)',
      height: isMobile ? '250px' : '300px',
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
      padding: isMobile ? '1rem' : '1.5rem',
      borderRadius: '15px',
      marginTop: isMobile ? '0.8rem' : '1rem',
      color: '#8b0000',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    },
    locationTitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      fontWeight: '700',
      marginBottom: isMobile ? '0.6rem' : '0.8rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif"
    },
    locationDetail: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: isMobile ? '0.6rem' : '0.8rem',
      marginBottom: isMobile ? '0.4rem' : '0.5rem',
      fontSize: isMobile ? '0.85rem' : '1rem',
      color: '#666',
      lineHeight: '1.4'
    },
    // Brand Section
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: isMobile ? 'center' : 'left'
    },
    brandLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.8rem' : '1rem',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    brandIcon: {
      fontSize: isMobile ? '2.5rem' : '3rem',
      background: 'linear-gradient(135deg, #ffd700, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    brandText: {
      fontSize: isMobile ? '2rem' : '2.5rem',
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
      fontSize: isMobile ? '1rem' : '1.1rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      textAlign: isMobile ? 'center' : 'left'
    },
    // Grid layout for larger screens
    desktopGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
      gap: '3rem'
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
      <div style={isMobile ? styles.container : { ...styles.container, ...styles.desktopGrid }}>
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
                title={social.label}
                aria-label={social.label}
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
              onMouseEnter={() => !isMobile && setHoveredLink(index)}
              onMouseLeave={() => !isMobile && setHoveredLink(null)}
              onClick={() => isMobile && setHoveredLink(hoveredLink === index ? null : index)}
            >
              {link}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Info</h3>
          <p style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>📞</span> 
            +254 703 153 181
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>✉️</span> 
            psonflowers@gmail.com
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>📍</span> 
            Nairobi, Kenya
          </p>
          <p style={styles.contactInfo}>
            <span style={{fontSize: isMobile ? '1.1rem' : '1.2rem'}}>🕒</span> 
            Mon-Sat: 9:30AM-6:30PM
          </p>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Newsletter</h3>
          <p style={{color: '#f8f9fa', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1rem'}}>
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
            aria-label="Email address for newsletter"
          />
          <button 
            style={{
              ...styles.newsletterBtn,
              ...(isNewsletterHovered ? styles.newsletterBtnHovered : {})
            }}
            onMouseEnter={() => !isMobile && setIsNewsletterHovered(true)}
            onMouseLeave={() => !isMobile && setIsNewsletterHovered(false)}
            onTouchStart={() => setIsNewsletterHovered(true)}
            onTouchEnd={() => setIsNewsletterHovered(false)}
          >
            Subscribe Now 🌸
          </button>
        </div>

        {/* Map Section - Full width on mobile, span 2 columns on desktop */}
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

      <style jsx>{`
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0.8rem 1rem !important;
          }
          
          .brand-text {
            font-size: 1.8rem !important;
          }
          
          .social-icon {
            width: 45px !important;
            height: 45px !important;
          }
          
          .map-container {
            height: 200px !important;
          }
        }

        /* Tablet optimization */
        @media (min-width: 769px) and (max-width: 1024px) {
          .container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .map-section {
            grid-column: span 2 !important;
          }
        }

        /* Desktop enhancements */
        @media (min-width: 1025px) {
          .container {
            grid-template-columns: 2fr 1fr 1fr 1.5fr !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .link:hover {
            transform: none !important;
          }
          
          .social-icon:hover {
            transform: scale(1.05) !important;
          }
          
          .newsletter-btn:hover {
            transform: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;