import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';



const buttonStyle = {
  marginRight: "15px",
  padding:"5px"
};

const Payment = () => {
  const [product, setProduct] = useState({
    name: "Order payment",
    price: 0, // Initial price set to 0
    productBy: "Noolody"
  });

  const [customAmount, setCustomAmount] = useState(""); // State to store custom amount input

  const handleAmountChange = (e) => {
    const amount = parseFloat(e.target.value) * 100; // Convert to cents
    setProduct({ ...product, price: amount });
    setCustomAmount(e.target.value);
  };

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
      console.log(response);
      // if (!response.ok) {
      //   throw new Error('Response failed');
      // }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label style={buttonStyle}>
        Enter custom amount:
        <input
          type="number"
          value={customAmount}
          onChange={handleAmountChange}
          
       
        />
      </label>

      <StripeCheckout
        name={product.name}
        amount={product.price}
        currency="inr"
        token={makePayment}
        stripeKey="pk_test_51OmVkmHGq8hdLEpwCUx8jtkSfhHTkjEM8ASGiTub7o9ntjdjdEOv2MdPSCTwX0No44HmIOx7tf3E7LWb28119hkj004yCpy0HC"
      >
        <button style={{width:'20%'}}>Pay {product.price / 100} INR</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
