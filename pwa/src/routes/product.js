import globalState from './globalState'

export default function productHandler({ id }) {
  return Promise.resolve({ 
    ...globalState,
    title: "Moov PWA",
    product: {
      id,
      name: `Product ${id}`
    }
  })
} 
