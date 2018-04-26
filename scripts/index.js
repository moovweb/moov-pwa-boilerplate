console.error = console.warn = console.log

require('/custom_functions.js')
const server = require('/build/index.js');

/* global sendResponse, useMoovAsyncTransformer */
function shouldCacheApiRequest() {
  return (
    env.path.startsWith('/api/')
  );
}

useMoovAsyncTransformer();

module.exports = function() {
  if (env.__static_origin_path__) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '290304000'); // static paths use hash-based cache-busting, so we far-future cache them in varnish and the browser
  } else if (shouldCacheApiRequest()) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '300');
  }

  // If running locally and the url includes ?moov_debug=true, break here.
  if (env.path.indexOf("moov_debug=true") >= 0) {
    breakpoint("Parameter 'moov_debug=true' detected in the URL.");
  }

  let stats

  try {
    stats = require('/build/stats.json')
  } catch (e) {
    stats = null // will get here in development
  }

  server.serve(stats);
};
