import { types } from "mobx-state-tree"
import { Subcategory } from '../subcategory/SubcategoryStore'

export const Category = types
  .model("Category", {
    id: types.identifier(types.string),
    loading: true,
    name: types.maybe(types.string),
    image: types.maybe(types.string),
    subcategories: types.optional(types.array(types.late(() => Category)), [])
  })
  .views(self => ({

  }))
  .actions(self => ({
    load() {
      fetch(`/data/categories/${self.id}`)
        .then(result => result.json())
        .then(data => {
          self.update({
            loading: false,
            ...data
          })
        })

      return self
    },

    update(json) {
      Object.assign(self, json)
    }
  }))

export function loadCategory(id)  {
  return Category.create({ id }).load()
}