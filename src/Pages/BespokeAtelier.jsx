import React, { useState } from 'react';
import { Sparkles, Check, Gift, ShieldCheck, ArrowRight, Star, Award, Edit3 } from 'lucide-react';
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

const flacons = [
    {
        id: 'emeraude',
        name: 'Émeraude Noir',
        subtitle: 'Extrait de Parfum • 100ml',
        price: '₹8,499',
        numericPrice: 8499,
        image: '/images/hero_perfume.jpg',
        notes: 'Calabrian Bergamot • Tuscan Cedar • Golden Amber',
        accentGlow: 'rgba(16, 185, 129, 0.25)'
    },
    {
        id: 'ambre',
        name: 'Ambre Impérial',
        subtitle: 'Extrait de Parfum • 100ml',
        price: '₹9,299',
        numericPrice: 9299,
        image: '/images/perfume_amber.jpg',
        notes: 'Smoked Cardamom • Wild Tonka • Sacred Myrrh',
        accentGlow: 'rgba(245, 158, 11, 0.25)'
    },
    {
        id: 'rose',
        name: 'Rose Éternelle',
        subtitle: 'Extrait de Parfum • 100ml',
        price: '₹7,899',
        numericPrice: 7899,
        image: '/images/perfume_rose.jpg',
        notes: 'Centifolia Rose • Pink Peppercorn • Cashmere Woods',
        accentGlow: 'rgba(244, 63, 94, 0.25)'
    }
];

const engravingStyles = [
    { id: 'serif', name: 'Roman Serif', fontClass: 'font-serif tracking-[0.25em]' },
    { id: 'script', name: 'Royal Script', fontClass: 'italic font-serif tracking-[0.15em]' },
    { id: 'mono', name: 'Modern Mono', fontClass: 'font-mono tracking-[0.3em] font-semibold' }
];

const foilFinishes = [
    { id: 'gold', name: '24K French Gold', textColor: 'text-amber-300 drop-shadow-[0_2px_12px_rgba(251,191,36,0.6)]' },
    { id: 'platinum', name: 'Mirror Platinum', textColor: 'text-neutral-100 drop-shadow-[0_2px_12px_rgba(255,255,255,0.6)]' },
    { id: 'rose-gold', name: 'Rose Gold', textColor: 'text-rose-300 drop-shadow-[0_2px_12px_rgba(253,164,175,0.6)]' }
];

const BespokeAtelier = () => {
    const { formatPrice } = useShop();
    const [selectedFlacon, setSelectedFlacon] = useState(flacons[0]);
    const [engravingText, setEngravingText] = useState('MADAME SOPHIA');
    const [selectedStyle, setSelectedStyle] = useState(engravingStyles[0]);
    const [selectedFoil, setSelectedFoil] = useState(foilFinishes[0]);
    const [includeWaxSeal, setIncludeWaxSeal] = useState(true);

    const formattedFlaconPrice = formatPrice(selectedFlacon.numericPrice || selectedFlacon.price);

    const whatsappMessage = encodeURIComponent(
        `Hello COAG Haute Parfumerie, I would like to order a Bespoke Engraved Flacon:\n` +
        `• Fragrance: ${selectedFlacon.name} (${formattedFlaconPrice})\n` +
        `• Custom Inscription: "${engravingText.trim() || 'INITIALS'}"\n` +
        `• Font Style: ${selectedStyle.name}\n` +
        `• Foil Finish: ${selectedFoil.name}\n` +
        `• Gift Wax Seal: ${includeWaxSeal ? 'Yes (Complimentary)' : 'No'}\n\n` +
        `Please confirm reservation details.`
    );

    return (
        <section className="relative w-full bg-[#08080a] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/30 border-b border-white/[0.08]">
            {/* Background Ambient Atmosphere */}
            <div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000"
                style={{ backgroundColor: selectedFlacon.accentGlow }}
            />
            <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[11px] uppercase tracking-[0.3em] font-semibold backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>L'Atelier Sur-Mesure</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white font-light">
                        Personalize Your <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Masterpiece</span>
                    </h2>

                    <p className="text-neutral-400 text-sm sm:text-base font-light">
                        Impart your initials, name, or sacred date onto the glass flacon in molten French gold leaf.
                    </p>
                </div>

                {/* Main Interactive Engraving Studio */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* LEFT (6 COLS): Real-time Live Flacon Engraving Preview */}
                    <div className="lg:col-span-6 flex flex-col items-center">
                        <div className="relative w-full max-w-md h-[540px] sm:h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 shadow-2xl p-6 flex flex-col justify-between group">
                            {/* Flacon Image */}
                            <img
                                src={selectedFlacon.image}
                                alt={selectedFlacon.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                            />

                            {/* Luxury Dark Film Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50" />

                            {/* Top Badge: Free Engraving Guarantee */}
                            <div className="relative z-10 flex items-center justify-between text-xs">
                                <span className="font-mono text-[10px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-white/90">
                                    LIVE ATELIER PREVIEW
                                </span>
                                <span className="font-mono text-[11px] uppercase text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/25">
                                    Complimentary
                                </span>
                            </div>

                            {/* CENTER: LIVE ENGRAVED INSCRIPTION ON BOTTLE */}
                            <div className="relative z-10 my-auto text-center px-4 py-8">
                                <div className="inline-block relative py-3 px-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                                    <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/40 mb-1">
                                        HAUTE ENGRAVING
                                    </div>
                                    <div
                                        className={`text-xl sm:text-2xl uppercase transition-all duration-300 ${selectedStyle.fontClass} ${selectedFoil.textColor}`}
                                    >
                                        {engravingText.trim() || 'YOUR NAME'}
                                    </div>
                                    <div className="text-[8px] font-mono text-amber-300/60 uppercase tracking-widest mt-1">
                                        PARIS • GRASSE
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Flacon Label */}
                            <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xl font-serif text-white font-light">
                                        {selectedFlacon.name}
                                    </h4>
                                    <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                                        {selectedFlacon.subtitle}
                                    </p>
                                </div>
                                <span className="text-xl font-serif font-medium text-amber-300">
                                    {formattedFlaconPrice}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT (6 COLS): Interactive Customization Studio */}
                    <div className="lg:col-span-6 space-y-8 p-6 sm:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                        {/* Step 1: Select Flacon */}
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2 mb-3">
                                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] flex items-center justify-center border border-amber-500/30">
                                    1
                                </span>
                                Select Signature Flacon
                            </span>

                            <div className="grid grid-cols-3 gap-3">
                                {flacons.map((f) => {
                                    const isSelected = selectedFlacon.id === f.id;
                                    return (
                                        <button
                                            key={f.id}
                                            onClick={() => setSelectedFlacon(f)}
                                            className={`p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                                                isSelected
                                                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                                                    : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/10 text-neutral-400 hover:text-white'
                                            }`}
                                        >
                                            <div className="text-xs font-serif font-semibold truncate text-white">
                                                {f.name.split(' ')[0]}
                                            </div>
                                            <div className="text-[10px] font-mono text-amber-300 mt-1">
                                                {formatPrice(f.numericPrice || f.price)}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step 2: Inscription Input */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] flex items-center justify-center border border-amber-500/30">
                                        2
                                    </span>
                                    Custom Inscription (Live Preview)
                                </span>
                                <span className="text-[11px] font-mono text-neutral-500">
                                    {engravingText.length} / 20 chars
                                </span>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    maxLength={20}
                                    value={engravingText}
                                    onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                                    placeholder="TYPE INITIALS OR NAME..."
                                    className="w-full px-5 py-3.5 rounded-2xl bg-black/60 border border-white/20 text-white font-mono text-sm uppercase tracking-wider focus:outline-none focus:border-amber-400 transition-colors shadow-inner placeholder:text-neutral-600"
                                />
                                <Edit3 className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>

                        {/* Step 3: Typography Style */}
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2 mb-3">
                                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] flex items-center justify-center border border-amber-500/30">
                                    3
                                </span>
                                Typography & Finish
                            </span>

                            <div className="grid grid-cols-3 gap-2.5">
                                {engravingStyles.map((style) => (
                                    <button
                                        key={style.id}
                                        onClick={() => setSelectedStyle(style)}
                                        className={`py-2 px-3 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                                            selectedStyle.id === style.id
                                                ? 'bg-white text-black font-semibold border-white shadow-sm'
                                                : 'bg-white/[0.03] text-neutral-400 border-white/10 hover:text-white hover:bg-white/[0.08]'
                                        }`}
                                    >
                                        {style.name}
                                    </button>
                                ))}
                            </div>

                            {/* Foil Color Selection */}
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-[11px] font-mono text-neutral-400">Leaf Finish:</span>
                                {foilFinishes.map((f) => (
                                    <button
                                        key={f.id}
                                        onClick={() => setSelectedFoil(f)}
                                        className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                            selectedFoil.id === f.id
                                                ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                                                : 'bg-transparent text-neutral-400 border-white/15 hover:border-white/30'
                                        }`}
                                    >
                                        {f.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Gift Wrap Checkbox */}
                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={includeWaxSeal}
                                    onChange={(e) => setIncludeWaxSeal(e.target.checked)}
                                    className="rounded border-neutral-700 bg-neutral-900 text-amber-500 focus:ring-amber-500"
                                />
                                <span className="flex items-center gap-1.5">
                                    <Gift className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Complimentary Wax-Sealed Gift Coffret & Card</span>
                                </span>
                            </label>
                            <span className="font-mono text-amber-400 font-semibold text-[11px]">FREE</span>
                        </div>

                        {/* Order Button via WhatsApp */}
                        <div className="space-y-2 pt-2">
                            <a
                                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 cursor-pointer"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                <span>Order Engraved Flacon • {selectedFlacon.price}</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <div className="text-center text-[10px] text-neutral-500 font-mono">
                                Precision Diamond-Tip Laser Engraving • 48H Dispatch
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimalist Trust Features */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-500 uppercase tracking-widest text-center">
                    <span className="flex items-center gap-1.5 text-neutral-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Authenticity Guaranteed
                    </span>
                    <span className="text-amber-500">◆</span>
                    <span className="flex items-center gap-1.5 text-neutral-400">
                        <Award className="w-3.5 h-3.5 text-amber-400" /> Grasse Hand-Finished
                    </span>
                    <span className="text-amber-500">◆</span>
                    <span className="flex items-center gap-1.5 text-neutral-400">
                        <Gift className="w-3.5 h-3.5 text-amber-400" /> Bespoke Velvet Packaging
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BespokeAtelier;

