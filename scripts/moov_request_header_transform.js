console.error = console.warn = console.log;

const requestHeaderTransform = require('moov-pwa/platform/requestheaderTransform').default;

module.exports = function() {
  requestHeaderTransform({
    router: require('../src/routes'),
    fallbackToAdapt: false
  })
};
