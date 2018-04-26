import React from 'react'
import App from './App'
import theme from './theme'
import model from './AppModel'
import router from './routes/router'
import launchClient from 'moov-pwa-components/launchClient'
import './analytics'

launchClient({
  app: <App/>,
  router,
  theme,
  model
});
