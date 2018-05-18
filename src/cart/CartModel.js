import { types } from "mobx-state-tree"
import CartModelBase from 'moov-pwa/model/CartModelBase'
import persist from 'moov-pwa/persist'

const CartModel = types.compose(CartModelBase, types
  .model("CartModel", {
    
  })
  .actions(self => ({
    afterCreate() {
      // persist cart to local storage
      persist('cart', self)
    }
  }))
)

export default CartModel