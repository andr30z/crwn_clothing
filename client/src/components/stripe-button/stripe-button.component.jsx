import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';


const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_5Gw4e0xEUXMGT8SamguqD3KH00PFLOdmas";

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token
      }
    }).then(res => {
      alert('Pagamento realizado com sucesso');
    }).catch(error => {
      console.log(JSON.parse(error));
      alert('Cartão de credito não reconhecido!');
    });;
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
