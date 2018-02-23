import { types } from "mobx-state-tree"

const Breadcrumb = types
  .model('Breadcrumb', {
    url: types.string,
    text: types.string
  })

export default Breadcrumb