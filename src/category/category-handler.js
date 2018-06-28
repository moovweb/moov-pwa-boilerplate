import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function categoryHandler({ id, template }, state, request) {
  return withGlobalState(request, globalState, { 
    title: `Moov PWA - Category #${id}`,
    page: 'Category',
    category: {
      id, 
      name: `Category ${id}`,
      description: `Description for category ${id}`,
      subcategories: [
        { id: id + '1', name: 'Subcategory 1', image: 'https://via.placeholder.com/350x175?i=1' },
        { id: id + '2', name: 'Subcategory 2', image: 'https://via.placeholder.com/350x175?i=2' },
        { id: id + '3', name: 'Subcategory 3', image: 'https://via.placeholder.com/350x175?i=3' },
        { id: id + '4', name: 'Subcategory 4', image: 'https://via.placeholder.com/350x175?i=4' },
        { id: id + '5', name: 'Subcategory 5', image: 'https://via.placeholder.com/350x175?i=5' },
        { id: id + '6', name: 'Subcategory 6', image: 'https://via.placeholder.com/350x175?i=6' },
        { id: id + '7', name: 'Subcategory 7', image: 'https://via.placeholder.com/350x175?i=7' },
        { id: id + '8', name: 'Subcategory 8', image: 'https://via.placeholder.com/350x175?i=8' },
        { id: id + '9', name: 'Subcategory 9', image: 'https://via.placeholder.com/350x175?i=9' },
        { id: id + '10', name: 'Subcategory 10', image: 'https://via.placeholder.com/350x175?i=10' }
      ]
    }
  })
} 
 