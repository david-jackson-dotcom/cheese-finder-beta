import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'; // Import necessary for PWA

export default defineConfig({
  // Base path necessary for GitHub Pages subfolder deployment
  base: process.env.NODE_ENV === 'production' ? '/cheese-finder-beta/' : '/',
  
  plugins: [
    react(),
    tailwindcss(),
    
    // RESTORING AND CONFIGURING VITE PWA
    VitePWA({
      // ✅ FIX: Move exclude one level up (as a peer to workbox)
      exclude: ['globals.css', 'index.html'],
      
      workbox: {
        // Correct path modification for SW assets
        modifyURLPrefix: {
          '/': '/cheese-finder-beta/', 
        },
        // We removed the exclude property from here to fix the build error.
      },
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 3000,
  },
});