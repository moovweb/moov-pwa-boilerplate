const { prod } = require('moov-pwa/webpack/server')
const path = require('path')

module.exports = prod(path.join(__dirname, '..', '..'))