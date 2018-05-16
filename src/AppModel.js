import { types } from "mobx-state-tree"
import AppModelBase from 'moov-pwa/model/AppModelBase'
import CartModel from './cart/CartModel'
import CategoryModel from './category/CategoryModel'
import SubcategoryModel from './subcategory/SubcategoryModel'

const AppModel = types.compose(AppModelBase, 
  types.model("AppModel", {
    cart: types.optional(CartModel, {}),
    category: types.maybe(CategoryModel),
    subcategory: types.maybe(SubcategoryModel)
  })
)

export default AppModel