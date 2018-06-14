import { types } from "mobx-state-tree"
import CartModelBase from 'moov-pwa/model/CartModelBase'
import ProductModel from '../product/ProductModel'
import persist from 'moov-pwa/persist'

const CartModel = types.compose(CartModelBase, types
  .model("CartModel", {
    items: types.optional(types.array(ProductModel), [])
  })
  .actions(self => ({
    afterCreate() {
      // persist cart to local storage
      persist('cart', self)
    }
  }))
)

export default CartModel