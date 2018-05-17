import { Router, fromClient, fromServer } from 'moov-pwa/router'

export default new Router()
  .get('/c/:id',
    fromClient({ page: 'Category', category: null }),
    fromServer('./category/category-handler')
  )
  .get('/s/:id',
    fromClient(({ id, filters, sort }) => ({ 
      _overwrite: true,
      page: 'Subcategory', 
      subcategory: {
        id,
        filters,
        sort
      } 
    })),
    fromServer('./subcategory/subcategory-handler')
  )
  .get('/p/:id',
    fromClient({ page: 'Product', product: null }),
    fromServer('./product/product-handler')
  )
  .get('/cart',
    fromClient({ page: 'Cart' }),
    fromServer('./cart/cart-handler')
  )
  .get('/checkout', 
    fromClient({ page: 'Checkout' }),
    fromServer('./checkout/checkout-handler')  
  )
  .fallback(
    fromClient({ page: 'Home' }),
    fromServer('./home/home-handler')  
  )
    