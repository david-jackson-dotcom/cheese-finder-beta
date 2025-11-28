import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// 🔑 1. IMPORT VITEPWA HERE
import { VitePWA } from 'vite-plugin-pwa'; 

export default defineConfig({
  // 🔑 2. CORRECT BASE PATH LOGIC
  // This logic is good, but ensure it aligns with the GitHub Actions environment variables
  base: process.env.NODE_ENV === 'production' ? '/cheese-finder-beta/' : '/',
  
  // 🔑 3. PLUGINS ARRAY MUST CONTAIN ALL PLUGINS
  plugins: [
    react(), 
    tailwindcss(),
    
    // 🔑 4. CORRECTLY INTEGRATE VITEPWA PLUGIN HERE
    VitePWA({
      // Ensure your PWA options are configured here
      // e.g., registerType: 'autoUpdate', includeAssets: [...], etc.
      
      workbox: {
        // 🔑 5. THE CRITICAL PATH FIX FOR GITHUB PAGES SUBFOLDER
        // This ensures the generated service-worker.js caches assets with the correct prefix.
        modifyURLPrefix: {
          // It tells Workbox: wherever you see a path starting with the domain root (/),
          // prepend the repository path (/cheese-finder-beta/) instead.
          '/': '/cheese-finder-beta/', 
        }
      }
    }) // <--- Must be inside the plugins array
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
