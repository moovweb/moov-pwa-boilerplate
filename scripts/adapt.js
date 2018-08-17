import renderHeader from '../src/adapt/renderHeader'
import getStats from 'moov-pwa-stats'

export default async function adapt() {
  try {
    const stats = await getStats()
    fns.init$(body)
    renderHeader(stats) // resuse the PWA header in adapt pages
    sendResponse({ htmlparsed: true, body: $.html() })
  } catch (e) {
    sendResponse({ htmlparsed: true, body: e.stack })
  }
}