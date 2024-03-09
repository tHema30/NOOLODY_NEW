import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [{ name: String, quantity: Number, price: Number }],
  totalAmount: Number,
});

const OrderPayment = mongoose.model('OrderPayment', orderSchema);

export default OrderPayment;
