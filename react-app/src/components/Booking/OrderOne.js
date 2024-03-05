import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Booking/OrderOnee.css';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';

function OrderOne() {
  const [currentContainer, setCurrentContainer] = useState(1);
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
  });
  const [orderDetails, setOrderDetails] = useState({
    preferredDate: '',
    preferredTime: '',
    material: '',
    orderDetails: '',
  });
  const [stitchingDetails, setStitchingDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    postcode: '',
    phone: '',
    paymentMethod: '',
  });
  const [image, setImage] = useState(null);

  const handleMeasurementsChange = (e) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrderDetailsChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleStitchingDetailsChange = (e) => {
    setStitchingDetails({
      ...stitchingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextButtonClick = () => {
    setCurrentContainer(currentContainer + 1);
  };

  const handlePreviewButtonClick = () => {
      setCurrentContainer(currentContainer - 1);
  
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePlaceOrder = async () => {
    try {
      const formData = new FormData();
      formData.append('measurements', JSON.stringify(measurements));
      formData.append('orderDetails', JSON.stringify(orderDetails));
      formData.append('stitchingDetails', JSON.stringify(stitchingDetails));
      if (image) {
        formData.append('image', image);
      }

      // Send form data to the backend
      const response = await axios.post('http://localhost:7300/orders/create', formData);

      if (response.status === 201) {
        console.log('Form data submitted successfully');
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error while submitting form data', error);
    }
  };
  
  return (
    <>
    <Header/>
    <div>
      {currentContainer === 1 && (
        <div className="container-tail">
          <h2 className="text-center">Tailor's Order Form</h2>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="form-part">
                <h3>Measurements and Sizes</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="chest">Chest:</label>
                    <input type="text" className="form-control" id="chest" name="chest" placeholder="Enter chest size" value={measurements.chest} onChange={handleMeasurementsChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="waist">Waist:</label>
                    <input type="text" className="form-control" id="waist" name="waist" placeholder="Enter waist size" value={measurements.waist} onChange={handleMeasurementsChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hips">Hips:</label>
                    <input type="text" className="form-control" id="hips" name="hips" placeholder="Enter hips size" value={measurements.hips} onChange={handleMeasurementsChange} />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-part">
                <h3>Order Details</h3>
                <form>
                  <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Appointment Date:</label>
                    <input type="date" className="form-control" id="preferredDate" name="preferredDate" placeholder="Enter material" value={orderDetails.preferredDate} onChange={handleOrderDetailsChange} />

                    <label htmlFor="preferredTime">Preferred Appointment Time:</label>
                    <input type="time" className="form-control" id="preferredTime" name="preferredTime" placeholder="Enter material" value={orderDetails.preferredTime} onChange={handleOrderDetailsChange} />
                          </div>
                  <div className="form-group">
                    <label htmlFor="material">Material:</label>
                    <input type="text" className="form-control" id="material" name="material" placeholder="Enter material" value={orderDetails.material} onChange={handleOrderDetailsChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="orderDetails">Order Details:</label>
                    <input type="text" className="form-control" id="orderDetails" name="orderDetails" placeholder="Enter order details" value={orderDetails.orderDetails} onChange={handleOrderDetailsChange} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-12 next">
              <button className="btn btn-success tailor" onClick={handleNextButtonClick}>Next</button>
            </div>
          </div>
        </div>
      )}
      {currentContainer === 2 && (
        <div className="container-pay">
          <div className="title">
            <h2>Stitching Order Form</h2>
          </div>
          <div className="d-flex">
            <form action="" method="">
              <label>
                <span className="fname">First Name <span className="required">*</span></span>
                <input type="text" name="firstName" value={stitchingDetails.firstName} onChange={handleStitchingDetailsChange} />
              </label>
              <label>
                <span className="lname">Last Name <span className="required">*</span></span>
                <input type="text" name="lastName" value={stitchingDetails.lastName} onChange={handleStitchingDetailsChange} />
              </label>
              <label>
                <span>Street Address <span className="required">*</span></span>
                <input type="text" name="streetAddress" placeholder="House number and street name" required value={stitchingDetails.streetAddress} onChange={handleStitchingDetailsChange} />
              </label>
              <label>
                <span>Town / City <span className="required">*</span></span>
                <input type="text" name="city" value={stitchingDetails.city} onChange={handleStitchingDetailsChange} />
              </label>
              <label>
                <span>Postcode / ZIP <span className="required">*</span></span>
                <input type="text" name="postcode" value={stitchingDetails.postcode} onChange={handleStitchingDetailsChange} />
              </label>
              <label>
                <span>Phone <span className="required">*</span></span>
                <input type="tel" name="phone" value={stitchingDetails.phone} onChange={handleStitchingDetailsChange} />
              </label>
            
              <label htmlFor="style">Design Image:</label>
              <input type="file" id="" onChange={handleImageChange} accept="image/*" required />
            </form>
            <div className="Yorder">
              <div>
                <input type="radio" name="paymentMethod" value="dbt" checked={stitchingDetails.paymentMethod === "dbt"} onChange={handleStitchingDetailsChange} /> Direct Bank Transfer
              </div>
              <p>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div>
                <input type="radio" name="paymentMethod" value="cd" checked={stitchingDetails.paymentMethod === "cd"} onChange={handleStitchingDetailsChange} /> Cash on Delivery
              </div>
              <div>
                <Link to='/payment'>
                <input type="radio" name="paymentMethod" value="stripe" checked={stitchingDetails.paymentMethod === "stripe"} onChange={handleStitchingDetailsChange} /> Stripe <span>
                  <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                </span></Link>
              </div>
              <Link to='/orderone'>
              <button type="button"onClick= {handlePlaceOrder}>Place Order</button></Link>
              <button type="button" onClick={handlePreviewButtonClick}>Preview</button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};
export default OrderOne;