import { configureAnalytics } from 'moov-pwa/analytics'
import CommerceAnalyticsTarget from 'moov-pwa/analytics/CommerceAnalyticsTarget'

class TestAnalyticsTarget extends CommerceAnalyticsTarget {
  send(data) {
    console.log('[analytics]', 'send', data)
  }
}

const globalData = {
  site: 'moov_pwa',
  host: window.location.hostname
}

const target = new TestAnalyticsTarget()
  .sendForAllEvents(globalData)
  .configureExperiments({ cookieName: 'moov_experience' })
  .setTrackBackClick(true)
  
configureAnalytics(target)
