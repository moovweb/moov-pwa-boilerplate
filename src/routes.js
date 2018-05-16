import { Router, fromClient, fromServer } from 'moov-pwa/router'

export default new Router()
  .get('/c/:id',
    fromClient({ page: 'Category' }),
    fromServer('./category/category-handler')
  )
  .get('/s/:id',
    fromClient({ page: 'Subcategory' }),
    fromServer('./subcategory/subcategory-handler')
  )
  .get('/p/:id',
    fromClient({ page: 'Product' }),
    fromServer('./product/product-handler')
  )
  .get('/cart/:id',
    fromClient({ page: 'Cart' }),
    fromServer('./cart/cart-handler')
  )
  .fallback(
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler')  
  )
    