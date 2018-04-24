import { types } from "mobx-state-tree"
import SubcategoryModelBase from 'moov-pwa-components/model/SubcategoryModelBase'

const SubcategoryModel = types.compose(SubcategoryModelBase, 
  types.model("SubcategoryModel", {
    description: types.maybe(types.string)
  })
)

export default SubcategoryModel