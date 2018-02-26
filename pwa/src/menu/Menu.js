import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import BackIcon from 'material-ui-icons/ArrowBack'
import CloseIcon from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'
import styles from './Menu.styles.js'
import ListItemIcon from 'material-ui/List/ListItemIcon'
import { withRouter } from 'react-router-dom'
import Hbox from '../layout/Hbox'
import withStyles from 'material-ui/styles/withStyles';

@withStyles(styles)
@withRouter
@inject('shop')
@observer
export default class Menu extends Component {

  render() {
    const { shop: { menu }, open, onClose, classes } = this.props
    const { levels, level } = menu
    const width = 250;

    return (
      <Drawer open={open} onClose={onClose} classes={{ paper: classes.drawer }}>
        <Hbox>
          <div style={{ flex: 1 }}/>
          <IconButton aria-label="Close Menu" onClick={onClose} className={classes.button}>
            <CloseIcon />
          </IconButton>
        </Hbox>
        <div className={classes.menuWrap}>
          <div className={classes.hbox} style={{ transform: `translateX(${-width * level}px)` }}>
            {levels.map((item, i) => {
              return (
                <List style={{ width: `${width}px`, flex: 'none' }} key={i}>
                  {!item.root && (
                    <ListItem button onClick={() => menu.goBack()} classes={{ root: classes.header }}>
                      <ListItemIcon>
                        <BackIcon className={classes.back}/>
                      </ListItemIcon>
                      <ListItemText 
                        classes={{ root: classes.headerText }} 
                        primary={<div className={classes.headerText}>{item.text} </div>} 
                      />
                    </ListItem>
                  )}
                  {item.items && item.items.map((item, i) => (
                    <ListItem key={i} button onClick={this.onItemClick.bind(this, item, menu)}>
                      <ListItemText 
                        classes={{ root: classes.listItem }} 
                        primary={item.text} 
                        disableTypography 
                      />
                    </ListItem>
                  ))}
                </List>
              )
            })}
          </div>
        </div>
      </Drawer>
    )
  }

  componentWillMount() {
    this.props.shop.menu.load()
  }

  onItemClick = (item, menu) => {
    const { history } = this.props

    if (item.url) {
      history.push(`${item.url}?name=${encodeURIComponent(item.text)}`)
    } else {
      menu.setSelected(item)
    }
  }

}
