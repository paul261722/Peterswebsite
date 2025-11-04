import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
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

  const styles = {
    homepage: {
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '8rem 2rem 4rem',
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
      height: '80vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: '4rem'
    },
    heroSlide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 1.2s ease-in-out'
    },
    heroSlideActive: {
      opacity: 1
    },
    heroContent: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '4rem 3rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '800px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '4.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      opacity: 0.9,
      marginBottom: '3rem',
      fontWeight: '300',
      lineHeight: '1.6'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      color: 'white',
      border: 'none',
      padding: '1.5rem 3rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.2rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
      fontFamily: "'Playfair Display', serif"
    },
    ctaButtonHovered: {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(255, 107, 107, 0.4)',
      background: 'linear-gradient(135deg, #ff5252, #ff7b7b)'
    },

    // Features Section
    features: {
      padding: '6rem 0',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      marginBottom: '4rem',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto 4rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2.5rem',
      marginBottom: '4rem'
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(15px)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 0.12)'
    },
    featureIcon: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      display: 'block',
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
    },
    featureTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fff, #ff8e8e)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    featureDescription: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      fontWeight: '300'
    },

    // CTA Section
    ctaSection: {
      padding: '6rem 0',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '2rem'
    },
    ctaTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    },
    ctaSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      marginBottom: '3rem',
      fontWeight: '300',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto 3rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      padding: '1.2rem 2.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      fontFamily: "'Playfair Display', serif"
    },
    secondaryButtonHover: {
      background: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      transform: 'translateY(-2px)'
    },

    // Slide Indicators
    slideIndicators: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginTop: '2rem'
    },
    slideDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    slideDotActive: {
      background: '#ff6b6b',
      transform: 'scale(1.3)'
    },

    // Flower Icons
    flowerIcon: {
      position: 'absolute',
      fontSize: '3rem',
      opacity: 0.1,
      animation: 'float 6s ease-in-out infinite'
    }
  };

  return (
    <div style={styles.homepage}>
      {/* Floating Flower Icons */}
      <div style={{...styles.flowerIcon, top: '10%', left: '5%', animationDelay: '0s'}}>🌸</div>
      <div style={{...styles.flowerIcon, top: '20%', right: '8%', animationDelay: '2s'}}>💐</div>
      <div style={{...styles.flowerIcon, bottom: '30%', left: '10%', animationDelay: '4s'}}>🌹</div>
      <div style={{...styles.flowerIcon, bottom: '20%', right: '12%', animationDelay: '1s'}}>🌺</div>
      <div style={{...styles.flowerIcon, top: '40%', left: '8%', animationDelay: '3s'}}>🌻</div>
      
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
                ...(isHovered ? styles.ctaButtonHovered : {})
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={navigateToGallery}
            >
              Explore Collection
              <span style={{ fontSize: '1.3rem' }}>→</span>
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
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
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
                ...(isHovered ? styles.ctaButtonHovered : {})
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={navigateToGallery}
            >
              View Gallery
              <span style={{ fontSize: '1.3rem' }}>→</span>
            </button>
            <button 
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
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
      `}</style>
    </div>
  );
};

export default Homepage;