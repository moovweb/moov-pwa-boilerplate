import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from 'moov-pwa/Container'
import Row from 'moov-pwa/Row'
import Redbox from 'moov-pwa/Redbox'

export default class ErrorPage extends Component {

  render() {
    if (process.env.MOOV_ENV === 'production') {
      // In production we return a generic, user-friendlt error page that hides the underlying message and stacktrack
      return (
        <Container>
          <Row>
            <Typography variant="title">Error</Typography>
          </Row>
          <Row>
            <Typography>An unknown error occurred while attempting to process your request.  Please try again later.</Typography>
          </Row>
        </Container>
      )
    } else {
      // In development, we display moov-pwa/Redbox to help with debugging
      return <Redbox/>
    }
  }

}
