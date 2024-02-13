import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateData, setUpdateData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);

  useEffect(() => {
    // Fetch all users when the component mounts
    axios.get('http://localhost:7300/api/admin/all-users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setUpdateData({ name: user.name, email: user.email }); // assuming user has name and email properties
    setIsEditMode(true);
  };

  const handleUpdate = () => {
    if (!selectedUser || isCreateMode) {
      const newUser = {
        name: updateData.name,
        email: updateData.email,
      };

      axios.post('http://localhost:7300/api/admin/all-users', newUser)
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

    axios.put(`http://localhost:7300/api/admin/all-users/${users._id}`, updatedFields)
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
    axios.delete(`http://localhost:7300/api/admin/all-users/${userId}`)
      .then(response => {
        const updatedUsers = users.filter(u => u._id !== userId);
        setUsers(updatedUsers);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
           <th>Number</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <div style={{ display: 'flex', alignItems: 'center' , padding: '5px'}}>
                <button onClick={() => handleEdit(user)}>Edit</button>
                {/* <button onClick={() => handleDelete(user._id)}>Delete</button> */}
                <Button variant="danger" onClick={handleDelete (user._id)}>
              Delete
            </Button>
            </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={updateData.firstName || ''}
                  onChange={(e) => setUpdateData({ ...updateData, firstName: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={updateData.lastName || ''}
                  onChange={(e) => setUpdateData({ ...updateData, lastName: e.target.value })}
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
      <button onClick={() => setIsCreateMode(true)}>Create User</button>
    </div>
  );
};

export default User;