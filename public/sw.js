const CACHE_NAME = "esubalew-portfolio-v1"
const DATA_CACHE_NAME = "esubalew-data-v1"

const STATIC_ASSETS = ["/", "/projects", "/blog", "/events", "/offline", "/favicon.ico"]

const isApiRequest = (url) => {
  return url.includes("/api/")
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)), self.skipWaiting()]),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME && name !== DATA_CACHE_NAME)
            .map((name) => caches.delete(name)),
        )
      }),
      self.clients.claim(),
    ]),
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event

  if (isApiRequest(request.url)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clonedResponse = response.clone()
          caches.open(DATA_CACHE_NAME).then((cache) => {
            cache.put(request, clonedResponse)
          })
          return response
        })
        .catch(() => {
          return caches.match(request)
        }),
    )
    return
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const clonedResponse = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clonedResponse)
        })
        return response
      })
      .catch(() => {
        return caches.match(request).then((response) => {
          return response || caches.match("/offline")
        })
      }),
  )
})

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

