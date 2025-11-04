import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      padding: '0.8rem 0',
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
      padding: '0 2rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      border: '1px solid rgba(139, 0, 0, 0.1)'
    },
    logoIcon: {
      fontSize: '2.5rem',
      background: 'linear-gradient(135deg, #8b0000, #dc2626)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'petalFall 3s infinite',
      filter: 'drop-shadow(0 2px 4px rgba(139, 0, 0, 0.3))'
    },
    logoText: {
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #8b0000, #dc2626, #b91c1c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(139, 0, 0, 0.1)'
    },
    navItems: {
      display: 'flex',
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
      padding: '0.8rem 1.8rem',
      borderRadius: '20px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontSize: '1rem',
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
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
    },
    // Enhanced Hamburger Menu
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.8rem',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(255, 215, 0, 0.1))',
      border: '1px solid rgba(139, 0, 0, 0.1)'
    },
    hamburgerLine: {
      width: '28px',
      height: '3px',
      background: '#8b0000',
      margin: '3px 0',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '3px',
      transformOrigin: 'center'
    },
    hamburgerLine1: {
      transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
    },
    hamburgerLine2: {
      opacity: isMenuOpen ? 0 : 1,
      transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
    },
    hamburgerLine3: {
      transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
    },
    // Enhanced Mobile Menu
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: '2rem',
      right: '2rem',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(139, 0, 0, 0.1)',
      borderRadius: '25px',
      boxShadow: '0 20px 60px rgba(139, 0, 0, 0.2)',
      padding: '2rem',
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '0.8rem',
      transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    mobileNavItem: {
      color: '#8b0000',
      fontWeight: '600',
      cursor: 'pointer',
      padding: '1.2rem 1.5rem',
      borderRadius: '18px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      fontSize: '1.1rem',
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
      zIndex: -1
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Enhanced Logo */}
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
          <div style={styles.logoText}>Pson Floral Expert</div>
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
        
        @media (max-width: 968px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        
        @media (min-width: 969px) {
          .mobile-menu { display: none !important; }
          .hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;