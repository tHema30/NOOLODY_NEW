import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';



const buttonStyle = {
  marginRight: "5px",


};

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateData, setUpdateData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);


  useEffect(() => {
    // Fetch all users when the component mounts
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/admin/all-users`, { withCredentials: true })
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdateData({ name: user.name, email: user.email, id: user._id }); // assuming user has name and email properties
    setIsEditMode(true);
  };

  const handleUpdate = () => {
    if (!selectedUser || isCreateMode) {
      const newUser = {
        name: updateData.name,
        email: updateData.email,
        id: updateData.id,
      };

   axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/`, newUser , { withCredentials: true }
   )
        .then(response => {
          const updatedUsers = [...users, response.data.user];
          setUsers(updatedUsers);
          setSelectedUser(response.data.user);
          setUpdateData({});
          setIsCreateMode(false);
        })
        .catch(error => console.error('Error creating user:', error));

      return;
    }

    const updatedFields = {
      name: updateData.name,
      email: updateData.email,
    };

    axios.put(`${process.env.REACT_APP_SERVER_URL}/api/admin/all-users/${selectedUser.id}`, updatedFields,{withCredentials:true})
      .then(response => {
        const updatedUsers = users.map(u => (u._id === selectedUser._id ? response.data.user : u));
        setUsers(updatedUsers);
        setSelectedUser(null);
        setUpdateData({});
        setIsEditMode(false);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const handleDelete = (userId) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/admin/profile${userId}`)
      .then(response => {
        const updatedUsers = users.filter(u => u._id !== userId);
        setUsers(updatedUsers);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 350 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => (
        <div>
          <button  style={buttonStyle} onClick={() => handleEdit(params.row)}>Edit</button>
          <Button  style={buttonStyle}  variant="danger"   onClick={() => handleDelete(params.row.id)}>
            Delete
          </Button>
       </div>
      ),
    },
  ];
  
  // Add a map function to assign the _id property to the id property of each row object
  const rows = users.map((user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    // Add other properties as needed
  }));
  
  return (
    <div className='userlist'>
      <h1>User Details</h1>
      <button  className='create-user'   onClick={() => setIsCreateMode(true)}>Create User</button>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        
      </div>
      {isEditMode && (
        <Modal show={isEditMode} onHide={() => setIsEditMode(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={updateData.name || selectedUser?.name || ''}
                  onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={updateData.email || selectedUser?.email || ''}
                  onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsEditMode(false)}>
              Close
            </Button>
            <Button variant="success" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {isCreateMode && (
        <Modal show={isCreateMode} onHide={() => setIsCreateMode(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label> Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={updateData.name || ''}
                  onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="text"
                  value={updateData.password || ''}
                  onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={updateData.email || ''}
                  onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setIsCreateMode(false)}>
              Close
            </Button>
            <Button variant="success" onClick={handleUpdate}>
              Create User
            </Button>
          </Modal.Footer>
        </Modal>
     )}
    </div>
  );
};

export default User;