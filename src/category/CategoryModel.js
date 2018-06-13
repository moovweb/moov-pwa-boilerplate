import { types } from "mobx-state-tree"
import CategoryModelBase from 'moov-pwa/model/CategoryModelBase'
import SubcategoryModel from '../subcategory/SubcategoryModel'

const CategoryModel = types.compose(CategoryModelBase, 
  types.model("CategoryModel", {
    subcategories: types.optional(types.array(SubcategoryModel), [])
  })
)

export default CategoryModel