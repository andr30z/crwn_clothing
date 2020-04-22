import React from 'react'
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";
import { SelectCartItems, SelectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
//
const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  total: SelectCartTotal
})

export default connect(mapStateToProps)(Checkout);
