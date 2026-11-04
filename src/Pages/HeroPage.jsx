import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const perfumes = [
    {
        id: 'emeraude-noir',
        num: '01',
        shortTitle: 'KING',
        edition: 'ROYAL FRESH WOODY & AMBER SPRAY',
        title: 'COAG THE KING',
        subtitle: 'Eau de Parfum Spray • 50 ML / 1.7 FL. OZ.',
        desc: 'An invigorating extrait spray engineered for commanding distinction. Opens with a crisp micro-mist of Calabrian bergamot and Tuscan volcanic cedar, drying down into molten golden amber with 24-hour masculine projection.',
        notes: ['Calabrian Bergamot', 'Tuscan Cedar', 'Golden Amber'],
        price: '₹999',
        numericPrice: 999,
        image: '/images/perfume_coag_king_floral_studio.jpg',
        glow: 'rgba(255, 255, 255, 0.16)',
    },
    {
        id: 'ambre-imperial',
        num: '02',
        shortTitle: 'QUEEN',
        edition: 'WARM ORIENTAL & FLORAL SPRAY',
        title: 'COAG THE QUEEN',
        subtitle: 'Eau de Parfum Spray • 50 ML / 1.7 FL. OZ.',
        desc: 'A luxurious oriental fragrance spray crafted for unforgettable evenings. Infused with warm smoked cardamom, charred tonka, and sacred myrrh steeped in rich golden amber for an irresistible, seductive scent trail.',
        notes: ['Smoked Cardamom', 'Charred Tonka', 'Sacred Myrrh'],
        price: '₹799',
        numericPrice: 799,
        image: '/images/perfume_coag_cylindrical_pink_white.jpg',
        glow: 'rgba(244, 114, 182, 0.22)',
    },
    {
        id: 'rose-eternelle',
        num: '03',
        shortTitle: 'LAGACY',
        edition: 'LUMINOUS WHITE FLORAL SPRAY',
        title: 'COAG THE LAGACY',
        subtitle: 'Eau de Parfum Spray • 50 ML / 1.7 FL. OZ.',
        desc: 'An opulent white floral extrait spray with an ultra-fine mist dispersion. Fresh dawn gardenias, crystalline amber, and velvety cashmere woods create an airy, sophisticated aura with all-day compliment projection.',
        notes: ['White Gardenia', 'Golden Amber', 'Cashmere Woods'],
        price: '₹1,199',
        numericPrice: 1199,
        image: '/images/perfume_coag_lagacy_creative.jpg',
        glow: 'rgba(245, 158, 11, 0.20)',
    },
    {
        id: 'coag-antique',
        num: '04',
        shortTitle: 'ANTIQUE',
        edition: 'VINTAGE ENGLISH ROSE SPRAY',
        title: 'COAG THE ANTIQUE',
        subtitle: 'Eau de Parfum Spray • 50 ML / 1.7 FL. OZ.',
        desc: 'A prestige rose extrait spray atomizing dewy English garden rose petals, blush peonies, and warm royal ambergris into a velvety mist. Formulated for a timeless aristocratic presence and deep lasting sillage.',
        notes: ['Antique English Rose', 'Blush Peony', 'Royal Amber'],
        price: '₹1,249',
        numericPrice: 1249,
        image: '/images/perfume_coag_antique_roses.jpg',
        glow: 'rgba(225, 29, 72, 0.22)',
    },
    {
        id: 'gift-royal-coffret',
        num: '05',
        shortTitle: 'GIFT SET',
        edition: 'HAUTE LUXURY GIFT PRESENTATION',
        title: 'COAG THE ROYAL SIGNATURE',
        subtitle: 'Dual Extraits • Travel Sprays • Leather Suite',
        desc: 'The definitive Haute Parfumerie signature gift coffret. Handcrafted matte presentation box unveiling dual luxury extraits (The King & The Antique), discovery travel sprays, paired with an Italian-stitched cardholder wallet and mirror-polished chrome keychain.',
        notes: ['Dual 50ml Extraits', 'Italian Leather Wallet', 'Chrome Keepsake'],
        price: '₹2,799',
        numericPrice: 2799,
        image: '/images/gift_package_packing_1.jpg',
        glow: 'rgba(251, 191, 36, 0.22)',
    },
];

const HeroPage = ({ onExploreCollection }) => {
    const { formatPrice } = useShop();
    const [current, setCurrent] = useState(0);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const active = perfumes[current];

    const handleExplore = () => {
        if (onExploreCollection) {
            onExploreCollection();
        } else {
            window.location.hash = '#collection';
        }
    };

    // Auto-play interval: changes image and text every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % perfumes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const handleNext = () => setCurrent((prev) => (prev + 1) % perfumes.length);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + perfumes.length) % perfumes.length);

    return (
        <section
            id="home"
            className="relative w-full bg-[#0a0a0c] text-white overflow-hidden py-8 sm:py-10 lg:py-12 min-h-auto lg:min-h-[580px] flex items-center border-b border-white/[0.08]"
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchMove={(e) => (touchEnd.current = e.touches[0].clientX)}
            onTouchEnd={() => {
                const diff = touchStart.current - touchEnd.current;
                if (Math.abs(diff) > 40) {
                    if (diff > 0) handleNext();
                    else handlePrev();
                }
            }}
            aria-label="COAG Haute Parfumerie Masterpiece Showcase"
        >
            {/* Background Radial Atmosphere */}
            <div
                className="pointer-events-none absolute right-[15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 ease-out"
                style={{ backgroundColor: active.glow }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-[#0a0a0c] opacity-60" />

            {/* Main Container — Aligned with Header Width */}
            <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                    {/* Left Column: High-End Magazine Editorial Presentation (Smooth Silk Luxury Fade) */}
                    <div key={active.id} className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 z-10 animate-hero-silk">

                        {/* Edition Eyebrow */}
                        <div className="text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase">
                            <span className="text-amber-400/90 font-medium tracking-[0.22em]">{active.edition}</span>
                        </div>

                        {/* Perfume Grand Title & Subtitle */}
                        <div className="space-y-1 sm:space-y-1.5">
                            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light tracking-[0.03em] text-white leading-[1.08]">
                                {active.title}
                            </h1>
                            <p className="text-[10.5px] sm:text-xs tracking-[0.28em] uppercase text-amber-300/80 font-medium pt-0.5">
                                {active.subtitle}
                            </p>
                        </div>

                        {/* Editorial Narrative Description (Clean, Readable, No Quotes) */}
                        <p className="text-xs sm:text-sm lg:text-[15px] font-sans font-light text-neutral-300 leading-relaxed max-w-lg tracking-wide">
                            {active.desc}
                        </p>

                        {/* Structured Olfactory Notes Block */}
                        <div className="pt-3 pb-1 border-t border-white/10 max-w-lg space-y-1">
                            <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                                Key Olfactory Notes
                            </p>
                            <p className="text-xs sm:text-[13px] text-neutral-200 font-light tracking-wide">
                                {active.notes.join('   •   ')}
                            </p>
                        </div>

                        {/* Haute Actions */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                            <button
                                onClick={handleExplore}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black hover:bg-neutral-200 transition-all duration-300 rounded-full text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center space-x-2.5 shadow-[0_4px_25px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer"
                            >
                                <span>{active.id?.startsWith('gift') ? 'Acquire Gift Suite' : 'Acquire Spray'}</span>
                                <span className="opacity-30">•</span>
                                <span>{formatPrice(active.numericPrice || active.price)}</span>
                                <ArrowRight size={13} className="ml-1" />
                            </button>

                            <button
                                onClick={handleExplore}
                                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 border border-white/20 hover:border-white/50 text-neutral-300 hover:text-white bg-white/[0.02] backdrop-blur-sm transition-all duration-300 rounded-full text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center active:scale-95 cursor-pointer"
                            >
                                Explore Collection
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Pure Haute Flacon Hero Visual & Quick Switcher */}
                    <div className="lg:col-span-6 relative flex flex-col items-center justify-center">

                        {/* Ambient Backlight Spotlight */}
                        <div
                            className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 transition-all duration-1000"
                            style={{ backgroundColor: active.glow }}
                        />

                        {/* Clean Hero Artwork Canvas with Silk Layered Crossfade */}
                        <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 bg-black group">
                            {perfumes.map((p, idx) => {
                                const isActive = current === idx;
                                return (
                                    <div
                                        key={p.id}
                                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${isActive
                                                ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                                                : 'opacity-0 scale-105 z-0 pointer-events-none'
                                            }`}
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                );
                            })}

                            {/* Subtle Edge Vignette to blend with deep background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none z-20" />

                            {/* Subtle Luxury Nav Arrows on Hover / Touch */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                                title="Previous Masterpiece"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                                title="Next Masterpiece"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroPage;
