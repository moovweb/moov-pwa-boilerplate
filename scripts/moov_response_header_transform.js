/**
 * Remove headers that prevent varnish from caching the requested resource.
 */
function removeCacheHeadersForVarnish() {
  headers.removeAllHeaders("Age");
  headers.removeAllHeaders("Via");
  headers.removeAllHeaders("Expires");
}

module.exports = function() {
  let routingCookieSet = false;

  // Stop perfect proxied redirections from using ports so that we can test
  // with nginx running. Otherwise, Location header will contain the port and will
  // use the polymer-built version of your files.
  if (env.PERFECT_PROXY) {
    const location = headers.header("Location");

    // Rewrite Location headers on redirection status codes (300s) without port number.
    if (headers.statusCode > 299 && headers.statusCode < 309 && location) {
      headers.header("Location", location.replace(/:[0-9]+/, ""));
    }
  }

  if (env.cookie) {
    let currentCookies = env.cookie.split(";");
    for (var i = 0; i < currentCookies.length; i++) {
      if (currentCookies[i].match(/moov_experience/)) {
        routingCookieSet = true;
      }
    }
  }
  
  // Moovweb Platform Routing Cookie
  if (!routingCookieSet) {
    headers.addHeader("set-cookie", "moov_experience=pwa; domain=.www.1800flowers.com; path=/");
  }

  if (env.SERVE_APP_SHELL) {
    // cache index.html in varnish but not in the browser
    headers.header('X-Moov-Custom-Cache-Control', 'private, no-cache');
  }

  if (env.SERVE_APP_SHELL || env.path.startsWith('/service-worker.js') || env.path.startsWith('/app.manifest')) {
    headers.header("Cache-Control", "no-cache");
    removeCacheHeadersForVarnish();
  } else if (env.__static_origin_path__) {
    removeCacheHeadersForVarnish();
  } else if (env.path.startsWith("/api/")) {
    // remove the set-cookie headers that come from MPS response on MUR responses
    headers.removeAllHeaders("set-cookie");
    headers.statusCode = "200";
    headers.statusText = "OK";
    headers.header("Content-Type", "application/json;charset=utf-8");

    if (ctx.env.set_cookie_header_value_for_response) {
      for (let i = 0; i < ctx.env.set_cookie_header_value_for_response.length; i++) {
        headers.addHeader("set-cookie", ctx.env.set_cookie_header_value_for_response[i]);
      }
    }
  }

  // If we are responding with an error set the status code and text.
  if (env.murStatusCode) {
    headers.statusCode = env.murStatusCode;
    headers.statusText = env.murStatusText;
  }
};
