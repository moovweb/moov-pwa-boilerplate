import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import asyncComponent from './AsyncComponent'
import Home from './home/Home'

const Product = asyncComponent(() => import('./product/Product'));
const Category = asyncComponent(() => import('./category/Category'));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/categories/1">Category</Link>
            <Link to="/products/1">Product</Link>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/categories/:id" component={Category}/>
          <Route path="/products/:id" component={Product}/>
        </div>
      </Router>
    )
  }
}

export default App
