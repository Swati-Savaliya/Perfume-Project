import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const perfumes = [
    {
        id: 'noir-absolu',
        num: '01',
        edition: 'ÉDITION NOIR & MINÉRAL',
        title: 'NOIR ABSOLU',
        subtitle: 'Extrait de Parfum • 100 ML / 3.4 FL. OZ.',
        desc: 'An architectural study in contrasts. Crystalline obsidian micro-mist exploding upon mirror-wet basalt.',
        notes: ['Black Pepper', 'Smoky Vetiver', 'White Ambergris'],
        price: '₹310',
        image: '/images/perfume_noir_splash.jpg',
        glow: 'rgba(255, 255, 255, 0.14)',
    },
    {
        id: 'emeraude-noir',
        num: '02',
        edition: 'SIGNATURE FOREST ESSENCE',
        title: 'ÉMERAUDE NOIR',
        subtitle: 'Extrait de Parfum • 100 ML / 3.4 FL. OZ.',
        desc: 'A nocturnal rush of cold mountain bergamot and molten amber resin splashing upon ancient volcanic cedar.',
        notes: ['Calabrian Bergamot', 'Tuscan Cedar', 'Liquid Amber'],
        price: '₹285',
        image: '/images/perfume_emerald_splash.jpg',
        glow: 'rgba(16, 185, 129, 0.18)',
    },
    {
        id: 'ambre-imperial',
        num: '03',
        edition: 'COLLECTION ORIENTALE',
        title: 'AMBRE IMPÉRIAL',
        subtitle: 'Extrait de Parfum • 100 ML / 3.4 FL. OZ.',
        desc: 'A regal eruption of smoked cardamom, scorched wild tonka, and sacred myrrh steeped in molten gold.',
        notes: ['Smoked Cardamom', 'Charred Wild Tonka', 'Sacred Myrrh'],
        price: '₹295',
        image: '/images/perfume_amber_splash.jpg',
        glow: 'rgba(245, 158, 11, 0.18)',
    },
    {
        id: 'rose-eternelle',
        num: '04',
        edition: 'MAJESTÉ FLORALE',
        title: 'ROSE ÉTERNELLE',
        subtitle: 'Extrait de Parfum • 100 ML / 3.4 FL. OZ.',
        desc: 'Dawn-harvested Centifolia roses draped in crisp pink peppercorn and velvety cashmere woods.',
        notes: ['Damask Rose', 'Pink Peppercorn', 'Cashmere Woods'],
        price: '₹320',
        image: '/images/perfume_rose_splash.jpg',
        glow: 'rgba(225, 29, 72, 0.18)',
    },
];

const HeroPage = () => {
    const [current, setCurrent] = useState(0);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const active = perfumes[current];

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
            className="relative w-full bg-[#0a0a0c] text-white overflow-hidden py-10 lg:py-12 min-h-[500px] lg:h-[550px] flex items-center border-b border-white/[0.08]"
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
            <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                    {/* Left Column: High-End Magazine Editorial Presentation (Smooth 5s luxury fade) */}
                    <div key={active.id} className="lg:col-span-6 flex flex-col justify-center space-y-5 z-10 animate-luxury-fade">

                        {/* Edition Eyebrow */}
                        <div className="flex items-center space-x-3 text-[11px] tracking-[0.28em] uppercase">
                            <span className="font-mono text-amber-400 font-semibold">{active.num}</span>
                            <span className="w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-neutral-400 font-medium tracking-[0.22em]">{active.edition}</span>
                        </div>

                        {/* Perfume Grand Title & Subtitle */}
                        <div className="space-y-1.5">
                            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-light tracking-[0.03em] text-white leading-[1.08]">
                                {active.title}
                            </h1>
                            <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-amber-300/80 font-medium pt-0.5">
                                {active.subtitle}
                            </p>
                        </div>

                        {/* Editorial Narrative Description (Clean, Readable, No Quotes) */}
                        <p className="text-sm sm:text-[15px] font-sans font-light text-neutral-300 leading-relaxed max-w-lg tracking-wide">
                            {active.desc}
                        </p>

                        {/* Structured Olfactory Notes Block */}
                        <div className="pt-3.5 pb-1 border-t border-white/10 max-w-lg space-y-1.5">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                                Key Olfactory Notes
                            </p>
                            <p className="text-xs sm:text-[13px] text-neutral-200 font-light tracking-wide">
                                {active.notes.join('   •   ')}
                            </p>
                        </div>

                        {/* Haute Actions */}
                        <div className="pt-2 flex items-center gap-4 flex-wrap">
                            <button
                                className="px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-all duration-300 rounded-full text-xs uppercase tracking-[0.22em] font-medium flex items-center space-x-2.5 shadow-[0_4px_25px_rgba(255,255,255,0.15)] active:scale-95"
                            >
                                <span>Acquire Flacon</span>
                                <span className="opacity-30">•</span>
                                <span>{active.price}</span>
                                <ArrowRight size={13} className="ml-1" />
                            </button>

                            <button
                                className="px-7 py-3.5 border border-white/20 hover:border-white/50 text-neutral-300 hover:text-white bg-white/[0.02] backdrop-blur-sm transition-all duration-300 rounded-full text-xs uppercase tracking-[0.22em] font-medium active:scale-95"
                            >
                                Discover Accord
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Pure Haute Flacon Hero Visual */}
                    <div className="lg:col-span-6 relative flex flex-col items-center justify-center">

                        {/* Ambient Backlight Spotlight */}
                        <div
                            className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 transition-all duration-1000"
                            style={{ backgroundColor: active.glow }}
                        />

                        {/* Clean Hero Artwork Canvas (Uncluttered, No Overlay Bars) */}
                        <div className="relative w-full max-w-[600px] aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 bg-black group">
                            <img
                                key={active.id}
                                src={active.image}
                                alt={active.title}
                                className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-102 animate-luxury-fade"
                            />

                            {/* Subtle Edge Vignette to blend with deep background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroPage;
