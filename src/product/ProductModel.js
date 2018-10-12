import { types } from "mobx-state-tree"
import ProductModelBase from 'moov-pwa/model/ProductModelBase'

const ProductModel = types.compose(ProductModelBase, 
  types.model("ProductModel", {
    // additional product fields go here
    specs: types.maybe(types.string),
    reviews: types.optional(types.array(types.string), [])
  })
)

export default ProductModel