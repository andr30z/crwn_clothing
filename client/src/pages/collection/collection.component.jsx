import './collection.styles.scss';
import { connect } from 'react-redux'
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import React from 'react';

const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({//primeiro paramentro: state do redux
  // segundo: props do proprio component
  collection: selectCollection(ownProps.match.params.collectionId)(state)//está chamando o retorno do
  //selectCollection como uma função e 
  // passando o state como parametro
});



export default connect(mapStateToProps)(CollectionPage);
