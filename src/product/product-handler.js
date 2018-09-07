import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function productHandler({ id = '000' }, request, response) {
  return withGlobalState(request, globalState, { 
    title: `Product ${id}`,
    page: 'Product',
    product: {
      id,
      name: `Product ${id}`,
      price: 199.99,
      rating: 4.5,
      description: 'This is the product description.',
      thumbnail: 34,
      // 'http://via.placeholder.com/128x128',
      images: [
        "http://via.placeholder.com/400x350",
        "http://via.placeholder.com/350x400",
        "http://via.placeholder.com/400x400"
      ],
      thumbnails: [
        "http://via.placeholder.com/40x35",
        "http://via.placeholder.com/35x40",
        "http://via.placeholder.com/40x35"
      ]
    }
  })
} 
