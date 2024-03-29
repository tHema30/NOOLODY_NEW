// import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/SignUp";


// import Header from "./components/Header";
// import Footer from "./components/Footer" 

import Contact from './components/Contact';
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AdminHome from '../src/components/Admin/AdminHome';
import './assets/css/bootstrap.min.css';
import './App.css';
import TailorRegister from "./components/TailorRegister";
import DressDesign from "./components/DressDesign";
import DressDesignList from "./components/DressDesignList";
import ServiceDetails from './components/ServiceDetails'
import AdminRoutes from "./components/Admin/AdminRoutes";
import Payment from "./components/Payment/Payment";
import OrderOne from "./components/Booking/OrderOne";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import OrderHistory from "./components/OrderHistory";
import Success from "./components/Payment/Success";




function App() {

  return (
     <div>
      {/* <Header/> */}
      <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/features" element={<Features/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/tailorregister" element={<TailorRegister/>} />
    <Route path="/dress" element={<DressDesign/>} />
    <Route path="/admin/*" element={<AdminRoutes><AdminHome/></AdminRoutes>} />
    <Route path="/dresscard/:category" element={<DressDesignList />} />
    <Route path="/service" element={<ServiceDetails />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/orderone" element={<OrderOne />} /> 
    <Route path="/orderhistory" element={<OrderHistory/>} />
    <Route path="/success" element={<Success/>} />


  </Routes>
    {/* <Footer/> */}

  </div>
  
  );
}

export default App;

