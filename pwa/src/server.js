import { extras } from 'mobx'
extras.isolateGlobalState();

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from "mobx-react"
import StaticRouter from 'react-router-dom/StaticRouter'
import App from './App'
import ShopStore from './ShopStore'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles'
import theme from './theme'

import { flushChunkNames } from 'react-universal-component/server'
// import flushChunks from 'webpack-flush-chunks'
const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

module.exports = function render({ url='/', state, stats }) {
  const shop = ShopStore.create(state)
  const context = {}
  const html = renderToString(
    <Provider shop={shop}>
      <StaticRouter location={url} context={context}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <App/>
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  )
  const chunkNames = flushChunkNames()

  return {
    html,
    css: sheetsRegistry.toString(),
    chunks: chunkNames
  }

}