/* Service worker : permet d'utiliser l'application sans connexion (tablette en atelier, Wi-Fi instable).
   Changez VERSION à chaque mise à jour du site pour forcer le rafraîchissement du cache. */
const VERSION = "flofab-eval-v21";
const APP = [
  "./", "./index.html", "./styles.css", "./app.js", "./config.js", "./data/questionnaires.js",
  "./manifest.webmanifest", "./icons/logo-flofab-blanc.svg", "./icons/logo-flofab.svg", "./icons/logo-pdf.js", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
];
const CDN = [
  "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",
  "https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(async c => {
    await c.addAll(APP);
    await Promise.all(CDN.map(u => c.add(new Request(u, { mode: "cors" })).catch(() => {})));
  }).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return; // l'envoi des rapports (POST) passe toujours par le réseau
  const url = new URL(req.url);
  if (url.hostname === "script.google.com" || url.hostname.endsWith("googleusercontent.com")) return;

  // Bibliothèques et polices externes : cache d'abord
  if (url.origin !== self.location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit)));
    return;
  }
  // Fichiers de l'application : réseau d'abord (pour recevoir les mises à jour), cache si hors ligne
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || caches.match("./index.html"))));
});
