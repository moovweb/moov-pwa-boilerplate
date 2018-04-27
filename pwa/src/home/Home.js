import React, { Component } from 'react'
import Container from 'moov-pwa-components/Container'
import { inject } from 'mobx-react'
import UserModelBase from 'moov-pwa-components/model/UserModelBase'
import PromoBanner from 'moov-pwa-components/PromoBanner'
import analytics from 'moov-pwa-components/analytics'

@inject('app')
export default class Home extends Component { 

  render() {
    return (
      <div>
        <PromoBanner href="/promo" src="https://pwa.www.1800flowers.com/images/bday.jpg" name="my_promo"/>

        <Container>
          Home
          <button type="button" onClick={this.signIn}>Sign In</button>
        </Container> 
      </div>
    )
  }

  signIn = () => {
    analytics.signedIn(UserModelBase.create({ email: 'foo@bar.com' }))
  }

}
