import React, { Component } from 'react'
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog'
import { inject, observer } from 'mobx-react'
import Search from 'material-ui-icons/Search'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import DialogClose from '../components/DialogClose'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Info from 'material-ui-icons/Info'
import IconButton from 'material-ui/IconButton'
import withStyles from 'material-ui/styles/withStyles'
import theme from '../theme'

const styles = {
  name: {
    color: theme.palette.text.link,
    fontWeight: 'bold'
  },

  input: {
    width: '100%'
  },
  
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  
    '& > div:first-child': {
      paddingRight: '60px'
    }
  },
  
  empty: {
    color: '#999',
    marginTop: '20px'
  },
  
  info: {
    right: '-10px'
  },
  
  scroll: {
    height: '400px',
    width: '250px',
    overflowY: 'auto'
  }
}

@withStyles(styles)
@inject('shop')
@observer
export default class StoreSelectionDialog extends Component {

  render() {
    const { shop, children, classes } = this.props

    return (
      <Dialog 
        open={shop.changeStoreDialogOpen} 
        onClose={shop.closeChangeStoreDialog}
        aria-labelledby="simple-dialog-title" 
        {...this.props}
      >
        <DialogClose onClick={shop.closeChangeStoreDialog}/>
        <DialogTitle>
          Choose a Store
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{ children }</DialogContentText>
          <Input
            className={classes.input}
            value={shop.zip}
            onChange={e => shop.setZip(e.target.value)}
            placeholder="Zip Code"
            endAdornment={
              <InputAdornment position="end">
                <Search/>
              </InputAdornment>
            }
          />

          <div className={classes.scroll}>
            { shop.zip.length === 0 && (
              <DialogContentText className={classes.empty}>
                Enter you zip code to see the stores in your area.
              </DialogContentText>
            )}
            <List>
              { shop.stores.map((store, i) => (
                <ListItem key={i} className={classes.listItem} button divider onClick={() => shop.setStore(store)}>
                  <div>
                    <ListItemText classes={{text: classes.name}} primary={`${store.name} (${store.distance})`}/>
                    <div>{store.street}</div>
                    <div>{store.city}</div>
                  </div>
                  <ListItemSecondaryAction className={classes.info}>
                    <IconButton aria-label="see store details">
                      <Info/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

}