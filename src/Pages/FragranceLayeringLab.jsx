import React, { useState } from 'react';
import {
    Sparkles,
    Flame,
    Droplets,
    ArrowRight,
    RotateCcw,
    Check,
    Layers,
    Sliders,
    ShoppingBag,
    Star,
    Award,
    Clock,
    ShieldCheck
} from 'lucide-react';

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

const layeringPerfumes = [
    {
        id: 'emeraude',
        name: 'Émeraude Noir',
        family: 'Woody & Resinous',
        category: 'Foundation / Crisp Wood',
        image: '/images/hero_perfume.jpg',
        dominantNotes: 'Cold Bergamot • Tuscan Cedar • Golden Amber',
        accords: ['Alpine Fresh', 'Smoky Cedar', 'Mineral Amber'],
        accentColor: 'from-emerald-700 to-teal-800',
        intensity: 88,
        roleAsBase: 'Anchor foundation with crisp citrus projection and ancient cedar stability.',
        roleAsAccent: 'Injects an electric, cold mountain freshness into warm resins.'
    },
    {
        id: 'ambre',
        name: 'Ambre Impérial',
        family: 'Warm Oriental Amber',
        category: 'Opulent / Golden Balsam',
        image: '/images/perfume_amber.jpg',
        dominantNotes: 'Smoked Cardamom • Charred Tonka • Sacred Myrrh',
        accords: ['Molten Amber', 'Spiced Tonka', 'Incense Smoke'],
        accentColor: 'from-amber-700 to-yellow-800',
        intensity: 95,
        roleAsBase: 'Provides a hypnotic, magnetic heat that radiates continuously from the skin.',
        roleAsAccent: 'Sweetens woody or floral bases with luxurious golden honey and myrrh.'
    },
    {
        id: 'rose',
        name: 'Rose Éternelle',
        family: 'Majesté Florale',
        category: 'Velvety / Dewy Blossom',
        image: '/images/perfume_rose.jpg',
        dominantNotes: 'Centifolia Rose • Pink Pepper • Cashmere Wood',
        accords: ['Velvet Rose', 'Pink Pepper', 'Cashmere Veil'],
        accentColor: 'from-rose-600 to-pink-800',
        intensity: 84,
        roleAsBase: 'Lays a romantic, honeyed floral bed that unfolds softly over hours.',
        roleAsAccent: 'Crowns dark smoky or woody scents with dawn-harvested petal royalty.'
    },
    {
        id: 'noir',
        name: 'Noir Absolu',
        family: 'Mineral Obsidian',
        category: 'Smoky / Cryo-Mineral',
        image: '/images/perfume_noir_still.jpg',
        dominantNotes: 'Black Pepper • Smoky Vetiver • White Ambergris',
        accords: ['Crystalline Pepper', 'Wet Basalt', 'Smoky Vetiver'],
        accentColor: 'from-stone-900 to-neutral-800',
        intensity: 92,
        roleAsBase: 'Creates a deep obsidian silhouette of dark earth and volcanic mineral.',
        roleAsAccent: 'Cuts through sweet ambers with sharp, crystalline masculine pepper.'
    },
    {
        id: 'santal',
        name: 'Santal Royal',
        family: 'Sacred Woods',
        category: 'Creamy / Noble Wood',
        image: '/images/perfume_santal.jpg',
        dominantNotes: 'Mysore Sandalwood • Orris Butter • Bourbon Vanilla',
        accords: ['Creamy Wood', 'Powdery Orris', 'Smoked Vanilla'],
        accentColor: 'from-amber-800 to-amber-950',
        intensity: 90,
        roleAsBase: 'A buttery, aristocratically smooth wooden base that lasts 24+ hours.',
        roleAsAccent: 'Enriches cold citrus or roses with an unforgettable cashmere caress.'
    }
];

// Presets for quick exploration
const presets = [
    {
        title: "The Velvet Monarch",
        tagline: "Opulent Rose dipped in Molten Amber",
        baseId: "ambre",
        accentId: "rose"
    },
    {
        title: "Frozen Fire",
        tagline: "Cold Mountain Bergamot clashing with Smoky Oud",
        baseId: "emeraude",
        accentId: "ambre"
    },
    {
        title: "Obsidian Bloom",
        tagline: "Dark Volcanic Basalt crowned with Royal Petals",
        baseId: "noir",
        accentId: "rose"
    },
    {
        title: "The Sovereign Woods",
        tagline: "Volcanic Cedar blended with Mysore Sandalwood",
        baseId: "santal",
        accentId: "emeraude"
    }
];

// Dynamic Hybrid Recipes
const getHybridDetails = (base, accent, ratio) => {
    if (base.id === accent.id) {
        return {
            name: `${base.name} • Double Concentration`,
            persona: "Pure Harmonized Monolith",
            vibe: `An intensified, unbroken presentation of pure ${base.name}. Doubling the projection without altering the delicate botanical symmetry.`,
            harmony: 100,
            sillage: "4.5m Sovereign Projection",
            longevity: "24+ Hours",
            recipe: [
                `Apply 2 sprays of ${base.name} to the pulse points at the collarbone and wrists.`,
                "Wait 90 seconds for body heat to warm the initial oils.",
                `Apply 1 additional mist of ${base.name} to clothing or hair for an amplified 360° halo.`
            ],
            metrics: {
                warmth: base.intensity,
                freshness: 85,
                projection: 98,
                longevity: 99
            }
        };
    }

    const key = `${base.id}_${accent.id}`;
    const recipes = {
        'emeraude_ambre': {
            name: "Ambre Sauvage",
            persona: "The Golden Forest Sovereign",
            vibe: "A clash of elemental extremes: Cold mountain bergamot and ancient volcanic cedar softened by a surge of molten ambergris and scorched wild tonka.",
            harmony: 98,
            sillage: "3.8m Radiant Halo",
            longevity: "20+ Hours",
            recipe: [
                "Spray 2 generous mists of Émeraude Noir on chest and throat while skin is warm.",
                "Layer 1 targeted spritz of Ambre Impérial directly over the wrist pulse points.",
                "Do not rub wrists together; allow the cold bergamot and warm amber to marry naturally."
            ],
            metrics: { warmth: 94, freshness: 88, projection: 96, longevity: 96 }
        },
        'ambre_rose': {
            name: "Rose Impériale",
            persona: "The Velvet Monarch",
            vibe: "The intoxicating richness of sacred myrrh and smoked cardamom wrapped in dawn-harvested Centifolia petals and candied pink pepper.",
            harmony: 99,
            sillage: "3.6m Intoxicating Trail",
            longevity: "22+ Hours",
            recipe: [
                "Apply 2 sprays of Ambre Impérial to the back of the neck and chest as the anchor.",
                "Wait 60 seconds, then mist Rose Éternelle over your hair and inner elbows.",
                "As body temperature rises, the rose opens first before settling into deep golden myrrh."
            ],
            metrics: { warmth: 96, freshness: 82, projection: 95, longevity: 98 }
        },
        'emeraude_rose': {
            name: "Émeraude Éternelle",
            persona: "The Alpine Florale",
            vibe: "Centifolia roses blooming in high volcanic altitudes. Crisp sparkling bergamot and ancient cedar petals kissed with dewy pink peppercorn.",
            harmony: 96,
            sillage: "3.2m Fresh Magnetic Aura",
            longevity: "18+ Hours",
            recipe: [
                "Apply 2 sprays of Émeraude Noir to pulse points.",
                "Lightly mist Rose Éternelle across clothing for an airy, sparkling floral sillage.",
                "Perfect for daylight galas and sophisticated spring and autumn soirees."
            ],
            metrics: { warmth: 78, freshness: 96, projection: 92, longevity: 90 }
        },
        'noir_rose': {
            name: "Nocturne Florale",
            persona: "The Obsidian Petal",
            vibe: "A dark gothic romance. Smoky Haitian vetiver and volcanic black pepper sliced by regal Grasse roses and velvety white cashmere.",
            harmony: 97,
            sillage: "3.5m Hypnotic Aura",
            longevity: "20+ Hours",
            recipe: [
                "Spray Noir Absolu onto the collarbone and shoulders for a dark crystalline foundation.",
                "Add 1 spritz of Rose Éternelle on the wrists to create a velvety sweet contrast.",
                "Turns heads immediately as crisp pepper gives way to velvety royal rose."
            ],
            metrics: { warmth: 86, freshness: 89, projection: 94, longevity: 94 }
        },
        'santal_ambre': {
            name: "Santal Impérial",
            persona: "The Sacred Temple",
            vibe: "Creamy Mysore sandalwood aged in charred oak barrels, drowned in molten golden amber, sacred burning myrrh, and dark bourbon vanilla.",
            harmony: 99,
            sillage: "4.2m Majestic Aura",
            longevity: "26+ Hours",
            recipe: [
                "Apply Santal Royal generously to the chest and wrists.",
                "Layer Ambre Impérial behind both ears.",
                "Leaves a magnetic trail that remains detectable on coats and scarves for days."
            ],
            metrics: { warmth: 99, freshness: 52, projection: 97, longevity: 99 }
        }
    };

    if (recipes[key]) return recipes[key];

    // Dynamic procedural fallback for any other combination
    return {
        name: `${base.name.split(' ')[0]} ${accent.name.split(' ')[1] || accent.name.split(' ')[0]}`,
        persona: "Bespoke Artisanal Synthesis",
        vibe: `An exclusive custom chemistry fusing the ${base.family} foundation of ${base.name} with the radiant ${accent.family} accents of ${accent.name}.`,
        harmony: 95,
        sillage: "3.5m Projection",
        longevity: "18+ Hours",
        recipe: [
            `Spray 2 mists of ${base.name} to the chest and nape as your foundation base.`,
            `Mist ${accent.name} once over wrists and upper shoulders for the harmonic top accent.`,
            "Allow skin heat to activate the temporal fusion over 30 minutes."
        ],
        metrics: {
            warmth: Math.round((base.intensity + accent.intensity) / 2),
            freshness: 84,
            projection: 92,
            longevity: 94
        }
    };
};

const FragranceLayeringLab = () => {
    const [baseIndex, setBaseIndex] = useState(0); // Émeraude Noir
    const [accentIndex, setAccentIndex] = useState(1); // Ambre Impérial
    const [ratio, setRatio] = useState(60); // 60% Base / 40% Accent

    const basePerfume = layeringPerfumes[baseIndex];
    const accentPerfume = layeringPerfumes[accentIndex];
    const hybrid = getHybridDetails(basePerfume, accentPerfume, ratio);

    const applyPreset = (preset) => {
        const bIdx = layeringPerfumes.findIndex(p => p.id === preset.baseId);
        const aIdx = layeringPerfumes.findIndex(p => p.id === preset.accentId);
        if (bIdx !== -1) setBaseIndex(bIdx);
        if (aIdx !== -1) setAccentIndex(aIdx);
    };

    const whatsappMessage = encodeURIComponent(
        `Hello COAG Haute Parfumerie, I am interested in the Bespoke Layering Duo:\n` +
        `• Base: ${basePerfume.name} (50ml Extrait)\n` +
        `• Accent: ${accentPerfume.name} (50ml Extrait)\n` +
        `Resulting Blend: "${hybrid.name}" (${hybrid.persona})\n\n` +
        `Please share the Layering Duo special package details.`
    );

    return (
        <section className="relative w-full bg-[#fbf9f5] text-neutral-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/20 border-b border-black/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/35 via-rose-100/25 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-700/20 bg-amber-500/10 text-amber-900 text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Bespoke Olfactory Alchemy Studio</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900 font-light leading-tight">
                        The Fragrance <span className="italic font-normal bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 bg-clip-text text-transparent">Layering Lab</span>
                    </h2>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                        Haute Parfumerie is not static. True connoisseurs layer complementary extraits to create an unrepeatable signature scent. Mix two iconic flacons to synthesize your bespoke hybrid aura.
                    </p>

                    {/* Quick Presets Pills */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                        <span className="text-xs font-mono text-neutral-500 mr-1">Master Presets:</span>
                        {presets.map((p, idx) => (
                            <button
                                key={idx}
                                onClick={() => applyPreset(p)}
                                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white hover:bg-amber-50 border border-neutral-200 hover:border-amber-400 text-neutral-800 transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
                            >
                                <span className="text-amber-600">✦</span>
                                <span>{p.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* THE INTERACTIVE 3-TIER ALCHEMY WORKSPACE */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* LEFT PANEL (4 COLS): Select Base Fragrance */}
                    <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-amber-900/5 flex flex-col justify-between space-y-5">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                                        A
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                                        Foundation Base (60%)
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-amber-800">Skin Anchor</span>
                            </div>

                            {/* Base Perfume Selector List */}
                            <div className="mt-4 space-y-2.5">
                                {layeringPerfumes.map((perfume, idx) => {
                                    const isSelected = baseIndex === idx;
                                    return (
                                        <div
                                            key={perfume.id}
                                            onClick={() => setBaseIndex(idx)}
                                            className={`p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${isSelected
                                                ? 'bg-amber-500/10 border-amber-500/70 shadow-sm'
                                                : 'bg-[#faf8f5] hover:bg-white border-neutral-200/80 hover:border-amber-300'
                                                }`}
                                        >
                                            <div className="w-12 h-14 rounded-xl overflow-hidden shrink-0 border border-neutral-200 shadow-inner bg-neutral-100">
                                                <img
                                                    src={perfume.image}
                                                    alt={perfume.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-serif font-semibold text-neutral-900 truncate">
                                                        {perfume.name}
                                                    </h4>
                                                    {isSelected && (
                                                        <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">
                                                            ✓
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-amber-800 font-mono">
                                                    {perfume.category}
                                                </p>
                                                <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                                                    {perfume.dominantNotes}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Selected Base Info Card */}
                        <div className="p-4 rounded-2xl bg-[#faf8f5] border border-neutral-200/80">
                            <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold block">
                                Base Chemistry Role:
                            </span>
                            <p className="text-xs text-neutral-600 mt-1 font-light leading-relaxed">
                                {basePerfume.roleAsBase}
                            </p>
                        </div>
                    </div>

                    {/* CENTER (4 COLS): The Reaction Crucible & Synthesis Visual */}
                    <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-2xl flex flex-col justify-between items-center text-center relative overflow-hidden">
                        {/* Golden Reaction Orb Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

                        {/* Top Synthesis Status */}
                        <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 z-10">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                                ALCHEMY CHAMBER
                            </span>
                            <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                                {hybrid.harmony}% Resonance
                            </span>
                        </div>

                        {/* Live Molecular Fusion Visual */}
                        <div className="my-8 relative flex flex-col items-center justify-center z-10">
                            {/* Two colliding droplet circles */}
                            <div className="relative w-44 h-44 flex items-center justify-center">
                                {/* Base Orb */}
                                <div className="absolute left-2 w-28 h-28 rounded-full bg-gradient-to-tr from-amber-600/50 to-amber-400/30 border border-amber-400/50 backdrop-blur-md flex flex-col items-center justify-center p-2 shadow-lg animate-pulse">
                                    <span className="text-lg">🪵</span>
                                    <span className="text-[10px] font-serif font-medium text-amber-200 mt-0.5 truncate max-w-[80px]">
                                        {basePerfume.name.split(' ')[0]}
                                    </span>
                                    <span className="text-[8px] font-mono text-amber-300/80">{ratio}%</span>
                                </div>

                                {/* Accent Orb */}
                                <div className="absolute right-2 w-28 h-28 rounded-full bg-gradient-to-bl from-rose-600/50 to-amber-400/30 border border-rose-400/50 backdrop-blur-md flex flex-col items-center justify-center p-2 shadow-lg">
                                    <span className="text-lg">✨</span>
                                    <span className="text-[10px] font-serif font-medium text-rose-200 mt-0.5 truncate max-w-[80px]">
                                        {accentPerfume.name.split(' ')[0]}
                                    </span>
                                    <span className="text-[8px] font-mono text-rose-300/80">{100 - ratio}%</span>
                                </div>

                                {/* Center Fusion Symbol */}
                                <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 font-bold flex items-center justify-center text-sm shadow-xl z-20">
                                    ✦
                                </div>
                            </div>

                            {/* Hybrid Title & Persona */}
                            <div className="mt-4">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">
                                    Bespoke Hybrid Result
                                </div>
                                <h3 className="text-2xl font-serif text-white font-medium mt-0.5">
                                    "{hybrid.name}"
                                </h3>
                                <p className="text-xs text-amber-200/80 italic mt-0.5">
                                    {hybrid.persona}
                                </p>
                            </div>
                        </div>

                        {/* Ratio Balance Slider */}
                        <div className="w-full z-10 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                                <span>Base: {ratio}%</span>
                                <span className="text-amber-400 font-semibold">Diffusion Ratio</span>
                                <span>Accent: {100 - ratio}%</span>
                            </div>
                            <input
                                type="range"
                                min="40"
                                max="70"
                                value={ratio}
                                onChange={(e) => setRatio(Number(e.target.value))}
                                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* RIGHT PANEL (4 COLS): Select Accent Fragrance */}
                    <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-amber-900/5 flex flex-col justify-between space-y-5">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-amber-500 text-neutral-950 text-xs font-mono font-bold flex items-center justify-center">
                                        B
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                                        Harmonic Accent (40%)
                                    </span>
                                </div>
                                <span className="text-[11px] font-mono text-amber-800">Sillage Crown</span>
                            </div>

                            {/* Accent Perfume Selector List */}
                            <div className="mt-4 space-y-2.5">
                                {layeringPerfumes.map((perfume, idx) => {
                                    const isSelected = accentIndex === idx;
                                    return (
                                        <div
                                            key={perfume.id}
                                            onClick={() => setAccentIndex(idx)}
                                            className={`p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${isSelected
                                                ? 'bg-amber-500/10 border-amber-500/70 shadow-sm'
                                                : 'bg-[#faf8f5] hover:bg-white border-neutral-200/80 hover:border-amber-300'
                                                }`}
                                        >
                                            <div className="w-12 h-14 rounded-xl overflow-hidden shrink-0 border border-neutral-200 shadow-inner bg-neutral-100">
                                                <img
                                                    src={perfume.image}
                                                    alt={perfume.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-serif font-semibold text-neutral-900 truncate">
                                                        {perfume.name}
                                                    </h4>
                                                    {isSelected && (
                                                        <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">
                                                            ✓
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-amber-800 font-mono">
                                                    {perfume.category}
                                                </p>
                                                <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                                                    {perfume.dominantNotes}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Selected Accent Info Card */}
                        <div className="p-4 rounded-2xl bg-[#faf8f5] border border-neutral-200/80">
                            <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold block">
                                Accent Chemistry Role:
                            </span>
                            <p className="text-xs text-neutral-600 mt-1 font-light leading-relaxed">
                                {accentPerfume.roleAsAccent}
                            </p>
                        </div>
                    </div>
                </div>

                {/* THE RESULTING BESPOKE HYBRID DEEP DIVE CARD */}
                <div className="mt-8 p-8 lg:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-2xl shadow-amber-900/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Hybrid Profile Narrative (7 Cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-semibold">
                                    <span>HYBRID RECIPE NO. {baseIndex + 1}{accentIndex + 1}</span>
                                    <span>•</span>
                                    <span>{hybrid.harmony}% HARMONIC AFFINITY</span>
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-light mt-2">
                                    {hybrid.name}
                                </h3>

                                <p className="text-sm sm:text-base text-amber-900 font-medium italic mt-1">
                                    "{hybrid.persona}"
                                </p>

                                <p className="text-sm text-neutral-600 leading-relaxed font-light mt-3">
                                    {hybrid.vibe}
                                </p>
                            </div>

                            {/* Master Perfumer's Exact Step-by-Step Layering Ritual */}
                            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-neutral-200/80 space-y-3">
                                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold flex items-center gap-1.5">
                                    <Droplets className="w-3.5 h-3.5 text-amber-600" />
                                    How to Layer This Chemistry:
                                </span>

                                <div className="space-y-2">
                                    {hybrid.recipe.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                                            <span className="w-5 h-5 rounded-full bg-amber-200/80 text-amber-900 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Dynamics Radar & Layering Duo Purchase Card (5 Cols) */}
                        <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#fdfbf9] border border-neutral-200/80 space-y-6 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-neutral-700 font-semibold block mb-3">
                                    Hybrid Molecular Metrics
                                </span>

                                <div className="grid grid-cols-2 gap-3 text-center">
                                    <div className="p-3 rounded-xl bg-white border border-neutral-200/70 shadow-2xs">
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Longevity</div>
                                        <div className="text-xs font-serif font-semibold text-neutral-900 mt-0.5">
                                            {hybrid.longevity}
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white border border-neutral-200/70 shadow-2xs">
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Sillage Projection</div>
                                        <div className="text-xs font-serif font-semibold text-amber-800 mt-0.5">
                                            {hybrid.sillage}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <div>
                                        <div className="flex justify-between text-[11px] font-mono text-neutral-600 mb-1">
                                            <span>Warmth & Balsamic Depth</span>
                                            <span>{hybrid.metrics.warmth}%</span>
                                        </div>
                                        <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-amber-500 rounded-full"
                                                style={{ width: `${hybrid.metrics.warmth}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-[11px] font-mono text-neutral-600 mb-1">
                                            <span>Sparkling Zest & Radiance</span>
                                            <span>{hybrid.metrics.freshness}%</span>
                                        </div>
                                        <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-amber-600 rounded-full"
                                                style={{ width: `${hybrid.metrics.freshness}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* The Duo Offer Box */}
                            <div className="pt-4 border-t border-neutral-200/80">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold block">
                                            Layering Duo Coffret
                                        </span>
                                        <span className="text-xs text-neutral-600 font-light">
                                            Includes both full flacons + mixing guide
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                                        Save 15%
                                    </span>
                                </div>

                                <a
                                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/25 active:scale-95 cursor-pointer"
                                >
                                    <WhatsAppIcon className="w-4 h-4" />
                                    <span>Order Layering Duo via WhatsApp</span>
                                </a>

                                <div className="text-center text-[10px] text-neutral-500 mt-2">
                                    Includes bespoke gift coffer • Free worldwide shipping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FragranceLayeringLab;

