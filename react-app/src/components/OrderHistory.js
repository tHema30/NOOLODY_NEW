import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

const OrderHistory = () => {
 
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(false);

 

  useEffect(()=>{
    fetchOrderHistory();
  },[])


  

  const fetchOrderHistory = async () => {
  
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:7300/api/users/orderhistory/id', {
        withCredentials: true,
      });

      const userOrderHistory = response.data.orderHistory || [];
      setOrderHistory(userOrderHistory.orderHistory);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching order history:', error);
      // Handle the error as needed
    } finally {
      setLoading(false);
    }
  };
  console.log(orderHistory);

  return (
    <>
       <Header/>
    <div>
        <div>
          {loading ? (
            <p>Loading...</p>
            
          ) : (
            <div style={{marginTop:"120px"}} className='oo1'>
             

              <h3>Order History</h3>
              {Array.isArray(orderHistory) && orderHistory.map((order, index)  => (
              
                <div key={order.orderId._id}  className='oo2 smallcard'>
                  <p>Order ID: {order.orderId._id}</p>
                  <p>Preferred Date: {order.orderId.orderDetails.preferredDate}</p>
                  <p>Material: {order.orderId.orderDetails.material}</p>
                  <p>Order Details:{order.orderId.orderDetails.orderDetails}</p>
                  <p>Chest:{order.orderId.measurements.chest}</p>
                  <p>Hips:{order.orderId.measurements.hips}</p>
                  <p>Waist:{order.orderId.measurements.waist}</p>
                  {/* <p>Style:{order.orderId.stitchingDetails}</p> */}
             
                  
                </div>
              ))}
            </div>
          )}
        </div>  
    </div>
    <Footer/>
    </>
  );
};

export default OrderHistory;
