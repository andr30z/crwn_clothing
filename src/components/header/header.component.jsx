import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from './header.styles';
import { ReactComponent as Logo } from '../../uteis/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from 'reselect';
import { SelectCartHidden } from '../../redux/cart/cart.selector';
import { SelectCurrentUser } from '../../redux/user/user.selector';


//
const Header = ({ currentUser, hidden }) => {
  return (//retornar codigos JSX
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink className='option' to="/shop">
          SHOP
        </OptionLink>
        <OptionLink className='option' to='/shop'>
          CONTATO
        </OptionLink>
        {
          currentUser ?
            <OptionDiv className="option" onClick={() => auth.signOut()}>SAIR</OptionDiv>
            :
            <OptionLink className="option" to="/signin">ENTRAR</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ?
          null
          :
          <CartDropdown />
      }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  hidden: SelectCartHidden
})

export default connect(mapStateToProps)(Header);
