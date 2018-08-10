import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function homeHandler(params, request, response) {
  // throw new Error('test')
  
  return withGlobalState(request, globalState, { 
    title: "Moov PWA",
    welcomeMessage: "Welcome to the Moov PWA starter kit.  Here you'll find mock home, category, subcategory, product, and cart pages that you can use as a starting point to build your PWA.<br/><br/>Happy coding!"
  })
} 
