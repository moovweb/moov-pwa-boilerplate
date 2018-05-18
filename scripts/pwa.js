/* global requestBody */
/* global sendResponse */

console.error = console.warn = console.log;

function waitForWebpack() {
  sendResponse({
    htmlparsed: true,
    body: `
      <!DOCTYPE html>
      <html>
        <body>
          Waiting for webpack build to finish...
          <script>setTimeout(function() { location.reload() }, 2000)</script>
        </body>
      </html>
    `
  });
}

module.exports = function() {
  let stats, init;
  
  try {
    init = require('/build/index.js');
  } catch(e) {
    // will get here if browserify hasn't consumed the webpack build yet
    return waitForWebpack();
  }

  const server = init({ 
    globals:{ 
      https: http,
      fns, 
      get $() {
        return global.$;
      }
    },
    blob: env.blob
  });   

  try {
    stats = require('/build/stats.json');
  } catch (e) {
    stats = null; // will get here in development
  }

  server.serve({ body: requestBody, headers: env.headers, path: env.path, method: env.method }, stats);
}