import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

// const thTdStyle = {
//   border: '1px solid #dddddd',
//   textAlign: 'left',
//   padding: '8px',
// };

const buttonStyle = {
  marginRight: "5px",
};

const TailorsDetails = () => {
  const [tailors, setTailors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [tailorId, setTailorId] = useState("");

  console.log(orderId)

  const handleModal = (tailorId) =>{ setShowModal(!showModal); setTailorId(tailorId);};
 


  const handleSubmit = (e)=> {
    e.preventDefault();
    axios
    .post(`${process.env.REACT_APP_SERVER_URL}/api/users/orderhistory`,{tailorId:tailorId,orderId:orderId})
    .then((response) => {
      console.log("Tailor deleted successfully:", response.data);
      // Update the state or fetch data again to reflect the changes
    })
    .catch((error) => {
      console.error("Error deleting tailor:", error);
    });

    handleModal();
  };



  const handleEdit = (Id) => {
    console.log(`Edit tailor with ID: ${Id}`);
    //setOrderId(Id);
  };

  const handleDelete = (Id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/api/admin/tailorsProfile/${Id}`)
      .then((response) => {
        console.log("Tailor deleted successfully:", response.data);
        // Update the state or fetch data again to reflect the changes
      })
      .catch((error) => {
        console.error("Error deleting tailor:", error);
      });
  };

  const handleVerify = (Id) => {
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/api/admin/tailorsProfile/${Id}`)
      .then((response) => {
        console.log("Tailor verified successfully:", response.data);
        setTailors((prevTailors) => {
          return prevTailors.map((tailor) => {
            if (tailor._id === Id) {
              return { ...tailor, verified: true };
            }
            return tailor;
          });
        });
      })
      .catch((error) => {
        console.error("Error verifying tailor:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/admin/tailorsProfile`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Response data:", response.data);
        // Ensure each row has a unique id property
        const tailorsWithId = response.data.data.map((tailor) => ({
          ...tailor,
          id: tailor._id,
        }));
        setTailors(tailorsWithId);
      })
      .catch((error) => {
        console.error("Error fetching tailor details:", error);
      });
  }, [tailors]);

  const columns = [
    { field: "name", headerName: "Name", width: 100 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "contact", headerName: "Contact No", width: 150 },
    { field: "occupation", headerName: "Occupation", width: 150 },
    { field: "idnumber", headerName: "NIC Number", width: 150 },
    { field: "experience", headerName: "Experience", width: 100 },
    { field: "address", headerName: "Address", width: 100 },

    {
      field: "dob",
      headerName: "Date of Birth",
      width: 150,
      valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
    },
    { field: "gender", headerName: "Gender", width: 150 },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      valueFormatter: ({ value }) => (value ? "Yes" : "No"),
    },
    {
      field: "active",
      headerName: "Active",
      width: 150,
      valueFormatter: ({ value }) => (value ? "Available" : "Not Available"),
    },

    {
      field: "actions",
      headerName: "Actions",
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
          <Button
            variant="contained"
            color="success"
            style={buttonStyle}
            onClick={() => handleModal(params.row._id)} // use arrow function to bind component method
          >
            Asign
          </Button>
          {!params.row.verified && (
            <Button
              variant="contained"
              color="success"
              style={buttonStyle}
              onClick={() => handleVerify(params.row._id)} // use arrow function to bind component method
            >
              Verify
            </Button>
          )}

          <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Order form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Form inside the modal */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    value={orderId}
                    onChange={(e)=>setOrderId(e.target.value)}
                
                  />
                </Form.Group>
                <Button
                  variant="contained"
                  color="success"
                  style={buttonStyle}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="error" onClick={handleModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
  
  ];

  return (
    <div className="userlist">
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
