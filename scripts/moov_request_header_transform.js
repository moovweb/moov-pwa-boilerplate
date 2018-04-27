console.error = console.warn = console.log

module.exports = function() {
  if (!env.__static_origin_path__) {
    // skip upstream because we serve the app shell from build/index.html.js
    moovSkipUpstream();
  }

  // save client IP
  fns.export('xff', headers.header('x-forwarded-for'));
};