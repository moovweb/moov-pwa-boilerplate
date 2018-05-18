/* global sendResponse, useMoovAsyncTransformer */
console.error = console.warn = console.log;

useMoovAsyncTransformer();

module.exports = function() {
  if (env.__static_origin_path__) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '2903040000'); // static paths use hash-based cache-busting, so we far-future cache them in varnish and the browser
    return sendResponse({ htmlparsed: false });
  }

  // If running locally and the url includes ?moov_debug=true, break here.
  if (env.path.indexOf("moov_debug=true") >= 0) {
    breakpoint("Parameter 'moov_debug=true' detected in the URL.");
  }

  if (env.IS_ADAPT === 'true' /* this is set by moov_request_header_transform.js */) {
    // return content from the upstream site unchanged (perfect proxy)
    return sendResponse({ htmlparsed: false });  
  } else {
    // display the PWA
    return require('/pwa.js')();
  } 
};
