import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchActive, setTouchActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const flowers = [
    {
      id: 1,
      name: "Ruby Radiance Roses Bouquet",
      price: "3800 ksh",
      image: "/Images/Assets/Assets/flower1.jpg",
      description: "Beautiful red roses arrangement perfect for romantic occasions"
    },
    {
      id: 2,
      name: "Vibrant Contract Bouquet",
      price: "3200 ksh",
      image: "/Images/Assets/Assets/flower2.jpg",
      description: "Bright and cheerful sunflowers to brighten any room"
    },
    {
      id: 3,
      name: "Lilies bouquet",
      price: "4950 ksh",
      image: "/Images/Assets/Assets/flower3.jpg",
      description: "Elegant lilies with a delicate fragrance"
    },
    {
      id: 4,
      name: "Azalea bouquet",
      price: "3000 ksh",
      image: "/Images/Assets/Assets/flower4.jpg",
      description: "Colorful mix of seasonal spring blossoms"
    },
    {
      id: 5,
      name: "Hearts desire bouquet",
      price: "4100 ksh",
      image: "/Images/Assets/Assets/flower5.jpg",
      description: "Vibrant tulips in various colors and sizes"
    },
    {
      id: 6,
      name: "Eternal love bouquet",
      price: "6700 ksh",
      image: "/Images/Assets/Assets/flower6.jpg",
      description: "Pure white roses symbolizing purity and elegance"
    },
    {
      id: 7,
      name: "sweetness and grace bouquet",
      price: "3300 ksh",
      image: "/Images/Assets/Assets/flower7.jpg",
      description: "Exotic orchids for a touch of luxury"
    },
    {
      id: 8,
      name: "Chroma collection bouquet",
      price: "2800 ksh",
      image: "/Images/Assets/Assets/flower8.jpg",
      description: "Simple yet beautiful daisies for everyday joy"
    },
    {
      id: 9,
      name: "Cash money bouquet",
      price: "4000 ksh",
      image: "/Images/Assets/Assets/flower9.jpg",
      description: "Soft pink carnations representing gratitude"
    },
    {
      id: 10,
      name: "Diy Money Bouquet",
      price: "5500 ksh",
      image: "/Images/Assets/Assets/flower10.jpg",
      description: "Fragrant lavender for calm and relaxation"
    },
    {
      id: 11,
      name: "Funeral Memory wreath",
      price: "10000 ksh",
      image: "/Images/Assets/Assets/flower11.jpg",
      description: "Lush peonies in full bloom for special occasions"
    },
    {
      id: 12,
      name: "Casket Flower Arrangement",
      price: "10000 ksh",
      image: "/Images/Assets/Assets/flower12.jpg",
      description: "Voluminous hydrangeas in beautiful pastel shades"
    },
    {
      id: 13,
      name: "Funeral Tribute Letters",
      price: "7000 ksh",
      image: "/Images/Assets/Assets/flower13.jpg",
      description: "Rustic wildflowers for a natural, garden feel"
    },
    {
      id: 14,
      name: "Funeral Medium Flower Sets",
      price: "18000 ksh",
      image: "/Images/Assets/Assets/flower14.jpg",
      description: "Stunning purple iris flowers symbolizing wisdom"
    },
    {
      id: 15,
      name: "Funeral upper sets",
      price: "25000 ksh",
      image: "/Images/Assets/Assets/flower15.jpg",
      description: "Cheerful daffodils heralding the arrival of spring"
    },
    {
      id: 16,
      name: "Funeral First Class sets",
      price: "14500 ksh",
      image: "/Images/Assets/Assets/flower16.jpg",
      description: "Delicate pink roses expressing admiration and joy"
    },
    {
      id: 17,
      name: "Crimson Confidence Bouquet",
      price: "8600 ksh",
      image: "/Images/Assets/Assets/flower17.jpg",
      description: "Warm autumn colors with seasonal foliage"
    },
    {
      id: 18,
      name: "Popppy Passion Bouquet",
      price: "2600 ksh",
      image: "/Images/Assets/Assets/flower18.jpg",
      description: "Fragrant gardenias for a sophisticated touch"
    }
  ];

  const styles = {
    gallery: {
      padding: isMobile ? '100px 1rem 2rem 1rem' : '120px 2rem 5rem 2rem',
      background: 'linear-gradient(135deg, #fdfcfb 0%, #f5f7fa 100%)',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    title: {
      textAlign: 'center',
      fontSize: isMobile ? '2.2rem' : '3rem',
      marginBottom: '1rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '700',
      lineHeight: '1.1'
    },
    subtitle: {
      textAlign: 'center',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      color: '#666',
      marginBottom: isMobile ? '3rem' : '4rem',
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      lineHeight: '1.5',
      padding: isMobile ? '0 0.5rem' : '0 2rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: isMobile ? '1.5rem' : '2.5rem',
      padding: isMobile ? '0' : '0 1rem'
    },
    flowerCard: {
      background: 'white',
      borderRadius: isMobile ? '15px' : '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.1)',
      transition: isMobile ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      position: 'relative'
    },
    flowerCardHovered: {
      transform: isMobile ? 'none' : 'translateY(-12px)',
      boxShadow: isMobile ? '0 8px 25px rgba(139, 0, 0, 0.1)' : '0 20px 40px rgba(139, 0, 0, 0.2)'
    },
    flowerCardTouched: {
      transform: 'scale(0.98)',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.15)'
    },
    flowerImageContainer: {
      overflow: 'hidden',
      height: isMobile ? '220px' : '280px',
      position: 'relative'
    },
    flowerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: isMobile ? 'none' : 'transform 0.4s ease'
    },
    flowerImageHovered: {
      transform: isMobile ? 'none' : 'scale(1.08)'
    },
    flowerInfo: {
      padding: isMobile ? '1.5rem' : '2rem',
      textAlign: 'center'
    },
    flowerName: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      marginBottom: isMobile ? '0.6rem' : '0.8rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '600',
      lineHeight: '1.3'
    },
    flowerDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#666',
      marginBottom: isMobile ? '1rem' : '1.2rem',
      lineHeight: '1.5',
      fontFamily: "'Inter', sans-serif"
    },
    flowerPrice: {
      fontSize: isMobile ? '1.4rem' : '1.6rem',
      color: '#8b0000',
      fontWeight: 'bold',
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '10px',
      display: 'inline-block'
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: isMobile ? '3rem' : '4rem',
      padding: isMobile ? '0' : '0 2rem'
    },
    decorativeLine: {
      width: isMobile ? '80px' : '100px',
      height: '3px',
      background: 'linear-gradient(90deg, #8b0000, #dc2626)',
      margin: isMobile ? '0.8rem auto' : '1rem auto',
      borderRadius: '2px'
    },
    flowerCount: {
      textAlign: 'center',
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#8b0000',
      marginBottom: isMobile ? '2rem' : '3rem',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '500',
      background: 'rgba(139, 0, 0, 0.05)',
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '20px',
      display: 'inline-block'
    },
    backButton: {
      position: 'fixed',
      top: isMobile ? '1rem' : '2rem',
      left: isMobile ? '1rem' : '2rem',
      background: 'rgba(139, 0, 0, 0.9)',
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
      zIndex: 100,
      boxShadow: '0 5px 15px rgba(139, 0, 0, 0.3)'
    },
    touchOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(139, 0, 0, 0.03)',
      opacity: 0,
      transition: 'opacity 0.2s ease',
      zIndex: 1
    },
    touchOverlayActive: {
      opacity: 1
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleTouchStart = (flowerId) => {
    if (isMobile) {
      setTouchActive(true);
      setHoveredCard(flowerId);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTouchActive(false);
      setTimeout(() => setHoveredCard(null), 150);
    }
  };

  return (
    <section style={styles.gallery} id="gallery">
      {/* Back Button */}
      <button 
        style={styles.backButton}
        onClick={handleBackClick}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(139, 0, 0, 1)';
          e.target.style.transform = 'translateX(-5px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(139, 0, 0, 0.9)';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        ← {isMobile ? 'Back' : 'Back to Home'}
      </button>

      <div style={styles.container}>
        <div style={styles.headerSection}>
          <h2 style={styles.title}>Our Flower Collection</h2>
          <div style={styles.decorativeLine}></div>
          <p style={styles.subtitle}>
            Discover our exquisite collection of handcrafted floral arrangements, 
            each telling a unique story of beauty and elegance
          </p>
          <div style={styles.flowerCount}>
            Showing {flowers.length} beautiful arrangements
          </div>
        </div>
        
        <div style={styles.grid}>
          {flowers.map(flower => (
            <div 
              key={flower.id} 
              style={{
                ...styles.flowerCard,
                ...(hoveredCard === flower.id ? styles.flowerCardHovered : {}),
                ...(touchActive && hoveredCard === flower.id ? styles.flowerCardTouched : {})
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(flower.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(flower.id)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              {/* Touch Overlay for Mobile */}
              {isMobile && (
                <div 
                  style={{
                    ...styles.touchOverlay,
                    ...(touchActive && hoveredCard === flower.id ? styles.touchOverlayActive : {})
                  }}
                />
              )}
              
              <div style={styles.flowerImageContainer}>
                <img 
                  src={flower.image} 
                  alt={flower.name}
                  style={{
                    ...styles.flowerImage,
                    ...(hoveredCard === flower.id ? styles.flowerImageHovered : {})
                  }}
                  loading="lazy"
                />
              </div>
              <div style={styles.flowerInfo}>
                <h3 style={styles.flowerName}>{flower.name}</h3>
                <p style={styles.flowerDescription}>{flower.description}</p>
                <div style={styles.flowerPrice}>{flower.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .gallery {
            padding: 90px 0.8rem 1rem 0.8rem !important;
          }
          
          .title {
            font-size: 2rem !important;
          }
          
          .flower-image-container {
            height: 200px !important;
          }
          
          .flower-info {
            padding: 1.2rem !important;
          }
          
          .flower-name {
            font-size: 1.2rem !important;
          }
        }

        /* Tablet optimization */
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }

        /* Large screen enhancements */
        @media (min-width: 1025px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .flower-card:hover {
            transform: none !important;
          }
          
          .flower-image:hover {
            transform: none !important;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .flower-card {
            transition: none !important;
          }
          
          .flower-image {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;