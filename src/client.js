import App from './App'
import theme from './theme'
import model from './AppModel'
import router from './routes'
import launchClient from 'moov-pwa/launchClient'
import './analytics'

launchClient({
  App,
  router,
  theme,
  model
})