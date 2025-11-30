console.log('🧀 MAIN.TSX IS LOADING - VERSION 2.0');

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { 
  trackPWALaunched, 
  trackPWAStandalone, 
  trackPWAPromptShown, 
  trackPWAInstalled,
  trackPWAInstallAccepted,
  trackPWAInstallDeclined 
} from './lib/analytics';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Wrap all analytics/PWA code in try-catch to prevent blocking
// main.tsx (Replace the code from line 20 downwards)

// All PWA and Analytics code starts here
(function() {
  try {
    // 1. Track how the app was launched
    window.addEventListener('DOMContentLoaded', () => {
      // Check if app is running as installed PWA
      const displayMode = window.matchMedia('(display-mode: standalone)').matches ? 'standalone' :
                            window.matchMedia('(display-mode: fullscreen)').matches ? 'fullscreen' :
                            window.matchMedia('(display-mode: minimal-ui)').matches ? 'minimal-ui' : 'browser';
      
      trackPWALaunched(displayMode);
      
      // Track standalone launches (from home screen)
      if (displayMode === 'standalone' || (window.navigator as any).standalone === true) {
        trackPWAStandalone();
      }
    });
  
    // 2. PWA Install Prompt Tracking
    let deferredPrompt: any;
  
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      trackPWAPromptShown();
      console.log('PWA install prompt available');
    });
  
    // 3. Track when user installs the app
    window.addEventListener('appinstalled', () => {
      trackPWAInstalled();
      console.log('PWA was installed');
      deferredPrompt = null;
    });
  
    // 4. Listen for user choice on install prompt
    if (deferredPrompt) {
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          trackPWAInstallAccepted();
          console.log('User accepted the install prompt');
        } else {
          trackPWAInstallDeclined();
          console.log('User dismissed the install prompt');
        }
      });
    }
  
    // 5. Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(`/service-worker.js`)
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);  
            
            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60000); // Check every minute
            
            // Handle updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available, prompt user to refresh
                    if (confirm('New version available! Reload to update?')) {
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      window.location.reload();
                    }
                  }
                });
              }
            });
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }

  } catch (error) {
    console.log('Overall PWA/Analytics initialization error:', error);
  }
})();