import React from 'react'
import ArrowRight from 'material-ui-icons/KeyboardArrowRight'
import { Link } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  breadcrumbs: {
    fontSize: '11px',
    margin: '10px 0',
  
    '& a': {
      fontWeight: 'bold',
    }
  },
  
  separator: {
    height: '12px',
    position: 'relative',
    top: '3px',
    width: '16px'
  }
}

export default withStyles(styles)(function Breadcrumbs({ items = [], current, classes }) {
  return (
    <div className={classes.breadcrumbs}>
      { items.map((item, i) => (
        <span key={i}><Link to={item.url}>{item.text}</Link><ArrowRight className={classes.separator}/></span>
      ))}
      <span>{current}</span>
    </div>
  )
})