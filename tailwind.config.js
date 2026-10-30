/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        luxury: '0.32em',
      },
      keyframes: {
        luxuryFade: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress5s: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'luxury-fade': 'luxuryFade 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'progress-5s': 'progress5s 5s linear forwards',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}