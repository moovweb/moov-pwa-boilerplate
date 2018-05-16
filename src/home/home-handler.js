import globalState from '../globalState'

export default function homeHandler() {
  return Promise.resolve({ 
    ...globalState,
    title: "Moov PWA"
  })
} 
