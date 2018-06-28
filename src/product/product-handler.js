import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function productHandler({ id }, state, request) {
  return withGlobalState(request, globalState, { 
    title: `Product ${id}`,
    page: 'Product',
    product: {
      id,
      name: `Product ${id}`,
      price: 199.99,
      rating: 4.5,
      description: 'This is the product description.',
      thumbnail: 'https://via.placeholder.com/128x128',
      images: [
        "https://via.placeholder.com/400x350",
        "https://via.placeholder.com/350x400",
        "https://via.placeholder.com/400x400"
      ],
      thumbnails: [
        "https://via.placeholder.com/40x35",
        "https://via.placeholder.com/35x40",
        "https://via.placeholder.com/40x35"
      ]
    }
  })
} 
