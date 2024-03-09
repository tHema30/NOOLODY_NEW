// ProfileUpdate.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import Footer from "./Footer";

const ProfileUpdate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tailor, setTailor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data and populate the form
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:7300/api/users/profile', { withCredentials: true });

        const { name, email } = response.data.user;
        
        setName(name);
        setEmail(email);
        setTailor(response.data.tailor);
        
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (active="") => {
    try {
      const response = await axios.put(
        'http://localhost:7300/api/users/profile',
        { name, email, password,tailor,active },
        { withCredentials: true }
      );

      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast.success('Profile updated successfully');
      setTimeout(() => {
        window.location.reload(true)

  
        },2000)
      
      console.log('Profile updated:', response.data);
      // // Redirect to home page
      // navigate('/home');
    } catch (error) {
      console.error('Error updating user profile:', error);
      toast.error('Error updating profile');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:7300/api/users/logout', {}, { withCredentials: true });

      localStorage.removeItem('userInfo');
      setTimeout(() => {
      navigate('/home');

      },1500)
      toast.success('Logout successful');
      console.log(response);
      console.log('Logout');
    } catch (error) {
      console.error('Error logout:', error);
      toast.error('Error logging out');
    }
  };

  const handleTailor = (e) => {
    setTailor({
      ...tailor,
      [e.target.name]: e.target.value,
    });
  };

  const handleFetchOrderHistory = async () => {
    try {
      const response = await axios.get('http://localhost:7300/api/users/orderhistory/id', {
        withCredentials: true,
      });

      // Assuming the backend route to fetch order details by user ID is '/api/orders/byUserId'
      // Adjust the route based on your actual backend setup

      console.log('Order History:', response.data.orderHistory);
      // Handle the order details as needed, e.g., display them to the user
    } catch (error) {
      console.error('Error fetching order history:', error);
      toast.error('Error fetching order history');
    }
  };


  return (
    <>
    <Header/>
    <div className='profile-form container'>
      <h2>User Profile</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      {/* <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label> */}
      <br />
      <h2>Tailor details</h2>
      <label>
      experience:
        <input type="text" name='experience' value={tailor.experience} onChange={(e) => handleTailor(e)} />
      </label>
      <br/>
      <label>
      contact:
        <input type="text" name='contact' value={tailor.contact} onChange={(e) => handleTailor(e)} />
      </label>
      <br/>
      <label>
      occupation:
        <input type="text" name='occupation' value={tailor.occupation} onChange={(e) => handleTailor(e)} />
      </label>
      <br />
      <label>
       NIC Number:
        <input type="text" name='idnumber' value={tailor.idnumber} onChange={(e) => handleTailor(e)} />
      </label>
      <br />
      <label>
       Date of Birth:
        <input type="text" name='dob' value={tailor.dob} onChange={(e) => handleTailor(e)} />
      </label>
      <br />
      <label>
       Gender:
        <input type="text" name='gender' value={tailor.gender} onChange={(e) => handleTailor(e)} />
      </label>
      <br />
      <label>
      Address:
        <input type="text" name='address' value={tailor.address} onChange={(e) => handleTailor(e)} />
      </label>
      <br/>
      <button className="update-button" onClick={()=>handleUpdateProfile()}>
        Update Profile
      </button>
       
      <button className="logout-button" onClick={handleFetchOrderHistory}>
        Order History
      </button>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      {tailor.active?<button className='btn btn-danger update-button' onClick={()=>handleUpdateProfile(false)}>busy</button>:<button onClick={()=>handleUpdateProfile(true)} className='btn btn-success update-button'>active</button>}
     <ToastContainer/>
    </div>

    </>
        

  );
};

export default ProfileUpdate;
