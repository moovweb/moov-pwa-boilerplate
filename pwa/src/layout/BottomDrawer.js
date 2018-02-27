import React from 'react'
import Card from 'material-ui/Card'
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  main: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '10px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      flex: 1
    }
  }  
}

export default withStyles(styles)(function BottomDrawer({ classes, children }) {
  return (
    <Card className={classes.main}>
      {children}
    </Card>
  )
})