// Configures the creation of a service worker via workbox
// See documentation here: https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin

const runtimeCacheOptions = {
  handler: 'cacheFirst',
  options: {
    cacheName: 'api' + new Date().getTime(),
    expiration: {
      maxEntries: 200,
      maxAgeSeconds: 60 * 60, // 1 hour
    }
  }
}

module.exports = {
  globPatterns: [
    '**/*.js',
    '**/*.html',
    '**/*.otf',
  ],

  // See configuration options here:
  // https://developers.google.com/web/tools/workbox/reference-docs/prerelease/workbox.strategies#methods
  runtimeCaching: [
    Object.assign({ urlPattern: /\/(c|s|p)\// }, runtimeCacheOptions),
    Object.assign({ urlPattern: /^(\.json)?$/ }, runtimeCacheOptions) // homepage
  ]   
}