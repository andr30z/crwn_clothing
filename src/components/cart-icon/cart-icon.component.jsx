import { ReactComponent as ShoppingIcon } from '../../uteis/download.svg';
import React from 'react';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {SelectCartitemsCount} from '../../redux/cart/cart.selector';
import "./cart-icon.styles.scss";

//
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  itemCount: SelectCartitemsCount(state) // poderia mudar esse tambem para usar o createStructuredSelector 
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (CartIcon);