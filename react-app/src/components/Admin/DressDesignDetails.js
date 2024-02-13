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

  const buttonStyle = {
    // Define the button style as needed
    // For example, you can set backgroundColor, color, padding, etc.
    backgroundColor: '#492E87',
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
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
    <div className='my-5'>
      <h2>Admin Dress Design List</h2>
      <Table striped bordered hover>
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
              <td>{dressDesign.description}</td>
              <td>
                <img
                  src={dressDesign.designImage.url}
                  alt={dressDesign.category}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </td>
              <td>
                <button style={buttonStyle} onClick={() => handleEdit(dressDesign._id)}>Edit</button>
                <button style={buttonStyle} onClick={() => handleDelete(dressDesign._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DressDesignDetails;
