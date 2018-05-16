import { types } from "mobx-state-tree"
import CartModelBase from 'moov-pwa/model/CartModelBase'
  
const CartModel = types.compose(CartModelBase, 
  types.model("CartModel", {
    
  })
)

export default CartModel