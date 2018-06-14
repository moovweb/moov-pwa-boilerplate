import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography'
import Container from 'moov-pwa/Container'
import { withStyles } from '@material-ui/core'

@withStyles(theme => ({
  siteName: {
    color: theme.palette.primary.main
  }
}))
@inject('app') // inject the state tree into the component's props
@observer // automatically re-render when the state-tree changes
export default class About extends Component {

  render() {
    const { app, classes } = this.props // app is an instance of AppModel, the root of the state tree.

    return (
      <Container>{/* Container provides proper margins to make things look nice */}
        <Typography variant="title" className={this.props.classes.siteName}>
          {app.about.siteName}
        </Typography>
        <Typography variant="body1">{app.about.description}</Typography>
      </Container>
    )
  }

}