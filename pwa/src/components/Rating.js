import React from 'react'
import Star from 'material-ui-icons/Star'
import StarBorder from 'material-ui-icons/StarBorder'
import StarHalf from 'material-ui-icons/StarHalf'
import styles from './Rating.styles'
import withStyles from 'material-ui/styles/withStyles';

export default withStyles(styles)(function Rating({classes, value}) {
  let stars = []
  
  for (let i=1; i<=5; i++) {
    if (value >= i) {
      stars.push(<Star key={i}/>)
    } else if (value >= i - 0.5) {
      stars.push(<StarHalf key={i}/>)
    } else {
      stars.push(<StarBorder key={i}/>)
    }
  }

  return <div className={classes.root}>{stars}</div>
})