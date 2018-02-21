var ReactDOMServer = require('react-dom/server');
var App = require('../src/App');

function render() {
  ReactDOMServer.renderToString(React.createElement(App))
}

render();