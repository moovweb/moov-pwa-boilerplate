self.__precacheManifest = [].concat(self.__precacheManifest || []);
const bootstrap = self.__precacheManifest.find(e => e.url.includes('serviceWorkerBootstrap'));

if (bootstrap) {
  importScripts(bootstrap.url);
}

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
