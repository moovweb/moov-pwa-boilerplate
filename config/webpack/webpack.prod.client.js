const { prod } = require('moov-pwa/webpack/client')
const path = require('path')

module.exports = prod(path.join(__dirname, '..', '..'), {
  workboxConfig: require('./workbox.config'),
  entries: {
    header: './proxy/hydrateHeader'
  }
})