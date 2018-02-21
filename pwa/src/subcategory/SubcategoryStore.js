import { types } from "mobx-state-tree"
import { Product } from '../product/ProductStore'

export const Subcategory = types
  .model("Subcategory", {
    id: types.identifier(types.number),
    name: types.string,
    start: 0,
    end: 0,
    total: 0,
    products: types.optional(types.array(Product), []),
    alsoViewed: types.optional(types.array(Product), [])
  })
  .views(self => ({

  }))
  .actions(self => ({

  }))

export function loadSubcategory(id, data)  {
  return fetch(`/data/subcategories/${encodeURIComponent(id)}`)
    .then(result => result.json())
    .then(data => Subcategory.create(data))
}