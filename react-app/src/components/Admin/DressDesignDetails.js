import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const DressDesignDetails = ({ onEdit, onDelete }) => {
  const [dressDesigns, setDressDesigns] = useState([]);

  const handleEdit = (id) => {
    // Define the logic for handling edit
    // For example, you can call the onEdit function with the dress design ID
    
    onEdit(id);
  };

  const handleDelete = (id) => {
    // Define the logic for handling delete
    // For example, you can call the onDelete function with the dress design ID
    onDelete(id);
  };

  

  useEffect(() => {
    // Fetch dress designs from the server
    axios.get('http://localhost:7300/api/designs/dress-designs/cat', { category: 'ladies' }) // Update the URL with your actual API endpoint
      .then(response => {
        setDressDesigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching dress designs:', error);
      });
  }, []);

  return (
    <div className='userlist'>
      <h2>Admin Dress Design List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(dressDesigns) && dressDesigns.map(dressDesign => (
            <tr key={dressDesign._id}>
              <td>{dressDesign._id}</td>
              <td>{dressDesign.category}</td>
              <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {dressDesign.description}
              </td>
              <td>
                <img
                  src={dressDesign.designImage.url}
                  alt={dressDesign.category}
                  style={{ maxWidth: '50px', maxHeight: '50px' }}
                />
              </td>
              <td>
                <button className="editButton" onClick={() => handleEdit(dressDesign._id)}>Edit</button>
                <button className="deleteButton" onClick={() => handleDelete(dressDesign._id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DressDesignDetails;
