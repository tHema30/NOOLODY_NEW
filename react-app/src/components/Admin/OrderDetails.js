import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin/admin.css';






function OrderDetails() {
  const [orders, setOrders] = useState([]);

  const handleEdit = () => {
    // Logic for handling edit
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    // Logic for handling delete
    console.log('Delete button clicked');
  };

  const handleVerify = () => {
    // Logic for handling verify
    console.log('Verify button clicked');
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/orders/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='userlist'>
      <h2> Order Details</h2>
      <table className='table table-striped'>
        <thead>
            <th>Order ID</th>
            <th>UserID</th>
            <th>paid</th>   
              <th>Chest</th>
              <th>Waist</th>
              <th>Hips</th>
              <th>Order Details</th>
              <th>material</th>
              <th>Time</th>
              <th>Date</th>
              <th>Adress</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>contact</th>
              <th>Postcode</th>
              <th>address</th>
              <th>Photo</th>    
              <th>Action</th>  
           

              
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
               <td>{order._id}</td>
               <td>{order.userId}</td>
               {
                order.isPaid ?(<td> paid</td>):(<td>not paid</td>)
               }
                <td>{order.measurements.chest}</td>
               
                <td>{order.measurements.waist}</td>
                <td>{order.measurements.hips}</td>
                <td>{order.orderDetails.orderDetails}</td>
                <td>{order.orderDetails.material}</td>
                <td>{order.orderDetails.preferredDate}</td>
                <td>{order.orderDetails.preferredTime}</td>
                <td>{order.stitchingDetails.city}</td> {/* Update this line */}
                <td>{order.stitchingDetails.firstName}</td> 
                <td>{order.stitchingDetails.lastName}</td> 
                <td>{order.stitchingDetails.phone}</td> 
                <td>{order.stitchingDetails.postcode}</td>
                <td>{order.stitchingDetails.streetAddress}</td> 
              
                <td>
                {order.stitchingDetails.style && (
                  <img src={order.stitchingDetails.style.url} alt="Style" style={{ width: '100px', height: 'auto' }} />
                )}
              </td>
              <td>
                <button className="btn btn-primary btn-sm mr-2" onClick={handleEdit}>Edit</button>
                {/* <button className="btn btn-primary btn-sm mr-2" onClick={handleDelete}>Assign</button> */}
                <button className="btn btn-success btn-sm" onClick={handleVerify}>Verify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;