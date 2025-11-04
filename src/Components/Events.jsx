import React, { useState, useRef, useEffect } from 'react';

const Events = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState({});
  const videoRefs = useRef([]);

  const events = [
    {
      id: 1,
      year: "2018",
      title: "The Beginning",
      description: "Started Pson Floral Expert with just a small table and a dream. Our first arrangement was a simple rose bouquet for a local wedding.",
      media: "/Images/Assets/Assets/Eventvid1.mp4",
      mediaType: "video",
      thumbnail: "/Images/Assets/Assets/Eventvid1-thumb.jpg",
      achievements: ["First customer", "Established brand identity", "Built initial client base"]
    },
    {
      id: 2,
      year: "2019",
      title: "First Major Event",
      description: "Provided floral arrangements for our first corporate event - a gala for 200+ guests. This was our breakthrough moment.",
      media: "/Images/Assets/Assets/event1.jpg",
      mediaType: "image",
      achievements: ["First corporate client", "Expanded team to 3 people", "Doubled monthly revenue"]
    },
    {
      id: 3,
      year: "2020",
      title: "Overcoming Challenges",
      description: "Despite the pandemic, we pivoted to contactless deliveries and virtual consultations. Our resilience paid off.",
      media: "/Images/Assets/Assets/event2.jpg",
      mediaType: "image",
      achievements: ["Launched online store", "Started virtual workshops", "Maintained 80% of pre-pandemic revenue"]
    },
    {
      id: 4,
      year: "2021",
      title: "Expansion Era",
      description: "Opened our first physical storefront and expanded our team. Started specializing in luxury wedding arrangements.",
      media: "/Images/Assets/Assets/event3.jpg",
      mediaType: "image",
      achievements: ["Opened first store", "Team grew to 8 members", "Featured in local magazine"]
    },
    {
      id: 5,
      year: "2022",
      title: "Award Recognition",
      description: "Won 'Best Floral Design Studio' at the National Florist Awards. Our designs were recognized for innovation and quality.",
      media: "/Images/Assets/Assets/Eventvid2.mp4",
      mediaType: "video",
      thumbnail: "/Images/Assets/Assets/Eventvid2-thumb.jpg",
      achievements: ["National award winner", "Featured in 5 publications", "Client base exceeded 1000"]
    },
    {
      id: 6,
      year: "2023",
      title: "Community Impact",
      description: "Launched our floral workshop program for underprivileged youth. Giving back to the community that supported us.",
      media: "/Images/Assets/Assets/event6.jpg",
      mediaType: "image",
      achievements: ["Trained 50+ students", "Community partnership", "Sustainability initiatives"]
    },
    {
      id: 7,
      year: "2024",
      title: "International Reach",
      description: "Expanded our services to international clients and started shipping preserved arrangements worldwide.",
      media: "/Images/Assets/Assets/event11.jpeg",
      mediaType: "image",
      achievements: ["International shipping", "Global client base", "Premium service tier"]
    },
    {
      id: 8,
      year: "2025",
      title: "Future Vision",
      description: "Launching our own line of preserved floral arrangements and expanding into event planning services.",
      media: "/Images/Assets/Assets/event9.jpg",
      mediaType: "image",
      achievements: ["New product line", "Event planning services", "Brand collaborations"]
    }
  ];

  const handleVideoPlay = async (index) => {
    try {
      // Pause any currently playing video
      if (activeVideo !== null && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo].pause();
      }
      
      const video = videoRefs.current[index];
      if (video) {
        // Set active video first
        setActiveVideo(index);
        
        // Wait a small moment for state update then play
        setTimeout(async () => {
          try {
            await video.play();
          } catch (playError) {
            console.error('Error playing video:', playError);
            // If autoplay fails, show controls and let user play manually
            setActiveVideo(index);
          }
        }, 100);
      }
    } catch (error) {
      console.error('Error in handleVideoPlay:', error);
      setActiveVideo(index); // Still show controls on error
    }
  };

  const handleVideoPause = () => {
    setActiveVideo(null);
  };

  const handleVideoLoad = (index) => {
    setVideoLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index) => {
    console.error(`Video ${index} failed to load`);
    setVideoLoaded(prev => ({ ...prev, [index]: false }));
  };

  // Improved video click handler
  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        handleVideoPlay(index);
      } else {
        video.pause();
        handleVideoPause();
      }
    }
  };

  const styles = {
    events: {
      padding: '120px 2rem 5rem 2rem',
      background: 'linear-gradient(135deg, #f8f6f2 0%, #fefefe 100%)',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '6rem'
    },
    title: {
      fontSize: '4rem',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.4rem',
      color: '#666',
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      padding: '0 1rem'
    },
    eventCard: {
      background: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(139, 0, 0, 0.15)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      position: 'relative'
    },
    eventCardHovered: {
      transform: 'translateY(-15px)',
      boxShadow: '0 30px 60px rgba(139, 0, 0, 0.25)'
    },
    mediaContainer: {
      position: 'relative',
      height: '300px',
      overflow: 'hidden',
      background: '#f8f6f2'
    },
    media: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    mediaHovered: {
      transform: 'scale(1.1)'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      cursor: 'pointer'
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80px',
      height: '80px',
      background: 'rgba(139, 0, 0, 0.85)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '3px solid white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      zIndex: 3
    },
    playButtonHovered: {
      background: 'rgba(139, 0, 0, 0.95)',
      transform: 'translate(-50%, -50%) scale(1.1)'
    },
    playIcon: {
      width: '0',
      height: '0',
      borderTop: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: '25px solid white',
      marginLeft: '5px'
    },
    eventContent: {
      padding: '2.5rem'
    },
    yearBadge: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      color: 'white',
      padding: '0.8rem 1.5rem',
      borderRadius: '25px',
      fontSize: '1.1rem',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      boxShadow: '0 5px 15px rgba(139, 0, 0, 0.3)',
      zIndex: '2'
    },
    eventTitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#8b0000',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '1.2rem',
      lineHeight: '1.3'
    },
    eventDescription: {
      fontSize: '1.1rem',
      color: '#666',
      lineHeight: '1.7',
      marginBottom: '1.8rem',
      fontFamily: "'Inter', sans-serif"
    },
    achievements: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    achievement: {
      fontSize: '1rem',
      color: '#8b0000',
      marginBottom: '0.8rem',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
      padding: '0.5rem 0',
      borderBottom: '1px solid rgba(139, 0, 0, 0.1)'
    },
    achievementDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#8b0000',
      marginRight: '1rem',
      flexShrink: '0'
    },
    videoIndicator: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(139, 0, 0, 0.9)',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      zIndex: '2',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    videoIcon: {
      fontSize: '1.2rem'
    },
    loadingText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#8b0000',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '600',
      zIndex: 2
    }
  };

  return (
    <section style={styles.events} id="events">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Our Journey Through Time</h2>
          <p style={styles.subtitle}>
            Witness our evolution from a small startup to an award-winning floral design studio
          </p>
        </div>

        <div style={styles.eventsGrid} className="events-grid">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              style={{
                ...styles.eventCard,
                ...(hoveredCard === event.id ? styles.eventCardHovered : {})
              }}
              className="event-card"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Year Badge */}
              <div style={styles.yearBadge}>
                {event.year}
              </div>

              {/* Video Indicator */}
              {event.mediaType === 'video' && (
                <div style={styles.videoIndicator}>
                  <span style={styles.videoIcon}>🎥</span>
                  Video Story
                </div>
              )}

              {/* Media Container */}
              <div style={styles.mediaContainer}>
                {event.mediaType === 'video' ? (
                  <>
                    <video
                      ref={el => {
                        videoRefs.current[index] = el;
                      }}
                      style={styles.video}
                      controls={activeVideo === index}
                      onPlay={() => handleVideoPlay(index)}
                      onPause={handleVideoPause}
                      poster={event.thumbnail}
                      onLoadedData={() => handleVideoLoad(index)}
                      onError={() => handleVideoError(index)}
                      preload="metadata"
                      playsInline
                      onClick={() => handleVideoClick(index)}
                    >
                      <source src={event.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Show play button only when video is not active and loaded */}
                    {activeVideo !== index && videoLoaded[index] !== false && (
                      <div 
                        style={{
                          ...styles.playButton,
                          ...(hoveredCard === event.id ? styles.playButtonHovered : {})
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(index);
                        }}
                      >
                        <div style={styles.playIcon}></div>
                      </div>
                    )}

                    {/* Show loading if video hasn't loaded */}
                    {!videoLoaded[index] && activeVideo !== index && (
                      <div style={styles.loadingText}>
                        Loading video...
                      </div>
                    )}
                  </>
                ) : (
                  <img 
                    src={event.media} 
                    alt={event.title}
                    style={{
                      ...styles.media,
                      ...(hoveredCard === event.id ? styles.mediaHovered : {})
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={styles.eventContent}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <p style={styles.eventDescription}>{event.description}</p>
                <ul style={styles.achievements}>
                  {event.achievements.map((achievement, i) => (
                    <li key={i} style={styles.achievement}>
                      <span style={styles.achievementDot}></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          padding: 0 1rem;
        }

        .event-card {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .event-card:nth-child(1) { animation-delay: 0.1s; }
        .event-card:nth-child(2) { animation-delay: 0.2s; }
        .event-card:nth-child(3) { animation-delay: 0.3s; }
        .event-card:nth-child(4) { animation-delay: 0.4s; }
        .event-card:nth-child(5) { animation-delay: 0.5s; }
        .event-card:nth-child(6) { animation-delay: 0.6s; }
        .event-card:nth-child(7) { animation-delay: 0.7s; }
        .event-card:nth-child(8) { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 968px) {
          .events-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0;
          }
        }

        @media (max-width: 768px) {
          .event-title {
            font-size: 1.6rem !important;
          }
          
          .year-badge {
            font-size: 1rem !important;
            padding: 0.6rem 1.2rem !important;
          }

          .media-container {
            height: 250px !important;
          }
        }

        @media (max-width: 480px) {
          .event-title {
            font-size: 1.4rem !important;
          }
          
          .events-section {
            padding: 100px 1rem 3rem 1rem !important;
          }
          
          .event-content {
            padding: 2rem 1.5rem !important;
          }

          .events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;