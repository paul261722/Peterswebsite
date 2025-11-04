import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveItem('Home');
    else if (path === '/about') setActiveItem('About');
    else if (path === '/gallery') setActiveItem('Gallery');
    else if (path === '/events') setActiveItem('Events');
    else if (path === '/contact') setActiveItem('Contact');
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Updated nav items with React Router Links
  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Gallery', path: '/gallery', icon: '🖼️' },
    { name: 'Events', path: '/events', icon: '🎉' },
    { name: 'About', path: '/about', icon: '🌿' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  const handleNavClick = (path, name) => {
    setActiveItem(name);
    setIsMenuOpen(false);
  };

  const styles = {
    navbar: {
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.97)' 
        : 'rgba(255, 255, 255, 0.90)',
      backdropFilter: 'blur(25px)',
      padding: isMobile ? '0.6rem 0' : '0.8rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: isScrolled 
        ? '0 10px 40px rgba(139, 0, 0, 0.15)' 
        : '0 4px 25px rgba(139, 0, 0, 0.08)',
      borderBottom: isScrolled 
        ? '1px solid rgba(139, 0, 0, 0.1)' 
        : '1px solid rgba(139, 0, 0, 0.05)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: "'Playfair Display', serif"
    },
    navContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0 1rem' : '0 2rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '0.8rem',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      textDecoration: 'none',
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      minWidth: isMobile ? 'auto' : 'auto',
      flexShrink: 0
    },
    logoIcon: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'petalFall 3s infinite',
      filter: 'drop-shadow(0 2px 4px rgba(139, 0, 0, 0.3))',
      flexShrink: 0
    },
    logoText: {
      fontSize: isMobile ? '1.1rem' : '2rem', // Show text on mobile with smaller size
      fontWeight: '800',
      background: 'linear-gradient(135deg, #8b0000, #dc2626, #b91c1c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(139, 0, 0, 0.1)',
      display: 'block', // Always show the text
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: isMobile ? '120px' : 'none' // Limit width on mobile to prevent overflow
    },
    logoTextShort: {
      fontSize: isMobile ? '1.1rem' : '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #8b0000, #dc2626, #b91c1c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(139, 0, 0, 0.1)',
      display: 'block'
    },
    navItems: {
      display: isMobile ? 'none' : 'flex',
      gap: '0.2rem',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '0.5rem',
      borderRadius: '25px',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      boxShadow: '0 4px 20px rgba(139, 0, 0, 0.1)'
    },
    navItem: {
      color: isScrolled ? '#8b0000' : '#8b0000',
      fontWeight: '600',
      cursor: 'pointer',
      padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 1.8rem',
      borderRadius: '20px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      background: 'transparent',
      border: '1px solid transparent'
    },
    navItemActive: {
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    navItemHover: {
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      color: '#8b0000',
      transform: 'translateY(-2px)',
      border: '1px solid rgba(139, 0, 0, 0.2)'
    },
    navIcon: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
    },
    // Enhanced Hamburger Menu
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.6rem',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      marginLeft: 'auto',
      flexShrink: 0
    },
    hamburgerLine: {
      width: '24px',
      height: '3px',
      background: '#8b0000',
      margin: '2px 0',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '3px',
      transformOrigin: 'center'
    },
    hamburgerLine1: {
      transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
    },
    hamburgerLine2: {
      opacity: isMenuOpen ? 0 : 1,
      transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
    },
    hamburgerLine3: {
      transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
    },
    // Enhanced Mobile Menu
    mobileMenu: {
      position: 'fixed',
      top: isMobile ? '70px' : '100%',
      left: '1rem',
      right: '1rem',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(139, 0, 0, 0.2)',
      padding: isMobile ? '1.5rem' : '2rem',
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '0.8rem',
      transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 999,
      maxHeight: isMobile ? 'calc(100vh - 100px)' : 'none',
      overflowY: 'auto'
    },
    mobileNavItem: {
      color: '#8b0000',
      fontWeight: '600',
      cursor: 'pointer',
      padding: isMobile ? '1rem 1.2rem' : '1.2rem 1.5rem',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: isMobile ? '1rem' : '1.1rem',
      background: 'rgba(139, 0, 0, 0.05)',
      textDecoration: 'none',
      border: '1px solid transparent',
      position: 'relative',
      overflow: 'hidden'
    },
    mobileNavItemActive: {
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      color: 'white',
      transform: 'translateX(10px)',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.2)'
    },
    // Decorative elements
    navDecoration: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.2), transparent)',
      zIndex: -1,
      display: isMobile ? 'none' : 'block'
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Enhanced Logo - Always show shop name */}
        <Link 
          to="/"
          style={styles.logo}
          onClick={() => setActiveItem('Home')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 25px rgba(139, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={styles.logoIcon}>🌹</div>
          <div style={isMobile ? styles.logoTextShort : styles.logoText}>
            {isMobile ? 'Pson Floral' : 'Pson Floral Expert'}
          </div>
        </Link>
        
        {/* Decorative Line */}
        <div style={styles.navDecoration}></div>
        
        {/* Desktop Navigation */}
        <div style={styles.navItems}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                ...styles.navItem,
                ...(activeItem === item.name ? styles.navItemActive : {}),
                ...(hoveredItem === item.name && activeItem !== item.name ? styles.navItemHover : {})
              }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleNavClick(item.path, item.name)}
            >
              <span style={{
                ...styles.navIcon,
                transform: activeItem === item.name ? 'scale(1.3) rotate(5deg)' : 
                          hoveredItem === item.name ? 'scale(1.2)' : 'scale(1)'
              }}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Enhanced Mobile Hamburger Menu */}
        <div 
          style={styles.hamburger}
          onClick={toggleMenu}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(139, 0, 0, 0.2), rgba(255, 215, 0, 0.2))';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))';
          }}
        >
          <div style={{...styles.hamburgerLine, ...styles.hamburgerLine1}}></div>
          <div style={{...styles.hamburgerLine, ...styles.hamburgerLine2}}></div>
          <div style={{...styles.hamburgerLine, ...styles.hamburgerLine3}}></div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              ...styles.mobileNavItem,
              ...(activeItem === item.name ? styles.mobileNavItemActive : {}),
            }}
            onClick={() => handleNavClick(item.path, item.name)}
            onMouseEnter={(e) => {
              if (activeItem !== item.name) {
                e.target.style.background = 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))';
                e.target.style.transform = 'translateX(5px)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeItem !== item.name) {
                e.target.style.background = 'rgba(139, 0, 0, 0.05)';
                e.target.style.transform = 'translateX(0)';
              }
            }}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes petalFall {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-2px) rotate(-2deg); 
          }
          75% { 
            transform: translateY(2px) rotate(2deg); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 768px) {
          .navItems { 
            display: none !important; 
          }
          .hamburger { 
            display: flex !important; 
          }
          /* Remove the logo text hiding rule */
        }
        
        @media (min-width: 769px) {
          .mobileMenu { 
            display: none !important; 
          }
          .hamburger { 
            display: none !important; 
          }
        }
        
        /* Extra small devices */
        @media (max-width: 480px) {
          .navContainer {
            padding: 0 0.8rem !important;
          }
          .logo {
            padding: 0.3rem 0.6rem !important;
            gap: 0.3rem !important;
          }
          .logoIcon {
            font-size: 1.5rem !important;
          }
          .mobileMenu {
            left: 0.5rem !important;
            right: 0.5rem !important;
            padding: 1rem !important;
          }
          .mobileNavItem {
            padding: 0.8rem 1rem !important;
            font-size: 0.9rem !important;
          }
        }
        
        /* Very small devices */
        @media (max-width: 360px) {
          .logoTextShort {
            font-size: 1rem !important;
            max-width: 100px !important;
          }
          .logo {
            padding: 0.2rem 0.4rem !important;
          }
        }
        
        /* Tablet devices */
        @media (min-width: 769px) and (max-width: 1024px) {
          .navItem {
            padding: 0.7rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
          .logoText {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;