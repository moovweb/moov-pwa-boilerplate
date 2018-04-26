/**
 * Remove headers that prevent varnish from caching the requested resource.
 */
function removeCacheHeadersForVarnish() {
  headers.removeAllHeaders("Age");
  headers.removeAllHeaders("Via");
  headers.removeAllHeaders("Expires");
}

module.exports = function() {

};
