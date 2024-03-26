import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';



const buttonStyle = {
  marginRight: "15px",
  padding:"5px"
};

const Payment = () => {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const design =JSON.parse(localStorage.getItem('order'));

  // const [product, setProduct] = useState({
  //   name: "Order payment",
  //   price: 0, // Initial price set to 0
  //   productBy: "Noolody"
  // });

  // const [customAmount, setCustomAmount] = useState(""); // State to store custom amount input

  // const handleAmountChange = (e) => {
  //   const amount = parseFloat(e.target.value) * 100; // Convert to cents
  //   setProduct({ ...product, price: amount });
  //   setCustomAmount(e.target.value);
  // };

  const makePayment = async (token) => {

    const body = {
      token,
      design,
      info

    };
    const headers = {
      'Content-Type': "application/json"
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/payment`, {
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
      {/* <label style={buttonStyle}>
        Enter custom amount:
        <input
          type="number"
          value={customAmount}
          onChange={handleAmountChange}
          
       
        />
      </label> */}

      <StripeCheckout
        name={design.name}
        amount={design.price * 100
        }
        currency="lkr"
        token={makePayment}
        stripeKey="pk_test_51OmVkmHGq8hdLEpwCUx8jtkSfhHTkjEM8ASGiTub7o9ntjdjdEOv2MdPSCTwX0No44HmIOx7tf3E7LWb28119hkj004yCpy0HC"
      >
        <button style={{width:'20%'}}>Pay {design.price } LKR</button>
        
      </StripeCheckout>
    </div>
  );
};

export default Payment;
