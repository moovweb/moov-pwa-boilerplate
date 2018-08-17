import renderHeader from '../src/adapt/renderHeader'
import getStats from 'moov-pwa-stats'

/**
 * Runs for all URLs that don't match the PWA's router
 */
export default async function adapt() {
  try {
    const stats = await getStats()
    fns.init$(body)
    renderHeader(stats) // reuse the PWA header in adapt pages
    sendResponse({ htmlparsed: true, body: $.html() })
  } catch (e) {
    sendResponse({ htmlparsed: true, body: e.stack })
  }
}
