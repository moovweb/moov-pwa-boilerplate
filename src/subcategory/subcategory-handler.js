import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function subcategoryHandler({ id, filters, sort, start }, state, request) {
  if (start) {
    // handle click on "Show More"
    const items = []
    start = parseInt(start)

    for (let i=1; i<=10; i++) {
      items.push({ id: `${start + i}`, name: `Product ${start + i}`, price: 99.99, rating: i%5, thumbnail: 'http://via.placeholder.com/128x128' })
    }

    return { items }
  } else {
    // handle initial landing
    return withGlobalState(request, globalState, { 
      title: `Moov PWA - Subcategory #${id}`,
      subcategory: {
        id, 
        name: `Subcategory ${id}`,
        description: `This is the description for subcategory ${id}.`,
        total: 50,
        facetGroups: [
          { name: 'Color', facets: [
            { name: 'Red', code: 'red', matches: 24 },
            { name: 'Green', code: 'green', matches: 10 },
            { name: 'Blue', code: 'blue', matches: 34 }
          ]},
          { name: 'Size', facets: [
            { name: 'Small', code: 'sm', matches: 20 },
            { name: 'Medium', code: 'md', matches: 30 },
            { name: 'Large', code: 'lg', matches: 50 },
            { name: 'X-Large', code: 'xl', matches: 9 }
          ]}
        ],
        sortOptions: [
          { name: 'Price - Low to High', code: 'price_asc' },
          { name: 'Price - High to Low', code: 'price_desc' },
          { name: 'Most Popular', code: 'pop' },
          { name: 'Highest Rated', code: 'rating' }
        ],
        items: [
          { id: '1', name: 'Product 1', price: 299.99, rating: 4.5, thumbnail: 'http://via.placeholder.com/128x128' },
          { id: '2', name: 'Product 2', price: 199.99, rating: 3.5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '3', name: 'Product 3', price: 699.99, rating: 4.5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '4', name: 'Product 4', price: 99.99, rating: 5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '5', name: 'Product 5', price: 99.99, rating: 3.5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '6', name: 'Product 6', price: 99.99, rating: 5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '7', name: 'Product 7', price: 99.99, rating: 4.5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '8', name: 'Product 8', price: 99.99, rating: 4.5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '9', name: 'Product 9', price: 99.99, rating: 5, thumbnail: 'http://via.placeholder.com/128x128'  },
          { id: '10', name: 'Product 10', price: 99.99, rating: 3.5, thumbnail: 'http://via.placeholder.com/128x128' }
        ]
      }
    })
  }
} 
