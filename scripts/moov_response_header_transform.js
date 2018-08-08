const { transformResponseHeaders } = require('moov-pwa/router')

module.exports = function() {
  if (!env.__static_origin_path__) {
    transformResponseHeaders({ env, headers })
  }
}