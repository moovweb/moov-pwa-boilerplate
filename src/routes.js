import { Router, fromClient, fromServer, cacheFor } from 'moov-pwa/router'

const cache = cacheFor({ duration: 300 }) // cache responses in varnish for 5 minutes

export default new Router()
  .get('/c/:id',
    fromClient({ page: 'Category', category: null }),
    fromServer('./category/category-handler'),
    cache
  )
  .get('/s/:id',
    fromClient(({ id, filters, sort }) => ({
      page: 'Subcategory',
      subcategory: {
        id,
        filters,
        sort
      }
    })),
    fromServer('./subcategory/subcategory-handler'),
    cache
  )
  .get('/p/:id',
    fromClient({ page: 'Product', product: null }),
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
  .get('/about',
    fromClient({ page: 'About', about: {} }),
    fromServer('./about/about-handler')
  )
  .fallback(
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler'),
    cache
  )
