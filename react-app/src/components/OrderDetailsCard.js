// OrderDetailCard.js

import React from 'react';

const OrderDetailCard = ({ order }) => {
  return (
    <div className="order-card">
      <h4>Order ID: {order.orderId._id}</h4>
      <p>Preferred Date: {order.orderId.orderDetails.preferredDate}</p>
      <p>Material: {order.orderId.orderDetails.material}</p>
      <p>Measurements - Chest: {order.orderId.measurements.chest}, Waist: {order.orderId.measurements.waist}, Hips: {order.orderId.measurements.hips}</p>
      <hr />
    </div>
  );
};

export default OrderDetailCard;
