/**
 * Remove headers that prevent varnish from caching the requested resource.
 */
function removeCacheHeadersForVarnish() {
  headers.removeAllHeaders("Age");
  headers.removeAllHeaders("Via");
  headers.removeAllHeaders("Expires");
}

function redirectToHttps() {
  headers.removeAllHeaders("Location");
  headers.addHeader("Location", "https://" + env.host + env.path);
  headers.statusCode = "301";
  headers.statusText = "Moved Permanently";
  headers.header("Cache-Control", "no-cache");
}

module.exports = function() {
  if (env.secure === "false") {
    return redirectToHttps();   
  }

  if (env.MOOV_PWA_CACHE_CONTROL) {
    removeCacheHeadersForVarnish();
    headers.header("Cache-Control", env.MOOV_PWA_CACHE_CONTROL);
  }
};
