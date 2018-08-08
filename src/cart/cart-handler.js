import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function cartHandler(params, request, response) {
  return withGlobalState(request, globalState, {
    
  })
}