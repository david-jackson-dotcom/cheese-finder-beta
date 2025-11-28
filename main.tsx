//
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
try {
  // Track how the app was launched
  window.addEventListener('DOMContentLoaded', () => {
    try {
      // Check if app is running as installed PWA
      const displayMode = window.matchMedia('(display-mode: standalone)').matches ? 'standalone' :
                          window.matchMedia('(display-mode: fullscreen)').matches ? 'fullscreen' :
                          window.matchMedia('(display-mode: minimal-ui)').matches ? 'minimal-ui' : 'browser';
      
      trackPWALaunched(displayMode);
      
      // Track standalone launches (from home screen)
      if (displayMode === 'standalone' || (window.navigator as any).standalone === true) {
        trackPWAStandalone();
      }
    } catch (error) {
      console.log('PWA tracking error:', error);
    }
  });

  // PWA Install Prompt Tracking
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', (e) => {
    try {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Track that install prompt was shown
      trackPWAPromptShown();
      
      // Optionally show your own install button here
      console.log('PWA install prompt available');
    } catch (error) {
      console.log('PWA prompt tracking error:', error);
    }
  });

  // Track when user installs the app
  window.addEventListener('appinstalled', () => {
    try {
      trackPWAInstalled();
      console.log('PWA was installed');
      deferredPrompt = null;
    } catch (error) {
      console.log('PWA install tracking error:', error);
    }
  });

  // Listen for user choice on install prompt
  if (deferredPrompt) {
    deferredPrompt.userChoice.then((choiceResult: any) => {
      try {
        if (choiceResult.outcome === 'accepted') {
          trackPWAInstallAccepted();
          console.log('User accepted the install prompt');
        } else {
          trackPWAInstallDeclined();
          console.log('User dismissed the install prompt');
        }
      } catch (error) {
        console.log('PWA choice tracking error:', error);
      }
    });
  }
  
  // NOTE: Use the swPath variable if defined, or define it here for robustness:
// const swPath = `${import.meta.env.BASE_URL}service-worker.js`;

try { // 🔑 Required keyword to match the final catch block
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                // WARNING: Hardcoding the path is risky. Use a variable if possible.
                .register(`/cheese-finder-beta/service-worker.js`) 
                .then((registration) => {
                    console.log('Service Worker registered successfully:', registration.scope);
                    
                    // Check for updates periodically
                    setInterval(() => {
                        // 🔑 FIX: Chain the .catch() directly to the promise
                        registration.update()
                            .catch(err => {
                                // This silences the expected InvalidStateError during worker handover.
                                if (err.name !== 'InvalidStateError') {
                                    console.error("Service Worker update failed non-critically:", err);
                                }
                            }); // 🔑 FIX: Close the .catch() function
                    }, 60000); // Check every minute. Correctly ends setInterval call.
                    
                    // Handle updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available, prompt user to refresh
                                    if (confirm('New version available! Reload to update?')) {
                                        // Send SKIP_WAITING to force immediate activation
                                        newWorker.postMessage({ type: 'SKIP_WAITING' }); 
                                        window.location.reload();
                                    }
                                }
                            });
                        }
                    });
                })
                .catch((error) => {
                    console.log('Service Worker registration failed (expected on localhost):', error);
                });
        });
    }
} catch (error) { // 🔑 Matches the initial 'try'
    console.log('Analytics/PWA initialization error (non-critical):', error);
}
