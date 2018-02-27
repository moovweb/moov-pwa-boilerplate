import { types } from "mobx-state-tree"
import Breadcrumb from '../components/BreadcrumbsModel'

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
    description: types.maybe(types.string),
    pickupAvailable: types.boolean,
    shippingAvailable: types.boolean,
    quantity: 1,
    delivery: 'store',
    breadcrumbs: types.optional(types.array(Breadcrumb), []),
    availability: types.maybe(types.string)
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

export function loadProduct(id, data)  {
  return fetch(`/data/products/${encodeURIComponent(id)}`, { credentials: 'same-origin' })
    .then(result => result.json())
    .then(data => Product.create(data))
}