/* global requestBody */

import createServer from '../src/server.js'

export default function() {
  fns.export('pwa', 'true')

  let stats;
  
  const server = createServer({ 
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

  server.serve({ 
    sendResponse, 
    body: requestBody, 
    headers: env.headers, 
    path: env.path, 
    method: env.method, 
    hostname: env.host_no_port 
  }, stats);
}