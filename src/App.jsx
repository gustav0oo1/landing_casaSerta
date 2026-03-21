import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Novas Páginas Premium
import ExclusiveGallery from './pages/ExclusiveGallery';
import GastronomicPortal from './pages/GastronomicPortal';

// Componente para resetar o scroll ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <main>
    <Hero />
    <About />
    <Events />
    <Gallery />
  </main>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#050505] min-h-[100dvh] font-sans text-white scroll-smooth selection:bg-red-500 selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<ExclusiveGallery />} />
          <Route path="/cardapio" element={<GastronomicPortal />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
