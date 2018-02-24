import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import Header from './header/Header'
import Menu from './menu/Menu'
import StoreSelectionDialog from './store/StoreSelectionDialog'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'
import styles from './App.module.scss'
import Promo from './banners/Promo'
import Search from './search/Search'
import { observer, inject } from "mobx-react"
import asyncComponent from './AsyncComponent'

// const Product = asyncComponent(() => import('./product/Product'))
// const Subcategory = asyncComponent(() => import('./subcategory/Subcategory'))
// const Category = asyncComponent(() => import('./category/Category'))
// const Cart = asyncComponent(() => import('./cart/Cart'))

import Product from './product/Product'
import Subcategory from './subcategory/Subcategory'
import Category from './category/Category'
import Cart from './cart/Cart'

@inject('shop')
@observer
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
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/c/:c1/:c2/:s" render={props => {
              const { s } = props.match.params
              return <Subcategory key={s} subcategoryId={s} {...props}/>
            }}/>
            <Route path="/c/:c1/:c2?" render={props => {
              const { c1, c2 } = props.match.params
              return <Category key={c2||c1} categoryId={c2||c1} {...props}/>
            }}/>
            <Route path="/p/:id" render={props => {
              const { id } = props.match.params
              return <Product key={id} categoryId={id} {...props}/>
            }}/>
            <Route path="/cart" component={Cart}/>
          </Switch>

          <StoreSelectionDialog/>
        </div>
      </MuiThemeProvider>
    )
  }

  onRouteChange = (location, action) => {
    window.scrollTo(0, 0)
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
