import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form,  Modal} from "react-bootstrap"; // Import Bootstrap components


const buttonStyle = {
  marginRight: "8px",

};

  const serviceStyle ={
   width:"10%",
   marginLeft:"1600px"
  }

const Service = ({ match }) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for controlling the modal
  const [selectedService, setSelectedService] = useState(null); // State to store the selected service for editing
 

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/ServicesDetails`,
       { withCredentials: true });
      
      // Add a unique 'id' field to each row
      const rowsWithIds = response.data.map((row) => ({ ...row, id: row._id }));
      
      setServiceDetails(rowsWithIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = (Id) => {
    axios.delete(`http:////localhost:7300/api/users/ServicesDetails/${Id}`)
      .then(response => {
        console.log('service deleted successfully:', response.data);
        // Update the state or fetch data again to reflect the changes
      })
      .catch(error => {
        console.error('Error deleting tailor:', error);
      });
  };

  const handleEdit = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };



  const handleSaveEdit = async (id) => {
    console.log(selectedService.id);
    try {
      // Implement the logic to update the service on the server
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/users/ServicesDetails/${selectedService.id}`,
        selectedService,{withCredentials:true}
      );
  
      console.log('Service updated successfully:', response.data);
  
      // Close the modal
      setShowModal(false);
  
      // Refresh the service list
      loadService();
    } catch (error) {
      console.error('Error updating service:', error);
      // Handle error as needed
    }
  };

  const columns = [
    { field: "name", headerName: "Name", width: 250 },
    // { field: "type", headerName: "Type", flex: 1 },
    { field: "category", headerName: "Category", width: 300 },
    { field: "description", headerName: "Description", width: 350 },
    {
      field: "image",
      headerName: "Image",
      width: 350,
      renderCell: (params) => (
        <img src={params.value.url} style={{ maxWidth: "100px", maxHeight: "100px" }} alt="Service Image" />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => (
        <div>
          <Button style={buttonStyle} intent="primary" onClick={() => handleEdit (params.row)}>Edit</Button>
          <Button  style={buttonStyle} intent="error" onClick={() => handleDelete(params.row.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="userlist">
       <h1>Service Details</h1>
       <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={serviceDetails}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
      <div>
       <Link to ="/admin/createservice">
        <Button style={serviceStyle} intent="success">Add Service</Button></Link>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service name"
                value={selectedService?.name || ""}
                onChange={(e) =>
                  setSelectedService({
                    ...selectedService,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* Add similar Form.Group for other fields like type, category, description */}
            <Form.Group controlId="formServiceCategory">
  <Form.Label>Category</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter service category"
    value={selectedService?.category || ""}
    onChange={(e) =>
      setSelectedService({
        ...selectedService,
        category: e.target.value,
      })
    }
  />
</Form.Group>

<Form.Group controlId="formServiceDescription">
  <Form.Label>Description</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter service description"
    value={selectedService?.description || ""}
    onChange={(e) =>
      setSelectedService({
        ...selectedService,
        description: e.target.value,
      })
    }
  />
</Form.Group>
<Form.Group controlId="formServiceImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => {
            // Assuming you want to update the image immediately on selection
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedService({
              ...selectedService,
              image: { url: imageUrl },
            });
          }}
        />
        {selectedService?.image && (
          <img
            src={selectedService.image.url}
            style={{ maxWidth: "100px", maxHeight: "100px", marginTop: "5px" }}
            alt="Service Image Preview"
          />
        )}
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Service;
