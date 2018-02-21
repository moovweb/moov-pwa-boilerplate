import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from "mobx-react"
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Menu } from "./menu/MenuStore"
import Shop from "./ShopStore"

const history = createBrowserHistory()

const shop = Shop.create(
  {
    menu: Menu.create()
  },
  {}
)

ReactDOM.render(
  <Provider shop={shop}>
    <Router history={history}>
      <App history={history}/>
    </Router>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker();
