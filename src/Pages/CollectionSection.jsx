import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Heart, ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const products = [
  {
    id: 'emeraude-noir',
    name: 'ÉMERAUDE NOIR',
    subtitle: 'Eau de Parfum • 50ml',
    category: 'WOODY & SMOKY',
    family: 'Fresh Woody & Resinous',
    notes: 'Calabrian Bergamot • Tuscan Cedar • Golden Amber',
    price: '₹285',
    rating: 4.9,
    reviews: 142,
    badge: 'BESTSELLER',
    image: '/images/hero_perfume.jpg',
    images: [
      '/images/hero_perfume.jpg',
      '/images/perfume_emerald_macro.jpg',
      '/images/perfume_emerald_splash.jpg',
    ],
    description: 'A nocturnal rush of cold mountain bergamot and molten amber resin splashing upon ancient volcanic cedar. Macerated for 90 days in Grasse, France to achieve peerless projection and enduring sillage.',
  },
  {
    id: 'ambre-imperial',
    name: 'AMBRE IMPÉRIAL',
    subtitle: 'Eau de Parfum • 50ml',
    category: 'AMBER & RESIN',
    family: 'Warm Oriental Amber',
    notes: 'Smoked Cardamom • Charred Tonka • Sacred Myrrh',
    price: '₹295',
    rating: 5.0,
    reviews: 98,
    badge: 'PRIVATE BLEND',
    image: '/images/perfume_amber.jpg',
    images: [
      '/images/perfume_amber.jpg',
      '/images/perfume_amber_macro.jpg',
      '/images/perfume_amber_splash.jpg',
    ],
    description: 'A regal eruption of smoked cardamom, scorched wild tonka, and sacred myrrh steeped in molten gold. Rich oriental warmth tailored for intimate evening soirees and distinctive presence.',
  },
  {
    id: 'rose-eternelle',
    name: 'ROSE ÉTERNELLE',
    subtitle: 'Eau de Parfum • 50ml',
    category: 'FLORAL CHYPRE',
    family: 'Spiced Floral Velour',
    notes: 'Damask Rose • Pink Peppercorn • Cashmere Woods',
    price: '₹320',
    rating: 4.8,
    reviews: 116,
    badge: 'LIMITED HARVEST',
    image: '/images/perfume_rose.jpg',
    images: [
      '/images/perfume_rose.jpg',
      '/images/perfume_rose_macro.jpg',
      '/images/perfume_rose_splash.jpg',
    ],
    description: 'Dawn-harvested Centifolia roses draped in crisp pink peppercorn and velvety cashmere woods. A modern chypre interpretation honoring centuries of French royal floral heritage.',
  },
  {
    id: 'santal-blanc',
    name: 'SANTAL BLANC',
    subtitle: 'Eau de Parfum • 50ml',
    category: 'WOODY & SMOKY',
    family: 'Pure Woody Mineral',
    notes: 'White Sandalwood • Iris Root • Cardamom Pod',
    price: '₹275',
    rating: 4.9,
    reviews: 84,
    badge: 'NEW RELEASE',
    image: '/images/perfume_santal.jpg',
    images: [
      '/images/perfume_santal.jpg',
      '/images/perfume_santal_macro.jpg',
      '/images/perfume_santal_splash.jpg',
    ],
    description: 'White Australian sandalwood laced with powdery Florentine iris root and crushed green cardamom pods. Clean, ethereal, architectural, and soothingly sensual throughout the day.',
  },
  {
    id: 'noir-absolu',
    name: 'NOIR ABSOLU',
    subtitle: 'Extrait de Parfum • 50ml',
    category: 'WOODY & SMOKY',
    family: 'Smoky Obsidian Mineral',
    notes: 'Black Pepper • Smoky Vetiver • White Ambergris',
    price: '₹310',
    rating: 5.0,
    reviews: 164,
    badge: 'ARCHITECTURAL',
    image: '/images/perfume_noir_still.jpg',
    images: [
      '/images/perfume_noir_still.jpg',
      '/images/perfume_noir_macro.jpg',
      '/images/perfume_noir_splash.jpg',
    ],
    description: 'An architectural study in contrasts. Crystalline obsidian micro-mist exploding upon mirror-wet basalt with smoky vetiver, Madagascar black pepper, and marine ambergris.',
  },
  {
    id: 'santal-grasse',
    name: 'SANTAL DE GRASSE',
    subtitle: 'Extrait de Parfum • 50ml',
    category: 'AMBER & RESIN',
    family: 'Golden Spiced Woods',
    notes: 'Aged Sandalwood • Smoked Cinnamon • Honey Amber',
    price: '₹290',
    rating: 4.9,
    reviews: 73,
    badge: 'EXCLUSIVE',
    image: '/images/perfume_gold.jpg',
    images: [
      '/images/perfume_gold.jpg',
      '/images/perfume_gold_macro.jpg',
      '/images/perfume_gold_splash.jpg',
    ],
    description: 'Heritage aged sandalwood infused with Ceylon smoked cinnamon bark and sun-drenched Provence honey amber. Warm, radiant, and intensely comforting for every season.',
  },
];

const categories = ['ALL CREATIONS', 'WOODY & SMOKY', 'AMBER & RESIN', 'FLORAL CHYPRE'];

const WHATSAPP_NUMBER = '7203060213';

const CollectionSection = () => {
  const [activeCategory, setActiveCategory] = useState('ALL CREATIONS');
  const [wishlist, setWishlist] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const carouselRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalImageIdx(0);
  };

  const handleWhatsAppOrder = (product, e) => {
    if (e) e.stopPropagation();
    const phone = `91${WHATSAPP_NUMBER}`;
    const message = `Hello COAG Haute Parfumerie, I would like to order:%0A%0A` +
      `*Product:* ${encodeURIComponent(product.name)}%0A` +
      `*Price:* ${encodeURIComponent(product.price)}%0A` +
      `*Volume:* ${encodeURIComponent(product.subtitle)}%0A` +
      `*Accord Notes:* ${encodeURIComponent(product.notes)}%0A%0A` +
      `Please confirm availability, dispatch timeframe, and payment details.`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const filteredProducts =
    activeCategory === 'ALL CREATIONS'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('[data-card]');
      const amount = card ? card.offsetWidth + 20 : 360;
      carouselRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('[data-card]');
      const amount = card ? card.offsetWidth + 20 : 360;
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const currentModalImages = selectedProduct?.images || (selectedProduct ? [selectedProduct.image] : []);

  const nextModalImage = (e) => {
    if (e) e.stopPropagation();
    setModalImageIdx((prev) => (prev + 1) % currentModalImages.length);
  };

  const prevModalImage = (e) => {
    if (e) e.stopPropagation();
    setModalImageIdx((prev) => (prev - 1 + currentModalImages.length) % currentModalImages.length);
  };

  return (
    <section className="w-full bg-white text-black py-16 sm:py-20 lg:py-24 border-b border-black/10 select-none overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full">

        {/* Section Header (Centered Luxury Editorial) */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          {/* Highlighted Eyebrow Badge (Dark Luxury Pill) */}
          <div className="inline-flex items-center justify-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0c] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)]">
            <Sparkles size={12} className="text-amber-400" />
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.28em] uppercase font-bold text-white">
              HAUTE PARFUMERIE • GRASSE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-black leading-tight">
            The Signature Collection
          </h2>

          <p className="text-black font-normal text-xs sm:text-sm leading-relaxed tracking-wide">
            Rare botanical extracts macerated in Grasse, France. Explore our handcrafted flacons in an interactive carousel showcase.
          </p>
        </div>

        {/* Category Filter Tabs (Centered) */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[10.5px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeCategory === cat
                ? 'bg-black text-white shadow-md'
                : 'bg-neutral-100 text-black hover:bg-black hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Smooth-Scroll Product Carousel Showcase */}
        <div className="relative group/carousel">

          {/* Left Carousel Arrow Button — Outside Card Bounds */}
          <button
            onClick={scrollLeft}
            className="flex absolute -left-3 sm:-left-5 lg:-left-7 xl:-left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-neutral-300 hover:border-black shadow-[0_10px_35px_rgba(0,0,0,0.18)] text-black hover:bg-black hover:text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous Products"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* Right Carousel Arrow Button — Outside Card Bounds */}
          <button
            onClick={scrollRight}
            className="flex absolute -right-3 sm:-right-5 lg:-right-7 xl:-right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-neutral-300 hover:border-black shadow-[0_10px_35px_rgba(0,0,0,0.18)] text-black hover:bg-black hover:text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next Products"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex space-x-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-grab'
              }`}
          >
            {filteredProducts.map((product) => {
              const isLiked = !!wishlist[product.id];
              return (
                <div
                  key={product.id}
                  data-card="true"
                  onClick={() => openModal(product)}
                  className="w-[84vw] sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2*1.25rem)/3)] lg:w-[calc((100%-3*1.25rem)/4)] flex-shrink-0 snap-start group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-1.5 cursor-pointer"
                >
                  {/* Product Image Canvas */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="text-[9.5px] font-bold tracking-widest uppercase bg-black text-white px-2.5 py-1 rounded-full shadow-md">
                        {product.badge}
                      </span>
                    </div>

                    {/* Wishlist Heart Button (Clean Single Button on Image) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-center text-black hover:scale-110 transition-all shadow-sm active:scale-90"
                      aria-label={`Wishlist ${product.name}`}
                    >
                      <Heart
                        size={15}
                        className={isLiked ? 'fill-red-500 text-red-500' : 'text-black'}
                      />
                    </button>

                    {/* Hover Quick Actions Overlay */}
                    <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(product);
                        }}
                        className="w-full py-2.5 bg-black hover:bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-xl flex items-center justify-center space-x-2 shadow-xl backdrop-blur-md transition-all active:scale-95"
                      >
                        <Eye size={14} />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Details Block — All Black, Bold & Clear */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-white text-black">
                    <div className="space-y-1.5">
                      {/* Family & Rating */}
                      <div className="flex items-center justify-between text-[11px] tracking-wider uppercase font-bold text-black">
                        <span>{product.family}</span>
                        <div className="flex items-center space-x-1 text-black">
                          <Star size={12} className="fill-[#b4833e] text-[#b4833e]" />
                          <span className="font-bold text-black">{product.rating}</span>
                          <span className="text-black font-medium">({product.reviews})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-black tracking-wide pt-0.5">
                        {product.name}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-[11.5px] tracking-widest uppercase text-black font-semibold">
                        {product.subtitle}
                      </p>

                      {/* Scent Accord Notes */}
                      <p className="text-xs text-black font-normal leading-relaxed pt-1 line-clamp-1">
                        {product.notes}
                      </p>
                    </div>

                    {/* Price & Detail Link with the SINGLE WhatsApp Order Action in Text Detail */}
                    <div className="pt-4 mt-3 border-t border-black/15 flex items-center justify-between text-black">
                      <span className="text-base sm:text-lg font-serif font-bold text-black">
                        {product.price}
                      </span>

                      <div className="flex items-center space-x-2.5">
                        {/* Only 1 WhatsApp Icon & Order Button in the Text Details Area */}
                        <button
                          onClick={(e) => handleWhatsAppOrder(product, e)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all duration-300 shadow-sm active:scale-95"
                          title="Order on WhatsApp"
                        >
                          <WhatsAppIcon className="w-5 h-6 fill-white" />

                        </button>

                        <span className="text-black/30 font-bold">•</span>

                        <span className="inline-flex items-center text-[11px] tracking-widest uppercase text-black font-bold hover:underline transition-colors">
                          Details <ArrowRight size={12} className="ml-1 text-black transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ========================================================
          LUXURY PRODUCT DETAIL SHOWCASE MODAL WITH MULTI-IMAGE CAROUSEL
          ======================================================== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden border border-black/15 my-auto text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md border border-black/10"
              aria-label="Close Product Showcase"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto">

              {/* Left Column: Multi-Image Carousel (2 to 3 Images) */}
              <div className="md:col-span-5 bg-neutral-100 relative overflow-hidden flex flex-col items-center justify-between p-5 sm:p-7 min-h-[420px]">

                {/* Main Image Stage */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-black/5 group/modalimg">
                  <img
                    src={currentModalImages[modalImageIdx]}
                    alt={`${selectedProduct.name} - view ${modalImageIdx + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-out"
                  />

                  {/* Badge Overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full shadow-md">
                      {selectedProduct.badge}
                    </span>
                  </div>

                  {/* Photo Counter Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-[10.5px] font-mono tracking-widest bg-white/95 text-black px-2.5 py-0.5 rounded-full border border-black/15 font-bold shadow-sm">
                      {modalImageIdx + 1} / {currentModalImages.length}
                    </span>
                  </div>

                  {/* Image Carousel Prev / Next Arrow Controls */}
                  {currentModalImages.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-black hover:text-white text-black flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 border border-black/10"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft size={18} strokeWidth={2.5} />
                      </button>

                      <button
                        onClick={nextModalImage}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 hover:bg-black hover:text-white text-black flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 border border-black/10"
                        aria-label="Next photo"
                      >
                        <ChevronRight size={18} strokeWidth={2.5} />
                      </button>
                    </>
                  )}
                </div>

                {/* 2 to 3 Clickable Thumbnail Carousel Selector */}
                <div className="flex items-center justify-center space-x-3 pt-4 w-full">
                  {currentModalImages.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalImageIdx(idx)}
                      className={`relative w-14 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${modalImageIdx === idx
                        ? 'border-black ring-2 ring-black/30 scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-black/40'
                        }`}
                      aria-label={`Show photo ${idx + 1}`}
                    >
                      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

              </div>

              {/* Right Column: Elevated Luxury Editorial Details */}
              <div className="md:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-5 bg-white text-black">

                <div className="space-y-4">

                  {/* Top Bar: Family Badge & Rating Pill */}
                  <div className="flex items-center justify-between gap-3 pr-8">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-100 text-black text-[10.5px] font-bold tracking-[0.2em] uppercase border border-black/10">
                      <Sparkles size={11} className="text-[#b4833e]" />
                      <span>{selectedProduct.family}</span>
                    </span>

                    <div className="flex items-center space-x-1.5 bg-neutral-50 px-3 py-1 rounded-full border border-black/15 text-black">
                      <Star size={12} className="fill-[#b4833e] text-[#b4833e]" />
                      <span className="text-xs font-bold text-black">{selectedProduct.rating}</span>
                      <span className="text-[11px] text-neutral-600 font-medium">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Title & Heritage Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-wide leading-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-[12.5px] tracking-[0.22em] uppercase text-neutral-600 font-semibold">
                      {selectedProduct.subtitle} • HAUTE PARFUMERIE PARIS
                    </p>
                  </div>

                  {/* Price & Discovery Samples Privilege Box */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 sm:p-3.5 bg-neutral-50/90 rounded-2xl border border-black/10">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-black">
                        {selectedProduct.price}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">Taxes Included</span>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white border border-black/10 shadow-sm text-[11px] sm:text-xs text-black font-semibold">
                      <Sparkles size={11} className="text-[#b4833e]" />
                      <span>Includes 2 complimentary 2ml extrait vials</span>
                    </div>
                  </div>

                  {/* Editorial Narrative Description */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[9.5px] tracking-[0.25em] uppercase text-neutral-500 font-bold">Editorial Note</span>
                    <p className="text-[13.5px] sm:text-[14px] font-sans text-neutral-800 leading-relaxed font-normal tracking-wide">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Olfactory Architecture Pyramid (Top, Heart, Base Accords) */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-black font-bold">
                        Olfactory Architecture
                      </span>
                      <span className="text-[9.5px] tracking-widest uppercase text-neutral-500 font-semibold">
                        Grasse Botanical Extracts
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {(() => {
                        const notesList = selectedProduct.notes.split('•').map((n) => n.trim());
                        const tiers = ['Top Accord', 'Heart Accord', 'Base Accord'];
                        return notesList.map((note, idx) => (
                          <div
                            key={idx}
                            className="bg-neutral-50 hover:bg-neutral-100/90 transition-colors rounded-xl p-2.5 sm:p-3 border border-black/10 text-center flex flex-col justify-center"
                          >
                            <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.22em] text-[#b4833e] font-bold mb-1">
                              {tiers[idx] || `Note ${idx + 1}`}
                            </span>
                            <span className="text-[11.5px] sm:text-xs font-semibold text-black leading-snug">
                              {note}
                            </span>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Micro Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-neutral-50/70 rounded-xl border border-black/10 text-center text-[10.5px] text-neutral-700 font-medium">
                    <div><strong className="text-black font-bold">50 ml</strong> Flacon</div>
                    <div className="border-x border-black/10"><strong className="text-black font-bold">12+ Hours</strong> Sillage</div>
                    <div><strong className="text-black font-bold">Grasse</strong> France</div>
                  </div>

                </div>

                {/* Direct Ordering Action Buttons */}
                <div className="space-y-2.5 pt-3 border-t border-black/10">

                  {/* Primary WhatsApp Direct Order Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold tracking-widest uppercase text-xs sm:text-[12.5px] flex items-center justify-center space-x-2.5 shadow-[0_6px_22px_rgba(37,211,102,0.32)] transition-all active:scale-98"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Order via WhatsApp</span>
                  </button>

                  {/* Secondary Bag & Wishlist Actions */}
                  <div className="flex items-center space-x-2.5">
                    <button
                      onClick={() => {
                        alert(`Flacon ${selectedProduct.name} acquired.`);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 py-3 px-6 bg-black hover:bg-neutral-800 text-white rounded-2xl font-bold tracking-widest uppercase text-xs flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98"
                    >
                      <ShoppingBag size={14} />
                      <span>Acquire Flacon</span>
                    </button>

                    <button
                      onClick={() => toggleWishlist(selectedProduct.id)}
                      className="w-11 h-11 rounded-2xl border border-black/20 hover:border-black flex items-center justify-center text-black transition-all active:scale-95 bg-white shadow-sm"
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={18}
                        className={wishlist[selectedProduct.id] ? 'fill-red-500 text-red-500' : 'text-black'}
                      />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default CollectionSection;
