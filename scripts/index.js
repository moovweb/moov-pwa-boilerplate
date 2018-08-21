console.error = console.warn = console.log;

const index = require('moov-pwa/platform').default

module.exports = function() {
  console.log('response rewriter')

  index({
    theme: require('../src/theme').default,
    model: require('../src/AppModel').default,
    App: require('../src/App').default,
    router: require('../src/routes').default,
    blob: env.blob || require('../src/blob.dev')
  })
}
