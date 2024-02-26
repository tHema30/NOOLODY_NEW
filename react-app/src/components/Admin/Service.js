import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const Service = ({ match }) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    try {
      const response = await axios.get("http://localhost:7300/api/users/ServicesDetails", { withCredentials: true });
      
      // Add a unique 'id' field to each row
      const rowsWithIds = response.data.map((row) => ({ ...row, id: row._id }));
      
      setServiceDetails(rowsWithIds);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img src={params.value.url} style={{ maxWidth: "100px", maxHeight: "100px" }} alt="Service Image" />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button intent="primary">Update</Button>
          <Button intent="danger">Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={serviceDetails}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        checkboxSelection
        disableSelectionOnClick
      />

      <div>
        <InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter Name ...." />
        <InputGroup value={newType} onChange={(e) => setNewType(e.target.value)} placeholder="Enter Type ...." />
        <InputGroup value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Enter Category ...." />
        <InputGroup value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Enter Description ...." />
        <InputGroup value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Enter Image ...." />
        <Button intent="success">Add Service</Button>
      </div>
    </div>
  );
};

export default Service;
