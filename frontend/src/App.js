import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Mobile specific components */
import MobileLogo from "./components/mobile/MobileLogo/MobileLogo";
import MobileSidebar from "./components/mobile/MobileSidebar/MobileSidebar";

/* Web specific components */
import HoverBar from "./components/web/HoverBar/HoverBar";
import NavBar from './components/web/NavBar/NavBar';
import Heading from './components/web/Heading/Heading';
import SlideShow from './components/web/Slideshow/Slideshow';
import AboutSection1 from './components/web/AboutSection/AboutSection1';
import AboutSection2 from './components/web/AboutSection/AboutSection2';
import Consultation from './components/web/Consultation/Consultation';
import ServiceOfferings from './components/web/ServiceOfferings/ServiceOfferings';
import Distinctions from './components/web/Distinctions/Distinctions';
import Location from './components/web/Location/Location';
import Gallery from './components/web/Gallery/Gallery';
import Footer from './components/web/Footer/Footer';
import Transformations from './components/web/Transformations/Transformations';
import About from './pages/About/About';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/health', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBackendStatus(data.status);
      } catch (err) {
        setBackendStatus('Backend is down');
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    checkBackendHealth();

    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        {isMobile ? (
          // Mobile view
          <>
            <MobileLogo />
            <MobileSidebar />
          </>
        ) : (
          // Desktop view
          <>
            <NavBar />
            <HoverBar />
          </>
        )}

        <Routes>
          <Route path="/" element={
            <>
              <Heading />
              <SlideShow />
              <AboutSection1 />
              <Consultation />
              <AboutSection2 />
              <Transformations/>

              <ServiceOfferings />
              <Distinctions />
              <Location />
              <Gallery />
              <Footer />
            </>
          } />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceOfferings />} />
          <Route path="/location" element={<Location />} />
          {/* Add more routes for other components */}
        </Routes>

        {/* Uncomment for debugging */}
        {/* <p>Backend Health Status: {backendStatus}</p>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
      </div>
    </Router>
  );
}

export default App;
