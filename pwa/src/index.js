import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from "mobx-react"
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Menu } from "./menu/MenuStore"
import Shop from "./ShopStore"

import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from 'material-ui/styles'
import jssNested from 'jss-nested'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'

// Mobx initial state
const history = createBrowserHistory()

const shop = Shop.create(
  {
    menu: Menu.create()
  },
  {}
)

// JSS configuration
const generateClassName = createGenerateClassName()
const jss = create(jssPreset(), jssNested())
const styleNode = document.createComment("jss-insertion-point");
document.head.insertBefore(styleNode, document.head.firstChild);
jss.options.insertionPoint = 'jss-insertion-point'

ReactDOM.render(
  <Provider shop={shop}>
    <Router history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <App history={history}/>
        </MuiThemeProvider>
      </JssProvider>
    </Router>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker();
