import { types, getEnv } from "mobx-state-tree"
import { Product } from '../product/ProductStore'

export const CartEntry = types
  .model("CartEntry", {
    quantity: 0,
    product: types.reference(Product)
  })

export const CartStore = types
  .model("CartStore", {
    entries: types.array(CartEntry)
  })
  .views(self => ({

  }))
  .actions(self => ({
    
  }))