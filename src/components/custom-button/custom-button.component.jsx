import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...outrasProps }) => (
  <button className={
    `${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sing-in' : ''} custom-button`}
    {...outrasProps}>
    {children}
  </button>
)

export default CustomButton;
