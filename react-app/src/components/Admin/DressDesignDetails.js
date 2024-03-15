import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const buttonStyle = {
  marginRight: "5px",
  padding:"5px"
};



const DressDesignDetails = () => {
  const [dressDesigns, setDressDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({
    category: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // Add this line

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Preview the selected image
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleEdit = (designId) => {
    const designToEdit = dressDesigns.find((design) => design._id === designId);
    setSelectedDesign(designToEdit);
    setEditedData({
      category: designToEdit.category,
      price: designToEdit.price,
      description: designToEdit.description,
      designImage: designToEdit.designImage,
    });
    setPreviewImage(designToEdit.designImage?.url || null);
    setEditModalOpen(true);
  };

  const buttonStyle = {
    marginRight: "5px",
  };

  const handleDelete = (id) => {
    // Show a confirmation dialog before proceeding with deletion
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the dress design with ID ${id}?`
    );

    if (isConfirmed) {
      // Perform the delete operation
      axios
        .delete(`http://localhost:7300/api/dress-designs/delete/${id}`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(`Successfully deleted dress design with ID: ${id}`);
          // Update the state or perform any other necessary actions after deletion
        })
        .catch((error) => {
          console.error(`Error deleting dress design with ID: ${id}`, error);
          // Handle error accordingly
        });
    }
  };
  const handleVerify = (id) => {
    // Show a confirmation dialog before proceeding with verification
    const isConfirmed = window.confirm(
      `Are you sure you want to verify the dress design with ID ${id}?`
    );

    if (isConfirmed) {
      // Perform the verification operation
      axios
        .put(
          `http://localhost:7300/api/dress-designs/verify/${id}`,
          { verified: true },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(`Dress design with ID ${id} is successfully verified.`);
          // Update the state or perform any other necessary actions after verification
        })
        .catch((error) => {
          console.error(`Error verifying dress design with ID: ${id}`, error);
          // Handle error accordingly
        });
    }
  };
 
  const handleEditSave = () => {
    console.log(selectedDesign._id);
    axios
      .put(
        `http://localhost:7300/api/designs/dress-designs/edit/${selectedDesign._id}`,
        editedData,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(
          `Successfully updated dress design with ID: ${selectedDesign._id}`
        );
        console.log(response);

        // Close the modal when editing is complete
        setEditModalOpen(false);
      })
      .catch((error) => {
        console.error(
          `Error updating dress design with ID: ${selectedDesign._id}`,
          error
        );
        // Handle error accordingly
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {
    // Fetch dress designs from the server
    axios
      .get("http://localhost:7300/api/designs/dress-designs/", {
        params: { category: "ladies" },
        withCredentials: true,
      })
      .then((response) => {
        setDressDesigns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dress designs:", error);
      });
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 150 },

    { field: "description", headerName: "Description", flex: 1, minWidth: 200 },
    {
      field: "designImage",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value.url}
          alt={params.row.category}
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      ),
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
            sx={{ backgroundColor: "purple" }} // add this line
            onClick={() => handleEdit(params.row._id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            style={buttonStyle}
            // sx={{ backgroundColor: 'purple' }} // add this line
            onClick={() => handleDelete(params.row._id)} // use arrow function to bind component method
          >
            Delete
          </Button>
          {!params.row.verified && (
            <Button
              variant="contained"
              color="success"
              style={buttonStyle}
              // sx={{ backgroundColor: 'purple' }} // add this line
              onClick={() => handleVerify(params.row)} // use arrow function to bind component method
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
    <div className="userlist">
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
      {selectedDesign && (
        <Modal show={editModalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Dress Design</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCategory">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={editedData.category}
                  onChange={handleInputChange}
                />
              </Form.Group>
              a
              <Form.Group controlId="formPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={editedData.price}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={editedData.description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formDesignImage">
                <Form.Label>Design Image:</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      marginTop: "5px",
                    }}
                    alt="Design Image Preview"
                  />
                )}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button  variant="contained"  color="success" onClick={handleEditSave}>
              Save
            </Button>
            <Button variant="contained"   style={buttonStyle} color ='error' onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default DressDesignDetails;
