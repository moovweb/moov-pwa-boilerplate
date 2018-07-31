/* global requestBody */

console.error = console.warn = console.log;

module.exports = function() {
  fns.export('pwa', 'true')

  let stats, init = require('/build/index.js');
  
  const server = init({ 
    globals:{ 
      https,
      http,
      fns, 
      headers,
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

  server.serve({ 
    sendResponse, 
    body: requestBody, 
    headers: env.headers, 
    path: env.path, 
    method: env.method, 
    hostname: env.host_no_port 
  }, stats);
}