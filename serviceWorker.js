const staticDevCoffee = "Shan-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/hob1.png",
  "/hob2.jpg",
  "/hob3.png",
  "/med1.png",
  "/med2.png",
  "/med3.png",
  "/pfp.jpg",
  "/icon.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })