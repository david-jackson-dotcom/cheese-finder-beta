//
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // Base path necessary for GitHub Pages subfolder deployment
  base: process.env.NODE_ENV === 'production' ? '/cheese-finder-beta/' : '/',
  
  plugins: [
    react(),
    tailwindcss(),
    
    // RESTORING AND CONFIGURING VITE PWA
    VitePWA({
      workbox: {
        // Correct path modification for SW assets
        modifyURLPrefix: {
          '/': '/cheese-finder-beta/', 
        },
        // FIX: Exclude files that are either bundled (globals.css) 
        // or cause path conflicts (index.html) to prevent SW crash.
        exclude: ['globals.css', 'index.html'],
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