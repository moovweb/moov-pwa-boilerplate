var render = require('../dist/assets/SSR').default;

const menu = {
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
};

console.log(render({ menu }));