import { Router, fromClient, fromServer } from 'moov_router'

export default new Router()
  .fallback(
    fromClient({ view: 'Home' }),
    fromServer('./home')
  )
