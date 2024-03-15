import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';



const Success = () => {
  return (
    <>
    <Header/>
<div>
<div className="container" style={{height:"40vh"}} >
      <h2>Payment Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status After 24 hours.</p>
      <p>
        Incase of any inqueries
        <a href="./contact">Contact Us</a>
        <br/>
        <Link  className="btn btn-outline-dark" type="button" to='/' >Ok</Link>
      </p>
</div>
</div>
<Footer/>
</>
  );
};
export default Success;