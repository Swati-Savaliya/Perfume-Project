import React, { useEffect } from 'react';
import {
  Sparkles,
  Clock,
  ArrowRight,
  ArrowLeft,
  Droplets,
  Wind,
  CheckCircle2,
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

const WHATSAPP_NUMBER = '9664962860';

const stats = [
  { value: '35%', label: 'Pure Extrait', desc: '24-Hour Sillage' },
  { value: '90 Days', label: 'Slow Aging', desc: 'Cold Vault Maceration' },
  { value: '650+', label: 'Micro-Sprays', desc: 'Precision Mist Atomizer' },
  { value: 'Surat', label: 'Flagship Atelier', desc: 'Surat, Gujarat • Paris' },
];

const pillars = [
  {
    num: '01',
    icon: <Droplets size={22} className="text-amber-400" />,
    badge: 'CONCENTRATION',
    title: '35% Pure Extrait Formulation',
    desc: 'Crafted at the pinnacle of French perfumery with 35% pure essential perfume oils. Unfolds with luxurious depth and texture, ensuring continuous 24-hour projection without flat chemical drydowns.',
    points: [
      'Authentic 24-hour continuous projection on skin and natural fabrics',
      'Grasse botanical floral extracts & Calabrian cold-pressed citrus',
      'Zero synthetic filler oils or water dilution'
    ],
    metric: '24H+ Sillage • 35% Extrait Ratio'
  },
  {
    num: '02',
    icon: <Clock size={22} className="text-amber-400" />,
    badge: 'MATURATION',
    title: '90-Day Cold Vault Maceration',
    desc: 'Patience is our primary craft. Each blend rests for 90 days in dark, temperature-controlled cold vaults at our Surat flagship atelier. Slow cold-infusion harmonizes raw resins and delicate florals for a velvety scent.',
    points: [
      'Cold-vault aging in temperature-regulated amber glass demijohns',
      'Harmonizes raw florals, resins & woods into velvety smooth sillage',
      'Zero harsh alcohol sting or chemical burn from the first spray'
    ],
    metric: '90 Days Aged • Zero Alcohol Sting'
  },
  {
    num: '03',
    icon: <Wind size={22} className="text-amber-400" />,
    badge: 'DISPERSION',
    title: '0.08mm Micro-Mist Precision Atomizer',
    desc: 'Engineered with high-pressure micro-orifice atomization that dispenses a featherweight, airy cloud. Delivers 650+ velvety sprays per 50ml flacon with uniform coverage and zero fabric staining.',
    points: [
      'Ultra-fine cloud mist dispersion for even pulse point coverage',
      'Delivers 650+ luxurious sprays per 50ml flacon',
      'Smooth, velvety touch engineered for skin & natural fabrics'
    ],
    metric: '650+ Fine Sprays • 0.08mm Nozzle'
  }
];

const AboutUsPage = ({ onNavigateHome, onExploreCollection }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWhatsAppInquiry = () => {
    const phone = `91${WHATSAPP_NUMBER}`;
    const message = `Hello COAG Parfums, I would like to inquire about your signature extrait fragrance sprays and private allocations.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="w-full bg-[#070709] text-white min-h-screen selection:bg-amber-400 selection:text-black pb-0">

      {/* ========================================================
          1. HERO SECTION (Clean, Minimal, Stat Pills)
          ======================================================== */}
      <section className="relative bg-[#070709] text-white pt-8 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[260px] bg-gradient-to-b from-amber-500/15 via-amber-900/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs tracking-widest uppercase font-semibold text-neutral-400">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                else window.location.hash = '#home';
              }}
              className="hover:text-amber-300 transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Home</span>
            </button>
            <span className="text-white/30">/</span>
            <span className="text-amber-400 font-bold">About Us</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[10px] uppercase tracking-[0.22em] font-bold">
              <Sparkles size={11} className="text-amber-400" />
              <span>COAG PARFUMS • HAUTE PARFUMERIE & ATELIER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-wide text-white leading-tight">
              Artisanal Perfumery & Haute Extrait Sprays
            </h1>

            <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Formulated with 35% pure extrait concentration and slow cold-macerated for 90 days. Handcrafted with French perfumery heritage at our Surat, Gujarat flagship atelier for enduring 24-hour sillage.
            </p>
          </div>

          {/* 4 Quick Stat Pills in 1 Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
            {stats.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400 block">{item.value}</span>
                <span className="text-[10px] tracking-widest uppercase text-neutral-300 font-semibold block">{item.label}</span>
                <span className="text-[10px] text-neutral-400 block">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COAG SIGNATURE SPRAY CRAFT (OUTSIDE IS WARM LIGHT BACKGROUND, LESS CONTENT)
          ======================================================== */}
      <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 border-y border-neutral-200/90 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#0c0c0e] text-white border border-amber-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6 sm:p-8 lg:p-10 overflow-hidden">
            {/* Subtle Warm Amber Atmospheric Glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative">

              {/* Left: Official COAG Spray Flacon & Box Visual with Floating Glass Badges */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 group">
                  <img
                    src="/images/perfume_coag_box_with_spray.jpg"
                    alt="COAG Official Signature Spray Flacon & Gift Box"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Edge Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-[9.5px] font-bold text-amber-300 shadow-sm flex items-center space-x-1">
                    <Sparkles size={10} className="text-amber-400" />
                    <span>COAG SIGNATURE EXTRAIT SPRAY</span>
                  </div>

                  {/* Floating Bottom Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md text-white border border-white/15 flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-300 font-bold text-[10.5px]">
                      650+ Precision Sprays
                    </span>
                    <span className="text-[9.5px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      50ml Atelier
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Concise Editorial Narrative & Sleek Feature Highlights */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[9.5px] uppercase tracking-[0.22em] font-bold">
                    <Sparkles size={10} className="text-amber-400" />
                    <span>The Spray Architecture</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-light text-white tracking-tight leading-tight">
                    Engineered for Sillage. Bottled with Soul.
                  </h2>

                  <p className="text-neutral-300 text-xs sm:text-[13px] leading-relaxed font-normal pt-0.5">
                    Handcrafted at our Surat flagship atelier with 35% pure essential extrait oils and a precision micro-atomizer for 24-hour velvety projection with zero harsh alcohol sting.
                  </p>
                </div>

                {/* 3 Compact Feature Highlights (Concise / Less Content) */}
                <div className="space-y-2 pt-0.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Wind size={15} />
                    </div>
                    <div className="text-xs">
                      <strong className="text-white font-semibold">0.08mm Micro-Mist Nozzle</strong>
                      <span className="text-neutral-400"> — Ultra-fine airy cloud dispersion without droplet stains</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Droplets size={15} />
                    </div>
                    <div className="text-xs">
                      <strong className="text-white font-semibold">35% Pure Extrait Formulation</strong>
                      <span className="text-neutral-400"> — Authentic Grasse oils with 24H+ continuous projection</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Clock size={15} />
                    </div>
                    <div className="text-xs">
                      <strong className="text-white font-semibold">90-Day Cold Vault Maceration</strong>
                      <span className="text-neutral-400"> — Aged in Surat for a velvety finish with zero alcohol burn</span>
                    </div>
                  </div>
                </div>

                {/* Prestige Metric Strip (Clean 4-col) */}
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-white/10 text-center">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-mono text-amber-300 font-bold text-xs sm:text-sm block">24H+</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Projection</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-mono text-amber-300 font-bold text-xs sm:text-sm block">650+</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Mist Sprays</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-mono text-amber-300 font-bold text-xs sm:text-sm block">35%</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Pure Extrait</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="font-mono text-amber-300 font-bold text-xs sm:text-sm block">Surat</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Atelier Bottled</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THREE PILLARS OF COAG PARFUMS (PROPER ARCHITECTURAL LUXURY DESIGN)
          ======================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-y border-white/10 overflow-hidden">
        {/* Subtle Ambient Gold Radiance */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-amber-500/10 via-amber-900/5 to-transparent rounded-full blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] uppercase tracking-[0.25em] font-bold">
              <Sparkles size={11} className="text-amber-400" />
              <span>Standards & Formulation Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-light text-white tracking-tight leading-tight">
              The Three Pillars of COAG Parfums
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed pt-1">
              Every creation is engineered according to authentic French extrait standards and bottled with artisanal pride at our Surat flagship atelier.
            </p>
          </div>

          {/* 3 Architectural Luxury Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 hover:border-amber-400/50 transition-all duration-300 space-y-5 shadow-2xl relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Active Gold Top Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Top Row: Roman Number, Icon Box & Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-light text-amber-400/70 group-hover:text-amber-400 transition-colors">
                      {pillar.num}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-105 transition-all shadow-md">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Pillar Title & Badge */}
                  <div className="space-y-1.5">
                    <span className="text-[9.5px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block">
                      {pillar.badge}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* In-depth Topic-Specific Narrative */}
                  <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-neutral-300">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2">
                        <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-3 border-t border-white/10 text-center">
                  <span className="font-mono text-[10.5px] font-bold text-amber-300/90 uppercase tracking-wider block">
                    {pillar.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. CONCIERGE CALL TO ACTION (LIGHT LUXURY ATELIER DESIGN)
          ======================================================== */}
      <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 border-t border-neutral-200/90 relative text-neutral-900 mt-12 sm:mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white text-neutral-900 p-8 sm:p-12 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-amber-600/20 overflow-hidden">
            {/* Subtle Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            {/* Atelier Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-600/25 text-amber-900 text-[10.5px] uppercase tracking-[0.22em] font-bold">
              <Sparkles size={11} className="text-amber-700" />
              <span>COAG PARFUMS • Surat Flagship Atelier</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-light text-neutral-900 tracking-tight leading-tight">
              Experience the Atelier Creations
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-xs sm:text-sm max-w-lg mx-auto font-normal leading-relaxed">
              Explore our signature 35% pure extrait fragrance sprays or connect directly with our Surat atelier concierge for private inquiries and personalized recommendations.
            </p>

            {/* 3 Pillar Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 py-1 text-neutral-700 text-xs font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 size={14} className="text-amber-700" />
                <span>35% Pure Extrait Sprays</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 size={14} className="text-amber-700" />
                <span>24-Hour Continuous Sillage</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 size={14} className="text-amber-700" />
                <span>Surat Atelier Direct Dispatch</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  if (onExploreCollection) onExploreCollection();
                  else window.location.hash = '#collection';
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-all text-xs uppercase tracking-[0.18em] font-bold shadow-lg cursor-pointer flex items-center justify-center space-x-2.5 active:scale-95 group"
              >
                <span>Explore Collection</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all text-xs uppercase tracking-[0.18em] font-bold shadow-md cursor-pointer flex items-center justify-center space-x-2.5 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
