import React, { Component } from 'react'
import { inject } from 'mobx-react'
import Container from 'moov-pwa/Container'
import Typography from 'material-ui/Typography'

@inject('app')
export default class Home extends Component { 

  render() {
    const { app } = this.props

    return (
      <Container> 
        <Typography variant="title">{ app.title }</Typography>
      </Container> 
    )
  }

}
