const Router = require('/router.js');
// const render = require('/build/SSR.js').default;

/* global sendResponse, useMoovAsyncTransformer */
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
      const body = typeof result === 'string' ? result : JSON.stringify(result)
      sendResponse({ body, htmlparsed: true });
    })
    .catch(error => {
      sendResponse({ body: JSON.stringify({ error }), htmlparsed: true });
    });

};

// router.fallback(() => {
//   return render({ 
//     menu: {
//       items: [{
//         id: '1',
//         text: 'Home',
//         url: '/'
//       }, {
//         id: '5',
//         text: 'Products',
//         items: [
//           { id: '6', text: 'Accessories', items: [
//             { id: '7', text: 'Shop all Accessories', url: '/c/all-accessories' }
//           ] }
//         ]
//       }]
//     }
//   })
// });

router.get('/data/nav', () => {
  let json = require("/api/nav.json");
  return Promise.resolve(json); 
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

router.get('/data/categories/:id', ({ id }) => {
  let data;

  if (id === 'accessories') {
    data = require("/api/accessories.json");
  } else if (id === 'interior_accessories') {
    data = require("/api/interior-accessories.json");
  }

  return Promise.resolve(Object.assign({ id }, data))
})

// router.get('/products/:id', params => {
//   params.id
// })