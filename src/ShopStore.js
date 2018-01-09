import { types } from "mobx-state-tree"
import { CartEntry, CartStore } from "./cart/CartStore"
import { Product } from './product/ProductStore'

export default types
  .model("ShopStore", {
    cart: types.optional(CartStore, {
      entries: [
        CartEntry.create({
          quantity: 1,
          product: Product.create({
            id: 1, 
            name: 'Test Product',
            price: 19.99,
            isAvailable: true
          })
        })
      ]
    })
  })
  .views(self => ({

  }))
  .actions(self => ({

  }))