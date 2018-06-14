import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function aboutHandler(params, state, request) {
  return withGlobalState(request, globalState, { 
    about: {
      siteName: "My Store",
      description: "My Store proudly offers the best products at the lowest prices!"
    }
  })
}