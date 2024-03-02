import React, { useEffect, useState } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Link } from "react-router-dom";

const Service = ({ match }) => {
  const [serviceDetails, setServiceDetails] = useState([]);
 

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    try {
      const response = await axios.get("http://localhost:7300/api/users/ServicesDetails",
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
          <Button intent="primary">Edit</Button>
          <Button intent="error" onClick={() => handleDelete(params.row.id)}>Delete</Button>
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
       <Link to ="/admin/createservice">
        <Button intent="success">Add Service</Button></Link>
      </div>
    </div>
  );
};

export default Service;
