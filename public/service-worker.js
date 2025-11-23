self.addEventListener('install', (event) => {
  console.log('Installing service worker');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker');
  self.clients.claim();
});
