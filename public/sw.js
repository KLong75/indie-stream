const CACHE_NAME = 'indie-stream-cache-v1';
const ASSETS_TO_CACHE = [
  // "/",
  // "/manifest.webmanifest",
  "/icons/favicon.ico",
  "/icons/web-app-manifest-192x192.png",
  "/icons/web-app-manifest-512x512.png",
  "/images/default-cover-img.png",
  "/sw.js",
]

// Install event: cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Fetch event: serve from cache, fall back to network
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() =>
          // Optionally, return a fallback page for navigation requests
          event.request.mode === "navigate"
            ? caches.match("/")
            : undefined
        )
      );
    })
  );
});

self.addEventListener('push', function (event) {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      // Fallback for plain text payloads (like DevTools simulation)
      data = { title: "Notification", body: event.data.text() };
    }
    const options = {
      body: data.body,
      icon: data.icon || '/icons/96x96.png',
      badge: '/icons/notification-badge.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
        url: data.data?.url || "https://indie-stream.vercel.app/",
      },
      actions: [
        {
          action: 'explore',
          title: 'Visit Indie Stream for details',
          icon: '/icons/96x96.png',
        },
      ],
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
    console.log('Push notification received:', data);
  }
});
 
// self.addEventListener('notificationclick', function (event) {
//   console.log('Notification click received.')
//   event.notification.close()
//   event.waitUntil(clients.openWindow('https://localhost:3000'));
// })

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  console.log("Notification click received.");
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

// Minimal fetch handler (required for service worker to control the site)
// self.addEventListener("fetch", () => {
  // You could optionally implement caching logic here
// });