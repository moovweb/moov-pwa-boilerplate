import { configureAnalytics } from 'react-storefront/analytics'
import GoogleAnalyticsTarget from 'moov-pwa-analytics/GoogleAnalyticsTarget'
import CommerceAnalyticsTarget from 'moov-pwa-analytics/CommerceAnalyticsTarget'

class TestAnalyticsTarget extends CommerceAnalyticsTarget {

  send(data) {
    console.log('[analytics]', 'send', data)
  }

}

class ExampleAMPGATarget extends GoogleAnalyticsTarget {

  ampEvents = {
    promoBannerClicked: ({ name, imageUrl }) => ({
      request: 'event',
      vars: {
        eventCategory: 'Promo Banner',
        eventAction: 'click'
      },
      extraUrlParams: {
        promo_banner: name,
        promo_banner_image: imageUrl
      }
    }),
    addedToCart: ({ product }) => ({
      request: 'event',
      vars: {
        eventCategory: 'Cart',
        eventAction: 'add',
      },
      extraUrlParams: this.getProductEventData(product)
    })
  }
  
  getPropsForAmpAnalytics(event, data) {
    const createProps = this.ampEvents[event]
    return createProps && createProps(data)
  }

}

configureAnalytics(
  new TestAnalyticsTarget()
    .sendForAllEvents()
    .setTrackBackClick(true),
  new ExampleAMPGATarget({ trackingID: 'abc123' })
    .sendForAllEvents()
)
