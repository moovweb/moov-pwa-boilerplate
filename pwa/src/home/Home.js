import React, { Component } from 'react'
import styles from './Home.module.scss'
import PinDrop from 'material-ui-icons/PinDrop'
import Rating from '../components/Rating'
import Hbox from '../layout/Hbox'
import Button from 'material-ui/Button'
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'
import Plus from 'material-ui-icons/Add'
import Message from 'material-ui-icons/Comment'
import Email from 'material-ui-icons/Email'
import { inject, observer } from 'mobx-react'

@inject('shop')
@observer
export default class Home extends Component {
  render() {
    const { shop } = this.props

    return (
      <div>
        <div className={styles.store}>
          <PinDrop className={styles.pindrop}/>
          Pep Boys { shop.store.name }
          <Rating value={shop.store.rating}/>
          <a onClick={() => shop.openChangeStoreDialog()}>Change Store</a>
        </div>
        <img alt="ad" className={styles.fullWidth} src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fnovember_2015%2F23233_New_Mobile_HP_Assets_640x400_Store_Pickup.jpg&linkEncoded=0&quality=70"/>
        <img alt="ad" className={styles.fullWidth} src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Ffebruary_2018%2F26887_2C_MMJ25_Instant_MC_REF.jpg&linkEncoded=0&quality=70"/>

        <div className={styles.buttons}>
          <Hbox>
            <Button className={styles.button} raised>Find a Store</Button>
            <Button className={styles.button} raised>Make Appointment</Button>
          </Hbox>
          <Hbox>
            <Button className={styles.button} raised>Shop Tires</Button>
            <Button className={styles.button} raised>Shop Parts</Button>
          </Hbox>
          <Hbox className={styles.tiles}>
            <div className={styles.tile}>
              <img alt="tires" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fnovember_2015%2F23231_Catgoryboxes_318X320_FINAL-1.jpg&linkEncoded=0&quality=70"/>
              <div>Tires <KeyboardArrowRight/></div>
            </div>
            <div className={styles.tile}>
              <img alt="accessories" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fnovember_2015%2F23231_Catgoryboxes_318X320_FINAL-2.jpg&linkEncoded=0&quality=70"/>
              <div>Accessories <KeyboardArrowRight/></div>
            </div>
            <div className={styles.tile}>
              <img alt="batteries" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fmarch_2017%2FChampion-Automotive-Battery-mobile.png&linkEncoded=0&quality=70"/>
              <div>Batteries <KeyboardArrowRight/></div>
            </div>
            <div className={styles.tile}>
              <img alt="brakes" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fmarch_2017%2Fwagner_oex_brakes_mobile.png&linkEncoded=0&quality=70"/>
              <div>Brakes <KeyboardArrowRight/></div>
            </div>
            <div className={styles.tile}>
              <img alt="oils and fluids" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fnovember_2015%2F23231_Catgoryboxes_318X320_FINAL-5.jpg&linkEncoded=0&quality=70"/>
              <div>Oils &amp; Fluids <KeyboardArrowRight/></div>
            </div>
            <div className={styles.tile}>
              <img alt="weekly add" src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fmarch_2017%2FweeklyAd.jpg&linkEncoded=0&quality=70"/>
              <div>Weekly Add <KeyboardArrowRight/></div>
            </div>
          </Hbox>
        </div>

        <div>
          <div className={styles.expander}>
            <Plus/> Service &amp; Repair
          </div>
          <div className={styles.expander}>
            <Plus/> Tires
          </div>
          <div className={styles.expander}>
            <Plus/> Products
          </div>
          <div className={styles.expander}>
            <Plus/> Savings
          </div>
        </div>

        <img alt="ad" className={styles.fullWidth} src="//opt2.moovweb.net/img?img=https%3A%2F%2Fstatic.pepboys.com%2Fimages%2Fpromotions%2Fnovember_2015%2F23231_Mobile-Site_REWARDS_640X200_FINAL.png&linkEncoded=0&quality=70"/>

        <Hbox className={styles.signUp}>
          <div>
            <Email/>
            <div>Sign Up for Email</div>
          </div>
          <div>
            <Message/>
            <div>Sign Up for Text Alerts</div>
          </div>
        </Hbox>

        <div className={styles.call}>
          <div>Customer Services/Towing</div>
          <div className={styles.tel}>1-800-PEP-BOYS (737-2697)</div>
        </div>
      </div>
    )
  }
}