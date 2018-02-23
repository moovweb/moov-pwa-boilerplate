import { types } from "mobx-state-tree"

const Store = types
  .model('Store', {
    name: types.string,
    rating: types.number,
    distance: types.maybe(types.string),
    street: types.maybe(types.string),
    city: types.maybe(types.string)
  })

export default Store