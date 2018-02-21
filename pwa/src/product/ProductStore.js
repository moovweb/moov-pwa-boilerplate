import { types } from "mobx-state-tree"

export const Product = types
  .model("Product", {
    id: types.identifier(types.number),
    url: types.maybe(types.string),
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
    shippingAvailable: types.boolean,
    quantity: 1,
    delivery: 'store'
  })
.views(self => ({
  get total() {
    return self.salePrice
  }
}))
.actions(self => ({
  setQuantity(q) {
    self.quantity = Math.max(1, q)
  },
  setDelivery(d) {
    self.delivery = d
  }
}))