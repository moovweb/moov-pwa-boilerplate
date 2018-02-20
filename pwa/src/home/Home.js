import React, { Component } from 'react'
import MyFirstComponent from './MyFirstComponent'
import MyStatelessComponent from './MyStatelessComponent'

export default class Home extends Component {

  state = {}

  onTextChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <MyFirstComponent message={this.state.text}/>
        <MyStatelessComponent message={this.state.text}/>
        <input type="text" onChange={this.onTextChange} value={this.state.text}/>
      </div>
    )
  }
}