const Router = require('/Router.js');
const renderAppShell = require('/renderAppShell.js')

module.exports = new Router()
  .fallback(() => {
    return renderAppShell({ state: {}, title: 'Pepboys' });
  })
  .get('/data/nav', () => {
    return Promise.resolve(require("/api/nav.json")); 
  })
  .use('', require('/api/categories.js'))
  .get('/data/subcategories/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-subcategory.json"));
  })
  .get('/data/products/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-pdp.json"));
  });
