console.error = console.warn = console.log;
global.setTimeout = global.clearTimeout = Function.prototype

const requestHeaderTransform = require('moov-pwa/platform/requestHeaderTransform').default;

module.exports = function() {
  requestHeaderTransform({
    router: require('../src/routes').default,
    fallbackToAdapt: true
  })
};
