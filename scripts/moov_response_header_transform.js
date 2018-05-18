/**
 * Remove headers that prevent varnish from caching the requested resource.
 */
function removeCacheHeadersForVarnish() {
  headers.removeAllHeaders("Age");
  headers.removeAllHeaders("Via");
  headers.removeAllHeaders("Expires");
}

module.exports = function() {
  if (env.MOOV_PWA_CACHE_CONTROL) {
    removeCacheHeadersForVarnish();
    headers.header("Cache-Control", env.MOOV_PWA_CACHE_CONTROL);
  }
};
