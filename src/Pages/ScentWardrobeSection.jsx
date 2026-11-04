import React, { useState } from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
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

const spraysList = [
  {
    id: 'coag-the-king',
    name: 'COAG The King',
    subtitle: 'Eau de Parfum • 50ml',
    tagline: 'Commanding Freshness & Masculine Authority',
    numericPrice: 999,
    price: '₹999',
    image: '/images/perfume_coag_king_floral_studio.jpg',
    family: 'Fresh Woody & Resinous',
    badgeColor: 'bg-amber-950/60 text-amber-300 border-amber-700/60',
    notes: {
      top: 'Calabrian Bergamot',
      heart: 'Tuscan Volcanic Cedar',
      base: 'Golden Amber & Birch'
    },
    story: 'High-performance extrait spray projecting 24+ hours of crisp Calabrian bergamot and smoky Tuscan cedar.',
    longevity: '24H+ Projection'
  },
  {
    id: 'coag-the-lagacy',
    name: 'COAG The Lagacy',
    subtitle: 'Eau de Parfum • 50ml',
    tagline: 'Luminous White Floral & Cashmere Woods',
    numericPrice: 1199,
    price: '₹1199',
    image: '/images/perfume_coag_lagacy_creative.jpg',
    family: 'Luminous Floral Mist',
    badgeColor: 'bg-stone-900/80 text-stone-300 border-stone-700/60',
    notes: {
      top: 'Dawn White Gardenia',
      heart: 'Crystalline Royal Amber',
      base: 'Velvety Cashmere Woods'
    },
    story: 'Luminous fine mist blending fresh white gardenia with velvety cashmere woods for an all-day luxury scent trail.',
    longevity: '20H+ Compliment Magnet'
  },
  {
    id: 'coag-the-antique',
    name: 'COAG The Antique',
    subtitle: 'Eau de Parfum • 50ml',
    tagline: 'Antique English Rose & Royal Amber',
    numericPrice: 1249,
    price: '₹1249',
    image: '/images/perfume_coag_antique_roses.jpg',
    family: 'Rose & Amber Prestige',
    badgeColor: 'bg-rose-950/60 text-rose-300 border-rose-700/60',
    notes: {
      top: 'English Garden Rose',
      heart: 'Dewy Blush Peonies',
      base: 'Royal Ambergris & Cedar'
    },
    story: 'Prestige artisanal spray atomizing dewy English roses and royal ambergris into a timeless, aristocratic sillage.',
    longevity: '22H+ Scent Memory'
  },
  {
    id: 'coag-the-queen',
    name: 'COAG The Queen',
    subtitle: 'Eau de Parfum • 50ml',
    tagline: 'Smoked Tonka & Sacred Myrrh for Evenings',
    numericPrice: 799,
    price: '₹799',
    image: '/images/perfume_coag_cylindrical_pink_white.jpg',
    family: 'Warm Oriental Amber',
    badgeColor: 'bg-purple-950/60 text-purple-300 border-purple-700/60',
    notes: {
      top: 'Smoked Cardamom',
      heart: 'Charred Tonka & Myrrh',
      base: 'Molten Gold Amber'
    },
    story: 'Intense nocturnal spray of smoked spices, charred tonka, and golden amber with seductive evening warmth.',
    longevity: '24H+ Intimate Sillage'
  }
];

const ScentWardrobeSection = ({ onExploreCollection }) => {
  const { formatPrice, addToCart } = useShop();
  const [activeSprayIdx, setActiveSprayIdx] = useState(0);

  const p = spraysList[activeSprayIdx];

  const handleOrderWhatsApp = (item) => {
    const phone = '919664506049';
    const formattedPrice = formatPrice(item.numericPrice || item.price);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const imageUrl = item.image
      ? (item.image.startsWith('http') ? item.image : `${origin}${item.image}`)
      : '';

    const lines = [
      `*COAG LUXURY SPRAY ORDER*`,
      `_Atelier Allocation Request_`,
      ``,
      `• *Fragrance Spray:* ${item.name}`,
      `• *Olfactory Profile:* ${item.family}`,
      `• *Price:* ${formattedPrice}`,
      item.subtitle ? `• *Size / Edition:* ${item.subtitle}` : null,
      item.notes ? `• *Olfactory Notes:* ${item.notes.top} • ${item.notes.heart} • ${item.notes.base}` : null,
      imageUrl ? `• *Product Image:* ${imageUrl}` : null,
      ``,
      `Please confirm allocation and direct dispatch from your Surat flagship atelier.`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines)}`, '_blank');
  };

  return (
    <section className="relative w-full bg-[#080808] text-white py-8 sm:py-10 border-y border-[#D4AF37]/20 overflow-hidden">
      {/* Subtle Warm Luxury Amber & Gold Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-gradient-to-b from-[#D4AF37]/15 via-amber-900/10 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-5 sm:space-y-6">

        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900/90 border border-[#D4AF37]/40 text-[#E5C07B] text-[10px] uppercase font-bold tracking-[0.22em] shadow-sm">
            <Sparkles size={11} className="text-[#D4AF37]" />
            <span>Signature Luxury Sprays</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
            Curated Signature Fragrance Sprays
          </h2>
        </div>

        {/* 4 SPRAY SWITCHER BOXES - ONLY SPRAY NAMES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
          {spraysList.map((item, idx) => {
            const isSelected = activeSprayIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSprayIdx(idx)}
                className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 cursor-pointer relative overflow-hidden group flex items-center justify-center ${isSelected
                  ? 'bg-neutral-900/95 border-[#D4AF37] shadow-[0_6px_22px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]/50 -translate-y-0.5'
                  : 'bg-neutral-950/70 hover:bg-neutral-900/80 border-neutral-800/90 hover:border-neutral-700 text-neutral-400'
                  }`}
              >
                {/* Active Gold Top Accent Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#D4AF37]" />
                )}

                <span className={`text-sm sm:text-[15px] font-serif font-bold tracking-wide block truncate transition-colors ${isSelected ? 'text-[#E5C07B]' : 'text-neutral-300 group-hover:text-white'
                  }`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRODUCT SHOWCASE HERO CARD (CLEAN & CONCISE) */}
        <div className="rounded-2xl sm:rounded-3xl bg-neutral-950/90 border border-neutral-800/90 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-sm p-4 sm:p-5 lg:p-6 overflow-hidden relative">
          {/* Subtle internal gold ambiance */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center relative">

            {/* Left Column: Visual Flacon Canvas (Optimized Height) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[260px] sm:max-w-[290px] aspect-[4/5] max-h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-neutral-800 bg-neutral-900 group">
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                />

                {/* Subtle soft edge gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Pill */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-neutral-700/80 text-[10px] font-bold text-neutral-200 shadow-sm flex items-center space-x-1">
                  <Sparkles size={10} className="text-[#D4AF37]" />
                  <span>50ML EXTRAIT SPRAY</span>
                </div>

                {/* Longevity Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md text-white border border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-300 font-semibold text-[10.5px]">
                    {p.longevity}
                  </span>
                  <span className="text-[9.5px] uppercase font-bold tracking-wider text-neutral-400">
                    35% Pure Extrait
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Olfactory Narrative & Buy Action (Concise) */}
            <div className="lg:col-span-7 space-y-3 order-1 lg:order-2">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider border ${p.badgeColor}`}>
                    {p.family}
                  </span>
                  <span className="text-xs text-neutral-600">•</span>
                  <span className="text-[11px] font-mono font-bold text-[#D4AF37]">
                    FLAGSHIP ATELIER
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {p.name}
                </h3>

                <p className="text-xs text-[#E5C07B] font-semibold uppercase tracking-wider">
                  {p.tagline}
                </p>
              </div>

              {/* Concise Product Description */}
              <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                {p.story}
              </p>

              {/* 3-Tier Olfactory Pyramid Display (Compact) */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/90 space-y-1.5">
                <span className="text-[9.5px] uppercase tracking-widest font-bold text-neutral-400 block">
                  Olfactory Progression
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-neutral-950/90 border border-neutral-800/80 shadow-2xs space-y-0.5">
                    <span className="text-[9px] uppercase font-bold text-amber-400 block">
                      🌿 Top Accord
                    </span>
                    <span className="text-neutral-200 text-[11px] font-medium block truncate">
                      {p.notes.top}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-neutral-950/90 border border-neutral-800/80 shadow-2xs space-y-0.5">
                    <span className="text-[9px] uppercase font-bold text-rose-400 block">
                      🌸 Heart Core
                    </span>
                    <span className="text-neutral-200 text-[11px] font-medium block truncate">
                      {p.notes.heart}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-neutral-950/90 border border-neutral-800/80 shadow-2xs space-y-0.5">
                    <span className="text-[9px] uppercase font-bold text-stone-300 block">
                      🪵 Base Drydown
                    </span>
                    <span className="text-neutral-200 text-[11px] font-medium block truncate">
                      {p.notes.base}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Immediate Action Row (Compact) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-neutral-800/80">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                    Prestige Price
                  </span>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-2xl sm:text-[28px] font-serif font-bold text-white tracking-tight">
                      {formatPrice(p.numericPrice)}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      (Taxes Included • Free Delivery)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => addToCart(p, 1, true)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:from-amber-400 hover:to-[#D4AF37] text-black font-extrabold text-[11px] uppercase tracking-[0.16em] transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-md shadow-[#D4AF37]/20 active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag size={13} />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={() => handleOrderWhatsApp(p)}
                    className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[11px] uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-sm shadow-[#25D366]/20 active:scale-95 cursor-pointer"
                    title="Order on WhatsApp (9664506049)"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ScentWardrobeSection;
