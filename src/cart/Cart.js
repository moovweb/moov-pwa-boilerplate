import { observer, inject } from "mobx-react"
import React, { Component } from 'react'

@inject('shop')
@observer
export default class Cart extends Component {
  render() {
    const { shop: { cart } } = this.props

    return (
      <section className="Page-cart">
        <h2>Your cart</h2>
        <section className="Page-cart-items">
          {cart.entries.map(entry => <CartEntry key={entry.product.id} entry={entry} />)}
        </section>
        <p>Subtotal: {cart.subTotal} €</p>
        {cart.hasDiscount && (
          <p>
            <i>Large order discount: {cart.discount} €</i>
          </p>
        )}
        <p>
          <b>Total: {cart.total} €</b>
        </p>
        <button disabled={!cart.canCheckout} onClick={() => cart.checkout()}>
          Submit order
        </button>
      </section>
    )
  }
}

@inject("shop")
@observer
class CartEntry extends Component {
  render() {
    const { shop, entry } = this.props

    return (
      <div className="Page-cart-item">
        <p>
          <a href={`/product/${entry.product.id}`} onClick={onEntryClick.bind(entry, shop)}>
            {entry.product.name}
          </a>
        </p>
        {!entry.product.isAvailable && (
          <p>
            <b>Not available anymore</b>
          </p>
        )}
        <div className="Page-cart-item-details">
          <p>
            Amount:
                    <input
              value={entry.quantity}
              onChange={updateEntryQuantity.bind(null, entry)}
            />
            total: <b>{entry.price} €</b>
          </p>
        </div>
      </div>
    )
  }
}

function onEntryClick(shop, e) {
  shop.view.openproductPage(this.product)
  e.preventDefault()
  return false
}

function updateEntryQuantity(entry, e) {
  if (e.target.value) entry.setQuantity(parseInt(e.target.value, 10))
}