import mongoose from "mongoose";
const tailorsOrderSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
   Email: {
        type:String,
        required: true
    },
   
    contactNumber: {
        type:Number,
        required: true
    },
    sizes: {
        type:String,
        required: true
    },
  
    style: { 
    public_id: { type: String },
       url: { type: String },

  },
   
    material: {
        type: String,
        required: true
    },
    OrderDetails: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
  
},{
    timestamps: true
});
const tailorsOrder = mongoose.model('tailorsorder',tailorsOrderSchema);
export {tailorsOrder};