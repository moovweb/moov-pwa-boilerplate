const Router = require('/Router.js');

module.exports = new Router()
  .fallback(() => {
    console.error = console.warn = console.log
    const index = require('/build/index.html.js');
    const render = require('/build/SSR.js');
    const { html, css } = render({ url: env.path, data: {} }); 

    return Promise.resolve(
      index
        .replace('{{html}}', html)
        .replace('{{css}}', `<style>${css}</style>`)
    ); 
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
