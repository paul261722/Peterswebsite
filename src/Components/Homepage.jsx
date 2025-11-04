import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchActive, setTouchActive] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Elegance in Every Petal",
      subtitle: "Premium floral arrangements crafted with passion and precision"
    },
    {
      id: 2,
      title: "Same Day Delivery",
      subtitle: "Fresh flowers delivered across Kenya within hours"
    },
    {
      id: 3,
      title: "Custom Designs",
      subtitle: "Personalized arrangements tailored to your unique style"
    }
  ];

  const features = [
    {
      icon: "🌸",
      title: "Fresh Daily",
      description: "Sourced directly from local growers every morning"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Same-day delivery across major cities"
    },
    {
      icon: "🎨",
      title: "Custom Designs",
      description: "Tailored arrangements for your special moments"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Only the finest flowers selected by our experts"
    }
  ];

  const navigateToGallery = () => {
    navigate('/gallery');
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  const handleTouchStart = (element) => {
    if (isMobile) {
      setTouchActive(element);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTouchActive(null);
    }
  };

  const styles = {
    homepage: {
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      color: 'white',
      fontFamily: "'Playfair Display', 'Georgia', serif",
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease'
    },

    // Hero Section
    hero: {
      height: isMobile ? '70vh' : '80vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: isMobile ? '3rem' : '4rem'
    },
    heroContent: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '2rem 1.5rem' : '4rem 3rem',
      borderRadius: isMobile ? '15px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: isMobile ? '90%' : '800px',
      margin: '0 auto',
      width: '100%'
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '4.5rem',
      fontWeight: '700',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.5rem',
      opacity: 0.9,
      marginBottom: isMobile ? '2rem' : '3rem',
      fontWeight: '300',
      lineHeight: '1.6'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '1.2rem 2rem' : '1.5rem 3rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
      fontFamily: "'Playfair Display', serif",
      minHeight: isMobile ? '50px' : 'auto',
      minWidth: isMobile ? '200px' : 'auto',
      justifyContent: 'center'
    },
    ctaButtonHovered: {
      transform: isMobile ? 'none' : 'translateY(-3px)',
      boxShadow: isMobile ? '0 8px 25px rgba(255, 107, 107, 0.3)' : '0 12px 30px rgba(255, 107, 107, 0.4)',
      background: 'linear-gradient(135deg, #ff5252, #ff7b7b)'
    },
    ctaButtonTouched: {
      transform: 'scale(0.95)',
      background: 'linear-gradient(135deg, #ff5252, #ff7b7b)'
    },

    // Features Section
    features: {
      padding: isMobile ? '4rem 0' : '6rem 0',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: isMobile ? '0.8rem' : '1rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    sectionSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      opacity: 0.9,
      marginBottom: isMobile ? '3rem' : '4rem',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto 4rem',
      padding: isMobile ? '0 1rem' : '0'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '2rem' : '2.5rem',
      marginBottom: isMobile ? '3rem' : '4rem',
      padding: isMobile ? '0 0.5rem' : '0'
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(15px)',
      padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
      borderRadius: isMobile ? '15px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      transition: isMobile ? 'none' : 'all 0.3s ease',
      minHeight: isMobile ? '200px' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    featureCardHover: {
      transform: isMobile ? 'none' : 'translateY(-10px)',
      boxShadow: isMobile ? '0 10px 30px rgba(0, 0, 0, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 0.12)'
    },
    featureCardTouched: {
      transform: 'scale(0.98)',
      background: 'rgba(255, 255, 255, 0.12)'
    },
    featureIcon: {
      fontSize: isMobile ? '3rem' : '3.5rem',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      display: 'block',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    },
    featureTitle: {
      fontSize: isMobile ? '1.5rem' : '1.8rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: isMobile ? '0.8rem' : '1rem',
      background: 'linear-gradient(135deg, #fff, #ff8e8e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    },
    featureDescription: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: '1.6',
      fontWeight: '300'
    },

    // CTA Section
    ctaSection: {
      padding: isMobile ? '3rem 1.5rem' : '6rem 0',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '15px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: isMobile ? '1rem' : '2rem'
    },
    ctaTitle: {
      fontSize: isMobile ? '2.2rem' : '3rem',
      fontWeight: '700',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    ctaSubtitle: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      opacity: 0.9,
      marginBottom: isMobile ? '2rem' : '3rem',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto 3rem'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: isMobile ? '1rem' : '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      fontFamily: "'Playfair Display', serif",
      minHeight: isMobile ? '50px' : 'auto',
      minWidth: isMobile ? '200px' : 'auto',
      justifyContent: 'center'
    },
    secondaryButtonHover: {
      background: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      transform: isMobile ? 'none' : 'translateY(-2px)'
    },
    secondaryButtonTouched: {
      transform: 'scale(0.95)',
      background: 'rgba(255, 255, 255, 0.2)'
    },

    // Slide Indicators
    slideIndicators: {
      display: 'flex',
      gap: isMobile ? '0.8rem' : '1rem',
      justifyContent: 'center',
      marginTop: isMobile ? '1.5rem' : '2rem'
    },
    slideDot: {
      width: isMobile ? '10px' : '12px',
      height: isMobile ? '10px' : '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: isMobile ? '10px' : '12px'
    },
    slideDotActive: {
      background: '#ff6b6b',
      transform: isMobile ? 'scale(1.2)' : 'scale(1.3)'
    },

    // Flower Icons
    flowerIcon: {
      position: 'absolute',
      fontSize: isMobile ? '2rem' : '3rem',
      opacity: 0.1,
      animation: 'float 6s ease-in-out infinite',
      display: isMobile ? 'none' : 'block' // Hide on mobile for performance
    },

    // Touch overlay for mobile feedback
    touchOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.05)',
      opacity: 0,
      transition: 'opacity 0.2s ease',
      borderRadius: 'inherit',
      pointerEvents: 'none'
    },
    touchOverlayActive: {
      opacity: 1
    }
  };

  return (
    <div style={styles.homepage}>
      {/* Floating Flower Icons - Hidden on mobile */}
      {!isMobile && (
        <>
          <div style={{...styles.flowerIcon, top: '10%', left: '5%', animationDelay: '0s'}}>🌸</div>
          <div style={{...styles.flowerIcon, top: '20%', right: '8%', animationDelay: '2s'}}>💐</div>
          <div style={{...styles.flowerIcon, bottom: '30%', left: '10%', animationDelay: '4s'}}>🌹</div>
          <div style={{...styles.flowerIcon, bottom: '20%', right: '12%', animationDelay: '1s'}}>🌺</div>
          <div style={{...styles.flowerIcon, top: '40%', left: '8%', animationDelay: '3s'}}>🌻</div>
        </>
      )}
      
      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              {heroSlides[currentSlide].title}
            </h1>
            <p style={styles.heroSubtitle}>
              {heroSlides[currentSlide].subtitle}
            </p>
            <button 
              style={{
                ...styles.ctaButton,
                ...(isHovered ? styles.ctaButtonHovered : {}),
                ...(touchActive === 'cta' ? styles.ctaButtonTouched : {})
              }}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
              onTouchStart={() => handleTouchStart('cta')}
              onTouchEnd={handleTouchEnd}
              onClick={navigateToGallery}
            >
              Explore Collection
              <span style={{ fontSize: isMobile ? '1.2rem' : '1.3rem' }}>→</span>
            </button>
          </div>

          {/* Slide Indicators */}
          <div style={styles.slideIndicators}>
            {heroSlides.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.slideDot,
                  ...(currentSlide === index ? styles.slideDotActive : {})
                }}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.features}>
          <h2 style={styles.sectionTitle}>Why Choose Pson Floral</h2>
          <p style={styles.sectionSubtitle}>
            Experience the perfect blend of floral artistry and exceptional service, 
            creating unforgettable moments for every occasion.
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  ...styles.featureCard,
                  ...(isHovered && !isMobile ? styles.featureCardHover : {}),
                  ...(touchActive === `feature-${index}` ? styles.featureCardTouched : {})
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onTouchStart={() => handleTouchStart(`feature-${index}`)}
                onTouchEnd={handleTouchEnd}
              >
                {/* Touch Overlay for Mobile */}
                {isMobile && (
                  <div 
                    style={{
                      ...styles.touchOverlay,
                      ...(touchActive === `feature-${index}` ? styles.touchOverlayActive : {})
                    }}
                  />
                )}
                
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p style={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Create Unforgettable Moments</h2>
          <p style={styles.ctaSubtitle}>
            Discover our exquisite collection of floral masterpieces or collaborate 
            with us for custom designs that capture your unique vision.
          </p>
          
          <div style={styles.buttonGroup}>
            <button 
              style={{
                ...styles.ctaButton,
                ...(isHovered && !isMobile ? styles.ctaButtonHovered : {}),
                ...(touchActive === 'gallery' ? styles.ctaButtonTouched : {})
              }}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
              onTouchStart={() => handleTouchStart('gallery')}
              onTouchEnd={handleTouchEnd}
              onClick={navigateToGallery}
            >
              View Gallery
              <span style={{ fontSize: isMobile ? '1.2rem' : '1.3rem' }}>→</span>
            </button>
            <button 
              style={{
                ...styles.secondaryButton,
                ...(isHovered && !isMobile ? styles.secondaryButtonHover : {}),
                ...(touchActive === 'contact' ? styles.secondaryButtonTouched : {})
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
              onTouchStart={() => handleTouchStart('contact')}
              onTouchEnd={handleTouchEnd}
              onClick={navigateToContact}
            >
              Get In Touch
            </button>
          </div>
        </section>
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
          .homepage {
            padding: 5rem 0.8rem 1rem 0.8rem !important;
          }
          
          .hero-title {
            font-size: 2.2rem !important;
          }
          
          .hero-content {
            padding: 1.5rem 1rem !important;
          }
          
          .cta-button, .secondary-button {
            min-width: 180px !important;
            padding: 1rem 1.5rem !important;
          }
          
          .features {
            padding: 3rem 0 !important;
          }
        }

        /* Tablet optimization */
        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .hero-title {
            font-size: 3.5rem !important;
          }
        }

        /* Large screen enhancements */
        @media (min-width: 1025px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cta-button:hover, .secondary-button:hover {
            transform: none !important;
          }
          
          .feature-card:hover {
            transform: none !important;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .flower-icon {
            animation: none !important;
          }
          
          .feature-card, .cta-button, .secondary-button {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;