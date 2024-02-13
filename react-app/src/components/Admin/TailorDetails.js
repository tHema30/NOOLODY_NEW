import axios from 'axios';
import React, { useState, useEffect } from 'react';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thTdStyle = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px',
};

const buttonStyle = {
  marginRight: '5px',
};

const TailorsDetails = () => {
  const [tailors, setTailors] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:7300/api/admin/tailorsProfile')
      .then(response => {
        console.log('Response data:', response.data);
        setTailors(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching tailor details:', error);
      });
  }, []);

  const handleEdit = (tailorId) => {
    // Add logic to navigate to the edit page or show a modal for editing
    console.log(`Edit tailor with ID: ${tailorId}`);
  };

  const handleDelete = (tailorId) => {
    axios.delete(`http://localhost:7300/api/admin/tailorsProfile/${tailorId}`)
      .then(response => {
        console.log('Tailor deleted successfully:', response.data);
        // Update the state or fetch data again to reflect the changes
      })
      .catch(error => {
        console.error('Error deleting tailor:', error);
      });
  };

  return (
    <div>
      <h1>Tailors Details</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Experience</th>
            <th style={thTdStyle}>Contact</th>
            <th style={thTdStyle}>Occupation</th>
            <th style={thTdStyle}>ID Number</th>
            <th style={thTdStyle}>DOB</th>
            <th style={thTdStyle}>Gender</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tailors && tailors.map((tailor) => (
            <tr key={tailor._id}>
              <td style={thTdStyle}>{tailor.name}</td>
              <td style={thTdStyle}>{tailor.email}</td>
              <td style={thTdStyle}>{tailor.experience}</td>
              <td style={thTdStyle}>{tailor.contact}</td>
              <td style={thTdStyle}>{tailor.occupation}</td>
              <td style={thTdStyle}>{tailor.idnumber}</td>
              <td style={thTdStyle}>{new Date(tailor.dob).toLocaleDateString()}</td>
              <td style={thTdStyle}>{tailor.gender}</td>
              <td style={thTdStyle}>
                <button style={buttonStyle} onClick={() => handleEdit(tailor._id)}>Edit</button>
                <button style={buttonStyle} onClick={() => handleDelete(tailor._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TailorsDetails;