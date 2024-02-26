import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const DressDesignDetails = ({ onEdit, onDelete }) => {
  const [dressDesigns, setDressDesigns] = useState([]);

  const handleEdit = (id) => {
    // Define the logic for handling edit
    // For example, you can call the onEdit function with the dress design ID
    onEdit(id);
  };
  const buttonStyle = {
    marginRight: '5px',
  };
  
  const handleDelete = (id) => {
    // Define the logic for handling delete
    // For example, you can call the onDelete function with the dress design ID
    onDelete(id);
  };

  const handleVerify = (id) => {
    // Define the logic for handling verification
    console.log(`Dress design with ID ${id} is verified.`);
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

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 200 },
    {
      field: 'designImage',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value.url}
          alt={params.row.category}
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => (
        <>
         <Button
  variant="contained"
  color="secondary"
  style={buttonStyle}
  sx={{ backgroundColor: 'purple' }} // add this line
  onClick={() => this.handleEdit(params.row._id)} // use arrow function to bind component method
>
  Edit
</Button>
<Button
  variant="contained"
  color="secondary"
  style={buttonStyle}
  sx={{ backgroundColor: 'purple' }} // add this line
  onClick={() => this.handleDelete(params.row._id)} // use arrow function to bind component method
>
  Delete
</Button>
{!params.row.verified && (
  <Button
    variant="contained"
    color="secondary"
    style={buttonStyle}
    sx={{ backgroundColor: 'purple' }} // add this line
    onClick={() => this.handleVerify(params.row._id)} // use arrow function to bind component method
  >
    Verify
  </Button>
)}
        </>
      ),
    },
  ];

  const getRowId = (row) => row._id;

  return (
    <div className='userlist'>
      <h2>Admin Dress Design List</h2>
      <DataGrid
        rows={dressDesigns}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        autoHeight
        checkboxSelection
        getRowId={getRowId}
      />
    </div>
  );
};

export default DressDesignDetails;
