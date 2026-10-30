import React, { useState } from 'react';
import {
    Sparkles,
    ShoppingBag,
    Check,
    X,
    Star,
    ArrowRight,
    Gift,
    ShieldCheck,
    Truck,
    RotateCcw,
    Award,
    Heart
} from 'lucide-react';
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

const samplePerfumes = [
    {
        id: 'emeraude-noir',
        name: 'Émeraude Noir',
        category: 'Woody & Resinous',
        concentration: '30% Extrait',
        image: '/images/hero_perfume.jpg',
        notes: ['Calabrian Bergamot', 'Tuscan Cedar', 'Golden Amber'],
        vibe: 'Cold mountain mist over ancient volcanic cedar.'
    },
    {
        id: 'ambre-imperial',
        name: 'Ambre Impérial',
        category: 'Warm Amber & Resin',
        concentration: '35% Extrait',
        image: '/images/perfume_amber.jpg',
        notes: ['Smoked Cardamom', 'Charred Tonka', 'Sacred Myrrh'],
        vibe: 'A regal eruption of golden resin and smoked spices.'
    },
    {
        id: 'rose-eternelle',
        name: 'Rose Éternelle',
        category: 'Majesté Florale',
        concentration: '28% Extrait',
        image: '/images/perfume_rose.jpg',
        notes: ['Damask Rose', 'Pink Peppercorn', 'Cashmere Woods'],
        vibe: 'Dawn-harvested Grasse roses bathed in pink pepper.'
    },
    {
        id: 'noir-absolu',
        name: 'Noir Absolu',
        category: 'Mineral & Smoky',
        concentration: '32% Extrait',
        image: '/images/perfume_noir_still.jpg',
        notes: ['Black Pepper', 'Smoky Vetiver', 'White Ambergris'],
        vibe: 'Crystalline obsidian mist colliding with volcanic basalt.'
    },
    {
        id: 'santal-royal',
        name: 'Santal Royal',
        category: 'Sacred Woods',
        concentration: '30% Extrait',
        image: '/images/perfume_santal.jpg',
        notes: ['Mysore Sandalwood', 'Orris Butter', 'Bourbon Vanilla'],
        vibe: 'Creamy noble sandalwood aged in oak barrels.'
    },
    {
        id: 'eclat-dor',
        name: "Éclat d'Or",
        category: 'Solar Amber',
        concentration: '26% Extrait',
        image: '/images/perfume_gold.jpg',
        notes: ['Solar Jasmine', 'Warm Honey', 'Liquid Gold'],
        vibe: 'Intoxicating drape of solar warmth and white florals.'
    }
];

const pressQuotes = [
    {
        press: 'VOGUE',
        quote: 'COAG redefines contemporary French perfumery. The longevity and projection on skin is nothing short of breathtaking.',
        date: 'Haute Parfumerie Review'
    },
    {
        press: 'GQ',
        quote: 'The Ambre Impérial is an instant modern masterpiece. A regal, smoky sillage that commands absolute attention in any room.',
        date: "Gentleman's Choice"
    },
    {
        press: 'HARPER’S BAZAAR',
        quote: 'The Bespoke Discovery Coffret is the smartest luxury purchase of the year. Exceptional maceration quality delivered to your door.',
        date: 'Beauty Edit'
    },
    {
        press: 'ELLE',
        quote: 'Like stepping directly into an exclusive private salon in Grasse. Pure sensory poetry bottled at the highest extrait concentration.',
        date: 'Luxury Fragrance Awards'
    }
];

const boxColors = [
    { id: 'obsidian', name: 'Obsidian Velvet', hex: 'bg-neutral-900 border-neutral-700 text-white' },
    { id: 'emerald', name: 'Emerald Silk', hex: 'bg-[#0f2e23] border-emerald-700 text-emerald-100' },
    { id: 'ivory', name: 'Imperial Ivory', hex: 'bg-[#f4efe6] border-amber-300 text-amber-950' }
];

const DiscoverySection = () => {
    // 4 Slots in the Coffret (max 4 selected samples)
    const [selectedVials, setSelectedVials] = useState([
        samplePerfumes[0],
        samplePerfumes[1]
    ]);
    const { formatPrice } = useShop();
    const [activeBoxColor, setActiveBoxColor] = useState('obsidian');
    const [includeGiftWrap, setIncludeGiftWrap] = useState(true);

    const coffretPriceFormatted = formatPrice(1199);

    const toggleVial = (perfume) => {
        const isAlreadyAdded = selectedVials.some((v) => v.id === perfume.id);
        if (isAlreadyAdded) {
            setSelectedVials(selectedVials.filter((v) => v.id !== perfume.id));
        } else {
            if (selectedVials.length < 4) {
                setSelectedVials([...selectedVials, perfume]);
            }
        }
    };

    const removeVial = (index) => {
        const updated = [...selectedVials];
        updated.splice(index, 1);
        setSelectedVials(updated);
    };

    const isComplete = selectedVials.length === 4;

    const whatsappMessage = encodeURIComponent(
        `Hello COAG Haute Parfumerie, I would like to order the Custom 4-Piece Discovery Coffret (${boxColors.find(b => b.id === activeBoxColor)?.name}) containing:\n` +
        selectedVials.map((v, i) => `${i + 1}. ${v.name} (5ml Extrait)`).join('\n') +
        `\n\nPrice: ${coffretPriceFormatted} (Includes ${coffretPriceFormatted} Voucher). Please confirm delivery details.`
    );

    return (
        <section className="relative w-full bg-[#fbf9f5] text-neutral-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/20 border-b border-black/5">
            {/* Ambient Background Aura */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-200/30 via-rose-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Editorial Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-700/20 bg-amber-500/10 text-amber-900 text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md shadow-2xs">
                        <Gift className="w-3.5 h-3.5 text-amber-600" />
                        <span>Try Before You Commit • Bespoke Coffret</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900 font-light leading-tight">
                        Curate Your Custom <span className="italic font-normal bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 bg-clip-text text-transparent">Discovery Box</span>
                    </h2>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                        Select any 4 signature miniature atomizers (5ml each) hand-poured in our Grasse atelier.
                        Includes a <strong className="font-semibold text-neutral-900">100% redeemable ₹1,199 voucher</strong> towards your first 100ml full bottle purchase.
                    </p>
                </div>

                {/* Main Interactive Box Builder Studio */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT (7 COLS): The Curated Vials Grid */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                                    Step 1: Choose 4 Miniature Flacons
                                </span>
                                <h3 className="text-xl font-serif text-neutral-900 font-medium mt-0.5">
                                    Available Haute Extraits (5ml Spray)
                                </h3>
                            </div>
                            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-2xs">
                                {selectedVials.length} / 4 Selected
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {samplePerfumes.map((perfume) => {
                                const isAdded = selectedVials.some((v) => v.id === perfume.id);
                                const isFull = selectedVials.length >= 4 && !isAdded;

                                return (
                                    <div
                                        key={perfume.id}
                                        onClick={() => !isFull && toggleVial(perfume)}
                                        className={`group relative p-4 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                                            isAdded
                                                ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-900/5'
                                                : isFull
                                                ? 'bg-white/40 border-neutral-200/50 opacity-60 cursor-not-allowed'
                                                : 'bg-white hover:bg-[#faf7f2] border-neutral-200/80 hover:border-amber-400/60 hover:shadow-md cursor-pointer'
                                        }`}
                                    >
                                        <div className="flex gap-4 items-center">
                                            {/* Thumbnail */}
                                            <div className="w-18 h-22 rounded-2xl overflow-hidden shrink-0 border border-neutral-200/80 shadow-inner bg-neutral-100">
                                                <img
                                                    src={perfume.image}
                                                    alt={perfume.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-1">
                                                    <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold">
                                                        {perfume.concentration}
                                                    </span>
                                                    {isAdded && (
                                                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                                                            <Check className="w-3 h-3 stroke-[3]" />
                                                        </span>
                                                    )}
                                                </div>

                                                <h4 className="text-base font-serif font-semibold text-neutral-900 truncate mt-0.5">
                                                    {perfume.name}
                                                </h4>
                                                <p className="text-[11px] text-neutral-500 truncate">
                                                    {perfume.category}
                                                </p>

                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {perfume.notes.slice(0, 2).map((note, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-[9px] font-mono bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded"
                                                        >
                                                            {note}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Pill */}
                                        <div className="mt-3 pt-2.5 border-t border-neutral-200/60 flex items-center justify-between">
                                            <span className="text-[10px] text-neutral-500 italic truncate max-w-[170px]">
                                                {perfume.vibe}
                                            </span>
                                            <button
                                                type="button"
                                                className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                                                    isAdded
                                                        ? 'text-red-700 bg-red-50 hover:bg-red-100'
                                                        : isFull
                                                        ? 'text-neutral-400'
                                                        : 'text-amber-900 bg-amber-100 hover:bg-amber-200'
                                                }`}
                                            >
                                                {isAdded ? 'Remove' : '+ Add'}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT (5 COLS): The Velvet Presentation Coffret Box */}
                    <div className="lg:col-span-5 sticky top-6 space-y-6">
                        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-2xl shadow-amber-900/10">
                            {/* Coffret Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80">
                                <div>
                                    <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                                        Step 2: Review Your Box
                                    </span>
                                    <h3 className="text-xl font-serif text-neutral-900 font-medium mt-0.5">
                                        The Velvet Coffret
                                    </h3>
                                </div>
                                <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60">
                                    ₹1,199
                                </span>
                            </div>

                            {/* Box Velvet Color Picker */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs font-mono text-neutral-600">Velvet Lining:</span>
                                <div className="flex items-center gap-2">
                                    {boxColors.map((color) => (
                                        <button
                                            key={color.id}
                                            onClick={() => setActiveBoxColor(color.id)}
                                            className={`text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                                                activeBoxColor === color.id
                                                    ? 'bg-neutral-900 text-white border-neutral-900 font-semibold shadow-xs'
                                                    : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200'
                                            }`}
                                        >
                                            {color.name.split(' ')[0]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* The 4 Velvet Slots Container */}
                            <div className="mt-5 p-5 rounded-2xl bg-[#17171a] border border-amber-900/20 shadow-inner">
                                <div className="text-center pb-3 border-b border-white/10">
                                    <div className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80">
                                        MAISON COAG • GRASSE
                                    </div>
                                    <div className="text-xs font-serif text-white/90 italic">
                                        Bespoke 4-Piece Atomizer Collection
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-2.5 mt-4">
                                    {[0, 1, 2, 3].map((index) => {
                                        const vial = selectedVials[index];

                                        if (vial) {
                                            return (
                                                <div
                                                    key={vial.id}
                                                    className="group relative flex flex-col items-center justify-between p-2 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-amber-400/30 text-center shadow-md animate-fadeIn"
                                                >
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeVial(index);
                                                        }}
                                                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 shadow-sm cursor-pointer z-10"
                                                        title="Remove from box"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>

                                                    {/* Miniature Bottle Graphic */}
                                                    <div className="w-6 h-14 rounded-t-sm rounded-b-md bg-gradient-to-b from-amber-200/70 via-amber-400/40 to-amber-700/60 border border-amber-300/50 flex flex-col items-center justify-between py-1 my-1 shadow-inner">
                                                        <div className="w-3 h-1.5 rounded-t-sm bg-amber-300/80" />
                                                        <span className="text-[7px] font-mono text-white/90 font-bold uppercase tracking-tighter">
                                                            5ml
                                                        </span>
                                                        <div className="w-2 h-0.5 bg-amber-400" />
                                                    </div>

                                                    <span className="text-[10px] font-serif text-white font-medium truncate w-full mt-1">
                                                        {vial.name.split(' ')[0]}
                                                    </span>
                                                    <span className="text-[8px] font-mono text-amber-300/80">
                                                        Slot {index + 1}
                                                    </span>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-white/20 text-center bg-white/[0.02] min-h-[105px]"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 mb-1 text-xs">
                                                    +
                                                </div>
                                                <span className="text-[10px] font-mono text-white/40">
                                                    Slot 0{index + 1}
                                                </span>
                                                <span className="text-[8px] text-white/30">
                                                    Empty
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Value Proposition & Voucher Callout */}
                            <div className="mt-5 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
                                <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                                <div className="text-xs">
                                    <span className="font-semibold block text-amber-900">
                                        100% Value Voucher Included
                                    </span>
                                    <span className="text-neutral-600 text-[11px] font-light leading-relaxed">
                                        Your {coffretPriceFormatted} purchase includes an instant digital voucher of {coffretPriceFormatted} redeemable on any 100ml flacon.
                                    </span>
                                </div>
                            </div>

                            {/* Complimentary Gift Wrap Toggle */}
                            <div className="mt-4 flex items-center justify-between text-xs text-neutral-700 pt-3 border-t border-neutral-200/80">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={includeGiftWrap}
                                        onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                                        className="rounded border-neutral-300 text-amber-600 focus:ring-amber-500"
                                    />
                                    <span>Complimentary Wax-Sealed Gift Wrap & Ribbon</span>
                                </label>
                                <span className="font-mono text-amber-800 text-[11px] font-semibold">FREE</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 space-y-2.5">
                                <a
                                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3.5 px-6 rounded-2xl font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                                        isComplete
                                            ? 'bg-amber-500 hover:bg-amber-600 text-neutral-950 shadow-amber-500/25 cursor-pointer hover:shadow-lg active:scale-95'
                                            : 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-neutral-900/20 cursor-pointer'
                                    }`}
                                >
                                    <WhatsAppIcon className="w-4 h-4" />
                                    <span>
                                        {isComplete
                                            ? `Order Coffret via WhatsApp • ${coffretPriceFormatted}`
                                            : `Select ${4 - selectedVials.length} More to Complete`}
                                    </span>
                                </a>

                                <div className="text-center text-[10px] text-neutral-500 flex items-center justify-center gap-4 pt-1">
                                    <span className="flex items-center gap-1">
                                        <Truck className="w-3 h-3 text-amber-600" /> Free 48H Express Shipping
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <ShieldCheck className="w-3 h-3 text-amber-600" /> Authenticity Guaranteed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDITORIAL PRESS QUOTES MARQUEE */}
                <div className="mt-24 pt-16 border-t border-neutral-200/80">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase font-mono tracking-widest text-amber-800 font-semibold">
                            Critical Acclaim
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 font-light mt-1">
                            Praised by Connoisseurs Worldwide
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pressQuotes.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-lg hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-lg font-serif font-bold tracking-wider text-neutral-900">
                                            {item.press}
                                        </span>
                                        <div className="flex text-amber-500 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-600 leading-relaxed font-light italic">
                                        "{item.quote}"
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                                    {item.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverySection;

