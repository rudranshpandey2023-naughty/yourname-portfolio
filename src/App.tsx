// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Scroll restoration helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </PageTransition>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CursorProvider>
        <div className="relative min-h-screen bg-[#F5F4EF] text-[#121211] flex flex-col justify-between selection:bg-[#2251FF] selection:text-white">
          {/* Scroll Progress Bar at the top */}
          <ScrollProgress />

          {/* Film Grain Texture Overlay */}
          <NoiseOverlay />

          {/* Contextual Magnetic Cursor for Desktop */}
          <CustomCursor />

          {/* Scroll Restoration */}
          <ScrollToTop />

          {/* Global Sticky Navigation */}
          <Navbar />

          {/* Main Route Content */}
          <main className="flex-grow">
            <AppRoutes />
          </main>

          {/* Global Minimal Editorial Footer */}
          <Footer />
        </div>
      </CursorProvider>
    </BrowserRouter>
  );
};

export default App;
