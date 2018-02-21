import { types } from "mobx-state-tree"

export const Product = types.model("Product", {
  id: types.identifier(types.number),
  name: types.string,
  originalPrice: types.number,
  salePrice: types.number,
  image: types.string,
  reviewCount: types.number,
  rating: types.number,
  partNumber: types.string,
  sku: types.string,
  shortDescription: types.string,
  pickupAvailable: types.boolean,
  shippingAvailable: types.boolean
})