import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

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
      color: {
        options: [
          { text: 'Candy Apple Red', id: 'd32f2f', image: 'http://via.placeholder.com/350/d32f2f/d32f2f' },
          { text: 'Forest Green', id: '388E3C', image: 'http://via.placeholder.com/350/388E3C/388E3C' },
          { text: 'Azure Blue', id: '1565c0', image: 'http://via.placeholder.com/350/1565c0/1565c0' },
        ],
        selected: { text: 'Candy Apple Red', id: 'd32f2f', image: 'http://via.placeholder.com/350/d32f2f/d32f2f' }
      },
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
