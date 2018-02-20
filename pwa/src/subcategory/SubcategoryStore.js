import { types } from "mobx-state-tree"
import { Product } from '../product/ProductStore'

export const Subcategory = types
  .model("Subcategory", {
    id: types.identifier(types.string),
    name: types.string,
    products: types.optional(types.array(Product), [])
  })
  .views(self => ({

  }))
  .actions(self => ({
    
  }))