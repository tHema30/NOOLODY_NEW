import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

// const thTdStyle = {
//   border: '1px solid #dddddd',
//   textAlign: 'left',
//   padding: '8px',
// };

const buttonStyle = {
  marginRight: '5px',
  
};

const TailorsDetails = () => {
  const [tailors, setTailors,] = useState([]);

  const handleEdit = (Id) => {
    console.log(`Edit tailor with ID: ${Id}`);
    // Add logic for navigation or editing
  };

  const handleDelete = (Id) => {
    axios.delete(`http://localhost:7300/api/admin/tailorsProfile/${Id}`)
      .then(response => {
        console.log('Tailor deleted successfully:', response.data);
        // Update the state or fetch data again to reflect the changes
      })
      .catch(error => {
        console.error('Error deleting tailor:', error);
      });
  };

  const handleVerify = (Id) => {
    axios.put(`http://localhost:7300/api/admin/tailorsProfile/${Id}`)
      .then(response => {
        console.log('Tailor verified successfully:', response.data);
        setTailors(prevTailors => {
          return prevTailors.map(tailor => {
            if (tailor._id === Id) {
              return { ...tailor, verified: true };
            }
            return tailor;
          });
        });
      })
      .catch(error => {
        console.error('Error verifying tailor:', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:7300/api/admin/tailorsProfile', 
    { withCredentials: true })
      .then(response => {
        console.log('Response data:', response.data);
        // Ensure each row has a unique id property
        const tailorsWithId = response.data.data.map(tailor => ({ ...tailor, id: tailor._id }));
        setTailors(tailorsWithId);
      })
      .catch(error => {
        console.error('Error fetching tailor details:', error);
      });
  }, []);


const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'experience', headerName: 'Experience', width: 150 },
  { field: 'contact', headerName: 'Contact', width: 150 },
  { field: 'occupation', headerName: 'Occupation', width: 150 },
  { field: 'idnumber', headerName: 'ID Number', width: 150 },
  {
    field: 'dob',
    headerName: 'DOB',
    width: 150,
    valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
  },
  { field: 'gender', headerName: 'Gender', width: 150 },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    valueFormatter: ({ value }) => (value ? 'Yes' : 'No'),
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
          onClick={() => handleEdit(params.row._id)} // use arrow function to bind component method
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          style={buttonStyle}
          onClick={() => handleDelete(params.row._id)} // use arrow function to bind component method
        >
          Delete
        </Button>
        {!params.row.verified && (
          <Button
            variant="contained"
            color="success"
            style={buttonStyle}
            onClick={() =>handleVerify(params.row._id)} // use arrow function to bind component method
          >
            Verify
          </Button>
        )}
 
      </>
    ),
  },
];


  return (
    <div className='userlist'>
      <h1>Tailors Details</h1>
      <div style={tableStyle}>
        <DataGrid
          rows={tailors}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default TailorsDetails;
