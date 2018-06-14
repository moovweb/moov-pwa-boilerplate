import { types } from "mobx-state-tree"

export default types.model('AboutModel', {
  siteName: types.maybe(types.string),
  description: types.maybe(types.string)
})