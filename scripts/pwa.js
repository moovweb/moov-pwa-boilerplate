/* global requestBody */

import createServer from '../src/server.js'

export default function() {
  fns.export('pwa', 'true')

  const server = createServer({ 
    globals:{ 
      https,
      http,
      fns, 
      get $() {
        return global.$;
      }
    },
    blob: env.blob
  });   

  server.serve({ 
    sendResponse, 
    body: requestBody, 
    headers: env.headers, 
    path: env.path, 
    method: env.method, 
    hostname: env.host_no_port,
    protocol: env.secure ? 'https:' : 'http:'
  });
}