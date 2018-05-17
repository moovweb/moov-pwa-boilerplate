import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function productHandler({ id }, state, request) {
  return withGlobalState(request, globalState, { 
    title: `Product ${id}`,
    product: {
      id,
      name: `Product ${id}`,
      price: 199.99,
      rating: 4.5,
      description: 'This is the product description.',
      thumbnail: 'http://via.placeholder.com/128x128',
      images: [
        "http://via.placeholder.com/350x400",
        "http://via.placeholder.com/350x400",
        "http://via.placeholder.com/350x400"
      ],
      thumbnails: [
        "http://via.placeholder.com/50x50",
        "http://via.placeholder.com/50x50",
        "http://via.placeholder.com/50x50"
      ]
    }
  })
} 
