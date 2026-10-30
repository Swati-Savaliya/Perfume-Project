import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const WishlistDrawer = ({ onExploreCollection }) => {
  const {
    wishlist,
    isWishlistOpen,
    closeWishlist,
    removeFromWishlist,
    addToCart,
    formatPrice
  } = useShop();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeWishlist();
    };
    if (isWishlistOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWishlistOpen, closeWishlist]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-[150]">
      {/* Light Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
        onClick={closeWishlist}
      />

      {/* Floating Notification-Style Panel (Below Header) */}
      <div className="fixed top-[80px] sm:top-[90px] right-3 sm:right-10 w-[calc(100vw-24px)] sm:w-[420px] max-h-[82vh] bg-white text-black rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-black/10 flex flex-col z-[160] overflow-hidden animate-luxury-fade">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
              <Heart size={16} className="fill-red-500" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-serif font-bold tracking-wide">
                Saved Wishlist ({wishlist.length})
              </h2>
              <span className="text-[10px] text-neutral-400 font-medium">
                Your private saved selections
              </span>
            </div>
          </div>
          <button
            onClick={closeWishlist}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors cursor-pointer"
            aria-label="Close Wishlist"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content (Scrollable List) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[46vh]">
          {wishlist.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <Heart size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-serif font-bold text-neutral-800">
                  Your Wishlist is Empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Save your favorite haute parfums, Tuscan leather belts, and artisanal wallets.
                </p>
              </div>
              <button
                onClick={() => {
                  closeWishlist();
                  if (onExploreCollection) onExploreCollection();
                  else window.location.hash = '#collection';
                }}
                className="mt-2 px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer"
              >
                Discover Collection
              </button>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-3 p-2.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 transition-all hover:bg-white hover:shadow-xs"
              >
                {/* Fixed Dimension Product Image */}
                <div className="w-14 h-14 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded-xl bg-white border border-neutral-200/60 overflow-hidden shrink-0 flex items-center justify-center p-1">
                  <img
                    src={product.bottleImage || product.image || '/images/hero_perfume.jpg'}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-amber-600 block">
                    {product.badge || product.mainCategory || 'CREATION'}
                  </span>
                  <h4 className="text-xs font-bold text-neutral-900 truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 truncate">
                    {product.subtitle || 'Maison COAG'}
                  </p>
                  <p className="text-xs font-serif font-bold text-black pt-0.5">
                    {formatPrice(product.numericPrice || product.price)}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-1.5 shrink-0">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      closeWishlist();
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-[11px] font-bold flex items-center space-x-1 transition-all cursor-pointer"
                    title="Add to Shopping Bag"
                  >
                    <ShoppingBag size={12} />
                    <span>Bag</span>
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-4 border-t border-neutral-100 bg-neutral-50 space-y-2">
            <button
              onClick={() => {
                wishlist.forEach((item) => addToCart(item, 1));
                closeWishlist();
              }}
              className="w-full py-3 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>Move All to Bag ({wishlist.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;
