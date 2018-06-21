import { Router, fromClient, fromServer, cacheFor } from 'moov-pwa/router'

const cache = cacheFor({ duration: 300 }) // cache responses in varnish for 5 minutes

export default new Router()
  .get('/c/:id',
    fromClient({ page: 'Category' }),
    fromServer('./category/category-handler'),
    cache
  )
  .get('/s/:id',
    fromClient({ page: 'Subcategory' }),
    fromServer('./subcategory/subcategory-handler'),
    cache
  )
  .get('/p/:id',
    fromClient({ page: 'Product' }),
    fromServer('./product/product-handler'),
    cache
  )
  .get('/cart',
    fromClient({ page: 'Cart' }),
    fromServer('./cart/cart-handler')
  )
  .get('/cart/add-from-amp.json',
    fromServer('./cart/add-from-amp-handler')
  )
  .get('/checkout', 
    fromClient({ page: 'Checkout' }),
    fromServer('./checkout/checkout-handler')
  )
  .fallback(
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler'),
    cache
  )
    