const Router = require('/Router.js');
const index = require('/build/index.html.js')
const render = require('/build/SSR.js')

console.error = console.warn = console.log

module.exports = new Router()
  .fallback(() => {
    const html = render({});
    console.log('html', html);
    return Promise.resolve(index.replace('{{ssr}}', html));
  })
  .get('/data/nav', () => {
    return Promise.resolve(require("/api/nav.json")); 
  })
  .get('/data/categories/:id', ({ id }) => {
    let data;

    if (id === 'accessories') {
      data = require("/api/accessories.json");
    } else {
      data = require("/api/interior-accessories.json");
    }

    return Promise.resolve(Object.assign({ id }, data))
  })
  .get('/data/subcategories/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-subcategory.json"));
  })
  .get('/data/products/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-pdp.json"));
  });
