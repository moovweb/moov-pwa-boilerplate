import { Router, fromClient, fromServer } from 'moov_router'

export default new Router()
  .get('/c/:id',
    fromClient(({ id }) => ({ view: 'Category', category: { id }})),
    fromServer('./category')
  )
  .get('/s/:id',
    fromClient(({ id }) => ({ view: 'Subcategory', subcategory: { id }})),
    fromServer('./subcategory')
  )
  .get('/p/:id',
    fromClient(({ id }) => ({ view: 'Product', product: { id }})),
    fromServer('./product')
  )
  .fallback(
    fromClient({ view: 'Home' }),
    fromServer('./home')  
  )
    