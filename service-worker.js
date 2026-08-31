const CACHE_NAME = "bonjour-empire-v1";

const FILES_TO_CACHE = [
    "/bonjour-empire/",
    "/bonjour-empire/index.html",
    "/bonjour-empire/manifest.json",
    "/bonjour-empire/logo.png"
];


/* INSTALLATION */

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(
                    FILES_TO_CACHE
                );

            })

    );

    self.skipWaiting();

});


/* ACTIVATION */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys
                        .filter(
                            key =>
                                key !== CACHE_NAME
                        )
                        .map(
                            key =>
                                caches.delete(key)
                        )

                );

            })

    );

    self.clients.claim();

});


/* RÉSEAU + CACHE */

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)
            .catch(() => {

                return caches.match(
                    event.request
                );

            })

    );

});
