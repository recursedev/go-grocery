import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const priceforStripe = price * 100;
  const publishableKey= 'pk_test_51HIpyoBKDd89KDux9kc0OHzgbMHLvpHeH1Za6vQGfIlf1lGTc08V0RKapTVAEUO3BYtoi0qdlob6hX5tlN97mRJW00gBwUNQa7'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='Go Grocery'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceforStripe}
      panelLabel
      token={onToken}
      stripeKey={publishableKey}
    />
  );

};

export default StripeCheckoutButton;