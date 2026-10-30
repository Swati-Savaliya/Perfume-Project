import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Heart, ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight, X, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

const products = [
  // ==========================================
  // PERFUMES (9 Creations with Splash Images)
  // ==========================================
  {
    id: 'emeraude-noir',
    name: 'ÉMERAUDE NOIR',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'OFFICE', 'CHAMPION', 'GYM WORKOUT'],
    family: 'Fresh Woody & Resinous',
    notes: 'Calabrian Bergamot • Tuscan Cedar • Golden Amber',
    price: '₹285',
    rating: 4.9,
    reviews: 142,
    badge: 'PERFUME',
    image: '/images/perfume_emerald_splash.jpg',
    bottleImage: '/images/hero_perfume.jpg',
    fallbackImage: '/images/hero_perfume.jpg',
    images: [
      '/images/perfume_emerald_splash.jpg',
      '/images/hero_perfume.jpg',
      '/images/perfume_emerald_macro.jpg',
    ],
    description: 'A nocturnal rush of cold mountain bergamot and molten amber resin splashing upon ancient volcanic cedar. Clean, crisp, and commanding for office meetings and champion performance.',
  },
  {
    id: 'ambre-imperial',
    name: 'AMBRE IMPÉRIAL',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'DATE NIGHT', 'HAWAS ON BED', 'CLUBBING'],
    family: 'Warm Oriental Amber',
    notes: 'Smoked Cardamom • Charred Tonka • Sacred Myrrh',
    price: '₹295',
    rating: 5.0,
    reviews: 98,
    badge: 'PERFUME',
    image: '/images/perfume_amber_splash.jpg',
    bottleImage: '/images/perfume_amber.jpg',
    fallbackImage: '/images/perfume_amber.jpg',
    images: [
      '/images/perfume_amber_splash.jpg',
      '/images/perfume_amber.jpg',
      '/images/perfume_amber_macro.jpg',
    ],
    description: 'A regal eruption of smoked cardamom, scorched wild tonka, and sacred myrrh steeped in molten gold. Rich oriental warmth tailored for intimate date nights and unforgettable clubbing.',
  },
  {
    id: 'rose-eternelle',
    name: 'ROSE ÉTERNELLE',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'SCHOOL / COLLEGE', 'FUNCTION'],
    family: 'Spiced Floral Velour',
    notes: 'Damask Rose • Pink Peppercorn • Cashmere Woods',
    price: '₹320',
    rating: 4.8,
    reviews: 116,
    badge: 'PERFUME',
    image: '/images/perfume_rose_splash.jpg',
    bottleImage: '/images/perfume_rose.jpg',
    fallbackImage: '/images/perfume_rose.jpg',
    images: [
      '/images/perfume_rose_splash.jpg',
      '/images/perfume_rose.jpg',
      '/images/perfume_rose_macro.jpg',
    ],
    description: 'Dawn-harvested Centifolia roses draped in crisp pink peppercorn and velvety cashmere woods. Fresh, dewy, and uplifting for college daily wear and grand family functions.',
  },
  {
    id: 'santal-blanc',
    name: 'SANTAL BLANC',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'OFFICE', 'SCHOOL / COLLEGE'],
    family: 'Pure Woody Mineral',
    notes: 'White Sandalwood • Iris Root • Cardamom Pod',
    price: '₹275',
    rating: 4.9,
    reviews: 84,
    badge: 'PERFUME',
    image: '/images/perfume_santal_splash.jpg',
    bottleImage: '/images/perfume_santal.jpg',
    fallbackImage: '/images/perfume_santal.jpg',
    images: [
      '/images/perfume_santal_splash.jpg',
      '/images/perfume_santal.jpg',
      '/images/perfume_santal_macro.jpg',
    ],
    description: 'Creamy Australian sandalwood balanced with crystalline Florentine iris and aromatic green cardamom pods. Sophisticated everyday scent for office executives and academic brilliance.',
  },
  {
    id: 'noir-absolu',
    name: 'NOIR ABSOLU',
    subtitle: 'Extrait de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'HAWAS ON BED', 'CLUBBING'],
    family: 'Dark Smoky Balsam',
    notes: 'Birch Tar • Black Pepper • Madagascar Vanilla',
    price: '₹340',
    rating: 5.0,
    reviews: 156,
    badge: 'PERFUME',
    image: '/images/perfume_noir_splash.jpg',
    bottleImage: '/images/perfume_noir_still.jpg',
    fallbackImage: '/images/perfume_noir_still.jpg',
    images: [
      '/images/perfume_noir_splash.jpg',
      '/images/perfume_noir_still.jpg',
      '/images/perfume_noir_macro.jpg',
    ],
    description: 'A deep, mysterious veil of smoldering birch wood, crackling black pepper, and dark Bourbon vanilla absolute. Magnetic and irresistible for seductive late nights and high-octane clubbing.',
  },
  {
    id: 'cuir-majestueux',
    name: 'CUIR MAJESTUEUX',
    subtitle: 'Extrait de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'CHAMPION', 'FUNCTION'],
    family: 'Imperial Leather Chypre',
    notes: 'Saddle Leather • Saffron Thread • Patchouli Leaf',
    price: '₹360',
    rating: 4.9,
    reviews: 92,
    badge: 'PERFUME',
    image: '/images/perfume_amber_splash.jpg',
    bottleImage: '/images/perfume_amber.jpg',
    fallbackImage: '/images/perfume_amber.jpg',
    images: [
      '/images/perfume_amber_splash.jpg',
      '/images/perfume_amber.jpg',
      '/images/perfume_amber_macro.jpg',
    ],
    description: 'Hand-buffed saddle leather enriched with fiery crimson saffron and aged Indonesian patchouli. Crafted for champions and high-profile wedding functions demanding an unforgettable royal presence.',
  },
  {
    id: 'fleur-blanche',
    name: 'FLEUR BLANCHE',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'SCHOOL / COLLEGE', 'DATE NIGHT'],
    family: 'Luminous Solar Floral',
    notes: 'Night-Blooming Jasmine • Neroli • White Musk',
    price: '₹260',
    rating: 4.8,
    reviews: 73,
    badge: 'PERFUME',
    image: '/images/perfume_rose_splash.jpg',
    bottleImage: '/images/perfume_rose.jpg',
    fallbackImage: '/images/perfume_rose.jpg',
    images: [
      '/images/perfume_rose_splash.jpg',
      '/images/perfume_rose.jpg',
      '/images/perfume_rose_macro.jpg',
    ],
    description: 'Sun-drenched Mediterranean neroli blossoms entwined with nocturnal Grasse jasmine petals and airy crystalline white musk. An effortless compliment-magnet for college campuses and romantic dates.',
  },
  {
    id: 'bleu-azur',
    name: 'BLEU AZUR',
    subtitle: 'Eau de Parfum • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'GYM WORKOUT', 'OFFICE'],
    family: 'Marine Aquatic Citrus',
    notes: 'French Sea Salt • Grapefruit Zest • Vetiver',
    price: '₹270',
    rating: 4.9,
    reviews: 88,
    badge: 'PERFUME',
    image: '/images/perfume_emerald_splash.jpg',
    bottleImage: '/images/hero_perfume.jpg',
    fallbackImage: '/images/hero_perfume.jpg',
    images: [
      '/images/perfume_emerald_splash.jpg',
      '/images/hero_perfume.jpg',
      '/images/perfume_emerald_macro.jpg',
    ],
    description: 'A frosty tidal surge of French sea salt and iced grapefruit zest grounded by crisp Haitian vetiver. High-end freshness that maintains supreme performance during intense gym workouts and long office shifts.',
  },
  {
    id: 'lor-solaire',
    name: "L'OR SOLAIRE",
    subtitle: 'Bespoke Reserve • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'INFLUENCER SERIES', 'CHAMPION'],
    family: 'Gilded Amber Oud',
    notes: 'Golden Amber • Kashmiri Saffron • Royal Oud',
    price: '₹390',
    rating: 5.0,
    reviews: 184,
    badge: 'PERFUME',
    image: '/images/perfume_gold_splash.jpg',
    bottleImage: '/images/perfume_gold.jpg',
    fallbackImage: '/images/perfume_gold.jpg',
    images: [
      '/images/perfume_gold_splash.jpg',
      '/images/perfume_gold.jpg',
      '/images/perfume_gold_macro.jpg',
    ],
    description: 'The trending viral sensation praised by top fragrance influencers worldwide. Rare saffron threads, smoked Cambodian oud, and golden caramelized amber with monumental sillage.',
  },

  // ==========================================
  // BELTS (4 Handcrafted Luxury Creations)
  // ==========================================
  {
    id: 'belt-heritage-noir',
    name: "L'HÉRITAGE CALFSKIN BELT",
    subtitle: 'Italian Full-Grain Leather • 35mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT', 'OFFICE', 'CHAMPION', 'FUNCTION'],
    family: 'Full-Grain Tuscan Calfskin',
    notes: 'Brushed Ruthenium Clasp • Hand-Burnished Edge • Reversible Noir/Cognac',
    price: '₹3,450',
    numericPrice: 3450,
    rating: 4.9,
    reviews: 86,
    badge: 'BELT',
    image: '/images/belt_1.jpg',
    bottleImage: '/images/belt_1.jpg',
    fallbackImage: '/images/belt_1.jpg',
    images: [
      '/images/belt_1.jpg',
      '/images/belt_1_buckle.jpg',
      '/images/belt_1_detail.jpg',
    ],
    description: 'Handcrafted in Tuscany from select full-grain box calfskin leather. Featuring an ultra-durable brushed ruthenium buckle and micro-beveled, hand-lacquered edges designed for boardrooms and black-tie galas.',
  },
  {
    id: 'belt-monogram-saddle',
    name: 'MONOGRAM SADDLE LEATHER BELT',
    subtitle: 'Artisanal Cognac Leather • 38mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT', 'DATE NIGHT', 'CLUBBING', 'INFLUENCER SERIES'],
    family: 'Vegetable-Tanned Saddle Leather',
    notes: 'Solid Brass COAG Monogram Buckle • Waxed Linen Double-Stitch • Rich Patina',
    price: '₹3,850',
    numericPrice: 3850,
    rating: 5.0,
    reviews: 112,
    badge: 'BELT',
    image: '/images/belt_2.jpg',
    bottleImage: '/images/belt_2.jpg',
    fallbackImage: '/images/belt_2.jpg',
    images: [
      '/images/belt_2.jpg',
      '/images/belt_2_buckle.jpg',
      '/images/belt_2_detail.jpg',
    ],
    description: 'Constructed from heavy vegetable-tanned bridle leather steeped in botanical oils. Embellished with the signature COAG solid brass buckle that acquires a magnificent individual patina over decades of wear.',
  },
  {
    id: 'belt-stealth-formal',
    name: 'LE STEALTH NOIR DRESS BELT',
    subtitle: 'Ultra-Fine French Boxcalf • 30mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT', 'OFFICE', 'FUNCTION'],
    family: 'French Smooth Boxcalf',
    notes: 'Matte Gunmetal Low-Profile Buckle • Feathered Edge • High-Gloss Mirror Finish',
    price: '₹2,950',
    numericPrice: 2950,
    rating: 4.8,
    reviews: 64,
    badge: 'BELT',
    image: '/images/belt_3.jpg',
    bottleImage: '/images/belt_3.jpg',
    fallbackImage: '/images/belt_3.jpg',
    images: [
      '/images/belt_3.jpg',
      '/images/belt_3_buckle.jpg',
      '/images/belt_3_detail.jpg',
    ],
    description: 'The definitive formal evening dress belt. Engineered with a slender 30mm profile and stealth satin-finished gunmetal buckle, designed to seamlessly complement tailored tuxedos and bespoke suiting.',
  },
  {
    id: 'belt-croco-embossed',
    name: 'EXOTIC CROCO-EMBOSSED BELT',
    subtitle: 'Hand-Glazed Calfskin • 35mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT', 'CLUBBING', 'INFLUENCER SERIES', 'HAWAS ON BED'],
    family: 'Hand-Embossed Croco Calfskin',
    notes: 'Palladium Plate Buckle • Deep Midnight Lustre • Velvet Nubuck Backing',
    price: '₹3,950',
    numericPrice: 3950,
    rating: 4.9,
    reviews: 79,
    badge: 'BELT',
    image: '/images/belt_4.jpg',
    bottleImage: '/images/belt_4.jpg',
    fallbackImage: '/images/belt_4.jpg',
    images: [
      '/images/belt_4.jpg',
      '/images/belt_4_buckle.jpg',
      '/images/belt_4_detail.jpg',
    ],
    description: 'An audacious statement piece featuring high-definition crocodile scale embossing on premium French calfskin, backed by soft calf nubuck and crowned with a palladium-plated buckle.',
  },

  // ==========================================
  // WALLETS / WOLET (4 Luxury Leather Goods)
  // ==========================================
  {
    id: 'wallet-portefeuille-bifold',
    name: 'PORTEFEUILLE NOIR BIFOLD',
    subtitle: 'French Boxcalf Leather • 8 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET', 'OFFICE', 'FUNCTION'],
    family: 'French Box-Calf Leather',
    notes: '8 Card Pockets • Dual Currency Dividers • RFID Skim-Block Shielding',
    price: '₹2,450',
    numericPrice: 2450,
    rating: 4.9,
    reviews: 134,
    badge: 'WALLET',
    image: '/images/wallet_1.jpg',
    bottleImage: '/images/wallet_1.jpg',
    fallbackImage: '/images/wallet_1.jpg',
    images: [
      '/images/wallet_1.jpg',
      '/images/wallet_1_inside.jpg',
      '/images/wallet_1_detail.jpg',
    ],
    description: 'Precision handcrafted bifold wallet fashioned from supple French boxcalf. Built with integrated military-grade RFID protection, eight hand-turned card slots, and dual currency partitions.',
  },
  {
    id: 'wallet-slim-cardholder',
    name: 'LE SLIM COAG CARDHOLDER',
    subtitle: 'Ultra-Thin Saffiano • 6 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET', 'SCHOOL / COLLEGE', 'GYM WORKOUT', 'DATE NIGHT'],
    family: 'Textured Saffiano Leather',
    notes: 'Central Cash Sleeve • Gold Foil Embossed Crest • 4mm Featherweight Profile',
    price: '₹1,850',
    numericPrice: 1850,
    rating: 5.0,
    reviews: 178,
    badge: 'WALLET',
    image: '/images/wallet_2.jpg',
    bottleImage: '/images/wallet_2.jpg',
    fallbackImage: '/images/wallet_2.jpg',
    images: [
      '/images/wallet_2.jpg',
      '/images/wallet_2_back.jpg',
      '/images/wallet_2_detail.jpg',
    ],
    description: 'The quintessential minimalist essential. Crafted from scratch-resistant cross-grain Saffiano leather with six card bays, an interior cash fold, and 24K gold foil COAG hallmark.',
  },
  {
    id: 'wallet-zip-continental',
    name: 'ZIP-AROUND TRAVEL CONTINENTAL',
    subtitle: 'Heavy Full-Grain Leather • 12 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET', 'CHAMPION', 'FUNCTION', 'INFLUENCER SERIES'],
    family: 'Pebbled Grain Vachetta',
    notes: 'Swiss YKK Excella Brass Zipper • Zip Coin Compartment • Passport & Phone Fit',
    price: '₹3,650',
    numericPrice: 3650,
    rating: 4.8,
    reviews: 72,
    badge: 'WALLET',
    image: '/images/wallet_3.jpg',
    bottleImage: '/images/wallet_3.jpg',
    fallbackImage: '/images/wallet_3.jpg',
    images: [
      '/images/wallet_3.jpg',
      '/images/wallet_3_inside.jpg',
      '/images/wallet_3_detail.jpg',
    ],
    description: 'An executive travel companion in pebbled Vachetta leather. Fully encases 12 credit cards, international banknotes, passport, and smartphones securely behind smooth Swiss brass zippers.',
  },
  {
    id: 'wallet-croco-moneyclip',
    name: 'EXOTIC CROCO MONEY-CLIP WALLET',
    subtitle: 'Textured Pocket Wallet • 6 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET', 'CLUBBING', 'HAWAS ON BED', 'DATE NIGHT'],
    family: 'Embossed Exotic Calfskin',
    notes: 'Spring-Loaded Titanium Money Clip • 6 Card Bays • Beveled Edge Stitching',
    price: '₹2,800',
    numericPrice: 2800,
    rating: 4.9,
    reviews: 105,
    badge: 'WALLET',
    image: '/images/wallet_4.jpg',
    bottleImage: '/images/wallet_4.jpg',
    fallbackImage: '/images/wallet_4.jpg',
    images: [
      '/images/wallet_4.jpg',
      '/images/wallet_4_clip.jpg',
      '/images/wallet_4_detail.jpg',
    ],
    description: 'Formed from rich embossed crocodile grain calfskin fitted with an internal spring-tension titanium money clip. Compact, ultra-stylish, and effortlessly slips into jacket breast pockets.',
  },
];

const mainCategories = [
  { id: 'ALL', label: 'ALL CREATIONS', count: 17 },
  { id: 'PERFUME', label: 'PERFUME', count: 9 },
  { id: 'BELT', label: 'BELT', count: 4 },
  { id: 'WALLET', label: 'wallet', count: 4 },
];

const occasions = [
  'ALL OCCASIONS',
  'OFFICE',
  'CHAMPION',
  'SCHOOL / COLLEGE',
  'DATE NIGHT',
  'GYM WORKOUT',
  'HAWAS ON BED',
  'CLUBBING',
  'FUNCTION',
  'INFLUENCER SERIES',
];

const WHATSAPP_NUMBER = '7203060213';
const ITEMS_PER_PAGE = 8;

const CollectionSection = () => {
  const { isInWishlist, toggleWishlist, addToCart, formatPrice } = useShop();
  const [activeMainCategory, setActiveMainCategory] = useState('ALL');
  const [activeOccasion, setActiveOccasion] = useState('ALL OCCASIONS');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  // Reset to page 1 when category or occasion filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeMainCategory, activeOccasion]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalImageIdx(0);
  };

  const handleWhatsAppOrder = (product, e) => {
    if (e) e.stopPropagation();
    const phone = `91${WHATSAPP_NUMBER}`;
    const categoryName = product.mainCategory || 'LUXURY CREATION';
    const formattedPrice = formatPrice(product.numericPrice || product.price);
    const message = `Hello COAG Luxury Parfumerie & Atelier, I would like to order:%0A%0A` +
      `*Product:* ${encodeURIComponent(product.name)}%0A` +
      `*Category:* ${encodeURIComponent(categoryName)}%0A` +
      `*Price:* ${encodeURIComponent(formattedPrice)}%0A` +
      `*Specifications:* ${encodeURIComponent(product.subtitle)}%0A` +
      `*Details:* ${encodeURIComponent(product.notes)}%0A%0A` +
      `Please confirm availability, dispatch timeframe, and payment details.`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Filter products by main category (PERFUME, BELT, WALLET) and optional occasion
  const filteredProducts = products.filter((p) => {
    if (activeMainCategory !== 'ALL' && p.mainCategory !== activeMainCategory) {
      return false;
    }
    if (activeOccasion !== 'ALL OCCASIONS') {
      if (!Array.isArray(p.categories) || !p.categories.includes(activeOccasion)) {
        return false;
      }
    }
    return true;
  });

  // Pagination calculations: 8 cards per page, 4 cards per row
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const sectionEl = document.getElementById('collection');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentModalImages = selectedProduct?.images || (selectedProduct ? [selectedProduct.image] : []);

  const nextModalImage = (e) => {
    if (e) e.stopPropagation();
    setModalImageIdx((prev) => (prev + 1) % currentModalImages.length);
  };

  const prevModalImage = (e) => {
    if (e) e.stopPropagation();
    setModalImageIdx((prev) => (prev - 1 + currentModalImages.length) % currentModalImages.length);
  };

  return (
    <section id="collection" className="w-full bg-white text-black py-12 sm:py-20 lg:py-24 border-b border-black/10 select-none overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-16 w-full">

        {/* Section Header (Centered Luxury Editorial) */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          {/* Highlighted Eyebrow Badge (Dark Luxury Pill) */}
          <div className="inline-flex items-center justify-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#0a0a0c] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)]">
            <Sparkles size={12} className="text-amber-400" />
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.28em] uppercase font-bold text-white">
              COAG MAISON • LUXURY ATELIER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-black leading-tight">
            The Master Collection
          </h2>

          <p className="text-neutral-700 font-normal text-xs sm:text-sm leading-relaxed tracking-wide">
            Explore our artisanal curations — haute French perfumes, Italian full-grain leather belts, and bespoke calfskin wallets crafted with timeless luxury.
          </p>
        </div>

        {/* ========================================================
            3 PRIMARY CATEGORY TABS: BELT, PERFUME, WOLET (+ ALL)
            ======================================================== */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 mb-6 max-w-4xl mx-auto">
          {mainCategories.map((cat) => {
            const isActive = activeMainCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveMainCategory(cat.id);
                  setActiveOccasion('ALL OCCASIONS');
                }}
                className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer flex items-center space-x-2.5 ${isActive
                  ? 'bg-black text-white shadow-xl shadow-black/25 scale-105 ring-2 ring-black'
                  : 'bg-neutral-100/90 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-300/70'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold transition-colors ${isActive
                    ? 'bg-amber-400 text-black'
                    : 'bg-black/10 text-neutral-700 group-hover:bg-black/20'
                    }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Chips for Occasions (when ALL or PERFUME is selected) */}
        {(activeMainCategory === 'ALL' || activeMainCategory === 'PERFUME') && (
          <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-10 max-w-5xl mx-auto transition-opacity duration-300">
            {occasions.map((occ) => {
              const isOccActive = activeOccasion === occ;
              return (
                <button
                  key={occ}
                  onClick={() => setActiveOccasion(occ)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-semibold transition-all duration-200 cursor-pointer ${isOccActive
                    ? 'bg-amber-400 text-black font-bold shadow-sm scale-105'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black border border-neutral-200/80'
                    }`}
                >
                  {occ}
                </button>
              );
            })}
          </div>
        )}

        {/* ========================================================
            4 CARDS PER ROW GRID SHOWCASE (8 CARDS PER PAGE)
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => {
            const isLiked = isInWishlist(product.id);
            const badgeLabel =
              activeOccasion !== 'ALL OCCASIONS'
                ? activeOccasion
                : product.mainCategory || product.badge;

            return (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                className="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Product Image Canvas */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      if (product.fallbackImage) {
                        e.currentTarget.src = product.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
                  />

                  {/* Alternate Image on Hover */}
                  {product.bottleImage && (
                    <img
                      src={product.bottleImage}
                      alt={`${product.name} Alternate View`}
                      onError={(e) => {
                        if (product.fallbackImage) {
                          e.currentTarget.src = product.fallbackImage;
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />
                  )}

                  {/* Top Badge (Category / Occasion) */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[9.5px] font-bold tracking-widest uppercase bg-black text-white px-2.5 py-1 rounded-full shadow-md">
                      {badgeLabel}
                    </span>
                  </div>

                  {/* Image Card Floating Action Buttons: Wishlist & Cart */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex flex-col space-y-2">
                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-center text-black hover:scale-110 transition-all shadow-sm active:scale-90 cursor-pointer"
                      title={isLiked ? `Remove ${product.name} from Wishlist` : `Add ${product.name} to Wishlist`}
                      aria-label={`Wishlist ${product.name}`}
                    >
                      <Heart
                        size={15}
                        className={isLiked ? 'fill-red-500 text-red-500' : 'text-black'}
                      />
                    </button>

                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white hover:scale-110 transition-all shadow-sm active:scale-90 cursor-pointer group/cartbtn"
                      title={`Add ${product.name} to Cart`}
                      aria-label={`Add ${product.name} to Cart`}
                    >
                      <ShoppingBag size={14} className="transition-transform group-hover/cartbtn:scale-110" />
                    </button>
                  </div>

                  {/* Hover Quick Actions Overlay */}
                  <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(product);
                      }}
                      className="w-full py-2.5 bg-black hover:bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-xl flex items-center justify-center space-x-2 shadow-xl backdrop-blur-md transition-all active:scale-95"
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                {/* Product Details Block */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white text-black">
                  <div className="space-y-1.5">
                    {/* Family & Rating */}
                    <div className="flex items-center justify-between text-[11px] tracking-wider uppercase font-bold text-black">
                      <span className="line-clamp-1">{product.family}</span>
                      <div className="flex items-center space-x-1 text-black flex-shrink-0 ml-2">
                        <Star size={12} className="fill-[#b4833e] text-[#b4833e]" />
                        <span className="font-bold text-black">{product.rating}</span>
                        <span className="text-black font-medium">({product.reviews})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-serif font-bold text-black tracking-wide pt-0.5 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[11.5px] tracking-widest uppercase text-black font-semibold">
                      {product.subtitle}
                    </p>

                    {/* Notes / Material Details */}
                    <p className="text-xs text-neutral-600 font-normal leading-relaxed pt-1 line-clamp-1">
                      {product.notes}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-4 mt-3 border-t border-black/15 flex items-center justify-between text-black">
                    <span className="text-base sm:text-lg font-serif font-bold text-black">
                      {formatPrice(product.numericPrice || product.price)}
                    </span>

                    <div className="flex items-center space-x-2">
                      {/* Add to Bag Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, 1);
                        }}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-neutral-800 text-white transition-all shadow-xs active:scale-90 cursor-pointer"
                        title="Add to Shopping Bag"
                        aria-label="Add to Shopping Bag"
                      >
                        <ShoppingBag size={14} />
                      </button>

                      {/* Order on WhatsApp */}
                      <button
                        onClick={(e) => handleWhatsAppOrder(product, e)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-xs active:scale-90 cursor-pointer"
                        title="Order on WhatsApp"
                        aria-label="Order on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            PAGINATION CONTROLS (8 CARDS PER PAGE)
            ======================================================== */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Showing Range */}
            <div className="text-xs tracking-wider uppercase font-semibold text-neutral-500">
              Showing <strong className="text-black font-bold">{startIndex + 1}</strong> – <strong className="text-black font-bold">{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}</strong> of <strong className="text-black font-bold">{filteredProducts.length}</strong> Creations
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center space-x-2">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${currentPage === 1
                  ? 'opacity-40 cursor-not-allowed bg-neutral-100 text-neutral-400'
                  : 'bg-neutral-100 hover:bg-black hover:text-white text-black border border-neutral-200 active:scale-95'
                  }`}
                aria-label="Previous Page"
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>

              {/* Number Buttons */}
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-black text-white shadow-lg shadow-black/20 scale-105 ring-2 ring-black'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 active:scale-95'
                      }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${currentPage === totalPages
                  ? 'opacity-40 cursor-not-allowed bg-neutral-100 text-neutral-400'
                  : 'bg-neutral-100 hover:bg-black hover:text-white text-black border border-neutral-200 active:scale-95'
                  }`}
                aria-label="Next Page"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ========================================================
          LUXURY DETAIL SHOWCASE MODAL WITH MULTI-IMAGE CAROUSEL
          ======================================================== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden border border-black/15 my-auto text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md border border-black/10"
              aria-label="Close Product Showcase"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto">

              {/* Left Column: Multi-Image Carousel */}
              <div className="md:col-span-5 bg-neutral-100 relative overflow-hidden flex flex-col items-center justify-between p-4 sm:p-7 min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
                {/* Active Category Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black text-white shadow-md">
                    {selectedProduct.mainCategory || selectedProduct.badge}
                  </span>
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/10 shadow-sm">
                    <Star size={12} className="fill-[#b4833e] text-[#b4833e]" />
                    <span className="text-xs font-bold text-black">{selectedProduct.rating}</span>
                  </div>
                </div>

                {/* Main Selected Image Showcase */}
                <div className="relative w-full aspect-square my-auto flex items-center justify-center p-3">
                  <img
                    src={currentModalImages[modalImageIdx] || selectedProduct.image}
                    alt={selectedProduct.name}
                    onError={(e) => {
                      if (selectedProduct.fallbackImage) {
                        e.currentTarget.src = selectedProduct.fallbackImage;
                      }
                    }}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-300"
                  />

                  {/* Previous / Next Image Arrow Buttons */}
                  {currentModalImages.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-black hover:text-white border border-black/10 flex items-center justify-center text-black shadow-md transition-all active:scale-90"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-black hover:text-white border border-black/10 flex items-center justify-center text-black shadow-md transition-all active:scale-90"
                        aria-label="Next Image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Dots / Previews */}
                {currentModalImages.length > 1 && (
                  <div className="flex items-center space-x-2.5 z-10 pt-2">
                    {currentModalImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIdx(idx);
                        }}
                        className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white ${modalImageIdx === idx ? 'border-black scale-105 shadow-md' : 'border-neutral-300 opacity-60 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={img}
                          alt="Thumbnail"
                          onError={(e) => {
                            if (selectedProduct.fallbackImage) {
                              e.currentTarget.src = selectedProduct.fallbackImage;
                            }
                          }}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Narrative Storytelling & Ordering */}
              <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white text-black">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-1">
                      <span>{selectedProduct.family}</span>
                      <span>•</span>
                      <span>{selectedProduct.mainCategory}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-wide">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mt-1">
                      {selectedProduct.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline space-x-3 py-2 border-y border-neutral-200">
                    <span className="text-3xl font-serif font-bold text-black">
                      {formatPrice(selectedProduct.numericPrice || selectedProduct.price)}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                      Taxes Included • Free Insured Delivery
                    </span>
                  </div>

                  {/* Narrative Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-black">
                      Description & Craftsmanship
                    </h4>
                    <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Olfactory / Material Notes */}
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-black flex items-center space-x-2">
                      <Sparkles size={12} className="text-amber-500" />
                      <span>{selectedProduct.mainCategory === 'PERFUME' ? 'Olfactory Notes' : 'Material & Specifications'}</span>
                    </h4>
                    <p className="text-xs text-neutral-800 font-medium leading-relaxed">
                      {selectedProduct.notes}
                    </p>
                  </div>

                  {/* Luxury Badges */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="flex items-center space-x-2 text-neutral-700">
                      <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                      <span>100% Authentic Handcrafted</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-700">
                      <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                      <span>Discreet Luxury Packaging</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA: Add to Bag & WhatsApp Direct Concierge Order */}
                <div className="pt-4 border-t border-neutral-200 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        addToCart(selectedProduct, 1);
                        setSelectedProduct(null);
                      }}
                      className="w-full py-3.5 px-4 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Bag</span>
                    </button>

                    <button
                      onClick={(e) => handleWhatsAppOrder(selectedProduct, e)}
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                  <p className="text-center text-[10.5px] text-neutral-400 uppercase tracking-widest pt-0.5">
                    Direct order booking with immediate assistance on 7203060213
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CollectionSection;
