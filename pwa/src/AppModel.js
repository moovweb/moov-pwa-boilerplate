import { types } from "mobx-state-tree"
import { MenuModel } from 'moov-pwa-components/Menu'
import AppModelBase from 'moov-pwa-components/model/AppModelBase'
import CartModel from './cart/CartModel'

const AppModel = types.compose(AppModelBase, 
  types.model("AppModel", {
    cart: types.optional(CartModel, {})
  })
)

export default AppModel