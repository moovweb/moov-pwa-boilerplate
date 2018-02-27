import React from 'react'
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  root: {
    margin: '0 10px'
  }
}

export default withStyles(styles)(function Container({ 
  className, 
  classes, 
  children, 
  ...rest 
}) {
  return <div className={`${classes.root} ${className}`} {...rest}>{children}</div>
})