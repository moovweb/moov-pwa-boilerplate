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
import styles from './StoreSelectionDialog.module.scss'

@inject('shop')
@observer
export default class StoreSelectionDialog extends Component {

  render() {
    const { shop, children } = this.props

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
            className={styles.input}
            value={shop.zip}
            onChange={e => shop.setZip(e.target.value)}
            placeholder="Zip Code"
            endAdornment={
              <InputAdornment position="end">
                <Search/>
              </InputAdornment>
            }
          />

          <div style={{ height: '400px', width: '300px', overflowY: 'auto' }}>
            { shop.zip.length === 0 && (
              <DialogContentText className={styles.empty}>
                Enter you zip code to see the stores in your area.
              </DialogContentText>
            )}
            <List>
              { shop.stores.map((store, i) => (
                <ListItem key={i} className={styles.listItem} button divider onClick={() => shop.setStore(store)}>
                  <div>
                    <ListItemText classes={{text: styles.name}} primary={`${store.name} (${store.distance})`}/>
                    <div>{store.street}</div>
                    <div>{store.city}</div>
                  </div>
                  <ListItemSecondaryAction className={styles.info}>
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