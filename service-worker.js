const CACHE_NAME = 'cheese-finder-v7';
const urlsToCache = [
  '/cheese-finder-beta/',
  '/cheese-finder-beta/index.html',
  '/cheese-finder-beta/styles/globals.css',  
  '/cheese-finder-beta/icon-48.png',
  '/cheese-finder-beta/icon-72.png',
  '/cheese-finder-beta/icon-96.png',
  '/cheese-finder-beta/icon-144.png',
  '/cheese-finder-beta/icon-192.png',
  '/cheese-finder-beta/icon-512.png',
  '/cheese-finder-beta/cheese-icon.svg'
];

self.addEventListener('install', (event) => {
  console.log('Installing service worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// CRITICAL: Fetch handler required for PWA
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
