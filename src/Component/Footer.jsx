import React from 'react';
import {
    Sparkles,
    ArrowUpRight,
    ShieldCheck,
    Award,
    Clock,
    Mail,
    MapPin
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

const InstagramIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
);

const XTwitterIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socialChannels = [
    { name: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon className="w-4 h-4" /> },
    { name: 'Facebook', href: 'https://facebook.com', icon: <FacebookIcon className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://youtube.com', icon: <YoutubeIcon className="w-4 h-4" /> },
    { name: 'X (Twitter)', href: 'https://twitter.com', icon: <XTwitterIcon className="w-3.5 h-3.5" /> },
    { name: 'WhatsApp', href: 'https://wa.me/916356539666?text=Hello%20COAG%20Perfumes%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20perfumes.', icon: <WhatsAppIcon className="w-4 h-4 text-emerald-400" /> },
];

const quickNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const collectionsList = [
    { name: 'Emeraude Noir', badge: 'Cold Bergamot & Cedar', href: '#collection' },
    { name: 'Amber Imperial', badge: 'Smoked Tonka & Myrrh', href: '#collection' },
    { name: 'Eternal Rose', badge: 'Fresh French Centifolia', href: '#collection' },
    { name: 'Absolute Black', badge: 'Volcanic Basalt Mineral', href: '#collection' },
];

const Footer = ({ onNavigate }) => {
    return (
        <footer id="contact" className="relative w-full bg-[#070709] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/10 selection:bg-amber-500/30">
            {/* Subtle Luxury Ambient Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[220px] bg-gradient-to-b from-amber-500/10 via-amber-900/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-10">
                {/* TOP ROW: BRAND IDENTITY & QUICK NAV BAR */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                    {/* Brand Lockup */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            if (onNavigate) {
                                e.preventDefault();
                                onNavigate('home');
                            }
                        }}
                        className="inline-flex flex-col items-start group focus:outline-none cursor-pointer space-y-1.5"
                    >
                        <img
                            src="/images/logo_white.png"
                            alt="COAG Luxury Parfumerie"
                            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="text-[10.5px] sm:text-[11.5px] font-sans font-normal tracking-[0.3em] uppercase text-white">
                            LUXURY PERFUMES • PARIS
                        </span>
                    </a>

                    {/* Quick Nav Bar */}
                    <nav className="flex flex-wrap items-center gap-x-7 gap-y-2.5 text-xs sm:text-sm uppercase tracking-widest text-neutral-200 font-semibold">
                        {quickNavLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href === '#collection' && onNavigate) {
                                        e.preventDefault();
                                        onNavigate('collection');
                                    } else if (link.href === '#about' && onNavigate) {
                                        e.preventDefault();
                                        onNavigate('about');
                                    } else if (link.href === '#contact' && onNavigate) {
                                        e.preventDefault();
                                        onNavigate('contact');
                                    } else if (link.href === '#home' && onNavigate) {
                                        e.preventDefault();
                                        onNavigate('home');
                                    } else if (onNavigate) {
                                        e.preventDefault();
                                        onNavigate('home', link.href);
                                    }
                                }}
                                className="hover:text-amber-300 transition-colors relative group py-1 cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* MIDDLE ROW: 3 FOCUSED LUXURY COLUMNS (Increased Legible Text Sizes) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Column 1: About & Assurance */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-[15px] uppercase tracking-[0.2em] text-amber-300 font-bold">
                            About COAG
                        </h4>
                        <p className="text-neutral-200 text-sm sm:text-[15px] leading-relaxed font-normal">
                            Handcrafted in France with 30% to 35% pure fragrance extrait concentration. Engineered for deep longevity, projection, and timeless elegance.
                        </p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 pt-1">
                            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                            <span className="font-medium text-amber-200/90">France Perfume Studio: Open</span>
                        </div>
                    </div>

                    {/* Column 2: Signature Fragrances */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-[15px] uppercase tracking-[0.2em] text-amber-300 font-bold">
                            Signature Perfumes
                        </h4>
                        <ul className="space-y-3 text-sm sm:text-[15px] text-neutral-200">
                            {collectionsList.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            if (onNavigate) {
                                                e.preventDefault();
                                                onNavigate('collection');
                                            }
                                        }}
                                        className="hover:text-amber-300 transition-colors flex items-center justify-between group cursor-pointer"
                                    >
                                        <span className="font-medium group-hover:translate-x-1 transition-transform">{item.name}</span>
                                        <span className="text-xs sm:text-[13px] text-neutral-400 group-hover:text-neutral-300">{item.badge}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Boutiques & Concierge */}
                    <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-[15px] uppercase tracking-[0.2em] text-amber-300 font-bold">
                            Locations & Concierge
                        </h4>
                        <p className="text-sm sm:text-[15px] text-neutral-200 leading-relaxed font-normal">
                            Flagship salons in <span className="text-white font-semibold">Paris</span>, <span className="text-white font-semibold">Grasse</span>, <span className="text-white font-semibold">Mumbai</span>, and <span className="text-white font-semibold">London</span>.
                        </p>
                        <div className="pt-2 flex items-center gap-3 flex-wrap">
                            {socialChannels.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-amber-500/20 border border-white/15 hover:border-amber-400 text-neutral-300 hover:text-amber-300 transition-all duration-300 flex items-center justify-center shadow-xs hover:scale-108 active:scale-95"
                                    title={s.name}
                                    aria-label={s.name}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM ROW: CRAFT GUARANTEES, CENTER DEVELOPER CREDIT & LEGAL */}
                <div className="pt-7 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs sm:text-sm">
                    {/* Left: Craft Guarantees */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-neutral-200 font-medium">
                        <span className="flex items-center gap-1.5 text-white">
                            <ShieldCheck className="w-4 h-4 text-amber-400" />
                            <span>100% Authentic French Oils</span>
                        </span>
                        <span className="text-white/20 hidden sm:inline">•</span>
                        <span className="flex items-center gap-1.5 text-white">
                            <Award className="w-4 h-4 text-amber-400" />
                            <span>Cruelty-Free & Clean</span>
                        </span>
                    </div>



                    {/* Right: Copyright & Legal */}
                    <div className="flex items-center justify-center lg:justify-end gap-3.5 text-xs sm:text-sm text-neutral-300">
                        <span className="text-neutral-200 font-medium">© 2026 COAG PARFUMS.</span>
                        <span className="text-white/20">•</span>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                        <span className="text-white/20">•</span>
                        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

                {/* Center: Developed By Swati with Direct WhatsApp Inquiry (Hidden Mobile Number) */}
                <div className="flex items-center justify-center">
                    <a
                        href="https://wa.me/916356539666?text=Hello%20Swati%2C%20I%20saw%20your%20perfume%20website%20and%20would%20like%20to%20inquire%20regarding%20website%20design%20and%20development."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-white/5 to-amber-500/10 hover:from-amber-500/20 hover:to-amber-500/20 border border-amber-400/30 hover:border-amber-400 text-neutral-200 hover:text-white transition-all duration-300 shadow-sm hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
                        title="Chat with Swati on WhatsApp for website inquiry"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-xs sm:text-sm tracking-wider">
                            Developed By <span className="font-semibold text-amber-300 group-hover:underline underline-offset-4 decoration-amber-400">Swati</span>
                        </span>
                        <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0 ml-0.5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
