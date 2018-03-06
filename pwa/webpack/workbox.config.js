// Configures the creation of a service worker via workbox
// See documentation here: https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
module.exports = {
  include: [/\.html$/, /\.js$/, /\.css$/],

  // See configuration options here:
  // https://developers.google.com/web/tools/workbox/reference-docs/prerelease/workbox.strategies#methods
  runtimeCaching: [{
    urlPattern: new RegExp('/api/'),
    handler: 'cacheFirst',
    options: {
      cacheName: 'api',
      expiration: {
        maxEntries: 200,
        maxAgeSeconds: 60,
      }
    }
  }]

}