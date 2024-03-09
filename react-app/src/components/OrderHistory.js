import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const OrderHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setShowModal(true);
    fetchOrderHistory();
  };

  const closeModal = () => {
    setShowModal(false);
    setOrderHistory([]);
  };

  const fetchOrderHistory = async () => {
  
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:7300/api/users/orderhistory/id', {
        withCredentials: true,
      });

      const userOrderHistory = response.data.orderHistory || [];
      setOrderHistory(userOrderHistory);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching order history:', error);
      // Handle the error as needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={openModal}>
        Open Order History
      </Button>

      <Modal show={showModal} onHide={closeModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User and Order History Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <p>Loading...</p>
            
          ) : (
            <div>
              <h3>User Details</h3>
              <p>Name: {orderHistory.name}</p>
              <p>Email: {orderHistory.email}</p> 

              <h3>Order History</h3>
              {Array.isArray(orderHistory) && orderHistory.map((order, index)  => (
               
                <div key={index}>
                  <p>Order ID: {order.orderId._id}</p>
                  <p>Preferred Date: {order.orderId.orderDetails.preferredDate}</p>
                  <p>Material: {order.orderId.orderDetails.material}</p>
             
                  <hr />
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderHistory;
