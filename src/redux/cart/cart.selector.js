import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const SelectCartTotal = createSelector(
  [SelectCartItems], //se chamado assim: SelectCartitemsCount(state), a função irá para SelectCartItems
  cartItems =>// que então irá para selectCart que referencia o state,
    cartItems.reduce((quantidadeAcumulada, cartItem) => // puxará de volta o estado que referencia o cart.
      quantidadeAcumulada + cartItem.quantity * cartItem.price
      , 0)
)

export const SelectCartitemsCount = createSelector(
  [SelectCartItems], //se chamado assim: SelectCartitemsCount(state), a função irá para SelectCartItems
  cartItems =>// que então irá para selectCart que referencia o state, puxará de volta o estado que referencia o cart.
    cartItems.reduce((quantidadeAcumulada, cartItem) => quantidadeAcumulada + cartItem.quantity
      , 0)
)