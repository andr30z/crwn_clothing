import React from 'react';
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

//
const ShopPage = ({match}) => (//mathc location e history são passados automaticamente pelo appjs switch
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)


export default ShopPage;