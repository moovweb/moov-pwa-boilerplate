import { types } from "mobx-state-tree"
import CategoryModelBase from 'moov-pwa-components/model/CategoryModelBase'

const CategoryModel = types.compose(CategoryModelBase, 
  types.model("CategoryModel", {
    tagline: types.maybe(types.string)
  })
)

export default CategoryModel