import React, { Component } from 'react'
import { inject } from 'mobx-react'
import Container from 'moov-pwa/Container'
import Typography from '@material-ui/core/Typography'
import Row from 'moov-pwa/Row'
import CmsSlot from 'moov-pwa/CmsSlot'
import withAmp from 'moov-pwa/amp/withAmp'
import Link from 'moov-pwa/Link'
import Page from 'moov-pwa/Page'

@withAmp
@inject('app')
export default class Home extends Component { 

  render() {
    const { app } = this.props

    return (
      <Page type="Home">
        <Container> 
          <Row>
            <Typography variant="display1">Moov PWA</Typography>
          </Row>
          <Row>
            <Typography variant="subheading">
              <CmsSlot>{ app.welcomeMessage }</CmsSlot>
            </Typography>
          </Row>
          <Row>
            <Typography>Want to reuse your PWA header and menu in adapt pages?  <Link server to="/financial">Here's an example</Link>.</Typography>
          </Row>
        </Container> 
      </Page>
    )
  }

}
