import React, { Component } from 'react'
import styles from './Search.styles.js'
import withStyles from 'material-ui/styles/withStyles';

@withStyles(styles)
export default class Search extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.search}>
        <input placeholder="What brings you here today?"/>
        <div className={classes.icon}/>
      </div>
    )
  }
}