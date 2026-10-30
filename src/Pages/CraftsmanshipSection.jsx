import React, { useState, useEffect } from 'react';
import { Sparkles, Wind } from 'lucide-react';

// Full-Width Dynamic Spray Explosion Presets with Dramatic Dark-to-Light Chiaroscuro Lighting
const sprayExperiences = [
  {
    id: 'aurum',
    tag: 'ÉDITION LIMITÉE • 01',
    category: "L'ART DE L'ATOMISATION",
    title: 'The Golden Sillage',
    description:
      'Sun-drenched amber, charred tonka, and smoked spices suspended in high-velocity micro-droplets. Engineered to envelop the senses in an unbroken, warm golden aura that lingers on the skin from dusk until dawn.',
    image: '/images/wide_perfume_splash.jpg',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    lightBeamColor: 'radial-gradient(ellipse 75% 65% at 80% 32%, rgba(255, 240, 200, 0.42) 0%, rgba(245, 158, 11, 0.22) 42%, transparent 78%)',
    bloomGradient: 'radial-gradient(circle, rgba(254, 240, 138, 0.38) 0%, rgba(245, 158, 11, 0.18) 50%, transparent 80%)',
    accent: 'text-amber-400',
    borderAccent: 'border-amber-400/30 hover:border-amber-400/70',
    cardGlow: 'hover:shadow-[0_10px_30px_rgba(245,158,11,0.25)]',
    dotColor: 'bg-amber-400',
    particleColor: 'rgba(251, 191, 36, 0.85)',
    purity: 'Extrait de Parfum • 38% Concentration',
    notes: [
      { tier: 'HEAD', accord: 'Smoked Cardamom & Bergamot', hint: 'First 30 minutes of radiant burst' },
      { tier: 'HEART', accord: 'Molten Amber & Wild Tonka', hint: '4 to 8 hours opulent core' },
      { tier: 'BASE', accord: 'Ancient Cedar & Sacred Myrrh', hint: '24-hour warm tactile dry-down' },
    ],
    specs: ['0.08ml Micro-Mist Velocity', '24H Continuous Diffusion', 'Aged in Grasse Limestone Cellars'],
  },
  {
    id: 'obsidienne',
    tag: 'ÉDITION NOIRE • 02',
    category: 'CRYOGENIC CRUSH EXTRACTION',
    title: 'The Obsidian Wave',
    description:
      'An elemental clash of cold Haitian vetiver, oceanic minerals, and crushed volcanic black pepper, captured in an explosive crystalline splash distilled directly over frozen basalt stone.',
    image: '/images/wide_noir_splash.jpg',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    lightBeamColor: 'radial-gradient(ellipse 75% 65% at 80% 32%, rgba(225, 248, 255, 0.45) 0%, rgba(56, 189, 248, 0.24) 42%, transparent 78%)',
    bloomGradient: 'radial-gradient(circle, rgba(186, 230, 253, 0.38) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 80%)',
    accent: 'text-sky-300',
    borderAccent: 'border-sky-400/30 hover:border-sky-400/70',
    cardGlow: 'hover:shadow-[0_10px_30px_rgba(56,189,248,0.25)]',
    dotColor: 'bg-sky-400',
    particleColor: 'rgba(125, 211, 252, 0.85)',
    purity: 'Extrait de Parfum • 35% Pure Cryo-Extract',
    notes: [
      { tier: 'HEAD', accord: 'Black Pepper & Oceanic Mist', hint: 'High-impact cold opening splash' },
      { tier: 'HEART', accord: 'Haitian Vetiver & Cold Basalt', hint: 'Earthy volcanic mineral heart' },
      { tier: 'BASE', accord: 'Marine Ambergris & Dark Birch', hint: 'Deep nocturnal marine longevity' },
    ],
    specs: ['Cryo-Filtration Process', 'High-Impact Splash Architecture', 'Atlantic Mineral Distillation'],
  },
];

// Predefined drifting mist particles for live atomization atmosphere
const mistParticles = [
  { id: 1, top: '42%', left: '30%', size: 6, delay: '0s', duration: '4.8s', reverse: false },
  { id: 2, top: '36%', left: '44%', size: 4, delay: '1.2s', duration: '5.5s', reverse: true },
  { id: 3, top: '54%', left: '38%', size: 8, delay: '2.1s', duration: '6.2s', reverse: false },
  { id: 4, top: '29%', left: '52%', size: 5, delay: '0.6s', duration: '4.4s', reverse: true },
  { id: 5, top: '47%', left: '61%', size: 7, delay: '2.8s', duration: '5.9s', reverse: false },
  { id: 6, top: '62%', left: '48%', size: 4, delay: '1.6s', duration: '5.2s', reverse: true },
  { id: 7, top: '38%', left: '69%', size: 6, delay: '3.3s', duration: '4.9s', reverse: false },
  { id: 8, top: '51%', left: '76%', size: 5, delay: '0.4s', duration: '4.1s', reverse: true },
  { id: 9, top: '33%', left: '39%', size: 9, delay: '2.4s', duration: '7.1s', reverse: false },
  { id: 10, top: '66%', left: '59%', size: 6, delay: '1.8s', duration: '6.0s', reverse: true },
  { id: 11, top: '44%', left: '82%', size: 4, delay: '3.7s', duration: '5.3s', reverse: false },
  { id: 12, top: '25%', left: '65%', size: 5, delay: '1.0s', duration: '4.6s', reverse: true },
];

const DURATION_MS = 7000;

const CraftsmanshipSection = () => {
  const [activeSpray, setActiveSpray] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const current = sprayExperiences[activeSpray];

  // Auto-advance timer with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSpray((curr) => (curr === 0 ? 1 : 0));
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, activeSpray]);

  const handleSelectTab = (idx) => {
    setActiveSpray(idx);
    setProgress(0);
  };

  return (
    <section
      id="craftsmanship"
      className="relative w-full bg-gradient-to-r from-black via-[#060609] to-[#0e0e14] text-white overflow-hidden border-b border-white/10 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ========================================================
          FULL-WIDTH CINEMATIC SPRAY CANVAS (DARK TO LIGHT CHIAROSCURO)
          ======================================================== */}
      <div className="relative w-full min-h-[520px] sm:min-h-[560px] lg:h-[600px] flex items-center overflow-hidden">

        {/* Full Bleed Background Spray Image with Ken Burns Breathing Motion */}
        {sprayExperiences.map((exp, idx) => {
          const isActive = activeSpray === idx;
          return (
            <div
              key={exp.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className={`w-full h-full object-cover object-center ${isActive ? 'animate-kenburns' : ''
                  }`}
              />
            </div>
          );
        })}

        {/* ========================================================
            DARK-TO-LIGHT LIGHTING LAYERS
            ======================================================== */}

        {/* Layer 1: Volumetric Radial Sunlight/Spotlight Beam (Right Side Light Source) */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] transition-all duration-1000 mix-blend-screen opacity-90"
          style={{ background: current.lightBeamColor }}
        />

        {/* Layer 2: Radiant Ambient Light Bloom behind the Spray Burst */}
        <div
          className="pointer-events-none absolute z-[3] right-6 sm:right-24 top-1/2 -translate-y-1/2 w-[420px] sm:w-[680px] h-[400px] rounded-full blur-[110px] opacity-55 transition-all duration-1000"
          style={{ background: current.bloomGradient }}
        />

        {/* Layer 3: Floating Luminous Mist Particles / Atomized Droplets */}
        <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden">
          {mistParticles.map((pt) => (
            <div
              key={pt.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                top: pt.top,
                left: pt.left,
                width: `${pt.size}px`,
                height: `${pt.size}px`,
                backgroundColor: current.particleColor,
                boxShadow: `0 0 ${pt.size * 2.5}px ${current.particleColor}`,
                animation: `${pt.reverse ? 'mistFloatReverse' : 'mistFloat'} ${pt.duration} ease-in-out infinite`,
                animationDelay: pt.delay,
              }}
            />
          ))}
        </div>

        {/* Layer 4: TRUE DARK-TO-LIGHT HORIZONTAL GRADIENT (Deep Noir Shadow on Left -> Radiant Light on Right) */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-black/98 via-black/75 via-40% to-transparent" />

        {/* Layer 5: Vertical Depth Vignettes (Top subtle blend & Bottom stage shadow) */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-black/45 via-transparent to-black/70" />

        {/* Layer 6: Dynamic Light Sweep Beam (Sweeps from Dark Left to Light Right) */}
        <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
          <div className="w-[35%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep blur-md" />
        </div>

        {/* Subtle Warm/Cool Core Aura behind the Flacon Silhouette */}
        <div
          className="pointer-events-none absolute z-[5] left-6 top-1/2 -translate-y-1/2 w-[520px] h-[340px] rounded-full blur-[140px] animate-aura-breathe transition-all duration-1000"
          style={{ backgroundColor: current.glowColor }}
        />

        {/* Content Layer (Full-Width Constrained Content Container) */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full py-8 sm:py-10 flex flex-col justify-between h-full">

          {/* Top Row: Category Tag & Animated Interactive Experience Toggles */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4">

            {/* Live Atomization Badge with Micro-Pulse */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 shadow-xl transition-all duration-500">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dotColor}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dotColor}`} />
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.3em] uppercase text-neutral-300 font-medium">
                {current.tag}
              </span>
              <span className="text-white/30">•</span>
              <span className={`text-[10px] sm:text-[10.5px] font-mono tracking-[0.25em] uppercase font-bold ${current.accent}`}>
                {current.category}
              </span>
            </div>

            {/* Interactive Toggle with Integrated Progress Bar */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black/80 backdrop-blur-md p-1 sm:p-1.5 rounded-full border border-white/15 shadow-2xl max-w-full overflow-hidden">

              {/* Tab 01: Gold Mist */}
              <button
                onClick={() => handleSelectTab(0)}
                className={`relative overflow-hidden px-2.5 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase font-bold transition-all duration-300 ${activeSpray === 0
                  ? 'bg-amber-400 text-black shadow-[0_0_25px_rgba(251,191,36,0.5)] scale-102'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-1.5">
                  <Sparkles size={11} className={activeSpray === 0 ? 'text-black' : 'text-neutral-400'} />
                  <span>01 • GOLD MIST</span>
                </span>
                {activeSpray === 0 && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-black/60 transition-all ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>

              {/* Tab 02: Obsidian Splash */}
              <button
                onClick={() => handleSelectTab(1)}
                className={`relative overflow-hidden px-2.5 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase font-bold transition-all duration-300 ${activeSpray === 1
                  ? 'bg-sky-400 text-black shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-102'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className="relative z-10 flex items-center space-x-1 sm:space-x-1.5">
                  <Wind size={11} className={activeSpray === 1 ? 'text-black' : 'text-neutral-400'} />
                  <span>02 • OBSIDIAN SPLASH</span>
                </span>
                {activeSpray === 1 && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-black/60 transition-all ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            </div>
          </div>
          {/* Center: Editorial Grand Title & Scent Accords (In Crisp Dark Shadow for 100% Legibility) */}
          <div
            key={current.id}
            className="max-w-2xl space-y-4 my-auto animate-luxury-fade"
          >
            {/* Title & Purity Badge */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.35em] font-semibold ${current.accent}`}>
                  {current.purity}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide leading-none drop-shadow-2xl">
                {current.title}
              </h2>
            </div>

            {/* Poetic Description with enhanced line-height */}
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-xl">
              {current.description}
            </p>

            {/* Olfactory Architecture (3-Tier Accord Cards with Staggered Hover Elevation) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              {current.notes.map((item, idx) => (
                <div
                  key={idx}
                  className={`group p-3.5 rounded-xl bg-black/60 backdrop-blur-md border ${current.borderAccent} ${current.cardGlow} transition-all duration-300 hover:-translate-y-1 cursor-default`}
                  style={{
                    animationDelay: `${idx * 120}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[9.5px] font-mono tracking-[0.25em] font-bold ${current.accent}`}>
                      {item.tier}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors" />
                  </div>
                  <span className="text-xs text-white font-serif leading-tight block font-medium group-hover:text-white transition-colors">
                    {item.accord}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-sans block mt-1 leading-snug group-hover:text-neutral-300 transition-colors">
                    {item.hint}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Specs Strip (Sleek Single Line with Radar Pulse Indicators) */}
          <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-neutral-300">
            <div className="flex items-center space-x-6">
              {current.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${current.dotColor}`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dotColor}`} />
                  </span>
                  <span className="text-[11px] tracking-wide text-neutral-200">{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 text-[10.5px] uppercase tracking-[0.25em] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Maison Fondée à Grasse, France</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CraftsmanshipSection;
