import React, { Component } from 'react'
import { inject } from 'mobx-react'
import Container from 'moov-pwa/Container'
import Typography from 'material-ui/Typography'
import Row from 'moov-pwa/Row'
import CmsSlot from 'moov-pwa/CmsSlot'

@inject('app')
export default class Home extends Component { 

  render() {
    const { app } = this.props

    return (
      <Container> 
        <Row>
          <Typography variant="display1">{ app.title }</Typography>
        </Row>
        <Row>
          <Typography variant="subheading">
            <CmsSlot>{ app.welcomeMessage }</CmsSlot>
          </Typography>
        </Row>
      </Container> 
    )
  }

}
