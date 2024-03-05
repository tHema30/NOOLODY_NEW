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
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data and populate the form
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:7300/api/users/profile', { withCredentials: true });

        const { name, email } = response.data;
        setName(name);
        setEmail(email);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(
        'http://localhost:7300/api/users/profile',
        { name, email, password },
        { withCredentials: true }
      );

      localStorage.setItem('userInfo', JSON.stringify(response.data));
      setTimeout(() => {
        toast.success('Profile updated successfully');
  
        },2000)
     
      console.log('Profile updated:', response.data);
      // // Redirect to home page
      // navigate('/home');
    } catch (error) {
      console.error('Error updating user profile:', error.message);
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

  return (
    <>
    <Header/>
    <div className='profile-form'>
      <h2>Update Profile</h2>
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
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className="update-button" onClick={handleUpdateProfile}>
        Update Profile
      </button>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
     <ToastContainer/>
    </div>

    </>
        

  );
};

export default ProfileUpdate;
