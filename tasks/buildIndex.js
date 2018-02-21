const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'build', 'assets', 'pwa', 'index.html'), 'utf8');
const js = 'module.exports=`' + html.replace(/`/g, '\\`') + '`';
const out = path.join(__dirname, '..', 'scripts', 'build');

if (!fs.existsSync(out)) {
  fs.mkdirSync(out)
}

fs.writeFileSync(path.join(out, 'index.html.js'), js);