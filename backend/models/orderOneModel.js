import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  
  measurements: {
    chest: String,
    waist: String,
    hips: String,
  },
  orderDetails: {
    preferredAppointmentDate: Date,
    preferredAppointmentTime: String,
    material: String,
    orderDetails: String,
  },
  stitchingDetails: {
    firstName: String,
    lastName: String,
    streetAddress: String,
    city: String,
    postcode: String,
    phone: String,
    style:{
      public_id: { type:String },
      url: { type:String}
   },
   
  
  },
});

const Order = mongoose.model('Order', orderSchema);

export default  Order;
