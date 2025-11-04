import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Owner's contact information
  const ownerInfo = {
    name: "Pson Floral Expert",
    phone: "+254703153181",
    email: "psonflowers@gmail.com",
    address: "Nairobi, Kenya",
    businessHours: "Mon - Sat: 9:30 AM - 6:30 PM"
  };

  const openWhatsApp = () => {
    const message = "Hello! I'm interested in your flowers. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${ownerInfo.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ownerInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCall = () => {
    window.open(`tel:${ownerInfo.phone}`);
  };

  const handleEmail = () => {
    window.open(`mailto:${ownerInfo.email}?subject=Flower Inquiry from Pson Floral Expert Website`);
  };

  const styles = {
    contactPage: {
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      color: 'white',
      fontFamily: "'Playfair Display', 'Georgia', serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease',
      width: '100%'
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: isMobile ? '3rem' : '4rem',
      padding: isMobile ? '2rem 1.5rem' : '3rem',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '15px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    mainTitle: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    subtitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      opacity: 0.9,
      marginBottom: '2rem',
      fontWeight: '300',
      lineHeight: '1.6'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      alignItems: 'start'
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(15px)',
      padding: isMobile ? '2rem 1.5rem' : '3rem',
      borderRadius: isMobile ? '15px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      textAlign: 'center'
    },
    ownerImage: {
      width: isMobile ? '120px' : '150px',
      height: isMobile ? '120px' : '150px',
      borderRadius: '50%',
      margin: '0 auto 2rem',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '3rem' : '4rem',
      color: 'white',
      boxShadow: '0 15px 35px rgba(255, 107, 107, 0.4)'
    },
    ownerName: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '0.5rem',
      lineHeight: '1.1'
    },
    ownerTitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: isMobile ? '2rem' : '3rem',
      fontWeight: '500'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'center',
      gap: '1rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      padding: isMobile ? '1rem' : '1.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      textAlign: isMobile ? 'left' : 'center'
    },
    contactIcon: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      flexShrink: 0
    },
    contactText: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      color: 'white',
      fontWeight: '500'
    },
    phoneNumber: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '700',
      color: 'white',
      margin: isMobile ? '1.5rem 0' : '2rem 0',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      wordBreak: 'break-all',
      padding: isMobile ? '0 1rem' : '0'
    },
    actionButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '0.8rem' : '1rem',
      marginTop: isMobile ? '1.5rem' : '2rem'
    },
    whatsappButton: {
      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '1.2rem 1.5rem' : '1.5rem 2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
      width: '100%'
    },
    callButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '1.2rem 1.5rem' : '1.5rem 2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
      width: '100%'
    },
    emailButton: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '1.2rem 1.5rem' : '1.5rem 2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
      width: '100%'
    },
    copyButton: {
      background: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1rem' : '1.1rem',
      transition: 'all 0.3s ease',
      marginTop: isMobile ? '0.8rem' : '1rem',
      backdropFilter: 'blur(10px)',
      width: '100%'
    },
    businessInfo: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '15px',
      marginTop: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    },
    infoText: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: isMobile ? '1rem' : '1.2rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      justifyContent: isMobile ? 'flex-start' : 'center'
    },
    copiedText: {
      color: '#25D366',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      marginTop: isMobile ? '0.8rem' : '1rem',
      opacity: copied ? 1 : 0,
      transition: 'opacity 0.3s ease',
      textAlign: 'center'
    },
    backButton: {
      position: 'fixed',
      top: isMobile ? '1rem' : '2rem',
      left: isMobile ? '1rem' : '2rem',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      color: 'white',
      padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '0.9rem' : '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 10
    },
    flowerIcon: {
      position: 'absolute',
      fontSize: isMobile ? '2rem' : '3rem',
      opacity: 0.1,
      animation: 'float 6s ease-in-out infinite',
      display: isMobile ? 'none' : 'block' // Hide on mobile for better performance
    },
    businessTitle: {
      fontSize: isMobile ? '1.6rem' : '2rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      textAlign: 'center'
    },
    contactDetail: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: isMobile ? '1rem' : '1.1rem',
      marginTop: '0.5rem'
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div style={styles.contactPage}>
      {/* Back Button */}
      <button 
        style={styles.backButton}
        onClick={handleBackClick}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'translateX(-5px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        ← {isMobile ? 'Back' : 'Back to Home'}
      </button>

      {/* Floating Flower Icons - Hidden on mobile */}
      {!isMobile && (
        <>
          <div style={{...styles.flowerIcon, top: '10%', left: '5%', animationDelay: '0s'}}>🌸</div>
          <div style={{...styles.flowerIcon, top: '20%', right: '8%', animationDelay: '2s'}}>💐</div>
          <div style={{...styles.flowerIcon, bottom: '30%', left: '10%', animationDelay: '4s'}}>🌹</div>
        </>
      )}
      
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h1 style={styles.mainTitle}>Get In Touch</h1>
          <p style={styles.subtitle}>
            We'd love to hear from you! Reach out to us for flower inquiries, custom arrangements, 
            or any questions you might have about our services.
          </p>
        </div>

        <div style={styles.contentGrid}>
          {/* Contact Card */}
          <div style={styles.contactCard}>
            {/* Owner Image/Icon */}
            <div style={styles.ownerImage}>
              🌸
            </div>

            {/* Owner Information */}
            <h2 style={styles.ownerName}>{ownerInfo.name}</h2>
            <p style={styles.ownerTitle}>Flower Shop Owner & Head Florist</p>

            {/* Contact Items */}
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📱</span>
              <span style={styles.contactText}>Mobile Number</span>
            </div>

            {/* Phone Number */}
            <div 
              style={styles.phoneNumber}
              onClick={copyToClipboard}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {ownerInfo.phone}
            </div>

            {/* Copy Feedback */}
            <div style={styles.copiedText}>
              ✓ Phone number copied to clipboard!
            </div>

            {/* Action Buttons */}
            <div style={styles.actionButtons}>
              <button 
                style={styles.whatsappButton}
                onClick={openWhatsApp}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
                }}
              >
                💬 {isMobile ? 'WhatsApp' : 'Chat on WhatsApp'}
              </button>
              
              <button 
                style={styles.callButton}
                onClick={handleCall}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                }}
              >
                📞 {isMobile ? 'Call' : 'Call Directly'}
              </button>

              <button 
                style={styles.emailButton}
                onClick={handleEmail}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(255, 107, 107, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
                }}
              >
                📧 {isMobile ? 'Email' : 'Send Email'}
              </button>
            </div>

            {/* Copy Button */}
            <button 
              style={styles.copyButton}
              onClick={copyToClipboard}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              📋 {isMobile ? 'Copy Number' : 'Copy Phone Number'}
            </button>
          </div>

          {/* Business Information */}
          <div style={styles.businessInfo}>
            <h3 style={styles.businessTitle}>Business Information</h3>
            
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📧</span>
              <div>
                <div style={styles.contactText}>Email Address</div>
                <div style={styles.contactDetail}>{ownerInfo.email}</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <div>
                <div style={styles.contactText}>Location</div>
                <div style={styles.contactDetail}>{ownerInfo.address}</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>🕐</span>
              <div>
                <div style={styles.contactText}>Business Hours</div>
                <div style={styles.contactDetail}>{ownerInfo.businessHours}</div>
              </div>
            </div>

            {/* Quick Message */}
            <div style={{
              marginTop: isMobile ? '1.5rem' : '2rem',
              padding: isMobile ? '1rem' : '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                💡 <strong>Quick Tip:</strong> For fastest response, use WhatsApp! We're usually able to reply within minutes during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .contactPage {
            padding: 5rem 0.8rem 1rem !important;
          }
          .heroSection {
            padding: 1.5rem 1rem !important;
          }
          .contactCard {
            padding: 1.5rem 1rem !important;
          }
          .businessInfo {
            padding: 1.5rem 1rem !important;
          }
        }

        /* Tablet optimization */
        @media (min-width: 769px) and (max-width: 1024px) {
          .contentGrid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        /* Large screen enhancements */
        @media (min-width: 1025px) {
          .contentGrid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;