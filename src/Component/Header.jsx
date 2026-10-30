import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CurrencyDropdown from './CurrencyDropdown';

const Header = ({ currentPage = 'home', onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { wishlistCount, cartCount, openWishlist, openCart } = useShop();

    const navLinks = [
        { name: 'HOME', href: '#home', page: 'home' },
        { name: 'COLLECTION', href: '#collection', page: 'collection' },
        { name: 'ABOUT US', href: '#about', page: 'about' },
        { name: 'CONTACT', href: '#contact', page: 'contact' },
    ];

    const handleLinkClick = (e, link) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (link.page === 'collection') {
            if (onNavigate) {
                onNavigate('collection');
            } else {
                window.location.hash = '#collection';
            }
        } else if (link.page === 'about') {
            if (onNavigate) {
                onNavigate('about');
            } else {
                window.location.hash = '#about';
            }
        } else if (link.page === 'contact') {
            if (onNavigate) {
                onNavigate('contact');
            } else {
                window.location.hash = '#contact';
            }
        } else {
            if (onNavigate) {
                onNavigate('home', link.href);
            } else {
                window.location.hash = link.href;
            }
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate('home');
        } else {
            window.location.hash = '#home';
        }
    };

    return (
        <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
            {/* Top Announcement Bar */}
            <div className="bg-black text-white text-[10px] sm:text-[11px] tracking-widest text-center py-2.5 sm:py-3 px-4 uppercase font-light flex items-center justify-center border-b border-white/10">
                Complimentary Delivery & Luxury Samples With Every Order
            </div>

            {/* Main Header Container */}
            <div className="max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-14 xl:px-16">
                <div className="flex items-center justify-between h-[66px] sm:h-[82px] py-1">

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-1.5 -ml-1 text-black hover:opacity-70 transition-opacity cursor-pointer rounded-lg hover:bg-neutral-100"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Left Navigation Links (Desktop: HOME & COLLECTION) */}
                    <nav className="hidden md:flex flex-1 basis-0 items-center justify-start space-x-7">
                        {navLinks.slice(0, 2).map((link) => {
                            const isCurrent =
                                (link.page === 'collection' && currentPage === 'collection') ||
                                (link.name === 'HOME' && currentPage === 'home');

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link)}
                                    className={`text-[11px] lg:text-[12px] font-medium tracking-widest transition-colors uppercase relative group cursor-pointer ${
                                        isCurrent ? 'text-black font-bold' : 'text-neutral-700 hover:text-black'
                                    }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                                            isCurrent ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    {/* Center Brand Logo Lockup */}
                    <div className="flex-shrink-0 text-center px-1 sm:px-4">
                        <a
                            href="#home"
                            onClick={handleLogoClick}
                            className="inline-flex flex-col items-center group focus:outline-none cursor-pointer"
                        >
                            <img
                                src="/images/Header_img.jpeg"
                                alt="COAG Luxury Parfumerie"
                                className="h-8 sm:h-11 md:h-13 w-auto object-contain mx-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="text-[7px] sm:text-[9.5px] tracking-[0.25em] sm:tracking-[0.35em] text-neutral-800 font-medium uppercase mt-0.5 block transition-colors group-hover:text-black whitespace-nowrap">
                                LUXURY PERFUMES • PARIS
                            </span>
                        </a>
                    </div>

                    {/* Right Navigation Links & Action Icons (Desktop: ABOUT US & CONTACT) */}
                    <div className="flex flex-1 basis-0 items-center justify-end space-x-2 sm:space-x-6">
                        <nav className="hidden md:flex items-center space-x-8 mr-2">
                            {navLinks.slice(2).map((link) => {
                                const isCurrent =
                                    (link.page === 'about' && currentPage === 'about') ||
                                    (link.page === 'contact' && currentPage === 'contact');

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link)}
                                        className={`text-[12px] font-medium tracking-widest transition-colors uppercase relative group cursor-pointer ${
                                            isCurrent ? 'text-black font-bold' : 'text-neutral-700 hover:text-black'
                                        }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                                                isCurrent ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                        />
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Action Icons: Currency Dropdown, Wishlist & Cart */}
                        <div className="flex items-center space-x-1.5 sm:space-x-3.5 text-black">
                            {/* Currency Dropdown right beside Like icon */}
                            <CurrencyDropdown variant="light" />

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openWishlist();
                                }}
                                className="p-1 sm:p-1.5 hover:opacity-70 transition-opacity relative cursor-pointer group"
                                title={`Wishlist (${wishlistCount})`}
                                aria-label="Wishlist"
                            >
                                <Heart
                                    size={19}
                                    strokeWidth={1.8}
                                    className={wishlistCount > 0 ? "fill-red-500 text-red-500" : "text-black"}
                                />
                                <span className={`absolute -top-1 -right-1 text-[9px] min-w-[15px] h-3.5 sm:h-4 px-1 rounded-full flex items-center justify-center font-bold transition-all ${
                                    wishlistCount > 0 ? "bg-red-500 text-white scale-105" : "bg-black text-white"
                                }`}>
                                    {wishlistCount}
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openCart();
                                }}
                                className="p-1 sm:p-1.5 hover:opacity-70 transition-opacity relative cursor-pointer group"
                                title={`Shopping Bag (${cartCount})`}
                                aria-label="Shopping Cart"
                            >
                                <ShoppingBag size={19} strokeWidth={1.8} />
                                <span className={`absolute -top-1 -right-1 text-[9px] min-w-[15px] h-3.5 sm:h-4 px-1 rounded-full flex items-center justify-center font-bold transition-all ${
                                    cartCount > 0 ? "bg-amber-600 text-white scale-105" : "bg-black text-white"
                                }`}>
                                    {cartCount}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-black/10 px-6 py-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                        <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Currency</span>
                        <CurrencyDropdown variant="light" />
                    </div>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link)}
                            className="block text-xs font-medium tracking-widest text-black hover:text-neutral-500 uppercase py-1.5 cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center space-x-3 pt-3 border-t border-neutral-100">
                        <button
                            type="button"
                            onClick={() => {
                                setIsMenuOpen(false);
                                openWishlist();
                            }}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                            <Heart size={14} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
                            <span>Wishlist ({wishlistCount})</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setIsMenuOpen(false);
                                openCart();
                            }}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-black text-white text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                        >
                            <ShoppingBag size={14} />
                            <span>Cart ({cartCount})</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
