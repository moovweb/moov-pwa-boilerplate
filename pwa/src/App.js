import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import Header from './header/Header'
import Menu from 'moov-pwa-components/Menu'
import NavTabs from 'moov-pwa-components/NavTabs'
import universal from 'react-universal-component';
import { inject, observer } from 'mobx-react';

/*
import Login from './menu/Login'
import Footer from './footer/Footer'
*/

const views = {
  Home: universal(() => import('./home/Home')),
  Category: universal(() => import('./category/Category')),
  Subcategory: universal(() => import('./subcategory/Subcategory')),
  Product: universal(() => import('./product/Product'))
}

@withStyles(theme => {
  return {
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
  }
})
@inject('app', 'history')
@observer
export default class App extends Component {

  render() {
    const { app } = this.props
    const View = views[app.view]
    const branch = app[this.props.app.view.toLowerCase()]

    return (
      <div>
        <Header/> 
        <Menu useExpanders/>
        <NavTabs/>
        {View && <View key={this.props.history.pathname}/>}
        {/* <Footer/> */}
      </div>
    )
  }

}
