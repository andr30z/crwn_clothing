import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import collectionsOverviewContainer
  from "../../components/collections-overview/collections-overview.container";
import collectionsPageContainer from "../collection/collection.container";
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//
const ShopPage = ({ match, fetchCollectionStart }) => {
  // componentDidMount() {
  //   const { fetchCollectionStart } = this.props;
  //   fetchCollectionStart();
  //codigo antes do redux-thunk
  // const collectionRef = firestore.collection('collections');
  // //sempre que este componente for montado ou quando a collectionRef ter um update 
  // //esse collectionRef vai mandar um snapshot representando o codigo das coleções de objetos de
  // //quando esse codigo for renderizado
  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({
  //     isLoading: false
  //   });
  // });

  // }

  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  //match location e history são passados automaticamente pelo appjs switch
  // const { match } = this.props;
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={collectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={collectionsPageContainer} />
    </div>
  );
}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  null,
  mapDispatchToProps)(ShopPage);