import { configureAnalytics } from 'react-storefront/analytics'
import GoogleAnalyticsTarget from 'moov-pwa-analytics/GoogleAnalyticsTarget'
import CommerceAnalyticsTarget from 'moov-pwa-analytics/CommerceAnalyticsTarget'

class TestAnalyticsTarget extends CommerceAnalyticsTarget {
  send(data) {
    console.log('[analytics]', 'send', data)
  }
}

configureAnalytics(
  new TestAnalyticsTarget()
    .sendForAllEvents()
    .setTrackBackClick(true),
  new GoogleAnalyticsTarget({ trackingID: 'abc123' })
    .sendForAllEvents()
)
