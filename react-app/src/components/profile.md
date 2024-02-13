import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ handleLogout, handleUpdateProfile, userName }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Your form submission logic goes here
  };

  const validateFullName = (value) => {
    // Your validation logic for full name goes here
  };

  const validateBio = (value) => {
    // Your validation logic for bio goes here
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary">Welcome, {userName}</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src={require("../assets/img/userprofile1.png")}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </div>
        </div>
        <div className="col-md-9 personal-info">
          
          <form className="form-horizontal" role="form" onSubmit={onSubmit}>
            {/* ... your existing code ... */}
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Options
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="#" onClick={handleUpdateProfile}>
                      Update Profile
                    </Link>
                    <Link className="dropdown-item" to="#" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;



import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = ({ handleLogout, handleUpdateProfile, userName }) => {
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Your form submission logic goes here
  };

  const validateFullName = (value) => {
    if (!value) {
      return "Full Name is required.";
    }
    // Add any additional validation logic here
    return true;
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    const error = validateFullName(event.target.value);
    if (error) {
      setErrors({ fullName: error });
    } else {
      setErrors({});
    }
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <h1 className="text-primary">Welcome, {userName}</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img
              src={require("../assets/img/userprofile1.png")}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </div>
        <div className="col-md-9 personal-info">
          <h3>Personal info</h3>
          <form className="form-horizontal" role="form" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="col-lg-3 control-label">Full Name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">User name:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="user name"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 class="panel-title">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label class="col-sm-2 control-label">Current password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label class="col-sm-2 control-label">New password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <div class="checkbox">
                      <input type="checkbox" id="checkbox_1" />
                      <label for="checkbox_1">Make this account public</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button type="submit" className="btn btn-default">
                      Submit
                    </button>
      
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;