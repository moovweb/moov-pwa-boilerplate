const Router = require('/router.js');

/* global sendResponse */
function shouldCacheApiRequest() {
  // return (
  //  env.path.startsWith('/data/...')
  // );
}

useMoovAsyncTransformer();

const router = new Router();

module.exports = function() {

  if (env.__static_origin_path__) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '290304000'); // static paths use hash-based cache-busting, so we far-future cache them in varnish and the browser
  } else if (shouldCacheApiRequest()) {
    fns.export('Cache', 'true');
    fns.export('Cache-Time', '300');
  }

  // If running locally and the url includes ?moov_debug=true, break here.
  if (env.path.indexOf("moov_debug=true") >= 0) {
    breakpoint("Parameter 'moov_debug=true' detected in the URL.");
  }

  router.run()
    .then(result => {
      sendResponse({ body: JSON.stringify(result), htmlparsed: true });
    })
    .catch(error => {
      sendResponse({ body: JSON.stringify({ error }), htmlparsed: true });
    });

};

router.get('/data/test', params => {
  return Promise.resolve({ success: true });
});

router.get('/data/menu', params => {
  return Promise.resolve({
    items: [{
      id: '1',
      text: 'Home',
      url: '/'
    }, {
      id: '5',
      text: 'Products',
      items: [
        { id: '6', text: 'Accessories', items: [
          { id: '7', text: 'Shop all Accessories', url: '/c/all-accessories' }
        ] }
      ]
    }]
  });
});

// router.get('/products/:id', params => {
//   params.id
// })