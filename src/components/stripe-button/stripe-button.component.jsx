import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_5Gw4e0xEUXMGT8SamguqD3KH00PFLOdmas";

  const onToken = (token) => {
    console.log(token);
    alert('Sucesso!')
  }
  return (

    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
