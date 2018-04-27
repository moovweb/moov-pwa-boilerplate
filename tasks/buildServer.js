// This script copies index.js and stats.json to scripts/build when both are built
// This ensures that browserify picks up the changes from both he client and server build each time it runs

const fs = require('fs')
const path = require('path')
const build = path.join(__dirname, '..', 'build', 'server')
const dest = path.join(__dirname, '..', 'scripts', 'build')
const copyFileSync = require('fs-copy-file-sync')

setTimeout(() => {
  if (fs.existsSync(path.join(build, 'index.built')) && fs.existsSync(path.join(build, 'stats.built'))) {
    copyFileSync(path.join(build, 'index.js'), path.join(dest, 'index.js'))
    copyFileSync(path.join(build, 'stats.json'), path.join(dest, 'stats.json'))
  }
}, 500) 
