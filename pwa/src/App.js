import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Home from './home/Home'
import Header from './header/Header'
import Menu from './menu/Menu'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'
import styles from './App.module.scss'
import Promo from './banners/Promo'
import Search from './search/Search'
import Product from './product/Product'
import Category from './category/Category'
import Cart from './cart/Cart'

// import asyncComponent from './AsyncComponent'
// const Product = asyncComponent(() => import('./product/Product'))
// const Category = asyncComponent(() => import('./category/Category'))
// const Cart = asyncComponent(() => import('./cart/Cart'))

class App extends Component {

  state = {
    menu: false
  }

  constructor({ history }) {
    super()

    if (history) {
      history.listen(this.onRouteChange)
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.app}>
          <Header onMenuClick={this.toggleMenu}/>
          <Menu open={this.state.menu} onClose={this.onMenuClose}/>
          <Search/>
          <Promo/>
          <Route exact path="/" component={Home}/>
          <Route path="/c/:id" render={props => {
            return <Category key={props.match.params.id} {...props}/>
          }}/>
          <Route path="/p/:id" component={Product}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </MuiThemeProvider>
    )
  }

  onRouteChange = (location, action) => {
    this.setState({ menu: false })
  }

  onMenuClose = () => {
    this.setState({ menu: false })
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }
}

export default App
