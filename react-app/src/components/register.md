import React, { useState } from "react";
import "../components/Tailor.css";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const TailorRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    contact: "",
    occupation: "",
    idnumber: "",
    dob: "",
    gender: "",
    address: "",
  });

  const { name, address, email, experience, contact, occupation, idnumber, dob, gender } =
    formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
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
    fetch("http://localhost:7100/users/tailors", {
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
        handleSuccess("Registration successful"); // Use handleSuccess
        navigate("/"); // Use navigate to navigate to a different route
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
        handleError("Registration failed"); // Use handleError
      });
  };
  return (
    <>
      <Header />
      <div className="App">
        <div class="container">
          <header>Registration</header>
          <form onSubmit={handleSubmit}>
            <div class="form first">
              <div class="details personal">
                <span class="title">Personal Details</span>
                <div class="fields">
                  <div class="input-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={name}
                      onChange={handleOnChange}
                      name="name"
                    />
                  </div>
                  <div class="input-field">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      placeholder="Enter birth date"
                      required
                      value={dob}
                      onChange={handleOnChange}
                      name="dob"
                    />
                  </div>
                  <div class="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={handleOnChange}
                      name="email"
                    />
                  </div>
                  <div class="input-field">
                    <label>Contact</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                      value={contact}
                      onChange={handleOnChange}
                      name="contact"
                    />
                  </div>
                  <div class="input-field">
                    <label>Gender</label>
                    <select
                      required
                      value={gender}
                      onChange={handleOnChange}
                      name="gender"
                    >
                      <option disabled selected>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div class="input-field">
                    <label>Occupation</label>
                    <input
                      type="text"
                      placeholder="Enter your ccupation"
                      required
                      value={occupation}
                      onChange={handleOnChange}
                      name="occupation"
                    />
                  </div>
                </div>
              </div>
              <div class="details ID">
                <div class="fields">
                  <div class="input-field">
                    <label>Experience</label>
                    <input
                      type="text"
                      placeholder="Enter your experience"
                      required
                      value={experience}
                      onChange={handleOnChange}
                      name="experience"
                    />
                  </div>
                  <div class="input-field">
                    <label>ID Number</label>
                    <input
                      type="number"
                      placeholder="Enter ID number"
                      required
                      value={idnumber}
                      onChange={handleOnChange}
                      name="idnumber"
                    />
                  </div>
                  <div class="input-field">
                    <label>address</label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      required
                      value={address}
                      onChange={handleOnChange}
                      name="address"
                    />
                  </div>
                  {/* <div class="input-field">
                    <label>Issued Date</label>
                    <input
                      type="date"
                      placeholder="Enter your issued date"
                      required
                      value={issuedDate}
                      onChange={handleOnChange}
                      name="issuedDate"
                    />
                  </div>
                  <div class="input-field">
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      placeholder="Enter expiry date"
                      required
                      value={expiryDate}
                      onChange={handleOnChange}
                      name="expiryDate"
                    />
                  </div> */}
                </div>
                <button class="nextBtn">
                  <span class="btnText">Submit</span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TailorRegister;