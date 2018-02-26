const Router = require('/Router.js');

let render;

module.exports = new Router()
  .fallback(() => {
    console.warn = console.log
    console.warn('test')

    const index = require('/build/index.html.js')
    render = render || require('/build/SSR.js')
    const { html, css } = render({}); 

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
