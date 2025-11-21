import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { trackPWAPromptShown, trackPWAInstallAccepted, trackPWAInstallDeclined, trackPWAInstalled, trackPWALaunched, trackPWAStandalone } from './lib/analytics';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Track how the app was launched
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

// PWA Install Prompt Tracking
let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Track that install prompt was shown
  trackPWAPromptShown();
  
  // Optionally show your own install button here
  console.log('PWA install prompt available');
});

// Track when user installs the app
window.addEventListener('appinstalled', () => {
  trackPWAInstalled();
  console.log('PWA was installed');
  deferredPrompt = null;
});

// Listen for user choice on install prompt
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

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
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