import React, { useState } from 'react';

const FragranceExperience = () => {
    const [activeTab, setActiveTab] = useState('heart');

    const scentPyramid = {
        top: {
            title: "Top Notes",
            subtitle: "The First Impression (First 15-30 Mins)",
            description: "A luminous burst of hand-picked Mediterranean citrus and vibrant spices that awaken the senses immediately upon contact.",
            ingredients: [
                { name: "Calabrian Bergamot", origin: "Southern Italy", intensity: 90, tag: "Sparkling" },
                { name: "Pink Pepper Berry", origin: "Madagascar", intensity: 75, tag: "Spicy Fresh" },
                { name: "Crisp Green Apple", origin: "Normandy", intensity: 65, tag: "Crisp" }
            ]
        },
        heart: {
            title: "Heart Notes",
            subtitle: "The Soul of the Perfume (2 to 5 Hours)",
            description: "The core identity of the fragrance. A lush, sophisticated floral and balsamic bouquet that unfolds with warmth and grace.",
            ingredients: [
                { name: "Damask Rose Absolute", origin: "Grasse, France", intensity: 95, tag: "Velvety Floral" },
                { name: "Midnight Jasmine", origin: "Egypt", intensity: 88, tag: "Indolic & Sensual" },
                { name: "Tuscan Orris Root", origin: "Florence", intensity: 82, tag: "Powdery Elegance" }
            ]
        },
        base: {
            title: "Base Notes",
            subtitle: "The Lingering Memory (8 to 16+ Hours)",
            description: "Deep, hypnotic woods and resinous ambers that meld intimately with your skin, leaving an unforgettable trail (sillage).",
            ingredients: [
                { name: "Aged Smoked Oud", origin: "Cambodia", intensity: 98, tag: "Noble Woody" },
                { name: "Ambergris Accord", origin: "Oceanic", intensity: 92, tag: "Warm Sensual" },
                { name: "Bourbon Vanilla", origin: "Madagascar", intensity: 85, tag: "Sweet Smoky" }
            ]
        }
    };

    const collections = [
        {
            id: 1,
            name: "Éclat d'Or",
            type: "Extrait de Parfum",
            concentration: "26% Concentration",
            price: "₹8,499",
            rating: "4.9",
            desc: "Warm amber intertwined with solar jasmine and creamy sandalwood.",
            gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
            badge: "Best Seller",
            notes: ["Bergamot", "Jasmine", "Warm Amber"]
        },
        {
            id: 2,
            name: "Nocturne Noir",
            type: "Eau de Parfum Intense",
            concentration: "22% Concentration",
            price: "₹9,299",
            rating: "5.0",
            desc: "Smoky Cambodian Oud, wild Bulgarian rose, and spiced saffron mystery.",
            gradient: "from-purple-900/30 via-slate-900/20 to-transparent",
            badge: "Limited Edition",
            notes: ["Smoked Oud", "Black Rose", "Leather"]
        },
        {
            id: 3,
            name: "Fleur de Soie",
            type: "Parfum Royale",
            concentration: "24% Concentration",
            price: "₹7,899",
            rating: "4.8",
            desc: "Delicate white tea, dewy peony petals, and pure cashmere musk.",
            gradient: "from-rose-900/20 via-pink-900/10 to-transparent",
            badge: "Masterpiece",
            notes: ["White Peony", "Cashmere Wood", "Bourbon Vanilla"]
        }
    ];

    const currentNotes = scentPyramid[activeTab];

    return (
        <section className="relative w-full bg-[#0a0a0c] text-white py-24 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-amber-500/30">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-600/15 via-rose-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-md">
                        <span>✨</span>
                        <span>The Olfactory Architecture</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white font-light">
                        Symphony of <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Rare Essences</span>
                    </h2>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                        Every bottle is an emotional journey engineered through three distinct temporal dimensions. Discover how our fragrances evolve seamlessly with your skin chemistry.
                    </p>
                </div>

                {/* Pyramid Selector */}
                <div className="mt-14 max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 p-1.5 bg-neutral-900/80 border border-neutral-800 rounded-2xl backdrop-blur-xl">
                        {[
                            { id: 'top', label: 'Top Notes', time: '0 - 30 Mins', icon: '🍋' },
                            { id: 'heart', label: 'Heart Notes', time: '2 - 5 Hours', icon: '🌹' },
                            { id: 'base', label: 'Base Notes', time: '8 - 16+ Hours', icon: '🪵' }
                        ].map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-xl transition-all duration-300 relative ${isActive
                                        ? 'bg-gradient-to-b from-amber-500/20 to-neutral-900 border border-amber-500/40 text-amber-200 shadow-lg shadow-amber-500/10'
                                        : 'text-gray-400 hover:text-white hover:bg-neutral-800/40'
                                        }`}
                                >
                                    <span className="text-xl mb-1">{tab.icon}</span>
                                    <span className="text-sm font-medium tracking-wide">{tab.label}</span>
                                    <span className="text-[11px] text-gray-500 tracking-wider mt-0.5">{tab.time}</span>
                                    {isActive && (
                                        <span className="absolute -bottom-1 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Details Card */}
                    <div className="mt-8 p-6 md:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-2xl transition-all duration-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
                            <div>
                                <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">Current Layer</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-white mt-1">{currentNotes.title}</h3>
                                <p className="text-xs text-amber-200/80 font-light mt-0.5">{currentNotes.subtitle}</p>
                            </div>
                            <p className="text-sm text-gray-400 max-w-md font-light leading-relaxed">
                                {currentNotes.description}
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {currentNotes.ingredients.map((ing, idx) => (
                                <div
                                    key={idx}
                                    className="group p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/60 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                                            {ing.tag}
                                        </span>
                                        <span className="text-xs text-gray-400 font-mono">{ing.intensity}% Accord</span>
                                    </div>

                                    <h4 className="text-base font-medium text-white mt-3 group-hover:text-amber-200 transition-colors">
                                        {ing.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                        <span>📍</span> {ing.origin}
                                    </p>

                                    <div className="w-full bg-neutral-800/80 h-1.5 rounded-full mt-4 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-700 ease-out"
                                            style={{ width: `${ing.intensity}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Collection Cards */}
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">Curated Blends</span>
                            <h3 className="text-3xl font-serif font-light text-white mt-1">Master Perfumer's Selection</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {collections.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-950/20"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[11px] font-mono tracking-widest uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                        <div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
                                            <span>★</span>
                                            <span>{item.rating}</span>
                                        </div>
                                    </div>

                                    <div className="h-44 w-full flex items-center justify-center relative mb-6">
                                        <div className="w-24 h-36 rounded-t-xl rounded-b-3xl border border-amber-500/30 bg-gradient-to-b from-amber-400/10 via-neutral-900/40 to-amber-900/20 backdrop-blur-md flex flex-col items-center justify-between p-3 shadow-inner group-hover:scale-105 transition-transform duration-500">
                                            <div className="w-8 h-4 rounded-t-md bg-amber-400/40 border border-amber-300/40" />
                                            <div className="text-[10px] font-mono text-amber-300/60 uppercase tracking-tighter text-center">
                                                {item.type.split(" ")[0]}
                                            </div>
                                            <div className="w-6 h-0.5 bg-amber-500/40" />
                                        </div>
                                    </div>

                                    <span className="text-xs text-gray-500 uppercase font-mono tracking-wider">{item.concentration}</span>
                                    <h4 className="text-2xl font-serif text-white mt-1 group-hover:text-amber-200 transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {item.notes.map((note, i) => (
                                            <span key={i} className="text-[10px] font-light bg-neutral-800/80 text-gray-300 px-2 py-0.5 rounded-md border border-neutral-700/50">
                                                {note}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Price (50ml)</span>
                                        <span className="text-xl font-medium text-amber-300">{item.price}</span>
                                    </div>
                                    <button className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95">
                                        Order Sample
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Badges Footer */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md text-center">
                    <div>
                        <div className="text-amber-400 font-serif text-lg">100% Grasse</div>
                        <p className="text-gray-500 text-xs mt-0.5">Sustainably Extracted</p>
                    </div>
                    <div>
                        <div className="text-amber-400 font-serif text-lg">16+ Hours</div>
                        <p className="text-gray-500 text-xs mt-0.5">High Sillage & Longevity</p>
                    </div>
                    <div>
                        <div className="text-amber-400 font-serif text-lg">Cruelty-Free</div>
                        <p className="text-gray-500 text-xs mt-0.5">Clean & Vegan Formula</p>
                    </div>
                    <div>
                        <div className="text-amber-400 font-serif text-lg">Free Sample</div>
                        <p className="text-gray-500 text-xs mt-0.5">With Every Full Bottle</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FragranceExperience;