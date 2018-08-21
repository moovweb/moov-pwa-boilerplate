import renderHeader from './renderHeader'
import getStats from 'moov-pwa-stats'

export default async function adaptHandler() {
  try {
    const stats = await getStats()
    fns.init$(body)
    renderHeader(stats) // reuse the PWA header in adapt pages
    return { body: $.html() }
  } catch (e) {
    return { body: e.stack }
  }
}

