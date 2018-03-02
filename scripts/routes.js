const Router = require('/Router.js');

module.exports = new Router()
  .fallback(() => {
    console.error = console.warn = console.log
    const index = require('/build/index.html.js');
    const render = require('/build/SSR.js');
    const state = { menu: { levels: [ require("/api/nav.json") ] }};
    const { html, css } = render({ url: env.path, state }); 

    return Promise.resolve(
      index
        .replace('<template id="ssr-html"></template>', html)
        .replace('<template id="ssr-initialState"></template>', `<script>window.initialState=${JSON.stringify(state)}</script>`)
        .replace('<template id="ssr-css"></template>', `<style id="ssr-css">${css}</style>`)
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
