const index = require('/build/index.html.js');
const Router = require('/router.js');
const router = new Router();

router.fallback(() => Promise.resolve(index));

router.get('/data/nav', () => {
  let json = require("/api/nav.json");
  return Promise.resolve(json); 
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

router.get('/data/subcategories/:id', ({ id }) => {
  let data;

  if (id === 'ash_trays') {
    data = require("/api/ashtray-subcategory.json");
  }

  return Promise.resolve(data);
});

router.get('/data/products/:id', ({ id }) => {
  let data;
  data = require("/api/ashtray-pdp.json");
  return Promise.resolve(data);
});

module.exports = router;
