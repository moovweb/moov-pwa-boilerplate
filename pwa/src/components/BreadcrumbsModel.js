import { types } from "mobx-state-tree"
import { Product } from '../product/ProductStore'

const Breadcrumb = types
  .model('Breadcrumb', {
    url: types.string,
    text: types.string
  })

export default Breadcrumb