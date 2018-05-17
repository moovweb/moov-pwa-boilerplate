import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import Header from './header/Header'
import Menu from 'moov-pwa/Menu'
import NavTabs from 'moov-pwa/NavTabs'
import universal from 'react-universal-component'
import Pages from 'moov-pwa/Pages'

const Loading = () => <div style={{ padding: '20px' }}>Loading...</div>

const universalOptions = {
  loading: Loading
}

@withStyles(theme => ({
  '@global': {
    body: {
      margin: '0',
      padding: '0',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize
    },
    a: {
      textDecoration: 'underline'
    }
  }
}))
export default class App extends Component {

  render() {
    return (
      <div>
        <Header/> 
        <Menu useExpanders/>
        <NavTabs/>
        <Pages
          loading={Loading}
          components={{
            Home: universal(() => import('./home/Home'), universalOptions),
            Category: universal(() => import('./category/Category'), universalOptions),
            Subcategory: universal(() => import('./subcategory/Subcategory'), universalOptions),
            Product: universal(() => import('./product/Product'), universalOptions),
            Cart: universal(() => import('./cart/Cart'), universalOptions),
            Checkout: universal(() => import('./checkout/Checkout'), universalOptions)
          }}
        />
      </div>
    )
  }

}
