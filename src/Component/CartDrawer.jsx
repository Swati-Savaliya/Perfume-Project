import React, { useEffect } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, CheckCircle2 } from 'lucide-react';
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

const CartDrawer = ({ onExploreCollection }) => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    checkoutOnWhatsApp,
    formatPrice
  } = useShop();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[150]">
      {/* Light Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
        onClick={closeCart}
      />

      {/* Floating Notification-Style Panel (Below Header) */}
      <div className="fixed top-[80px] sm:top-[90px] right-3 sm:right-10 w-[calc(100vw-24px)] sm:w-[420px] max-h-[82vh] bg-white text-black rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-black/10 flex flex-col z-[160] overflow-hidden animate-luxury-fade">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <ShoppingBag size={15} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-serif font-bold tracking-wide">
                Shopping Bag ({cartCount})
              </h2>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1">
                <CheckCircle2 size={11} />
                <span>Complimentary Express Delivery</span>
              </span>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors cursor-pointer"
            aria-label="Close Shopping Bag"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content (Scrollable List) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[46vh]">
          {cart.length === 0 ? (
            <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <ShoppingBag size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-serif font-bold text-neutral-800">
                  Your Bag is Currently Empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Discover our pure 35% extrait fragrances and artisanal leather creations.
                </p>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  if (onExploreCollection) onExploreCollection();
                  else window.location.hash = '#collection';
                }}
                className="mt-2 px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all cursor-pointer"
              >
                Discover Collection
              </button>
            </div>
          ) : (
            cart.map(({ product, quantity }) => {
              const rawPrice = product.numericPrice ||
                parseInt(String(product.price).replace(/[^0-9]/g, ''), 10) || 0;
              const itemTotal = rawPrice * quantity;

              return (
                <div
                  key={product.id}
                  className="flex items-center space-x-3 p-2.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 transition-all hover:bg-white hover:shadow-xs"
                >
                  {/* Fixed Dimension Product Image (Can NEVER blow up) */}
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
                    <p className="text-xs font-serif font-bold text-black">
                      {formatPrice(itemTotal)}{' '}
                      <span className="text-[10px] text-neutral-400 font-sans font-normal">
                        ({formatPrice(rawPrice)} each)
                      </span>
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 pt-0.5">
                      <div className="inline-flex items-center border border-neutral-300 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-1.5 py-0.5 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="px-1.5 text-[11px] font-bold font-mono text-black">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-1.5 py-0.5 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer self-start"
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-neutral-100 bg-neutral-50 space-y-2.5">
            <div className="space-y-1 text-xs text-neutral-600">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase font-bold tracking-wider text-black">Estimated Total</span>
                <span className="text-lg font-serif font-bold text-black">{formatPrice(cartSubtotal)}</span>
              </div>
            </div>

            <button
              onClick={checkoutOnWhatsApp}
              className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Checkout via WhatsApp</span>
            </button>
            <p className="text-[9.5px] text-center text-neutral-400">
              Instant address confirmation & priority reservation
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
