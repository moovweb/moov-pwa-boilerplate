import React, { Component } from 'react'
import styles from './Promo.styles.js'
import withStyles from 'material-ui/styles/withStyles'

@withStyles(styles)
export default class Promo extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.promo}>
        <img alt="promo" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Ffebruary_2018%2F26887_2C_MMJ25_Instant_GB_REF1.jpg&linkEncoded=0&quality=70"/>
      </div>
    )
  }
}