import { extras } from 'mobx'
extras.isolateGlobalState();

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from "mobx-react"
import StaticRouter from 'react-router-dom/StaticRouter'
import App from './App'
import ShopStore from './ShopStore'
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';
import theme from './theme'

const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

module.exports = function render({ url='/', state }) {
  const shop = ShopStore.create(state)
  const context = {}

  return {
    html: renderToString(
      <Provider shop={shop}>
        <StaticRouter location={url} context={context}>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
              <App/>
            </MuiThemeProvider>
          </JssProvider>
        </StaticRouter>
      </Provider>
    ),
    css: sheetsRegistry.toString()
  }

}