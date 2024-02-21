import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [product, setProduct] = useState({
    name: "Post Your Add",
    price: 3000 * 100, // convert price to cents as required by Stripe
    productBy: "DirectHire"
  });

  const makePayment = async (token) => {
    setProduct({ ...product, token });
    const body = {
      token,
      product
    };
    const headers = {
      'Content-Type': "application/json"
    };

    try {
      const response = await fetch('http://localhost:7300/payment', {
        method: 'POST',
        body: JSON.stringify(body),
        headers
      });

      if (!response.ok) {
        throw new Error('Response failed');
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <StripeCheckout
        name={product.name}
        amount={product.price}
        currency="INR"
        token={makePayment}
        stripeKey="pk_test_51OlnnsSEjiPAppYderCZdFPNVeph6yAyaxu4ez26VKGjjOxYlxt0NMhD3wEzEH7NREKyMjRPITjZ0ycIwArfY5VT00Y4vsuLKM"
      >
        <button class="nextBtn">Payment</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;