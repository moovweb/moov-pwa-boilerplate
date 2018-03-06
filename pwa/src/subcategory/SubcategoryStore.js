import { types } from "mobx-state-tree"
import { Product } from '../product/ProductStore'
import Breadcrumb from '../components/BreadcrumbsModel'

export const Subcategory = types
  .model("Subcategory", {
    id: types.identifier(types.number),
    name: types.string,
    start: 0,
    end: 0,
    total: 0,
    products: types.optional(types.array(Product), []),
    breadcrumbs: types.array(Breadcrumb),
    alsoViewed: types.optional(types.array(Product), [])
  })
  .views(self => ({

  }))
  .actions(self => ({

  }))

export function loadSubcategory(id, data)  {
  return fetch(`/api/subcategories/${encodeURIComponent(id)}`, { credentials: 'same-origin' })
    .then(result => result.json())
    .then(data => Subcategory.create(data))
}