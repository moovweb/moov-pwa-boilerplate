import { Router, fromClient, fromServer, cacheFor, track } from 'moov-pwa/router'
import analytics from 'moov-pwa/analytics'

const cache = cacheFor({ 
  server: {
    duration: 300, // cache responses in varnish for 5 minutes,
  },
  client: {
    cacheName: 'api',
    duration: 60 * 60
  }
}) 

export default new Router()
  .get('/c/:id',
    fromClient({ page: 'Category' }),
    fromServer('./category/category-handler'),
    track(analytics.categoryPageView),
    cache
  )
  .get('/s/:id',
    fromClient({ page: 'Subcategory' }),
    fromServer('./subcategory/subcategory-handler'),
    track(analytics.subcategoryPageView),
    cache
  )
  .get('/p/:id',
    fromClient({ page: 'Product' }),
    fromServer('./product/product-handler'),
    track(analytics.productPageView),
    cache
  )
  .get('/cart',
    fromClient({ page: 'Cart' }),
    fromServer('./cart/cart-handler'),
    track(analytics.cartPageView),
  )
  .get('/cart/add-from-amp.json',
    fromServer('./cart/add-from-amp-handler')
  )
  .get('/checkout', 
    fromClient({ page: 'Checkout' }),
    fromServer('./checkout/checkout-handler'),
    track(analytics.checkoutPageView)
  )
  .fallback(
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler'),
    track(analytics.homePageView),
    cache
  )
    