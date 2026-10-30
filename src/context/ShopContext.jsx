import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

const WHATSAPP_NUMBER = '7203060213';

export const CURRENCIES = [
  { code: 'INR', name: 'Indian Rupee', label: 'INR', fullName: 'INR', countryCode: 'IN', flag: '🇮🇳', symbol: '₹', rate: 1 },
  { code: 'USD', name: 'US Dollar', label: 'USD', fullName: 'US Dollar (USD)', countryCode: 'US', flag: '🇺🇸', symbol: '$', rate: 0.012 },
  { code: 'EUR', name: 'Euro', label: 'EUR', fullName: 'Euro (EUR)', countryCode: 'EU', flag: '🇪🇺', symbol: '€', rate: 0.011 },
  { code: 'GBP', name: 'British Pound', label: 'GBP', fullName: 'British Pound (GBP)', countryCode: 'GB', flag: '🇬🇧', symbol: '£', rate: 0.0094 },
  { code: 'JPY', name: 'Japanese Yen', label: 'JPY', fullName: 'Japanese Yen (JPY)', countryCode: 'JP', flag: '🇯🇵', symbol: '¥', rate: 1.82 },
  { code: 'CHF', name: 'Swiss Franc', label: 'CHF', fullName: 'Swiss Franc (CHF)', countryCode: 'CH', flag: '🇨🇭', symbol: 'CHF', rate: 0.0105 }
];

export const ShopProvider = ({ children }) => {
  // Currency state persisted in localStorage
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('coag_currency') || 'INR';
    } catch {
      return 'INR';
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('coag_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cart state persisted in localStorage: [{ product, quantity }]
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('coag_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Drawer states
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const hideToast = () => {
    setToast(null);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('coag_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('coag_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('coag_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Format price helper according to selected currency
  const formatPrice = (amountInINR) => {
    const num = typeof amountInINR === 'number'
      ? amountInINR
      : parseInt(String(amountInINR).replace(/[^0-9]/g, ''), 10) || 0;

    const current = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

    if (current.code === 'INR') {
      return `₹${num.toLocaleString('en-IN')}`;
    }
    if (current.code === 'USD') {
      const converted = num * current.rate;
      return `$${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (current.code === 'EUR') {
      const converted = num * current.rate;
      return `€${converted.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (current.code === 'GBP') {
      const converted = num * current.rate;
      return `£${converted.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (current.code === 'JPY') {
      const converted = Math.round(num * current.rate);
      return `¥${converted.toLocaleString('ja-JP')}`;
    }
    if (current.code === 'CHF') {
      const converted = num * current.rate;
      return `CHF ${converted.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `${current.symbol}${(num * current.rate).toFixed(2)}`;
  };

  const currentCurrencyObj = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

  // Wishlist Actions
  const toggleWishlist = (product) => {
    if (!product || !product.id) return;
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast({
          type: 'wishlist_remove',
          title: 'Removed from Wishlist',
          product
        });
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast({
          type: 'wishlist_add',
          title: 'Saved to Wishlist',
          product
        });
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => {
      const removed = prev.find((item) => item.id === productId);
      if (removed) {
        showToast({
          type: 'wishlist_remove',
          title: 'Removed from Wishlist',
          product: removed
        });
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  // Cart Actions
  const addToCart = (product, quantity = 1, openDrawer = false) => {
    if (!product || !product.id) return;
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { product, quantity }];
      }
    });

    // Show sleek Toast Notification instead of forcing drawer open
    showToast({
      type: 'cart',
      title: 'Added to Shopping Bag',
      product,
      quantity
    });

    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.product.id === productId);
      if (item) {
        showToast({
          type: 'cart_remove',
          title: 'Removed from Shopping Bag',
          product: item.product
        });
      }
      return prev.filter((item) => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // Computed values
  const wishlistCount = wishlist.length;
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  
  const cartSubtotal = cart.reduce((total, item) => {
    const rawPrice = item.product.numericPrice ||
      parseInt(String(item.product.price).replace(/[^0-9]/g, ''), 10) || 0;
    return total + rawPrice * (item.quantity || 1);
  }, 0);

  // WhatsApp Checkout
  const checkoutOnWhatsApp = () => {
    if (cart.length === 0) return;

    const itemsSummary = cart.map((item, idx) => {
      const p = item.product;
      const formattedItemPrice = formatPrice(p.numericPrice || p.price);
      return `${idx + 1}. *${p.name}* (${p.subtitle || p.badge || 'Creations'})%0A` +
        `   Qty: ${item.quantity} × ${formattedItemPrice}%0A`;
    }).join('%0A');

    const message = `*✨ New Order Request - Maison COAG*%0A%0A` +
      `*Items in Shopping Bag:*%0A` +
      `${itemsSummary}%0A` +
      `*Total Estimated Value:* ${formatPrice(cartSubtotal)} (${currency})%0A` +
      `*Delivery:* Complimentary Priority Air%0A%0A` +
      `Please confirm availability and dispatch schedule.`;

    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <ShopContext.Provider
      value={{
        CURRENCIES,
        currency,
        setCurrency,
        currentCurrencyObj,
        formatPrice,

        wishlist,
        wishlistCount,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        openWishlist: () => setIsWishlistOpen(true),
        closeWishlist: () => setIsWishlistOpen(false),

        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        checkoutOnWhatsApp,

        toast,
        showToast,
        hideToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
