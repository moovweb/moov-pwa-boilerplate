const Route = require('route-parser');

/**
 * Provides routing for MUR-based applications and PWAs.  This class is innspired by express and uses https://github.com/rcs/route-parser, 
 * which supports sophisticated pattern matching including optional paths, params, and splatting.
 * 
 * Example:
 * 
 *  const router = new Router();
 * 
 *  router.get('/products/:id', ({ id }) => {
 *    // fetch product from upstream API (you'll need to write this function)
 *    return fetchProduct(id).then(result => {
 *      return result.product; // this will be the result of router.run()
 *    });
 *  });
 * 
 *  // assuming env.path = /products/1 and env.method = 'GET'
 *  router.run(); // => the details for product 1
 * 
 * Routes can be divided into multiple files to increase maintainability using the "use()" method.  For example:
 * 
 *  // /scripts/api/router.js
 * 
 *  const appShell = require('/build/index.html.js);
 *
 *  module.exports = new Router()
 *    .fallback(() => appShell); // render the PWA's app shell for all unmatched routes
 *    .use('/products', require('/api/products.js'));
 * 
 * 
 *  // /scripts/api/products.js
 * 
 *  module.exports = new Router()
 *    .get('/:id', ({ id }) => new Promise((resolve, reject) => {
 *      // fetch product from upstream API...
 *     }));
 * 
 * 
 *  // /scripts/index.js
 * 
 *  const router = require('/api/router');
 *  
 *  module.exports = function() {
 *    // ...
 *    router.run().then((result) => {
 *      const body = typeof result === 'string' ? result : JSON.stringify(result)
 *      sendResponse({ body, htmlparsed: true });
 *    });
 *  };
 */
module.exports = class Router {

  constructor() {
    this.routes = [];
    this.fallbackHandler = () => null;
  }

  /**
   * Registers a GET route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  get(path, callback) {
    this.routes.push({ path: new Route(path), method: 'GET', callback });
    return this;
  }

  /**
   * Registers a POST route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  post(path, callback) {
    this.routes.push({ path: new Route(path), method: 'POST', callback });
    return this;
  }

  /**
   * Registers a PATCH route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  patch(path, callback) {
    this.routes.push({ path: new Route(path), method: 'PATCH', callback });
    return this;
  }

  /**
   * Registers a PUT route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  put(path, callback) {
    this.routes.push({ path: new Route(path), method: 'PUT', callback }); 
    return this;
  }

  /**
   * Registers a DELETE route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  delete(path, callback) {
    this.routes.push({ path: new Route(path), method: 'DELETE', callback });
    return this;
  }

  /**
   * Registers an OPTIONS route
   * @param {String} path A path pattern
   * @param {Function} callback A function that is passed the params as an object and returns a promise that resolves to the content to return
   * @return {Router} this
   */
  options(path, callback) {
    this.routes.push({ path: new Route(path), method: 'OPTIONS', callback });
    return this;
  }

  /**
   * Designates the handler for unmatched routes
   * @param {Function} callback A function that returns a promise that resolves to the content to return
   * @return {Router} this
   */
  fallback(callback) {
    this.fallbackHandler = callback;
    return this;
  }

  /**
   * Registers a set of nested routes.
   * 
   * Example:
   * 
   *  Router root = new Router()
   * 
   *  Router products = new Router()
   *  products.get('/:id', ({ id }) => {
   *    return Promise.resolve(id)
   *  })
   * 
   *  root.use('/products', products);
   * 
   *  // url: /products/1
   *  root.run().then(result => console.log(result)) // => 1
   * 
   * @param {String} path The parent path
   * @param {Router} router A router to handle the nested routes
   * @return {Router} this
   */
  use(path, router) {
    for (let route of router.routes) {
      this.routes.push({ path: new Route(path + route.path.spec), callback: route.callback, method: route.method })
    }
    return this;
  }

  /**
   * Runs the current url (from env) and returns the content from the matching route's handler.
   * @return {Object}
   */
  run() {
    let { path, method } = env, 
        params;

    method = method.toUpperCase();

    const match = this.routes
      .filter(route => method === route.method)
      .find(route => {
        return params = route.path.match(path)
      });

    if (match) {
      return match.callback(params);
    } else {
      return this.fallbackHandler();
    }
  }

};

