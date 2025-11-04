import React, { useState } from 'react';

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      padding: '120px 2rem 5rem 2rem',
      background: 'linear-gradient(135deg, #fdfcfb 0%, #f5f7fa 100%)',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    title: {
      textAlign: 'center',
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '700'
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '1.3rem',
      color: '#666',
      marginBottom: '4rem',
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2.5rem',
      padding: '0 1rem'
    },
    flowerCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default', // Changed from 'pointer' to 'default'
      border: '1px solid rgba(139, 0, 0, 0.1)'
    },
    flowerCardHovered: {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 40px rgba(139, 0, 0, 0.2)'
    },
    flowerImageContainer: {
      overflow: 'hidden',
      height: '280px',
      position: 'relative'
    },
    flowerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    flowerImageHovered: {
      transform: 'scale(1.08)'
    },
    flowerInfo: {
      padding: '2rem',
      textAlign: 'center'
    },
    flowerName: {
      fontSize: '1.5rem',
      marginBottom: '0.8rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '600'
    },
    flowerDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '1.2rem',
      lineHeight: '1.5',
      fontFamily: "'Inter', sans-serif"
    },
    flowerPrice: {
      fontSize: '1.6rem',
      color: '#8b0000',
      fontWeight: 'bold',
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      padding: '0.5rem 1rem',
      borderRadius: '10px',
      display: 'inline-block'
    },
    headerSection: {
      textAlign: 'center',
      marginBottom: '4rem',
      padding: '0 2rem'
    },
    decorativeLine: {
      width: '100px',
      height: '3px',
      background: 'linear-gradient(90deg, #8b0000, #dc2626)',
      margin: '1rem auto',
      borderRadius: '2px'
    },
    flowerCount: {
      textAlign: 'center',
      fontSize: '1.1rem',
      color: '#8b0000',
      marginBottom: '3rem',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '500',
      background: 'rgba(139, 0, 0, 0.05)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      display: 'inline-block'
    }
  };

  return (
    <section style={styles.gallery} id="gallery">
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
                ...(hoveredCard === flower.id ? styles.flowerCardHovered : {})
              }}
              onMouseEnter={() => setHoveredCard(flower.id)}
              onMouseLeave={() => setHoveredCard(null)}
              // Removed the onClick handler completely
            >
              <div style={styles.flowerImageContainer}>
                <img 
                  src={flower.image} 
                  alt={flower.name}
                  style={{
                    ...styles.flowerImage,
                    ...(hoveredCard === flower.id ? styles.flowerImageHovered : {})
                  }}
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
    </section>
  );
};

export default Gallery;