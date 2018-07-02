import { Router, fromClient, fromServer, cache, track } from 'moov-pwa/router'
import analytics from 'moov-pwa/analytics'

const cacheHandler = cache({ server: { maxAgeSeconds: 300 }, client: true }) // cache responses in varnish for 5 minutes

export default new Router()
  .get('/c/:id',
    cacheHandler,
    fromClient({ page: 'Category' }),
    fromServer('./category/category-handler'),
    track(analytics.categoryPageView)
  )
  .get('/s/:id',
    cacheHandler,
    fromClient({ page: 'Subcategory' }),
    fromServer('./subcategory/subcategory-handler'),
    track(analytics.subcategoryPageView)
  )
  .get('/p/:id',
    cacheHandler,
    fromClient({ page: 'Product' }),
    fromServer('./product/product-handler'),
    track(analytics.productPageView)
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
    cacheHandler,
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler'),
    track(analytics.homePageView)
  )
