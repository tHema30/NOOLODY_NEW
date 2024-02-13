import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:""
  });

  const { name,email,message } =
    formData;

  const handleOnChange = (e) => {
    const {name , value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your backend API
    fetch("http://localhost:7100/api/users/email", {
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
return (
    <div>
    
      <Header></Header>
      <div className="container-xxl py-6">
      <div className="container ">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px' }}>
              <h1 className="display-5 mb-3">Contact Us</h1>
              <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-5 justify-content-center ">
              <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5 twocon">
                      <h5 className="text-white">Call Us</h5>
                      <p className="mb-5"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                      <h5 className="text-white">Email Us</h5>
                      <p className="mb-5"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                      <h5 className="text-white">Office Address</h5>
                      <p className="mb-5"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
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
  <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done.</p>
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
            value={name}
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
            value={email}
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
            value={message}
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
