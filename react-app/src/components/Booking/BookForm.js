import React, { useState } from 'react';
import '../Booking/BookForm.css';

const BookForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    chest: false,
    waist: false,
    hips: false,
    neck: false,
    shoulderWidth: false,
    sleeveLength: false,
    inseam: false,
    outseam: false,
    bust: false,
    waistWomen: false,
    hipsWomen: false,
    neckWomen: false,
    shoulderWidthWomen: false,
    sleeveLengthWomen: false,
    inseamWomen: false,
    outseamWomen: false,
    clothingType: '',
    fabricPreference: '',
    colorPreference: '',
    designDetails: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send data to a server, etc.)
    console.log('Form submitted:', formData);
    // Add your logic for form submission here
  };

  return (
    <div className="tailor-form">
      <h1>Tailor Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <textarea name="address" rows="3" value={formData.address} onChange={handleChange} required></textarea>

        {/* Appointment Details */}
        <label htmlFor="preferredDate">Preferred Appointment Date:</label>
        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required />

        <label htmlFor="preferredTime">Preferred Appointment Time:</label>
        <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} required />

        {/* Clothing Measurements */}
        <h2>Clothing Measurements</h2>

        {/* For Men */}
        <div className="measurement-group">
          <h3>For Men</h3>
          <label>
            <input type="checkbox" name="chest" checked={formData.chest} onChange={handleChange} />
            Chest
          </label>

          <label>
            <input type="checkbox" name="waist" checked={formData.waist} onChange={handleChange} />
            Waist
          </label>

          {/* Add more measurement checkboxes for men as needed */}
        </div>

        {/* For Women */}
        <div className="measurement-group">
          <h3>For Women</h3>
          <label>
            <input type="checkbox" name="bust" checked={formData.bust} onChange={handleChange} />
            Bust
          </label>

          <label>
            <input type="checkbox" name="waistWomen" checked={formData.waistWomen} onChange={handleChange} />
            Waist
          </label>

          {/* Add more measurement checkboxes for women as needed */}
        </div>

        {/* Specific Requirements */}
        <h2>Specific Requirements</h2>
        <label htmlFor="clothingType">Type of Clothing:</label>
        <input type="text" name="clothingType" value={formData.clothingType} onChange={handleChange} />

        <label htmlFor="fabricPreference">Fabric Preference:</label>
        <input type="text" name="fabricPreference" value={formData.fabricPreference} onChange={handleChange} />

        <label htmlFor="colorPreference">Color Preference:</label>
        <input type="text" name="colorPreference" value={formData.colorPreference} onChange={handleChange} />

        <label htmlFor="designDetails">Any Specific Design Details:</label>
        <input type="text" name="designDetails" value={formData.designDetails} onChange={handleChange} />

        <label htmlFor="additionalComments">Additional Comments/Requests:</label>
        <textarea name="additionalComments" rows="3" value={formData.additionalComments} onChange={handleChange}></textarea>

        {/* Submit Button */}
        <button type="submit">Submit Appointment Request</button>
      </form>
    </div>
  );
};

export default BookForm;
