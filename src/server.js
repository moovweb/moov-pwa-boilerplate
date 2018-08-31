import theme from './theme'
import model from './AppModel'
import App from './App'
import router from './routes'
import Server from 'moov-pwa/Server'
import Config from 'moov-pwa/Config'

export default function createServer({ globals, blob } = {}) {
  Config.load(blob || require('./blob.dev'))

  return new Server({ 
    theme, 
    model, 
    App, 
    router,
    globals
  }) 
}