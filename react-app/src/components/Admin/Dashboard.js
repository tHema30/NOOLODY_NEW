import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

function Dashboard() {
  const [users, setUsers] = useState([null]);
  const [tailors, setTailors] = useState([null]);
  const [orders, setOrders] = useState([null]); 
  const [serviceDetails, setServiceDetails] = useState([null]);
  const [dressDesigns, setDressDesigns] = useState([null]);



  useEffect(() => {
    // Fetch user data
    axios.get('http://localhost:7300/api/admin/all-users',
    {withCredentials:true})
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
      

      axios.get('http://localhost:7300/api/users/ServicesDetails',
      {withCredentials:true})
        .then(response => {
          setServiceDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
        

      
    // Fetch mechanic data
    axios.get('http://localhost:7300/api/admin/tailorsProfile', {withCredentials:true})
      .then(response => {
        setTailors(response.data);
      })
      .catch(error => {
        console.error('Error fetching tailors data:', error);
      });

      axios.get('http://localhost:7300/api/designs/dress-designs/',
      {withCredentials:true})
      .then(response => {
        setDressDesigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });




    // Fetch order data
    axios.get('http://localhost:7300/api/admin/all-orders', {withCredentials:true})
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching order data:', error);
        
      });
  }, []); // Empty dependency array means this effect will run once after the initial render
  return (
    <div className="footer-container" style={{marginLeft:"30px"}}>
    <div className="card3">
        <div className="card-content3">
          <h1>User Details</h1>
          <p>{users? users.length : 'Loading...'}</p>
          <p><i class="bi bi-people-fill "></i></p>
        </div>
      </div>
      {/* <div className="card3">
        <div className="card-content3">
          <h1>Tailors Details</h1>
          <p>{tailors ? tailors.length : 'Loading...'}</p>
          <p><i class="bi bi-shop"></i></p>
        </div> */}
      {/* </div> */}
      <div className="card3">
        <div className="card-content3">
          <h1>service Details</h1>
          <p>{serviceDetails ? serviceDetails.length : 'Loading...'}</p>
          <p><i class="bi bi-shop"></i></p>
        </div>
      </div>
      <div className="card3">
        <div className="card-content3">
          <h1>Design Details</h1>
          <p>{dressDesigns ? dressDesigns.length : 'Loading...'}</p>
          <p><i class="bi bi-palette-fill"></i></p>
        </div>
      </div>
      <div className="card3">
        <div className="card-content3">
          <h1>Order Details</h1>
          <p>{orders ? orders.length : 'Loading...'}</p>
          <p><i class="bi bi-cart-check"></i></p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
