import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Heart, ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight, X, Eye, ShieldCheck, CheckCircle2, Play, Pause, RotateCcw, Film, Minus, Plus, Check, Truck, Award, Clock } from 'lucide-react';
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
  // PERFUMES (9 High-Performance Spray Creations)
  // ==========================================
  {
    id: 'emeraude-noir',
    name: 'COAG The King',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'OFFICE', 'CHAMPION', 'GYM WORKOUT', 'INFLUENCER SERIES', 'LGBTQ'],
    family: 'Fresh Woody & Resinous',
    notes: 'Calabrian Bergamot • Tuscan Volcanic Cedar • Golden Amber & Birch',
    price: '₹999',
    numericPrice: 999,
    rating: 4.9,
    reviews: 142,
    badge: 'PERFUME',
    image: '/images/perfume_coag_king_floral_studio.jpg',
    bottleImage: '/images/perfume_coag_king_floral_studio.jpg',
    fallbackImage: '/images/perfume_coag_king_floral_studio.jpg',
    images: [
      '/images/perfume_coag_king_floral_studio.jpg',
      '/images/perfume_coag_box_with_spray.jpg',
      '/images/coag_signature_bottle.jpg',
    ],
    description: 'An elite COAG luxury extrait spray engineered with an ultra-fine micro-mist atomizing nozzle. Opens with crisp Calabrian bergamot and smoky Tuscan volcanic cedar, settling into molten golden amber with 24-hour beast-mode sillage.',
  },
  {
    id: 'ambre-imperial',
    name: 'COAG The Queen',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'DATE NIGHT', 'EVENING WEAR', 'SIGNATURE', 'INFLUENCER SERIES'],
    family: 'Warm Oriental Amber',
    notes: 'Warm Smoked Cardamom • Charred Tonka Bean • Sacred Golden Myrrh',
    price: '₹799',
    numericPrice: 799,
    rating: 5.0,
    reviews: 98,
    badge: 'PERFUME',
    image: '/images/perfume_coag_cylindrical_pink_white.jpg',
    bottleImage: '/images/perfume_coag_cylindrical_splash.jpg',
    fallbackImage: '/images/coag_cylindrical_bottle.jpg',
    images: [
      '/images/perfume_coag_cylindrical_pink_white.jpg',
      '/images/perfume_coag_cylindrical_splash.jpg',
      '/images/coag_cylindrical_bottle.jpg',
    ],
    description: 'A seductive COAG evening extrait spray crafted with rich, sultry notes. Delivers an opulent spray mist of warm smoked cardamom, charred tonka, and sacred myrrh steeped in royal amber for an irresistible, long-lasting magnetic scent trail.',
  },
  {
    id: 'rose-eternelle',
    name: 'COAG The Lagacy',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'SCHOOL / COLLEGE', 'FUNCTION', 'DATE NIGHT'],
    family: 'Luminous Travertine & White Floral',
    notes: 'Dawn White Gardenia • Crystalline Amber • Velvety Cashmere Woods',
    price: '₹1199',
    numericPrice: 1199,
    rating: 4.8,
    reviews: 116,
    badge: 'PERFUME',
    image: '/images/perfume_coag_lagacy_creative.jpg',
    bottleImage: '/images/coag_lagacy_bottle.jpg',
    fallbackImage: '/images/coag_lagacy_bottle.jpg',
    images: [
      '/images/perfume_coag_lagacy_creative.jpg',
      '/images/coag_lagacy_bottle.jpg',
      '/images/perfume_coag_lagacy_macro.jpg',
    ],
    description: 'A luminous white floral extrait spray releasing a fine micro-dispersion mist of fresh dawn gardenias, crystalline amber, and velvety cashmere woods. Crafted for sophisticated presence and all-day compliment projection.',
  },
  {
    id: 'coag-antique',
    name: 'COAG The Antique',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'OFFICE', 'SCHOOL / COLLEGE', 'FUNCTION', 'INFLUENCER SERIES'],
    family: 'Antique English Rose & Amber',
    notes: 'Antique English Rose • Dewy Blush Peonies • Royal Amber & Cedar',
    price: '₹1249',
    numericPrice: 1249,
    rating: 4.9,
    reviews: 128,
    badge: 'PERFUME',
    image: '/images/perfume_coag_antique_roses.jpg',
    bottleImage: '/images/perfume_coag_antique_roses.jpg',
    fallbackImage: '/images/perfume_coag_antique_roses.jpg',
    images: [
      '/images/perfume_coag_antique_roses.jpg',
      '/images/perfume_coag_antique_floral.jpg',
      '/images/perfume_coag_antique_dark_marble.jpg',
    ],
    description: 'A prestige vintage rose extrait spray atomizing dewy English garden rose petals, blush peonies, and warm royal ambergris into a velvety mist. Formulated for a timeless aristocratic presence and deep lasting sillage.',
  },
  {
    id: 'noir-absolu',
    name: 'COAG Noir Absolu',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'EVENING WEAR', 'SIGNATURE', 'DATE NIGHT', 'INFLUENCER SERIES', 'LGBTQ'],
    family: 'Dark Smoky Balsam',
    notes: 'Smoldering Birch Tar • Crushed Black Pepper • Dark Bourbon Vanilla',
    price: '₹1,149',
    numericPrice: 1149,
    rating: 5.0,
    reviews: 156,
    badge: 'PERFUME',
    image: '/images/perfume_noir_absolu_floral.jpg',
    bottleImage: '/images/perfume_noir_absolu_floral.jpg',
    fallbackImage: '/images/perfume_noir_absolu_floral.jpg',
    images: [
      '/images/perfume_noir_absolu_floral.jpg',
      '/images/perfume_noir_absolu_macro.jpg',
      '/images/perfume_noir_absolu_still.jpg',
    ],
    description: 'A deep, mysterious veil of smoldering birch wood, crackling black pepper, and dark Bourbon vanilla absolute atomized through COAG\'s precision spray nozzle. Magnetic and irresistible for seductive late nights and elevated occasions.',
  },
  {
    id: 'cuir-majestueux',
    name: 'COAG Cuir Majestueux',
    subtitle: '35% Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'CHAMPION', 'FUNCTION', 'OFFICE', 'INFLUENCER SERIES'],
    family: 'Imperial Leather Chypre',
    notes: 'Hand-Buffed Saddle Leather • Crimson Saffron Thread • Aged Indonesian Patchouli',
    price: '₹1,249',
    numericPrice: 1249,
    rating: 4.9,
    reviews: 92,
    badge: 'PERFUME',
    image: '/images/perfume_cuir_majestueux_floral.jpg',
    bottleImage: '/images/perfume_cuir_majestueux_floral.jpg',
    fallbackImage: '/images/perfume_cuir_majestueux_floral.jpg',
    images: [
      '/images/perfume_cuir_majestueux_floral.jpg',
      '/images/perfume_cuir_majestueux_macro.jpg',
      '/images/perfume_cuir_majestueux_still.jpg',
    ],
    description: 'Hand-buffed saddle leather enriched with fiery crimson saffron and aged Indonesian patchouli in a high-concentration extrait spray. Crafted for champions and high-profile wedding functions demanding an unforgettable royal presence.',
  },
  {
    id: 'fleur-blanche',
    name: 'COAG Fleur Blanche',
    subtitle: 'Haute Eau de Parfum Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'SCHOOL / COLLEGE', 'DATE NIGHT', 'FUNCTION', 'LGBTQ'],
    family: 'Luminous Solar Floral',
    notes: 'Mediterranean Neroli • Night-Blooming Jasmine • Crystalline White Musk',
    price: '₹899',
    numericPrice: 899,
    rating: 4.8,
    reviews: 73,
    badge: 'PERFUME',
    image: '/images/perfume_fleur_blanche_floral.jpg',
    bottleImage: '/images/perfume_fleur_blanche_floral.jpg',
    fallbackImage: '/images/perfume_fleur_blanche_floral.jpg',
    images: [
      '/images/perfume_fleur_blanche_floral.jpg',
      '/images/perfume_fleur_blanche_macro.jpg',
      '/images/perfume_fleur_blanche_still.jpg',
    ],
    description: 'Sun-drenched Mediterranean neroli blossoms entwined with nocturnal Grasse jasmine petals and airy crystalline white musk in an ultra-fine spray mist. An effortless compliment-magnet for college campuses and romantic dates.',
  },
  {
    id: 'bleu-azur',
    name: 'COAG Bleu Azur',
    subtitle: 'Haute Eau de Parfum Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'GYM WORKOUT', 'OFFICE', 'CHAMPION'],
    family: 'Marine Aquatic Citrus',
    notes: 'French Sea Salt • Iced Grapefruit Zest • Haitian Vetiver',
    price: '₹999',
    numericPrice: 999,
    rating: 4.9,
    reviews: 88,
    badge: 'PERFUME',
    image: '/images/hero_perfume.jpg',
    bottleImage: '/images/hero_perfume.jpg',
    fallbackImage: '/images/perfume_emerald_splash.jpg',
    images: [
      '/images/perfume_emerald_splash.jpg',
      '/images/hero_perfume.jpg',
      '/images/perfume_emerald_macro.jpg',
    ],
    description: 'A frosty tidal surge of French sea salt and iced grapefruit zest grounded by crisp Haitian vetiver delivered in an invigorating micro-spray. High-end freshness that maintains supreme performance during intense gym workouts and long office shifts.',
  },
  {
    id: 'lor-solaire',
    name: "COAG L'Or Solaire",
    subtitle: 'Bespoke Reserve Extrait Spray • 50ml',
    mainCategory: 'PERFUME',
    category: 'PERFUME',
    categories: ['PERFUME', 'INFLUENCER SERIES', 'CHAMPION', 'ROYAL RESERVE', 'SIGNATURE', 'FUNCTION', 'DATE NIGHT', 'LGBTQ'],
    family: 'Gilded Amber Oud',
    notes: 'Caramelized Golden Amber • Kashmiri Saffron • Smoked Cambodian Royal Oud',
    price: '₹1,249',
    numericPrice: 1249,
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
    description: 'The trending viral sensation praised by top fragrance influencers worldwide. Rare saffron threads, smoked Cambodian oud, and golden caramelized amber atomized into monumental sillage and royal distinction.',
  },

  // ==========================================
  // BELTS (6 Handcrafted Luxury COAG Creations)
  // ==========================================
  {
    id: 'belt-heritage-noir',
    name: "COAG L'Héritage Calfskin Belt",
    subtitle: 'COAG Italian Full-Grain Leather • 35mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'Full-Grain Tuscan Calfskin',
    notes: 'Brushed Ruthenium Clasp • Hand-Burnished Edge • Reversible Noir/Cognac',
    price: '₹799',
    numericPrice: 799,
    rating: 4.9,
    reviews: 86,
    badge: 'BELT',
    image: '/images/belt_1.jpg',
    bottleImage: '/images/belt_1.jpg',
    fallbackImage: '/images/belt_1.jpg',
    images: [
      '/images/belt_1.jpg',
      '/images/belt_3.jpg',
      '/images/belt_1.jpg',
    ],
    description: 'Handcrafted for COAG in Tuscany from select full-grain Italian calfskin leather. Featuring an ultra-durable brushed ruthenium buckle and hand-burnished edges designed for boardrooms and formal galas.',
  },
  {
    id: 'belt-monogram-saddle',
    name: 'COAG Royal Saddle Leather Belt',
    subtitle: 'COAG Artisanal Cognac Leather • 38mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'Vegetable-Tanned Saddle Leather',
    notes: 'Solid Brass Buckle • Waxed Linen Double-Stitch • Rich Vintage Patina',
    price: '₹949',
    numericPrice: 949,
    rating: 5.0,
    reviews: 112,
    badge: 'BELT',
    image: '/images/belt_2.jpg',
    bottleImage: '/images/belt_2.jpg',
    fallbackImage: '/images/belt_2.jpg',
    images: [
      '/images/belt_2.jpg',
      '/images/belt_6.jpg',
      '/images/belt_2.jpg',
    ],
    description: 'Constructed for COAG from heavy vegetable-tanned bridle leather steeped in botanical oils. Embellished with a solid brass buckle that acquires a magnificent individual patina over decades of wear.',
  },
  {
    id: 'belt-stealth-formal',
    name: 'COAG Noir Stealth Dress Belt',
    subtitle: 'COAG French Boxcalf Leather • 30mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'French Smooth Boxcalf',
    notes: 'Matte Gunmetal Low-Profile Buckle • Feathered Edge • High-Gloss Mirror Finish',
    price: '₹699',
    numericPrice: 699,
    rating: 4.8,
    reviews: 64,
    badge: 'BELT',
    image: '/images/belt_3.jpg',
    bottleImage: '/images/belt_3.jpg',
    fallbackImage: '/images/belt_3.jpg',
    images: [
      '/images/belt_3.jpg',
      '/images/belt_1.jpg',
      '/images/belt_3.jpg',
    ],
    description: 'The definitive COAG formal evening dress belt. Engineered with a slender 30mm profile and stealth satin-finished gunmetal buckle, designed to seamlessly complement tailored tuxedos and bespoke suiting.',
  },
  {
    id: 'belt-croco-embossed',
    name: 'COAG Exotic Croco-Embossed Belt',
    subtitle: 'COAG Hand-Glazed Calfskin • 35mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'Hand-Embossed Croco Calfskin',
    notes: 'Palladium Plate Buckle • Deep Midnight Lustre • Velvet Nubuck Backing',
    price: '₹999',
    numericPrice: 999,
    rating: 4.9,
    reviews: 79,
    badge: 'BELT',
    image: '/images/belt_4.jpg',
    bottleImage: '/images/belt_4.jpg',
    fallbackImage: '/images/belt_4.jpg',
    images: [
      '/images/belt_4.jpg',
      '/images/belt_3.jpg',
      '/images/belt_4.jpg',
    ],
    description: 'An audacious COAG statement piece featuring high-definition crocodile scale embossing on premium French calfskin, backed by soft calf nubuck and crowned with a palladium-plated buckle.',
  },
  {
    id: 'belt-saffiano-royale',
    name: 'COAG Saffiano Royale Leather Belt',
    subtitle: 'COAG Navy Saffiano Calfskin • 35mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'Cross-Grain Saffiano Leather',
    notes: 'Polished Palladium Buckle • Scratch-Resistant Texture • Beveled Hand-Lacquered Edges',
    price: '₹849',
    numericPrice: 849,
    rating: 4.9,
    reviews: 58,
    badge: 'BELT',
    image: '/images/belt_5.jpg',
    bottleImage: '/images/belt_5.jpg',
    fallbackImage: '/images/belt_5.jpg',
    images: [
      '/images/belt_5.jpg',
      '/images/belt_3.jpg',
      '/images/belt_5.jpg',
    ],
    description: 'A striking COAG statement in deep navy blue cross-grain Saffiano calfskin. Engineered with an ultra-durable, scratch-resistant surface, hand-beveled edges, and crowned with a mirror-polished palladium silver buckle.',
  },
  {
    id: 'belt-eperon-saddle',
    name: 'COAG Cognac Saddle Leather Belt',
    subtitle: 'COAG English Bridle Leather • 32mm',
    mainCategory: 'BELT',
    category: 'BELT',
    categories: ['BELT'],
    family: 'English Bridle Saddle Leather',
    notes: 'Antique Brushed Brass Buckle • Tallow-Infused Leather • Double Waxed Stitch',
    price: '₹899',
    numericPrice: 899,
    rating: 5.0,
    reviews: 74,
    badge: 'BELT',
    image: '/images/belt_6.jpg',
    bottleImage: '/images/belt_6.jpg',
    fallbackImage: '/images/belt_6.jpg',
    images: [
      '/images/belt_6.jpg',
      '/images/belt_2.jpg',
      '/images/belt_6.jpg',
    ],
    description: 'Handcrafted for COAG from vegetable-tanned bridle leather steeped in natural botanical tallows. Features warm cognac tones, double-waxed edge stitching, and an antique brushed brass buckle that matures with character.',
  },

  // ==========================================
  // WALLETS / WOLET (6 Handcrafted Luxury COAG Goods)
  // ==========================================
  {
    id: 'wallet-portefeuille-bifold',
    name: 'COAG Portefeuille Noir Bifold',
    subtitle: 'COAG French Boxcalf Leather • 8 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'French Box-Calf Leather',
    notes: '8 Card Pockets • Dual Currency Dividers • RFID Skim-Block Shielding',
    price: '₹699',
    numericPrice: 699,
    rating: 4.9,
    reviews: 134,
    badge: 'WALLET',
    image: '/images/wallet_1.jpg',
    bottleImage: '/images/wallet_1.jpg',
    fallbackImage: '/images/wallet_1.jpg',
    images: [
      '/images/wallet_1.jpg',
      '/images/wallet_6.jpg',
      '/images/wallet_1.jpg',
    ],
    description: 'Precision handcrafted for COAG from supple French boxcalf. Built with integrated military-grade RFID protection, eight hand-turned card slots, and dual currency partitions.',
  },
  {
    id: 'wallet-slim-cardholder',
    name: 'COAG Slim Saffiano Cardholder',
    subtitle: 'COAG Ultra-Thin Saffiano • 6 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'Textured Saffiano Leather',
    notes: 'Central Cash Sleeve • Scratch-Resistant Texture • 4mm Featherweight Profile',
    price: '₹599',
    numericPrice: 599,
    rating: 5.0,
    reviews: 178,
    badge: 'WALLET',
    image: '/images/wallet_2.jpg',
    bottleImage: '/images/wallet_2.jpg',
    fallbackImage: '/images/wallet_2.jpg',
    images: [
      '/images/wallet_2.jpg',
      '/images/wallet_3.jpg',
      '/images/wallet_2.jpg',
    ],
    description: 'The quintessential COAG minimalist essential. Crafted from scratch-resistant cross-grain Saffiano leather with six card bays, an interior cash fold, and featherweight profile.',
  },
  {
    id: 'wallet-zip-continental',
    name: 'COAG Zip-Around Continental Wallet',
    subtitle: 'COAG Heavy Full-Grain Leather • 12 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'Pebbled Grain Vachetta',
    notes: 'Swiss YKK Excella Brass Zipper • Zip Coin Compartment • Passport & Phone Fit',
    price: '₹999',
    numericPrice: 999,
    rating: 4.8,
    reviews: 72,
    badge: 'WALLET',
    image: '/images/wallet_3.jpg',
    bottleImage: '/images/wallet_3.jpg',
    fallbackImage: '/images/wallet_3.jpg',
    images: [
      '/images/wallet_3.jpg',
      '/images/wallet_5.jpg',
      '/images/wallet_3.jpg',
    ],
    description: 'An executive COAG travel companion in pebbled Vachetta leather. Fully encases 12 credit cards, international banknotes, passport, and smartphones securely behind smooth Swiss brass zippers.',
  },
  {
    id: 'wallet-croco-moneyclip',
    name: 'COAG Croco Money-Clip Wallet',
    subtitle: 'COAG Textured Pocket Wallet • 6 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'Embossed Exotic Calfskin',
    notes: 'Spring-Loaded Titanium Money Clip • 6 Card Bays • Beveled Edge Stitching',
    price: '₹749',
    numericPrice: 749,
    rating: 4.9,
    reviews: 105,
    badge: 'WALLET',
    image: '/images/wallet_4.jpg',
    bottleImage: '/images/wallet_4.jpg',
    fallbackImage: '/images/wallet_4.jpg',
    images: [
      '/images/wallet_4.jpg',
      '/images/wallet_2.jpg',
      '/images/wallet_4.jpg',
    ],
    description: 'Formed for COAG from rich embossed crocodile grain calfskin fitted with an internal spring-tension titanium money clip. Compact, ultra-stylish, and effortlessly slips into jacket breast pockets.',
  },
  {
    id: 'wallet-zippe-compact',
    name: 'COAG Compact Zippé Wallet',
    subtitle: 'COAG Midnight Blue Calfskin • Zip-Around',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'Grained French Calfskin',
    notes: 'Smooth Silver Metal Zip • 6 Card Bays • Gusseted Cash & Coin Pocket',
    price: '₹799',
    numericPrice: 799,
    rating: 4.9,
    reviews: 88,
    badge: 'WALLET',
    image: '/images/wallet_5.jpg',
    bottleImage: '/images/wallet_5.jpg',
    fallbackImage: '/images/wallet_5.jpg',
    images: [
      '/images/wallet_5.jpg',
      '/images/wallet_3.jpg',
      '/images/wallet_5.jpg',
    ],
    description: 'An effortlessly refined zip-around silhouette tailored for COAG in supple midnight blue grained calfskin. Secured with a whisper-smooth silver alloy zipper, offering 6 card slots, a cash fold, and coin compartment.',
  },
  {
    id: 'wallet-trifold-elite',
    name: 'COAG Vert Élite Trifold Wallet',
    subtitle: 'COAG Forest Green Leather • 9 Slots',
    mainCategory: 'WALLET',
    category: 'WALLET',
    categories: ['WALLET'],
    family: 'Italian Vegetable-Tanned Vachetta',
    notes: 'Dual ID Windows • 9 Card Slots • Hidden Banknote Pocket • RFID Shield',
    price: '₹899',
    numericPrice: 899,
    rating: 4.8,
    reviews: 62,
    badge: 'WALLET',
    image: '/images/wallet_6.jpg',
    bottleImage: '/images/wallet_6.jpg',
    fallbackImage: '/images/wallet_6.jpg',
    images: [
      '/images/wallet_6.jpg',
      '/images/wallet_1.jpg',
      '/images/wallet_6.jpg',
    ],
    description: 'Distinctive trifold architecture shaped for COAG from rich forest green vegetable-tanned Vachetta leather. Equipped with 9 precision card bays, dual quick-access ID windows, and built-in RFID security.',
  },

  // ==========================================
  // GIFT PACKAGES (6 Bespoke Luxury Gift Suites with Gift Packing & Video)
  // ==========================================
  {
    id: 'gift-royal-coffret',
    name: 'COAG The ROYAL SIGNATURE',
    subtitle: 'Dual Extraits • Travel Sprays • Leather Wallet & Keychain Suite',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    family: 'Haute Parfumerie & Velvet Presentation',
    notes: 'The King & The Antique Extraits • Antique & Lagacy Travel Sprays • Textured Leather Cardholder • Mirror Chrome Keychain',
    price: '₹2799',
    numericPrice: 2799,
    rating: 5.0,
    reviews: 94,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'Coffret Royal Signature Unboxing Video',
    videoUrl: '/videos/Video_01.mp4',
    packingBoxImage: '/images/gift_package_packing_1.jpg',
    openBoxImage: '/images/coag_royal_unboxed_floral.jpg',
    image: '/images/coag_royal_unboxed_floral.jpg',
    bottleImage: '/images/gift_package_packing_1.jpg',
    fallbackImage: '/images/coag_royal_unboxed_floral.jpg',
    images: [
      '/images/coag_royal_unboxed_floral.jpg',
      '/images/gift_package_packing_1.jpg',
      '/images/gift_package_1_detail.jpg',
    ],
    description: 'The definitive COAG Haute Parfumerie signature gift coffret. Handcrafted matte black presentation box bound with black satin ribbon, unveiling dual luxury extraits (The King & The Antique) nestled in black satin, two discovery travel sprays (Antique & Lagacy), paired with an Italian-stitched textured cardholder wallet and mirror-polished chrome keychain on midnight velvet.',
  },
  {
    id: 'gift-executive-suite',
    name: 'COAG The Executive Noir Suite',
    subtitle: '100ml Extrait & French Boxcalf Bifold',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    isSoldOut: true,
    family: 'Smoked Wood Perfume & Full-Grain Boxcalf',
    notes: 'Smoked Birch Extrait • Handcrafted Bifold Wallet • Hardwood Lacquer Chest',
    price: '₹5,850',
    numericPrice: 5850,
    rating: 4.9,
    reviews: 118,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'COAG The Executive Noir Suite Unboxing Video',
    packingBoxImage: '/images/gift_package_packing_2.jpg',
    openBoxImage: '/images/gift_package_2.jpg',
    image: '/images/gift_package_packing_2.jpg',
    bottleImage: '/images/gift_package_2.jpg',
    fallbackImage: '/images/gift_package_2.jpg',
    images: [
      '/images/gift_package_packing_2.jpg',
      '/images/gift_package_2.jpg',
      '/images/gift_package_2_detail.jpg',
    ],
    description: 'The definitive executive gift box. Encased in a handcrafted matte black gift packaging chest with gold foil embossing and silk ribbons, uniting our celebrated 100ml Noir Extrait with an authentic French boxcalf leather bifold wallet.',
  },
  {
    id: 'gift-sovereign-hamper',
    name: 'COAG Sovereign Heritage Gift Trunk',
    subtitle: 'Extrait • Reversible Leather Belt • Cardholder',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    isSoldOut: true,
    family: 'Full-Grain Tuscan Calfskin & Haute Parfum',
    notes: 'Volcanic Cedar Extrait • Reversible Tuscan Belt • Saffiano Cardholder • Wax-Sealed Crest',
    price: '₹8,950',
    numericPrice: 8950,
    rating: 5.0,
    reviews: 67,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'COAG Sovereign Heritage Gift Trunk Unboxing Video',
    packingBoxImage: '/images/gift_package_3_box.jpg',
    openBoxImage: '/images/gift_package_3.jpg',
    image: '/images/gift_package_3_box.jpg',
    bottleImage: '/images/gift_package_3.jpg',
    fallbackImage: '/images/gift_package_3.jpg',
    images: [
      '/images/gift_package_3_box.jpg',
      '/images/gift_package_3.jpg',
      '/images/gift_package_3_detail.jpg',
    ],
    description: 'Our pinnacle luxury ensemble. Curated inside a bespoke gift trunk bound with silk ribbons, comprising a 100ml extrait flacon, an artisanal reversible Tuscan calfskin belt, and an ultra-slim Saffiano leather cardholder.',
  },
  {
    id: 'gift-grand-atelier-box',
    name: 'COAG L\'Atelier Artisanal Gift Chest',
    subtitle: 'Dual Extraits & Exotic Croco Pocket Wallet',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    isSoldOut: true,
    family: 'Amber Extraits & Exotic Croco Leather',
    notes: 'Dual 50ml Amber & Rose Extraits • Croco Money-Clip Wallet • Golden Satin Casket',
    price: '₹7,200',
    numericPrice: 7200,
    rating: 4.9,
    reviews: 82,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'COAG L\'Atelier Artisanal Gift Chest Unboxing Video',
    packingBoxImage: '/images/gift_package_4_box.jpg',
    openBoxImage: '/images/gift_package_4.jpg',
    image: '/images/gift_package_4_box.jpg',
    bottleImage: '/images/gift_package_4.jpg',
    fallbackImage: '/images/gift_package_4.jpg',
    images: [
      '/images/gift_package_4_box.jpg',
      '/images/gift_package_4.jpg',
      '/images/gift_package_4_detail.jpg',
    ],
    description: 'A lavish expression of artisanal magnificence. Pairs two 50ml extrait de parfum creations with an embossed crocodile calfskin money-clip wallet, presented inside a lustrous golden satin lined gift chest.',
  },
  {
    id: 'gift-coffret-imperial',
    name: 'COAG Le Coffret Noir Impérial',
    subtitle: 'Dual 50ml Extraits & 24K Gold Travel Atomizer',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    isSoldOut: true,
    family: 'Haute Parfumerie & Black Satin Casket',
    notes: 'Oud Royal & Amber Impérial • Gold Travel Flask • Matte Black Gold-Embossed Chest',
    price: '₹6,850',
    numericPrice: 6850,
    rating: 5.0,
    reviews: 49,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'COAG Le Coffret Noir Impérial Unboxing Video',
    packingBoxImage: '/images/gift_package_packing_2.jpg',
    openBoxImage: '/images/gift_package_5.jpg',
    image: '/images/gift_package_packing_2.jpg',
    bottleImage: '/images/gift_package_5.jpg',
    fallbackImage: '/images/gift_package_5.jpg',
    images: [
      '/images/gift_package_packing_2.jpg',
      '/images/gift_package_5.jpg',
      '/images/gift_package_2_box.jpg',
    ],
    description: 'A masterpiece of presentation. Encased in a rigid matte-black presentation casket with gold-leaf hot stamping, housing two 50ml pure extrait flacons and a refillable 24K gold pocket travel atomizer on plush black satin.',
  },
  {
    id: 'gift-emerald-heritage-hamper',
    name: "COAG L'Émeraude Heritage Luxury Hamper",
    subtitle: 'Extrait Flacon • Cardholder • Velvet Keepsake Pouch',
    mainCategory: 'GIFT PACKAGE',
    category: 'GIFT PACKAGE',
    categories: ['GIFT PACKAGE'],
    isSoldOut: true,
    family: 'Prestige Fragrance & Artisanal Leather Ensemble',
    notes: 'Émeraude Noir Extrait • Forest Green Cardholder • Velvet Pouch • Wax Crest',
    price: '₹7,650',
    numericPrice: 7650,
    rating: 4.9,
    reviews: 53,
    badge: 'GIFT PACKAGE',
    hasVideo: true,
    videoTitle: 'COAG L\'Émeraude Heritage Luxury Hamper Unboxing Video',
    packingBoxImage: '/images/gift_package_packing_1.jpg',
    openBoxImage: '/images/gift_package_6.jpg',
    image: '/images/gift_package_packing_1.jpg',
    bottleImage: '/images/gift_package_6.jpg',
    fallbackImage: '/images/gift_package_6.jpg',
    images: [
      '/images/gift_package_packing_1.jpg',
      '/images/gift_package_6.jpg',
      '/images/gift_package_1_detail.jpg',
    ],
    description: 'An emerald celebration of haute French parfumerie and Italian leathercraft. Features our coveted Émeraude Noir 100ml flacon paired with an artisanal leather cardholder and deep emerald velvet travel pouch.',
  },
];

const mainCategories = [
  { id: 'ALL', label: 'ALL CREATIONS', count: 27 },
  { id: 'PERFUME', label: 'PERFUME', count: 9 },
  { id: 'BELT', label: 'BELT', count: 6 },
  { id: 'WALLET', label: 'WALLET', count: 6 },
  { id: 'GIFT PACKAGE', label: 'GIFT PACKAGE', count: 6 },
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
  'LGBTQ',
];

const WHATSAPP_NUMBER = '9664506049';
const ITEMS_PER_PAGE = 8;

const CollectionSection = () => {
  const { isInWishlist, toggleWishlist, addToCart, formatPrice } = useShop();
  const [activeMainCategory, setActiveMainCategory] = useState('ALL');
  const [activeOccasion, setActiveOccasion] = useState('ALL OCCASIONS');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [ribbonBurst, setRibbonBurst] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [modalVideoActive, setModalVideoActive] = useState(false);
  const [modalQuantity, setModalQuantity] = useState(1);

  // Play luxury unwrap sound effect
  const playUnwrapChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.5);
      });
    } catch {
      // Audio fallback
    }
  };

  // Live Unboxing Video playback timer
  useEffect(() => {
    let interval = null;
    if ((activeVideoId || modalVideoActive) && isVideoPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsVideoPlaying(false);
            return 100;
          }
          return prev + 3; // Smooth ~1.7s unboxing open
        });
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeVideoId, modalVideoActive, isVideoPlaying]);

  const handleStartUnboxingVideo = (productId, e) => {
    if (e) e.stopPropagation();
    const targetProd = products.find(p => p.id === productId);
    if (targetProd && targetProd.isSoldOut) return;
    setActiveVideoId(productId);
    setVideoProgress(0);
    setIsVideoPlaying(true);
    playUnwrapChime();
  };

  const handleTogglePlayVideo = (e) => {
    if (e) e.stopPropagation();
    if (videoProgress >= 100) {
      setVideoProgress(0);
      setIsVideoPlaying(true);
      playUnwrapChime();
    } else {
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleReplayVideo = (e) => {
    if (e) e.stopPropagation();
    setVideoProgress(0);
    setIsVideoPlaying(true);
    playUnwrapChime();
  };

  const handleCloseVideo = (e) => {
    if (e) e.stopPropagation();
    setActiveVideoId(null);
    setVideoProgress(0);
    setIsVideoPlaying(false);
  };

  const handleCategoryClick = (catId) => {
    if (catId === 'GIFT PACKAGE') {
      setRibbonBurst(true);
      playUnwrapChime();
      setTimeout(() => setRibbonBurst(false), 2200);
    }
    setActiveMainCategory(catId);
    setActiveOccasion('ALL OCCASIONS');
  };

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
    if (product?.isSoldOut) return;
    setSelectedProduct(product);
    setModalImageIdx(0);
    setModalVideoActive(false);
    setModalQuantity(1);
  };

  const handleWhatsAppOrder = (product, e, qty = 1) => {
    if (e) e.stopPropagation();
    const phone = `91${WHATSAPP_NUMBER}`;
    const categoryName = product.mainCategory || product.badge || 'PERFUME';
    const rawPrice = product.numericPrice || (typeof product.price === 'number' ? product.price : 999);
    const singlePrice = formatPrice ? formatPrice(rawPrice) : (product.price || `₹${rawPrice}`);
    const totalPrice = formatPrice ? formatPrice(rawPrice * qty) : `₹${rawPrice * qty}`;
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    const imageUrl = product.image
      ? (product.image.startsWith('http') ? product.image : `${origin}${product.image}`)
      : '';

    const lines = [
      `*COAG LUXURY PARFUMS & ATELIER*`,
      `_Order & Product Inquiry_`,
      ``,
      `• *Product Name:* ${product.name}`,
      `• *Category:* ${categoryName}`,
      product.subtitle ? `• *Volume / Edition:* ${product.subtitle}` : null,
      product.family ? `• *Olfactory Family:* ${product.family}` : null,
      product.notes ? `• *Fragrance Notes:* ${product.notes}` : null,
      product.rating ? `• *Rating:* ${product.rating} ★ (${product.reviews || 0} reviews)` : null,
      `• *Unit Price:* ${singlePrice}`,
      `• *Quantity:* ${qty}`,
      `• *Total Estimated Price:* ${totalPrice}`,
      `• *Stock Status:* ${product.isSoldOut ? 'Sold Out (Waitlist Request)' : 'Available in Stock'}`,
      imageUrl ? `• *Product Image:* ${imageUrl}` : null,
      ``,
      `Please confirm order booking, payment options, and dispatch timeframe.`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Filter products:
  // Strictly show ONLY SPRAYS (PERFUMES) under ALL OCCASIONS and all specific occasions!
  // Belts only in BELT, Wallets only in WALLET, Gift Packages only in GIFT PACKAGE.
  const filteredProducts = products.filter((p) => {
    if (activeMainCategory === 'BELT') return p.mainCategory === 'BELT';
    if (activeMainCategory === 'WALLET') return p.mainCategory === 'WALLET';
    if (activeMainCategory === 'GIFT PACKAGE') return p.mainCategory === 'GIFT PACKAGE';

    // When on PERFUME or ALL: strictly show ONLY SPRAYS (PERFUMES)!
    if (p.mainCategory !== 'PERFUME') return false;
    if (activeOccasion !== 'ALL OCCASIONS') {
      return Array.isArray(p.categories) && p.categories.includes(activeOccasion);
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
              COAG PARFUMS • LUXURY ATELIER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide text-black leading-tight">
            The Master Collection
          </h2>

          <p className="text-neutral-700 font-normal text-xs sm:text-sm leading-relaxed tracking-wide">
            Explore COAG's signature fragrance creations — mastercrafted extrait de parfum sprays with 35% pure concentration and curated luxury gift coffrets designed for timeless royalty.
          </p>
        </div>

        {/* ========================================================
            PRIMARY CATEGORY TABS: ALL, PERFUME, BELT, WALLET, GIFT PACKAGE
            ======================================================== */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 mb-6 max-w-4xl mx-auto pt-2">
          {mainCategories.map((cat) => {
            const isActive = activeMainCategory === cat.id;
            const isGiftPackage = cat.id === 'GIFT PACKAGE';
            const isRibbonOpen = isGiftPackage && isActive;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.2em] font-bold transition-all duration-500 cursor-pointer flex items-center space-x-2.5 overflow-visible select-none ${isGiftPackage && isRibbonOpen
                  ? 'bg-white text-black shadow-xl shadow-red-500/20 ring-2 ring-red-500 border border-red-500 scale-105'
                  : isGiftPackage && !isRibbonOpen
                    ? 'bg-neutral-100/90 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-300/70 hover:scale-105'
                    : isActive
                      ? 'bg-black text-white shadow-xl shadow-black/25 scale-105 ring-2 ring-black'
                      : 'bg-neutral-100/90 text-neutral-800 hover:bg-neutral-200/90 hover:text-black border border-neutral-300/70'
                  }`}
              >
                {/* Red Fabric Ribbon Ornament for GIFT PACKAGE Tag */}
                {isGiftPackage && (
                  <>
                    {/* Wrapping Fabric Ribbon Bands across Tag */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-10">
                      {/* Left Fabric Ribbon Band */}
                      <div
                        className={`absolute inset-y-0 left-0 w-1/2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out flex items-center justify-end ${isRibbonOpen
                          ? '-translate-x-full opacity-0'
                          : 'translate-x-0 opacity-100'
                          }`}
                        style={{
                          background: `
                            repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1.5px, transparent 1.5px, transparent 4px),
                            linear-gradient(180deg, #991b1b 0%, #dc2626 25%, #ef4444 50%, #b91c1c 85%, #7f1d1d 100%)
                          `,
                        }}
                      >
                        {/* Tailored Fabric Thread Stitching (Top & Bottom) */}
                        <div className="absolute top-[3px] left-0 right-0 h-[1px] border-t border-dashed border-amber-200/90" />
                        <div className="absolute bottom-[3px] left-0 right-0 h-[1px] border-b border-dashed border-amber-200/90" />
                        {/* Center Silk Filament Sheen */}
                        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-amber-100/70 to-white/60 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                      </div>

                      {/* Right Fabric Ribbon Band */}
                      <div
                        className={`absolute inset-y-0 right-0 w-1/2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out flex items-center justify-start ${isRibbonOpen
                          ? 'translate-x-full opacity-0'
                          : 'translate-x-0 opacity-100'
                          }`}
                        style={{
                          background: `
                            repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1.5px, transparent 1.5px, transparent 4px),
                            linear-gradient(180deg, #991b1b 0%, #dc2626 25%, #ef4444 50%, #b91c1c 85%, #7f1d1d 100%)
                          `,
                        }}
                      >
                        {/* Tailored Fabric Thread Stitching (Top & Bottom) */}
                        <div className="absolute top-[3px] left-0 right-0 h-[1px] border-t border-dashed border-amber-200/90" />
                        <div className="absolute bottom-[3px] left-0 right-0 h-[1px] border-b border-dashed border-amber-200/90" />
                        {/* Center Silk Filament Sheen */}
                        <div className="w-full h-[1.5px] bg-gradient-to-l from-transparent via-amber-100/70 to-white/60 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                      </div>
                    </div>

                    {/* Handcrafted Textile Fabric Bow (3D Fabric Knot with soft cloth folds) */}
                    <div
                      className={`absolute -top-4 sm:-top-4.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-700 ease-out flex items-center justify-center ${isRibbonOpen ? 'scale-150 opacity-0' : 'scale-100 opacity-100 group-hover:scale-110'
                        }`}
                    >
                      {/* Left Fabric Loop */}
                      <div
                        className={`relative w-6 h-5 sm:w-7 sm:h-5.5 rounded-[12px] border-t border-l border-amber-200/80 shadow-[0_5px_12px_rgba(0,0,0,0.5)] transform -rotate-25 origin-right transition-all duration-700 overflow-hidden ${isRibbonOpen ? '-translate-x-14 -translate-y-6 rotate-[-75deg] opacity-0 scale-50' : ''
                          }`}
                        style={{
                          background: `
                            repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1.5px, transparent 1.5px, transparent 3.5px),
                            linear-gradient(135deg, #ef4444 0%, #dc2626 40%, #991b1b 80%, #7f1d1d 100%)
                          `,
                        }}
                      >
                        {/* Fabric Fold Inner Crease */}
                        <div className="absolute inset-x-1 top-1 bottom-1.5 rounded-full bg-gradient-to-b from-black/40 via-red-950/20 to-transparent border-t border-white/30" />
                        {/* Fabric Stitch line */}
                        <div className="absolute top-[2px] left-[2px] right-[2px] h-[1px] border-t border-dashed border-amber-200/70" />
                      </div>

                      {/* Center Wrapped Fabric Knot */}
                      <div
                        className={`relative w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-[6px] border border-amber-200/90 shadow-[0_3px_8px_rgba(0,0,0,0.6)] z-10 mx-[-6px] flex items-center justify-center transition-all duration-500 overflow-hidden ${isRibbonOpen ? 'scale-150 opacity-0' : 'scale-100'
                          }`}
                        style={{
                          background: `
                            repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1.5px, transparent 1.5px, transparent 3px),
                            linear-gradient(180deg, #b91c1c 0%, #ef4444 35%, #b91c1c 70%, #7f1d1d 100%)
                          `,
                        }}
                      >
                        {/* Fabric Knot Wrinkle Lines */}
                        <div className="w-[1.5px] h-3 bg-red-950/70 mx-[1px]" />
                        <div className="w-[1px] h-3.5 bg-amber-200/90 mx-[0.5px]" />
                        <div className="w-[1.5px] h-3 bg-red-950/70 mx-[1px]" />
                      </div>

                      {/* Right Fabric Loop */}
                      <div
                        className={`relative w-6 h-5 sm:w-7 sm:h-5.5 rounded-[12px] border-t border-r border-amber-200/80 shadow-[0_5px_12px_rgba(0,0,0,0.5)] transform rotate-25 origin-left transition-all duration-700 overflow-hidden ${isRibbonOpen ? 'translate-x-14 -translate-y-6 rotate-[75deg] opacity-0 scale-50' : ''
                          }`}
                        style={{
                          background: `
                            repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1.5px, transparent 1.5px, transparent 3.5px),
                            linear-gradient(225deg, #ef4444 0%, #dc2626 40%, #991b1b 80%, #7f1d1d 100%)
                          `,
                        }}
                      >
                        {/* Fabric Fold Inner Crease */}
                        <div className="absolute inset-x-1 top-1 bottom-1.5 rounded-full bg-gradient-to-b from-black/40 via-red-950/20 to-transparent border-t border-white/30" />
                        {/* Fabric Stitch line */}
                        <div className="absolute top-[2px] left-[2px] right-[2px] h-[1px] border-t border-dashed border-amber-200/70" />
                      </div>

                      {/* Hanging Fabric Ribbon Tails with Hand-Cut Swallowtail & Edge Stitching */}
                      <div
                        className={`absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2 transition-all duration-700 ${isRibbonOpen ? 'translate-y-8 opacity-0' : ''
                          }`}
                      >
                        {/* Left Fabric Ribbon Tail */}
                        <div
                          className="relative w-3 h-5.5 sm:w-3.5 sm:h-6 transform -rotate-15 origin-top shadow-[0_4px_8px_rgba(0,0,0,0.4)] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] overflow-hidden"
                          style={{
                            background: `
                              repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1.5px, transparent 1.5px, transparent 3.5px),
                              linear-gradient(180deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)
                            `,
                          }}
                        >
                          <div className="absolute inset-y-0 left-[2px] w-[1px] border-l border-dashed border-amber-200/80" />
                          <div className="absolute inset-y-0 right-[2px] w-[1px] border-r border-dashed border-amber-200/80" />
                        </div>

                        {/* Right Fabric Ribbon Tail */}
                        <div
                          className="relative w-3 h-5.5 sm:w-3.5 sm:h-6 transform rotate-15 origin-top shadow-[0_4px_8px_rgba(0,0,0,0.4)] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] overflow-hidden"
                          style={{
                            background: `
                              repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1.5px, transparent 1.5px, transparent 3.5px),
                              linear-gradient(180deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)
                            `,
                          }}
                        >
                          <div className="absolute inset-y-0 left-[2px] w-[1px] border-l border-dashed border-amber-200/80" />
                          <div className="absolute inset-y-0 right-[2px] w-[1px] border-r border-dashed border-amber-200/80" />
                        </div>
                      </div>
                    </div>

                    {/* Sparkles / Celebration burst when opened */}
                    {ribbonBurst && (
                      <div className="absolute -inset-4 pointer-events-none flex items-center justify-center overflow-visible z-30">
                        <span className="absolute -top-4 -left-2 text-amber-400 text-sm animate-bounce">✨</span>
                        <span className="absolute -top-4 -right-2 text-red-500 text-sm animate-ping">🎀</span>
                        <span className="absolute -bottom-3 left-4 text-amber-300 text-sm animate-bounce delay-150">✨</span>
                        <span className="absolute -bottom-3 right-4 text-amber-400 text-sm animate-ping delay-200">✨</span>
                        <span className="absolute top-1/2 -left-4 text-amber-300 text-xs animate-pulse">🌟</span>
                        <span className="absolute top-1/2 -right-4 text-red-400 text-xs animate-pulse">🌟</span>
                      </div>
                    )}
                  </>
                )}

                {/* Button Content */}
                <span className={`relative z-10 flex items-center space-x-1.5 ${isGiftPackage ? 'text-white' : ''}`}>
                  {isGiftPackage && isRibbonOpen && (
                    <span className="text-amber-400 text-xs animate-pulse">🎁</span>
                  )}
                  <span className={isGiftPackage ? 'text-white font-extrabold drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.85)]' : ''}>
                    {cat.label}
                  </span>
                </span>

                <span
                  className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-extrabold transition-colors ${isGiftPackage && isRibbonOpen
                    ? 'bg-red-600 text-white shadow-xs'
                    : isGiftPackage && !isRibbonOpen
                      ? 'bg-black/30 text-white border border-white/40 shadow-xs'
                      : isActive
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

        {/* Secondary Filter Chips for Occasions: ONLY for Perfumes & All */}
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
                  {occ === 'LGBTQ' ? '🏳️‍🌈 LGBTQ' : occ}
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
                onClick={() => {
                  if (product.isSoldOut) return;
                  openModal(product);
                }}
                className={`group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-500 ${product.isSoldOut
                    ? 'cursor-not-allowed opacity-90 select-none'
                    : 'hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transform hover:-translate-y-1.5 cursor-pointer'
                  }`}
              >
                {/* Product Image Canvas */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                  {/* LIVE UNBOXING VIDEO PLAYER (When activated on Gift Package card) */}
                  {product.mainCategory === 'GIFT PACKAGE' && !product.isSoldOut && activeVideoId === product.id ? (
                    product.videoUrl ? (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full h-full bg-black flex flex-col justify-between overflow-hidden select-none z-30"
                      >
                        <video
                          src={product.videoUrl}
                          autoPlay
                          controls
                          playsInline
                          className="w-full h-full object-cover bg-black"
                        />
                        <button
                          onClick={handleCloseVideo}
                          className="absolute top-3 right-3 z-30 w-7 h-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
                          title="Close Video"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full h-full bg-black flex flex-col justify-between overflow-hidden select-none"
                      >
                        {/* Background / Revealed Open Box */}
                        <img
                          src={product.openBoxImage || product.bottleImage}
                          alt={`${product.name} Open Box`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* Golden Celebration Sparkles upon Box Opening */}
                        {videoProgress > 45 && (
                          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
                            <span className="absolute top-1/4 left-1/4 text-amber-300 text-xl animate-ping">✨</span>
                            <span className="absolute top-1/3 right-1/4 text-amber-400 text-base animate-bounce">🌟</span>
                            <span className="absolute bottom-1/3 left-1/3 text-amber-200 text-lg animate-pulse">✨</span>
                            <span className="absolute bottom-1/4 right-1/3 text-red-400 text-xl animate-ping">🎀</span>
                          </div>
                        )}

                        {/* 3D Lifting Box Lid with Shadow & Glow (Phase 2 to 3) */}
                        <div
                          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out origin-top"
                          style={{
                            transform: `translateY(-${Math.min(110, videoProgress * 1.2)}%)`,
                            opacity: videoProgress > 85 ? Math.max(0, 1 - (videoProgress - 85) / 15) : 1,
                          }}
                        >
                          <img
                            src={product.packingBoxImage || product.image}
                            alt={`${product.name} Gift Packing Box`}
                            className="w-full h-full object-cover object-center shadow-2xl"
                          />
                          {/* Golden Ambience Sheen */}
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Animated Silk Ribbon Untying (Phase 1 to 2) */}
                        <div
                          className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-all duration-700"
                          style={{
                            opacity: videoProgress > 65 ? 0 : 1,
                            transform: `scale(${1 + videoProgress * 0.006})`,
                          }}
                        >
                          {/* Horizontal Ribbon Glide */}
                          <div
                            className="absolute inset-x-0 h-4 bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-md border-y border-amber-300/60 transition-transform duration-500"
                            style={{
                              transform: `scaleX(${Math.max(0, 1 - (videoProgress / 55))})`,
                            }}
                          />
                          {/* Center Rosette Knot Dissolve */}
                          {videoProgress < 50 && (
                            <div
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-900 border-2 border-amber-300 shadow-xl flex items-center justify-center text-xs text-white font-bold transition-all duration-300"
                              style={{
                                transform: `scale(${Math.max(0, 1 - (videoProgress / 45))}) rotate(${videoProgress * 3}deg)`,
                              }}
                            >
                              🎀
                            </div>
                          )}
                        </div>

                        {/* Video Player Header Bar */}
                        <div className="relative z-30 p-2.5 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
                          <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-red-600/95 text-white text-[9.5px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>LIVE UNBOXING</span>
                          </div>
                          <button
                            onClick={handleCloseVideo}
                            className="w-6 h-6 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white flex items-center justify-center text-xs backdrop-blur-md transition-all cursor-pointer"
                            title="Close Video"
                          >
                            <X size={13} />
                          </button>
                        </div>

                        {/* Video Player Controls Footer */}
                        <div className="relative z-30 p-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent space-y-1.5">
                          {/* Scrub Progress Bar */}
                          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-amber-300 transition-all duration-100"
                              style={{ width: `${videoProgress}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-white text-[10px] font-semibold">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={handleTogglePlayVideo}
                                className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-all cursor-pointer text-white"
                                title={isVideoPlaying ? "Pause" : "Play"}
                              >
                                {videoProgress >= 100 ? (
                                  <RotateCcw size={11} className="text-amber-300" />
                                ) : isVideoPlaying ? (
                                  <Pause size={11} />
                                ) : (
                                  <Play size={11} className="fill-white translate-x-[0.5px]" />
                                )}
                              </button>
                              <button
                                onClick={handleReplayVideo}
                                className="text-neutral-300 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                                title="Replay Unboxing"
                              >
                                <RotateCcw size={10} />
                                <span className="text-[9.5px]">Replay</span>
                              </button>
                            </div>

                            <span className="font-mono text-[9.5px] text-amber-200">
                              {videoProgress >= 100 ? '0:03 / 0:03' : `0:0${Math.floor((videoProgress / 100) * 3)} / 0:03`}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    /* Default Product View: Shows Gift Packing Box for Gift Packages */
                    <>
                      {/* Primary Image: Shows Gift Packing Box */}
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

                      {/* Alternate Image on Hover: Reveals Open Inside View */}
                      {product.bottleImage && (
                        <img
                          src={product.bottleImage}
                          alt={`${product.name} Inside View`}
                          onError={(e) => {
                            if (product.fallbackImage) {
                              e.currentTarget.src = product.fallbackImage;
                            }
                          }}
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 z-10 flex flex-col space-y-1">
                        <span className={`text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1 ${product.mainCategory === 'GIFT PACKAGE'
                          ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white border border-amber-300/50 shadow-red-900/40'
                          : 'bg-black text-white'
                          }`}>
                          {product.mainCategory === 'GIFT PACKAGE' && <span className="text-[11px]">🎀</span>}
                          <span>{badgeLabel}</span>
                        </span>
                        {product.mainCategory === 'GIFT PACKAGE' && (
                          <span className="text-[8.5px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/80 text-amber-300 backdrop-blur-md border border-amber-400/40 w-fit shadow-xs">
                            🎁 Gift Packing Box
                          </span>
                        )}
                        {product.isSoldOut && (
                          <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-red-600 text-white border border-white/60 shadow-lg shadow-red-900/60 flex items-center space-x-1.5 w-fit animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>SOLD OUT</span>
                          </span>
                        )}
                      </div>

                      {/* Sold Out Luxury Overlay */}
                      {product.isSoldOut && (
                        <div className="absolute inset-0 bg-black/35 pointer-events-none flex items-center justify-center z-15 backdrop-blur-[1.5px]">
                          <div className="px-4 py-2 rounded-full bg-black/90 text-white border border-red-500/70 text-[11px] font-black tracking-[0.22em] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex items-center space-x-2 backdrop-blur-md transform -rotate-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                            <span className="text-red-400">SOLD OUT</span>
                          </div>
                        </div>
                      )}

                      {/* Gift Package Live Unboxing Video Trigger Button */}
                      {product.mainCategory === 'GIFT PACKAGE' && !product.isSoldOut && (
                        <button
                          onClick={(e) => handleStartUnboxingVideo(product.id, e)}
                          className="absolute bottom-3 left-3 z-20 px-3 py-1.5 rounded-full bg-black/85 hover:bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/25 shadow-xl flex items-center space-x-1.5 transition-all duration-300 hover:scale-105 group/vidbtn cursor-pointer"
                          title="Watch Gift Box Unboxing Video"
                        >
                          <span className="w-4 h-4 rounded-full bg-red-500 group-hover/vidbtn:bg-white flex items-center justify-center transition-colors">
                            <Play size={8} className="fill-white group-hover/vidbtn:fill-red-600 text-transparent translate-x-[0.5px]" />
                          </span>
                          <span>Watch Unboxing Video</span>
                        </button>
                      )}

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
                        {!product.isSoldOut && (
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
                        )}
                      </div>

                      {/* Hover Quick Actions Overlay */}
                      {!product.isSoldOut && (
                        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(product);
                            }}
                            className="px-4 py-2 bg-black hover:bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-xl flex items-center space-x-2 shadow-xl backdrop-blur-md transition-all active:scale-95"
                          >
                            <Eye size={14} />
                            <span>View Details</span>
                          </button>
                        </div>
                      )}
                    </>
                  )}
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
                      {/* Add to Bag Button / Sold Out State */}
                      {product.isSoldOut ? (
                        <span className="inline-flex items-center justify-center h-8 px-2.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-500 text-[10px] font-bold uppercase tracking-wider select-none cursor-not-allowed">
                          Sold Out
                        </span>
                      ) : (
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
                      )}

                      {/* Order on WhatsApp */}
                      <button
                        onClick={(e) => handleWhatsAppOrder(product, e)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-xs active:scale-90 cursor-pointer"
                        title={product.isSoldOut ? "Inquire Waitlist on WhatsApp" : "Order on WhatsApp"}
                        aria-label={product.isSoldOut ? "Inquire Waitlist on WhatsApp" : "Order on WhatsApp"}
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
          HAUTE LUXURY DETAIL SHOWCASE MODAL (ATELIER SHOWCASE)
          ======================================================== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden border border-neutral-200/80 my-auto text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Sleek Frosted Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-black hover:text-white text-neutral-800 flex items-center justify-center transition-all duration-300 active:scale-90 shadow-lg border border-black/10 backdrop-blur-md cursor-pointer group"
              aria-label="Close Product Showcase"
            >
              <X size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">

              {/* ==========================================
                  LEFT COLUMN: IMMERSIVE VISUAL SHOWCASE
                  ========================================== */}
              <div className="lg:col-span-6 bg-gradient-to-b from-[#141418] via-[#0d0d10] to-[#070709] relative overflow-hidden flex flex-col justify-between p-5 sm:p-7 min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] text-white">

                {/* Subtle Ambient Radial Gold Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-r from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

                {/* Top Showcase Header: Category Tag & Rating & Wishlist */}
                <div className="w-full flex items-center justify-between z-20">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-[0.22em] uppercase text-amber-300 shadow-sm">
                    <Sparkles size={11} className="text-amber-400" />
                    <span>{selectedProduct.mainCategory || selectedProduct.badge}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm text-white">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-white">{selectedProduct.rating}</span>
                      <span className="text-[10px] text-neutral-400">({selectedProduct.reviews})</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(selectedProduct);
                      }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                      title={isInWishlist(selectedProduct.id) ? "Remove from Wishlist" : "Save to Wishlist"}
                    >
                      <Heart
                        size={14}
                        className={isInWishlist(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-white'}
                      />
                    </button>
                  </div>
                </div>

                {/* Center Stage: High-Resolution Display / Live Unboxing Video with Architectural Luxury Shape */}
                {modalVideoActive && selectedProduct.mainCategory === 'GIFT PACKAGE' ? (
                  <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.2] max-h-[380px] sm:max-h-[420px] my-auto bg-black rounded-[28px] overflow-hidden flex flex-col justify-between select-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-amber-500/25 z-10">
                    {selectedProduct.videoUrl ? (
                      <div className="relative w-full h-full bg-black flex flex-col justify-between overflow-hidden">
                        <video
                          src={selectedProduct.videoUrl}
                          autoPlay
                          controls
                          playsInline
                          className="w-full h-full object-contain bg-black"
                        />
                        <button
                          onClick={() => setModalVideoActive(false)}
                          className="absolute top-3 right-3 z-30 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center space-x-1 shadow-lg"
                        >
                          <X size={12} />
                          <span>View Photos</span>
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Background / Revealed Open Box */}
                        <img
                          src={selectedProduct.openBoxImage || selectedProduct.bottleImage}
                          alt={`${selectedProduct.name} Open Box`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* Sparkles on Unboxing */}
                        {videoProgress > 45 && (
                          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
                            <span className="absolute top-1/4 left-1/4 text-amber-300 text-2xl animate-ping">✨</span>
                            <span className="absolute top-1/3 right-1/4 text-amber-400 text-xl animate-bounce">🌟</span>
                            <span className="absolute bottom-1/3 left-1/3 text-amber-200 text-xl animate-pulse">✨</span>
                            <span className="absolute bottom-1/4 right-1/3 text-red-400 text-2xl animate-ping">🎀</span>
                          </div>
                        )}

                        {/* 3D Lifting Box Lid */}
                        <div
                          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out origin-top"
                          style={{
                            transform: `translateY(-${Math.min(110, videoProgress * 1.2)}%)`,
                            opacity: videoProgress > 85 ? Math.max(0, 1 - (videoProgress - 85) / 15) : 1,
                          }}
                        >
                          <img
                            src={selectedProduct.packingBoxImage || selectedProduct.image}
                            alt={`${selectedProduct.name} Gift Packing Box`}
                            className="w-full h-full object-cover object-center shadow-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Silk Ribbon Untying */}
                        <div
                          className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-all duration-700"
                          style={{ opacity: videoProgress > 65 ? 0 : 1 }}
                        >
                          <div
                            className="absolute inset-x-0 h-5 bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-md border-y border-amber-300/60 transition-transform duration-500"
                            style={{ transform: `scaleX(${Math.max(0, 1 - (videoProgress / 55))})` }}
                          />
                          {videoProgress < 50 && (
                            <div
                              className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border-2 border-amber-300 shadow-xl flex items-center justify-center text-sm text-white font-bold transition-all duration-300"
                              style={{ transform: `scale(${Math.max(0, 1 - (videoProgress / 45))}) rotate(${videoProgress * 3}deg)` }}
                            >
                              🎀
                            </div>
                          )}
                        </div>

                        {/* Header */}
                        <div className="relative z-30 p-3 flex items-center justify-between bg-gradient-to-b from-black/85 via-black/40 to-transparent">
                          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>LIVE UNBOXING VIDEO</span>
                          </div>
                          <button
                            onClick={() => setModalVideoActive(false)}
                            className="px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white text-[10px] uppercase font-bold tracking-wider backdrop-blur-md transition-all cursor-pointer"
                          >
                            View Photos
                          </button>
                        </div>

                        {/* Controls */}
                        <div className="relative z-30 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent space-y-2">
                          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-amber-300 transition-all duration-100"
                              style={{ width: `${videoProgress}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-white text-xs font-semibold">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={handleTogglePlayVideo}
                                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-all cursor-pointer text-white"
                              >
                                {videoProgress >= 100 ? (
                                  <RotateCcw size={13} className="text-amber-300" />
                                ) : isVideoPlaying ? (
                                  <Pause size={13} />
                                ) : (
                                  <Play size={13} className="fill-white translate-x-[0.5px]" />
                                )}
                              </button>
                              <button
                                onClick={handleReplayVideo}
                                className="text-neutral-300 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer text-[11px]"
                              >
                                <RotateCcw size={11} />
                                <span>Replay</span>
                              </button>
                            </div>

                            <span className="font-mono text-[10.5px] text-amber-200">
                              {videoProgress >= 100 ? '0:03 / 0:03' : `0:0${Math.floor((videoProgress / 100) * 3)} / 0:03`}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full my-auto z-10 group/stage">
                    {/* Architectural Luxury Vitrine Frame with Pedestal and Gold Accents */}
                    <div className="relative w-full aspect-[4/5] max-h-[460px] max-w-[400px] mx-auto rounded-[28px] overflow-hidden border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2)] bg-gradient-to-b from-[#18181e] via-[#101014] to-[#0a0a0d] backdrop-blur-md flex items-center justify-center">

                      {/* Ambient Blurred Background Glow (Dynamic Color Extension of the Photo) */}
                      <img
                        src={currentModalImages[modalImageIdx] || selectedProduct.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-125 pointer-events-none"
                      />

                      {/* Soft Frosted Glass & Vignette Overlay */}
                      <div className="absolute inset-0 bg-black/35 backdrop-blur-[4px] pointer-events-none" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15)_0%,_transparent_75%)] pointer-events-none" />
                      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                      {/* 3D Glass Pedestal Horizon Highlight */}
                      <div className="absolute bottom-5 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none z-10" />

                      {/* Primary Crisp Product Image - Full Uncropped View with Natural Breathing Room */}
                      <img
                        src={currentModalImages[modalImageIdx] || selectedProduct.image}
                        alt={selectedProduct.name}
                        onError={(e) => {
                          if (selectedProduct.fallbackImage) {
                            e.currentTarget.src = selectedProduct.fallbackImage;
                          }
                        }}
                        className="relative z-10 w-full h-full object-contain p-3 sm:p-4 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-all duration-700 transform group-hover/stage:scale-105"
                      />

                      {/* Elegant Architectural Gold Corner Accents */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400/60 rounded-tl-sm pointer-events-none" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400/60 rounded-tr-sm pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400/60 rounded-bl-sm pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400/60 rounded-br-sm pointer-events-none" />

                      {/* Subtle Vignette Ring */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] pointer-events-none" />

                      {/* Previous / Next Floating Arrows */}
                      {currentModalImages.length > 1 && (
                        <>
                          <button
                            onClick={prevModalImage}
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/65 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center text-white shadow-2xl backdrop-blur-md transition-all active:scale-90 cursor-pointer"
                            aria-label="Previous Image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextModalImage}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/65 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center text-white shadow-2xl backdrop-blur-md transition-all active:scale-90 cursor-pointer"
                            aria-label="Next Image"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Thumbnails & Frame Counter */}
                <div className="w-full flex items-center justify-between z-20 pt-3 border-t border-white/10">
                  <span className="text-[10px] sm:text-[10.5px] uppercase font-mono tracking-widest text-neutral-400">
                    {modalVideoActive ? 'Live Unboxing' : `Frame ${modalImageIdx + 1} of ${currentModalImages.length}`}
                  </span>

                  <div className="flex items-center space-x-2">
                    {currentModalImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalVideoActive(false);
                          setModalImageIdx(idx);
                        }}
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-black/40 cursor-pointer ${!modalVideoActive && modalImageIdx === idx
                          ? 'border-amber-400 scale-110 shadow-[0_0_12px_rgba(251,191,36,0.6)] ring-1 ring-amber-300'
                          : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
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

                    {/* Modal Unboxing Video Toggle Button for Gift Packages */}
                    {selectedProduct.mainCategory === 'GIFT PACKAGE' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalVideoActive(true);
                          setVideoProgress(0);
                          setIsVideoPlaying(true);
                          playUnwrapChime();
                        }}
                        className={`h-11 sm:h-12 px-3 rounded-xl border-2 flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${modalVideoActive
                          ? 'border-red-500 bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)] scale-105 ring-1 ring-red-400'
                          : 'border-red-400/60 bg-red-950/40 text-red-300 hover:bg-red-600 hover:text-white'
                          }`}
                        title="Watch Live Gift Box Opening Video"
                      >
                        <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                          <Play size={9} className="fill-current translate-x-[0.5px]" />
                        </span>
                        <span>Video</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* ==========================================
                  RIGHT COLUMN: REFINED ATELIER EDITORIAL
                  ========================================== */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-5 bg-white text-black">
                <div className="space-y-4">

                  {/* Brand Eyebrow + Title Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-[10.5px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-1">
                      <span>
                        {selectedProduct.mainCategory === 'PERFUME'
                          ? 'COAG HAUTE PARFUMERIE'
                          : selectedProduct.mainCategory === 'GIFT PACKAGE'
                          ? 'COAG LUXURY COFFRET'
                          : 'COAG LEATHER ATELIER'}
                      </span>
                      <span>•</span>
                      <span className="text-amber-700 font-semibold">{selectedProduct.family}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-semibold mt-1">
                      {selectedProduct.subtitle}
                    </p>
                  </div>

                  {/* Price & Immediate Availability Bar */}
                  <div className="p-3.5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-tight">
                          {formatPrice(selectedProduct.numericPrice || selectedProduct.price)}
                        </span>
                        {modalQuantity > 1 && (
                          <span className="text-xs font-mono font-semibold text-neutral-500">
                            (Total: <strong className="text-black font-bold">{formatPrice((selectedProduct.numericPrice || 0) * modalQuantity)}</strong>)
                          </span>
                        )}
                      </div>
                      <span className="text-[10.5px] text-neutral-500 font-medium uppercase tracking-wider block mt-0.5">
                        Taxes Included • Free Insured Delivery
                      </span>
                    </div>

                    {selectedProduct.isSoldOut ? (
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold uppercase tracking-wider w-fit self-start sm:self-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        <span>Sold Out • Join Waitlist</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[10px] font-bold uppercase tracking-wider w-fit self-start sm:self-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>In Stock • Ready to Dispatch</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Quantity Selector */}
                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                      Select Quantity:
                    </span>
                    <div className="inline-flex items-center space-x-3 bg-neutral-100 rounded-full px-3 py-1 border border-neutral-200">
                      <button
                        onClick={() => setModalQuantity((prev) => Math.max(1, prev - 1))}
                        disabled={modalQuantity <= 1}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors cursor-pointer ${modalQuantity <= 1 ? 'opacity-30 cursor-not-allowed text-neutral-400' : 'hover:bg-white text-black shadow-xs'
                          }`}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-mono font-bold text-sm w-4 text-center">
                        {modalQuantity}
                      </span>
                      <button
                        onClick={() => setModalQuantity((prev) => Math.min(10, prev + 1))}
                        className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center text-xs font-bold text-black transition-colors shadow-xs cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Description & Narrative */}
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                      Description & Craftsmanship
                    </h4>
                    <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Olfactory Architecture / Materials Breakdown */}
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-bold text-black">
                      <span className="flex items-center space-x-1.5">
                        <Sparkles size={13} className="text-amber-500" />
                        <span>
                          {selectedProduct.mainCategory === 'PERFUME'
                            ? 'Olfactory Architecture (Spray Dispersion)'
                            : selectedProduct.mainCategory === 'GIFT PACKAGE'
                            ? 'Gift Suite Inclusions'
                            : 'Artisanal Specifications'}
                        </span>
                      </span>
                      {selectedProduct.mainCategory === 'PERFUME' ? (
                        <span className="text-[10px] text-amber-700 font-bold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                          24h+ Beast Mode Sillage
                        </span>
                      ) : selectedProduct.mainCategory === 'GIFT PACKAGE' ? (
                        <span className="text-[10px] text-red-700 font-bold bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                          Bespoke Presentation Box
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          100% Genuine Handcrafted
                        </span>
                      )}
                    </div>

                    {/* Structured Notes / Specs Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.notes.split('•').map((note, nIdx) => {
                        let label = '';
                        if (selectedProduct.mainCategory === 'PERFUME') {
                          label = nIdx === 0 ? '🌿 Top Notes:' : nIdx === 1 ? '🌸 Heart Notes:' : '🪵 Base Notes:';
                        } else if (selectedProduct.mainCategory === 'BELT') {
                          label = nIdx === 0 ? '✨ Buckle / Hardware:' : nIdx === 1 ? '🧵 Craft:' : '⚜️ Finish:';
                        } else if (selectedProduct.mainCategory === 'WALLET') {
                          label = nIdx === 0 ? '💳 Compartments:' : nIdx === 1 ? '🛡️ Protection:' : '⚜️ Material:';
                        } else {
                          label = nIdx === 0 ? '🎁 Extrait Flacons:' : nIdx === 1 ? '✨ Discovery Sprays:' : '💎 Leather Goods:';
                        }

                        return (
                          <div
                            key={nIdx}
                            className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-medium text-neutral-800 shadow-xs flex items-center space-x-1"
                          >
                            <span className="text-[10px] text-amber-600 font-bold">
                              {label}
                            </span>
                            <span>{note.trim()}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Spray Performance Callout for Perfumes */}
                    {selectedProduct.mainCategory === 'PERFUME' && (
                      <div className="flex items-center space-x-2 pt-1 text-[11px] text-neutral-600 font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                        <span>High-dispersion micro-atomizer nozzle spray for optimal longevity & projection</span>
                      </div>
                    )}

                    {/* LGBTQ Curated Tag if applicable */}
                    {selectedProduct.categories?.includes('LGBTQ') && (
                      <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border border-purple-200/80 text-purple-900 text-[11px] font-semibold w-fit">
                        <span>🏳️‍🌈</span>
                        <span className="font-bold">LGBTQ+ Curated Edition</span>
                        <span className="text-[10px] text-purple-600 font-normal hidden sm:inline">• Inclusive Gender-Neutral Scent</span>
                      </div>
                    )}
                  </div>

                  {/* 3 Luxury Assurance Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-[10.5px] sm:text-xs">
                    <div className="flex items-center space-x-1.5 text-neutral-700 bg-neutral-50 px-2 py-1.5 rounded-xl border border-neutral-100">
                      <Truck size={13} className="text-emerald-600 flex-shrink-0" />
                      <span className="font-medium truncate">Free Delivery</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-neutral-700 bg-neutral-50 px-2 py-1.5 rounded-xl border border-neutral-100">
                      <Award size={13} className="text-emerald-600 flex-shrink-0" />
                      <span className="font-medium truncate">100% Genuine</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-neutral-700 bg-neutral-50 px-2 py-1.5 rounded-xl border border-neutral-100">
                      <ShieldCheck size={13} className="text-emerald-600 flex-shrink-0" />
                      <span className="font-medium truncate">Insured Pack</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Buttons: Add to Bag & WhatsApp Order */}
                <div className="pt-3 border-t border-neutral-200 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      disabled={selectedProduct.isSoldOut}
                      onClick={() => {
                        if (selectedProduct.isSoldOut) return;
                        addToCart(selectedProduct, modalQuantity);
                        setSelectedProduct(null);
                      }}
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-xl transition-all ${selectedProduct.isSoldOut
                        ? 'bg-neutral-200 text-neutral-400 border border-neutral-300 cursor-not-allowed shadow-none'
                        : 'bg-black hover:bg-neutral-800 text-white hover:shadow-black/20 active:scale-95 cursor-pointer group'
                        }`}
                    >
                      <ShoppingBag size={16} className={selectedProduct.isSoldOut ? '' : 'group-hover:scale-110 transition-transform'} />
                      <span>{selectedProduct.isSoldOut ? 'Sold Out' : `Add to Bag • ${formatPrice((selectedProduct.numericPrice || 0) * modalQuantity)}`}</span>
                    </button>

                    <button
                      onClick={(e) => handleWhatsAppOrder(selectedProduct, e, modalQuantity)}
                      className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-xl shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer group"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-center text-[10.5px] text-neutral-400 uppercase tracking-widest pt-0.5">
                    Concierge Order Helpline with Immediate Assistance on {WHATSAPP_NUMBER}
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
