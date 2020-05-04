import React, { lazy, useEffect, Suspense } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import { GlobalStyles } from './global.styles';
import { connect } from 'react-redux';
import { checkUserSession } from "./redux/user/user.action";
import { SelectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const Sign = lazy(() => import('./pages/sign/sign.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // unsubscribeFromAuth = null

  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // const { setCurrentUser } = this.props;

  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()
  //       });
  //     });
  //     }

  //   setCurrentUser(userAuth);
  // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));

  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact component={HomePage} path="/" />
            <Route component={ShopPage} path="/shop" />
            <Route component={Checkout} exact path="/checkout" />
            <Route render={() =>
              currentUser ?
                <Redirect to="/" />
                :
                <Sign />
            } path="/signin" />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
