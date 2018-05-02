import App from './App'
import theme from './theme'
import model from './AppModel'
import router from './routes/router'
import Server from 'moov-pwa-components/Server'

module.exports = globals => new Server({ 
  theme, 
  model, 
  App, 
  router,
  globals
})