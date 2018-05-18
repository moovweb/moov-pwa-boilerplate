console.error = console.warn = console.log;

const server = require('/build/index.js')();

module.exports = function() {
  const requestHeaders = {};

  for (let key of headers.headerKeys()) {
    requestHeaders[key] = headers.header(key);
  }

  fns.export('headers', JSON.stringify(requestHeaders)); 

  // Uncomment the following code to display content from the upstream site whenever
  // a route in src/routes.js isn't matched.  This is useful when you plan to launch with
  // part of the site implemented as a PWA and part of the site transformed or left unchanged
  // 
  // const { match } = server.router.findMatchingRoute(env.path, env.method);
  // 
  // if (match && !env.__static_origin_path__) {
  //   // display the PWA
  //   return moovSkipUpstream();
  // } else {
  //   // adapt or perfect proxy content from the upstream site
  //   return fns.export('IS_ADAPT', 'true')
  // }

  if (!env.__static_origin_path__) {
    return moovSkipUpstream();
  }
};
