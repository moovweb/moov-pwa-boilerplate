import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from './header/Header'
import NavTabs from 'moov-pwa/NavTabs'
import Pages from 'moov-pwa/Pages'
import SearchDrawer from 'moov-pwa/SearchDrawer'
import Helmet from 'react-helmet'
import ProductSkeleton from './product/ProductSkeleton'
import UpdateNotification from 'moov-pwa/UpdateNotification'

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
        <Helmet>
          <link rel="shortcut icon" href="/icons/favicon.ico"/>
        </Helmet>
        <Header/> 
        <NavTabs/>
        <Pages
          loadMasks={{
            Product: ProductSkeleton
          }}
          components={universal => ({
            Home: universal(import('./home/Home')),
            Category: universal(import('./category/Category')),
            Subcategory: universal(import('./subcategory/Subcategory')),
            Product: universal(import('./product/Product')),
            Cart: universal(import('./cart/Cart')),
            Checkout: universal(import('./checkout/Checkout')),
            Error: universal(import('./ErrorPage'))
          })}
        />
        <SearchDrawer/>
        <UpdateNotification/>
      </div>
    )
  }

}
