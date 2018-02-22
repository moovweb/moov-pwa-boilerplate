import { types } from "mobx-state-tree"
import { CartEntry, CartStore } from "./cart/CartStore"
import { Product, loadProduct } from './product/ProductStore'
import { Category, loadCategory } from './category/CategoryStore'
import { Subcategory, loadSubcategory } from './subcategory/SubcategoryStore'
import { Menu } from './menu/MenuStore'

const Shop = types
  .model("Shop", {
    cart: types.optional(CartStore, {}),
    menu: types.maybe(Menu),
    category: types.maybe(Category),
    subcategory: types.maybe(Subcategory),
    product: types.maybe(Product)
  })
  .views(self => ({

  }))
  .actions(self => ({
    
    loadCategory(id, data) {
      loadCategory(id, data).then(c => self.setCategory(c))
    },

    setCategory(category) {
      self.category = category
    },

    loadSubcategory(id, data) {
      loadSubcategory(id, data).then(s => self.setSubcategory(s))
    },

    setSubcategory(subcategory) {
      self.subcategory = subcategory
    },

    loadProduct(id, data) {
      loadProduct(id, data).then(p => self.setProduct(p))
    },

    setProduct(product) {
      self.product = product
    }

  }))

export default Shop