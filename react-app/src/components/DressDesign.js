import React, { useState } from 'react';
import './DressDesign.css'; // Import your CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DressDesign = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [designImage, setDesignImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setDesignImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (description.length < 50 || !category || !designImage) {
      setErrorMessage('Please fill all fields, and ensure the description is at least 50 characters.');
      return;
    }

    const formData = new FormData();
    formData.append('category', category);
    formData.append('description', description);
    formData.append('designImage', designImage);

    try {
      const response = await fetch('http://localhost:7300/api/designs/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Upload successful!');
      } else {
        setErrorMessage('Upload failed.');
      }
    } catch (error) {
      setErrorMessage('Error uploading: ' + error.message);
    }
  };

  return (
  
    <div className="design-form">
      {/* <h1>Dress Design Upload</h1> */}
      <img src={require('../assets/img/Noolody2.png')} alt="logo" width="350" />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={handleCategoryChange} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} required />

      <label htmlFor="designImage">Design Image:</label>
      <input type="file" id="designImage" onChange={handleImageChange} accept="image/*" required />

      <button type="button-form" onClick={handleUpload}>Upload</button>

      {errorMessage && <div className="error-toast">{errorMessage}</div>}
      {successMessage && <div className="success-toast">{successMessage}</div>}
          <ToastContainer/>

    </div>
  );
};

export default DressDesign;
