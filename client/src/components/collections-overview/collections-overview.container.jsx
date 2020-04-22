import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from "../with-spinner/with-spinner.component";

import CollectionsOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const collectionsOverviewContainer = compose(connect(mapStateToProps)
,WithSpinner)(CollectionsOverview);
//currying de funções. é a mesma coisa de: connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default collectionsOverviewContainer;