module.exports = function renderAppShell() {
  console.error = console.warn = console.log
  const stats = require('/build/stats.json');
  const index = require('/build/index.html.js');
  const render = require('/build/index.js');
  const state = { menu: { levels: [ require("/api/nav.json") ] }};
  const { html, css, chunks } = render({ url: env.path, state, stats }); 

  const scripts = chunks.reduce((scripts, chunk) => {
    (stats.assetsByChunkName[chunk] || [])
      .filter(file => file.endsWith('.js'))
      .forEach(file => scripts.push(`<script type="text/javascript" src="/pwa/${file}"></script>`));
    return scripts;
  }, []);

  const $ = fns.init$(index);
  $.body.find('#root').html(html);
  $.body.prepend(`
    <script type="text/javascript">window.initialState=${JSON.stringify(state)}</script>
    <style id="ssr-css">${css}</style>
  `);
  $.body.append(scripts.join(''));

  return Promise.resolve($.root.html());
}