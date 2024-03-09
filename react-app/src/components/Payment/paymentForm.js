import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/Payment/checkoutForm';

const stripePromise = loadStripe('pk_test_51OmVkmHGq8hdLEpwCUx8jtkSfhHTkjEM8ASGiTub7o9ntjdjdEOv2MdPSCTwX0No44HmIOx7tf3E7LWb28119hkj004yCpy0HC');

const PaymentForm = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentForm;
