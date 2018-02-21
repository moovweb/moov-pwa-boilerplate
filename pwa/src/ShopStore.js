import { types } from "mobx-state-tree"
import { CartEntry, CartStore } from "./cart/CartStore"
import { Product } from './product/ProductStore'
import { Category, loadCategory } from './category/CategoryStore'
import { Subcategory, loadSubcategory } from './subcategory/SubcategoryStore'
import { Menu } from './menu/MenuStore'

const Shop = types
  .model("Shop", {
    cart: types.optional(CartStore, {}),
    menu: types.maybe(Menu),
    category: types.maybe(Category),
    subcategory: types.maybe(Subcategory)
  })
  .views(self => ({

  }))
  .actions(self => ({
    
    loadCategory(id, data) {
      loadCategory(id, data).then(category => self.setCategory(category))
    },

    setCategory(category) {
      self.category = category
    },

    loadSubcategory(id, data) {
      loadSubcategory(id, data).then(category => self.setSubcategory(category))
    },

    setSubcategory(subcategory) {
      self.subcategory = subcategory
    }

  }))

export default Shop