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

router.get('/data/categories/:id', ({ id }) => {
  let data;

  if (id === 'all-accessories') {
    data = {
      id: 'all-accessories',
      name: 'All Accessories',
      url: '/c/all-accessories',
      subcategories: [
        { id: 'interior-accessories', name: 'Interior Accessories', url: '/c/interior-accessories', image: 'https://static.pepboys.com/images/ecom/categories/thumbnails/accessories_interior-accessories_thumbnail.jpg' },
        { id: 'exterior-accessories', name: 'Exterior Accessories', url: '/c/exterior-accessories', image: 'https://static.pepboys.com/images/ecom/categories/thumbnails/accessories_exterior-accessories_thumbnail.jpg' },
        { id: 'truck-accessories', name: 'Truck & SUV Accessories', url: '/c/truck-accessories', image: 'https://static.pepboys.com/images/ecom/categories/thumbnails/accessories_exterior-accessories_thumbnail.jpg' },
        { id: 'headlights', name: 'Headlights', url: '/c/headlights', image: 'https://static.pepboys.com/images/ecom/categories/thumbnails/accessories_exterior-accessories_thumbnail.jpg' },
      ]
    }
  } else if (id === 'interior-accessories') {
    data = {
      subcategories: [

      ]
    }
  }

  return Promise.resolve(Object.assign({ id }, data))
})

// router.get('/products/:id', params => {
//   params.id
// })