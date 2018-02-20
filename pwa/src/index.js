import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "mobx-react"
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import shop from "./ShopStore"

ReactDOM.render(
  <Provider shop={shop}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker();
