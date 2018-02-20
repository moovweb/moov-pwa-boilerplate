// List of paths that require perfect proxy.
// MUST DO: Add to nginx.conf to work with normal dev workflow.
const perfectProxyPaths = {

};

function proxyMDot() {
  let currentPath = env.path.split('?')[0];

  if (perfectProxyPaths[currentPath]) {
    return true;
  } else {
    return false;
  }
}

module.exports = function() {
  if (proxyMDot()) {
    fns.export('PERFECT_PROXY', 'true');
  } else if (env.path.startsWith('/data/')) {
    moovSkipUpstream();
  } else {
    // can't skip upstream here because the static asset server is the upstream
    if (!env.__static_origin_path__) {
      // skip upstream because we serve the app shell from build/index.html.js
      moovSkipUpstream();

      fns.export('SERVE_APP_SHELL', 'true');
    }
  }

  // save client IP
  fns.export('xff', headers.header('x-forwarded-for'));
};