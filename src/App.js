import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Events from './Components/Events';
import Carousel from './Components/Carousel';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route - ONLY Homepage component */}
          <Route path="/" element={<Homepage />} />
          
          {/* Individual routes for each page */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          
          {/* If you want Carousel on its own page */}
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;