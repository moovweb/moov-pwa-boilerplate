import { configureAnalytics } from 'moov-pwa-components/analytics'
import CommerceAnalyticsTarget from 'moov-pwa-components/analytics/CommerceAnalyticsTarget'

class TestAnalyticsTarget extends CommerceAnalyticsTarget {
  send(data) {
    console.log('[analytics]', 'send', data)
  }
}

const globalData = {
  site: 'moov_pwa',
  host: location.hostname
}

const target = new TestAnalyticsTarget()
  .sendForAllEvents(globalData)
  .configureExperiments({ cookieName: 'moov_experience' })
  .setTrackBackClick(true)
  
configureAnalytics(target)
