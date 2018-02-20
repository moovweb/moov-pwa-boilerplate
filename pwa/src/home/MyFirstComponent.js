import React, { Component } from 'react'

export default class MyFirstComponent extends Component {
  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}
