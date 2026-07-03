const CACHE_NAME = "hosel-v1";

const filesToCache = [
    "./",
    "./index.html",
    "./app.js",
    "./manifest.json"
];


// Install service worker
self.addEventListener("install", (event) => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );

});


// Activate and remove old cache versions
self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(cache => {

                    if(cache !== CACHE_NAME){

                        return caches.delete(cache);

                    }

                })

            );

        })

    );

    self.clients.claim();

});


// Fetch cached files first then network
self.addEventListener("fetch",(event)=>{

    event.respondWith(

        caches.match(event.request)

        .then(response=>{

            return response || fetch(event.request)

            .then(networkResponse=>{

                return caches.open(CACHE_NAME)

                .then(cache=>{

                    cache.put(
                        event.request,
                        networkResponse.clone()
                    );

                    return networkResponse;

                });

            });

        })

        .catch(()=>{

            return caches.match("./index.html");

        })

    );

});
