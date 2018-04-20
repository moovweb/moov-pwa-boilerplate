import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import Header from './header/Header'
import Menu from 'moov-pwa-components/Menu'

/*
import NavTabs from 'moov-pwa-components/NavTabs'
import Login from './menu/Login'
import Footer from './footer/Footer'
*/

@withStyles(theme => {
  return {
    '@global': {
      body: {
        margin: '0',
        padding: '0',
      },
      a: {
        textDecoration: 'underline'
      }
    }
  }
})
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/> 
        <Menu useExpanders/>
        {/* <NavTabs/> */}
        {/* <Footer/> */}
      </div>
    )
  }

}
