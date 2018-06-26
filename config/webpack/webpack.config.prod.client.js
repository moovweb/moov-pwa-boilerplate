const { prod } = require('moov-pwa/webpack/client')
const path = require('path')

module.exports = prod(path.join(__dirname, '..', '..'), path.join(__dirname, '..', 'sw.js'))