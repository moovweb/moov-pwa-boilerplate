import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles';

const styles = {
  subcategory: {
    listStyleType: 'none',
    fontSize: '13px'
  },
  name: {
    marginTop: '5px'
  }
}

export default withStyles(styles)(function SubcategoryItem({ subcategory, classes }) {
  return (
    <li className={classes.subcategory}>
      <Link to={subcategory.url}>
        <img alt="category" src={subcategory.image}/>
        <div className={classes.name}>{subcategory.name}</div>
      </Link>
    </li>
  )
})
