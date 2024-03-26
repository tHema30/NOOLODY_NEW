import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "top-center",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // If all validations pass, you can proceed with form submission
    console.log('Form submitted!', formData);

    // Clear form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Send a POST request to your backend API
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        handleSuccess(" successful"); // Use handleSuccess
        navigate("/"); // Use navigate to navigate to a different route
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
        handleError(" failed"); // Use handleError
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <div className="container-xxl py-6">
        <div className="container ">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px' }}>
            <h1 className="display-5 mb-3">Contact Us</h1>
            <p>Contact us – Have any questions or concerns ? We’re always ready to help!.</p>
          </div>
          <div className="row g-5 justify-content-center ">
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5 twocon">
                <h5 className="text-white">Call Us</h5>
                <p className="mb-5"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <h5 className="text-white">Email Us</h5>
                <p className="mb-5"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <h5 className="text-white">Office Address</h5>
                <p className="mb-5"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Jaffna,Sri Lanka </p>
                <h5 className="text-white">Follow Us</h5>
                <div className="d-flex pt-2">
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">“Don’t go searching for the perfect fit. Our Tailor Designer expert will come to your home for free Pickup and Delivery.”</p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        classNameName="form-control"
                        id="name"
                        placeholder="Your Name"
                        style={{ "width":"690px" }}
                        value={formData.name}
                        onChange={handleOnChange}
                        name="name"
                      />
                      {/* <label htmlFor="name">Your Name</label> */}
                    </div>
                  </div>
                  <div classNameName="col-md-6">
                    <div classNameName="form-floating">
                      <input
                        type="email"
                        classNameName="form-control"
                        id="email"
                        style={{ "width":"690px" }}
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleOnChange}
                        name="email"
                      />
                      {/* <label htmlFor="email">Your Email</label> */}
                    </div>
                  </div>
                  <div classNameName="col-12">
                    <div classNameName="form-floating">
                      <textarea
                        classNameName="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ "height": "200px", "width":"690px" }}
                        value={formData.message}
                        onChange={handleOnChange}
                        name="message"
                      ></textarea>
                      {/* <label htmlFor="message">Message</label> */}
                    </div>
                  </div>
                  <div className
                  Name="col-12">
                    <button className="nextBtn">
                      <span className="btnText">Submit</span>
                      <i className="uil uil-navigator"></i>
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default Contact;