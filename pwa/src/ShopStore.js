import { types } from "mobx-state-tree"
import { CartStore } from "./cart/CartStore"
import { Product, loadProduct } from './product/ProductStore'
import { Category, loadCategory } from './category/CategoryStore'
import { Subcategory, loadSubcategory } from './subcategory/SubcategoryStore'
import { Menu } from './menu/MenuStore'
import Store from './store/StoreModel'

const Shop = types
  .model("Shop", {
    cart: types.optional(CartStore, {}),
    menu: types.optional(Menu, {}),
    category: types.maybe(Category),
    subcategory: types.maybe(Subcategory),
    product: types.maybe(Product),
    changeStoreDialogOpen: false,
    store: types.optional(Store, { name: 'Randallstown', rating: 3 }),
    stores: types.optional(types.array(Store), []),
    zip: ''
  })
  .views(self => ({

  }))
  .actions(self => ({

    openChangeStoreDialog() {
      self.changeStoreDialogOpen = true
    },
    closeChangeStoreDialog() {
      self.changeStoreDialogOpen = false
    },
    setStore(store) {
      self.store = Store.create(store.toJSON())
      self.changeStoreDialogOpen = false
    },
    setZip(zip) {
      if (zip.match(/^\d*$/)) {
        self.zip = zip
      }

      if (zip.length) {
        self.stores = [
          { name: 'Germantown', street: 'MD 20900-A Frederick Rd', city: 'Germantown, MD 20876', distance: '10mi.', rating: 5 },
          { name: 'Baltimore', street: '4621 Harford Rd', city: 'Baltimore, MD 21214', distance: '15mi.', rating: 4.5 },
          { name: 'Baltimore', street: '6515 Baltimore National P', city: 'Baltimore, MD 21228', distance: '18mi.', rating: 3.5 }
        ]
      } else {
        self.stores = []
      }
    },
    
    loadCategory(id, data) {
      if (!self.category || self.category.id !== id) {
        loadCategory(id, data).then(c => self.setCategory(c))
      }
    },
    setCategory(category) {
      self.category = category
    },

    loadSubcategory(id, data) {
      loadSubcategory(id, data).then(s => self.setSubcategory(s))
    },
    setSubcategory(subcategory) {
      self.subcategory = subcategory
    },

    loadProduct(id, data) {
      loadProduct(id, data).then(p => self.setProduct(p))
    },
    setProduct(product) {
      self.product = product
    }

  }))

export default Shop