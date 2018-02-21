const Path = require('path-parser');

module.exports = class Router {

  constructor() {
    this.routes = [];
    this.fallbackHandler = () => null;
  }

  get(path, callback) {
    this.routes.push({ path: new Path(path), method: 'get', callback });
  }

  post(path, callback) {
    this.routes.push({ path: new Path(path), method: 'post', callback });
  }

  patch(path, callback) {
    this.routes.push({ path: new Path(path), method: 'patch', callback });
  }

  put(path, callback) {
    this.routes.push({ path: new Path(path), method: 'put', callback }); 
  }

  delete(path, callback) {
    this.routes.push({ path: new Path(path), method: 'delete', callback });
  }

  fallback(callback) {
    this.fallbackHandler = callback;
  }

  run() {
    const { path } = env;
    let params;
    const match = this.routes.find(route => params = route.path.test(path));

    if (match) {
      return match.callback(params);
    } else {
      return this.fallbackHandler();
    }
  }

};

