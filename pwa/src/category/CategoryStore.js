import { types } from "mobx-state-tree"

export const Category = types
  .model("Category", {
    id: types.identifier(types.number),
    loading: true,
    name: types.maybe(types.string),
    image: types.maybe(types.string),
    text: types.maybe(types.string),
    url: types.maybe(types.string),
    subcategories: types.optional(types.array(types.late(() => Category)), [])
  })
  .views(self => ({

  }))
  .actions(self => ({

  }))

export function loadCategory(id, data)  {
  return fetch(`/data/categories/${encodeURIComponent(id)}`, { credentials: 'same-origin' })
    .then(result => result.json())
    .then(data => Category.create(data))
}