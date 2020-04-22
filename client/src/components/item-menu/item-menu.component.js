import React from 'react';
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";
const ItemMenu = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} item-menu`} 
    onClick={()=>history.push(`${match.url}${linkUrl}`)}  
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='conteudo'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>

)

export default withRouter(ItemMenu);