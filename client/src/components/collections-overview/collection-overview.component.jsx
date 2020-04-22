import React from 'react'
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import CollectionPreview from "../preview-collection/preview-collection.component";
//
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...outrasProps }) => (
        <CollectionPreview key={id} {...outrasProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
