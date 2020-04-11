import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { SelectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { withRouter } from "react-router-dom";

//history vem do withRouter
//dispatch vem do mapStateToProps
const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? //0 é false segundo o javascript...
            (cartItems.map(item => <CartItem key={item.id} item={item} />))
            :
            (<span className="empty-message">SEU CARRINHO ESTÁ VAZIO</span>)

        }
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden())
        history.push('/checkout')
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({//garante que o state não referente a esta instancia do estado será chaamdo toda hora
  cartItems: SelectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
