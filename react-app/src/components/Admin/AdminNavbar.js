// AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import  '../Admin/admin.css'
import '../Admin/User.js'
import '../Admin/TailorDetails.js'
import '../Admin/DressDesignDetails.js'
import '../Admin/Dashboard.js'
import logo from '../../assets/img/Noolody2.png'

const AdminNavbar = () => {


  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:7300/api/users/logout', {
        method: 'POST', 
        credentials: 'include', // include cookies in the request
      });

      
      if (response.ok) {
        // You can redirect or perform other actions after successful logout
        console.log('User logged out');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };










  return (
    <nav className="navbar navbar-expand-lg navadmin " >
      {/* <Link className="navbar-brand" to="/admin"> */}
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          height="60"
        />
      </Link>
        {/* Admin Dashboard */}
      {/* </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav md-auto " style={{marginLeft:"450px"}}>
        <li className="nav-item"  style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/">
             DashBoard
            </Link>
          </li>
          <li className="nav-item"  style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/users">
              Users
            </Link>
          </li>
          <li className="nav-item"style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/tailors" >
              Tailors
            </Link>
          </li>
          <li className="nav-item"style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/orders" >
              Orders
            </Link>
          </li>
          <li className="nav-item"style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/designs" >
              Designs
            </Link>
          </li>
          <li className="nav-item"style={{marginLeft: "10px", marginRight:"10px"}}>
            <Link to="/admin/service" >
              Services
            </Link>
          </li>
          <li className="dashnavbtn"style={{marginLeft: "450px", marginRight:"10px",}}>
           <Link to="/home">
            <button onClick={handleLogout} className="dashnavbtn">
              Back to Home
           </button></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
