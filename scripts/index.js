/* global sendResponse, useMoovAsyncTransformer */
console.error = console.warn = console.log

useMoovAsyncTransformer();

let server

module.exports = function() {
  if (env.__static_origin_path__) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '290304000'); // static paths use hash-based cache-busting, so we far-future cache them in varnish and the browser
    return sendResponse({ htmlparsed: false });
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

  try {
    server = require('/build/index.js')({
      globals:{ 
        https: http, 
        fns, 
        get $() {
          return global.$
        }
      },
      blob: env.blob
    }); 
  } catch (e) {
    // sometimes the browsersify build doesn't run after webpack is done.  In that case just keep the existing server
  }

  server.serve({ body: requestBody, headers: env.headers, path: env.path, method: env.method }, stats);
};
