import { types } from "mobx-state-tree"

export const Product = types.model("Product", {
  id: types.identifier(),
  name: types.string,
  price: types.number,
  isAvailable: true
})