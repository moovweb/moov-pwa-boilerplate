import globalState from '../globalState'
import { withGlobalState } from 'moov-pwa/router'

export default function cartHandler(params, state, request) {
  return withGlobalState(request, globalState, {
    
  })
}