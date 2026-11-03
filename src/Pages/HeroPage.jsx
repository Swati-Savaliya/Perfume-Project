import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const perfumes = [
    {
        id: 'emeraude-noir',
        num: '01',
        edition: 'ÉDITION ROYALE SIGNATURE',
        title: 'COAG THE KING',
        subtitle: 'Eau de Parfum • 50 ML / 1.7 FL. OZ.',
        desc: 'A nocturnal rush of cold mountain bergamot and molten amber resin splashing upon ancient volcanic cedar. Clean, crisp, and commanding for office meetings and champion distinction.',
        notes: ['Calabrian Bergamot', 'Tuscan Cedar', 'Golden Amber'],
        price: '₹999',
        numericPrice: 999,
        image: '/images/perfume_coag_king_floral_studio.jpg',
        glow: 'rgba(255, 255, 255, 0.16)',
    },
    {
        id: 'ambre-imperial',
        num: '02',
        edition: 'MAJESTÉ ORIENTALE & FLORALE',
        title: 'COAG THE QUEEN',
        subtitle: 'Eau de Parfum • 50 ML / 1.7 FL. OZ.',
        desc: 'A regal eruption of smoked cardamom, scorched wild tonka, and sacred myrrh steeped in molten gold. Rich oriental warmth tailored for intimate date nights and unforgettable clubbing.',
        notes: ['Smoked Cardamom', 'Charred Tonka', 'Sacred Myrrh'],
        price: '₹799',
        numericPrice: 799,
        image: '/images/perfume_coag_cylindrical_pink_white.jpg',
        glow: 'rgba(244, 114, 182, 0.22)',
    },
    {
        id: 'rose-eternelle',
        num: '03',
        edition: 'TRAVERTINE & WHITE FLORAL',
        title: 'COAG THE LAGACY',
        subtitle: 'Eau de Parfum • 50 ML / 1.7 FL. OZ.',
        desc: 'An iconic porcelain-white flacon crowned with polished gold and satin black. Dawn gardenias, crystalline amber, and velvety cashmere on a natural travertine plinth for timeless distinction.',
        notes: ['White Gardenia', 'Golden Amber', 'Cashmere Woods'],
        price: '₹1,199',
        numericPrice: 1199,
        image: '/images/perfume_coag_lagacy_creative.jpg',
        glow: 'rgba(245, 158, 11, 0.20)',
    },
    {
        id: 'coag-antique',
        num: '04',
        edition: 'HERITAGE ENGLISH ROSES',
        title: 'COAG THE ANTIQUE',
        subtitle: 'Eau de Parfum • 50 ML / 1.7 FL. OZ.',
        desc: 'An iconic antique porcelain-white flacon crowned with polished gold and satin black, poised gracefully on a classical pedestal surrounded by blooming antique English garden roses and blush peonies.',
        notes: ['Antique English Rose', 'Blush Peony', 'Royal Amber'],
        price: '₹1,249',
        numericPrice: 1249,
        image: '/images/perfume_coag_antique_roses.jpg',
        glow: 'rgba(225, 29, 72, 0.22)',
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

                    {/* Left Column: High-End Magazine Editorial Presentation (Smooth 5s luxury fade) */}
                    <div key={active.id} className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 z-10 animate-luxury-fade">

                        {/* Edition Eyebrow */}
                        <div className="flex items-center space-x-3 text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase">
                            <span className="font-mono text-amber-400 font-semibold">{active.num}</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-neutral-400 font-medium tracking-[0.22em]">{active.edition}</span>
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
                                <span>Acquire Flacon</span>
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

                        {/* Clean Hero Artwork Canvas */}
                        <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 bg-black group">
                            <img
                                key={active.id}
                                src={active.image}
                                alt={active.title}
                                className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-102 animate-luxury-fade"
                            />

                            {/* Subtle Edge Vignette to blend with deep background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

                            {/* Active badge overlay at bottom right of image */}
                            <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest text-amber-300">
                                {active.num} / 04
                            </div>
                        </div>

                        {/* 4 Interactive Switcher Thumbnails below image */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-2.5 pt-4 z-10 w-full max-w-[460px]">
                            {perfumes.map((p, idx) => (
                                <button
                                    key={p.id}
                                    onClick={() => setCurrent(idx)}
                                    className={`group flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 py-1.5 px-2 rounded-xl border transition-all cursor-pointer ${
                                        current === idx
                                            ? 'border-amber-400 bg-amber-400/10 shadow-[0_0_15px_rgba(251,191,36,0.25)]'
                                            : 'border-white/10 bg-black/40 hover:border-white/30 text-neutral-400 hover:text-white'
                                    }`}
                                    title={p.title}
                                >
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg object-cover border transition-all ${
                                            current === idx ? 'border-amber-400' : 'border-white/10 group-hover:border-white/30'
                                        }`}
                                    />
                                    <span className={`text-[9.5px] uppercase font-bold tracking-wider hidden sm:inline ${
                                        current === idx ? 'text-amber-300' : 'text-neutral-400'
                                    }`}>
                                        {p.title.replace('COAG THE ', '').replace('COAG ', '')}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroPage;
