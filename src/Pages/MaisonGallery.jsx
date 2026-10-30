import React from 'react';
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

const chapters = [
    {
        num: "01",
        time: "MORNING AWAKENING",
        name: "Emeraude Noir",
        tagline: "Cold mountain bergamot upon ancient volcanic cedar.",
        notes: "Bergamot • Volcanic Cedar • Amber",
        price: "₹8,499",
        numericPrice: 8499,
        image: "/images/hero_perfume.jpg",
        accent: "text-emerald-400"
    },
    {
        num: "02",
        time: "TWILIGHT EMBRACE",
        name: "Eternal Rose",
        tagline: "Dawn fresh roses draped in soft cashmere woods.",
        notes: "French Rose • Pink Pepper • Cashmere",
        price: "₹7,899",
        numericPrice: 7899,
        image: "/images/perfume_rose.jpg",
        accent: "text-rose-300"
    },
    {
        num: "03",
        time: "MIDNIGHT MYSTERY",
        name: "Amber Imperial",
        tagline: "Sacred warm myrrh and smoked woody amber.",
        notes: "Smoked Cardamom • Wild Tonka • Myrrh",
        price: "₹9,299",
        numericPrice: 9299,
        image: "/images/perfume_amber.jpg",
        accent: "text-amber-300"
    }
];

const MaisonGallery = () => {
    const { formatPrice } = useShop();
    return (
        <section id="maison" className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#f1f3f6] to-[#e9edf3] text-neutral-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/20 border-b border-neutral-300/60">
            {/* Subtle luxury ambient warm glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-200/25 via-rose-100/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Minimalist Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#121214] text-white text-[11px] font-sans uppercase tracking-[0.28em] font-semibold shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-white">Three Signature Fragrances</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel tracking-wider text-black font-semibold leading-tight">
                        Three Moments of <span className="font-playfair italic font-normal text-black underline decoration-amber-500/60 underline-offset-8">Fragrance</span>
                    </h2>

                    <p className="text-neutral-700 text-xs sm:text-base font-sans font-normal leading-relaxed">
                        From the crisp awakening of dawn to the hypnotic embrace of midnight.
                    </p>
                </div>

                {/* 3 French Cathedral Arch Cards (Unique Luxury Arch Shape) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {chapters.map((item) => {
                        const formattedPrice = formatPrice(item.numericPrice || item.price);
                        const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
                            `Hello, I would like to acquire ${item.name} (${formattedPrice}, 50ml Extrait de Parfum).`
                        )}`;

                        return (
                            <div
                                key={item.num}
                                className="group relative h-[500px] sm:h-[580px] lg:h-[640px] rounded-t-full rounded-b-[2.5rem] overflow-hidden border border-amber-900/15 shadow-2xl shadow-amber-950/10 flex flex-col justify-between pt-10 sm:pt-14 px-5 sm:px-7 pb-6 sm:pb-8 transition-all duration-700 hover:shadow-2xl hover:border-amber-400/80 hover:-translate-y-1.5"
                            >
                                {/* Inner French Arch Filigree Border */}
                                <div className="absolute inset-2.5 rounded-t-full rounded-b-[2rem] border border-white/20 pointer-events-none z-10 group-hover:border-amber-400/50 transition-colors duration-500" />

                                {/* Full Background Photography with Smooth Hover Zoom */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                                />

                                {/* Luxury Film Vignette Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-neutral-950/40 group-hover:from-neutral-950/95 transition-colors duration-500" />

                                {/* Top Arch Apex: Chapter Badge */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="font-sans text-xs tracking-[0.25em] font-bold text-white/95 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                                        CHAPTER {item.num}
                                    </div>
                                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-amber-300 font-semibold mt-2">
                                        50ml Pure Perfume
                                    </span>
                                </div>

                                {/* Bottom Info: Title, Notes & Order Button */}
                                <div className="relative z-10 space-y-4">
                                    <div>
                                        <div className={`text-[11px] font-sans tracking-[0.22em] uppercase font-bold ${item.accent}`}>
                                            {item.time}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-cinzel text-white font-semibold tracking-wide mt-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm font-playfair italic text-white/90 mt-1.5 leading-relaxed">
                                            "{item.tagline}"
                                        </p>
                                        <div className="text-xs font-sans font-medium text-amber-200/90 tracking-wider mt-2 uppercase">
                                            {item.notes}
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-sans tracking-widest uppercase text-white/60 block font-semibold">Price</span>
                                            <span className="text-2xl font-cinzel font-semibold text-white tracking-wider">{formattedPrice}</span>
                                        </div>

                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-amber-400 text-neutral-950 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-amber-400/30 active:scale-95 cursor-pointer"
                                        >
                                            <WhatsAppIcon className="w-3.5 h-3.5" />
                                            <span>Acquire</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Minimalist Trust Line */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs font-sans tracking-[0.2em] text-black font-semibold uppercase text-center">
                    <span>Macerated in Grasse</span>
                    <span className="text-amber-600">◆</span>
                    <span>30% — 35% Pure Extrait Concentration</span>
                    <span className="text-amber-600">◆</span>
                    <span>Complimentary Express Delivery</span>
                </div>
            </div>
        </section>
    );
};

export default MaisonGallery;
