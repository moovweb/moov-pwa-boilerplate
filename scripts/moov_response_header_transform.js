function removeCacheHeadersForVarnish() {
  headers.removeAllHeaders("Age");
  headers.removeAllHeaders("Via");
  headers.removeAllHeaders("Expires");
}

function cache(header) {
  removeCacheHeadersForVarnish();
  headers.header("Cache-Control", header);
  headers.header("X-Moov-Cache", "true");
}

function redirectTo(url, amp) {
  if (amp) {
    headers.addHeader("amp-redirect-to", "https://" + env.host + url);
    headers.addHeader("access-control-expose-headers", "AMP-Access-Control-Allow-Source-Origin,AMP-Redirect-To");
    headers.addHeader("amp-access-control-allow-source-origin", "https://" + env.host)
  } else {
    headers.removeAllHeaders("Location");
    headers.addHeader("Location", "https://" + env.host + url);
    headers.statusCode = "301";
    headers.statusText = "Moved Permanently";
  }

  headers.header("Cache-Control", "no-cache");
}

function redirectToHttps() {
  redirectTo(env.path)
}

module.exports = function() {
  // Always redirect on non-secure requests.
  if (env.secure !== 'true') {
    return redirectToHttps();   
  }

  // This allows us to forward set-cookie headers received in MUR requests back to the client
  // This is request in order to transfer the cart over to checkout
  if (env.SET_COOKIE) {
    if (env.pwa !== 'true' || env.path.split(/\?/)[0].endsWith('cart.json')) {
      headers.addHeader("set-cookie", env.SET_COOKIE);
    }
  }

  if (env.MOOV_PWA_REDIRECT) {
    // regular redirects
    redirectTo(env.MOOV_PWA_REDIRECT);
  } else if (env.MOOV_PWA_AMP_REDIRECT) {
    // amp redirects
    redirectTo(env.MOOV_PWA_AMP_REDIRECT, true);
  } else if (env.path.startsWith('/service-worker.js')) {
    // service-worker.js
    cache('no-cache, s-maxage=290304000');
  } else if (env.MOOV_PWA_CACHE_CONTROL) {
    // caching
    cache(env.MOOV_PWA_CACHE_CONTROL);
  }
}