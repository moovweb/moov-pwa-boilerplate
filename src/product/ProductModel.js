import { types } from "mobx-state-tree"
import ProductModelBase from 'react-storefront/model/ProductModelBase'

const ProductModel = types.compose(ProductModelBase, 
  types.model("ProductModel", {
    // additional product fields go here
  })
)

export default ProductModel