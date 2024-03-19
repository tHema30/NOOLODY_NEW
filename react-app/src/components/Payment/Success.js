import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import '../Payment/success.css'

const Success = () => {
  return (
    <>
      <Header />
      <div className="success-container05">
        <div className="success-content05">
          <h2>Payment Successful</h2>
          <p>Your order might take some time to process.</p>
          <p>Check your order status After 24 hours.</p>
          <p>
            In case of any inquiries, <a href="./contact">Contact Us</a>
            <br />
            <Link className="dad " type="buttondad" to='/'>Ok</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
