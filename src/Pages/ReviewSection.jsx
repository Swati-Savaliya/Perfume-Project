import React from 'react';
import { Star, CheckCircle2, Sparkles, Quote } from 'lucide-react';

const rowOneReviews = [
    {
        id: 1,
        quote: "Sillage that lasted on my coat for 3 full days. Absolute masterpiece.",
        author: "Julian Vance",
        city: "Paris, France",
        perfume: "Ambre Impérial",
        rating: 5
    },
    {
        id: 2,
        quote: "A fresh dawn Centifolia rose. Deeply modern, aristocratic and dewy.",
        author: "Dr. Elena Rostova",
        city: "Geneva, Switzerland",
        perfume: "Rose Éternelle",
        rating: 5
    },
    {
        id: 3,
        quote: "The icy mountain bergamot opening is pure adrenaline. Worth every rupee.",
        author: "Marcus Sterling",
        city: "London, UK",
        perfume: "Émeraude Noir",
        rating: 5
    },
    {
        id: 4,
        quote: "Wore this to a black-tie gala. An unbroken aura that turns heads everywhere.",
        author: "Ananya Singhania",
        city: "Mumbai, India",
        perfume: "Ambre Impérial",
        rating: 5
    }
];

const rowTwoReviews = [
    {
        id: 5,
        quote: "The 35% oil concentration makes designer perfumes feel like water.",
        author: "Sophie Laurent",
        city: "Milan, Italy",
        perfume: "Santal Royal",
        rating: 5
    },
    {
        id: 6,
        quote: "Smells like stepping directly into an exclusive private salon in Grasse.",
        author: "David Chen",
        city: "Singapore",
        perfume: "Noir Absolu",
        rating: 5
    },
    {
        id: 7,
        quote: "Cold volcanic cedar that evolves hypnotically as skin warms up.",
        author: "Liam Kensington",
        city: "New York, USA",
        perfume: "Émeraude Noir",
        rating: 5
    },
    {
        id: 8,
        quote: "Pure liquid gold. The sacred burning myrrh and tonka are magnetic.",
        author: "Yasmin Al-Mansoor",
        city: "Dubai, UAE",
        perfume: "Ambre Impérial",
        rating: 5
    }
];

const ReviewSection = () => {
    // Duplicate arrays for seamless infinite marquee loop
    const firstRow = [...rowOneReviews, ...rowOneReviews];
    const secondRow = [...rowTwoReviews, ...rowTwoReviews];

    const getInitials = (name) => {
        return name
            .split(' ')
            .filter(Boolean)
            .map((n) => n[0])
            .slice(0, 2)
            .join('');
    };

    return (
        <section id="reviews" className="relative w-full bg-gradient-to-b from-[#f5f7fa] via-[#edf0f4] to-[#e8ecf1] text-black py-16 sm:py-24 overflow-hidden selection:bg-black/10 border-b border-neutral-300/60">
            {/* Custom Marquee Keyframes */}
            <style>{`
                @keyframes marqueeLeft {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee-left {
                    display: flex;
                    width: max-content;
                    animation: marqueeLeft 34s linear infinite;
                }
                .animate-marquee-right {
                    display: flex;
                    width: max-content;
                    animation: marqueeRight 34s linear infinite;
                }
                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Subtle Luxury Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-200/25 via-sky-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Ultra-Minimalist Content-Light Header with Solid Black Text */}
                <div className="text-center max-w-xl mx-auto space-y-2.5 mb-12">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/20 bg-black/5 text-black text-[10px] font-sans uppercase tracking-[0.25em] font-semibold">
                        <Sparkles className="w-3 h-3 text-black animate-pulse" />
                        <span>Verified Customer Reviews</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-cinzel tracking-wider text-black font-semibold leading-tight">
                        Praised Across <span className="font-playfair italic font-normal text-black underline decoration-amber-500/60 underline-offset-6">Paris, London & Mumbai</span>
                    </h2>

                    {/* Overall Rating Score Bar */}
                    <div className="pt-1 flex items-center justify-center gap-2.5">
                        <div className="flex text-amber-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                        </div>
                        <span className="font-cinzel font-bold text-base text-black tracking-wide">4.96 / 5.0</span>
                        <span className="text-black/30 text-xs font-sans">•</span>
                        <span className="text-xs font-sans text-black font-semibold tracking-wider">1,840+ Verified Reviews</span>
                    </div>
                </div>
            </div>

            {/* DUAL INFINITE MARQUEE WITH ALTERNATING LIGHT & DARK CARDS */}
            <div className="space-y-6 overflow-hidden relative">
                {/* Gradient Fade Edges for Editorial Smoothness */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#edf0f4] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#edf0f4] to-transparent z-10 pointer-events-none" />

                {/* ROW 1: Floats Left (Pattern: Light -> Dark -> Light -> Dark) */}
                <div className="animate-marquee-left gap-5 flex items-center">
                    {firstRow.map((rev, idx) => {
                        const isDark = idx % 2 === 1;

                        return (
                            <div
                                key={`row1-${rev.id}-${idx}`}
                                className={`group relative w-[280px] sm:w-[360px] pt-7 sm:pt-8 px-5 sm:px-6 pb-5 sm:pb-6 rounded-t-full rounded-b-2xl transition-all duration-500 flex flex-col justify-between shrink-0 hover:-translate-y-1.5 ${
                                    isDark
                                        ? 'bg-[#0e0e11] text-white border border-amber-500/30 shadow-xl shadow-black/30 hover:border-amber-400 hover:shadow-amber-950/40'
                                        : 'bg-white text-black border border-neutral-300 shadow-md hover:border-black/50 hover:shadow-xl'
                                }`}
                            >
                                {/* Inner Delicate Arch Filigree Line */}
                                <div
                                    className={`absolute inset-2 rounded-t-full rounded-b-xl border pointer-events-none transition-colors ${
                                        isDark
                                            ? 'border-white/10 group-hover:border-amber-400/30'
                                            : 'border-black/[0.06] group-hover:border-black/20'
                                    }`}
                                />

                                <div>
                                    {/* Top Arch Center: Quote Medallion & Rating */}
                                    <div className="flex flex-col items-center text-center mb-3">
                                        <div
                                            className={`w-7 h-7 rounded-full flex items-center justify-center mb-2 shadow-2xs ${
                                                isDark
                                                    ? 'bg-amber-500/20 border border-amber-400/30 text-amber-300'
                                                    : 'bg-black/5 border border-black/15 text-black'
                                            }`}
                                        >
                                            <Quote className="w-3.5 h-3.5 fill-current" />
                                        </div>

                                        <div className="flex text-amber-500 mb-1">
                                            {[...Array(rev.rating)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-current" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Short Punchy 1-Line Quote */}
                                    <p
                                        className={`text-sm sm:text-[15px] font-cormorant font-normal italic leading-relaxed text-center tracking-wide ${
                                            isDark ? 'text-white/95' : 'text-black'
                                        }`}
                                    >
                                        "{rev.quote}"
                                    </p>
                                </div>

                                {/* Card Bottom: Author & Perfume Tag */}
                                <div
                                    className={`mt-5 pt-3.5 border-t flex items-center justify-between ${
                                        isDark ? 'border-white/10' : 'border-neutral-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        {/* Monogram Avatar Circle */}
                                        <div
                                            className={`w-8 h-8 rounded-full font-cinzel text-xs font-bold flex items-center justify-center shadow-2xs ${
                                                isDark
                                                    ? 'bg-gradient-to-tr from-amber-950 to-neutral-900 border border-amber-500/50 text-amber-300'
                                                    : 'bg-black/5 border border-black/20 text-black'
                                            }`}
                                        >
                                            {getInitials(rev.author)}
                                        </div>
                                        <div>
                                            <span
                                                className={`font-cinzel font-semibold text-xs tracking-wider block leading-tight ${
                                                    isDark ? 'text-white' : 'text-black'
                                                }`}
                                            >
                                                {rev.author}
                                            </span>
                                            <span
                                                className={`text-[10px] font-sans tracking-wide ${
                                                    isDark ? 'text-neutral-400' : 'text-black/60'
                                                }`}
                                            >
                                                {rev.city}
                                            </span>
                                        </div>
                                    </div>

                                    <span
                                        className={`text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 rounded-lg border font-semibold shadow-2xs ${
                                            isDark
                                                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                                                : 'bg-black/5 text-black border-black/15'
                                        }`}
                                    >
                                        {rev.perfume}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ROW 2: Floats Right (Pattern: Dark -> Light -> Dark -> Light) */}
                <div className="animate-marquee-right gap-5 flex items-center">
                    {secondRow.map((rev, idx) => {
                        const isDark = idx % 2 === 0;

                        return (
                            <div
                                key={`row2-${rev.id}-${idx}`}
                                className={`group relative w-[280px] sm:w-[360px] pt-7 sm:pt-8 px-5 sm:px-6 pb-5 sm:pb-6 rounded-t-full rounded-b-2xl transition-all duration-500 flex flex-col justify-between shrink-0 hover:-translate-y-1.5 ${
                                    isDark
                                        ? 'bg-[#0e0e11] text-white border border-amber-500/30 shadow-xl shadow-black/30 hover:border-amber-400 hover:shadow-amber-950/40'
                                        : 'bg-white text-black border border-neutral-300 shadow-md hover:border-black/50 hover:shadow-xl'
                                }`}
                            >
                                {/* Inner Delicate Arch Filigree Line */}
                                <div
                                    className={`absolute inset-2 rounded-t-full rounded-b-xl border pointer-events-none transition-colors ${
                                        isDark
                                            ? 'border-white/10 group-hover:border-amber-400/30'
                                            : 'border-black/[0.06] group-hover:border-black/20'
                                    }`}
                                />

                                <div>
                                    {/* Top Arch Center: Quote Medallion & Rating */}
                                    <div className="flex flex-col items-center text-center mb-3">
                                        <div
                                            className={`w-7 h-7 rounded-full flex items-center justify-center mb-2 shadow-2xs ${
                                                isDark
                                                    ? 'bg-amber-500/20 border border-amber-400/30 text-amber-300'
                                                    : 'bg-black/5 border border-black/15 text-black'
                                            }`}
                                        >
                                            <Quote className="w-3.5 h-3.5 fill-current" />
                                        </div>

                                        <div className="flex text-amber-500 mb-1">
                                            {[...Array(rev.rating)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-current" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Short Punchy 1-Line Quote */}
                                    <p
                                        className={`text-sm sm:text-[15px] font-cormorant font-normal italic leading-relaxed text-center tracking-wide ${
                                            isDark ? 'text-white/95' : 'text-black'
                                        }`}
                                    >
                                        "{rev.quote}"
                                    </p>
                                </div>

                                {/* Card Bottom: Author & Perfume Tag */}
                                <div
                                    className={`mt-5 pt-3.5 border-t flex items-center justify-between ${
                                        isDark ? 'border-white/10' : 'border-neutral-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        {/* Monogram Avatar Circle */}
                                        <div
                                            className={`w-8 h-8 rounded-full font-cinzel text-xs font-bold flex items-center justify-center shadow-2xs ${
                                                isDark
                                                    ? 'bg-gradient-to-tr from-amber-950 to-neutral-900 border border-amber-500/50 text-amber-300'
                                                    : 'bg-black/5 border border-black/20 text-black'
                                            }`}
                                        >
                                            {getInitials(rev.author)}
                                        </div>
                                        <div>
                                            <span
                                                className={`font-cinzel font-semibold text-xs tracking-wider block leading-tight ${
                                                    isDark ? 'text-white' : 'text-black'
                                                }`}
                                            >
                                                {rev.author}
                                            </span>
                                            <span
                                                className={`text-[10px] font-sans tracking-wide ${
                                                    isDark ? 'text-neutral-400' : 'text-black/60'
                                                }`}
                                            >
                                                {rev.city}
                                            </span>
                                        </div>
                                    </div>

                                    <span
                                        className={`text-[10px] font-sans uppercase tracking-wider px-2.5 py-1 rounded-lg border font-semibold shadow-2xs ${
                                            isDark
                                                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                                                : 'bg-black/5 text-black border-black/15'
                                        }`}
                                    >
                                        {rev.perfume}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Minimalist Trust Line with Black Text */}
            <div className="mt-10 max-w-7xl mx-auto px-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-sans text-black font-semibold uppercase tracking-[0.22em]">
                    <span>100% Authentic French Ingredients</span>
                    <span className="text-black/40">◆</span>
                    <span>35% Pure Perfume Concentration</span>
                    <span className="text-black/40">◆</span>
                    <span>Complimentary Express Shipping</span>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
