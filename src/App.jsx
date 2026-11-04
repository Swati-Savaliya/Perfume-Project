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
import ScentWardrobeSection from './Pages/ScentWardrobeSection';
import MaisonGallery from './Pages/MaisonGallery';
import OlfactoryTerritories from './Pages/OlfactoryTerritories';
import ReviewSection from './Pages/ReviewSection';

function App() {
  // Always start on 'home' page when loaded or refreshed
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // On page load or refresh, clear any hash and reset to top of home page
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      // Clear hash before page unloads/refreshes so it reloads clean on home
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

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

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('hashchange', handleHash);
    };
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
      <div className="min-h-screen w-full bg-[#09090b] text-neutral-100 flex flex-col font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1 w-full overflow-x-hidden">
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
              <ScentWardrobeSection onExploreCollection={() => handleNavigate('collection')} />
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
