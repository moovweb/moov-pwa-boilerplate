import { types } from "mobx-state-tree"
import { CartEntry, CartStore } from "./cart/CartStore"
import { Product } from './product/ProductStore'
import { Category, loadCategory } from './category/CategoryStore'
import { Menu } from './menu/MenuStore'

const Shop = types
  .model("Shop", {
    cart: types.optional(CartStore, {
      entries: [
        CartEntry.create({
          quantity: 1,
          product: Product.create({
            id: '1', 
            name: 'Test Product',
            price: 19.99,
            isAvailable: true
          })
        })
      ]
    }),
    menu: types.maybe(Menu),
    category: types.maybe(Category)
  })
  .views(self => ({

  }))
  .actions(self => ({
    loadCategory(id, data) {
      self.category = loadCategory(id, data)
    }
  }))

export default Shop