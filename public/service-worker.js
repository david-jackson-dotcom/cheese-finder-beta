const CACHE_NAME = 'cheese-finder-v0';
const urlsToCache = [
  '/cheese-finder-beta/',
  '/cheese-finder-beta/index.html',
  '/cheese-finder-beta/globals.css',  
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
