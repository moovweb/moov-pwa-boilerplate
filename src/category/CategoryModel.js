import { types } from "mobx-state-tree"
import CategoryModelBase from 'moov-pwa/model/CategoryModelBase'

const CategoryModel = types.compose(CategoryModelBase, 
  types.model("CategoryModel", {

  })
)

export default CategoryModel