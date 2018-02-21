import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from "mobx-react"
import StaticRouter from 'react-router-dom/StaticRouter'
import App from '../App'
import Shop from '../ShopStore'
import { Menu, MenuItem } from '../menu/MenuStore'

export default function render(data) {

  const menu = Menu.create();
  menu.setRoot(data.menu)
       
  const shop = Shop.create(
    {
      menu
    },
    {}
  )

  const context = {}

  return renderToString(
    <Provider shop={shop}>
      <StaticRouter location="/" context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  )

}