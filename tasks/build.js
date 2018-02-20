const { spawn } = require('child_process');
const { join } = require('path');
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require('fs');

const root = join(__dirname, '..', 'build', 'assets', 'flowers');

/**
 * Escapes backticks so the str can be placed in a string template
 * @param {String} str 
 * @return {String}
 */
function escapeBackticks(str) {
  return str.replace(/`/g, '\\`');
}

/**
 * Runs polymer build
 * @return {Promise}
 */
function buildPolymer() {
  return new Promise((resolve, reject) => {
    const p = spawn('polymer', ['build'], { cwd: root });
    p.stdout.on('data', data => console.log('polymer', data.toString()));
    p.stderr.on('data', data => console.error('polymer', data.toString()));
    p.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Polymer CLI exited with code ${code}`));
      }
    });
  });
}

/**
 * Copies the app shell into the scripts directory so it can be served whenever a route fails.
 */
function copyAppShell() {
  const build = join(__dirname, '..', 'scripts', 'build');
  const src = join(root, 'build', 'bundled-compiled', 'index.html');
  const dest = join(__dirname, '..', 'scripts', 'build', 'index.html.js');
  const appShell = readFileSync(src, 'utf8');
  
  if (!existsSync(build)) {
    mkdirSync(build);
  }

  writeFileSync(dest, `module.exports = \`${escapeBackticks(appShell)}\`;`);
  console.log(`copied ${src} => ${dest}`);
}

/**
 * Performs all tasks needed to build the PWA
 * @return {Promise}
 */
function build() {
  return buildPolymer().then(copyAppShell);
}

if (require.main === module) {
  // run immediately if this script is being run directly from the command line
  build()
    .then(() => console.log('build successful!'))
    .catch(() => console.error('build failed!')); 
}

module.exports = build;