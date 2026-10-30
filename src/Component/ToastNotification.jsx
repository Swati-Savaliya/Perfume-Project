import React, { useEffect } from 'react';
import { X, ShoppingBag, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ToastNotification = () => {
  const { toast, hideToast, openCart, openWishlist, formatPrice } = useShop();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      hideToast();
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  if (!toast) return null;

  const isCart = toast.type === 'cart';
  const isWishlist = toast.type === 'wishlist_add' || toast.type === 'wishlist';
  const isWishlistRemove = toast.type === 'wishlist_remove';

  const product = toast.product;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-[160] max-w-sm w-full animate-luxury-fade pointer-events-auto">
      <div className="bg-[#0b0b0e] text-white p-3.5 sm:p-4 rounded-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center space-x-3.5">
        
        {/* Product Image / Icon */}
        <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
          {product?.image || product?.bottleImage ? (
            <img
              src={product.bottleImage || product.image}
              alt={product.name || 'Creation'}
              className="w-full h-full object-contain"
            />
          ) : (
            isWishlist ? (
              <Heart size={20} className="text-red-500 fill-red-500" />
            ) : (
              <ShoppingBag size={20} className="text-amber-400" />
            )
          )}

          {/* Mini Status Badge */}
          <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-black/80 flex items-center justify-center">
            {isWishlist ? (
              <Heart size={9} className="text-red-500 fill-red-500" />
            ) : isWishlistRemove ? (
              <X size={9} className="text-neutral-400" />
            ) : (
              <ShoppingBag size={9} className="text-emerald-400" />
            )}
          </span>
        </div>

        {/* Text info */}
        <div className="flex-1 min-w-0 space-y-0.5">
          <div className="flex items-center space-x-1.5">
            <span className="text-[9.5px] uppercase tracking-[0.2em] font-bold text-amber-400 block">
              {isCart ? 'Shopping Bag' : isWishlist ? 'Wishlist' : 'Notification'}
            </span>
          </div>

          <h4 className="text-xs font-bold text-white truncate leading-tight">
            {toast.title || (isCart ? 'Added to Bag' : 'Saved to Wishlist')}
          </h4>

          {product && (
            <p className="text-[11px] text-neutral-300 truncate">
              {product.name}{' '}
              <span className="text-amber-300 font-serif font-bold">
                • {formatPrice(product.numericPrice || product.price)}
              </span>
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-1.5 shrink-0">
          {(isCart || isWishlist) && (
            <button
              onClick={() => {
                hideToast();
                if (isCart) openCart();
                else openWishlist();
              }}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10.5px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center space-x-1"
            >
              <span>View</span>
              <ArrowRight size={10} />
            </button>
          )}

          <button
            onClick={hideToast}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss notification"
          >
            <X size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ToastNotification;

