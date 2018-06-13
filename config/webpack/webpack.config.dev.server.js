const { dev } = require('moov-pwa/webpack/server')
const path = require('path')

module.exports = dev(path.join(__dirname, '..', '..'))