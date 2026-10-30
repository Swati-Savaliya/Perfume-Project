import React, { useEffect } from 'react';
import {
  Sparkles,
  Clock,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Droplets,
  Layers,
  HeartHandshake,
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

const WHATSAPP_NUMBER = '7203060213';

const stats = [
  { value: '35%', label: 'Pure Extrait', desc: '24-Hour Sillage' },
  { value: '90 Days', label: 'Slow Aging', desc: 'Cold Vault Maceration' },
  { value: '100%', label: 'Tuscan Leather', desc: 'Handcrafted Calfskin' },
  { value: '4 Salons', label: 'Global Suites', desc: 'Paris • Mumbai • London' },
];

const pillars = [
  {
    icon: <Droplets size={22} className="text-amber-400" />,
    title: '35% Pure Extrait',
    points: [
      'Grasse botanical floral extracts',
      'Authentic 24-hour long projection',
      'Zero synthetic fillers or water'
    ]
  },
  {
    icon: <Clock size={22} className="text-amber-400" />,
    title: '90-Day Maceration',
    points: [
      'Cold-vault aging in amber demijohns',
      'Harmonizes raw florals & resins',
      'Hand-inspected numbered batches'
    ]
  },
  {
    icon: <Layers size={22} className="text-amber-400" />,
    title: 'Tuscan Leathercraft',
    points: [
      'Full-grain Italian & French calfskin',
      'Hand-burnished wax-stitched edges',
      'Solid brass & ruthenium hardware'
    ]
  }
];

const salons = [
  { city: 'Paris', title: 'Flagship Salon', address: '28 Place Vendôme, 75001' },
  { city: 'Grasse', title: 'Perfumery Lab', address: '14 Rue des Parfums, 06130' },
  { city: 'Mumbai', title: 'Private Suite', address: 'The Taj Mahal Palace, Colaba' },
  { city: 'London', title: 'Mayfair Atelier', address: 'Old Bond Street, W1' }
];

const AboutUsPage = ({ onNavigateHome, onExploreCollection }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWhatsAppInquiry = () => {
    const phone = `91${WHATSAPP_NUMBER}`;
    const message = `Hello Maison COAG, I would like to inquire about your heritage creations and private allocations.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="w-full bg-[#fafafa] text-black min-h-screen selection:bg-black selection:text-white pb-20">

      {/* ========================================================
          1. HERO SECTION (Clean, Minimal, Stat Pills)
          ======================================================== */}
      <section className="relative bg-[#070709] text-white pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10">
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
              <span>MAISON COAG • PARIS & GRASSE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-wide text-white leading-tight">
              Artisanal Perfumes & Tuscan Leather
            </h1>

            <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Born in Grasse, France. Formulated with 35% pure extrait concentration and paired with handcrafted Italian leather goods.
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
          2. STORY SECTION (Visual & Bullet Highlights)
          ======================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Clean Visual Preview */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-black/10 aspect-[4/4] bg-neutral-900 group">
            <img
              src="/images/wide_perfume_splash.jpg"
              alt="COAG Craftsmanship"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                Handcrafted in Grasse & Tuscany
              </span>
            </div>
          </div>

          {/* Right: Crisp Bullet Highlights */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-amber-600 block">
                The Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-black">
                Crafted with Time, Not Rush
              </h2>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Dawn Harvest:</strong> Pure Centifolia roses & Calabrian bergamot picked at peak potency.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span><strong>90-Day Maceration:</strong> Cold-vault infusion for seamless aroma blending without synthetics.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Master Leathercraft:</strong> Italian calfskin belts & wallets with hand-burnished edges.</span>
              </div>
            </div>

            {/* Short Quote Card */}
            <div className="p-3.5 rounded-xl bg-neutral-100 border-l-3 border-amber-500 text-xs text-neutral-800 italic">
              “We do not follow trends; we craft flacons and leather pieces designed to last a lifetime.”
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. THREE PILLARS (Clean Structured Cards)
          ======================================================== */}
      <section className="bg-white py-14 sm:py-16 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-amber-600 block">
              Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-black">
              The Three Pillars of COAG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-black">
                  {pillar.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center space-x-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. GLOBAL SALONS (4 Clean Cards in 1 Row)
          ======================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-amber-600 block">
            Locations
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-black">
            Private Salons
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {salons.map((salon, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-1">
              <div className="flex items-center space-x-1.5 text-amber-600">
                <MapPin size={14} />
                <span className="text-[10.5px] uppercase tracking-wider font-bold">{salon.city}</span>
              </div>
              <p className="text-xs font-semibold text-black">{salon.title}</p>
              <p className="text-[11px] text-neutral-500">{salon.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. CONCIERGE CALL TO ACTION
          ======================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-black text-white p-6 sm:p-10 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-wide max-w-xl mx-auto">
            Experience the Atelier Creations
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
            Explore our handcrafted luxury perfumes, leather belts, and wallets with direct WhatsApp assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                if (onExploreCollection) onExploreCollection();
                else window.location.hash = '#collection';
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-xs uppercase tracking-[0.16em] font-bold shadow-md cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all text-xs uppercase tracking-[0.16em] font-bold shadow-md cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge (7203060213)</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
