const Router = require('/Router.js');
const webpack = require('webpack');

module.exports = new Router()
  .fallback(() => {
    return new Promise((resolve, reject) => {
      webpack([serverConfig]).run((err, stats) => {
        console.error = console.warn = console.log;
        const index = require('/build/index.html.js');
        const render = require('/build/index.js'); 
        const { html, css } = render({ url: env.path, data: {} }); 
    
        resolve(
          index
            .replace('{{html}}', html)
            .replace('{{css}}', `<style>${css}</style>`)
        ); 
      })
    });
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
