import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  const flowerSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvc2VzJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Premium Roses",
      variety: "Red Velvet & White Pearl",
      season: "Year-round",
      fragrance: "Rich & Romantic",
      careTips: "Change water daily, trim stems at angle",
      symbolism: "Love, passion, and beauty",
      priceRange: "$$$",
      color: "#e74c3c"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1597848212624-e6d4bd66ecf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Lily Collection",
      variety: "Stargazer & Casablanca",
      season: "Summer Special",
      fragrance: "Sweet & Intense",
      careTips: "Remove pollen to prevent staining",
      symbolism: "Purity and renewal",
      priceRange: "$$",
      color: "#9b59b6"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Spring Tulips",
      variety: "Dutch Master & Parrot",
      season: "Spring Exclusive",
      fragrance: "Light & Fresh",
      careTips: "Keep in cool area, away from direct sun",
      symbolism: "Perfect love and cheerfulness",
      priceRange: "$",
      color: "#e84393"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1572853139718-3a6c0b393e22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Orchid Elegance",
      variety: "Phalaenopsis & Dendrobium",
      season: "Tropical Year-round",
      fragrance: "Subtle & Exotic",
      careTips: "Mist lightly, indirect light only",
      symbolism: "Luxury, strength, and beauty",
      priceRange: "$$$",
      color: "#3498db"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cad0c8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Sunflower Bliss",
      variety: "Giant Russian & Teddy Bear",
      season: "Summer-Fall",
      fragrance: "Warm & Earthy",
      careTips: "Fresh water daily, sturdy support needed",
      symbolism: "Adoration and loyalty",
      priceRange: "$$",
      color: "#f1c40f"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flowerSlides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentSlide, isAutoPlaying, flowerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flowerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flowerSlides.length) % flowerSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentFlower = flowerSlides[currentSlide] || flowerSlides[0];

  const styles = {
    carousel: {
      position: 'relative',
      width: '100%',
      height: '85vh',
      minHeight: '600px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
    },
    slideContainer: {
      display: 'flex',
      width: `${flowerSlides.length * 100}%`,
      height: '100%',
      transform: `translateX(-${currentSlide * (100 / flowerSlides.length)}%)`,
      transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    slide: {
      width: `${100 / flowerSlides.length}%`,
      height: '100%',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '500px',
      color: 'white',
      textAlign: 'left',
      padding: '3rem',
      marginLeft: '10%',
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
      background: `linear-gradient(135deg, ${currentFlower.color}, #fff)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    variety: {
      fontSize: '1.4rem',
      marginBottom: '2rem',
      opacity: 0.9,
      fontStyle: 'italic',
      textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    infoItem: {
      marginBottom: '1rem'
    },
    infoLabel: {
      fontSize: '0.9rem',
      opacity: 0.7,
      marginBottom: '0.3rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    infoValue: {
      fontSize: '1.1rem',
      fontWeight: '500',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
    },
    priceTag: {
      display: 'inline-block',
      background: currentFlower.color,
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      boxShadow: `0 4px 15px ${currentFlower.color}80`
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.9)',
      border: 'none',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      color: '#2c3e50',
      zIndex: 3,
      boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease'
    },
    prevButton: {
      left: '2rem'
    },
    nextButton: {
      right: '2rem'
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '1rem',
      zIndex: 3
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    activeDot: {
      background: currentFlower.color,
      transform: 'scale(1.3)',
      boxShadow: `0 0 15px ${currentFlower.color}`
    },
    slideCounter: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'rgba(255,255,255,0.9)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#2c3e50',
      zIndex: 3
    },
    flowerIcon: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
      fontSize: '3rem',
      opacity: 0.7,
      zIndex: 2
    }
  };

  return (
    <section style={styles.carousel}>
      {/* Slide Counter */}
      <div style={styles.slideCounter}>
        {currentSlide + 1} / {flowerSlides.length}
      </div>

      {/* Slides Container */}
      <div style={styles.slideContainer}>
        {flowerSlides.map((flower, index) => (
          <div
            key={flower.id}
            style={{
              ...styles.slide,
              backgroundImage: `url(${flower.image})`
            }}
          >
            <div style={styles.overlay}></div>
            
            {/* Flower Icon */}
            <div style={styles.flowerIcon}>🌸</div>
            
            {/* Content */}
            <div style={styles.content}>
              <h2 style={styles.title}>{flower.title}</h2>
              <p style={styles.variety}>{flower.variety}</p>
              
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <div style={styles.infoLabel}>Season</div>
                  <div style={styles.infoValue}>{flower.season}</div>
                </div>
                
                <div style={styles.infoItem}>
                  <div style={styles.infoLabel}>Fragrance</div>
                  <div style={styles.infoValue}>{flower.fragrance}</div>
                </div>
                
                <div style={styles.infoItem}>
                  <div style={styles.infoLabel}>Care</div>
                  <div style={styles.infoValue}>{flower.careTips}</div>
                </div>
                
                <div style={styles.infoItem}>
                  <div style={styles.infoLabel}>Symbolism</div>
                  <div style={styles.infoValue}>{flower.symbolism}</div>
                </div>
              </div>
              
              <div style={styles.priceTag}>
                {flower.priceRange}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        style={{
          ...styles.navButton,
          ...styles.prevButton
        }}
        onClick={prevSlide}
        aria-label="Previous flower"
      >
        ‹
      </button>
      
      <button
        style={{
          ...styles.navButton,
          ...styles.nextButton
        }}
        onClick={nextSlide}
        aria-label="Next flower"
      >
        ›
      </button>
      
      {/* Dots Indicator */}
      <div style={styles.dotsContainer}>
        {flowerSlides.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              ...(index === currentSlide ? styles.activeDot : {})
            }}
            onClick={() => goToSlide(index)}
            aria-label={`Go to flower ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;