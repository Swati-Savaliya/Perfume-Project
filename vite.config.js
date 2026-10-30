import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Always keep it on the exact same port (5173)
    open: true,       // Automatically open the link in browser
  },
})
