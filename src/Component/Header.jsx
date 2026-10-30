import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#' },
        { name: 'COLLECTION', href: '#' },
        { name: 'BESTSELLERS', href: '#' },
        { name: 'ABOUT', href: '#' },
        { name: 'CONTACT', href: '#' },
    ];

    return (
        <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
            {/* Top Announcement Bar (Black Luxury & Increased Height) */}
            <div className="bg-black text-white text-[10px] sm:text-[11px] tracking-widest text-center py-2.5 sm:py-3 px-4 uppercase font-light flex items-center justify-center border-b border-white/10">
                Complimentary Delivery & Luxury Samples With Every Order
            </div>

            {/* Main Header Container (Expanded Widescreen Width) */}
            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="flex items-center justify-between h-[74px] sm:h-[86px] py-1.5">

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-1.5 text-black hover:opacity-70 transition-opacity"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Left Navigation Links (Desktop) */}
                    <nav className="hidden md:flex flex-1 basis-0 items-center justify-start space-x-7">
                        {navLinks.slice(0, 3).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[11px] lg:text-[12px] font-medium tracking-widest text-black hover:text-neutral-500 transition-colors uppercase relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Center Brand Logo Lockup (Perfect Center Alignment) */}
                    <div className="flex-shrink-0 text-center px-4">
                        <a href="/" className="inline-flex flex-col items-center group focus:outline-none">
                            <img
                                src="/images/Header_img.jpeg"
                                alt="COAG Luxury Parfumerie"
                                className="h-10 sm:h-12 md:h-13 w-auto object-contain mx-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="text-[8px] sm:text-[9.5px] tracking-[0.35em] text-neutral-800 font-medium uppercase mt-0.5 block transition-colors group-hover:text-black">
                                HAUTE PARFUMERIE • PARIS
                            </span>
                        </a>
                    </div>

                    {/* Right Navigation Links & Action Icons */}
                    <div className="flex flex-1 basis-0 items-center justify-end space-x-6">
                        {/* Desktop Additional Links */}
                        <nav className="hidden md:flex items-center space-x-8 mr-2">
                            {navLinks.slice(3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[12px] font-medium tracking-widest text-black hover:text-neutral-500 transition-colors uppercase relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </nav>

                        {/* Action Icons */}
                        <div className="flex items-center space-x-4 text-black">
                            <button
                                className="p-1 hover:opacity-60 transition-opacity"
                                title="Search"
                                aria-label="Search"
                            >
                                <Search size={19} strokeWidth={1.75} />
                            </button>

                            <button
                                className="p-1 hover:opacity-60 transition-opacity hidden sm:block"
                                title="Account"
                                aria-label="Account"
                            >
                                <User size={19} strokeWidth={1.75} />
                            </button>

                            <button
                                className="p-1 hover:opacity-60 transition-opacity relative"
                                title="Wishlist"
                                aria-label="Wishlist"
                            >
                                <Heart size={19} strokeWidth={1.75} />
                                <span className="absolute -top-1 -right-1.5 bg-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                                    0
                                </span>
                            </button>

                            <button
                                className="p-1 hover:opacity-60 transition-opacity relative"
                                title="Cart"
                                aria-label="Shopping Cart"
                            >
                                <ShoppingBag size={19} strokeWidth={1.75} />
                                <span className="absolute -top-1 -right-1.5 bg-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-black/10 px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-xs font-medium tracking-widest text-black hover:text-neutral-500 uppercase py-1.5"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
