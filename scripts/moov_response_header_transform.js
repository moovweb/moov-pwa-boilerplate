module.exports = function() {
  if (!env.__static_origin_path__) {
    require('/build/index.js')().transformResponseHeaders({ env, headers })
  }
}