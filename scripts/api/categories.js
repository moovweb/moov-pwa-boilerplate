const Router = require('/Router.js');
const renderAppShell = require('/renderAppShell.js');

function fetchCategory(id) {
  let data;

  if (id === 'accessories') {
    data = require("/api/accessories.json");
  } else {
    data = require("/api/interior-accessories.json");
  }

  return Promise.resolve(Object.assign({ id }, data));
}

module.exports = new Router()
  .get('/c/:id', ({ id }) => {
    return fetchCategory(id)
      .then(category => renderAppShell({ 
        title: category.name,
        state: { category }
      }));
  })
  .get('/api/categories/:id', ({ id }) => fetchCategory(id));
