import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useShop, CURRENCIES } from '../context/ShopContext';

const CurrencyDropdown = ({ variant = 'light' }) => {
  const { currency, setCurrency, currentCurrencyObj } = useShop();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isDark = variant === 'dark';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            : 'bg-neutral-100 hover:bg-neutral-200/80 text-black border border-black/10'
        }`}
        aria-label="Select Currency"
      >
        <span className="font-mono font-bold text-[10px] text-neutral-600 px-1 py-0.2 rounded bg-black/5">
          {currentCurrencyObj.countryCode || currentCurrencyObj.code.slice(0, 2)}
        </span>
        <span className="font-mono text-[11px] font-semibold">{currentCurrencyObj.code}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white text-black shadow-2xl border border-black/10 py-1.5 z-[120] animate-luxury-fade">
          <div className="px-3.5 py-2 border-b border-neutral-100">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400">
              Select Currency
            </span>
          </div>

          <div className="py-1">
            {CURRENCIES.map((c) => {
              const isSelected = c.code === currency;

              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCurrency(c.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/80 text-black font-bold'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-7 text-xs font-mono font-bold text-neutral-800 tracking-wide">
                      {c.countryCode || c.code.slice(0, 2)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-tight text-neutral-900">
                        {c.code === 'INR' ? 'INR' : c.fullName}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                        {c.symbol} • {c.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check size={16} className="text-amber-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
