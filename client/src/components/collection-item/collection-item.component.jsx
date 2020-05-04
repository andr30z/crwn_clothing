import './collection-item.styles.scss';
import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from '../../redux/cart/cart.action';
//
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ background: `url(${imageUrl})`, backgroundSize:'cover',
        backgroundPosition: 'center'}}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
       className="custom-button"
       onClick={() => addItem(item)} inverted>Adicione ao carrinho</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
