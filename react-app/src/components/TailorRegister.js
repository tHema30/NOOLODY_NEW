import React, { useState } from "react";
import "../components/Tailor.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";



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

  const {
    name,
    address,
    email,
    experience,
    contact,
    occupation,
    idnumber,
    dob,
    gender,
  } = formData;

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
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: "red", color: "white" },
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: "green", color: "white" },
    });
  };

  const validateForm = () => {
    if (
      !name ||
      !emailIsValid(email) ||
      !experience ||
      !contactIsValid(contact) ||
      !occupation ||
      !idNumberIsValid(idnumber) ||
      !dob ||
      !gender ||
      !address
    ) {
      handleError("Please fill in all fields with valid data");
      return false;
    }

    return true;
  };

  const emailIsValid = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const contactIsValid = (contact) => {
    // Use a regular expression for basic phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(contact);
  };

  const idNumberIsValid = (idNumber) => {
    // Use a regular expression for basic ID number validation
    const idNumberRegex = /^\d+$/;
    return idNumberRegex.test(idNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send a POST request to your backend API
      fetch("http://localhost:7100/api/users/tailors", {
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
          handleSuccess("Registration successful");
          navigate("/"); // Use navigate to navigate to a different route
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
          handleError("Registration failed");
        });
    }
  };


  return (
    <>
      <Header />
      <div className="App">
        <div class="container">
          <header>Tailor Registration</header>
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
      <Footer/>
    </>
  );
};

export default TailorRegister;