import axios from  "axios";
import React,{useState} from "react";
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin/CreateService.css'




const  CreateService = () => {
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [description,setdescription] = useState('');
    const [image, setimage] = useState(null);
    const navigate = useNavigate();
    const handleUpload =  async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('category',category);
        formData.set('description',description);
        formData.set('image', image);
        try {
          const response = await axios.post('http://localhost:7300/api/users/ServicesDetails',formData,
           { headers: {
              "Content-Type": 'multipart/form-data',
            }
          }
          );console.log(response);
          if (response.status===201) {
            toast.success("Upload successful!");
            navigate('/admin');
            // ...
          } else {
            toast.error("Upload failed.");
            // Display error message to user
            // ...
          }
        } catch (error) {
          toast.error("Error uploading: " + error);
          // Display error message to user
          // ...
        }
}
return (
    
    <div className="servicepage">
    <div className="ventor-form">
    <form onSubmit={handleUpload}>
      <h1> ServiceDetail from</h1> 
      <label htmlFor="name">ServiceDetail name:</label>
      <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)}name="name" required />
      <label htmlFor="category">Service Category:</label>
      <input type="text" id="category" value={category} onChange={(e)=> setcategory(e.target.value)} name="category" required />
      <label htmlFor="description">Service Description:</label>
      <input type="text" id="description" value={description} onChange={(e)=> setdescription(e.target.value)} name="description" required />
      <label htmlFor="image">ServiceDetail image:</label>
      <input type="file" id="image" onChange={(e)=> setimage(e.target.files[0])} accept="image/*" name="image" required />
      <button type="submit">
        Upload
      </button>
      </form>
    </div>
    </div>
    
)
};
export default CreateService;