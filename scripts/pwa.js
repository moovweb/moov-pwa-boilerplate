/* global requestBody */
console.error = console.warn = console.log;

const server = require('/build/index.js')({ 
  globals:{ 
    https: http,
    fns, 
    get $() {
      return global.$;
    }
  },
  blob: env.blob
});   

module.exports = function() {
  let stats;

  try {
    stats = require('/build/stats.json');
  } catch (e) {
    stats = null; // will get here in development
  }

  server.serve({ body: requestBody, headers: env.headers, path: env.path, method: env.method }, stats);
}