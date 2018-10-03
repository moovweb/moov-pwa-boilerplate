import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'

export default function productHandler({ id }, request, response) {
  return withGlobalState(request, globalState, { 
    title: `Product ${id}`,
    page: 'Product',
    product: {
      id,
      url: `/p/${id}`,
      name: `Product ${id}`,
      price: 99.99,
      rating: id % 5,
      reviewCount: id * 10,
      description: 'This is the product description.',
      images: [
        "http://via.placeholder.com/400x400",
        "http://via.placeholder.com/400x350",
        "http://via.placeholder.com/350x400",
      ],
      thumbnails: [
        "http://via.placeholder.com/40x40",
        "http://via.placeholder.com/40x35",
        "http://via.placeholder.com/35x40"
      ]
    }
  })
} 
