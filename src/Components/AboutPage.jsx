import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Peter Mutua Mutinda",
      role: "Founder & Head Florist",
      image: "🌸",
      description: "With over 10 years of experience in floral design, Peter brings passion and creativity to every arrangement.",
      expertise: "Wedding Florals, Luxury Arrangements"
    },
    {
      name: "James Mwangi",
      role: "Operations Manager",
      image: "🌿",
      description: "James ensures seamless delivery and customer satisfaction across all 47 counties in Kenya.",
      expertise: "Logistics, Customer Service"
    },
    {
      name: "Grace Wambui",
      role: "Senior Florist",
      image: "💐",
      description: "Grace specializes in contemporary floral designs and seasonal arrangements.",
      expertise: "Modern Designs, Seasonal Flowers"
    },
    {
      name: "David Ochieng",
      role: "Garden Manager",
      image: "🌹",
      description: "David oversees our flower gardens, ensuring we grow the freshest and most beautiful blooms.",
      expertise: "Horticulture, Sustainable Farming"
    }
  ];

  const milestones = [
    { year: "2018", event: "Pson Founded", description: "Started as a small flower shop in Nairobi" },
    { year: "2019", event: "Expanded Delivery", description: "Launched same-day delivery across Nairobi" },
    { year: "2020", event: "National Reach", description: "Extended services to all 47 counties in Kenya" },
    { year: "2022", event: "10K Customers", description: "Celebrated serving 10,000+ happy customers" },
    { year: "2023", event: "Award Winner", description: "Received Kenya's Best Florist Award 2023" }
  ];

  // Array of different rose images for variety
  const roseImages = [
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMHJvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvc2VzJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXMlMjBtaXhlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvc2VzJTIwbWl4ZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1562555192-2d1e4a4d4d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbmslMjByb3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  ];

  const styles = {
    aboutPage: {
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
                   url('${roseImages[0]}'),
                   url('${roseImages[1]}'),
                   url('${roseImages[2]}')`,
      backgroundSize: 'cover, 30% 50%, 40% 60%',
      backgroundPosition: 'center, left top, right bottom',
      backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
      backgroundBlendMode: 'overlay, multiply, multiply',
      backgroundAttachment: 'fixed, fixed, fixed',
      padding: '8rem 2rem 4rem',
      color: 'white',
      fontFamily: "'Playfair Display', 'Georgia', serif",
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(219, 112, 147, 0.1) 0%, transparent 50%)
      `,
      zIndex: 0
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease',
      position: 'relative',
      zIndex: 2
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '6rem',
      padding: '3rem',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '25px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    },
    mainTitle: {
      fontSize: '4.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #fff, #ff6b6b, #ffb6c1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1'
    },
    subtitle: {
      fontSize: '1.6rem',
      opacity: 0.9,
      marginBottom: '2rem',
      fontWeight: '300',
      lineHeight: '1.7',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
    },
    section: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      padding: '4rem 3rem',
      borderRadius: '25px',
      marginBottom: '4rem',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '600',
      marginBottom: '3rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e, #ffb6c1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'start'
    },
    storyContent: {
      fontSize: '1.3rem',
      lineHeight: '1.9',
      textAlign: 'justify',
      opacity: 0.95,
      textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
    },
    highlight: {
      color: '#ffb6c1',
      fontWeight: '600',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2.5rem',
      marginTop: '2rem'
    },
    valueCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden'
    },
    valueCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      borderColor: 'rgba(255, 182, 193, 0.3)'
    },
    valueIcon: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e, #ffb6c1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))'
    },
    valueTitle: {
      fontSize: '1.6rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: 'white'
    },
    valueDescription: {
      opacity: 0.9,
      lineHeight: '1.7',
      fontSize: '1.1rem'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      marginTop: '2rem'
    },
    teamCard: {
      background: 'rgba(255, 255, 255, 0.08)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden'
    },
    teamCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)'
    },
    teamImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      margin: '0 auto 2rem',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e, #ffb6c1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3.5rem',
      color: 'white',
      boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
      border: '3px solid rgba(255, 255, 255, 0.2)'
    },
    teamName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '0.8rem',
      color: 'white'
    },
    teamRole: {
      color: '#ffb6c1',
      fontWeight: '500',
      marginBottom: '1.5rem',
      fontSize: '1.1rem',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
    },
    teamDescription: {
      opacity: 0.9,
      lineHeight: '1.7',
      marginBottom: '1.5rem',
      fontSize: '1.1rem'
    },
    teamExpertise: {
      fontSize: '1rem',
      opacity: 0.8,
      fontStyle: 'italic',
      color: '#ffb6c1'
    },
    timeline: {
      position: 'relative',
      maxWidth: '900px',
      margin: '4rem auto 0'
    },
    timelineItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '4rem',
      opacity: 0,
      animation: 'fadeInUp 0.6s ease forwards'
    },
    timelineYear: {
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      color: 'white',
      padding: '1.2rem 2rem',
      borderRadius: '50px',
      fontWeight: '700',
      fontSize: '1.3rem',
      minWidth: '140px',
      textAlign: 'center',
      boxShadow: '0 8px 20px rgba(255, 107, 107, 0.4)',
      border: '2px solid rgba(255, 255, 255, 0.2)'
    },
    timelineContent: {
      background: 'rgba(255, 255, 255, 0.08)',
      padding: '2rem',
      borderRadius: '20px',
      marginLeft: '3rem',
      flex: 1,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    },
    timelineEvent: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: 'white'
    },
    timelineDescription: {
      opacity: 0.9,
      lineHeight: '1.6',
      fontSize: '1.1rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '3rem',
      marginTop: '2rem'
    },
    statCard: {
      textAlign: 'center',
      padding: '2.5rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    },
    statNumber: {
      fontSize: '3.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e, #ffb6c1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.8rem',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
    },
    statLabel: {
      fontSize: '1.2rem',
      opacity: 0.9,
      fontWeight: '500'
    },
    flowerIcon: {
      position: 'absolute',
      fontSize: '3rem',
      opacity: 0.15,
      animation: 'float 8s ease-in-out infinite',
      zIndex: 1,
      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))'
    },
    backButton: {
      position: 'absolute',
      top: '2rem',
      left: '2rem',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 10
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div style={styles.aboutPage}>
      {/* Background Overlay */}
      <div style={styles.backgroundOverlay}></div>

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
        ← Back to Home
      </button>

      {/* Floating Flower Icons */}
      <div style={{...styles.flowerIcon, top: '15%', left: '8%', animationDelay: '0s'}}>🌹</div>
      <div style={{...styles.flowerIcon, top: '25%', right: '12%', animationDelay: '1.5s'}}>🌸</div>
      <div style={{...styles.flowerIcon, bottom: '35%', left: '12%', animationDelay: '3s'}}>💐</div>
      <div style={{...styles.flowerIcon, top: '60%', right: '8%', animationDelay: '4.5s'}}>🌷</div>
      <div style={{...styles.flowerIcon, bottom: '20%', left: '85%', animationDelay: '6s'}}>🌺</div>
      
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h1 style={styles.mainTitle}>Our Story</h1>
          <p style={styles.subtitle}>
            From a passionate dream to Kenya's premier floral destination - 
            Bloomify has been crafting unforgettable moments through the language of flowers since 2018.
          </p>
        </div>

        {/* Our Story Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>The Pson Journey</h2>
          <div style={styles.contentGrid}>
            <div style={styles.storyContent}>
              <p>
                Founded in <span style={styles.highlight}>2018</span> by Peter Mutua Mutinda, Pson Floral Expert began as a small flower stall 
                in Nairobi with a simple mission: to bring the beauty and joy of fresh flowers to every Kenyan home.
              </p>
              <p>
                What started as a passion project quickly grew into a beloved brand, known for our 
                <span style={styles.highlight}> exceptional quality</span> and 
                <span style={styles.highlight}> heartfelt service</span>. Today, we serve customers across all 
                47 counties, delivering happiness in every bouquet.
              </p>
              <p>
                Our commitment to <span style={styles.highlight}>sustainability</span> and 
                <span style={styles.highlight}> community support</span> drives everything we do. We work directly 
                with local flower farmers and employ talented Kenyan florists who share our vision.
              </p>
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>5+</div>
                <div style={styles.statLabel}>Years of Excellence</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>47</div>
                <div style={styles.statLabel}>Counties Served</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>10K+</div>
                <div style={styles.statLabel}>Happy Customers</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>500+</div>
                <div style={styles.statLabel}>Flower Varieties</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <div style={styles.valuesGrid}>
            {[
              { icon: '🌿', title: 'Freshness Guaranteed', desc: 'Every flower is hand-picked daily from our partner farms and delivered at peak freshness.' },
              { icon: '💝', title: 'Passionate Craftsmanship', desc: 'Our florists pour their heart into every arrangement, creating unique pieces that tell your story.' },
              { icon: '🌍', title: 'Sustainable Practices', desc: 'We prioritize eco-friendly packaging and support local flower farmers across Kenya.' },
              { icon: '🚚', title: 'Nationwide Delivery', desc: 'Same-day delivery across major cities and reliable service to every corner of Kenya.' }
            ].map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.valueCard,
                  ...(hoveredCard === `value-${index}` ? styles.valueCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(`value-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                style={{
                  ...styles.teamCard,
                  ...(hoveredCard === `team-${index}` ? styles.teamCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(`team-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.teamImage}>
                  {member.image}
                </div>
                <h3 style={styles.teamName}>{member.name}</h3>
                <div style={styles.teamRole}>{member.role}</div>
                <p style={styles.teamDescription}>{member.description}</p>
                <div style={styles.teamExpertise}>Expertise: {member.expertise}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Journey</h2>
          <div style={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.timelineItem,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={styles.timelineYear}>{milestone.year}</div>
                <div style={styles.timelineContent}>
                  <div style={styles.timelineEvent}>{milestone.event}</div>
                  <div style={styles.timelineDescription}>{milestone.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <div style={styles.storyContent}>
            <p style={{textAlign: 'center', fontSize: '1.5rem', lineHeight: '1.9', fontStyle: 'italic'}}>
              "To transform ordinary moments into extraordinary memories through the timeless beauty of flowers, 
              while building a sustainable business that supports local communities and brings joy to every 
              Kenyan household."
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;