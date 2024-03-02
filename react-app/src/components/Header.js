import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import DressDesign from "./DressDesign"; // Assuming DressDesign is in the same directory

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const info =JSON.parse(localStorage.getItem("userInfo"));

  const DropdownMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    
    return (
      <div className="nav-item dropdown">
        <Link
          href="1"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Designs
        </Link>
        <div className="dropdown-menu m-0">
          <Link
            to={`/dresscard/${"ladies"}`}
            className="dropdown-item"
            
          >
            Ladies
          </Link>
          <Link
            to={`/dresscard/${"ladies"}`}
            className="dropdown-item"
            
          >
            Gents
          </Link>
          <Link
            to={`/dresscard/${"ladies"}`}
            className="dropdown-item"
            
          >
            Kids
          </Link>
          <Link
           to={`/dresscard/${"kids"}`}
            className="dropdown-item"
            
          >
            Altering
          </Link>
        </div>
        {selectedCategory && <DressDesign category={selectedCategory} />}
      </div>
    );
  };

  const handleLoginClick = () => {
    // Handle the login logic here
    // Once the user has successfully logged in, set the state variable to true
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Link to="/">
        <img
          src={require("../assets/img/Noolody2.png")}
          alt="logo"
          height="70"
        />
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/home" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About Us
          </Link>
          <Link to="/features" className="nav-item nav-link">
            How It's work
          </Link>
          <Link to="/service" className="nav-item nav-link">
            Services
          </Link>
          <DropdownMenu />
          <Link to="/contact" className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
        <div className="d-none d-lg-flex ms-2">
          {info ? (
            <Link
              to="/profile"
              className="btn  ml-4 "
              
              style={{ color: "#fff" ,backgroundColor:"#492E87"}}
            >{info.name}</Link>
          ) : (
            <Link
              to="/login"
              
            ><button
             className="btn  ml-4 "
              id="login_btn"
              style={{ color: "#fff" ,backgroundColor:"#492E87"}}
            >
              Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
