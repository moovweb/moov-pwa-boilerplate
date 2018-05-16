import globalState from '../globalState'

export default function categoryHandler({ id, template }) {
  return Promise.resolve({ 
    ...globalState,
    title: `Moov PWA - Category #${id}`,
    category: {
      id, 
      name: `Category ${id}`,
      tagline: `Tagline for category ${id}`,
      subcategories: [
        { id: '1', name: 'Subcategory 1' },
        { id: '2', name: 'Subcategory 2' },
        { id: '3', name: 'Subcategory 3' },
        { id: '4', name: 'Subcategory 4' },
        { id: '5', name: 'Subcategory 5' },
        { id: '6', name: 'Subcategory 6' },
        { id: '7', name: 'Subcategory 7' },
        { id: '8', name: 'Subcategory 8' },
        { id: '9', name: 'Subcategory 9' },
        { id: '10', name: 'Subcategory 10' }
      ]
    }
  })
} 
 