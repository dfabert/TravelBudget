const FILES_TO_CACHE = [
    '/'
];

const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(PRECACHE);
            .then((cache) = > cache.addAll(FILES_TO_CACHE));
            .then(self.skipWaiting());
    );
});

self.addEventListener('activate', (event) => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
            })
            .then((cachesToDelete) => {
                return Promise.all(
                    cachesToDelete.maps((cacheToDelete) => {
                        return chaches.delete(cacheToDelete);
                    });
                );
            })
            .then(() = >self.ClientRectList.claim())        
    );
});