import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
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
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className="logo" />
      </Link>
      <div className='options'>
        <Link className='option' to="/shop">
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTATO
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SAIR</div>
            :
            <Link className="option" to="/signin">ENTRAR</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ?
          null
          :
          <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  hidden: SelectCartHidden
})

export default connect(mapStateToProps)(Header);
