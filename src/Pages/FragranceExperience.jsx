import React, { useState } from 'react';
import {
    Sparkles,
    Clock,
    Compass,
    Droplets,
    ArrowRight,
    ShieldCheck,
    Check,
    RotateCcw,
    Flame,
    Sun,
    Moon,
    Flower2,
    TreePine,
    Award,
    Heart
} from 'lucide-react';

const auras = [
    {
        id: 'aurum',
        name: "L'Or Solaire",
        edition: "ÉDITION ROYALE • 01",
        mood: "Radiant & Sovereign",
        image: "/images/perfume_gold.jpg",
        concentration: "Extrait de Parfum • 32%",
        tagline: "Molten amber, solar Mediterranean jasmine, and aged Mysore sandalwood.",
        story: "Born under the meridian sun of Southern Europe. Formulated for the individual who moves through the world wrapped in an effortless golden aura.",
        bestFor: "Grand Galas & Twilight Soirées",
        sillage: "3.5m Projection",
        longevity: "18+ Hours",
        affinity: 98,
        icon: Sun,
        themeColor: "from-amber-600 via-amber-500 to-yellow-600",
        pillBg: "bg-amber-50 text-amber-900 border-amber-300/80",
        stages: [
            { time: "0 — 30m", label: "Luminous Peels", desc: "Calabrian Bergamot & Pink Pepper" },
            { time: "2 — 6h", label: "Warm Solar Core", desc: "Grasse Jasmine Absolute & Golden Honey" },
            { time: "12 — 20h+", label: "Sensual Dry-Down", desc: "Aged Sandalwood & Ambergris Resin" }
        ],
        radar: [
            { label: "Radiance & Glow", val: 96 },
            { label: "Warmth & Depth", val: 92 },
            { label: "Fresh Zest", val: 78 },
            { label: "Skin Longevity", val: 95 }
        ],
        ritual: "Spritz lightly onto the collarbone and the warm nape of the neck for a radiant 360° halo."
    },
    {
        id: 'nocturne',
        name: "Nocturne Oud",
        edition: "COLLECTION NOIRE • 02",
        mood: "Smoky & Enigmatic",
        image: "/images/perfume_amber.jpg",
        concentration: "Extrait de Parfum • 35%",
        tagline: "12-Year Cambodian oud, wild scorched tonka, and sacred burning myrrh.",
        story: "A nocturnal descent into smoky mystery. Designed for the enigmatic soul whose presence lingers in rooms long after departure.",
        bestFor: "Midnight Intimacy & Winter Evenings",
        sillage: "4.0m Magnetic Aura",
        longevity: "24+ Hours",
        affinity: 99,
        icon: Moon,
        themeColor: "from-amber-800 via-amber-700 to-stone-900",
        pillBg: "bg-stone-100 text-stone-900 border-stone-300",
        stages: [
            { time: "0 — 30m", label: "Incense Smoke", desc: "Crushed Cardamom & Smoked Saffron" },
            { time: "2 — 8h", label: "Ancient Resin", desc: "12-Year Wild Cambodian Oud & Tonka" },
            { time: "16 — 24h+", label: "Intimate Balsam", desc: "Sacred Myrrh & Black Bourbon Vanilla" }
        ],
        radar: [
            { label: "Radiance & Glow", val: 84 },
            { label: "Warmth & Depth", val: 99 },
            { label: "Fresh Zest", val: 45 },
            { label: "Skin Longevity", val: 99 }
        ],
        ritual: "Press one concentrated drop directly onto pulse points at the wrists and behind both ears."
    },
    {
        id: 'rose',
        name: "Rose Éternelle",
        edition: "MAJESTÉ FLORALE • 03",
        mood: "Velvety & Hypnotic",
        image: "/images/perfume_rose.jpg",
        concentration: "Extrait de Parfum • 28%",
        tagline: "Dawn-harvested Centifolia roses, candied pink pepper, and cashmere wood.",
        story: "Plucked in Grasse at the exact hour the sun touches the dew. A deeply modern, aristocratic rose without powdery antiquity.",
        bestFor: "Sunlit Rendezvous & Private Dinners",
        sillage: "2.8m Magnetic Aura",
        longevity: "16+ Hours",
        affinity: 97,
        icon: Flower2,
        themeColor: "from-rose-600 via-rose-500 to-amber-700",
        pillBg: "bg-rose-50 text-rose-900 border-rose-300",
        stages: [
            { time: "0 — 30m", label: "Dewy Blossom", desc: "Centifolia Petals & Italian Mandarin" },
            { time: "2 — 6h", label: "Velvet Bloom", desc: "Damask Rose Absolute & Pink Pepper" },
            { time: "10 — 18h+", label: "Silken Wood", desc: "Cashmere Wood & White Musk Veil" }
        ],
        radar: [
            { label: "Radiance & Glow", val: 92 },
            { label: "Warmth & Depth", val: 82 },
            { label: "Fresh Zest", val: 88 },
            { label: "Skin Longevity", val: 89 }
        ],
        ritual: "Mist in a delicate halo over your hair and inner elbows so every movement releases a whisper of rose."
    },
    {
        id: 'emeraude',
        name: "Émeraude Sauvage",
        edition: "MINÉRAL & BOISÉ • 04",
        mood: "Crisp & Electrifying",
        image: "/images/hero_perfume.jpg",
        concentration: "Extrait de Parfum • 30%",
        tagline: "Mountain bergamot, volcanic cedarwood, and liquid oceanic amber.",
        story: "The raw elemental power of ancient alpine forests meeting crashing coastal waters. Pristine, crisp, and intensely commanding.",
        bestFor: "Executive Presence & Daily Signature",
        sillage: "3.2m Invigorating Aura",
        longevity: "16+ Hours",
        affinity: 95,
        icon: TreePine,
        themeColor: "from-emerald-700 via-teal-600 to-amber-800",
        pillBg: "bg-emerald-50 text-emerald-950 border-emerald-300",
        stages: [
            { time: "0 — 30m", label: "Alpine Frost", desc: "Cold Mountain Bergamot & Crisp Pine" },
            { time: "2 — 6h", label: "Volcanic Forest", desc: "Tuscan Cedarwood & Crushed Juniper" },
            { time: "12 — 18h+", label: "Mineral Drift", desc: "Oceanic Ambergris & Smoky Birch" }
        ],
        radar: [
            { label: "Radiance & Glow", val: 94 },
            { label: "Warmth & Depth", val: 78 },
            { label: "Fresh Zest", val: 98 },
            { label: "Skin Longevity", val: 91 }
        ],
        ritual: "Apply generously to the chest and forearms. Body heat amplifies the cold bergamot and cedar."
    }
];

const FragranceExperience = () => {
    const [selectedAuraIndex, setSelectedAuraIndex] = useState(0);
    const [viewMode, setViewMode] = useState('curated'); // 'curated' | 'quiz'

    // Quiz State
    const [quizAnswers, setQuizAnswers] = useState({ mood: null, occasion: null, family: null });
    const [quizResult, setQuizResult] = useState(null);

    const currentAura = auras[selectedAuraIndex];

    const handleQuizOption = (category, value) => {
        const next = { ...quizAnswers, [category]: value };
        setQuizAnswers(next);

        if (category === 'family' || (next.mood && next.occasion && next.family)) {
            // Compute match
            let matchedId = 'aurum';
            if (next.mood === 'mysterious' || next.family === 'oud') matchedId = 'nocturne';
            else if (next.mood === 'romantic' || next.family === 'rose') matchedId = 'rose';
            else if (next.mood === 'fresh' || next.family === 'citrus') matchedId = 'emeraude';
            else matchedId = 'aurum';

            const foundIdx = auras.findIndex(a => a.id === matchedId);
            setQuizResult(foundIdx !== -1 ? foundIdx : 0);
        }
    };

    const resetQuiz = () => {
        setQuizAnswers({ mood: null, occasion: null, family: null });
        setQuizResult(null);
    };

    return (
        <section className="relative w-full bg-[#faf8f5] text-neutral-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/20 border-b border-black/5">
            {/* Ambient Warm Golden Orbs */}
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/40 via-yellow-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Editorial Top Heading */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-700/20 bg-amber-500/10 text-amber-900 text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>The Scent Experience Studio</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900 font-light leading-tight">
                        Discover Your <span className="italic font-normal bg-gradient-to-r from-amber-700 via-amber-600 to-amber-900 bg-clip-text text-transparent">Signature Aura</span>
                    </h2>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                        Every individual skin chemistry carries its own heat and cadence. Explore our four masterwork auras or take the 30-second bespoke fragrance profiler to find your soul accord.
                    </p>

                    {/* Mode Switcher Pills */}
                    <div className="pt-2 inline-flex items-center p-1 bg-white border border-neutral-200/90 rounded-full shadow-sm">
                        <button
                            onClick={() => setViewMode('curated')}
                            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${viewMode === 'curated'
                                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                                : 'text-neutral-600 hover:text-neutral-900'
                                }`}
                        >
                            ✨ Curated Auras
                        </button>
                        <button
                            onClick={() => setViewMode('quiz')}
                            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${viewMode === 'quiz'
                                ? 'bg-amber-500 text-neutral-950 shadow-sm'
                                : 'text-neutral-600 hover:text-neutral-900'
                                }`}
                        >
                            <Compass className="w-3.5 h-3.5" />
                            <span>Bespoke Profiler</span>
                        </button>
                    </div>
                </div>

                {/* MODE 1: CURATED AURAS SHOWCASE */}
                {viewMode === 'curated' && (
                    <div className="mt-12 space-y-10">
                        {/* 4 Aura Selector Tabs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                            {auras.map((aura, idx) => {
                                const isSelected = selectedAuraIndex === idx;
                                const IconComp = aura.icon;
                                return (
                                    <button
                                        key={aura.id}
                                        onClick={() => setSelectedAuraIndex(idx)}
                                        className={`p-4 rounded-2xl border text-left transition-all duration-500 flex flex-col justify-between cursor-pointer ${isSelected
                                            ? 'bg-white border-amber-500/50 shadow-lg shadow-amber-900/10 scale-[1.02]'
                                            : 'bg-white/60 hover:bg-white border-neutral-200/80 hover:border-amber-300/80'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div
                                                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isSelected ? 'bg-amber-500 text-white' : 'bg-neutral-100 text-neutral-600'
                                                    }`}
                                            >
                                                <IconComp className="w-4 h-4" />
                                            </div>
                                            <span className="text-[10px] font-mono text-neutral-400 font-semibold">
                                                0{idx + 1}
                                            </span>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-sm font-serif font-semibold text-neutral-900">
                                                {aura.name}
                                            </div>
                                            <div className="text-[11px] text-amber-800 font-medium mt-0.5">
                                                {aura.mood}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Main Aura Showcase Card */}
                        <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-2xl shadow-amber-900/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
                            {/* Left Column: Visual Bottle & Specs (5 Cols) */}
                            <div className="lg:col-span-5 p-8 lg:p-10 bg-gradient-to-b from-[#fdfbf9] to-[#f7f4ed] border-b lg:border-b-0 lg:border-r border-neutral-200/80 flex flex-col justify-between relative">
                                {/* Top Floating Badge */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs font-mono tracking-widest uppercase bg-white px-3 py-1 rounded-full border border-neutral-200/80 text-amber-900 font-semibold shadow-2xs">
                                        {currentAura.edition}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                                        <Award className="w-3.5 h-3.5 text-amber-600" />
                                        <span>{currentAura.affinity}% Skin Affinity</span>
                                    </div>
                                </div>

                                {/* Luxury Bottle Display */}
                                <div className="my-8 relative flex items-center justify-center">
                                    <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-3xl overflow-hidden shadow-2xl border border-white/60 group">
                                        <img
                                            src={currentAura.image}
                                            alt={currentAura.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                                                {currentAura.concentration}
                                            </div>
                                            <div className="text-2xl font-serif font-light">{currentAura.name}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Highlights Bar */}
                                <div className="grid grid-cols-2 gap-3 text-center">
                                    <div className="p-3 rounded-2xl bg-white/90 border border-neutral-200/80 shadow-2xs">
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Longevity</div>
                                        <div className="text-xs font-serif font-semibold text-neutral-900 mt-0.5">
                                            {currentAura.longevity}
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-2xl bg-white/90 border border-neutral-200/80 shadow-2xs">
                                        <div className="text-[10px] font-mono uppercase text-neutral-500">Projection Radius</div>
                                        <div className="text-xs font-serif font-semibold text-amber-800 mt-0.5">
                                            {currentAura.sillage}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: In-Depth Scent Narrative & Evolution (7 Cols) */}
                            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 font-semibold">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                        <span>Master Olfactory Profile</span>
                                    </div>

                                    <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-light mt-1">
                                        {currentAura.name}
                                    </h3>

                                    <p className="text-sm sm:text-base text-amber-900 font-medium italic mt-2">
                                        "{currentAura.tagline}"
                                    </p>

                                    <p className="text-sm text-neutral-600 leading-relaxed font-light mt-3">
                                        {currentAura.story}
                                    </p>

                                    {/* Ideal Occasion Pill */}
                                    <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs font-medium">
                                        <span className="font-semibold text-amber-800">Best Paired With:</span>
                                        <span>{currentAura.bestFor}</span>
                                    </div>
                                </div>

                                {/* 3-Stage Temporal Evolution Strip */}
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-700 font-semibold flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                                            16-Hour Scent Evolution
                                        </span>
                                        <span className="text-[11px] font-mono text-amber-800">Heat-Activated</span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {currentAura.stages.map((stage, i) => (
                                            <div
                                                key={i}
                                                className="p-3.5 rounded-2xl bg-[#faf8f5] border border-neutral-200/80 hover:border-amber-300 transition-colors"
                                            >
                                                <div className="text-[10px] font-mono font-semibold text-amber-800 uppercase">
                                                    {stage.time}
                                                </div>
                                                <div className="text-xs font-serif font-semibold text-neutral-900 mt-1">
                                                    {stage.label}
                                                </div>
                                                <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                                                    {stage.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sensory Radar Harmony Bars */}
                                <div>
                                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-700 font-semibold block mb-3">
                                        Sensory Dynamics
                                    </span>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {currentAura.radar.map((stat, i) => (
                                            <div key={i} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                                                <div className="text-[10px] text-neutral-500 font-medium">{stat.label}</div>
                                                <div className="text-lg font-serif font-semibold text-amber-800 mt-0.5">
                                                    {stat.val}%
                                                </div>
                                                <div className="w-full bg-neutral-200 h-1 rounded-full mt-1.5 overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-500 rounded-full transition-all duration-700"
                                                        style={{ width: `${stat.val}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Perfumer's Application Secret & Action */}
                                <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="max-w-md">
                                        <div className="text-[10px] font-mono uppercase text-amber-800 font-semibold flex items-center gap-1">
                                            <Droplets className="w-3 h-3 text-amber-600" />
                                            The Application Ritual
                                        </div>
                                        <p className="text-xs text-neutral-600 mt-0.5 italic leading-relaxed">
                                            "{currentAura.ritual}"
                                        </p>
                                    </div>

                                    <button className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-medium text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                                        <span>Order 2ml Sample</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MODE 2: INTERACTIVE 3-STEP SCENT PROFILER QUIZ */}
                {viewMode === 'quiz' && (
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-2xl shadow-amber-900/5">
                            {quizResult === null ? (
                                <div className="space-y-8">
                                    <div className="text-center max-w-lg mx-auto">
                                        <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                                            Bespoke Olfactory Diagnostic
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 font-light mt-1">
                                            Three Inquiries into Your Aesthetic
                                        </h3>
                                        <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-light">
                                            Select what resonates with your intuition. Our algorithm pairs your frequency with its soul fragrance.
                                        </p>
                                    </div>

                                    {/* Question 1: Mood Aura */}
                                    <div>
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block mb-3">
                                            1. What presence do you wish to project?
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                { id: 'radiant', label: 'Radiant & Sovereign', icon: '☀️' },
                                                { id: 'mysterious', label: 'Smoky & Enigmatic', icon: '🌙' },
                                                { id: 'romantic', label: 'Velvety & Romantic', icon: '🌹' },
                                                { id: 'fresh', label: 'Crisp & Commanding', icon: '🌲' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleQuizOption('mood', opt.id)}
                                                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${quizAnswers.mood === opt.id
                                                        ? 'bg-amber-50 border-amber-500 text-amber-950 font-semibold shadow-xs'
                                                        : 'bg-[#faf8f5] hover:bg-white border-neutral-200/80 text-neutral-700'
                                                        }`}
                                                >
                                                    <div className="text-2xl mb-1">{opt.icon}</div>
                                                    <div className="text-xs">{opt.label}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Question 2: Occasion */}
                                    <div>
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block mb-3">
                                            2. Where will this fragrance accompany you?
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                { id: 'gala', label: 'Galas & Soirées', icon: '🏛️' },
                                                { id: 'night', label: 'Midnight Rendezvous', icon: '🍷' },
                                                { id: 'day', label: 'Executive Signature', icon: '💼' },
                                                { id: 'escape', label: 'Intimate Escapes', icon: '✈️' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleQuizOption('occasion', opt.id)}
                                                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${quizAnswers.occasion === opt.id
                                                        ? 'bg-amber-50 border-amber-500 text-amber-950 font-semibold shadow-xs'
                                                        : 'bg-[#faf8f5] hover:bg-white border-neutral-200/80 text-neutral-700'
                                                        }`}
                                                >
                                                    <div className="text-2xl mb-1">{opt.icon}</div>
                                                    <div className="text-xs">{opt.label}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Question 3: Note Accord */}
                                    <div>
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block mb-3">
                                            3. Which natural essence warms your senses?
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                { id: 'amber', label: 'Molten Amber & Sandalwood', icon: '✨' },
                                                { id: 'oud', label: 'Aged Oud & Sacred Myrrh', icon: '🪵' },
                                                { id: 'rose', label: 'Centifolia Rose Petals', icon: '🥀' },
                                                { id: 'citrus', label: 'Mountain Bergamot & Cedar', icon: '🍋' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleQuizOption('family', opt.id)}
                                                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${quizAnswers.family === opt.id
                                                        ? 'bg-amber-50 border-amber-500 text-amber-950 font-semibold shadow-xs'
                                                        : 'bg-[#faf8f5] hover:bg-white border-neutral-200/80 text-neutral-700'
                                                        }`}
                                                >
                                                    <div className="text-2xl mb-1">{opt.icon}</div>
                                                    <div className="text-xs">{opt.label}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Quiz Result Card */
                                <div className="text-center space-y-6 animate-fadeIn">
                                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-semibold">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                        <span>Bespoke Match Harmonic: 99.4%</span>
                                    </div>

                                    <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-light">
                                        Your True Signature is{' '}
                                        <span className="italic font-normal text-amber-700">
                                            {auras[quizResult].name}
                                        </span>
                                    </h3>

                                    <p className="text-sm text-neutral-600 max-w-xl mx-auto font-light leading-relaxed">
                                        Based on your choices, this masterpiece complements your natural skin cadence, delivering an intoxicating {auras[quizResult].longevity} sillage.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6">
                                        <div className="w-48 h-60 rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
                                            <img
                                                src={auras[quizResult].image}
                                                alt={auras[quizResult].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="text-left space-y-3 max-w-sm">
                                            <div className="text-xs font-mono uppercase text-amber-800 font-semibold">
                                                {auras[quizResult].edition}
                                            </div>
                                            <div className="text-xl font-serif text-neutral-900 font-semibold">
                                                {auras[quizResult].name}
                                            </div>
                                            <p className="text-xs text-neutral-600 italic">
                                                "{auras[quizResult].tagline}"
                                            </p>
                                            <div className="pt-2 flex items-center gap-3">
                                                <button
                                                    onClick={() => {
                                                        setSelectedAuraIndex(quizResult);
                                                        setViewMode('curated');
                                                    }}
                                                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md cursor-pointer"
                                                >
                                                    View Full Profile
                                                </button>
                                                <button
                                                    onClick={resetQuiz}
                                                    className="p-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
                                                    title="Retake Quiz"
                                                >
                                                    <RotateCcw className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* The 3 Pillars of Haute Parfumerie (Curated Experience Grid) */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-lg hover:border-amber-400/50 transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-serif text-neutral-900 font-semibold">
                            90-Day Grasse Maceration
                        </h4>
                        <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-light">
                            Every extrait rests in climate-controlled limestone cellars in Grasse for a minimum of 90 days, enabling botanical essences to bind seamlessly with pure organic alcohol.
                        </p>
                    </div>

                    <div className="p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-lg hover:border-amber-400/50 transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5">
                            <Droplets className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-serif text-neutral-900 font-semibold">
                            High-Velocity Micro-Mist
                        </h4>
                        <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-light">
                            Engineered precision atomizers disperse 0.08ml micro-droplets per spray, generating an unbroken 360° olfactory halo that projects without overpowering.
                        </p>
                    </div>

                    <div className="p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-lg hover:border-amber-400/50 transition-all duration-300">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-5">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-serif text-neutral-900 font-semibold">
                            Biomimetic Skin Alchemy
                        </h4>
                        <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-light">
                            Our formulas interact with your unique skin pH and body temperature, ensuring the fragrance smells uniquely personalized and bespoke upon you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FragranceExperience;
