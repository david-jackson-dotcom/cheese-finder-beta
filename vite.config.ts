import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'; // Single, correct import

export default defineConfig({
  // 1. BASE PATH DEFINITION
  // This logic is good for GitHub Pages vs. local development.
  base: process.env.NODE_ENV === 'production' ? '/cheese-finder-beta/' : '/',
  
  // 2. PLUGINS ARRAY (All plugins must be here)
  plugins: [
    react(),
    tailwindcss(),
    
    // 3. CORRECTLY INTEGRATE VITEPWA PLUGIN
    VitePWA({
      // Ensure any general PWA options (manifest, icons, etc.) are here
      
      workbox: {
        // CRITICAL FIX: This corrects the Service Worker cache manifest paths.
        // It tells Workbox to prepend the repository path to all root-level assets.
        modifyURLPrefix: {
          '/': '/cheese-finder-beta/', 
        }
      }
    }),
  ],
  
  // 4. RESOLVE AND SERVER CONFIGURATION
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 3000,
  },
});
