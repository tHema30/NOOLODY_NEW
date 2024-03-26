// orderTwo.js
import React , { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header";


// import '../Booking/OrderTwo.css'; // Import your custom CSS file


import StripeCheckout from 'react-stripe-checkout';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const OrderTwo = () => {
  const [product, setProduct] = useState({
    name: "Order payment",
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
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/payment`, {
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
    <>
    <Header/>
 
    <div className="container">
      <div className="title">
        <h2>Stitching Order Form</h2>
      </div>
      <div className="d-flex">
        <form action="" method="">
          <label>
            <span className="fname">First Name <span className="required">*</span></span>
            <input type="text" name="fname" />
          </label>
          <label>
            <span className="lname">Last Name <span className="required">*</span></span>
            <input type="text" name="lname" />
          </label>
          <label>
            <span>Street Address <span className="required">*</span></span>
            <input type="text" name="houseadd" placeholder="House number and street name" required />
          </label>
          <label>
            <span>Town / City <span className="required">*</span></span>
            <input type="text" name="city" />
          </label>
          <label>
            <span>Postcode / ZIP <span className="required">*</span></span>
            <input type="text" name="postcode" />
          </label>
          <label>
            <span>Phone <span className="required">*</span></span>
            <input type="tel" name="phone" />
          </label>
          <label>
            <span className="lname">Style</span>
            <input type="file" id="myFile" name="filename" />
          </label>
        </form>
        <div className="Yorder"> {/* Add className to the wrapping div */}
      <div>
        <input type="radio" name="dbt" value="dbt" checked /> Direct Bank Transfer
      </div>
      <p>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
      </p>
      <div>
        <input type="radio" name="dbt" value="cd" /> Cash on Delivery
      </div>
      <div>
        <Link to='/payment'>
          {/* Move the StripeCheckout component inside the Link */}
          <StripeCheckout
            name={product.name}
            amount={product.price}
            currency="inr"
            token={makePayment}
            stripeKey="pk_test_51OmVkmHGq8hdLEpwCUx8jtkSfhHTkjEM8ASGiTub7o9ntjdjdEOv2MdPSCTwX0No44HmIOx7tf3E7LWb28119hkj004yCpy0HC"
          >
            {/* <button className="payment-button"></button> */}
          </StripeCheckout>
        </Link>
        <span>
          {/* <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" /> */}
        </span>
      </div>
      <button type="button">Place Order</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default OrderTwo;
