import React, { Component } from 'react'
import logo from './logo.svg'
import { Router, Route, Link } from 'react-router-dom'
import './App.css'
import asyncComponent from './AsyncComponent'
import Home from './home/Home'
import Header from './header/Header'
import Menu from './menu/Menu'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'
import createBrowserHistory from 'history/createBrowserHistory'

const Product = asyncComponent(() => import('./product/Product'))
const Category = asyncComponent(() => import('./category/Category'))
const Cart = asyncComponent(() => import('./cart/Cart'))

const title = "BBQ Guys"
const history = window.routerHistory = createBrowserHistory()

class App extends Component {

  state = {
    menu: false
  }

  constructor(props) {
    super()
    history.listen(this.onRouteChange)
  }

  render() {
    return (
      <Router history={history} onUpdate={this.onRouteChange}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Header onMenuClick={this.toggleMenu} title={title}/>
            <Menu open={this.state.menu} onClose={this.onMenuClose} title={title}/>
            <Route exact path="/" component={Home}/>
            <Route path="/categories/:id" render={props => {
              return <Category key={props.match.params.id} {...props}/>
            }}/>
            <Route path="/products/:id" component={Product}/>
            <Route path="/cart" component={Cart}/>
          </div>
        </MuiThemeProvider>
      </Router>
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