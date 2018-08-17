const { dev } = require('moov-pwa/webpack/client')
const path = require('path')

module.exports = dev(path.join(__dirname, '..', '..'), {
  workboxConfig: require('./workbox.config'),
  entries: {
    header: './adapt/hydrateHeader'
  }
})