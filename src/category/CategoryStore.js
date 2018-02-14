import { types } from "mobx-state-tree"
import { Subcategory } from '../subcategory/SubcategoryStore'

export const Category = types
  .model("Category", {
    id: types.identifier(types.string),
    loading: true,
    name: types.maybe(types.string),
    subcategories: types.maybe(types.array(Subcategory))
  })
  .views(self => ({

  }))
  .actions(self => ({
    load() {
      setTimeout(() => {
        self.update({
          name: "Test Category " + self.id,
          loading: false,
          subcategories: [
            Subcategory.create({ id: '1', name: 'Subcategory 1' }),
            Subcategory.create({ id: '2', name: 'Subcategory 2' }),
            Subcategory.create({ id: '3', name: 'Subcategory 3' }),
            Subcategory.create({ id: '4', name: 'Subcategory 4' }),
            Subcategory.create({ id: '5', name: 'Subcategory 5' }),
            Subcategory.create({ id: '6', name: 'Subcategory 6' })
          ]
        })
      }, 500)

      return self
    },

    update(json) {
      Object.assign(self, json)
    }
  }))

export function loadCategory(id)  {
  return Category.create({ id }).load()
}