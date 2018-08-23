import renderHeader from './renderHeader'
import getStats from 'moov-pwa-stats'

export default async function proxyHandler(params, request, response) {
  try {
    const stats = await getStats()
    fns.init$(body)
    renderHeader(stats) // reuse the PWA header in adapt pages
    response.send($.html())
  } catch (e) {
    response.send(e.stack)
  }
}

