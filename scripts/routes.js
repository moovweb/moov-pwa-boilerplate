const Router = require('/Router.js');
const renderAppShell = require('/renderAppShell.js')

module.exports = new Router()
  .fallback(() => {
    return renderAppShell({ state: {}, title: 'Pepboys' });
  })
  .get('/api/nav', () => {
    return Promise.resolve(require("/api/nav.json")); 
  })
  .use('', require('/api/categories.js'))
  .get('/api/subcategories/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-subcategory.json"));
  })
  .get('/api/products/:id', ({ id }) => {
    return Promise.resolve(require("/api/ashtray-pdp.json"));
  });
