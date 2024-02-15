import React,{Fragment,useEffect, useState} from "react";
import { Button,InputGroup } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import Table from 'react-bootstrap/Table';



const Service= ({ match }) => {
  const [ServiceDetails, setServiceDetails] = useState([]); // Initialize ServiceDetails as an empty array
  const [newname, setnewname] = useState("");
  const [newtype, setnewtype] = useState("");
  const [newcategory, setnewcategory] = useState("");
  const [newdescription, setnewdescription] = useState("");
  const [newimage, setnewimgae] = useState("")

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => 
  {
     try 
     {
         const response = await fetch('http://localhost:7300/api/users/ServicesDetails',{ credentials: 'include'});
          const data = await response.json(); 
          setServiceDetails(data); 
        } 
        catch (error) 
        { console.error('Error fetching data:', error); } };

  return(
    <>

     
          
<Table responsive="sm">
  
            <thead>
              <tr>
                <th>Name</th>
                <th>type</th>
                <th>category</th>
                <th>description</th>
                <th>image</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {Array.isArray(ServiceDetails) && ServiceDetails.map((ServiceDetails) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={ServiceDetails._id}>
                  <td>{ServiceDetails.name}</td>
                  <td>{ServiceDetails.type}</td>
                  <td>{ServiceDetails.category}</td>
                  <td>{ServiceDetails.description}</td>
                  <td><img src={ServiceDetails.image.url}></img></td>
                  <td>
                    <Button intent='primary'>Update</Button> 
                    <Button  intent="danger"> Delete</Button>
                    </td>

                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td><InputGroup  value={newname}
                onChange={(e) => setnewname(e.target.value)}
                placeholder= 'Enter Name ....'
                /></td>
                <td><InputGroup  value={newtype}
                onChange={(e) => setnewtype(e.target.value)}
                placeholder= 'Enter Type ....'
                /></td>
                   <td><InputGroup  value={newcategory}
                onChange={(e) => setnewcategory(e.target.value)}
                placeholder= 'Enter category ....'
                /></td>
                   <td><InputGroup  value={newdescription}
                onChange={(e) => setnewdescription(e.target.value)}
                placeholder= 'Enter description ....'
                /></td>
                  <td><InputGroup  value={newimage}
                onChange={(e) => setnewimgae(e.target.value)}
                placeholder= 'Enter image ....'
                /></td>
                <td>
                  <Button intent='success'>Add Service</Button>
                </td>
              </tr>
            </tfoot>

          </Table>
                      
         

         
         
         
  
   

    </>
  )
}

export default Service;