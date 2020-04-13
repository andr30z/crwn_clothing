import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import Sign from './pages/sign/sign.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../src/redux/user/user.action';
import { SelectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from './redux/shop/shop.selector';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route component={Checkout} exact path="/checkout" />
          <Route render={() =>
            this.props.currentUser ?
              <Redirect to="/" />
              :
              <Sign />
          } path="/signin" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
