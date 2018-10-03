import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'

export default function homeHandler(params, request, response) {
  return withGlobalState(request, globalState, { 
    title: "Moov PWA",
    welcomeMessage: "Welcome to the React Storefront starter kit.  Here you'll find mock home, category, subcategory, product, and cart pages that you can use as a starting point to build your PWA.<br/><br/>Happy coding!"
  })
} 
