import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import WishlistDrawer from './Component/WishlistDrawer';
import CartDrawer from './Component/CartDrawer';
import ToastNotification from './Component/ToastNotification';
import { ShopProvider } from './context/ShopContext';
import HeroPage from './Pages/HeroPage';
import CollectionSection from './Pages/CollectionSection';
import CollectionPage from './Pages/CollectionPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';
import CraftsmanshipSection from './Pages/CraftsmanshipSection';
import MaisonGallery from './Pages/MaisonGallery';
import OlfactoryTerritories from './Pages/OlfactoryTerritories';
import ReviewSection from './Pages/ReviewSection';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#collection') return 'collection';
      if (window.location.hash === '#about' || window.location.hash === '#aboutus') return 'about';
      if (window.location.hash === '#contact') return 'contact';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#collection') {
        setCurrentPage('collection');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#about' || window.location.hash === '#aboutus') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page, targetHash) => {
    setCurrentPage(page);
    if (page === 'collection') {
      window.location.hash = '#collection';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = targetHash || '#home';
      if (targetHash && targetHash !== '#home') {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <ShopProvider>
      <div className="min-h-screen bg-[#09090b] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1">
          {currentPage === 'collection' ? (
            <CollectionPage onNavigateHome={() => handleNavigate('home')} />
          ) : currentPage === 'about' ? (
            <AboutUsPage
              onNavigateHome={() => handleNavigate('home')}
              onExploreCollection={() => handleNavigate('collection')}
            />
          ) : currentPage === 'contact' ? (
            <ContactPage
              onNavigateHome={() => handleNavigate('home')}
              onExploreCollection={() => handleNavigate('collection')}
            />
          ) : (
            <>
              <HeroPage onExploreCollection={() => handleNavigate('collection')} />
              <CollectionSection onOpenFullPage={() => handleNavigate('collection')} />
              <CraftsmanshipSection />
              <MaisonGallery />
              <OlfactoryTerritories />
              <ReviewSection />
            </>
          )}
        </main>
        <Footer onNavigate={handleNavigate} />

        {/* Global Slide-over Drawers & Notifications */}
        <WishlistDrawer onExploreCollection={() => handleNavigate('collection')} />
        <CartDrawer onExploreCollection={() => handleNavigate('collection')} />
        <ToastNotification />
      </div>
    </ShopProvider>
  );
}

export default App;
