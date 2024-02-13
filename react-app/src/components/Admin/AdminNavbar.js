// AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import  '../Admin/admin.css'
import '../Admin/User.js'
import '../Admin/TailorDetails.js'
import '../Admin/DressDesignDetails.js'


const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navadmin " >
      <Link className="navbar-brand" to="/admin">
        Admin Dashboard
      </Link>
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
        <ul className="navbar-nav me-auto">
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
            <Link to="/admin/logout" >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
