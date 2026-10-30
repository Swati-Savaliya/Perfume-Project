import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

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

const territories = [
    {
        id: 'boise',
        num: '01',
        title: 'Boisé Noir',
        family: 'WOODS & BASALT',
        notes: 'Cambodian Oud • Volcanic Cedar • Ambergris',
        price: '₹8,499',
        numericPrice: 8499,
        image: '/images/perfume_noir_splash.jpg',
        glow: 'rgba(56, 189, 248, 0.25)'
    },
    {
        id: 'ambre',
        num: '02',
        title: 'Ambre Royal',
        family: 'MOLTEN GOLD',
        notes: 'Sacred Myrrh • Wild Tonka • Spiced Cardamom',
        price: '₹9,299',
        numericPrice: 9299,
        image: '/images/perfume_amber_splash.jpg',
        glow: 'rgba(245, 158, 11, 0.3)'
    },
    {
        id: 'rose',
        num: '03',
        title: 'Rose Majesté',
        family: 'GRASSE CENTIFOLIA',
        notes: 'Grasse Rose Petals • Pink Pepper • Cashmere Wood',
        price: '₹7,899',
        numericPrice: 7899,
        image: '/images/perfume_rose_splash.jpg',
        glow: 'rgba(244, 63, 94, 0.25)'
    },
    {
        id: 'eclat',
        num: '04',
        title: 'Éclat Solaire',
        family: 'SOLAR JASMINE',
        notes: 'Solar Jasmine • Liquid Honey • Mysore Sandalwood',
        price: '₹8,199',
        numericPrice: 8199,
        image: '/images/perfume_gold_splash.jpg',
        glow: 'rgba(234, 179, 8, 0.3)'
    }
];

const OlfactoryTerritories = () => {
    const { formatPrice } = useShop();
    const [activeIndex, setActiveIndex] = useState(1); // Default to Ambre Royal

    return (
        <section id="territoires" className="relative w-full bg-[#070709] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/30 border-b border-white/[0.08]">
            {/* Ambient Background Radial Atmosphere */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
                style={{ backgroundColor: territories[activeIndex].glow }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Ultra-Minimalist Compact Header */}
                <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] font-sans uppercase tracking-[0.25em] font-semibold backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Four Fragrance Worlds</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-cinzel tracking-wider text-white font-medium">
                        Four Fragrance <span className="font-playfair italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Worlds</span>
                    </h2>

                    <p className="text-neutral-400 text-xs font-sans tracking-wide font-light">
                        Select a world to explore its pure perfume essence.
                    </p>
                </div>

                {/* THE EXPANDING HORIZONTAL PANELS WITH ARCH PORTAL SHAPE */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] gap-3.5">
                    {territories.map((t, idx) => {
                        const isActive = activeIndex === idx;
                        const formattedPrice = formatPrice(t.numericPrice || t.price);
                        const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
                            `Hello, I would like to order ${t.title} (${formattedPrice}, 50ml Extrait de Parfum).`
                        )}`;

                        return (
                            <div
                                key={t.id}
                                onClick={() => setActiveIndex(idx)}
                                onMouseEnter={() => setActiveIndex(idx)}
                                className={`relative rounded-t-full rounded-b-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-out border ${
                                    isActive
                                        ? 'lg:flex-[3.5] border-amber-400/80 shadow-2xl shadow-amber-950/40 h-[380px] lg:h-full'
                                        : 'lg:flex-[1] border-white/10 hover:border-white/30 h-[72px] lg:h-full opacity-70 hover:opacity-100'
                                }`}
                            >
                                {/* Inner Arch Filigree Line */}
                                <div className="absolute inset-2 rounded-t-full rounded-b-[1.6rem] border border-white/15 pointer-events-none z-10" />

                                {/* Full Background Splash Photography */}
                                <img
                                    src={t.image}
                                    alt={t.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
                                />

                                {/* Dark Luxury Overlay */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-700 ${
                                        isActive
                                            ? 'bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-black/40'
                                            : 'bg-black/75 hover:bg-black/55'
                                    }`}
                                />

                                {/* INACTIVE PANEL VIEW: Minimal Vertical/Horizontal Tab */}
                                {!isActive && (
                                    <div className="relative z-10 w-full h-full p-4 lg:pt-6 lg:pb-5 flex lg:flex-col items-center justify-between">
                                        <span className="font-cinzel text-xs tracking-widest text-amber-400 font-bold bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
                                            {t.num}
                                        </span>
                                        <div className="font-cinzel text-sm lg:text-base text-white font-medium tracking-widest lg:[writing-mode:vertical-rl] lg:rotate-180 uppercase">
                                            {t.title}
                                        </div>
                                        <span className="hidden lg:block text-xs text-white/40">✦</span>
                                    </div>
                                )}

                                {/* ACTIVE PANEL VIEW: Expanded Content (Content-Light) */}
                                {isActive && (
                                    <div className="relative z-10 w-full h-full pt-6 px-6 pb-6 sm:pt-7 sm:px-7 sm:pb-7 flex flex-col justify-between animate-fadeIn">
                                        {/* Top Meta inside Arch Dome */}
                                        <div className="flex items-center justify-between">
                                            <span className="font-sans text-[10px] tracking-[0.25em] text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 font-semibold uppercase">
                                                REALM {t.num}
                                            </span>
                                            <span className="font-sans text-[10px] uppercase tracking-widest text-amber-300 font-semibold">
                                                35% Pure Perfume
                                            </span>
                                        </div>

                                        {/* Bottom Information */}
                                        <div className="space-y-3 max-w-lg">
                                            <div>
                                                <div className="text-[10px] font-sans tracking-[0.25em] text-amber-400 uppercase font-semibold">
                                                    {t.family}
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-cinzel text-white font-semibold mt-0.5 tracking-wide">
                                                    {t.title}
                                                </h3>
                                                <p className="text-xs font-sans text-white/80 mt-1 tracking-wide font-light">
                                                    {t.notes}
                                                </p>
                                            </div>

                                            {/* Action Strip */}
                                            <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                                                <div>
                                                    <span className="text-[9px] font-sans uppercase tracking-widest text-white/40 block">Price</span>
                                                    <span className="text-lg font-cinzel font-bold text-white tracking-wide">{formattedPrice}</span>
                                                </div>

                                                <a
                                                    href={whatsappUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs font-sans uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-500/25 active:scale-95 cursor-pointer"
                                                >
                                                    <WhatsAppIcon className="w-3.5 h-3.5" />
                                                    <span>Acquire</span>
                                                    <ArrowUpRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Minimalist Trust Line */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center">
                    <span>100% Grasse Macerated</span>
                    <span className="text-amber-500/60">◆</span>
                    <span>High-Sillage Atomization</span>
                    <span className="text-amber-500/60">◆</span>
                    <span>Complimentary Express Shipping</span>
                </div>
            </div>
        </section>
    );
};

export default OlfactoryTerritories;
