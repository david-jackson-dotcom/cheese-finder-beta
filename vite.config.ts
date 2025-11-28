import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/cheese-finder-beta/' : '/',
  
  // ⭐️ CRITICAL FIX: The VitePWA block must be inside the array
  plugins: [
    react(), 
    tailwindcss(), // <--- Needs a comma here
    
    VitePWA({
      workbox: {
        modifyURLPrefix: {
          '/': '/cheese-finder-beta/',
        },
      },
    }), // <--- Needs a closing parenthesis and comma here
  ], // <--- The plugins array closure
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 3000,
  },
});